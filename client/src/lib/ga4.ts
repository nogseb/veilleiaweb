export const GA4_MEASUREMENT_ID = "G-NZ24YB5E5N";
const GA4_CONSENT_KEY = "tbs_veille_ga4_consent";

export type Ga4Consent = "unknown" | "granted" | "denied";
export const ga4EngagementEvents = ["analyse_ouverte", "source_lue"] as const;
export type Ga4EngagementEvent = (typeof ga4EngagementEvents)[number];

type Ga4EngagementInput = {
  domainCode: string;
  week: number;
  route: "home" | "archives";
  sourcePublisher?: string;
};

export function shouldLoadGa4(consent: Ga4Consent): boolean {
  return consent === "granted";
}

export function buildGa4EngagementParameters(input: Ga4EngagementInput) {
  return {
    domain_code: input.domainCode,
    week_number: input.week,
    content_route: input.route,
    ...(input.sourcePublisher ? { source_publisher: input.sourcePublisher } : {}),
  };
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function readGa4Consent(): Ga4Consent {
  if (typeof window === "undefined") return "unknown";
  const stored = window.localStorage.getItem(GA4_CONSENT_KEY);
  return stored === "granted" || stored === "denied" ? stored : "unknown";
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

function removeGaCookies() {
  if (typeof document === "undefined") return;
  const suffix = GA4_MEASUREMENT_ID.replace(/^G-/, "");
  for (const name of ["_ga", `_ga_${suffix}`]) {
    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
  }
}

export function applyGa4Consent(consent: Exclude<Ga4Consent, "unknown">) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(GA4_CONSENT_KEY, consent);

  if (!shouldLoadGa4(consent)) {
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
    removeGaCookies();
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = gtag;
  window.gtag("consent", "default", { analytics_storage: "denied" });

  if (!document.getElementById("ga4-script")) {
    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("config", GA4_MEASUREMENT_ID);
}

/** Envoie uniquement des taxonomies éditoriales, jamais d'URL source ni de donnée personnelle. */
export function trackGa4Engagement(eventName: Ga4EngagementEvent, input: Ga4EngagementInput): boolean {
  if (typeof window === "undefined" || readGa4Consent() !== "granted" || !window.gtag) return false;
  window.gtag("event", eventName, buildGa4EngagementParameters(input));
  return true;
}
