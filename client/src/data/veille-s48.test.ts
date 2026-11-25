import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { veilleS48 } from "./veille-s48";
import registry from "../../../content/2026-W48/sources.json";
import { analysisLabel } from "../components/AnalysisModal";

const orderedDomains = [
  "Moteurs de réponse IA", "Zero-click et GEO", "Données structurées et accès des robots",
  "CMS et socle technique", "Data first-party, consentement, navigateurs", "Mesure et attribution",
  "UX conversationnelle et web agentique", "IA en production et gouvernance",
  "Innovation marketing et plateformes publicitaires",
];
const wordCount = (text: string) => text.trim().split(/\s+/).length;
const readContent = (name: string) => readFileSync(resolve(process.cwd(), "content/2026-W48", name), "utf8");
const withoutURLs = (text: string) => text.replace(/https?:\/\/[^\s"<>]+/g, "[URL]");
const checkConfidentiality = (text: string) => {
  const publicText = withoutURLs(text);
  expect(publicText).not.toMatch(/TBS\s*Education|\bTBS\b|tbs-education|Sébastien|Easy\s*Peasy|ServiceForm|Dynamics\s*365/i);
  expect(publicText).not.toMatch(/CVE-\d{4}-\d+/i);
  expect(publicText).not.toMatch(/\b(?:PHP|Drupal|WordPress)\s+\d+(?:\.\d+)+/i);
};

describe("Veille S48 — édition consolidée, neuf domaines et confidentialité", () => {
  it("respecte la semaine, la fenêtre et l’ordre exact des domaines", () => {
    expect(veilleS48.week).toBe(48);
    expect(veilleS48.year).toBe(2026);
    expect(veilleS48.publicationDate).toBe("24 novembre 2026");
    expect(registry.publicationDate).toBe("2026-11-24");
    expect([registry.windowStart, registry.windowEnd]).toEqual(["2026-11-16", "2026-11-24"]);
    expect(veilleS48.collectionWindow).toContain("rattrapage");
    expect(veilleS48.domainsTotal).toBe(9);
    expect(registry.domainsTotal).toBe(9);
    expect(registry.maskedDomains).toEqual([]);
    expect(veilleS48.domaines.map(d => d.id)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    for (const d of veilleS48.domaines) {
      expect(d.domainName).toBe(orderedDomains[d.id - 1]);
      expect(d.previousBadge).toBeNull();
      expect(["ACTUALITÉ", "SUIVI", "RATTRAPAGE"]).toContain(d.editorialStatus);
      expect(d.subjectsCount).toBeGreaterThanOrEqual(1);
      expect(d.subjectsCount).toBeLessThanOrEqual(2);
    }
    expect(analysisLabel(veilleS48.domaines[5])).toMatch(/^06 —/);
    expect(veilleS48.measurement).toBeUndefined();
  });
  it("compte uniquement les cartes, les listes présentes et les URL uniques", () => {
    expect(veilleS48.domainsCount).toBe(veilleS48.domaines.length);
    expect(registry.domainsCount).toBe(veilleS48.domaines.length);
    expect(veilleS48.sourcesCount).toBe(registry.sources.length);
    expect(registry.sourcesCount).toBe(registry.sources.length);
    expect(registry.sources.length).toBe(27);
    expect(new Set(registry.sources.map(s => s.url)).size).toBe(registry.sources.length);
    expect(registry.sources.map(s => s.id)).toEqual(Array.from({ length: registry.sources.length }, (_, i) => i + 1));
    expect(registry.sources.every(s => s.opened === true)).toBe(true);
    expect(veilleS48.criticalCount).toBe(veilleS48.domaines.filter(d => d.badge === "CRITIQUE").length);
    expect(veilleS48.importantCount).toBe(veilleS48.domaines.filter(d => d.badge === "IMPORTANT").length);
    expect(veilleS48.criticalCount).toBe(1);
    expect(veilleS48.importantCount).toBe(6);
    expect(veilleS48.actionsCount).toBe(veilleS48.actions.length);
    expect(veilleS48.emergingCount).toBe(veilleS48.signauxEmergents.length);
    expect(veilleS48.actions.length).toBeGreaterThanOrEqual(5);
    expect(veilleS48.actions.length).toBeLessThanOrEqual(8);
    expect(veilleS48.signauxEmergents.length).toBeGreaterThanOrEqual(4);
    expect(veilleS48.signauxEmergents.length).toBeLessThanOrEqual(6);
    expect(veilleS48.tendancesPassees.length).toBeGreaterThanOrEqual(5);
    expect(veilleS48.tendancesPassees.length).toBeLessThanOrEqual(7);
    expect(veilleS48.dashboardDetails.critiques.length).toBe(veilleS48.criticalCount);
    expect(veilleS48.dashboardDetails.importants.length).toBe(veilleS48.importantCount);
    expect(veilleS48.dashboardDetails.actions.length).toBe(veilleS48.actionsCount);
    expect(veilleS48.dashboardDetails.emergents.length).toBe(veilleS48.emergingCount);
  });
  it("publie quatre lignes d’analyse, un impact et un statut de recommandation", () => {
    const urls = new Set(registry.sources.map(s => s.url));
    for (const d of veilleS48.domaines) {
      expect(d.sources.length).toBeGreaterThan(0);
      expect(d.details).toHaveLength(4);
      expect(wordCount(d.longDescription)).toBeGreaterThanOrEqual(120);
      expect(wordCount(d.longDescription)).toBeLessThanOrEqual(170);
      expect(d.details.some(t => t.includes("Impact pour une école"))).toBe(true);
      expect(d.details.some(t => t.includes(`Recommandation (${d.recommendationStatus})`))).toBe(true);
      expect(["Immédiat", "Contractuel", "Règle de conception", "Indicatif", "À arbitrer"]).toContain(d.recommendationStatus);
      for (const s of d.sources) {
        expect(urls.has(s.url)).toBe(true);
        expect(s.date.length).toBeGreaterThan(0);
      }
    }
    for (const a of veilleS48.actions) expect(a.echeance.length).toBeGreaterThan(0);
  });
  it("garde le Bonus hors domaines et ses dates comme programme, non résultat", () => {
    expect(veilleS48.bonus.label).toContain("BONUS #10");
    expect(veilleS48.domaines.some(d => d.id === 10)).toBe(false);
    expect(wordCount(veilleS48.bonus.description)).toBeGreaterThanOrEqual(80);
    expect(wordCount(veilleS48.bonus.description)).toBeLessThanOrEqual(120);
    expect(veilleS48.bonus.perspective).toContain("Ce qu’on en retient");
    expect(veilleS48.bonus.description).toContain("pas un résultat");
    expect(registry.sources.some(s => s.url === veilleS48.bonus.source.url)).toBe(true);
    expect(registry.sources.find(s => s.id === 26)?.date_status).toContain("event_start_date");
    expect(veilleS48.caseStudiesCount).toBe(0);
    expect(veilleS48.caseStudies).toEqual([]);
  });
  it("documente les rattrapages et ne redéclare pas le 16 absent de S47", () => {
    expect(veilleS48.domaines[5].editorialStatus).toBe("RATTRAPAGE");
    expect(veilleS48.domaines[8].editorialStatus).toBe("RATTRAPAGE");
    expect(registry.sources.find(s => s.id === 16)?.date).toBe("2026-11-16");
    expect(registry.sources.find(s => s.id === 23)?.date).toBe("2026-11-16");
    expect(registry.audit.duplicates.join(" ")).toContain("réservé");
    expect(registry.audit.limits.join(" ")).toContain("S47 couvre déjà le 16");
    expect(registry.audit.excluded.join(" ")).toContain("corps daté du 15");
  });
  it("garde les corrections factuelles décisives dans les données", () => {
    expect(veilleS48.statDominante.chiffre).toBe("18–19 NOVEMBRE");
    expect(veilleS48.statDominante.source.id).toBe(8);
    expect(veilleS48.statDominante.description).not.toContain("J+1");
    expect(veilleS48.domaines[0].longDescription).toContain("ne la restitue pas");
    expect(veilleS48.domaines[5].longDescription).toContain("pas un lancement");
    expect(veilleS48.domaines[7].longDescription).toContain("moins de 18 ans");
    expect(veilleS48.domaines[7].longDescription).toContain("n’est pas une loi nouvelle");
    expect(veilleS48.domaines[8].longDescription).toContain("n’est pas étendue à Pinterest");
  });
  it("référence toutes les sources retenues par une carte ou le Bonus", () => {
    const used = new Set([
      ...veilleS48.domaines.flatMap(d => d.sources.map(s => s.id)),
      ...veilleS48.bonus.sources.map(s => s.id),
    ]);
    expect([...used].sort((a, b) => a - b)).toEqual(registry.sources.map(s => s.id));
    for (const s of registry.sources) {
      expect(["N1", "N2"]).toContain(s.level);
      expect(s.claims.length).toBeGreaterThan(0);
      expect(s.limitations.length).toBeGreaterThan(0);
      expect(s.date_status.length).toBeGreaterThan(0);
      expect(s.date >= registry.windowStart && s.date <= registry.windowEnd).toBe(true);
    }
  });
  it("ne publie aucun identifiant institutionnel, vulnérabilité numérotée ou version du socle", () => {
    checkConfidentiality(JSON.stringify(veilleS48));
    checkConfidentiality(JSON.stringify(registry));
    checkConfidentiality(readContent("rapport.md"));
    checkConfidentiality(readContent("journal.md"));
    expect(veilleS48.shareDescription).toContain("une école");
    expect(veilleS48.shareDescription.length).toBeLessThanOrEqual(180);
  });
  it("synchronise les références du rapport et le registre", () => {
    const report = readContent("rapport.md");
    const refs = [...report.matchAll(/^\[(\d+)\]: (https?:\/\/\S+) "/gm)];
    expect(refs.map(m => Number(m[1]))).toEqual(registry.sources.map(s => s.id));
    expect(refs.map(m => m[2])).toEqual(registry.sources.map(s => s.url));
    const cited = new Set([...report.split("## Références")[0].matchAll(/\[(\d+)\]/g)].map(m => Number(m[1])));
    expect([...cited].sort((a, b) => a - b)).toEqual(registry.sources.map(s => s.id));
    expect(readContent("journal.md")).toContain("Consolidation des trois veilles");
    expect(report).toContain("Aucun domaine masqué");
  });
});
