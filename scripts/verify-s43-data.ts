import { readFileSync } from "node:fs";
import { veilleS43 } from "../client/src/data/veille-s43";

type SourceRegistry = {
  domainsCount: number;
  hiddenDomainsCount: number;
  sourcesCount: number;
  sources: Array<{ domain: string; date: string; url: string }>;
  hiddenDomains: Array<{ domain: string; reason: string }>;
};

const expectedOrder = ["GOOGLE AI", "SCHEMA.ORG", "INNOV MKT"];
const registry = JSON.parse(
  readFileSync(new URL("../content/2026-W43/sources.json", import.meta.url), "utf8"),
) as SourceRegistry;
const failures: string[] = [];

if (veilleS43.week !== 43 || veilleS43.year !== 2026) failures.push("Edition must be S43 / 2026.");
if (veilleS43.domainsCount !== 3 || veilleS43.domaines.length !== 3) failures.push("S43 must expose exactly three qualified domains.");
if (JSON.stringify(veilleS43.domaines.map((domain) => domain.code)) !== JSON.stringify(expectedOrder)) failures.push("Qualified domains do not respect mandatory relative order.");
if (veilleS43.domaines.some((domain) => !domain.longDescription || domain.longDescription.length < 150)) failures.push("Every visible domain needs a complete Flip Card longDescription.");
if (veilleS43.domaines.some((domain) => domain.code.includes("BONUS"))) failures.push("Bonus must remain outside domains.");
if (!veilleS43.bonus.source.url.startsWith("https://")) failures.push("Bonus requires a HTTPS source.");
if (registry.domainsCount !== veilleS43.domainsCount || registry.hiddenDomainsCount !== 5 || registry.hiddenDomains.length !== 5) failures.push("Qualified and hidden domain counts do not match sources.json.");
if (veilleS43.sourcesCount !== registry.sourcesCount || registry.sources.length !== registry.sourcesCount) failures.push("Displayed source count does not match sources.json.");
if (new Set(registry.sources.map((source) => source.url)).size !== registry.sources.length) failures.push("Source URLs must be unique.");
if (registry.sources.some((source) => !/^2026-10-(1[3-9])$/.test(source.date))) failures.push("A source lies outside the S43 weekly window.");
if (registry.sources.find((source) => source.domain === "Bonus robotique")?.url !== veilleS43.bonus.source.url) failures.push("Bonus source differs from the registry.");

if (failures.length > 0) {
  console.error("S43 integrity validation failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`S43 integrity validated: ${veilleS43.domainsCount} qualified domains, ${registry.hiddenDomainsCount} masked domains, ${veilleS43.sourcesCount} sources, distinct Bonus.`);
