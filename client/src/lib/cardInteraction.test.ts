import type { KeyboardEvent } from "react";
import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";
import { activateCardOnKey } from "./cardInteraction";

function eventFor(key: string, repeat = false, nested = false) {
  const currentTarget = { click: vi.fn() };
  const preventDefault = vi.fn();
  const event = { key, repeat, currentTarget, target: nested ? {} : currentTarget, preventDefault } as unknown as KeyboardEvent<HTMLElement>;
  return { event, currentTarget, preventDefault };
}

describe("Cartes interactives", () => {
  it.each(["Enter", " "])("active une seule fois la carte avec %s", (key) => {
    const { event, currentTarget, preventDefault } = eventFor(key);
    activateCardOnKey(event);
    expect(preventDefault).toHaveBeenCalledOnce();
    expect(currentTarget.click).toHaveBeenCalledOnce();
  });
  it("laisse les autres touches fonctionner normalement", () => {
    const { event, currentTarget, preventDefault } = eventFor("Tab");
    activateCardOnKey(event);
    expect(preventDefault).not.toHaveBeenCalled();
    expect(currentTarget.click).not.toHaveBeenCalled();
  });
  it("ignore les répétitions de touche et les événements d’un enfant", () => {
    for (const args of [["Enter", true, false], ["Enter", false, true]] as const) {
      const { event, currentTarget, preventDefault } = eventFor(...args);
      activateCardOnKey(event);
      expect(currentTarget.click).not.toHaveBeenCalled();
      expect(preventDefault).not.toHaveBeenCalled();
    }
  });
  it("préserve les variantes tactile et reduced-motion sans zoom ni ombre", () => {
    const css = readFileSync(new URL("../styles/card-interactions.css", import.meta.url), "utf8");
    expect(css).toContain("@media (hover: hover) and (pointer: fine)");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain(".viw-interactive-card:active");
    expect(css).toContain(".viw-interactive-card:focus-visible");
    expect(css).not.toMatch(/scale\(|box-shadow/);
  });
  it.each(["Home", "WeekDetail"])("branche les cartes d’analyse et Bonus de %s au clavier", (page) => {
    const source = readFileSync(new URL(`../pages/${page}.tsx`, import.meta.url), "utf8");
    expect(source.match(/onKeyDown=\{activateCardOnKey\}/g)).toHaveLength(2);
    expect(source.match(/aria-haspopup="dialog"/g)).toHaveLength(2);
    expect(source).toContain("viw-card--bonus");
    expect(source).toContain('className="viw-card-arrow"');
  });
});
