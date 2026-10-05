import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { veilleS41 } from "./veille-s41";

type SourceRegistry = {
  domainsCount: number;
  hiddenDomainsCount: number;
  sourcesCount: number;
  sources: Array<{ id: number; domain: string; date: string; url: string }>;
  hiddenDomains: Array<{ domain: string; reason: string }>;
};

describe("S41 editorial integrity", () => {
  const expectedOrder = ["GOOGLE AI", "ZERO-CLICK", "UX / IA"];

  it("keeps only qualified mandatory domains in their required relative order", () => {
    expect(veilleS41.week).toBe(41);
    expect(veilleS41.year).toBe(2026);
    expect(veilleS41.domainsCount).toBe(3);
    expect(veilleS41.domaines).toHaveLength(3);
    expect(veilleS41.domaines.map((domain) => domain.code)).toEqual(expectedOrder);
    expect(veilleS41.domaines.every((domain) => domain.longDescription.length >= 150)).toBe(true);
  });

  it("keeps the Bonus separate from domain counters and links it to a source", () => {
    expect(veilleS41.bonus.label).toContain("BONUS #10");
    expect(veilleS41.bonus.source.url).toMatch(/^https:\/\//);
    expect(veilleS41.domaines.some((domain) => domain.code.includes("BONUS"))).toBe(false);
  });

  it("matches displayed counts to the verified source registry and records masked domains", () => {
    const registry = JSON.parse(
      readFileSync(new URL("../../../content/2026-W41/sources.json", import.meta.url), "utf8"),
    ) as SourceRegistry;

    expect(registry.domainsCount).toBe(veilleS41.domainsCount);
    expect(registry.hiddenDomainsCount).toBe(5);
    expect(registry.hiddenDomains).toHaveLength(5);
    expect(registry.sourcesCount).toBe(veilleS41.sourcesCount);
    expect(registry.sources).toHaveLength(veilleS41.sourcesCount);
    expect(new Set(registry.sources.map((source) => source.url)).size).toBe(registry.sources.length);
    expect(registry.sources.every((source) => /^2026-(09-(29|30)|10-0[1-5])$/.test(source.date))).toBe(true);
    expect(registry.sources.find((source) => source.domain === "Bonus robotique")?.url).toBe(veilleS41.bonus.source.url);
  });
});
