import type { Request, Response } from "express";
import { purgeExpiredAnalytics } from "./analytics";
import { sdk } from "./_core/sdk";

/**
 * Endpoint Heartbeat uniquement. La plateforme authentifie l'appel planifié ;
 * aucun champ fourni par le body ne détermine le périmètre de purge.
 */
export async function runAnalyticsRetention(req: Request, res: Response) {
  try {
    const user = await sdk.authenticateRequest(req);
    if (!user.isCron || !user.taskUid) {
      return res.status(403).json({ error: "cron-only" });
    }

    const result = await purgeExpiredAnalytics();
    return res.json({ ok: true, taskUid: user.taskUid, ...result, timestamp: new Date().toISOString() });
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : "analytics-retention-failed",
      timestamp: new Date().toISOString(),
    });
  }
}
