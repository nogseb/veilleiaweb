import { readFileSync } from "node:fs";
import { veilleS41 } from "../client/src/data/veille-s41";

type SourceRegistry = {
  domainsCount: number;
  hiddenDomainsCount: number;
  sourcesCount: number;
  sources: Array<{ domain: string; date: string; url: string }>;
  hiddenDomains: Array<{ domain: string; reason: string }>;
};

const expectedOrder = ["GOOGLE AI", "ZERO-CLICK", "UX / IA"];
const registry = JSON.parse(
  readFileSync(new URL("../content/2026-W41/sources.json", import.meta.url), "utf8"),
) as SourceRegistry;

const failures: string[] = [];
if (veilleS41.week !== 41 || veilleS41.year !== 2026) failures.push("Edition must be S41 / 2026.");
if (veilleS41.domainsCount !== 3 || veilleS41.domaines.length !== 3) failures.push("S41 must expose exactly three qualified domains.");
if (JSON.stringify(veilleS41.domaines.map((domain) => domain.code)) !== JSON.stringify(expectedOrder)) failures.push("Qualified domains do not respect the mandatory relative order.");
if (veilleS41.domaines.some((domain) => !domain.longDescription || domain.longDescription.length < 150)) failures.push("Every visible domain needs a complete Flip Card longDescription.");
if (veilleS41.domaines.some((domain) => domain.code.includes("BONUS"))) failures.push("Bonus must remain outside domains.");
if (!veilleS41.bonus.source.url.startsWith("https://")) failures.push("Bonus requires a HTTPS source.");
if (registry.domainsCount !== veilleS41.domainsCount || registry.hiddenDomainsCount !== 5 || registry.hiddenDomains.length !== 5) failures.push("Qualified and hidden domain counts do not match sources.json.");
if (veilleS41.sourcesCount !== registry.sourcesCount || registry.sources.length !== registry.sourcesCount) failures.push("Displayed source count does not match sources.json.");
if (new Set(registry.sources.map((source) => source.url)).size !== registry.sources.length) failures.push("Source URLs must be unique.");
if (registry.sources.some((source) => !/^2026-(09-(29|30)|10-0[1-5])$/.test(source.date))) failures.push("A source lies outside the S41 weekly window.");
if (registry.sources.find((source) => source.domain === "Bonus robotique")?.url !== veilleS41.bonus.source.url) failures.push("Bonus source differs from the registry.");

if (failures.length > 0) {
  console.error("S41 integrity validation failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`S41 integrity validated: ${veilleS41.domainsCount} qualified domains, ${registry.hiddenDomainsCount} masked domains, ${veilleS41.sourcesCount} sources, distinct Bonus.`);
