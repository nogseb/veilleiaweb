import type { AnalysisContent } from "../client/src/components/AnalysisModal";

export type ConsolidatedEdition = {
  week: number;
  year: number;
  domainsCount: number;
  sourcesCount: number;
  criticalCount: number;
  importantCount: number;
  actionsCount: number;
  emergingCount: number;
  domaines: AnalysisContent[];
  measurement: AnalysisContent;
  bonus: { label: string; source: { url: string }; longDescription: string };
  actions: unknown[];
  signauxEmergents: unknown[];
  dashboardDetails: { domaines: string[]; critiques: string[]; importants: string[]; actions: string[]; emergents: string[] };
};
export type SourceRegistry = { domainsCount: number; sourcesCount: number; sources: Array<{ url: string }>; hiddenDomainsCount?: number; hiddenDomains?: unknown[] };

export function inspectConsolidatedEdition(edition: ConsolidatedEdition, registry: SourceRegistry) {
  const errors: string[] = [];
  const requiredCategories = ["GOOGLE", "SEO", "DATA", "ARCHI", "CDP", "UX", "IA", "INNOV MKT"];
  const check = (condition: boolean, message: string) => { if (!condition) errors.push(message); };
  check(edition.year === 2026 && [43, 44].includes(edition.week), "Édition S43/S44 2026 attendue");
  check(edition.domainsCount === 8 && edition.domaines.length === 8, "Huit domaines obligatoires attendus");
  check(JSON.stringify(edition.domaines.map((d) => d.id)) === JSON.stringify([1,2,3,4,5,6,7,8]), "Ordre des huit domaines incorrect");
  check(JSON.stringify(edition.domaines.map((d) => d.category)) === JSON.stringify(requiredCategories), "Catégories hors ordre canonique");
  check(edition.measurement.category === "MESURE" && edition.measurement.id === 9, "Mesure transversale distincte attendue");
  check(!edition.domaines.some((d) => d.category === "MESURE" || d.code.includes("BONUS")), "Mesure et Bonus ne sont pas des domaines");
  for (const d of [...edition.domaines, edition.measurement]) {
    check(Boolean(d.longDescription && d.longDescription.trim().split(/\s+/).length >= 100), `Analyse complète manquante : ${d.code}`);
    check(["ACTUALITÉ", "SUIVI", "FOND"].includes(d.editorialStatus ?? ""), `Statut éditorial manquant : ${d.code}`);
    check(d.sources.length > 0, `Source manquante : ${d.code}`);
    check(d.details.length >= 3, `Points clés insuffisants : ${d.code}`);
  }
  check(edition.bonus.label.includes("BONUS #10"), "Bonus #10 attendu");
  check(edition.bonus.longDescription.length >= 150, "Analyse du Bonus manquante");
  check(edition.criticalCount === edition.domaines.filter((d) => d.badge === "CRITIQUE").length, "Compteur critique incorrect");
  check(edition.importantCount === edition.domaines.filter((d) => d.badge === "IMPORTANT").length, "Compteur important incorrect");
  check(edition.actionsCount === edition.actions.length && edition.emergingCount === edition.signauxEmergents.length, "Compteurs actions/tendances incohérents");
  check(edition.dashboardDetails.domaines.length === 8, "Dashboard doit afficher huit domaines");
  check(edition.dashboardDetails.critiques.length === edition.criticalCount, "Détails critiques incohérents");
  check(edition.dashboardDetails.importants.length === edition.importantCount, "Détails importants incohérents");
  check(edition.dashboardDetails.actions.length === edition.actionsCount && edition.dashboardDetails.emergents.length === edition.emergingCount, "Détails actions/tendances incohérents");
  const registryUrls = new Set(registry.sources.map((s) => s.url));
  check(registry.domainsCount === 8, "Registre doit indiquer huit domaines");
  check((registry.hiddenDomainsCount ?? 0) === 0 && (registry.hiddenDomains ?? []).length === 0, "Aucun domaine ne doit être masqué");
  check(registryUrls.size === registry.sources.length && registry.sourcesCount === registryUrls.size && edition.sourcesCount === registryUrls.size, "Compteurs des URL uniques incohérents");
  const contentUrls = [...edition.domaines, edition.measurement].flatMap((d) => d.sources.map((s) => s.url));
  contentUrls.push(edition.bonus.source.url);
  for (const url of contentUrls) {
    check(url.startsWith("https://"), `URL non HTTPS : ${url}`);
    check(registryUrls.has(url), `Source affichée absente du registre : ${url}`);
  }
  check(!/\bTBS\b(?! Education)/.test(JSON.stringify(edition)), "Nom de marque incomplet");
  if (edition.week === 44) {
    check(!registry.sources.some((s) => s.url.includes("2610.11932")), "Fudan ne doit pas être recompté en S44");
  }
  return errors;
}
