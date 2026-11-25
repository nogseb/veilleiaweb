import { archives, getEdition, type ArchiveEdition } from "../client/src/data/archives";
import { editionPath } from "./editionIdentity";
export { editionPath } from "./editionIdentity";

// Tous les liens /semaine/N diffusés avant la migration désignent les éditions 2026.
// Une redirection permanente ne doit jamais être réaffectée à une année ultérieure.
export const LEGACY_EDITION_YEAR = 2026;

export type EditionRoute = {
  isEditionPath: boolean;
  edition: ArchiveEdition | undefined;
  canonicalPath: string | undefined;
};

export function resolveEditionRoute(url: string): EditionRoute {
  let pathname: string;
  try { pathname = new URL(url, "https://veilleiaweb.digital").pathname.replace(/\/+$/, ""); }
  catch { return { isEditionPath: false, edition: undefined, canonicalPath: undefined }; }
  const legacy = /^\/semaine\/(\d{1,2})$/.exec(pathname);
  const qualified = /^\/(\d{4})\/(\d{1,2})$/.exec(pathname);
  if (!legacy && !qualified) return { isEditionPath: false, edition: undefined, canonicalPath: undefined };
  const year = legacy ? LEGACY_EDITION_YEAR : Number(qualified![1]);
  const week = Number(legacy ? legacy[1] : qualified![2]);
  const edition = getEdition(year, week);
  return { isEditionPath: true, edition, canonicalPath: edition ? editionPath(edition) : undefined };
}

export function yearPath(year: number): string {
  return `/${year}/`;
}

export function resolveYearRoute(url: string): {
  isYearPath: boolean;
  year: number | undefined;
  editions: ArchiveEdition[];
  canonicalPath: string | undefined;
} {
  let pathname: string;
  try { pathname = new URL(url, "https://veilleiaweb.digital").pathname.replace(/\/+$/, ""); }
  catch { return { isYearPath: false, year: undefined, editions: [], canonicalPath: undefined }; }
  const match = /^\/(\d{4})$/.exec(pathname);
  const year = match ? Number(match[1]) : undefined;
  if (year === undefined || year < 1000) return { isYearPath: false, year: undefined, editions: [], canonicalPath: undefined };
  return {
    isYearPath: true,
    year,
    editions: archives.filter((edition) => edition.year === year),
    canonicalPath: yearPath(year),
  };
}
