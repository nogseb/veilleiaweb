import { readFileSync } from "node:fs";
import { veilleS39 } from "../client/src/data/veille-s39";

type SourceRegistry = {
  sourcesCount: number;
  sources: Array<{ domain: string; date: string; url: string }>;
};

const expectedOrder = [
  "GOOGLE AI",
  "ZERO-CLICK",
  "SCHEMA.ORG",
  "DXP / HEADLESS",
  "CDP & DATA",
  "UX / IA",
  "IA / GOV",
  "INNOVATION MKT",
];

const registry = JSON.parse(
  readFileSync(new URL("../content/2026-W39/sources.json", import.meta.url), "utf8"),
) as SourceRegistry;

const failures: string[] = [];
if (veilleS39.week !== 39 || veilleS39.year !== 2026) failures.push("Edition must be S39 / 2026.");
if (veilleS39.domainsCount !== 8 || veilleS39.domaines.length !== 8) failures.push("The edition must expose exactly eight domains.");
if (JSON.stringify(veilleS39.domaines.map((domain) => domain.code)) !== JSON.stringify(expectedOrder)) failures.push("Mandatory domain order differs from the editorial contract.");
if (veilleS39.domaines.some((domain) => !domain.longDescription || domain.longDescription.length < 150)) failures.push("Every domain needs a complete Flip Card longDescription.");
if (veilleS39.domaines.some((domain) => domain.code.includes("BONUS"))) failures.push("Bonus must remain outside domains.");
if (!veilleS39.bonus.source.url.startsWith("https://")) failures.push("Bonus requires a HTTPS source.");
if (veilleS39.sourcesCount !== registry.sourcesCount || registry.sources.length !== registry.sourcesCount) failures.push("Displayed source count does not match sources.json.");
if (new Set(registry.sources.map((source) => source.url)).size !== registry.sources.length) failures.push("Source URLs must be unique.");
if (registry.sources.some((source) => !/^2026-09-(1[5-9]|2[0-1])$/.test(source.date))) failures.push("A source lies outside the S39 weekly window.");
if (registry.sources.find((source) => source.domain === "Bonus robotique")?.url !== veilleS39.bonus.source.url) failures.push("Bonus source differs from the registry.");

if (failures.length > 0) {
  console.error("S39 integrity validation failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`S39 integrity validated: ${veilleS39.domainsCount} domains, ${veilleS39.sourcesCount} sources, distinct Bonus.`);
