import { describe, expect, it } from "vitest";
import { currentEdition, getEditionByWeek } from "./archives";
import { veilleS43 } from "./veille-s43";
import { veilleS44 } from "./veille-s44";

describe("Archives consolidées S43/S44", () => {
  it("présente S44 complète comme édition courante", () => {
    expect(currentEdition.week).toBe(44);
    expect(currentEdition.domainsCount).toBe(8);
    expect(currentEdition.domaines).toHaveLength(8);
    expect(currentEdition.sourcesCount).toBe(veilleS44.sourcesCount);
    expect(currentEdition.measurement).toEqual(veilleS44.measurement);
    expect(currentEdition.bonus).toEqual(veilleS44.bonus);
  });
  it("préserve S43 corrigée avec mesure et Bonus distincts", () => {
    const s43 = getEditionByWeek(43);
    expect(s43?.domainsCount).toBe(8);
    expect(s43?.domaines).toHaveLength(8);
    expect(s43?.sourcesCount).toBe(veilleS43.sourcesCount);
    expect(s43?.measurement).toEqual(veilleS43.measurement);
    expect(s43?.bonus).toEqual(veilleS43.bonus);
  });
  it("préserve les archives précédentes sans imposer les nouvelles propriétés", () => {
    expect(getEditionByWeek(42)?.week).toBe(42);
    expect(getEditionByWeek(42)?.bonus?.label).toContain("BONUS #10");
    expect(getEditionByWeek(35)?.bonus?.label).toContain("BONUS");
  });
});
