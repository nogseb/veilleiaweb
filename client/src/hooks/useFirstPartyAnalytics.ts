import { trpc } from "@/lib/trpc";
import { ANALYTICS_LEVEL2_REQUIRES_EXPLICIT_CONSENT, type AnalyticsEventName, type AnalyticsRoute } from "@shared/analytics";
import { useCallback, useEffect, useRef } from "react";

type TrackEvent = {
  name: AnalyticsEventName;
  week?: number;
  route?: AnalyticsRoute;
  domainCode?: string;
  sourcePublisher?: string;
  target?: string;
  engagementMs?: number;
};

const LEVEL2_CONSENT_KEY = "tbs_veille_analytics_level2_consent";
const LEVEL2_SESSION_KEY = "tbs_veille_analytics_level2_session";

/**
 * Point d'intégration CMP. Ne pas appeler sans consentement explicite validé
 * par le DPO ; le niveau 2 reste inactif tant que le feature flag serveur vaut false.
 */
export function setAnalyticsLevel2Consent(granted: boolean) {
  localStorage.setItem(LEVEL2_CONSENT_KEY, granted ? "granted" : "denied");
  if (!granted) sessionStorage.removeItem(LEVEL2_SESSION_KEY);
}

function getConsentedSessionKey(enabled: boolean): string | undefined {
  if (!enabled) return undefined;
  if (ANALYTICS_LEVEL2_REQUIRES_EXPLICIT_CONSENT && localStorage.getItem(LEVEL2_CONSENT_KEY) !== "granted") return undefined;
  const existing = sessionStorage.getItem(LEVEL2_SESSION_KEY);
  if (existing) return existing;
  const sessionKey = createEventId();
  sessionStorage.setItem(LEVEL2_SESSION_KEY, sessionKey);
  return sessionKey;
}

function readUtmParameters() {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
  };
}

function createEventId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
}

export function useFirstPartyAnalytics({ route, week, trackEdition = false }: {
  route: AnalyticsRoute;
  week?: number;
  trackEdition?: boolean;
}) {
  const collect = trpc.analytics.collect.useMutation();
  const status = trpc.analytics.status.useQuery(undefined, { staleTime: 5 * 60 * 1000 });
  const hasTrackedPage = useRef(false);

  const track = useCallback((event: TrackEvent) => {
    const sessionKey = getConsentedSessionKey(Boolean(status.data?.level2Enabled));
    collect.mutate({
      eventId: createEventId(),
      occurredAt: Date.now(),
      route,
      week,
      collectionMode: sessionKey ? "consented_session" : "aggregate",
      sessionKey,
      ...readUtmParameters(),
      ...event,
    });
  }, [collect, route, status.data?.level2Enabled, week]);

  useEffect(() => {
    if (hasTrackedPage.current) return;
    if (status.isLoading) return;
    hasTrackedPage.current = true;
    track({ name: "page_view" });
    if (trackEdition && week) track({ name: "edition_view", week });
  }, [status.isLoading, track, trackEdition, week]);

  return { track };
}
