import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { veilleS44 } from "./veille-s44";

type SourceRegistry = {
  domainsCount: number;
  hiddenDomainsCount: number;
  sourcesCount: number;
  sources: Array<{ id: number; domain: string; date: string; url: string }>;
  hiddenDomains: Array<{ domain: string; reason: string }>;
};

describe("S44 editorial integrity", () => {
  const expectedOrder = ["GOOGLE AI", "ZERO-CLICK / GEO", "UX / CONVERSATION", "IA / PRODUCTION"];

  it("publishes only the four qualified domains in the mandatory editorial order", () => {
    expect(veilleS44.week).toBe(44);
    expect(veilleS44.year).toBe(2026);
    expect(veilleS44.publicationDate).toBe("26 octobre 2026");
    expect(veilleS44.domainsCount).toBe(4);
    expect(veilleS44.domaines).toHaveLength(4);
    expect(veilleS44.domaines.map((domain) => domain.code)).toEqual(expectedOrder);
    expect(veilleS44.domaines.every((domain) => domain.longDescription.length >= 150)).toBe(true);
  });

  it("keeps the evidence-based Bonus distinct from visible domains", () => {
    expect(veilleS44.bonus.label).toContain("BONUS #10");
    expect(veilleS44.bonus.source.url).toMatch(/^https:\/\//);
    expect(veilleS44.domaines.some((domain) => domain.code.includes("BONUS"))).toBe(false);
  });

  it("matches the 12 source registry and four documented masked domains", () => {
    const registry = JSON.parse(
      readFileSync(new URL("../../../content/2026-W44/sources.json", import.meta.url), "utf8"),
    ) as SourceRegistry;

    expect(registry.domainsCount).toBe(4);
    expect(registry.hiddenDomainsCount).toBe(4);
    expect(registry.hiddenDomains).toHaveLength(4);
    expect(registry.sourcesCount).toBe(veilleS44.sourcesCount);
    expect(registry.sources).toHaveLength(12);
    expect(new Set(registry.sources.map((source) => source.url)).size).toBe(12);
    expect(registry.sources.find((source) => source.domain === "Bonus robotique")?.url).toBe(veilleS44.bonus.source.url);
  });
});
