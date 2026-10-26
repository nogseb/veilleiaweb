import { describe, expect, it } from "vitest";
import { currentEdition, getEditionByWeek } from "./archives";

describe("S44 archive integration", () => {
  it("exposes S44 as the current qualified-domain edition", () => {
    expect(currentEdition.week).toBe(44);
    expect(currentEdition.year).toBe(2026);
    expect(currentEdition.domainsCount).toBe(4);
    expect(currentEdition.domaines).toHaveLength(4);
    expect(currentEdition.sourcesCount).toBe(12);
    expect(currentEdition.bonus).toBeDefined();
  });

  it("keeps the corrected S43 available as a complete archive with its Bonus", () => {
    const s43 = getEditionByWeek(43);
    expect(s43).toBeDefined();
    expect(s43?.domainsCount).toBe(9);
    expect(s43?.domaines).toHaveLength(9);
    expect(s43?.sourcesCount).toBe(32);
    expect(s43?.bonus?.label).toContain("BONUS #10");
  });
});
