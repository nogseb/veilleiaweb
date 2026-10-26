import { readFileSync } from "node:fs";
import { veilleS43 } from "../client/src/data/veille-s43";
import { inspectConsolidatedEdition } from "./consolidated-edition-integrity";
const registry = JSON.parse(readFileSync(new URL("../content/2026-W43/sources.json", import.meta.url), "utf8"));
const errors = inspectConsolidatedEdition(veilleS43, registry);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`S43 : ${veilleS43.domainsCount} domaines, ${veilleS43.sourcesCount} URL uniques, mesure transversale et Bonus distincts.`);
