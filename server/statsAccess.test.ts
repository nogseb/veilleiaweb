import { describe, expect, it } from "vitest";
import type { TrpcContext } from "./_core/context";
import { statsAccessRouter } from "./routers/statsAccess";
import { STATS_SESSION_COOKIE } from "./statsAuth";

function createContext(cookie?: string) {
  const cookies: Array<{ name: string; value: string; options: Record<string, unknown> }> = [];
  const ctx = {
    user: null,
    req: { headers: cookie ? { cookie } : {} },
    res: {
      cookie: (name: string, value: string, options: Record<string, unknown>) => cookies.push({ name, value, options }),
      clearCookie: () => undefined,
    },
  } as TrpcContext;
  return { ctx, cookies };
}

describe("statsAccess.login", () => {
  it("valide le secret configuré via l'endpoint de connexion et crée une session HttpOnly", async () => {
    const suppliedSecret = process.env.STATS_PASSWORD;
    expect(suppliedSecret).toBeTruthy();
    const { ctx, cookies } = createContext();

    await expect(statsAccessRouter.createCaller(ctx).login({ password: suppliedSecret! })).resolves.toEqual({ authenticated: true });
    expect(cookies).toHaveLength(1);
    expect(cookies[0]).toMatchObject({ name: STATS_SESSION_COOKIE, options: { httpOnly: true, secure: true, sameSite: "lax" } });
    expect(cookies[0]?.value).not.toBe(suppliedSecret);
  });

  it("rejette un mot de passe incorrect", async () => {
    const { ctx } = createContext();
    await expect(statsAccessRouter.createCaller(ctx).login({ password: "invalid-password" })).rejects.toMatchObject({ code: "UNAUTHORIZED" });
  });

  it("reconnaît la session signée puis la supprime à la déconnexion", async () => {
    const suppliedSecret = process.env.STATS_PASSWORD!;
    const loginContext = createContext();
    await statsAccessRouter.createCaller(loginContext.ctx).login({ password: suppliedSecret });
    const sessionValue = loginContext.cookies[0]?.value;

    const authenticatedContext = createContext(`${STATS_SESSION_COOKIE}=${sessionValue}`);
    await expect(statsAccessRouter.createCaller(authenticatedContext.ctx).status()).resolves.toEqual({ authenticated: true });
    await expect(statsAccessRouter.createCaller(authenticatedContext.ctx).logout()).resolves.toEqual({ authenticated: false });
  });
});
