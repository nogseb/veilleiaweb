import { describe, expect, it } from "vitest";
import { currentEdition, getEditionByWeek } from "./archives";

describe("S38 archive integration", () => {
  it("exposes S38 as the current eight-domain edition", () => {
    expect(currentEdition.week).toBe(38);
    expect(currentEdition.year).toBe(2026);
    expect(currentEdition.domainsCount).toBe(8);
    expect(currentEdition.domaines).toHaveLength(8);
    expect(currentEdition.sourcesCount).toBe(9);
    expect(currentEdition.bonus).toBeDefined();
  });

  it("keeps S37 available as an archive with its distinct Bonus", () => {
    const s37 = getEditionByWeek(37);

    expect(s37).toBeDefined();
    expect(s37?.domainsCount).toBe(8);
    expect(s37?.domaines).toHaveLength(8);
    expect(s37?.bonus?.label).toContain("BONUS #10");
    expect(s37?.bonus?.source.nom).toBe("IFA Berlin");
  });
});
