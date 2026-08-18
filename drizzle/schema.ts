import { index, int, mysqlEnum, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const analyticsEventName = mysqlEnum("analytics_event_name", [
  "page_view",
  "edition_view",
  "domain_open",
  "domain_analysis_flip",
  "domain_close",
  "source_click",
  "archive_view",
  "archive_edition_open",
  "timeline_view",
  "navigation_click",
  "consent_state",
]);

export const analyticsCollectionMode = mysqlEnum("analytics_collection_mode", [
  "aggregate",
  "consented_session",
]);

export const analyticsRoute = mysqlEnum("analytics_route", [
  "home",
  "archives",
  "timeline",
  "about",
]);

export const analyticsReferrerChannel = mysqlEnum("analytics_referrer_channel", [
  "direct",
  "search",
  "social",
  "email",
  "partner",
  "internal",
  "unknown",
]);

/**
 * Détail d'événements limité à 90 jours. Aucun IP, URL complète, email, texte
 * libre ni identifiant CRM n'est stocké. La session est nulle tant que le DPO
 * n'a pas validé l'activation du niveau 2.
 */
export const analyticsEvents = mysqlTable("analytics_events", {
  id: int("id").autoincrement().primaryKey(),
  eventId: varchar("event_id", { length: 36 }).notNull(),
  eventName: analyticsEventName.notNull(),
  collectionMode: analyticsCollectionMode.notNull().default("aggregate"),
  occurredAt: timestamp("occurred_at").notNull(),
  receivedAt: timestamp("received_at").defaultNow().notNull(),
  week: int("week", { unsigned: true }),
  route: analyticsRoute,
  domainCode: varchar("domain_code", { length: 48 }),
  sourcePublisher: varchar("source_publisher", { length: 96 }),
  target: varchar("target", { length: 48 }),
  referrerChannel: analyticsReferrerChannel.notNull().default("unknown"),
  utmSource: varchar("utm_source", { length: 64 }),
  utmMedium: varchar("utm_medium", { length: 64 }),
  utmCampaign: varchar("utm_campaign", { length: 96 }),
  engagementMs: int("engagement_ms", { unsigned: true }),
  sessionKeyHash: varchar("session_key_hash", { length: 64 }),
}, table => [
  uniqueIndex("analytics_events_event_id_unique").on(table.eventId),
  index("analytics_events_received_at_idx").on(table.receivedAt),
  index("analytics_events_week_idx").on(table.week),
  index("analytics_events_event_name_idx").on(table.eventName),
]);

/**
 * Agrégats de pilotage. Source de lecture du tableau de bord et conservation
 * prolongée, sans parcours individuel.
 */
export const analyticsDaily = mysqlTable("analytics_daily", {
  id: int("id").autoincrement().primaryKey(),
  dailyKey: varchar("daily_key", { length: 255 }).notNull(),
  day: varchar("day", { length: 10 }).notNull(),
  eventName: analyticsEventName.notNull(),
  week: int("week", { unsigned: true }),
  route: analyticsRoute,
  domainCode: varchar("domain_code", { length: 48 }),
  sourcePublisher: varchar("source_publisher", { length: 96 }),
  target: varchar("target", { length: 48 }),
  referrerChannel: analyticsReferrerChannel.notNull().default("unknown"),
  collectionMode: analyticsCollectionMode.notNull().default("aggregate"),
  eventCount: int("event_count", { unsigned: true }).notNull().default(0),
  sessionCount: int("session_count", { unsigned: true }).notNull().default(0),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
}, table => [
  uniqueIndex("analytics_daily_daily_key_unique").on(table.dailyKey),
  index("analytics_daily_day_idx").on(table.day),
  index("analytics_daily_week_idx").on(table.week),
]);

export type AnalyticsEvent = typeof analyticsEvents.$inferSelect;
export type InsertAnalyticsEvent = typeof analyticsEvents.$inferInsert;
