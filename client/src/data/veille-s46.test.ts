import { describe, expect, it } from "vitest";
import { veilleS46 } from "./veille-s46";
import registry from "../../../content/2026-W46/sources.json";
import { readFileSync } from "node:fs";
import { analysisLabel } from "../components/AnalysisModal";

const orderedDomains = [
  "Moteurs de réponse IA", "Zero-click et GEO", "Données structurées et accès des robots",
  "CMS et socle technique", "Data first-party, consentement, navigateurs", "Mesure et attribution",
  "UX conversationnelle et web agentique", "IA en production et gouvernance",
  "Innovation marketing et plateformes publicitaires",
];

describe("Veille S46 — huit domaines, masquage et confidentialité", () => {
  it("respecte la semaine, la fenêtre et l’ordre des catégories retenues", () => {
    expect(veilleS46.week).toBe(46);
    expect(veilleS46.year).toBe(2026);
    expect(veilleS46.domainsTotal).toBe(9);
    expect(veilleS46.publicationDate).toBe("9 novembre 2026");
    expect(veilleS46.collectionWindow).toBe("2 au 9 novembre 2026 inclus");
    expect(registry.publicationDate).toBe("2026-11-09");
    expect(veilleS46.domaines.map(d => d.id)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(registry.maskedDomains.map(d => d.id)).toEqual([9]);
    expect(registry.maskedDomains[0].queries).toHaveLength(3);
    expect(registry.windowStart).toBe("2026-11-02");
    expect(registry.windowEnd).toBe("2026-11-09");
    expect(veilleS46.domaines.map(d => d.id)).toEqual([...veilleS46.domaines.map(d => d.id)].sort((a, b) => a - b));
    for (const d of veilleS46.domaines) expect(d.domainName).toBe(orderedDomains[d.id - 1]);
    expect(new Set(veilleS46.domaines.map(d => d.id)).size).toBe(veilleS46.domaines.length);
    expect(veilleS46.domaines.every(d => d.id >= 1 && d.id <= 9)).toBe(true);
    const mesure = veilleS46.domaines.find(d => d.id === 6);
    if (mesure) expect(analysisLabel(mesure)).toMatch(/^06 —/);
  });
  it("compte uniquement le contenu effectivement présent et les URL uniques", () => {
    expect(veilleS46.domainsCount).toBe(veilleS46.domaines.length);
    expect(registry.domainsCount).toBe(veilleS46.domaines.length);
    expect(veilleS46.sourcesCount).toBe(registry.sources.length);
    expect(registry.sourcesCount).toBe(registry.sources.length);
    expect(registry.domainsTotal).toBe(9);
    expect(registry.sources.map(s => s.id)).toEqual(registry.sources.map((_, i) => i + 1));
    expect(veilleS46.caseStudiesCount).toBe(veilleS46.caseStudies.length);
    expect(veilleS46.caseStudies).toHaveLength(0);
    expect(veilleS46.dashboardDetails.domaines).toHaveLength(veilleS46.domainsCount);
    expect(veilleS46.dashboardDetails.critiques).toHaveLength(veilleS46.criticalCount);
    expect(veilleS46.dashboardDetails.importants).toHaveLength(veilleS46.importantCount);
    expect(veilleS46.dashboardDetails.actions).toHaveLength(veilleS46.actionsCount);
    expect(veilleS46.dashboardDetails.emergents).toHaveLength(veilleS46.emergingCount);
    expect(new Set(registry.sources.map(s => s.url)).size).toBe(registry.sources.length);
    expect(registry.sources.every(s => s.opened === true)).toBe(true);
    expect(veilleS46.criticalCount).toBe(veilleS46.domaines.filter(d => d.badge === "CRITIQUE").length);
    expect(veilleS46.importantCount).toBe(veilleS46.domaines.filter(d => d.badge === "IMPORTANT").length);
    expect(veilleS46.actionsCount).toBe(veilleS46.actions.length);
    expect(veilleS46.emergingCount).toBe(veilleS46.signauxEmergents.length);
    expect(veilleS46.actions.length).toBeGreaterThanOrEqual(5);
    expect(veilleS46.actions.length).toBeLessThanOrEqual(8);
    expect(veilleS46.signauxEmergents.length).toBeGreaterThanOrEqual(4);
    expect(veilleS46.signauxEmergents.length).toBeLessThanOrEqual(6);
    expect(veilleS46.tendancesPassees.length).toBeGreaterThanOrEqual(5);
    expect(veilleS46.tendancesPassees.length).toBeLessThanOrEqual(7);
  });
  it("publie des analyses sourcées avec impact, statut de recommandation et source datée", () => {
    const urls = new Set(registry.sources.map(s => s.url));
    for (const d of veilleS46.domaines) {
      expect(d.sources.length).toBeGreaterThan(0);
      expect(d.longDescription.length).toBeGreaterThan(400);
      expect(d.details).toHaveLength(4);
      expect(d.longDescription.trim().split(/\s+/).length).toBeGreaterThanOrEqual(120);
      expect(d.longDescription.trim().split(/\s+/).length).toBeLessThanOrEqual(170);
      expect(d.details.some(t => t.includes("Impact pour une école"))).toBe(true);
      expect(d.details.some(t => t.includes("Recommandation"))).toBe(true);
      expect(["Immédiat", "Contractuel", "Règle de conception", "Indicatif", "À arbitrer"]).toContain(d.recommendationStatus);
      for (const s of d.sources) { expect(urls.has(s.url)).toBe(true); expect(s.date.length).toBeGreaterThan(0); }
    }
    for (const a of veilleS46.actions) expect(a.echeance.length).toBeGreaterThan(0);
  });
  it("garde le Bonus hors domaines et contrôle son fait daté et sa longueur", () => {
    expect(veilleS46.bonus.label).toContain("BONUS #10");
    expect(veilleS46.domaines.some(d => d.id === 10)).toBe(false);
    expect(veilleS46.bonus.description.trim().split(/\s+/).length).toBeGreaterThanOrEqual(80);
    expect(veilleS46.bonus.description.trim().split(/\s+/).length).toBeLessThanOrEqual(120);
    expect(veilleS46.bonus.perspective).toContain("Ce qu’on en retient");
    expect(registry.sources.some(s => s.url === veilleS46.bonus.source.url)).toBe(true);
  });
  it("ne publie aucun identifiant institutionnel ni configuration interne", () => {
    const text = JSON.stringify(veilleS46) + JSON.stringify(registry)
      + readFileSync(new URL("../../../content/2026-W46/rapport.md", import.meta.url), "utf8")
      + readFileSync(new URL("../../../content/2026-W46/journal.md", import.meta.url), "utf8");
    expect(text).not.toMatch(/TBS\s*Education|tbs-education|Sébastien|Easy\s*Peasy|ServiceForm|Dynamics\s*365/i);
    expect(text).not.toMatch(/CVE-\d{4}-\d+/i);
    expect(text).not.toMatch(/\b(?:PHP|Drupal|WordPress)\s+\d+(?:\.\d+)+/i);
    expect(veilleS46.shareDescription).toContain("une école");
    expect(veilleS46.shareDescription.length).toBeLessThanOrEqual(180);
  });
  it("conserve les dates inconnues et le calendrier du signal majeur sans rétrodatation", () => {
    const undated = registry.sources.find(s => s.id === 12);
    expect(undated?.date).toBeNull();
    expect(veilleS46.sources.find(s => s.id === 12)?.date).toContain("non datée");
    expect(veilleS46.statDominante.chiffre).toBe("18 NOVEMBRE 2026");
    expect(veilleS46.statDominante.source.id).toBe(15);
    expect(registry.sources.find(s => s.id === 15)?.date).toBe("2026-11-04");
    expect(veilleS46.domaines.find(d => d.id === 2)?.description).toContain("non lancé");
    const used = new Set([
      ...veilleS46.domaines.flatMap(d => d.sources.map(s => s.id)),
      ...veilleS46.bonus.sources.map(s => s.id),
      veilleS46.statDominante.source.id,
    ]);
    expect([...used].sort((a, b) => a - b)).toEqual(registry.sources.map(s => s.id));
    for (const s of registry.sources) {
      if (s.date) { expect(s.date >= registry.windowStart).toBe(true); expect(s.date <= registry.windowEnd).toBe(true); }
      else expect(s.date_status).toContain("no_visible_publication_date");
    }
  });
});
