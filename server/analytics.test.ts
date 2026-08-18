import { describe, expect, it } from "vitest";
import { ANALYTICS_LEVEL2_ENABLED } from "../shared/analytics";
import { buildAnalyticsDailyKey, classifyReferrer } from "./analytics";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import { createStatsSession, STATS_SESSION_COOKIE } from "./statsAuth";

describe("analytics first-party", () => {
  it("classe les référents sans stocker leur URL brute", () => {
    expect(classifyReferrer("https://www.google.fr/search?q=veille")).toBe("search");
    expect(classifyReferrer("https://www.linkedin.com/feed/")).toBe("social");
    expect(classifyReferrer("https://www.veilleiaweb.digital/archives")).toBe("internal");
    expect(classifyReferrer(undefined)).toBe("direct");
    expect(classifyReferrer("not a valid url")).toBe("unknown");
  });

  it("priorise le medium UTM email pour l'attribution de campagne", () => {
    expect(classifyReferrer("https://www.google.fr/search?q=veille", "email")).toBe("email");
  });

  it("produit une clé stable pour l'agrégation quotidienne", () => {
    const key = buildAnalyticsDailyKey({
      day: "2026-08-18",
      name: "domain_open",
      week: 34,
      route: "home",
      domainCode: "GOOGLE AI",
      sourcePublisher: undefined,
      target: undefined,
      referrerChannel: "search",
      collectionMode: "aggregate",
    });

    expect(key).toBe("2026-08-18|domain_open|34|home|GOOGLE AI|_|_|search|aggregate");
  });

  it("active le niveau 2 après la validation DPO formelle", () => {
    expect(ANALYTICS_LEVEL2_ENABLED).toBe(true);
  });

  it("expose l'état activé du niveau 2 au client de collecte", async () => {
    const caller = appRouter.createCaller({ user: null, req: { headers: {} }, res: {} } as TrpcContext);
    await expect(caller.analytics.status()).resolves.toEqual({ level1Enabled: true, level2Enabled: true });
  });

  it("refuse le tableau de bord analytics sans session `/stats`", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { headers: {} },
      res: {},
    } as TrpcContext);

    await expect(caller.analytics.dashboard({ days: 7 })).rejects.toMatchObject({ code: "FORBIDDEN" });
  });

  it("autorise les agrégats avec une session `/stats` signée", async () => {
    const session = createStatsSession();
    const caller = appRouter.createCaller({
      user: null,
      req: { headers: { cookie: `${STATS_SESSION_COOKIE}=${session}` } },
      res: {},
    } as TrpcContext);

    const result = await caller.analytics.dashboard({ days: 7 });
    expect(result).toMatchObject({
      totals: expect.objectContaining({ pageViews: expect.any(Number), editionViews: expect.any(Number) }),
      daily: expect.any(Array),
      editions: expect.any(Array),
    });
  });
});
