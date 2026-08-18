import { z } from "zod";
import { ANALYTICS_LEVEL2_ENABLED, analyticsChannels, analyticsEventNames, analyticsRoutes } from "../../shared/analytics";
import { getAnalyticsSnapshot, purgeExpiredAnalytics, recordAnalyticsEvent } from "../analytics";
import { adminProcedure, publicProcedure, router } from "../_core/trpc";

const cleanToken = z.string().min(1).max(96).regex(/^[A-Za-zÀ-ÿ0-9 .,&/()_-]+$/);
const utmToken = z.string().min(1).max(96).regex(/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/);

const analyticsEventInput = z.object({
  eventId: z.string().uuid(),
  name: z.enum(analyticsEventNames),
  occurredAt: z.number().int().positive(),
  collectionMode: z.enum(["aggregate", "consented_session"]).optional(),
  sessionKey: z.string().uuid().optional(),
  week: z.number().int().min(1).max(53).optional(),
  route: z.enum(analyticsRoutes).optional(),
  domainCode: cleanToken.max(48).optional(),
  sourcePublisher: cleanToken.max(96).optional(),
  target: cleanToken.max(48).optional(),
  utmSource: utmToken.max(64).optional(),
  utmMedium: utmToken.max(64).optional(),
  utmCampaign: utmToken.max(96).optional(),
  engagementMs: z.number().int().min(0).max(30 * 60 * 1000).optional(),
}).strict();

export const analyticsRouter = router({
  status: publicProcedure.query(() => ({
    level1Enabled: true,
    level2Enabled: ANALYTICS_LEVEL2_ENABLED,
  })),
  collect: publicProcedure.input(analyticsEventInput).mutation(({ input, ctx }) =>
    recordAnalyticsEvent(input, ctx.req.headers.referer),
  ),
  dashboard: adminProcedure.input(z.object({ days: z.number().int().min(1).max(365).default(30) }).optional())
    .query(({ input }) => getAnalyticsSnapshot(input?.days ?? 30)),
  purge: adminProcedure.mutation(() => purgeExpiredAnalytics()),
  allowedChannels: adminProcedure.query(() => analyticsChannels),
});
