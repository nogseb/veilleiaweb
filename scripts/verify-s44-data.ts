import { readFileSync } from "node:fs";
import { veilleS44 } from "../client/src/data/veille-s44";
import { inspectConsolidatedEdition } from "./consolidated-edition-integrity";
const registry = JSON.parse(readFileSync(new URL("../content/2026-W44/sources.json", import.meta.url), "utf8"));
const errors = inspectConsolidatedEdition(veilleS44, registry);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`S44 : ${veilleS44.domainsCount} domaines, ${veilleS44.sourcesCount} URL uniques, mesure transversale et Bonus distincts.`);
