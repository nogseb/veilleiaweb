import { useState, useRef, useEffect } from "react";
import { useParams } from "wouter";
import { getEditionByWeek, allArchives } from "@/data/archives";
import { Header, Footer } from "@/components/Layout";
import type { ArchiveEdition } from "@/data/archives";

function Badge({ type }: { type: string }) {
  if (type === "CRITIQUE") {
    return <span className="inline-block px-2 py-0.5 text-[10px] tracking-[0.1em] uppercase bg-[#FF4757] text-white">CRITIQUE</span>;
  }
  if (type === "IMPORTANT") {
    return <span className="inline-block px-2 py-0.5 text-[10px] tracking-[0.1em] uppercase bg-[#0F0F10] text-white dark:bg-[#F5F4F0] dark:text-[#0F0F10]">IMPORTANT</span>;
  }
  return <span className="inline-block px-2 py-0.5 text-[10px] tracking-[0.1em] uppercase bg-transparent text-[#0F0F10] dark:text-[#F5F4F0] border border-[#0F0F10] dark:border-[#F5F4F0]">À SURVEILLER</span>;
}

function NouveauBadge() {
  return (
    <span className="inline-block px-1.5 py-0.5 text-[9px] tracking-[0.1em] uppercase bg-[#FF4757] text-white ml-2 animate-pulse">
      NOUVEAU
    </span>
  );
}

function DashboardPopover({ items, title, onClose }: { items: string[]; title: string; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  return (
    <div ref={ref} className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 bg-white dark:bg-[#2C2E33] border border-[#E5E2DC] dark:border-[#444] p-4 w-64 max-h-60 overflow-y-auto shadow-sm animate-in fade-in duration-150">
      <div className="flex items-center justify-between pb-2 border-b border-[#E5E2DC] dark:border-[#444] mb-2">
        <span className="text-[10px] tracking-[0.15em] uppercase text-[#8A8A8A]">{title}</span>
        <button onClick={onClose} className="text-[10px] tracking-[0.15em] uppercase text-[#8A8A8A] hover:text-[#0F0F10] dark:hover:text-[#F5F4F0]">X</button>
      </div>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-[#0F0F10] dark:text-[#F5F4F0] leading-relaxed pl-2 border-l-2 border-[#FF4757]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DomaineModal({ domaine, onClose }: { domaine: ArchiveEdition["domaines"][0]; onClose: () => void }) {
  const isNew = domaine.previousBadge === null;
  const hasChanged = domaine.previousBadge !== null && domaine.previousBadge !== domaine.badge;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-white dark:bg-[#1A1A1D] w-full max-w-[720px] max-h-[80vh] overflow-y-auto p-8 md:p-10 animate-in fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sm tracking-[0.15em] uppercase text-[#8A8A8A] hover:text-[#0F0F10] dark:hover:text-[#F5F4F0] transition-colors duration-150"
        >
          FERMER
        </button>

        <div className="flex items-center gap-3 pb-3">
          <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">
            {String(domaine.id).padStart(2, "0")} — {domaine.code}
          </span>
          <Badge type={domaine.badge} />
          {(isNew || hasChanged) && <NouveauBadge />}
        </div>

        {hasChanged && (
          <div className="text-[10px] tracking-[0.1em] uppercase text-[#8A8A8A] pb-2">
            Évolution : {domaine.previousBadge} → {domaine.badge}
          </div>
        )}
        {isNew && (
          <div className="text-[10px] tracking-[0.1em] uppercase text-[#8A8A8A] pb-2">
            Nouveau domaine cette semaine
          </div>
        )}

        <h2 className="text-2xl uppercase tracking-[0.02em] text-[#0F0F10] dark:text-[#F5F4F0] pb-4 leading-tight">
          {domaine.titre}
        </h2>

        <div className="w-full h-px bg-[#0F0F10] dark:bg-[#F5F4F0] mb-6" />

        <p className="text-base text-[#0F0F10] dark:text-[#F5F4F0] leading-relaxed pb-6">
          {domaine.description}
        </p>

        <div className="pb-6">
          <h4 className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] pb-3">POINTS CLÉS</h4>
          <ul className="space-y-2">
            {domaine.details.map((detail, i) => (
              <li key={i} className="text-sm text-[#0F0F10] dark:text-[#F5F4F0] leading-relaxed pl-4 border-l-2 border-[#E5E2DC] dark:border-[#444]">
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] pb-3">SOURCES</h4>
          <ul className="space-y-1">
            {domaine.sources.map((source, i) => (
              <li key={i}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#FF4757] underline hover:no-underline"
                >
                  {source.nom} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function WeekDetail() {
  const params = useParams<{ week: string }>();
  const weekNum = parseInt(params.week || "0", 10);
  const edition = getEditionByWeek(weekNum);
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const [selectedDomaine, setSelectedDomaine] = useState<ArchiveEdition["domaines"][0] | null>(null);

  // Navigation entre semaines
  const currentIndex = allArchives.findIndex((a) => a.week === weekNum);
  const prevWeek = currentIndex < allArchives.length - 1 ? allArchives[currentIndex + 1] : null;
  const nextWeek = currentIndex > 0 ? allArchives[currentIndex - 1] : null;

  if (!edition) {
    return (
      <div className="min-h-screen bg-[#F5F4F0] dark:bg-[#0F0F10] overflow-x-hidden">
        <Header activePage="archives" />
        <div className="container pt-20 pb-16">
          <h1 className="text-4xl uppercase text-[#0F0F10] dark:text-[#F5F4F0] pt-8">Édition non disponible</h1>
          <p className="text-sm text-[#8A8A8A] pt-4">Cette semaine n'est pas encore disponible dans les archives.</p>
          <a href="/archives" className="inline-block mt-8 text-sm text-[#FF4757] uppercase tracking-[0.15em]">← Retour aux archives</a>
        </div>
        <Footer />
      </div>
    );
  }

  const stats = [
    { value: edition.domainsCount, label: "Domaines analysés", key: "domaines", items: edition.dashboardDetails.domaines },
    { value: edition.sourcesCount, label: "Sources citées", key: "sources", items: edition.dashboardDetails.sources },
    { value: edition.criticalCount, label: "Signaux critiques", key: "critiques", items: edition.dashboardDetails.critiques },
    { value: edition.importantCount, label: "Signaux importants", key: "importants", items: edition.dashboardDetails.importants },
    { value: edition.actionsCount, label: "Actions immédiates", key: "actions", items: edition.dashboardDetails.actions },
    { value: edition.emergingCount, label: "Tendances émergentes", key: "emergents", items: edition.dashboardDetails.emergents },
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F0] dark:bg-[#0F0F10] overflow-x-hidden">
      <Header activePage="archives" />

      <div className="container">
        {/* Navigation retour */}
        <div className="flex items-center gap-4 pt-20 pb-4">
          <a href="/archives" className="text-xs tracking-[0.15em] uppercase text-[#FF4757] hover:underline">← ARCHIVES</a>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs tracking-[0.15em] uppercase text-[#8A8A8A] pb-4">
          <span className="text-[#FF4757]">SEMAINE {edition.week} — {edition.year}</span>
          <span className="hidden sm:inline">|</span>
          <span>PUBLICATION : {edition.date}</span>
          <span className="hidden sm:inline">|</span>
          <span>{edition.domainsCount} domaines · {edition.sourcesCount} sources</span>
        </div>

        {/* Hero */}
        <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.02em] uppercase text-[#0F0F10] dark:text-[#F5F4F0] pb-8">
          SEMAINE<br />
          <span className="text-[#FF4757]">{edition.week}</span>
        </h1>

        {/* Signal majeur */}
        <section className="pb-12">
          <div className="flex items-center gap-3 pb-4">
            <div className="w-12 h-px bg-[#FF4757]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">SIGNAL MAJEUR DE LA SEMAINE</span>
          </div>
          <div className="border-l-4 border-[#FF4757] pl-6 py-2">
            <p className="text-lg uppercase tracking-[0.02em] text-[#0F0F10] dark:text-[#F5F4F0] leading-snug">
              {edition.signalMajeur}
            </p>
          </div>
        </section>

        {/* Stat dominante */}
        <section className="pb-16 flex flex-col md:flex-row items-start gap-6 md:gap-12">
          <div className="text-[clamp(4rem,12vw,8rem)] leading-none text-[#0F0F10] dark:text-[#F5F4F0] tracking-tight">
            {edition.statDominante.chiffre}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 pb-2">
              <div className="w-8 h-px bg-[#0F0F10] dark:bg-[#F5F4F0]" />
              <h3 className="text-sm tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">{edition.statDominante.titre}</h3>
            </div>
            <p className="text-sm text-[#8A8A8A] leading-relaxed max-w-xl">
              {edition.statDominante.description}
            </p>
          </div>
        </section>

        {/* Dashboard */}
        <section className="pb-16">
          <div className="flex items-center gap-3 pb-6">
            <div className="w-12 h-px bg-[#FF4757]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A]">TABLEAU DE BORD</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#E5E2DC] dark:bg-[#333] border border-[#E5E2DC] dark:border-[#333]">
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="relative bg-white dark:bg-[#1A1A1D] p-6 text-center cursor-pointer hover:bg-[#FAFAF8] dark:hover:bg-[#222] transition-colors duration-150"
                onClick={() => setOpenPopover(openPopover === stat.key ? null : stat.key)}
              >
                <div className="text-3xl text-[#FF4757] pb-1">{stat.value}</div>
                <div className="text-xs tracking-[0.1em] uppercase text-[#8A8A8A]">{stat.label}</div>
                {openPopover === stat.key && (
                  <DashboardPopover
                    items={stat.items}
                    title={stat.label}
                    onClose={() => setOpenPopover(null)}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Synthèse exécutive */}
        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
              SYNTHÈSE<br />EXÉCUTIVE
            </h2>
            <p className="text-base text-[#0F0F10] dark:text-[#F5F4F0] leading-relaxed self-center">
              {edition.syntheseExecutive}
            </p>
          </div>
        </section>

        {/* Domaines */}
        <section className="pb-16">
          <div className="flex items-center gap-3 pb-6">
            <div className="w-12 h-px bg-[#FF4757]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A]">ANALYSE PAR DOMAINE</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E2DC] dark:bg-[#333]">
            {edition.domaines.map((domaine) => {
              const isNew = domaine.previousBadge === null;
              const hasChanged = domaine.previousBadge !== null && domaine.previousBadge !== domaine.badge;
              return (
                <div
                  key={domaine.id}
                  className="bg-white dark:bg-[#1A1A1D] border border-[#E5E2DC] dark:border-[#333] p-8 cursor-pointer hover:border-[#0F0F10] dark:hover:border-[#888] transition-colors duration-150"
                  onClick={() => setSelectedDomaine(domaine)}
                >
                  <div className="flex items-start justify-between pb-4">
                    <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">
                      {String(domaine.id).padStart(2, "0")} — {domaine.code}
                    </span>
                    <div className="flex items-center">
                      <Badge type={domaine.badge} />
                      {(isNew || hasChanged) && <NouveauBadge />}
                    </div>
                  </div>
                  <h3 className="text-xl uppercase tracking-[0.02em] text-[#0F0F10] dark:text-[#F5F4F0] pb-3 leading-tight">
                    {domaine.titre}
                  </h3>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed">
                    {domaine.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Actions prioritaires */}
      <section className="bg-[#0F0F10] text-[#F5F4F0] py-16">
        <div className="container">
          <div className="flex items-center gap-3 pb-6">
            <div className="w-12 h-px bg-[#FF4757]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">ACTIONS CRITIQUES — RÉACTION IMMÉDIATE</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] uppercase pb-12">
            {edition.actionsCount} ACTIONS<br />
            <span className="text-[#FF4757]">PRIORITAIRES</span>
          </h2>
          <div className="space-y-0">
            {edition.actions.map((action) => (
              <div key={action.id} className="flex items-start gap-6 py-6 border-t border-[#333]">
                <span className="text-3xl text-[#FF4757] leading-none min-w-[3rem]">
                  {String(action.id).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-sm uppercase tracking-[0.02em] text-[#F5F4F0] leading-snug pb-1">
                    {action.titre}
                  </p>
                  <span className="text-xs tracking-[0.1em] uppercase text-[#8A8A8A]">{action.domaine}</span>
                </div>
                <span className="text-xs tracking-[0.1em] uppercase text-[#8A8A8A] hidden md:block">
                  {action.responsable}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signaux émergents */}
      <div className="container">
        <section className="py-16">
          <div className="flex items-center gap-3 pb-6">
            <div className="w-12 h-px bg-[#FF4757]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">TENDANCES À SURVEILLER</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] uppercase text-[#0F0F10] dark:text-[#F5F4F0] pb-10">
            SIGNAUX<br /><span className="text-[#FF4757]">ÉMERGENTS</span>
          </h2>
          <div className="space-y-0">
            {edition.signauxEmergents.map((signal, i) => (
              <div key={i} className="flex items-start justify-between py-5 border-t border-[#E5E2DC] dark:border-[#333]">
                <div className="flex-1">
                  <h4 className="text-base uppercase tracking-[0.02em] text-[#0F0F10] dark:text-[#F5F4F0] pb-1">{signal.titre}</h4>
                  <p className="text-sm text-[#8A8A8A]">{signal.description}</p>
                </div>
                <span className="text-xs tracking-[0.1em] uppercase text-[#FF4757] ml-4 whitespace-nowrap">{signal.horizon}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Tendances passées */}
      <section className="bg-[#0F0F10] text-[#F5F4F0] py-16">
        <div className="container">
          <div className="flex items-center gap-3 pb-6">
            <div className="w-12 h-px bg-[#FF4757]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">MÉMOIRE STRATÉGIQUE</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] uppercase pb-10">
            TENDANCES<br /><span className="text-[#FF4757]">PASSÉES</span>
          </h2>
          <div className="space-y-0">
            {edition.tendancesPassees.map((tendance, i) => (
              <div key={i} className="flex items-start justify-between py-5 border-t border-[#333]">
                <div>
                  <h4 className="text-base uppercase tracking-[0.02em] text-[#F5F4F0] pb-1">{tendance.titre}</h4>
                  <p className="text-sm text-[#8A8A8A]">{tendance.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation entre semaines */}
      <div className="container py-12">
        <div className="flex items-center justify-between border-t border-[#E5E2DC] dark:border-[#333] pt-8">
          {prevWeek ? (
            <a href={`/semaine/${prevWeek.week}`} className="text-xs tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0] border border-[#E5E2DC] dark:border-[#333] px-4 py-2 hover:border-[#0F0F10] dark:hover:border-[#888] transition-colors duration-150">
              ← S{prevWeek.week}
            </a>
          ) : <div />}
          {nextWeek ? (
            <a href={`/semaine/${nextWeek.week}`} className="text-xs tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0] border border-[#E5E2DC] dark:border-[#333] px-4 py-2 hover:border-[#0F0F10] dark:hover:border-[#888] transition-colors duration-150">
              S{nextWeek.week} →
            </a>
          ) : <div />}
        </div>
      </div>

      <Footer />

      {selectedDomaine && (
        <DomaineModal domaine={selectedDomaine} onClose={() => setSelectedDomaine(null)} />
      )}
    </div>
  );
}
