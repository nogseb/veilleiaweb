import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { veilleS40 } from "./veille-s40";

type SourceRegistry = {
  sourcesCount: number;
  sources: Array<{ id: number; domain: string; date: string; url: string }>;
};

describe("S40 editorial integrity", () => {
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

  it("keeps the eight mandatory domains in the required order", () => {
    expect(veilleS40.week).toBe(40);
    expect(veilleS40.year).toBe(2026);
    expect(veilleS40.domainsCount).toBe(8);
    expect(veilleS40.domaines).toHaveLength(8);
    expect(veilleS40.domaines.map((domain) => domain.code)).toEqual(expectedOrder);
    expect(veilleS40.domaines.every((domain) => domain.longDescription.length >= 150)).toBe(true);
  });

  it("keeps the Bonus separate from domain counters and links it to a source", () => {
    expect(veilleS40.bonus.label).toContain("BONUS #10");
    expect(veilleS40.bonus.source.url).toMatch(/^https:\/\//);
    expect(veilleS40.domaines.some((domain) => domain.code.includes("BONUS"))).toBe(false);
  });

  it("matches the displayed source count to the verified source registry", () => {
    const registry = JSON.parse(
      readFileSync(new URL("../../../content/2026-W40/sources.json", import.meta.url), "utf8"),
    ) as SourceRegistry;

    expect(registry.sourcesCount).toBe(veilleS40.sourcesCount);
    expect(registry.sources).toHaveLength(veilleS40.sourcesCount);
    expect(new Set(registry.sources.map((source) => source.url)).size).toBe(registry.sources.length);
    expect(registry.sources.every((source) => /^2026-09-(2[2-8])$/.test(source.date))).toBe(true);
    expect(registry.sources.find((source) => source.domain === "Bonus robotique")?.url).toBe(veilleS40.bonus.source.url);
  });
});
