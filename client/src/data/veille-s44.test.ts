import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { veilleS44 } from "./veille-s44";
import { inspectConsolidatedEdition } from "../../../scripts/consolidated-edition-integrity";

describe("S44 consolidée validée", () => {
  it("publie huit analyses complètes et les sources réellement retenues", () => {
    const registry = JSON.parse(readFileSync(new URL("../../../content/2026-W44/sources.json", import.meta.url), "utf8"));
    expect(inspectConsolidatedEdition(veilleS44, registry)).toEqual([]);
    expect(veilleS44.publicationDate).toBe("26 octobre 2026");
    expect(veilleS44.bonus.source.url).toContain("2610.25287");
    expect(veilleS44.caseStudiesCount).toBe(0);
  });
  it("présente la diffusion de PHP sans la confondre avec les sites touchés", () => {
    expect(veilleS44.statDominante.chiffre).toBe("69,2 %");
    expect(veilleS44.statDominante.titre).toContain("LANGAGE CÔTÉ SERVEUR IDENTIFIÉ");
    expect(veilleS44.statDominante.titre).toContain("26 OCTOBRE 2026");
    expect(veilleS44.statDominante.description).toContain("Common Vulnerabilities and Exposures");
    expect(veilleS44.statDominante.description).toContain("pas la part de sites vulnérables ou compromis");
    expect(veilleS44.statDominante.source.url).toBe("https://w3techs.com/technologies/details/pl-php");
    expect(veilleS44.domaines[3].description).toContain("Common Vulnerabilities and Exposures");
    expect(veilleS44.sourcesCount).toBe(41);
  });
  it("rend Rea visible dans la carte IA sans créer un neuvième domaine", () => {
    const rea = veilleS44.domaines.find((d) => d.category === "IA")!;
    expect(rea.titre).toMatch(/^REA :/);
    expect(rea.editorialStatus).toBe("SUIVI");
    expect(rea.description).toContain("Reverse Engineer Anything");
    expect(rea.sources.some((s) => s.url === "https://rea.tools/")).toBe(true);
    expect(rea.longDescription).toContain("la récupération de son code original");
    expect(rea.longDescription).toContain("ne donne aucun droit sur la cible");
    expect(rea.longDescription).toContain("OpenAI");
    expect(veilleS44.domaines).toHaveLength(8);
    expect(veilleS44.domaines.filter((d) => d.category === "IA")).toHaveLength(1);
  });
});
