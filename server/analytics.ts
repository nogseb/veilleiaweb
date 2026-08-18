import { desc, eq, gte, lt, sql } from "drizzle-orm";
import { createHash } from "node:crypto";
import { analyticsDaily, analyticsEvents } from "../drizzle/schema";
import { ANALYTICS_LEVEL2_ENABLED, type AnalyticsChannel, type PublicAnalyticsEvent } from "../shared/analytics";
import { getDb } from "./db";

const MAX_EVENT_AGE_MS = 24 * 60 * 60 * 1000;
const MAX_FUTURE_SKEW_MS = 5 * 60 * 1000;
const EVENT_RETENTION_DAYS = 90;
const DAILY_RETENTION_MONTHS = 25;

type AnalyticsInput = PublicAnalyticsEvent;

function toUtcDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function monthCutoff(months: number): string {
  const date = new Date();
  date.setUTCMonth(date.getUTCMonth() - months);
  return toUtcDay(date);
}

function cleanLabel(value: string | undefined, maxLength: number): string | undefined {
  if (!value) return undefined;
  const normalized = value.trim().replace(/\s+/g, " ").slice(0, maxLength);
  if (!normalized || /https?:\/\/|www\.|@/i.test(normalized)) return undefined;
  return /^[A-Za-zÀ-ÿ0-9 .,&/()_-]+$/.test(normalized) ? normalized : undefined;
}

function cleanUtm(value: string | undefined, maxLength: number): string | undefined {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase().slice(0, maxLength);
  return /^[a-z0-9][a-z0-9._-]*$/.test(normalized) ? normalized : undefined;
}

export function classifyReferrer(referrer: string | string[] | undefined, utmMedium?: string): AnalyticsChannel {
  if (utmMedium === "email") return "email";
  if (!referrer || Array.isArray(referrer)) return "direct";

  try {
    const host = new URL(referrer).hostname.toLowerCase();
    if (/(google|bing|duckduckgo|yahoo|qwant|ecosia)\./.test(host)) return "search";
    if (/(linkedin|facebook|instagram|x\.com|twitter|youtube|tiktok|threads)\./.test(host)) return "social";
    if (/(veilleiaweb\.digital|manus\.space|manus\.computer)$/.test(host)) return "internal";
    return "partner";
  } catch {
    return "unknown";
  }
}

export function buildAnalyticsDailyKey(input: {
  day: string;
  name: string;
  week?: number;
  route?: string;
  domainCode?: string;
  sourcePublisher?: string;
  target?: string;
  referrerChannel: string;
  collectionMode: string;
}): string {
  return [
    input.day,
    input.name,
    input.week ?? "_",
    input.route ?? "_",
    input.domainCode ?? "_",
    input.sourcePublisher ?? "_",
    input.target ?? "_",
    input.referrerChannel,
    input.collectionMode,
  ].join("|");
}

export async function recordAnalyticsEvent(input: AnalyticsInput, referrer: string | string[] | undefined) {
  const db = await getDb();
  if (!db) throw new Error("Database unavailable");

  const existing = await db.select({ id: analyticsEvents.id })
    .from(analyticsEvents)
    .where(eq(analyticsEvents.eventId, input.eventId))
    .limit(1);

  if (existing.length > 0) return { accepted: true, deduplicated: true, collectionMode: "aggregate" as const };

  const now = new Date();
  const nowMs = now.getTime();
  const occurredAt = new Date(Math.max(nowMs - MAX_EVENT_AGE_MS, Math.min(input.occurredAt, nowMs + MAX_FUTURE_SKEW_MS)));
  const level2Allowed = ANALYTICS_LEVEL2_ENABLED
    && input.collectionMode === "consented_session"
    && Boolean(input.sessionKey);
  const collectionMode = level2Allowed ? "consented_session" as const : "aggregate" as const;
  const utmMedium = cleanUtm(input.utmMedium, 64);
  const normalized = {
    eventId: input.eventId,
    eventName: input.name,
    collectionMode,
    occurredAt,
    week: input.week,
    route: input.route,
    domainCode: cleanLabel(input.domainCode, 48),
    sourcePublisher: cleanLabel(input.sourcePublisher, 96),
    target: cleanLabel(input.target, 48),
    referrerChannel: classifyReferrer(referrer, utmMedium),
    utmSource: cleanUtm(input.utmSource, 64),
    utmMedium,
    utmCampaign: cleanUtm(input.utmCampaign, 96),
    engagementMs: input.engagementMs ? Math.min(Math.max(input.engagementMs, 0), 30 * 60 * 1000) : undefined,
    sessionKeyHash: level2Allowed && input.sessionKey
      ? createHash("sha256").update(input.sessionKey).digest("hex")
      : undefined,
  };
  const day = toUtcDay(occurredAt);
  const dailyKey = buildAnalyticsDailyKey({
    day,
    name: normalized.eventName,
    week: normalized.week,
    route: normalized.route,
    domainCode: normalized.domainCode,
    sourcePublisher: normalized.sourcePublisher,
    target: normalized.target,
    referrerChannel: normalized.referrerChannel,
    collectionMode,
  });

  try {
    await db.transaction(async tx => {
      await tx.insert(analyticsEvents).values(normalized);
      await tx.insert(analyticsDaily).values({
        dailyKey,
        day,
        eventName: normalized.eventName,
        week: normalized.week,
        route: normalized.route,
        domainCode: normalized.domainCode,
        sourcePublisher: normalized.sourcePublisher,
        target: normalized.target,
        referrerChannel: normalized.referrerChannel,
        collectionMode,
        eventCount: 1,
        sessionCount: 0,
      }).onDuplicateKeyUpdate({
        set: {
          eventCount: sql`${analyticsDaily.eventCount} + 1`,
          updatedAt: now,
        },
      });
    });
  } catch (error) {
    const duplicate = await db.select({ id: analyticsEvents.id })
      .from(analyticsEvents)
      .where(eq(analyticsEvents.eventId, input.eventId))
      .limit(1);
    if (duplicate.length > 0) return { accepted: true, deduplicated: true, collectionMode };
    throw error;
  }

  return { accepted: true, deduplicated: false, collectionMode };
}

export async function getAnalyticsSnapshot(days: number) {
  const db = await getDb();
  if (!db) throw new Error("Database unavailable");

  const from = new Date();
  from.setUTCDate(from.getUTCDate() - days + 1);
  const rows = await db.select().from(analyticsDaily)
    .where(gte(analyticsDaily.day, toUtcDay(from)))
    .orderBy(desc(analyticsDaily.day));

  const sum = (predicate: (row: typeof rows[number]) => boolean) =>
    rows.filter(predicate).reduce((total, row) => total + row.eventCount, 0);
  const group = (predicate: (row: typeof rows[number]) => boolean, key: (row: typeof rows[number]) => string) => {
    const map = new Map<string, number>();
    rows.filter(predicate).forEach(row => map.set(key(row), (map.get(key(row)) ?? 0) + row.eventCount));
    return Array.from(map, ([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value);
  };

  const editionViews = sum(row => row.eventName === "edition_view");
  const domainOpens = sum(row => row.eventName === "domain_open");
  const analysisFlips = sum(row => row.eventName === "domain_analysis_flip");
  const sourceClicks = sum(row => row.eventName === "source_click");
  const archiveOpens = sum(row => row.eventName === "archive_edition_open");

  return {
    rangeDays: days,
    level2Enabled: ANALYTICS_LEVEL2_ENABLED,
    generatedAt: new Date(),
    totals: {
      pageViews: sum(row => row.eventName === "page_view"),
      editionViews,
      domainOpens,
      analysisFlips,
      sourceClicks,
      archiveOpens,
      domainOpenRate: editionViews === 0 ? 0 : Number((domainOpens / editionViews).toFixed(3)),
      analysisFlipRate: domainOpens === 0 ? 0 : Number((analysisFlips / domainOpens).toFixed(3)),
      sourceClickRate: domainOpens === 0 ? 0 : Number((sourceClicks / domainOpens).toFixed(3)),
    },
    editions: group(row => row.eventName === "edition_view" && row.week !== null, row => `S${row.week}`),
    domains: group(row => row.eventName === "domain_open" && Boolean(row.domainCode), row => row.domainCode ?? "Inconnu"),
    sources: group(row => row.eventName === "source_click" && Boolean(row.sourcePublisher), row => row.sourcePublisher ?? "Inconnue"),
    channels: group(row => row.eventName === "edition_view", row => row.referrerChannel),
    daily: group(row => row.eventName === "edition_view", row => row.day).sort((a, b) => a.label.localeCompare(b.label)),
  };
}

export async function purgeExpiredAnalytics() {
  const db = await getDb();
  if (!db) throw new Error("Database unavailable");

  const eventCutoff = new Date();
  eventCutoff.setUTCDate(eventCutoff.getUTCDate() - EVENT_RETENTION_DAYS);
  const dailyCutoff = monthCutoff(DAILY_RETENTION_MONTHS);
  const [events, daily] = await Promise.all([
    db.delete(analyticsEvents).where(lt(analyticsEvents.receivedAt, eventCutoff)),
    db.delete(analyticsDaily).where(lt(analyticsDaily.day, dailyCutoff)),
  ]);

  return {
    eventRetentionDays: EVENT_RETENTION_DAYS,
    dailyRetentionMonths: DAILY_RETENTION_MONTHS,
    eventsAffected: events[0].affectedRows,
    dailyAffected: daily[0].affectedRows,
  };
}
