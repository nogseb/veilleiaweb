import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { archives, currentEdition } from "../client/src/data/archives";
import { injectSocialMetadata, renderSocialHead, SHARE_IMAGE_URL, socialMetadataForPath } from "../shared/socialMetadata";

describe("Aperçus de partage Teams / Open Graph", () => {
  it("fournit titre et description de la semaine actuelle dans le HTML sans JavaScript", () => {
    const meta = socialMetadataForPath("/?partage=2026-W44");
    expect(meta.title).toContain(`S${currentEdition.week}`);
    expect(meta.description).toContain("Rea");
    expect(meta.description.length).toBeLessThanOrEqual(180);
    expect(meta.canonicalUrl).toBe("https://veilleiaweb.digital/");
    const head = renderSocialHead(meta);
    expect(head).toContain('property="og:description"');
    expect(head).toContain('name="description"');
    expect(head).toContain('name="twitter:description"');
    expect(head).toContain(SHARE_IMAGE_URL);
    expect(head).not.toContain("checkpoint-screenshot");
    expect(head).toContain('property="og:image:height" content="1200"');
  });
  it("personnalise chaque édition archivée et ignore les paramètres de tracking", () => {
    for (const edition of archives) {
      const meta = socialMetadataForPath(`/semaine/${edition.week}?from=teams`);
      expect(meta.title).toContain(`S${edition.week} ${edition.year}`);
      expect(meta.canonicalUrl).toBe(`https://veilleiaweb.digital/semaine/${edition.week}`);
      expect(meta.description.length).toBeGreaterThan(10);
      expect(meta.noindex).toBeUndefined();
    }
    expect(socialMetadataForPath("/semaine/43").title).not.toBe(socialMetadataForPath("/").title);
  });
  it("préserve la balise Google et supprime les doublons de titre, description et image", () => {
    const template = readFileSync(new URL("../client/index.html", import.meta.url), "utf8");
    const dirty = template.replace("</head>", '<meta property="og:image" content="https://example.com/old.png"><title>ancien</title><link rel="canonical" href="https://example.com/"></head>');
    const output = injectSocialMetadata(dirty, "/semaine/43");
    expect(output.match(/<title>/g)).toHaveLength(1);
    expect(output.match(/property="og:image"/g)).toHaveLength(1);
    expect(output.match(/rel="canonical"/g)).toHaveLength(1);
    expect(output).toContain("G-NZ24YB5E5N");
    expect(output).toContain("analytics_storage: 'denied'");
    expect(output).toContain('<div id="root"></div>');
    expect(output).not.toContain("https://example.com");
  });
  it("échappe les textes et caractères de remplacement HTML", () => {
    const meta = { ...socialMetadataForPath("/"), title: 'Test " <script> & $&', description: 'A < B & "C"' };
    const html = renderSocialHead(meta);
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("&quot;");
    expect(html).not.toContain("<script>");
    expect(html).toContain("$&");
  });
  it("ne publie pas de métadonnées privées sur la page des statistiques", () => {
    expect(socialMetadataForPath("/stats").noindex).toBe(true);
    expect(socialMetadataForPath("/about").noindex).toBeUndefined();
    expect(socialMetadataForPath("/archives").description).toContain("éditions hebdomadaires");
  });
});
