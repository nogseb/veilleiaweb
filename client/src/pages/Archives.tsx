import { archives as allArchives } from "@/data/archives";
import { Header, Footer } from "@/components/Layout";
import { useFirstPartyAnalytics } from "@/hooks/useFirstPartyAnalytics";
import { createSingleEventGuard, trackGa4ArchivesView } from "@/lib/ga4";
import { useCallback, useEffect, useRef } from "react";
import { useLocation, useParams } from "wouter";
import NotFound from "./NotFound";
import { editionKey, editionPath } from "../../../shared/editionIdentity";
import { resolveYearRoute, yearPath } from "../../../shared/editionRouting";

const availableYears = Array.from(new Set(allArchives.map((edition) => edition.year))).sort((a, b) => b - a);

export default function Archives() {
  const params = useParams<{ year?: string }>();
  const [location, navigate] = useLocation();
  const yearRoute = resolveYearRoute(params.year ? `/${params.year}/` : "/archives");
  const isAnnual = yearRoute.isYearPath;
  const editions = isAnnual ? yearRoute.editions : allArchives;
  const latestEdition = allArchives[0];
  const { track } = useFirstPartyAnalytics({ route: "archives" });
  const firstPartyArchiveGuard = useRef(createSingleEventGuard());
  const ga4ArchiveGuard = useRef(createSingleEventGuard());
  const trackArchiveGa4 = useCallback(() => {
    if (!ga4ArchiveGuard.current()) return;
    const sent = trackGa4ArchivesView();
    if (!sent) ga4ArchiveGuard.current = createSingleEventGuard();
  }, []);

  useEffect(() => {
    if (firstPartyArchiveGuard.current()) track({ name: "archive_view" });
    trackArchiveGa4();
    window.addEventListener("ga4-consent-granted", trackArchiveGa4);
    return () => window.removeEventListener("ga4-consent-granted", trackArchiveGa4);
  }, [track, trackArchiveGa4]);

  useEffect(() => {
    if (yearRoute.canonicalPath && window.location.pathname !== yearRoute.canonicalPath) {
      navigate(yearRoute.canonicalPath + window.location.search + window.location.hash, { replace: true });
    }
  }, [location, navigate, yearRoute.canonicalPath]);

  if (params.year && !isAnnual) return <NotFound />;

  return (
    <div className="min-h-screen bg-[#F5F4F0] dark:bg-[#0F0F10] overflow-x-hidden">
      <Header activePage="archives" />
      <main className="container pt-20 pb-16">
        {isAnnual && <a href="/archives" className="inline-block pb-6 text-xs tracking-[0.15em] uppercase text-[#FF4757] hover:underline">← Toutes les archives</a>}
        <div className="flex items-center gap-3 pb-4">
          <div className="w-12 h-px bg-[#FF4757]" />
          <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">{isAnnual ? "LES SEMAINES COUVERTES" : "HISTORIQUE DES VEILLES"}</span>
        </div>
        <h1 className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.02em] uppercase text-[#0F0F10] dark:text-[#F5F4F0] pb-4">
          ARCHIVES{isAnnual && <> <span className="text-[#FF4757]">{yearRoute.year}</span></>}
        </h1>
        <p className="text-sm text-[#8A8A8A] leading-relaxed max-w-2xl pb-8">
          {isAnnual
            ? `Retrouvez les éditions de ${yearRoute.year}. Seules les semaines disponibles sont affichées, de la plus récente à la plus ancienne. Ouvrez une carte pour consulter la veille complète et ses sources.`
            : "Retrouvez l'ensemble des veilles hebdomadaires publiées. Chaque édition couvre les signaux stratégiques IA & Web identifiés sur la semaine."}
        </p>

        <nav aria-label="Archives par année" className="flex flex-wrap items-center gap-2 pb-10">
          <a href="/archives" aria-current={!isAnnual ? "page" : undefined} className={`px-4 py-2 border text-xs tracking-[0.15em] uppercase transition-colors duration-150 ${!isAnnual ? "bg-[#0F0F10] text-white border-[#0F0F10] dark:bg-[#F5F4F0] dark:text-[#0F0F10]" : "text-[#0F0F10] dark:text-[#F5F4F0] border-[#E5E2DC] dark:border-[#333] hover:border-[#FF4757]"}`}>Toutes les années</a>
          {availableYears.map((year) => (
            <a key={year} href={yearPath(year)} aria-current={year === yearRoute.year ? "page" : undefined} className={`px-4 py-2 border text-xs tracking-[0.15em] uppercase transition-colors duration-150 ${year === yearRoute.year ? "bg-[#0F0F10] text-white border-[#0F0F10] dark:bg-[#F5F4F0] dark:text-[#0F0F10]" : "text-[#0F0F10] dark:text-[#F5F4F0] border-[#E5E2DC] dark:border-[#333] hover:border-[#FF4757]"}`}>{year}</a>
          ))}
        </nav>

        {isAnnual ? (
          editions.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" aria-label={`Éditions disponibles en ${yearRoute.year}`}>
              {editions.map((edition) => {
                const isCurrent = edition.year === latestEdition?.year && edition.week === latestEdition?.week;
                return (
                  <a key={editionKey(edition)} href={editionPath(edition)} aria-label={`Lire la veille semaine ${edition.week} de ${edition.year}`} onClick={() => track({ name: "archive_edition_open", week: edition.week, target: isCurrent ? "current_edition" : "archive_edition" })} className="group flex flex-col bg-white dark:bg-[#2C2E33] text-[#0F0F10] dark:text-[#F5F4F0] border border-[#E5E2DC] dark:border-[#333] p-6 hover:border-[#FF4757] dark:hover:border-[#FF4757] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4757] transition-colors duration-150">
                    <div className="flex items-center justify-between gap-2 pb-5">
                      <span className="text-[10px] tracking-[0.15em] uppercase">SEMAINE {edition.week} — {edition.year}</span>
                      {isCurrent && <span className="px-2 py-0.5 text-[10px] tracking-[0.05em] bg-[#FF4757] text-white">ACTUELLE</span>}
                    </div>
                    <span className="text-6xl leading-none text-[#FF4757] pb-2">S{String(edition.week).padStart(2, "0")}</span>
                    <span className="text-xs text-[#8A8A8A] pb-5">{edition.date}</span>
                    <h2 className="text-lg uppercase leading-snug tracking-[0.02em] pb-6">{edition.signalMajeur}</h2>
                    <div className="mt-auto pt-4 border-t border-[#E5E2DC] dark:border-[#444]">
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] tracking-[0.1em] uppercase text-[#8A8A8A] pb-4">
                        <span>{edition.domainsCount} domaines</span><span>{edition.sourcesCount} sources</span>
                      </div>
                      <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">Lire la veille →</span>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="py-12 border-t border-b border-[#E5E2DC] dark:border-[#333]">
              <h2 className="text-2xl uppercase text-[#0F0F10] dark:text-[#F5F4F0] pb-3">Aucune édition disponible pour {yearRoute.year}</h2>
              <p className="text-sm text-[#8A8A8A] leading-relaxed">Les semaines apparaîtront ici dès qu’une édition de cette année sera ajoutée. Vous pouvez consulter les années disponibles ci-dessus.</p>
            </div>
          )
        ) : (
          <div className="space-y-0">
            {editions.map((archive) => {
              const isCurrent = archive.year === latestEdition?.year && archive.week === latestEdition?.week;
              return (
                <a key={editionKey(archive)} href={editionPath(archive)} onClick={() => track({ name: "archive_edition_open", week: archive.week, target: isCurrent ? "current_edition" : "archive_edition" })} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-t border-[#E5E2DC] dark:border-[#333] hover:bg-white/50 dark:hover:bg-white/5 transition-colors duration-150 px-4 -mx-4">
                  <div className="flex items-center gap-4 min-w-[180px]">
                    <span className="text-3xl text-[#FF4757] leading-none">S{archive.week}</span>
                    <div>
                      <div className="text-xs tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">SEMAINE {archive.week} — {archive.year}</div>
                      <div className="text-xs text-[#8A8A8A]">{archive.date}</div>
                    </div>
                  </div>
                  <div className="flex-1"><p className="text-sm text-[#0F0F10] dark:text-[#F5F4F0] leading-snug uppercase tracking-[0.02em]">{archive.signalMajeur}</p></div>
                  <div className="flex items-center gap-4 text-xs tracking-[0.1em] uppercase text-[#8A8A8A]">
                    <span>{archive.domainsCount} dom.</span><span>{archive.sourcesCount} src.</span><span className="text-[#FF4757]">{archive.criticalCount} crit.</span>
                    {isCurrent && <span className="px-2 py-0.5 text-[10px] bg-[#FF4757] text-white">ACTUELLE</span>}
                  </div>
                </a>
              );
            })}
          </div>
        )}

        <div className="flex items-center justify-between pt-8 border-t border-[#E5E2DC] dark:border-[#333] mt-8">
          <span className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A]">{editions.length} éditions disponibles{isAnnual ? ` en ${yearRoute.year}` : ""}</span>
        </div>
      </main>
      <Footer />
    </div>
  );
}
