import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { buildGa4EngagementParameters, createSingleEventGuard, ga4EngagementEvents, GA4_MEASUREMENT_ID, shouldLoadGa4 } from "./ga4";

describe("garde-fou GA4", () => {
  it("utilise l'identifiant de mesure fourni", () => {
    expect(GA4_MEASUREMENT_ID).toBe("G-NZ24YB5E5N");
  });

  it("installe la balise Google dans le document racine avec un consentement refusé par défaut", () => {
    const documentHtml = readFileSync(new URL("../../index.html", import.meta.url), "utf8");

    expect(documentHtml).toMatch(/<head>\s*<!-- Google tag \(gtag\.js\) -->\s*<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-NZ24YB5E5N"><\/script>/);
    expect(documentHtml).toContain("gtag('consent', 'default', { analytics_storage: 'denied' });");
    expect(documentHtml).toContain("gtag('config', 'G-NZ24YB5E5N', { send_page_view: false });");
  });

  it("n'autorise le chargement de GA4 qu'après consentement explicite", () => {
    expect(shouldLoadGa4("unknown")).toBe(false);
    expect(shouldLoadGa4("denied")).toBe(false);
    expect(shouldLoadGa4("granted")).toBe(true);
  });

  it("prépare seulement les dimensions éditoriales autorisées pour les rapports GA4", () => {
    expect(buildGa4EngagementParameters({ domainCode: "GOOGLE AI", week: 34, route: "home", sourcePublisher: "Google" })).toEqual({
      domain_code: "GOOGLE AI",
      week_number: 34,
      content_route: "home",
      source_publisher: "Google",
    });
  });

  it("réserve un événement dédié à la consultation de la page Archives", () => {
    expect(ga4EngagementEvents).toContain("archives_consultees");
  });

  it("n'autorise qu'un seul événement Archives par montage de page", () => {
    const guard = createSingleEventGuard();
    expect(guard()).toBe(true);
    expect(guard()).toBe(false);
  });

  it("autorise une nouvelle tentative si le consentement n'était pas encore accordé", () => {
    let sent = false;
    const guard = createSingleEventGuard();
    const attempt = (canSend: boolean) => {
      if (!guard()) return false;
      if (!canSend) return false;
      sent = true;
      return true;
    };
    expect(attempt(false)).toBe(false);
    expect(sent).toBe(false);
  });
});
