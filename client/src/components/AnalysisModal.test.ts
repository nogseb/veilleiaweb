import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import AnalysisModal, { analysisLabel } from "./AnalysisModal";
import { veilleS43 } from "../data/veille-s43";
import { veilleS44 } from "../data/veille-s44";

describe("Modale d’analyse partagée", () => {
  it("numérote les domaines et distingue la mesure transversale", () => {
    expect(analysisLabel(veilleS44.domaines[0])).toBe("01 — GOOGLE AI");
    expect(analysisLabel(veilleS44.measurement)).toBe("TRANSVERSAL — MESURE");
  });
  it("rend une face synthèse avec sources, analyse et fermeture pour chaque édition", () => {
    for (const edition of [veilleS43, veilleS44]) {
      for (const content of [...edition.domaines, edition.measurement]) {
        const html = renderToStaticMarkup(createElement(AnalysisModal, {
          content, week: edition.week, route: edition.week === 44 ? "home" : "archives",
          onClose: () => {}, onTrack: () => {},
        }));
        expect(html).toContain('role="dialog"');
        expect(html).toContain('aria-modal="true"');
        expect(html).toContain("ANALYSE ↔");
        expect(html).toContain("POINTS CLÉS");
        expect(html).toContain("SOURCES");
        for (const source of content.sources) expect(html).toContain(source.url.replaceAll("&", "&amp;"));
      }
    }
  });
});
