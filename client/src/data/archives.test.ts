import { describe, expect, it } from "vitest";
import { currentEdition, getEditionByWeek } from "./archives";

describe("S39 archive integration", () => {
  it("exposes S39 as the current eight-domain edition", () => {
    expect(currentEdition.week).toBe(39);
    expect(currentEdition.year).toBe(2026);
    expect(currentEdition.domainsCount).toBe(8);
    expect(currentEdition.domaines).toHaveLength(8);
    expect(currentEdition.sourcesCount).toBe(9);
    expect(currentEdition.bonus).toBeDefined();
  });

  it("keeps S38 available as an archive with its distinct Bonus", () => {
    const s38 = getEditionByWeek(38);

    expect(s38).toBeDefined();
    expect(s38?.domainsCount).toBe(8);
    expect(s38?.domaines).toHaveLength(8);
    expect(s38?.bonus?.label).toContain("BONUS #10");
    expect(s38?.bonus?.source.nom).toBe("Reuters");
  });
});
