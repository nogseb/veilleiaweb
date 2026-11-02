import { describe, expect, it } from "vitest";
import { veilleS45 } from "./veille-s45";
import registry from "../../../content/2026-W45/sources.json";
import { analysisLabel } from "../components/AnalysisModal";

const orderedDomains = [
  "Moteurs de réponse IA", "Zero-click et GEO", "Données structurées et accès des robots",
  "CMS et socle technique", "Data first-party, consentement, navigateurs", "Mesure et attribution",
  "UX conversationnelle et web agentique", "IA en production et gouvernance",
  "Innovation marketing et plateformes publicitaires",
];

describe("Veille S45 — neuf domaines et confidentialité", () => {
  it("respecte la semaine, la fenêtre et l’ordre des catégories retenues", () => {
    expect(veilleS45.week).toBe(45);
    expect(veilleS45.year).toBe(2026);
    expect(veilleS45.domainsTotal).toBe(9);
    expect(registry.windowStart).toBe("2026-10-26");
    expect(registry.windowEnd).toBe("2026-11-02");
    expect(veilleS45.domaines.map(d => d.id)).toEqual([...veilleS45.domaines.map(d => d.id)].sort((a, b) => a - b));
    for (const d of veilleS45.domaines) expect(d.domainName).toBe(orderedDomains[d.id - 1]);
    expect(new Set(veilleS45.domaines.map(d => d.id)).size).toBe(veilleS45.domaines.length);
    expect(veilleS45.domaines.every(d => d.id >= 1 && d.id <= 9)).toBe(true);
    const mesure = veilleS45.domaines.find(d => d.id === 6);
    if (mesure) expect(analysisLabel(mesure)).toMatch(/^06 —/);
  });
  it("compte uniquement le contenu effectivement présent et les URL uniques", () => {
    expect(veilleS45.domainsCount).toBe(veilleS45.domaines.length);
    expect(registry.domainsCount).toBe(veilleS45.domaines.length);
    expect(veilleS45.sourcesCount).toBe(registry.sources.length);
    expect(new Set(registry.sources.map(s => s.url)).size).toBe(registry.sources.length);
    expect(registry.sources.every(s => s.opened === true)).toBe(true);
    expect(veilleS45.criticalCount).toBe(veilleS45.domaines.filter(d => d.badge === "CRITIQUE").length);
    expect(veilleS45.importantCount).toBe(veilleS45.domaines.filter(d => d.badge === "IMPORTANT").length);
    expect(veilleS45.actionsCount).toBe(veilleS45.actions.length);
    expect(veilleS45.emergingCount).toBe(veilleS45.signauxEmergents.length);
    expect(veilleS45.actions.length).toBeGreaterThanOrEqual(5);
    expect(veilleS45.actions.length).toBeLessThanOrEqual(8);
    expect(veilleS45.signauxEmergents.length).toBeGreaterThanOrEqual(4);
    expect(veilleS45.signauxEmergents.length).toBeLessThanOrEqual(6);
    expect(veilleS45.tendancesPassees.length).toBeGreaterThanOrEqual(5);
    expect(veilleS45.tendancesPassees.length).toBeLessThanOrEqual(7);
  });
  it("publie des analyses sourcées avec impact, statut de recommandation et source datée", () => {
    const urls = new Set(registry.sources.map(s => s.url));
    for (const d of veilleS45.domaines) {
      expect(d.sources.length).toBeGreaterThan(0);
      expect(d.longDescription.length).toBeGreaterThan(400);
      expect(d.details.some(t => t.includes("Impact pour une école"))).toBe(true);
      expect(d.details.some(t => t.includes("Recommandation"))).toBe(true);
      expect(["Immédiat", "Contractuel", "Règle de conception", "Indicatif", "À arbitrer"]).toContain(d.recommendationStatus);
      for (const s of d.sources) { expect(urls.has(s.url)).toBe(true); expect(s.date.length).toBeGreaterThan(0); }
    }
    for (const a of veilleS45.actions) expect(a.echeance.length).toBeGreaterThan(0);
  });
  it("garde le Bonus hors domaines et contrôle son fait daté et sa longueur", () => {
    expect(veilleS45.bonus.label).toContain("BONUS #10");
    expect(veilleS45.domaines.some(d => d.id === 10)).toBe(false);
    expect(veilleS45.bonus.description.trim().split(/\s+/).length).toBeGreaterThanOrEqual(80);
    expect(veilleS45.bonus.description.trim().split(/\s+/).length).toBeLessThanOrEqual(120);
    expect(veilleS45.bonus.perspective).toContain("Ce qu’on en retient");
    expect(registry.sources.some(s => s.url === veilleS45.bonus.source.url)).toBe(true);
  });
  it("ne publie aucun identifiant institutionnel ni configuration interne", () => {
    const text = JSON.stringify(veilleS45);
    expect(text).not.toMatch(/TBS\s*Education|tbs-education|Sébastien|Easy\s*Peasy|ServiceForm|Dynamics\s*365/i);
    expect(text).not.toMatch(/CVE-\d{4}-\d+/i);
    expect(text).not.toMatch(/\b(?:PHP|Drupal|WordPress)\s+\d+(?:\.\d+)+/i);
    expect(veilleS45.shareDescription).toContain("une école");
  });
});
