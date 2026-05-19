import { archives as allArchives } from "@/data/archives";
import { Header, Footer } from "@/components/Layout";

export default function Archives() {
  const latestWeek = allArchives[0]?.week;

  return (
    <div className="min-h-screen bg-[#F5F4F0] dark:bg-[#0F0F10] overflow-x-hidden">
      <Header activePage="archives" />
      <div className="container pt-20 pb-16">
        <div className="flex items-center gap-3 pb-4">
          <div className="w-12 h-px bg-[#FF4757]" />
          <span className="text-xs tracking-[0.15em] uppercase text-[#FF4757]">HISTORIQUE DES VEILLES</span>
        </div>

        <h1 className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.02em] uppercase text-[#0F0F10] dark:text-[#F5F4F0] pb-4">
          ARCHIVES
        </h1>

        <p className="text-sm text-[#8A8A8A] leading-relaxed max-w-2xl pb-12">
          Retrouvez l'ensemble des veilles hebdomadaires publiées. Chaque édition couvre les signaux stratégiques IA & Web identifiés sur la semaine.
        </p>

        <div className="space-y-0">
          {allArchives.map((archive) => {
            const isCurrent = archive.week === latestWeek;
            const href = isCurrent ? "/" : `/semaine/${archive.week}`;

            return (
              <a
                key={archive.week}
                href={href}
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-t border-[#E5E2DC] dark:border-[#333] hover:bg-white/50 dark:hover:bg-white/5 transition-colors duration-150 px-4 -mx-4"
              >
                <div className="flex items-center gap-4 min-w-[180px]">
                  <span className="text-3xl text-[#FF4757] leading-none">
                    S{archive.week}
                  </span>
                  <div>
                    <div className="text-xs tracking-[0.15em] uppercase text-[#0F0F10] dark:text-[#F5F4F0]">
                      SEMAINE {archive.week} — {archive.year}
                    </div>
                    <div className="text-xs text-[#8A8A8A]">{archive.date}</div>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-sm text-[#0F0F10] dark:text-[#F5F4F0] leading-snug uppercase tracking-[0.02em]">
                    {archive.signalMajeur}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs tracking-[0.1em] uppercase text-[#8A8A8A]">
                  <span>{archive.domainsCount} dom.</span>
                  <span>{archive.sourcesCount} src.</span>
                  <span className="text-[#FF4757]">{archive.criticalCount} crit.</span>
                  {isCurrent && (
                    <span className="px-2 py-0.5 text-[10px] bg-[#FF4757] text-white">ACTUELLE</span>
                  )}
                </div>
              </a>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-12 border-t border-[#E5E2DC] dark:border-[#333] mt-8">
          <span className="text-xs tracking-[0.15em] uppercase text-[#8A8A8A]">
            {allArchives.length} éditions disponibles
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
