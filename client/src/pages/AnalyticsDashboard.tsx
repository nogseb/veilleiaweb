import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { BarChart3, CheckCircle2, Clock3, ExternalLink, Eye, FileText, Layers3, LockKeyhole, LogOut } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useState } from "react";

const rangeOptions = [
  { value: 7, label: "7 jours" },
  { value: 30, label: "30 jours" },
  { value: 90, label: "90 jours" },
] as const;

function MetricCard({ label, value, hint, icon: Icon }: { label: string; value: string | number; hint: string; icon: typeof Eye }) {
  return (
    <section className="border border-[#E5E2DC] bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] tracking-[0.16em] uppercase text-[#8A8A8A]">{label}</p>
          <p className="pt-3 text-4xl leading-none text-[#0F0F10]">{value}</p>
        </div>
        <Icon className="h-5 w-5 text-[#FF4757]" strokeWidth={1.5} />
      </div>
      <p className="pt-4 text-xs leading-relaxed text-[#8A8A8A]">{hint}</p>
    </section>
  );
}

function RankedList({ title, items, empty }: { title: string; items: Array<{ label: string; value: number }>; empty: string }) {
  return (
    <section className="border border-[#E5E2DC] bg-white p-6">
      <h2 className="text-sm tracking-[0.14em] uppercase text-[#0F0F10]">{title}</h2>
      {items.length === 0 ? (
        <p className="pt-5 text-sm leading-relaxed text-[#8A8A8A]">{empty}</p>
      ) : (
        <ol className="pt-4">
          {items.slice(0, 5).map((item, index) => (
            <li key={item.label} className="flex items-center justify-between gap-4 border-t border-[#E5E2DC] py-3 first:border-t-0 first:pt-0">
              <div className="flex min-w-0 items-baseline gap-3">
                <span className="text-xs text-[#FF4757]">{String(index + 1).padStart(2, "0")}</span>
                <span className="truncate text-sm text-[#0F0F10]">{item.label}</span>
              </div>
              <span className="text-sm text-[#0F0F10]">{item.value}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

function StatsLogin({ onAuthenticated }: { onAuthenticated: () => void }) {
  const [password, setPassword] = useState("");
  const login = trpc.statsAccess.login.useMutation({ onSuccess: onAuthenticated });

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F4F0] p-6">
      <form
        className="w-full max-w-md border border-[#E5E2DC] bg-white p-8 md:p-10"
        onSubmit={event => {
          event.preventDefault();
          login.mutate({ password });
        }}
      >
        <LockKeyhole className="h-7 w-7 text-[#FF4757]" strokeWidth={1.5} />
        <p className="pt-6 text-xs tracking-[0.16em] uppercase text-[#FF4757]">Accès protégé</p>
        <h1 className="pt-2 text-4xl leading-none uppercase text-[#0F0F10]">Statistiques<br />de la veille</h1>
        <p className="pt-5 text-sm leading-relaxed text-[#8A8A8A]">Saisissez le mot de passe communiqué par l’équipe éditoriale.</p>
        <label className="mt-7 block text-[10px] tracking-[0.14em] uppercase text-[#8A8A8A]" htmlFor="stats-password">Mot de passe</label>
        <input
          id="stats-password"
          autoFocus
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          className="mt-2 w-full rounded-none border border-[#0F0F10] bg-white px-3 py-3 text-base text-[#0F0F10] outline-none focus:border-[#FF4757]"
          required
        />
        {login.error && <p className="pt-3 text-sm text-[#FF4757]">Mot de passe incorrect. Réessayez.</p>}
        <Button type="submit" disabled={login.isPending} className="mt-6 w-full rounded-none bg-[#FF4757] text-white hover:bg-[#e63e4e]">
          {login.isPending ? "Vérification…" : "Accéder aux statistiques"}
        </Button>
      </form>
    </main>
  );
}

function AnalyticsDashboardContent() {
  const [days, setDays] = useState<7 | 30 | 90>(30);
  const access = trpc.statsAccess.status.useQuery();
  const dashboard = trpc.analytics.dashboard.useQuery({ days }, { enabled: Boolean(access.data?.authenticated) });
  const logout = trpc.statsAccess.logout.useMutation({ onSuccess: () => access.refetch() });

  if (access.isLoading) return <main className="min-h-screen bg-[#F5F4F0]" />;
  if (!access.data?.authenticated) return <StatsLogin onAuthenticated={() => access.refetch()} />;

  if (dashboard.isLoading) {
    return <p className="text-sm uppercase tracking-[0.12em] text-[#8A8A8A]">Chargement des indicateurs…</p>;
  }

  if (dashboard.error || !dashboard.data) {
    return <p className="border border-[#FF4757] bg-white p-5 text-sm text-[#0F0F10]">Les données de consultation ne sont pas disponibles pour le moment.</p>;
  }

  const { totals } = dashboard.data;
  const percentage = (value: number) => new Intl.NumberFormat("fr-FR", { style: "percent", maximumFractionDigits: 0 }).format(value);

  return (
    <div className="min-h-screen bg-[#F5F4F0] px-2 py-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 border-b border-[#E5E2DC] pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.16em] uppercase text-[#FF4757]">Mesure first-party</p>
            <h1 className="pt-2 text-4xl leading-none uppercase text-[#0F0F10] md:text-6xl">Statistiques<br />Veille IA &amp; WEB</h1>
            <p className="pt-4 text-sm leading-relaxed text-[#8A8A8A]">Audience agrégée active. Le niveau 2 utilise une session first-party pseudonyme validée par le DPO.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => logout.mutate()} className="rounded-none border-[#E5E2DC] bg-transparent text-[#0F0F10]">
              <LogOut className="mr-2 h-4 w-4" /> Quitter
            </Button>
            {rangeOptions.map(option => (
              <Button
                key={option.value}
                variant="outline"
                onClick={() => setDays(option.value)}
                className={days === option.value ? "rounded-none border-[#0F0F10] bg-[#0F0F10] text-white hover:bg-[#0F0F10]" : "rounded-none border-[#E5E2DC] bg-transparent text-[#0F0F10]"}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-px bg-[#E5E2DC] sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Pages vues" value={totals.pageViews} hint="Chargements mesurés sur la période sélectionnée." icon={Eye} />
          <MetricCard label="Éditions lues" value={totals.editionViews} hint="Consultations de l'édition courante et des archives." icon={FileText} />
          <MetricCard label="Analyses ouvertes" value={totals.domainOpens} hint={`Taux d'ouverture : ${percentage(totals.domainOpenRate)} par consultation d'édition.`} icon={Layers3} />
          <MetricCard label="Sources ouvertes" value={totals.sourceClicks} hint={`Taux de clic : ${percentage(totals.sourceClickRate)} après ouverture d'analyse.`} icon={ExternalLink} />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <section className="border border-[#E5E2DC] bg-white p-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-5 w-5 text-[#FF4757]" strokeWidth={1.5} />
              <h2 className="text-sm tracking-[0.14em] uppercase text-[#0F0F10]">Consultations quotidiennes</h2>
            </div>
            {dashboard.data.daily.length === 0 ? (
              <p className="pt-6 text-sm leading-relaxed text-[#8A8A8A]">Les graphiques s'afficheront dès les premières consultations collectées.</p>
            ) : (
              <div className="h-72 pt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dashboard.data.daily} margin={{ top: 8, right: 4, left: -24, bottom: 0 }}>
                    <CartesianGrid vertical={false} stroke="#E5E2DC" />
                    <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#8A8A8A", fontSize: 11 }} />
                    <YAxis allowDecimals={false} tickLine={false} axisLine={false} tick={{ fill: "#8A8A8A", fontSize: 11 }} />
                    <Tooltip cursor={{ fill: "#F5F4F0" }} />
                    <Bar dataKey="value" fill="#FF4757" radius={0} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </section>
          <section className="border border-[#E5E2DC] bg-[#0F0F10] p-6 text-[#F5F4F0]">
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-[#FF4757]" strokeWidth={1.5} />
              <h2 className="text-sm tracking-[0.14em] uppercase">Statut de collecte</h2>
            </div>
            <div className="mt-6 border-t border-[#333] pt-5">
              <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#FF4757]" /> Niveau 1 actif</div>
              <p className="pt-2 text-xs leading-relaxed text-[#8A8A8A]">Événements agrégés, sans identifiant persistant ni rapprochement CRM.</p>
            </div>
            <div className="mt-5 border-t border-[#333] pt-5">
              <div className="text-sm text-[#8A8A8A]">Niveau 2 : {dashboard.data.level2Enabled ? "actif" : "désactivé"}</div>
              <p className="pt-2 text-xs leading-relaxed text-[#8A8A8A]">
                {dashboard.data.level2Enabled
                  ? "Session first-party opaque et limitée à la session navigateur ; hachage côté serveur, sans rapprochement CRM ni suivi inter-sites."
                  : "L'activation nécessite la validation DPO du régime de consentement et de la durée de session."}
              </p>
            </div>
          </section>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <RankedList title="Éditions consultées" items={dashboard.data.editions} empty="Aucune édition consultée sur cette période." />
          <RankedList title="Domaines approfondis" items={dashboard.data.domains} empty="Aucune analyse ouverte sur cette période." />
          <RankedList title="Sources vérifiées" items={dashboard.data.sources} empty="Aucune source ouverte sur cette période." />
          <RankedList title="Canaux d'acquisition" items={dashboard.data.channels} empty="Les canaux seront visibles dès les premières visites." />
        </div>
      </div>
    </div>
  );
}

export default function AnalyticsDashboard() {
  return <AnalyticsDashboardContent />;
}
