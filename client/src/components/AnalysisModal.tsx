import React, { useEffect, useState } from "react";
import type { useFirstPartyAnalytics } from "@/hooks/useFirstPartyAnalytics";
import { trackGa4Engagement } from "@/lib/ga4";

export type AnalysisContent = {
  id: number;
  code: string;
  titre: string;
  badge: string;
  previousBadge: string | null;
  description: string;
  category: string;
  editorialStatus?: string;
  sources: Array<{ nom: string; url: string; date?: string }>;
  details: string[];
  longDescription?: string;
};

export function analysisLabel(content: AnalysisContent) {
  return content.category === "MESURE"
    ? `TRANSVERSAL — ${content.code}`
    : `${String(content.id).padStart(2, "0")} — ${content.code}`;
}

function AnalysisBadge({ type }: { type: string }) {
  if (type === "CRITIQUE") return <span className="inline-block px-2 py-0.5 text-[10px] tracking-[0.1em] uppercase bg-[#FF4757] text-white">CRITIQUE</span>;
  if (type === "IMPORTANT") return <span className="inline-block px-2 py-0.5 text-[10px] tracking-[0.1em] uppercase bg-[#0F0F10] text-white dark:bg-[#F5F4F0] dark:text-[#0F0F10]">IMPORTANT</span>;
  return <span className="inline-block px-2 py-0.5 text-[10px] tracking-[0.1em] uppercase bg-transparent text-[#0F0F10] dark:text-[#F5F4F0] border border-[#0F0F10] dark:border-[#F5F4F0]">À SURVEILLER</span>;
}

type Props = {
  content: AnalysisContent;
  week: number;
  route: "home" | "archives";
  onClose: () => void;
  onTrack: ReturnType<typeof useFirstPartyAnalytics>["track"];
};

export default function AnalysisModal({ content, week, route, onClose, onTrack }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const changed = content.previousBadge !== null && content.previousBadge !== content.badge;
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative w-full max-w-[720px]" role="dialog" aria-modal="true" aria-label={content.titre} onClick={(event) => event.stopPropagation()}>
        {!isFlipped ? (
          <div className="relative bg-white dark:bg-[#1A1A1D] w-full max-h-[80vh] overflow-y-auto p-8 md:p-10 animate-in fade-in duration-200">
            <div className="absolute top-4 right-4 flex items-center gap-4">
              {content.longDescription && <button title="Voir l'analyse complète" onClick={() => { onTrack({ name: "domain_analysis_flip", domainCode: content.code }); setIsFlipped(true); }} className="text-sm tracking-[0.15em] uppercase text-[#FF4757] hover:text-[#0F0F10] dark:hover:text-[#F5F4F0] transition-colors duration-150">ANALYSE ↔</button>}
              <button title="Fermer la modale" onClick={onClose} className="text-sm tracking-[0.15em] uppercase text-[#8A8A8A] hover:text-[#0F0F10] dark:hover:text-[#F5F4F0] transition-colors duration-150">FERMER</button>
            </div>
            <div className="flex flex-wrap items-center gap-3 pb-3 pr-32">
              <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">{analysisLabel(content)}</span>
              <AnalysisBadge type={content.badge} />
            </div>
            {content.editorialStatus && <p className="text-[10px] tracking-[0.1em] uppercase text-[#8A8A8A] pb-2">{content.editorialStatus}</p>}
            {changed && <p className="text-[10px] tracking-[0.1em] uppercase text-[#8A8A8A] pb-2">Évolution : {content.previousBadge} → {content.badge}</p>}
            <h2 className="text-2xl uppercase tracking-[0.02em] text-[#0F0F10] dark:text-[#F5F4F0] pb-4 leading-tight pr-32">{content.titre}</h2>
            <div className="w-full h-px bg-[#0F0F10] dark:bg-[#F5F4F0] mb-6" />
            <p className="text-base text-[#0F0F10] dark:text-[#F5F4F0] leading-relaxed pb-6">{content.description}</p>
            <div className="pb-6">
              <h4 className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] pb-3">POINTS CLÉS</h4>
              <ul className="space-y-2">{content.details.map((detail, index) => <li key={index} className="text-sm text-[#0F0F10] dark:text-[#F5F4F0] leading-relaxed pl-4 border-l-2 border-[#E5E2DC] dark:border-[#444]">{detail}</li>)}</ul>
            </div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] pb-3">SOURCES</h4>
            <ul className="space-y-1">{content.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" onClick={() => {
              onTrack({ name: "source_click", domainCode: content.code, sourcePublisher: source.nom });
              trackGa4Engagement("source_lue", { domainCode: content.code, sourcePublisher: source.nom, week, route });
            }} className="text-sm text-[#FF4757] underline hover:no-underline">{source.nom}{source.date ? ` — ${source.date}` : ""} →</a></li>)}</ul>
          </div>
        ) : (
          <div className="relative bg-[#0F0F10] w-full max-h-[80vh] overflow-y-auto p-8 md:p-10 animate-in fade-in duration-200">
            <div className="absolute top-4 right-4 flex items-center gap-4">
              <button title="Retour à la synthèse" onClick={() => setIsFlipped(false)} className="text-sm tracking-[0.15em] uppercase text-[#FF4757] hover:text-[#F5F4F0] transition-colors duration-150">← RETOUR</button>
              <button title="Fermer la modale" onClick={onClose} className="text-sm tracking-[0.15em] uppercase text-[#8A8A8A] hover:text-[#F5F4F0] transition-colors duration-150">FERMER</button>
            </div>
            <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">{analysisLabel(content)}</span>
            <h2 className="text-2xl uppercase tracking-[0.02em] text-[#F5F4F0] pb-4 pt-3 leading-tight pr-32">{content.titre}</h2>
            <div className="flex items-center gap-3 pb-6"><div className="w-8 h-px bg-[#FF4757]" /><span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">ANALYSE COMPLÈTE</span></div>
            <p className="text-base text-[#E5E2DC] leading-relaxed whitespace-pre-line">{content.longDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}
