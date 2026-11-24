import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import registry from "../../../content/2026-W48/sources.json";
import { veilleS48 } from "./veille-s48";

const report = readFileSync(
  new URL("../../../content/2026-W48/rapport.md", import.meta.url),
  "utf8"
);

describe("Veille S48", () => {
  it("conserve les dates, l’ordre des domaines et les compteurs du rapport", () => {
    expect(registry.publicationDate).toBe("2026-11-24");
    expect([registry.windowStart, registry.windowEnd]).toEqual([
      "2026-11-17",
      "2026-11-24",
    ]);
    expect(veilleS48.domaines.map(({ id }) => id)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
    expect(veilleS48.domainsCount).toBe(registry.domainsCount);
    expect(veilleS48.caseStudies).toHaveLength(registry.caseStudiesCount);
    expect(report).toContain(
      `| 9/9 | ${veilleS48.sourcesCount} | ${veilleS48.criticalCount} | ${veilleS48.importantCount} | ${9 - veilleS48.criticalCount - veilleS48.importantCount} | ${veilleS48.actionsCount} | ${veilleS48.emergingCount} | ${veilleS48.caseStudiesCount} | 1 |`
    );
    for (const domaine of veilleS48.domaines) {
      expect(report).toContain(domaine.titre);
      expect(
        domaine.details.some(detail =>
          detail.startsWith("Impact pour une école")
        )
      ).toBe(true);
      expect(
        domaine.details.some(detail => detail.startsWith("Recommandation"))
      ).toBe(true);
    }
  });

  it("attribue chaque source à un seul domaine ou au Bonus", () => {
    const cited = [
      ...veilleS48.domaines.flatMap(({ sources }) =>
        sources.map(({ url }) => url)
      ),
      ...veilleS48.bonus.sources.map(({ url }) => url),
    ];
    expect(cited).toEqual(registry.sources.map(({ url }) => url));
    expect(new Set(cited).size).toBe(veilleS48.sourcesCount);
    expect(
      registry.sources.every(
        ({ opened, level, status, motif }) =>
          opened && ["N1", "N2"].includes(level) && status && motif
      )
    ).toBe(true);
    const reportUrls = [...report.matchAll(/\]\((https:\/\/[^)]+)\)/g)].map(
      ([, url]) => url
    );
    expect(reportUrls).toEqual(cited);
    for (const { id } of registry.sources) {
      expect(report.match(new RegExp(`name="source-${id}"`, "g"))).toHaveLength(
        1
      );
    }
  });

  it("garde le Bonus distinct et préserve la confidentialité publique", () => {
    const words = veilleS48.bonus.description.trim().split(/\s+/).length;
    expect(words).toBeGreaterThanOrEqual(80);
    expect(words).toBeLessThanOrEqual(120);
    expect(veilleS48.bonus.perspective).toContain("Ce qu’on en retient");
    expect(veilleS48.actions.length).toBeGreaterThanOrEqual(5);
    expect(veilleS48.actions.length).toBeLessThanOrEqual(8);
    expect(veilleS48.signauxEmergents.length).toBeGreaterThanOrEqual(4);
    expect(veilleS48.signauxEmergents.length).toBeLessThanOrEqual(6);
    expect(
      veilleS48.tendancesPassees.some(({ titre }) => titre.includes("Currys"))
    ).toBe(true);
    expect(`${report}\n${JSON.stringify(veilleS48)}`).not.toMatch(
      /TBS\s*Education|Toulouse Business School/i
    );
  });
});
