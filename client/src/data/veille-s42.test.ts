import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { veilleS42 } from "./veille-s42";

type SourceRegistry = {
  domainsCount: number;
  hiddenDomainsCount: number;
  sourcesCount: number;
  sources: Array<{ id: number; domain: string; date: string; url: string }>;
  hiddenDomains: Array<{ domain: string; reason: string }>;
};

describe("S42 editorial integrity", () => {
  const expectedOrder = ["GOOGLE AI", "SCHEMA.ORG", "CDP & DATA", "UX / IA", "IA / GOV", "INNOV MKT"];

  it("keeps only qualified mandatory domains in their required relative order", () => {
    expect(veilleS42.week).toBe(42);
    expect(veilleS42.year).toBe(2026);
    expect(veilleS42.domainsCount).toBe(6);
    expect(veilleS42.domaines).toHaveLength(6);
    expect(veilleS42.domaines.map((domain) => domain.code)).toEqual(expectedOrder);
    expect(veilleS42.domaines.every((domain) => domain.longDescription.length >= 150)).toBe(true);
  });

  it("keeps the Bonus outside domain counts and links it to a verified source", () => {
    expect(veilleS42.bonus.label).toContain("BONUS #10");
    expect(veilleS42.bonus.source.url).toMatch(/^https:\/\//);
    expect(veilleS42.domaines.some((domain) => domain.code.includes("BONUS"))).toBe(false);
  });

  it("matches displayed counts to the qualified source registry and masked domains", () => {
    const registry = JSON.parse(
      readFileSync(new URL("../../../content/2026-W42/sources.json", import.meta.url), "utf8"),
    ) as SourceRegistry;

    expect(registry.domainsCount).toBe(veilleS42.domainsCount);
    expect(registry.hiddenDomainsCount).toBe(2);
    expect(registry.hiddenDomains).toHaveLength(2);
    expect(registry.sourcesCount).toBe(veilleS42.sourcesCount);
    expect(registry.sources).toHaveLength(veilleS42.sourcesCount);
    expect(new Set(registry.sources.map((source) => source.url)).size).toBe(registry.sources.length);
    expect(registry.sources.every((source) => /^2026-10-(0[6-9]|1[0-2])$/.test(source.date))).toBe(true);
    expect(registry.sources.find((source) => source.domain === "Bonus robotique")?.url).toBe(veilleS42.bonus.source.url);
  });
});
