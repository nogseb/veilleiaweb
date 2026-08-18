/** Niveau 2 activé après validation formelle du DPO de TBS Education. */
export const ANALYTICS_LEVEL2_ENABLED = true;

/**
 * La session est uniquement conservée dans sessionStorage, sans cookie persistant,
 * rapprochement CRM ni suivi inter-sites. Cette configuration reflète la validation
 * DPO enregistrée le 18 août 2026 ; repasser à true si un recueil explicite doit
 * être réintroduit par la CMP.
 */
export const ANALYTICS_LEVEL2_REQUIRES_EXPLICIT_CONSENT = false;

export const analyticsEventNames = [
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
] as const;

export const analyticsRoutes = ["home", "archives", "timeline", "about"] as const;
export const analyticsChannels = ["direct", "search", "social", "email", "partner", "internal", "unknown"] as const;

export type AnalyticsEventName = (typeof analyticsEventNames)[number];
export type AnalyticsRoute = (typeof analyticsRoutes)[number];
export type AnalyticsChannel = (typeof analyticsChannels)[number];

export type PublicAnalyticsEvent = {
  eventId: string;
  name: AnalyticsEventName;
  occurredAt: number;
  collectionMode?: "aggregate" | "consented_session";
  sessionKey?: string;
  week?: number;
  route?: AnalyticsRoute;
  domainCode?: string;
  sourcePublisher?: string;
  target?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  engagementMs?: number;
};
