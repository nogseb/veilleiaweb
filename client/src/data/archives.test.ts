import { describe, expect, it } from "vitest";
import { archives, currentEdition, getEditionByWeek, publicEdition } from "./archives";
import { veilleS43 } from "./veille-s43";
import { veilleS44 } from "./veille-s44";
import { veilleS45 } from "./veille-s45";

function visibleStrings(value: unknown, key = ""): string[] {
  if (typeof value === "string") return key === "url" || key === "date" ? [] : [value];
  if (Array.isArray(value)) return value.flatMap(v => visibleStrings(v));
  if (value && typeof value === "object") return Object.entries(value).flatMap(([k, v]) => visibleStrings(v, k));
  return [];
}

describe("Archives S45 et confidentialité publique", () => {
  it("présente S45 complète, sans doublon de mesure transversale", () => {
    expect(currentEdition.week).toBe(45);
    expect(currentEdition.domainsCount).toBe(9);
    expect(currentEdition.domaines).toHaveLength(9);
    expect(currentEdition.sourcesCount).toBe(veilleS45.sourcesCount);
    expect(currentEdition.measurement).toBeUndefined();
    expect(currentEdition.domaines.find(d => d.id === 6)?.category).toBe("MESURE");
    expect(currentEdition.bonus?.source).toEqual(veilleS45.bonus.source);
    expect(archives.slice(0, 3).map(e => e.week)).toEqual([45, 44, 43]);
  });
  it("archive S44 complète avec sa mesure transversale, son descriptif et son Bonus", () => {
    const s44 = getEditionByWeek(44)!;
    expect(s44.domainsCount).toBe(veilleS44.domainsCount);
    expect(s44.sourcesCount).toBe(veilleS44.sourcesCount);
    expect(s44.domaines).toHaveLength(8);
    expect(s44.measurement?.sources.map(({ url, date }) => ({ url, date }))).toEqual(veilleS44.measurement.sources.map(({ url, date }) => ({ url, date })));
    expect(s44.bonus?.source.url).toBe(veilleS44.bonus.source.url);
    expect(s44.bonus?.source.date).toBe(veilleS44.bonus.source.date);
    expect(s44.shareDescription).toBeDefined();
    expect(s44.bonus?.label).toContain("BONUS #10");
  });
  it("préserve S43 et les archives précédentes, sans modifier leurs URL ou compteurs", () => {
    const s43 = getEditionByWeek(43)!;
    expect(s43.domainsCount).toBe(8);
    expect(s43.sourcesCount).toBe(veilleS43.sourcesCount);
    expect(s43.measurement?.sources.map(({ url, date }) => ({ url, date }))).toEqual(veilleS43.measurement.sources.map(({ url, date }) => ({ url, date })));
    expect(s43.bonus?.source.url).toBe(veilleS43.bonus.source.url);
    expect(getEditionByWeek(42)?.bonus?.label).toContain("BONUS #10");
    expect(getEditionByWeek(35)?.bonus?.label).toContain("BONUS");
    expect(new Set(archives.map(e => e.week)).size).toBe(archives.length);
  });
  it("anonymise les textes publics mais préserve les données brutes, dates et liens", () => {
    for (const edition of archives) expect(visibleStrings(edition).join("\n")).not.toMatch(/\bTBS(?:\s+Education)?\b|Toulouse Business School|CVE-\d{4}-\d+|\b\d+(?:\.\d+){2,3}\b/i);
    const original = getEditionByWeek(44)!;
    const test = { ...original, syntheseExecutive: "TBS Education, PHP 8.2.35 et CVE-2026-12345" };
    const copy = publicEdition(test);
    expect(copy.syntheseExecutive).toContain("une école");
    expect(copy.syntheseExecutive).not.toContain("8.2.35");
    expect(copy.date).toBe(test.date);
    expect(copy.bonus?.source).toEqual(test.bonus?.source);
    expect(test.syntheseExecutive).toContain("TBS Education");
  });
});
