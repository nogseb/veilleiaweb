export type EditionIdentity = { year: number; week: number };

/** `year` désigne l’année ISO de l’édition, pas l’année civile de publication. */
export function isValidEditionIdentity(year: number, week: number): boolean {
  if (!Number.isInteger(year) || year < 1000 || year > 9999 || !Number.isInteger(week) || week < 1 || week > 53) return false;
  if (week < 53) return true;
  const jan1 = new Date(Date.UTC(year, 0, 1)).getUTCDay();
  const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  return jan1 === 4 || (jan1 === 3 && leapYear);
}

export function editionKey({ year, week }: EditionIdentity): string {
  return `${year}-W${String(week).padStart(2, "0")}`;
}

export function editionPath({ year, week }: EditionIdentity): string {
  return `/${year}/${String(week).padStart(2, "0")}`;
}

/** Tri chronologique, y compris entre S53 d’une année et S01 de la suivante. */
export function compareEditions(a: EditionIdentity, b: EditionIdentity): number {
  return a.year - b.year || a.week - b.week;
}
