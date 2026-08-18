import { useEffect, useState } from "react";
import { applyGa4Consent, readGa4Consent, type Ga4Consent } from "@/lib/ga4";

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<Ga4Consent>(() => readGa4Consent());

  useEffect(() => {
    if (consent === "granted") applyGa4Consent("granted");
  }, [consent]);

  useEffect(() => {
    const openPreferences = () => setConsent("unknown");
    window.addEventListener("ga4-open-preferences", openPreferences);
    return () => window.removeEventListener("ga4-open-preferences", openPreferences);
  }, []);

  if (typeof window !== "undefined" && window.location.pathname === "/stats") return null;
  if (consent !== "unknown") return null;

  return (
    <aside className="fixed inset-x-0 bottom-0 z-[120] border-t border-[#E5E2DC] bg-[#0F0F10] p-5 text-[#F5F4F0] shadow-none" aria-label="Préférences de mesure">
      <div className="container flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-[10px] tracking-[0.16em] uppercase text-[#FF4757]">Mesure d’audience</p>
          <p className="mt-2 text-sm leading-relaxed text-[#E5E2DC]">Avec votre accord, Google Analytics mesure les consultations de cette veille. La mesure first-party agrégée reste distincte.</p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button onClick={() => { applyGa4Consent("denied"); setConsent("denied"); }} className="border border-[#F5F4F0] px-4 py-2 text-xs tracking-[0.12em] uppercase transition-colors duration-150 hover:border-[#FF4757] hover:text-[#FF4757]">Refuser</button>
          <button onClick={() => setConsent("granted")} className="bg-[#FF4757] px-4 py-2 text-xs tracking-[0.12em] uppercase text-white transition-colors duration-150 hover:bg-[#e63e4e]">Accepter</button>
        </div>
      </div>
    </aside>
  );
}
