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
            <a href="/archives" className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] hover:text-[#0F0F10] transition-colors duration-150">ARCHIVES</a>
            <a href="/about" className="text-xs tracking-[0.15em] uppercase text-[#0F0F10] border-b border-[#0F0F10] pb-0.5">À PROPOS</a>
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
            <a href="/archives" className="text-white text-3xl tracking-[0.1em] uppercase hover:text-[#FF4757] transition-colors duration-150">ARCHIVES</a>
            <div className="w-16 h-px bg-[#555]" />
            <a href="/about" className="text-[#FF4757] text-3xl tracking-[0.1em] uppercase">À PROPOS</a>
          </nav>
        </div>
      )}
    </>
  );
}

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

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F4F0] overflow-x-hidden">
      <Header />
      <div className="container pt-20 pb-16">
        <div className="flex items-center gap-3 pb-4">
          <div className="w-12 h-px bg-[#FF4757]" />
          <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">PRÉSENTATION</span>
        </div>

        <h1 className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.02em] uppercase text-[#0F0F10] pb-12">
          À PROPOS
        </h1>

        {/* Objectif */}
        <section className="pb-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[0.95] uppercase text-[#0F0F10]">
              OBJECTIF
            </h2>
            <div className="space-y-4">
              <p className="text-base text-[#0F0F10] leading-relaxed">
                Cette veille stratégique hebdomadaire a pour objectif de fournir aux équipes digitales, marketing et techniques de TBS Education une synthèse actionnable des évolutions majeures dans les domaines de l'intelligence artificielle, du web, du SEO/GEO, de la data et du marketing digital.
              </p>
              <p className="text-sm text-[#8A8A8A] leading-relaxed">
                Elle vise à identifier les signaux faibles et forts qui impactent directement la stratégie digitale de l'établissement, à prioriser les actions à mener et à anticiper les transformations structurelles du paysage numérique.
              </p>
            </div>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="pb-12 border-t border-[#E5E2DC] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[0.95] uppercase text-[#0F0F10]">
              MÉTHODOLOGIE
            </h2>
            <div className="space-y-6">
              <p className="text-base text-[#0F0F10] leading-relaxed">
                Chaque semaine, un processus structuré de collecte, d'analyse et de hiérarchisation est appliqué pour produire cette veille.
              </p>

              <div className="space-y-4">
                <div className="border-l-2 border-[#FF4757] pl-4">
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#0F0F10] pb-1">01 — COLLECTE</h4>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed">
                    Monitoring continu de 50+ sources spécialisées (presse tech, blogs d'experts, publications académiques, communiqués officiels, rapports d'analystes). Filtrage par pertinence pour le contexte enseignement supérieur et marketing digital.
                  </p>
                </div>

                <div className="border-l-2 border-[#FF4757] pl-4">
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#0F0F10] pb-1">02 — ANALYSE</h4>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed">
                    Chaque signal est évalué selon 4 critères : impact potentiel sur TBS Education, urgence d'action, fiabilité de la source, et convergence avec d'autres signaux. Les informations sont croisées entre plusieurs sources pour validation.
                  </p>
                </div>

                <div className="border-l-2 border-[#FF4757] pl-4">
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#0F0F10] pb-1">03 — HIÉRARCHISATION</h4>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed">
                    Attribution d'un niveau de criticité (Critique / Important / À surveiller) basé sur l'imminence et l'ampleur de l'impact. Les actions prioritaires sont formulées avec responsable et périmètre identifiés.
                  </p>
                </div>

                <div className="border-l-2 border-[#FF4757] pl-4">
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#0F0F10] pb-1">04 — PUBLICATION</h4>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed">
                    Mise en forme éditoriale et publication chaque lundi. Le format privilégie la lisibilité rapide et l'actionnabilité immédiate pour les décideurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Domaines couverts */}
        <section className="pb-12 border-t border-[#E5E2DC] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[0.95] uppercase text-[#0F0F10]">
              DOMAINES<br />COUVERTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { code: "IA / LLM", desc: "Intelligence artificielle, modèles de langage, agents autonomes, gouvernance IA" },
                { code: "SEO / GEO", desc: "Référencement naturel, optimisation pour moteurs génératifs, visibilité dans les AI Overviews" },
                { code: "UX / DESIGN", desc: "Expérience utilisateur, UI générative, design systems, accessibilité" },
                { code: "CDP & DATA", desc: "Données first-party, résolution d'identité, clean rooms, analytics" },
                { code: "ARCHI / DXP", desc: "Architectures composables, headless CMS, plateformes d'expérience digitale" },
                { code: "GOOGLE", desc: "Évolutions de l'écosystème Google (Search, Ads, Cloud, Workspace)" },
                { code: "INNOV MKT", desc: "Innovation marketing, retail media, marketing conversationnel, publicité digitale" },
                { code: "RÉGLEMENTATION", desc: "EU AI Act, RGPD, accessibilité numérique, conformité" },
              ].map((domain) => (
                <div key={domain.code} className="border border-[#E5E2DC] p-4">
                  <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757] pb-1 block">{domain.code}</span>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed">{domain.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="pb-12 border-t border-[#E5E2DC] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[0.95] uppercase text-[#0F0F10]">
              SOURCES
            </h2>
            <div className="space-y-6">
              <p className="text-base text-[#0F0F10] leading-relaxed">
                Les sources sont sélectionnées selon leur fiabilité, leur expertise reconnue et leur pertinence pour le contexte enseignement supérieur et marketing digital.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] pb-2">PRESSE SPÉCIALISÉE</h4>
                  <p className="text-sm text-[#0F0F10] leading-relaxed">
                    Search Engine Journal, Search Engine Land, Search Engine Roundtable, Computerworld, MarTech.org, Advertising Week, Forbes Tech
                  </p>
                </div>

                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] pb-2">SOURCES OFFICIELLES</h4>
                  <p className="text-sm text-[#0F0F10] leading-relaxed">
                    Google Blog, Google Search Central, Microsoft Tech Community, Commission Européenne, CNIL
                  </p>
                </div>

                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] pb-2">ANALYSTES & RECHERCHE</h4>
                  <p className="text-sm text-[#0F0F10] leading-relaxed">
                    Gartner, Forrester, McKinsey Digital, arXiv, Databricks, ISG Research
                  </p>
                </div>

                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A] pb-2">EXPERTS & BLOGS</h4>
                  <p className="text-sm text-[#0F0F10] leading-relaxed">
                    DLA Piper, KNIME, Oracle CX Blog, BrandLab, UX Matters, Digital Applied, Croct
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Niveaux de criticité */}
        <section className="pb-12 border-t border-[#E5E2DC] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[0.95] uppercase text-[#0F0F10]">
              NIVEAUX DE<br />CRITICITÉ
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 py-4 border-t border-[#E5E2DC]">
                <span className="inline-block px-2 py-0.5 text-[10px] tracking-[0.1em] uppercase bg-[#FF4757] text-white shrink-0">CRITIQUE</span>
                <p className="text-sm text-[#0F0F10] leading-relaxed">
                  Impact immédiat et significatif sur la stratégie digitale. Action requise dans les 1-2 semaines. Risque élevé si non traité.
                </p>
              </div>
              <div className="flex items-start gap-4 py-4 border-t border-[#E5E2DC]">
                <span className="inline-block px-2 py-0.5 text-[10px] tracking-[0.1em] uppercase bg-[#0F0F10] text-white shrink-0">IMPORTANT</span>
                <p className="text-sm text-[#0F0F10] leading-relaxed">
                  Impact notable à moyen terme. Planification recommandée dans le mois. Opportunité ou risque modéré.
                </p>
              </div>
              <div className="flex items-start gap-4 py-4 border-t border-[#E5E2DC]">
                <span className="inline-block px-2 py-0.5 text-[10px] tracking-[0.1em] uppercase bg-transparent text-[#0F0F10] border border-[#0F0F10] shrink-0">À SURVEILLER</span>
                <p className="text-sm text-[#0F0F10] leading-relaxed">
                  Signal émergent à intégrer dans la réflexion stratégique. Pas d'action immédiate requise mais suivi recommandé.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[0.95] uppercase text-[#0F0F10]">
              CONTACT
            </h2>
            <div>
              <p className="text-base text-[#0F0F10] leading-relaxed pb-2">
                Cette veille est produite par la Direction de la Communication et du Marketing Digital de TBS Education.
              </p>
              <p className="text-sm text-[#8A8A8A] leading-relaxed">
                Pour toute question, suggestion de source ou demande d'approfondissement sur un sujet spécifique, contactez l'équipe Projets Digitaux.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
