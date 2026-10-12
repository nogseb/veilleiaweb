import { readFileSync } from "node:fs";
import { veilleS42 } from "../client/src/data/veille-s42";

type SourceRegistry = {
  domainsCount: number;
  hiddenDomainsCount: number;
  sourcesCount: number;
  sources: Array<{ domain: string; date: string; url: string }>;
  hiddenDomains: Array<{ domain: string; reason: string }>;
};

const expectedOrder = ["GOOGLE AI", "SCHEMA.ORG", "CDP & DATA", "UX / IA", "IA / GOV", "INNOV MKT"];
const registry = JSON.parse(
  readFileSync(new URL("../content/2026-W42/sources.json", import.meta.url), "utf8"),
) as SourceRegistry;
const failures: string[] = [];

if (veilleS42.week !== 42 || veilleS42.year !== 2026) failures.push("Edition must be S42 / 2026.");
if (veilleS42.domainsCount !== 6 || veilleS42.domaines.length !== 6) failures.push("S42 must expose exactly six qualified domains.");
if (JSON.stringify(veilleS42.domaines.map((domain) => domain.code)) !== JSON.stringify(expectedOrder)) failures.push("Qualified domains do not respect mandatory relative order.");
if (veilleS42.domaines.some((domain) => !domain.longDescription || domain.longDescription.length < 150)) failures.push("Every visible domain needs a complete Flip Card longDescription.");
if (veilleS42.domaines.some((domain) => domain.code.includes("BONUS"))) failures.push("Bonus must remain outside domains.");
if (!veilleS42.bonus.source.url.startsWith("https://")) failures.push("Bonus requires a HTTPS source.");
if (registry.domainsCount !== veilleS42.domainsCount || registry.hiddenDomainsCount !== 2 || registry.hiddenDomains.length !== 2) failures.push("Qualified and hidden domain counts do not match sources.json.");
if (veilleS42.sourcesCount !== registry.sourcesCount || registry.sources.length !== registry.sourcesCount) failures.push("Displayed source count does not match sources.json.");
if (new Set(registry.sources.map((source) => source.url)).size !== registry.sources.length) failures.push("Source URLs must be unique.");
if (registry.sources.some((source) => !/^2026-10-(0[6-9]|1[0-2])$/.test(source.date))) failures.push("A source lies outside the S42 weekly window.");
if (registry.sources.find((source) => source.domain === "Bonus robotique")?.url !== veilleS42.bonus.source.url) failures.push("Bonus source differs from the registry.");

if (failures.length > 0) {
  console.error("S42 integrity validation failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`S42 integrity validated: ${veilleS42.domainsCount} qualified domains, ${registry.hiddenDomainsCount} masked domains, ${veilleS42.sourcesCount} sources, distinct Bonus.`);
