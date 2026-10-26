import { currentEdition, getEditionByWeek, type ArchiveEdition } from "../client/src/data/archives";

export const SITE_ORIGIN = "https://veilleiaweb.digital";
export const SITE_NAME = "Veille Stratégique IA & Web";
export const SHARE_IMAGE_PATH = "/manus-storage/veille-ia-web-partage_c8130181.png";
// Permanent public URL: social scrapers must not cache an expiring signed redirect.
export const SHARE_IMAGE_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/107695875/fdzTkSERlfkLyzoo.png";
export const SHARE_IMAGE_ALT = "Veille hebdomadaire — Veille Stratégique IA & Web — Éclairer les décisions digitales";

export type SocialMetadata = {
  title: string;
  description: string;
  canonicalUrl: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  type: "website" | "article";
  noindex?: boolean;
};

function cleanExcerpt(value: string, max = 180): string {
  const text = value.replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  const shorter = text.slice(0, max - 1);
  return shorter.slice(0, shorter.lastIndexOf(" ")) + "…";
}

function editionDescription(edition: ArchiveEdition): string {
  if (edition.shareDescription) return cleanExcerpt(edition.shareDescription);
  return cleanExcerpt(`S${edition.week} : ${edition.signalMajeur} ${edition.domainsCount} domaines analysés pour éclairer les décisions digitales.`);
}

export function socialMetadataForPath(url: string): SocialMetadata {
  let pathname = "/";
  try { pathname = new URL(url, SITE_ORIGIN).pathname; } catch { /* safe default */ }
  if (pathname !== "/") pathname = pathname.replace(/\/+$/, "");
  const weekMatch = /^\/semaine\/(\d{1,2})$/.exec(pathname);
  const edition = pathname === "/" || pathname === "/index.html"
    ? currentEdition
    : weekMatch ? getEditionByWeek(Number(weekMatch[1])) : undefined;
  const base = {
    image: SHARE_IMAGE_URL,
    imageWidth: 1200,
    imageHeight: 1200,
    canonicalUrl: new URL(pathname === "/index.html" ? "/" : pathname, SITE_ORIGIN).href,
  };
  if (edition) return {
    ...base,
    title: `Veille IA & Web — S${edition.week} ${edition.year} · ${edition.date}`,
    description: editionDescription(edition),
    type: "article",
  };
  const pages: Record<string, { title: string; description: string }> = {
    "/archives": {
      title: "Archives — Veille Stratégique IA & Web",
      description: "Retrouvez les éditions hebdomadaires de la veille IA & Web : analyses, sources et priorités pour les projets digitaux dans l’enseignement supérieur.",
    },
    "/timeline": {
      title: "Mémoire stratégique — Veille IA & Web",
      description: "Les signaux qui structurent les projets digitaux : évolution de la recherche IA, architectures web, data marketing et gouvernance.",
    },
    "/about": {
      title: "À propos — Veille Stratégique IA & Web",
      description: "Une veille hebdomadaire sourcée sur l’IA, le SEO/GEO, les architectures web et la data marketing, au service des décisions digitales de TBS Education.",
    },
  };
  const page = pages[pathname];
  return {
    ...base,
    title: page?.title ?? SITE_NAME,
    description: page?.description ?? "Veille hebdomadaire IA & Web : sources, analyses et priorités pour éclairer les décisions digitales.",
    type: "website",
    ...(!page ? { noindex: true } : {}),
  };
}

export function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

export function renderSocialHead(meta: SocialMetadata): string {
  const tag = (key: string, value: string, property = false) =>
    `<meta ${property ? "property" : "name"}="${key}" content="${escapeHtml(value)}" />`;
  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    tag("description", meta.description),
    `<link rel="canonical" href="${escapeHtml(meta.canonicalUrl)}" />`,
    tag("og:type", meta.type, true),
    tag("og:site_name", SITE_NAME, true),
    tag("og:locale", "fr_FR", true),
    tag("og:url", meta.canonicalUrl, true),
    tag("og:title", meta.title, true),
    tag("og:description", meta.description, true),
    tag("og:image", meta.image, true),
    tag("og:image:secure_url", meta.image, true),
    tag("og:image:type", "image/png", true),
    tag("og:image:width", String(meta.imageWidth), true),
    tag("og:image:height", String(meta.imageHeight), true),
    tag("og:image:alt", SHARE_IMAGE_ALT, true),
    tag("twitter:card", "summary"),
    tag("twitter:title", meta.title),
    tag("twitter:description", meta.description),
    tag("twitter:image", meta.image),
    tag("twitter:image:alt", SHARE_IMAGE_ALT),
    ...(meta.noindex ? [tag("robots", "noindex, nofollow")] : []),
  ].join("\n    ");
}

/** Server + build own the head. No browser JS is needed by Teams/other scrapers. */
export function injectSocialMetadata(html: string, url = "/"): string {
  return html.replace(/<head\b[^>]*>[\s\S]*?<\/head>/i, (head) => {
    const clean = head
      .replace(/<!--social-meta:start-->[\s\S]*?<!--social-meta:end-->/g, "")
      .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
      .replace(/<meta\b[^>]*>/gi, (tag) => {
        const key = /\b(?:name|property)\s*=\s*["']([^"']+)["']/i.exec(tag)?.[1].toLowerCase();
        return key && (key === "description" || key === "robots" || key.startsWith("og:") || key.startsWith("twitter:")) ? "" : tag;
      })
      .replace(/<link\b[^>]*>/gi, (tag) => /\brel\s*=\s*["']canonical["']/i.test(tag) ? "" : tag);
    return clean.replace(/<\/head>/i, () => `    <!--social-meta:start-->\n    ${renderSocialHead(socialMetadataForPath(url))}\n    <!--social-meta:end-->\n  </head>`);
  });
}
