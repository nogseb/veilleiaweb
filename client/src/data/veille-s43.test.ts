import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { veilleS43 } from "./veille-s43";
import { inspectConsolidatedEdition } from "../../../scripts/consolidated-edition-integrity";

describe("S43 consolidée validée", () => {
  it("conserve les huit catégories, une mesure hors compteur et un Bonus sourcé", () => {
    const registry = JSON.parse(readFileSync(new URL("../../../content/2026-W43/sources.json", import.meta.url), "utf8"));
    expect(inspectConsolidatedEdition(veilleS43, registry)).toEqual([]);
    expect(veilleS43.publicationDate).toBe("21 octobre 2026");
    expect(veilleS43.bonus.source.url).toContain("2610.11932");
    expect(veilleS43.caseStudiesCount).toBe(1);
  });
});
