import { useState } from "react";

function LogoSvg() {
  return (
    <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#000000" height="28" width="28" />
      <rect fill="#ff3a52" height="4" width="12" x="4" y="4" />
      <rect fill="#ffffff" height="2" width="20" x="4" y="12" />
      <rect fill="#ffffff" height="2" width="14" x="4" y="18" />
      <rect fill="#ffffff" height="2" width="8" x="4" y="22" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F4F0] border-b border-[#E5E2DC]">
        <div className="container flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-[#0F0F10]">
            <LogoSvg />
            <span className="hidden sm:inline">VEILLE STRATÉGIQUE IA & WEB</span>
            <span className="sm:hidden">VEILLE STRATÉGIQUE</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] hover:text-[#0F0F10] transition-colors duration-150">VEILLE ACTUELLE</a>
            <a href="/archives" className="text-xs tracking-[0.15em] uppercase text-[#0F0F10] border-b border-[#0F0F10] pb-0.5">ARCHIVES</a>
            <a href="/about" className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] hover:text-[#0F0F10] transition-colors duration-150">À PROPOS</a>
          </nav>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-xs tracking-[0.15em] uppercase text-[#0F0F10] md:hidden"
          >
            MENU
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#2C2E33] flex flex-col items-center justify-center transition-opacity duration-200">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 text-white text-sm tracking-[0.15em] uppercase"
          >
            FERMER
          </button>
          <nav className="flex flex-col items-center gap-8">
            <a href="/" className="text-white text-3xl tracking-[0.1em] uppercase hover:text-[#FF4757] transition-colors duration-150">VEILLE ACTUELLE</a>
            <div className="w-16 h-px bg-[#555]" />
            <a href="/archives" className="text-[#FF4757] text-3xl tracking-[0.1em] uppercase">ARCHIVES</a>
            <div className="w-16 h-px bg-[#555]" />
            <a href="/about" className="text-white text-3xl tracking-[0.1em] uppercase hover:text-[#FF4757] transition-colors duration-150">À PROPOS</a>
          </nav>
        </div>
      )}
    </>
  );
}

const archivesData = [
  {
    week: 19,
    year: 2026,
    date: "5 mai 2026",
    signalMajeur: "L'ère du GEO devient structurelle — AI Overviews couvrent 47% des requêtes",
    domaines: 9,
    sources: 20,
    critiques: 3,
    isCurrent: true,
  },
  {
    week: 18,
    year: 2026,
    date: "28 avril 2026",
    signalMajeur: "Microsoft Agent 365 en GA — gouvernance des agents IA en entreprise",
    domaines: 8,
    sources: 17,
    critiques: 2,
    isCurrent: false,
  },
  {
    week: 17,
    year: 2026,
    date: "21 avril 2026",
    signalMajeur: "Google supprime les SERPs classiques sur desktop — recherche 100% conversationnelle",
    domaines: 7,
    sources: 15,
    critiques: 4,
    isCurrent: false,
  },
  {
    week: 16,
    year: 2026,
    date: "14 avril 2026",
    signalMajeur: "EU AI Act : dernière ligne droite avant la deadline août 2026",
    domaines: 7,
    sources: 18,
    critiques: 3,
    isCurrent: false,
  },
  {
    week: 15,
    year: 2026,
    date: "7 avril 2026",
    signalMajeur: "Gartner confirme -25% de volume de recherche traditionnelle d'ici fin 2026",
    domaines: 7,
    sources: 20,
    critiques: 4,
    isCurrent: false,
  },
  {
    week: 14,
    year: 2026,
    date: "31 mars 2026",
    signalMajeur: "Google Cloud Next '26 — Gemini Enterprise, TPU 8e génération, Gemma 4",
    domaines: 7,
    sources: 16,
    critiques: 2,
    isCurrent: false,
  },
];

function Footer() {
  return (
    <footer className="bg-[#0F0F10] text-[#F5F4F0] py-12 border-t border-[#333]">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-6">
          <a href="/" className="text-xs tracking-[0.15em] uppercase text-[#F5F4F0] hover:text-[#FF4757] transition-colors duration-150">VEILLE ACTUELLE</a>
          <a href="/archives" className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] hover:text-[#FF4757] transition-colors duration-150">ARCHIVES</a>
          <a href="/about" className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] hover:text-[#FF4757] transition-colors duration-150">À PROPOS</a>
        </nav>
      </div>
    </footer>
  );
}

export default function Archives() {
  return (
    <div className="min-h-screen bg-[#F5F4F0] overflow-x-hidden">
      <Header />
      <div className="container pt-20 pb-16">
        <div className="flex items-center gap-3 pb-4">
          <div className="w-12 h-px bg-[#FF4757]" />
          <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">HISTORIQUE DES VEILLES</span>
        </div>

        <h1 className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.02em] uppercase text-[#0F0F10] pb-4">
          ARCHIVES
        </h1>

        <p className="text-sm text-[#8A8A8A] leading-relaxed max-w-2xl pb-12">
          Retrouvez l'ensemble des veilles hebdomadaires publiées. Chaque édition couvre les signaux stratégiques IA & Web identifiés sur la semaine.
        </p>

        <div className="space-y-0">
          {archivesData.map((archive) => (
            <a
              key={archive.week}
              href={archive.isCurrent ? "/" : "#"}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-t border-[#E5E2DC] hover:bg-white/50 transition-colors duration-150 px-4 -mx-4"
            >
              <div className="flex items-center gap-4 min-w-[180px]">
                <span className="text-3xl text-[#FF4757] leading-none">
                  S{archive.week}
                </span>
                <div>
                  <div className="text-xs tracking-[0.15em] uppercase text-[#0F0F10]">
                    SEMAINE {archive.week} — {archive.year}
                  </div>
                  <div className="text-xs text-[#8A8A8A]">{archive.date}</div>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm text-[#0F0F10] leading-snug uppercase tracking-[0.02em]">
                  {archive.signalMajeur}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs tracking-[0.1em] uppercase text-[#8A8A8A]">
                <span>{archive.domaines} dom.</span>
                <span>{archive.sources} src.</span>
                <span className="text-[#FF4757]">{archive.critiques} crit.</span>
                {archive.isCurrent && (
                  <span className="px-2 py-0.5 text-[10px] bg-[#FF4757] text-white">ACTUELLE</span>
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-between pt-12 border-t border-[#E5E2DC] mt-8">
          <span className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A]">
            {archivesData.length} éditions disponibles
          </span>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-xs tracking-[0.15em] uppercase text-[#8A8A8A] border border-[#E5E2DC] opacity-50 cursor-not-allowed">
              ← PRÉCÉDENT
            </button>
            <button className="px-4 py-2 text-xs tracking-[0.15em] uppercase text-[#8A8A8A] border border-[#E5E2DC] opacity-50 cursor-not-allowed">
              SUIVANT →
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
