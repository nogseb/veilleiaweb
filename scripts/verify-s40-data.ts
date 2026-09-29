import { readFileSync } from "node:fs";
import { veilleS40 } from "../client/src/data/veille-s40";

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
  readFileSync(new URL("../content/2026-W40/sources.json", import.meta.url), "utf8"),
) as SourceRegistry;

const failures: string[] = [];
if (veilleS40.week !== 40 || veilleS40.year !== 2026) failures.push("Edition must be S40 / 2026.");
if (veilleS40.domainsCount !== 8 || veilleS40.domaines.length !== 8) failures.push("The edition must expose exactly eight domains.");
if (JSON.stringify(veilleS40.domaines.map((domain) => domain.code)) !== JSON.stringify(expectedOrder)) failures.push("Mandatory domain order differs from the editorial contract.");
if (veilleS40.domaines.some((domain) => !domain.longDescription || domain.longDescription.length < 150)) failures.push("Every domain needs a complete Flip Card longDescription.");
if (veilleS40.domaines.some((domain) => domain.code.includes("BONUS"))) failures.push("Bonus must remain outside domains.");
if (!veilleS40.bonus.source.url.startsWith("https://")) failures.push("Bonus requires a HTTPS source.");
if (veilleS40.sourcesCount !== registry.sourcesCount || registry.sources.length !== registry.sourcesCount) failures.push("Displayed source count does not match sources.json.");
if (new Set(registry.sources.map((source) => source.url)).size !== registry.sources.length) failures.push("Source URLs must be unique.");
if (registry.sources.some((source) => !/^2026-09-(2[2-8])$/.test(source.date))) failures.push("A source lies outside the S40 weekly window.");
if (registry.sources.find((source) => source.domain === "Bonus robotique")?.url !== veilleS40.bonus.source.url) failures.push("Bonus source differs from the registry.");

if (failures.length > 0) {
  console.error("S40 integrity validation failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`S40 integrity validated: ${veilleS40.domainsCount} domains, ${veilleS40.sourcesCount} sources, distinct Bonus.`);
