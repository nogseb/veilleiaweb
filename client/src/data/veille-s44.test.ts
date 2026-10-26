import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { veilleS44 } from "./veille-s44";
import { inspectConsolidatedEdition } from "../../../scripts/consolidated-edition-integrity";

describe("S44 consolidée validée", () => {
  it("publie huit analyses complètes et les sources réellement retenues", () => {
    const registry = JSON.parse(readFileSync(new URL("../../../content/2026-W44/sources.json", import.meta.url), "utf8"));
    expect(inspectConsolidatedEdition(veilleS44, registry)).toEqual([]);
    expect(veilleS44.publicationDate).toBe("26 octobre 2026");
    expect(veilleS44.bonus.source.url).toContain("2610.25287");
    expect(veilleS44.caseStudiesCount).toBe(0);
  });
});
