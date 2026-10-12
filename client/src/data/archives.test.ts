import { describe, expect, it } from "vitest";
import { currentEdition, getEditionByWeek } from "./archives";

describe("S42 archive integration", () => {
  it("exposes S42 as the current qualified-domain edition", () => {
    expect(currentEdition.week).toBe(42);
    expect(currentEdition.year).toBe(2026);
    expect(currentEdition.domainsCount).toBe(6);
    expect(currentEdition.domaines).toHaveLength(6);
    expect(currentEdition.sourcesCount).toBe(16);
    expect(currentEdition.bonus).toBeDefined();
  });

  it("keeps S41 available as an archive with its distinct Bonus", () => {
    const s41 = getEditionByWeek(41);

    expect(s41).toBeDefined();
    expect(s41?.domainsCount).toBe(3);
    expect(s41?.domaines).toHaveLength(3);
    expect(s41?.bonus?.label).toContain("BONUS #10");
    expect(s41?.bonus?.source.nom).toBe("MIT News");
  });
});
