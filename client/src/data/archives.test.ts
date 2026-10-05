import { describe, expect, it } from "vitest";
import { currentEdition, getEditionByWeek } from "./archives";

describe("S41 archive integration", () => {
  it("exposes S41 as the current qualified-domain edition", () => {
    expect(currentEdition.week).toBe(41);
    expect(currentEdition.year).toBe(2026);
    expect(currentEdition.domainsCount).toBe(3);
    expect(currentEdition.domaines).toHaveLength(3);
    expect(currentEdition.sourcesCount).toBe(7);
    expect(currentEdition.bonus).toBeDefined();
  });

  it("keeps S40 available as an archive with its distinct Bonus", () => {
    const s40 = getEditionByWeek(40);

    expect(s40).toBeDefined();
    expect(s40?.domainsCount).toBe(8);
    expect(s40?.domaines).toHaveLength(8);
    expect(s40?.bonus?.label).toContain("BONUS #10");
    expect(s40?.bonus?.source.nom).toBe("International Federation of Robotics");
  });
});
