import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { veilleS43 } from "./veille-s43";

type SourceRegistry = {
  domainsCount: number;
  hiddenDomainsCount: number;
  sourcesCount: number;
  sources: Array<{ id: number; domain: string; date: string; url: string }>;
  hiddenDomains: Array<{ domain: string; reason: string }>;
};

describe("S43 editorial integrity", () => {
  const expectedOrder = ["GOOGLE AI", "SCHEMA.ORG", "INNOV MKT"];

  it("keeps only qualified mandatory domains in their required relative order", () => {
    expect(veilleS43.week).toBe(43);
    expect(veilleS43.year).toBe(2026);
    expect(veilleS43.domainsCount).toBe(3);
    expect(veilleS43.domaines).toHaveLength(3);
    expect(veilleS43.domaines.map((domain) => domain.code)).toEqual(expectedOrder);
    expect(veilleS43.domaines.every((domain) => domain.longDescription.length >= 150)).toBe(true);
  });

  it("keeps the Bonus outside domain counts and links it to a verified source", () => {
    expect(veilleS43.bonus.label).toContain("BONUS #10");
    expect(veilleS43.bonus.source.url).toMatch(/^https:\/\//);
    expect(veilleS43.domaines.some((domain) => domain.code.includes("BONUS"))).toBe(false);
  });

  it("matches displayed counts to the qualified source registry and masked domains", () => {
    const registry = JSON.parse(
      readFileSync(new URL("../../../content/2026-W43/sources.json", import.meta.url), "utf8"),
    ) as SourceRegistry;

    expect(registry.domainsCount).toBe(veilleS43.domainsCount);
    expect(registry.hiddenDomainsCount).toBe(5);
    expect(registry.hiddenDomains).toHaveLength(5);
    expect(registry.sourcesCount).toBe(veilleS43.sourcesCount);
    expect(registry.sources).toHaveLength(veilleS43.sourcesCount);
    expect(new Set(registry.sources.map((source) => source.url)).size).toBe(registry.sources.length);
    expect(registry.sources.every((source) => /^2026-10-(1[3-9])$/.test(source.date))).toBe(true);
    expect(registry.sources.find((source) => source.domain === "Bonus robotique")?.url).toBe(veilleS43.bonus.source.url);
  });
});
