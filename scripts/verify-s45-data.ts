import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { veilleS45 } from "../client/src/data/veille-s45";
import { currentEdition, getEditionByWeek } from "../client/src/data/archives";

const registry = JSON.parse(readFileSync(new URL("../content/2026-W45/sources.json", import.meta.url), "utf8"));
const report = readFileSync(new URL("../content/2026-W45/rapport.md", import.meta.url), "utf8");
assert.equal(veilleS45.week, 45);
assert.equal(veilleS45.year, 2026);
assert.equal(registry.windowStart, "2026-10-26");
assert.equal(registry.windowEnd, "2026-11-02");
assert.equal(veilleS45.domaines.length, veilleS45.domainsCount);
assert.equal(veilleS45.domainsCount, registry.domainsCount);
assert.equal(veilleS45.sourcesCount, registry.sources.length);
assert.equal(new Set(registry.sources.map((s: { url: string }) => s.url)).size, registry.sources.length);
const allUrls = new Set([...veilleS45.domaines.flatMap(d => d.sources), veilleS45.bonus.source].map(s => s.url));
for (const source of registry.sources) {
  assert(source.opened, `Source non ouverte : ${source.url}`);
  assert(allUrls.has(source.url), `Source comptée mais non citée dans les cartes : ${source.url}`);
  assert(report.includes(source.url), `Référence absente du rapport : ${source.url}`);
}
assert.equal(veilleS45.criticalCount, veilleS45.domaines.filter(d => d.badge === "CRITIQUE").length);
assert.equal(veilleS45.importantCount, veilleS45.domaines.filter(d => d.badge === "IMPORTANT").length);
assert.equal(veilleS45.actionsCount, veilleS45.actions.length);
assert.equal(veilleS45.emergingCount, veilleS45.signauxEmergents.length);
assert.equal(veilleS45.caseStudiesCount, 0);
assert.equal(currentEdition.week, 45);
assert.equal(getEditionByWeek(44)?.week, 44);
assert(getEditionByWeek(44)?.bonus);
assert(!/TBS\s*Education|tbs-education|Sébastien|CVE-\d{4}-\d+/i.test(report));
console.log(JSON.stringify({ week: 45, domains: veilleS45.domainsCount, sources: veilleS45.sourcesCount, critical: veilleS45.criticalCount, important: veilleS45.importantCount, actions: veilleS45.actionsCount, emerging: veilleS45.emergingCount, caseStudies: veilleS45.caseStudiesCount, previousArchived: 44, bonusOutsideDomains: true }, null, 2));
