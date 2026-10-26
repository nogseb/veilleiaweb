import { readFileSync } from "node:fs";
import { veilleS43 } from "../client/src/data/veille-s43";

type SourceRegistry = {
  domainsCount: number;
  hiddenDomainsCount: number;
  sourcesCount: number;
  sources: Array<{ domain: string; date: string; url: string }>;
  hiddenDomains: Array<{ domain: string; reason: string }>;
  exceptions: Array<{ url: string; reason: string }>;
};

const expectedOrder = ["GOOGLE AI", "ZERO-CLICK / GEO", "ROBOTS / DATA", "DXP / CMS", "CDP & DATA", "MESURE", "UX / AGENTS", "IA / GOV", "INNOV MKT"];
const registry = JSON.parse(
  readFileSync(new URL("../content/2026-W43/sources.json", import.meta.url), "utf8"),
) as SourceRegistry;
const failures: string[] = [];

if (veilleS43.week !== 43 || veilleS43.year !== 2026) failures.push("Edition must be S43 / 2026.");
if (veilleS43.domainsCount !== 9 || veilleS43.domaines.length !== 9) failures.push("S43 must expose exactly nine approved analyses.");
if (JSON.stringify(veilleS43.domaines.map((domain) => domain.code)) !== JSON.stringify(expectedOrder)) failures.push("S43 analyses do not respect the supplied editorial order.");
if (veilleS43.domaines.some((domain) => !domain.longDescription || domain.longDescription.length < 150)) failures.push("Every visible analysis needs a complete Flip Card longDescription.");
if (veilleS43.domaines.some((domain) => domain.code.includes("BONUS"))) failures.push("Bonus must remain outside domains.");
if (!veilleS43.bonus.source.url.startsWith("https://")) failures.push("Bonus requires a HTTPS source.");
if (registry.domainsCount !== veilleS43.domainsCount || registry.hiddenDomainsCount !== 0 || registry.hiddenDomains.length !== 0) failures.push("Domain counts do not match the supplied S43 registry.");
if (veilleS43.sourcesCount !== 32 || registry.sourcesCount !== 32 || registry.sources.length !== 32) failures.push("S43 must expose 32 documented source URLs.");
if (new Set(registry.sources.map((source) => source.url)).size !== registry.sources.length) failures.push("Source URLs must be unique.");
if (registry.exceptions.length !== 4) failures.push("Source-window and case-study exceptions must remain documented.");
if (!registry.sources.some((source) => source.domain === "Cas d’école — Currys")) failures.push("Currys case study source is missing.");
if (registry.sources.find((source) => source.domain === "Bonus robotique / fun fact")?.url !== veilleS43.bonus.source.url) failures.push("Bonus source differs from the registry.");

if (failures.length > 0) {
  console.error("S43 integrity validation failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`S43 integrity validated: ${veilleS43.domainsCount} analyses, ${veilleS43.sourcesCount} documented sources, distinct Bonus.`);
