import { Header, Footer } from "@/components/Layout";
import { allArchives } from "@/data/archives";

// Extraire tous les domaines uniques à travers toutes les semaines
const allDomainCodes = Array.from(
  new Set(allArchives.flatMap((a) => a.domaines.map((d) => d.code)))
);

// Semaines triées par ordre chronologique (croissant)
const weeks = [...allArchives].sort((a, b) => a.week - b.week);

// Construire la matrice domaine × semaine
interface CellData {
  badge: string | null;
  titre: string;
}

const matrix: Record<string, Record<number, CellData>> = {};
allDomainCodes.forEach((code) => {
  matrix[code] = {};
  weeks.forEach((w) => {
    const domaine = w.domaines.find((d) => d.code === code);
    if (domaine) {
      matrix[code][w.week] = { badge: domaine.badge, titre: domaine.titre };
    } else {
      matrix[code][w.week] = { badge: null, titre: "" };
    }
  });
});

// Niveaux de criticité ordonnés (pour détecter les changements)
const badgeLevel: Record<string, number> = {
  CRITIQUE: 3,
  IMPORTANT: 2,
  "À SURVEILLER": 1,
};

function getBadgeColor(badge: string | null): string {
  if (!badge) return "bg-[#F5F4F0] dark:bg-[#2A2A2D]";
  switch (badge) {
    case "CRITIQUE":
      return "bg-[#FF4757]";
    case "IMPORTANT":
      return "bg-[#0F0F10] dark:bg-[#F5F4F0]";
    case "À SURVEILLER":
      return "bg-[#F5F4F0] dark:bg-[#333] border border-[#0F0F10] dark:border-[#888]";
    default:
      return "bg-[#F5F4F0] dark:bg-[#2A2A2D]";
  }
}

function getBadgeTextColor(badge: string | null): string {
  if (!badge) return "text-[#8A8A8A]";
  switch (badge) {
    case "CRITIQUE":
      return "text-white";
    case "IMPORTANT":
      return "text-white dark:text-[#0F0F10]";
    case "À SURVEILLER":
      return "text-[#0F0F10] dark:text-[#F5F4F0]";
    default:
      return "text-[#8A8A8A]";
  }
}

function getEvolutionIndicator(
  code: string,
  weekIndex: number
): { direction: "up" | "down" | "stable" | "new"; color: string } | null {
  if (weekIndex === 0) return null;
  const currentWeek = weeks[weekIndex].week;
  const prevWeek = weeks[weekIndex - 1].week;
  const current = matrix[code][currentWeek]?.badge;
  const prev = matrix[code][prevWeek]?.badge;

  if (!prev && current) return { direction: "new", color: "text-[#FF4757]" };
  if (!current) return null;
  if (!prev) return null;

  const currentLevel = badgeLevel[current] || 0;
  const prevLevel = badgeLevel[prev] || 0;

  if (currentLevel > prevLevel)
    return { direction: "up", color: "text-[#FF4757]" };
  if (currentLevel < prevLevel)
    return { direction: "down", color: "text-green-600 dark:text-green-400" };
  return { direction: "stable", color: "text-[#8A8A8A]" };
}

export default function Timeline() {
  return (
    <div className="min-h-screen bg-[#F5F4F0] dark:bg-[#0F0F10] transition-colors duration-200">
      <Header activePage="timeline" />
      <main className="pt-14">
        <div className="container py-16">
          {/* Titre */}
          <div className="mb-4">
            <span className="text-xs tracking-[0.2em] uppercase text-[#FF4757]">
              — ÉVOLUTION PAR DOMAINE
            </span>
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] uppercase text-[#0F0F10] dark:text-[#F5F4F0] mb-4">
            TIMELINE
          </h1>
          <p className="text-sm text-[#8A8A8A] max-w-xl mb-12">
            Visualisation de l'évolution du niveau de criticité de chaque domaine à travers les éditions hebdomadaires.
          </p>

          {/* Légende */}
          <div className="flex flex-wrap gap-6 mb-10 pb-8 border-b border-[#E5E2DC] dark:border-[#333]">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#FF4757]" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
                CRITIQUE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#0F0F10] dark:bg-[#F5F4F0]" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
                IMPORTANT
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#F5F4F0] dark:bg-[#333] border border-[#0F0F10] dark:border-[#888]" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
                À SURVEILLER
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#F5F4F0] dark:bg-[#2A2A2D] border border-dashed border-[#8A8A8A]" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
                NON COUVERT
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FF4757] text-sm">▲</span>
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
                CRITICITÉ EN HAUSSE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400 text-sm">▼</span>
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
                CRITICITÉ EN BAISSE
              </span>
            </div>
          </div>

          {/* Tableau timeline */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-[10px] tracking-[0.15em] uppercase text-[#8A8A8A] pb-4 pr-6 w-40 min-w-[140px]">
                    DOMAINE
                  </th>
                  {weeks.map((w) => (
                    <th
                      key={w.week}
                      className="text-center text-[10px] tracking-[0.15em] uppercase text-[#8A8A8A] pb-4 px-2 min-w-[120px]"
                    >
                      <a
                        href={w.week === 19 ? "/" : `/semaine/${w.week}`}
                        className="hover:text-[#FF4757] transition-colors duration-150"
                      >
                        S{w.week}
                      </a>
                      <br />
                      <span className="text-[9px] text-[#8A8A8A] normal-case">
                        {w.date}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allDomainCodes.map((code) => (
                  <tr
                    key={code}
                    className="border-t border-[#E5E2DC] dark:border-[#333]"
                  >
                    <td className="py-4 pr-6">
                      <span className="text-xs tracking-[0.1em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
                        {code}
                      </span>
                    </td>
                    {weeks.map((w, weekIdx) => {
                      const cell = matrix[code][w.week];
                      const evolution = getEvolutionIndicator(code, weekIdx);
                      return (
                        <td key={w.week} className="py-4 px-2">
                          <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-1">
                              {evolution && evolution.direction === "up" && (
                                <span className={`text-xs ${evolution.color}`}>
                                  ▲
                                </span>
                              )}
                              {evolution && evolution.direction === "down" && (
                                <span className={`text-xs ${evolution.color}`}>
                                  ▼
                                </span>
                              )}
                              {evolution && evolution.direction === "new" && (
                                <span className={`text-[9px] ${evolution.color}`}>
                                  NEW
                                </span>
                              )}
                              <div
                                className={`px-2 py-1 text-[9px] tracking-[0.1em] uppercase text-center ${getBadgeColor(
                                  cell?.badge || null
                                )} ${getBadgeTextColor(cell?.badge || null)} ${
                                  !cell?.badge
                                    ? "border border-dashed border-[#8A8A8A]"
                                    : ""
                                }`}
                              >
                                {cell?.badge || "—"}
                              </div>
                            </div>
                            {cell?.titre && (
                              <span className="text-[8px] text-[#8A8A8A] text-center leading-tight max-w-[110px] line-clamp-2">
                                {cell.titre}
                              </span>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Résumé des mouvements */}
          <div className="mt-16 pt-8 border-t border-[#E5E2DC] dark:border-[#333]">
            <h2 className="text-[clamp(1.2rem,2.5vw,1.8rem)] leading-[0.95] uppercase text-[#0F0F10] dark:text-[#F5F4F0] mb-6">
              MOUVEMENTS RÉCENTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Hausse */}
              <div className="border border-[#E5E2DC] dark:border-[#333] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#FF4757] text-lg">▲</span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
                    EN HAUSSE (S18 → S19)
                  </span>
                </div>
                <div className="space-y-2">
                  {allDomainCodes
                    .filter((code) => {
                      const s19Badge = matrix[code][19]?.badge;
                      const s18Badge = matrix[code][18]?.badge;
                      if (!s19Badge) return false;
                      if (!s18Badge) return true; // nouveau
                      return (badgeLevel[s19Badge] || 0) > (badgeLevel[s18Badge] || 0);
                    })
                    .map((code) => (
                      <div key={code} className="flex items-center justify-between">
                        <span className="text-xs text-[#0F0F10] dark:text-[#F5F4F0]">
                          {code}
                        </span>
                        <span className="text-[9px] text-[#8A8A8A]">
                          {matrix[code][18]?.badge || "—"} → {matrix[code][19]?.badge}
                        </span>
                      </div>
                    ))}
                  {allDomainCodes.filter((code) => {
                    const s19Badge = matrix[code][19]?.badge;
                    const s18Badge = matrix[code][18]?.badge;
                    if (!s19Badge) return false;
                    if (!s18Badge) return true;
                    return (badgeLevel[s19Badge] || 0) > (badgeLevel[s18Badge] || 0);
                  }).length === 0 && (
                    <span className="text-xs text-[#8A8A8A]">Aucun mouvement</span>
                  )}
                </div>
              </div>

              {/* Stable */}
              <div className="border border-[#E5E2DC] dark:border-[#333] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#8A8A8A] text-lg">●</span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
                    STABLE (S18 → S19)
                  </span>
                </div>
                <div className="space-y-2">
                  {allDomainCodes
                    .filter((code) => {
                      const s19Badge = matrix[code][19]?.badge;
                      const s18Badge = matrix[code][18]?.badge;
                      if (!s19Badge || !s18Badge) return false;
                      return (badgeLevel[s19Badge] || 0) === (badgeLevel[s18Badge] || 0);
                    })
                    .map((code) => (
                      <div key={code} className="flex items-center justify-between">
                        <span className="text-xs text-[#0F0F10] dark:text-[#F5F4F0]">
                          {code}
                        </span>
                        <span className="text-[9px] text-[#8A8A8A]">
                          {matrix[code][19]?.badge}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Baisse */}
              <div className="border border-[#E5E2DC] dark:border-[#333] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-green-600 dark:text-green-400 text-lg">▼</span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
                    EN BAISSE (S18 → S19)
                  </span>
                </div>
                <div className="space-y-2">
                  {allDomainCodes
                    .filter((code) => {
                      const s19Badge = matrix[code][19]?.badge;
                      const s18Badge = matrix[code][18]?.badge;
                      if (!s19Badge || !s18Badge) return false;
                      return (badgeLevel[s19Badge] || 0) < (badgeLevel[s18Badge] || 0);
                    })
                    .map((code) => (
                      <div key={code} className="flex items-center justify-between">
                        <span className="text-xs text-[#0F0F10] dark:text-[#F5F4F0]">
                          {code}
                        </span>
                        <span className="text-[9px] text-[#8A8A8A]">
                          {matrix[code][18]?.badge} → {matrix[code][19]?.badge}
                        </span>
                      </div>
                    ))}
                  {allDomainCodes.filter((code) => {
                    const s19Badge = matrix[code][19]?.badge;
                    const s18Badge = matrix[code][18]?.badge;
                    if (!s19Badge || !s18Badge) return false;
                    return (badgeLevel[s19Badge] || 0) < (badgeLevel[s18Badge] || 0);
                  }).length === 0 && (
                    <span className="text-xs text-[#8A8A8A]">Aucun mouvement</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
