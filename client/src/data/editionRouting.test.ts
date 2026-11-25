import { describe, expect, it } from "vitest";
import { archives, getEdition, getEditionByWeek } from "./archives";
import { compareEditions, editionKey, editionPath, isValidEditionIdentity } from "../../../shared/editionIdentity";
import { LEGACY_EDITION_YEAR, resolveEditionRoute } from "../../../shared/editionRouting";
import { socialMetadataForPath } from "../../../shared/socialMetadata";

// Les fixtures ne sont jamais ajoutées au contenu public.
describe("Identité des éditions par année ISO / semaine", () => {
  it("distingue deux éditions de même numéro dans des années différentes", () => {
    const historical = getEdition(2026, 47)!;
    const future = { ...historical, year: 2027, signalMajeur: "Fixture de test 2027" };
    const fixtures = [future, historical];
    expect(getEdition(2026, 47, fixtures)).toBe(historical);
    expect(getEdition(2027, 47, fixtures)).toBe(future);
    expect(editionKey(future)).not.toBe(editionKey(historical));
    expect(editionPath(historical)).toBe("/2026/47");
    expect(editionPath(future)).toBe("/2027/47");
  });
  it("ne substitue jamais une édition d’une autre année à une édition absente", () => {
    expect(getEdition(2027, 47)).toBeUndefined();
    expect(getEdition(2026, 20)).toBeUndefined();
    expect(getEditionByWeek(47)).toBe(getEdition(2026, 47));
    expect(LEGACY_EDITION_YEAR).toBe(2026);
  });
  it("ordonne correctement le passage de S53 2026 à S01 2027", () => {
    const fixtures = [{ year: 2027, week: 2 }, { year: 2026, week: 53 }, { year: 2027, week: 1 }];
    expect([...fixtures].sort(compareEditions).map(editionKey)).toEqual(["2026-W53", "2027-W01", "2027-W02"]);
    expect(isValidEditionIdentity(2026, 53)).toBe(true);
    expect(isValidEditionIdentity(2027, 53)).toBe(false);
    expect(isValidEditionIdentity(2032, 53)).toBe(true);
  });
  it("rejette les numéros hors plage ou non entiers", () => {
    for (const [year, week] of [[2026, 0], [2026, 54], [2026, 1.5], [2026.5, 47], [NaN, 47], [999, 47]]) {
      expect(isValidEditionIdentity(year, week)).toBe(false);
      expect(getEdition(year, week)).toBeUndefined();
    }
  });
  it("garantit une URL unique et résoluble pour toutes les archives", () => {
    expect(new Set(archives.map(editionKey)).size).toBe(archives.length);
    for (const edition of archives) {
      const route = resolveEditionRoute(editionPath(edition));
      expect(route.edition).toBe(edition);
      expect(route.canonicalPath).toBe(editionPath(edition));
      expect(route.isEditionPath).toBe(true);
    }
  });
  it("normalise les semaines à un chiffre et préserve le millésime des anciens liens", () => {
    expect(editionPath({ year: 2027, week: 5 })).toBe("/2027/05");
    expect(resolveEditionRoute("/2026/47/?utm_source=teams").canonicalPath).toBe("/2026/47");
    expect(resolveEditionRoute("/semaine/47?utm_source=teams").canonicalPath).toBe("/2026/47");
  });
  it("ne confond pas les pages réservées et les éditions", () => {
    for (const path of ["/", "/archives", "/timeline", "/about", "/stats", "/api/trpc", "/2026/47abc"]) {
      expect(resolveEditionRoute(path).isEditionPath).toBe(false);
    }
    for (const path of ["/2027/47", "/2026/00", "/2026/54", "/2027/53"]) {
      const route = resolveEditionRoute(path);
      expect(route.isEditionPath).toBe(true);
      expect(route.edition).toBeUndefined();
      expect(route.canonicalPath).toBeUndefined();
    }
  });
  it("publie les métadonnées de la bonne année et désindexe les éditions absentes", () => {
    const meta = socialMetadataForPath("/2026/47?utm_source=teams");
    expect(meta.title).toContain("S47 2026");
    expect(meta.canonicalUrl).toBe("https://veilleiaweb.digital/2026/47");
    expect(socialMetadataForPath("/semaine/47")).toEqual(meta);
    expect(socialMetadataForPath("/2027/47").noindex).toBe(true);
    expect(socialMetadataForPath("/2026/47").noindex).toBeUndefined();
  });
});
