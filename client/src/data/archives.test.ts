import { describe, expect, it } from "vitest";
import { currentEdition, getEditionByWeek } from "./archives";

describe("S43 archive integration", () => {
  it("exposes the user-approved S43 as the current edition", () => {
    expect(currentEdition.week).toBe(43);
    expect(currentEdition.year).toBe(2026);
    expect(currentEdition.domainsCount).toBe(9);
    expect(currentEdition.domaines).toHaveLength(9);
    expect(currentEdition.sourcesCount).toBe(32);
    expect(currentEdition.bonus).toBeDefined();
  });

  it("keeps S42 available as an archive with its distinct Bonus", () => {
    const s42 = getEditionByWeek(42);

    expect(s42).toBeDefined();
    expect(s42?.domainsCount).toBe(6);
    expect(s42?.domaines).toHaveLength(6);
    expect(s42?.bonus?.label).toContain("BONUS #10");
    expect(s42?.bonus?.source.nom).toBe("MIT News");
  });
});
