import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import EditorialBackground from "./EditorialBackground";

const css = readFileSync(new URL("../styles/editorial-motion.css", import.meta.url), "utf8");
const pageSource = (page: string) => readFileSync(new URL(`../pages/${page}.tsx`, import.meta.url), "utf8");

describe("Option A — trame éditoriale", () => {
  it("rend un SVG décoratif ignoré des technologies d’assistance", () => {
    const html = renderToStaticMarkup(createElement(EditorialBackground));
    expect(html).toContain('class="viw-editorial-bg" aria-hidden="true"');
    expect(html).toContain('focusable="false"');
    expect(html).not.toContain("<img");
    expect(html).not.toContain("<script");
  });

  it("limite la géométrie à cinq traits normalisés et un segment accentué", () => {
    const html = renderToStaticMarkup(createElement(EditorialBackground));
    expect(html.match(/pathLength="1"/g)).toHaveLength(5);
    expect(html.match(/class="viw-trame-accent"/g)).toHaveLength(1);
  });

  it("prévoit un dessin ponctuel et un état statique accessible", () => {
    expect(css).toContain("animation-iteration-count: 1");
    expect(css).not.toMatch(/animation[^;]*\binfinite\b/);
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain("stroke-dashoffset: 0");
    expect(css).toContain("pointer-events: none");
    expect(css).toContain("isolation: isolate");
  });

  it.each(["Home", "Archives", "About", "Timeline", "WeekDetail"])("branche le composant dans %s sans modifier le header partagé", (page) => {
    const source = pageSource(page);
    expect(source).toContain('import EditorialBackground from "@/components/EditorialBackground"');
    expect(source).toContain('className="viw-editorial-page ');
    expect(source).toMatch(/<Header activePage="[^"]+" \/>\s*<EditorialBackground \/>/);
  });

  it("limite les attributs d’apparition aux quatre premières cartes annuelles", () => {
    const source = pageSource("Archives");
    expect(source).toContain('data-viw-reveal={index < 4 ? "true" : undefined}');
    expect(source).toContain("data-viw-delay={index < 4 ? index : undefined}");
    expect(source).toContain('className="viw-card-arrow" aria-hidden="true"');
    expect(source).toContain("href={editionPath(edition)}");
  });

  it("n’ajoute pas de trame au message d’édition absente", () => {
    const source = pageSource("WeekDetail");
    const missingEdition = source.split("if (!edition) {")[1].split("const stats =")[0];
    expect(missingEdition).not.toContain("<EditorialBackground");
    expect(missingEdition).not.toContain("viw-editorial-page");
  });
});
