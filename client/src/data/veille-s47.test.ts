import { describe, expect, it } from "vitest";
import { veilleS47 } from "./veille-s47";
import registry from "../../../content/2026-W47/sources.json";
import { analysisLabel } from "../components/AnalysisModal";

const orderedDomains = [
  "Moteurs de réponse IA", "Zero-click et GEO", "Données structurées et accès des robots",
  "CMS et socle technique", "Data first-party, consentement, navigateurs", "Mesure et attribution",
  "UX conversationnelle et web agentique", "IA en production et gouvernance",
  "Innovation marketing et plateformes publicitaires",
];

describe("Veille S47 — sept domaines retenus sur neuf et confidentialité", () => {
  it("respecte la semaine, la fenêtre et l’ordre des catégories retenues", () => {
    expect(veilleS47.week).toBe(47);
    expect(veilleS47.year).toBe(2026);
    expect(veilleS47.domainsTotal).toBe(9);
    expect(registry.windowStart).toBe("2026-11-09");
    expect(registry.windowEnd).toBe("2026-11-16");
    expect(veilleS47.domaines.map(d => d.id)).toEqual([...veilleS47.domaines.map(d => d.id)].sort((a, b) => a - b));
    for (const d of veilleS47.domaines) expect(d.domainName).toBe(orderedDomains[d.id - 1]);
    expect(new Set(veilleS47.domaines.map(d => d.id)).size).toBe(veilleS47.domaines.length);
    expect(veilleS47.domaines.every(d => d.id >= 1 && d.id <= 9)).toBe(true);
    const mesure = veilleS47.domaines.find(d => d.id === 6);
    if (mesure) expect(analysisLabel(mesure)).toMatch(/^06 —/);
  });
  it("compte uniquement le contenu effectivement présent et les URL uniques", () => {
    expect(veilleS47.domainsCount).toBe(veilleS47.domaines.length);
    expect(registry.domainsCount).toBe(veilleS47.domaines.length);
    expect(veilleS47.sourcesCount).toBe(registry.sources.length);
    expect(new Set(registry.sources.map(s => s.url)).size).toBe(registry.sources.length);
    expect(registry.sources.every(s => s.opened === true)).toBe(true);
    expect(veilleS47.criticalCount).toBe(veilleS47.domaines.filter(d => d.badge === "CRITIQUE").length);
    expect(veilleS47.importantCount).toBe(veilleS47.domaines.filter(d => d.badge === "IMPORTANT").length);
    expect(veilleS47.actionsCount).toBe(veilleS47.actions.length);
    expect(veilleS47.emergingCount).toBe(veilleS47.signauxEmergents.length);
    expect(veilleS47.actions.length).toBeGreaterThanOrEqual(5);
    expect(veilleS47.actions.length).toBeLessThanOrEqual(8);
    expect(veilleS47.signauxEmergents.length).toBeGreaterThanOrEqual(4);
    expect(veilleS47.signauxEmergents.length).toBeLessThanOrEqual(6);
    expect(veilleS47.tendancesPassees.length).toBeGreaterThanOrEqual(5);
    expect(veilleS47.tendancesPassees.length).toBeLessThanOrEqual(7);
  });
  it("publie des analyses sourcées avec impact, statut de recommandation et source datée", () => {
    const urls = new Set(registry.sources.map(s => s.url));
    for (const d of veilleS47.domaines) {
      expect(d.sources.length).toBeGreaterThan(0);
      expect(d.longDescription.length).toBeGreaterThan(400);
      expect(d.details.some(t => t.includes("Impact pour une école"))).toBe(true);
      expect(d.details.some(t => t.includes("Recommandation"))).toBe(true);
      expect(["Immédiat", "Contractuel", "Règle de conception", "Indicatif", "À arbitrer"]).toContain(d.recommendationStatus);
      for (const s of d.sources) { expect(urls.has(s.url)).toBe(true); expect(s.date.length).toBeGreaterThan(0); }
    }
    for (const a of veilleS47.actions) expect(a.echeance.length).toBeGreaterThan(0);
  });
  it("garde le Bonus hors domaines et contrôle son fait daté et sa longueur", () => {
    expect(veilleS47.bonus.label).toContain("BONUS #10");
    expect(veilleS47.domaines.some(d => d.id === 10)).toBe(false);
    expect(veilleS47.bonus.description.trim().split(/\s+/).length).toBeGreaterThanOrEqual(80);
    expect(veilleS47.bonus.description.trim().split(/\s+/).length).toBeLessThanOrEqual(120);
    expect(veilleS47.bonus.perspective).toContain("Ce qu’on en retient");
    expect(registry.sources.some(s => s.url === veilleS47.bonus.source.url)).toBe(true);
  });
  it("ne publie aucun identifiant institutionnel ni configuration interne", () => {
    const text = JSON.stringify(veilleS47) + JSON.stringify(registry);
    expect(text).not.toMatch(/TBS\s*Education|tbs-education|Sébastien|Easy\s*Peasy|ServiceForm|Dynamics\s*365/i);
    expect(text).not.toMatch(/CVE-\d{4}-\d+/i);
    expect(text).not.toMatch(/\b(?:PHP|Drupal|WordPress)\s+\d+(?:\.\d+)+/i);
    expect(veilleS47.shareDescription).toContain("une école");
    expect(veilleS47.shareDescription.length).toBeLessThanOrEqual(180);
  });
  it("garde les masquages, les trois requêtes et les statuts de suivi", () => {
    expect(veilleS47.publicationDate).toBe("16 novembre 2026");
    expect(veilleS47.collectionWindow).toBe("9 au 16 novembre 2026 inclus");
    expect(registry.publicationDate).toBe("2026-11-16");
    expect(veilleS47.domaines.map(d => d.id)).toEqual([1, 2, 3, 4, 6, 8, 9]);
    expect(registry.maskedDomains.map(d => d.id)).toEqual([5, 7]);
    for (const d of registry.maskedDomains) expect(d.queries).toHaveLength(3);
    expect(veilleS47.domaines.find(d => d.id === 1)?.editorialStatus).toBe("SUIVI");
    expect(veilleS47.domaines.find(d => d.id === 1)?.longDescription).toContain("6 novembre");
    expect(veilleS47.domaines.find(d => d.id === 1)?.longDescription).toContain("10 novembre");
    expect(veilleS47.measurement).toBeUndefined();
    expect(veilleS47.caseStudies).toEqual([]);
    expect(veilleS47.caseStudiesCount).toBe(0);
    expect(registry.sources.map(s => s.id)).toEqual(registry.sources.map((_, i) => i + 1));
    expect(registry.sourcesCount).toBe(registry.sources.length);
    expect(registry.domainsTotal).toBe(9);
    for (const d of veilleS47.domaines) {
      expect(d.previousBadge).toBeNull();
      expect(d.details).toHaveLength(4);
      expect(d.subjectsCount).toBeGreaterThan(0);
      expect(["ACTUALITÉ", "SUIVI", "RATTRAPAGE"]).toContain(d.editorialStatus);
      expect(d.longDescription.trim().split(/\s+/).length).toBeGreaterThanOrEqual(120);
      expect(d.longDescription.trim().split(/\s+/).length).toBeLessThanOrEqual(170);
    }
    expect(veilleS47.dashboardDetails.domaines).toHaveLength(veilleS47.domainsCount);
    expect(veilleS47.dashboardDetails.sources).toHaveLength(veilleS47.sourcesCount);
    expect(veilleS47.dashboardDetails.critiques).toHaveLength(veilleS47.criticalCount);
    expect(veilleS47.dashboardDetails.importants).toHaveLength(veilleS47.importantCount);
    expect(veilleS47.dashboardDetails.actions).toHaveLength(veilleS47.actionsCount);
    expect(veilleS47.dashboardDetails.emergents).toHaveLength(veilleS47.emergingCount);
  });
  it("date le chiffre majeur sans benchmark et qualifie le bonus comme projet", () => {
    expect(veilleS47.statDominante.chiffre).toBe("30 JOURS");
    expect(veilleS47.statDominante.titre).toContain("9 NOVEMBRE 2026");
    expect(veilleS47.statDominante.description).toContain("zéro rétention de données, dite ZDR");
    expect(veilleS47.statDominante.source.url).toBe("https://www.anthropic.com/claude-fable-and-mythos-5-2");
    expect(veilleS47.bonus.description).toContain("projet annoncé");
    expect(veilleS47.bonus.source.date).toBe("16 novembre 2026");
    expect(veilleS47.bonus.sources).toHaveLength(2);
    expect(registry.sources.filter(s => s.date === null)).toHaveLength(2);
    for (const s of registry.sources) {
      if (s.date) {
        expect(s.date >= registry.windowStart && s.date <= registry.windowEnd).toBe(true);
      } else expect(s.date_status).toContain("undated_support_document");
    }
    expect(veilleS47.domaines.find(d => d.id === 8)?.longDescription).not.toMatch(/\d+\s*%|\d+\s*×/);
  });
});
