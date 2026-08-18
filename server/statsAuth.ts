import { createHmac, timingSafeEqual } from "node:crypto";

export const STATS_SESSION_COOKIE = "__Host-veille_stats";
const SESSION_LIFETIME_MS = 8 * 60 * 60 * 1000;

type StatsSessionPayload = {
  scope: "stats";
  expiresAt: number;
};

function signature(value: string): string {
  const key = process.env.JWT_SECRET;
  if (!key) throw new Error("Stats session signing is unavailable");
  return createHmac("sha256", key).update(value).digest("base64url");
}

export function isStatsPasswordValid(password: string): boolean {
  const expected = process.env.STATS_PASSWORD;
  if (!expected) return false;
  const suppliedBuffer = Buffer.from(password, "utf8");
  const expectedBuffer = Buffer.from(expected, "utf8");
  return suppliedBuffer.length === expectedBuffer.length && timingSafeEqual(suppliedBuffer, expectedBuffer);
}

export function createStatsSession(now = Date.now()): string {
  const payload: StatsSessionPayload = { scope: "stats", expiresAt: now + SESSION_LIFETIME_MS };
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${encoded}.${signature(encoded)}`;
}

export function hasValidStatsSession(cookieHeader?: string, now = Date.now()): boolean {
  const value = cookieHeader?.split(";").map(item => item.trim()).find(item => item.startsWith(`${STATS_SESSION_COOKIE}=`))?.slice(STATS_SESSION_COOKIE.length + 1);
  if (!value) return false;
  const [encoded, suppliedSignature] = value.split(".");
  if (!encoded || !suppliedSignature) return false;

  const expectedSignature = signature(encoded);
  const received = Buffer.from(suppliedSignature, "utf8");
  const expected = Buffer.from(expectedSignature, "utf8");
  if (received.length !== expected.length || !timingSafeEqual(received, expected)) return false;

  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8")) as StatsSessionPayload;
    return payload.scope === "stats" && Number.isFinite(payload.expiresAt) && payload.expiresAt > now;
  } catch {
    return false;
  }
}

export const statsSessionCookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: SESSION_LIFETIME_MS,
};
