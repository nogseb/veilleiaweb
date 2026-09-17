import { veilleS38 } from "../client/src/data/veille-s38";

const expectedOrder = [
  "GOOGLE AI",
  "ZERO-CLICK",
  "SCHEMA.ORG",
  "DXP / HEADLESS",
  "CDP & DATA",
  "UX / IA",
  "IA / GOV",
  "INNOVATION MKT",
];

const result = {
  week: veilleS38.week,
  year: veilleS38.year,
  domains: veilleS38.domaines.length,
  sources: veilleS38.sourcesCount,
  longDescriptions: veilleS38.domaines.filter((domain) => domain.longDescription).length,
  order: veilleS38.domaines.map((domain) => domain.code),
  orderValid: JSON.stringify(veilleS38.domaines.map((domain) => domain.code)) === JSON.stringify(expectedOrder),
  bonusOutsideDomains: !veilleS38.domaines.some((domain) => domain.code.includes("BONUS")) && Boolean(veilleS38.bonus),
};

console.log(JSON.stringify(result, null, 2));

if (
  result.week !== 38 ||
  result.year !== 2026 ||
  result.domains !== 8 ||
  result.sources !== 9 ||
  result.longDescriptions !== 8 ||
  !result.orderValid ||
  !result.bonusOutsideDomains
) {
  process.exit(1);
}
