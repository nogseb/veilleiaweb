import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { createStatsSession, hasValidStatsSession, isStatsPasswordValid, STATS_SESSION_COOKIE, statsSessionCookieOptions } from "../statsAuth";

export const statsAccessRouter = router({
  status: publicProcedure.query(({ ctx }) => ({
    authenticated: hasValidStatsSession(ctx.req.headers.cookie),
  })),
  login: publicProcedure.input(z.object({ password: z.string().min(1).max(256) })).mutation(({ ctx, input }) => {
    if (!isStatsPasswordValid(input.password)) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Mot de passe invalide" });
    }
    ctx.res.cookie(STATS_SESSION_COOKIE, createStatsSession(), statsSessionCookieOptions);
    return { authenticated: true } as const;
  }),
  logout: publicProcedure.mutation(({ ctx }) => {
    ctx.res.clearCookie(STATS_SESSION_COOKIE, { ...statsSessionCookieOptions, maxAge: -1 });
    return { authenticated: false } as const;
  }),
});
