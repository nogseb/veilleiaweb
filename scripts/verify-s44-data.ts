import { readFileSync } from "node:fs";
import { veilleS44 } from "../client/src/data/veille-s44";

type SourceRegistry = {
  domainsCount: number;
  hiddenDomainsCount: number;
  sourcesCount: number;
  sources: Array<{ domain: string; url: string }>;
  hiddenDomains: Array<{ domain: string; reason: string }>;
};

const expectedOrder = ["GOOGLE AI", "ZERO-CLICK / GEO", "UX / CONVERSATION", "IA / PRODUCTION"];
const registry = JSON.parse(readFileSync(new URL("../content/2026-W44/sources.json", import.meta.url), "utf8")) as SourceRegistry;
const failures: string[] = [];

if (veilleS44.week !== 44 || veilleS44.year !== 2026) failures.push("Edition must be S44 / 2026.");
if (veilleS44.domainsCount !== 4 || veilleS44.domaines.length !== 4) failures.push("S44 must expose four qualified analyses.");
if (JSON.stringify(veilleS44.domaines.map((domain) => domain.code)) !== JSON.stringify(expectedOrder)) failures.push("S44 analyses do not follow mandatory topic order.");
if (veilleS44.domaines.some((domain) => !domain.longDescription || domain.longDescription.length < 150)) failures.push("Every visible analysis needs a complete Flip Card longDescription.");
if (veilleS44.domaines.some((domain) => domain.code.includes("BONUS"))) failures.push("Bonus must remain outside domains.");
if (!veilleS44.bonus.source.url.startsWith("https://")) failures.push("Bonus requires a HTTPS source.");
if (registry.domainsCount !== veilleS44.domainsCount || registry.hiddenDomainsCount !== 4 || registry.hiddenDomains.length !== 4) failures.push("Published and hidden domain counts mismatch.");
if (veilleS44.sourcesCount !== 12 || registry.sourcesCount !== 12 || registry.sources.length !== 12) failures.push("S44 must expose 12 documented source URLs.");
if (new Set(registry.sources.map((source) => source.url)).size !== registry.sources.length) failures.push("Source URLs must be unique.");
if (registry.sources.find((source) => source.domain === "Bonus robotique")?.url !== veilleS44.bonus.source.url) failures.push("Bonus source differs from source registry.");

if (failures.length > 0) {
  console.error("S44 integrity validation failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`S44 integrity validated: ${veilleS44.domainsCount} qualified analyses, ${registry.hiddenDomainsCount} documented hidden domains, ${veilleS44.sourcesCount} sources and a distinct Bonus.`);
