import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { veilleS43 } from "./veille-s43";

type SourceRegistry = {
  domainsCount: number;
  hiddenDomainsCount: number;
  sourcesCount: number;
  sources: Array<{ id: number; domain: string; date: string; url: string }>;
  hiddenDomains: Array<{ domain: string; reason: string }>;
  exceptions: Array<{ url: string; reason: string }>;
};

describe("S43 user-supplied editorial integrity", () => {
  const expectedOrder = ["GOOGLE AI", "ZERO-CLICK / GEO", "ROBOTS / DATA", "DXP / CMS", "CDP & DATA", "MESURE", "UX / AGENTS", "IA / GOV", "INNOV MKT"];

  it("covers the nine user-approved S43 domains in their editorial order", () => {
    expect(veilleS43.week).toBe(43);
    expect(veilleS43.year).toBe(2026);
    expect(veilleS43.publicationDate).toBe("21 octobre 2026");
    expect(veilleS43.domainsCount).toBe(9);
    expect(veilleS43.domaines).toHaveLength(9);
    expect(veilleS43.domaines.map((domain) => domain.code)).toEqual(expectedOrder);
    expect(veilleS43.domaines.every((domain) => domain.longDescription.length >= 150)).toBe(true);
  });

  it("keeps the Bonus outside the domain count with its source", () => {
    expect(veilleS43.bonus.label).toContain("BONUS #10");
    expect(veilleS43.bonus.source.url).toMatch(/^https:\/\//);
    expect(veilleS43.domaines.some((domain) => domain.code.includes("BONUS"))).toBe(false);
  });

  it("matches 32 unique report sources, documented exceptions and no masked domain", () => {
    const registry = JSON.parse(
      readFileSync(new URL("../../../content/2026-W43/sources.json", import.meta.url), "utf8"),
    ) as SourceRegistry;

    expect(registry.domainsCount).toBe(veilleS43.domainsCount);
    expect(registry.hiddenDomainsCount).toBe(0);
    expect(registry.hiddenDomains).toHaveLength(0);
    expect(registry.sourcesCount).toBe(veilleS43.sourcesCount);
    expect(registry.sources).toHaveLength(32);
    expect(new Set(registry.sources.map((source) => source.url)).size).toBe(32);
    expect(registry.exceptions).toHaveLength(4);
    expect(registry.sources.some((source) => source.domain === "Cas d’école — Currys")).toBe(true);
    expect(registry.sources.find((source) => source.domain === "Bonus robotique / fun fact")?.url).toBe(veilleS43.bonus.source.url);
  });
});
