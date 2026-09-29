import { describe, expect, it } from "vitest";
import { currentEdition, getEditionByWeek } from "./archives";

describe("S40 archive integration", () => {
  it("exposes S40 as the current eight-domain edition", () => {
    expect(currentEdition.week).toBe(40);
    expect(currentEdition.year).toBe(2026);
    expect(currentEdition.domainsCount).toBe(8);
    expect(currentEdition.domaines).toHaveLength(8);
    expect(currentEdition.sourcesCount).toBe(11);
    expect(currentEdition.bonus).toBeDefined();
  });

  it("keeps S39 available as an archive with its distinct Bonus", () => {
    const s39 = getEditionByWeek(39);

    expect(s39).toBeDefined();
    expect(s39?.domainsCount).toBe(8);
    expect(s39?.domaines).toHaveLength(8);
    expect(s39?.bonus?.label).toContain("BONUS #10");
    expect(s39?.bonus?.source.nom).toBe("MIT News");
  });
});
