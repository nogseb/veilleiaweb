import { veilleData } from "./veille-s19";
import { s16, s15, s14, s13, s12, s11, s10 } from "./archives-history";

export interface ArchiveEdition {
  week: number;
  year: number;
  date: string;
  signalMajeur: string;
  domainsCount: number;
  sourcesCount: number;
  criticalCount: number;
  importantCount: number;
  actionsCount: number;
  emergingCount: number;
  syntheseExecutive: string;
  statDominante: { chiffre: string; titre: string; description: string };
  domaines: typeof veilleData.domaines;
  actions: typeof veilleData.actions;
  signauxEmergents: typeof veilleData.signauxEmergents;
  tendancesPassees: typeof veilleData.tendancesPassees;
  dashboardDetails: typeof veilleData.dashboardDetails;
}

// Semaine 19 — édition actuelle (données complètes depuis veille-s19.ts)
const s19: ArchiveEdition = {
  week: 19,
  year: 2026,
  date: "5 mai 2026",
  signalMajeur: veilleData.signalMajeur.title,
  domainsCount: veilleData.domainsCount,
  sourcesCount: veilleData.sourcesCount,
  criticalCount: veilleData.criticalCount,
  importantCount: veilleData.importantCount,
  actionsCount: veilleData.actionsCount,
  emergingCount: veilleData.emergingCount,
  syntheseExecutive: veilleData.syntheseExecutive,
  statDominante: veilleData.statDominante,
  domaines: veilleData.domaines,
  actions: veilleData.actions,
  signauxEmergents: veilleData.signauxEmergents,
  tendancesPassees: veilleData.tendancesPassees,
  dashboardDetails: veilleData.dashboardDetails,
};

// Semaine 18
const s18: ArchiveEdition = {
  week: 18,
  year: 2026,
  date: "28 avril 2026",
  signalMajeur: "Microsoft Agent 365 en GA — gouvernance des agents IA en entreprise",
  domainsCount: 8,
  sourcesCount: 17,
  criticalCount: 2,
  importantCount: 4,
  actionsCount: 5,
  emergingCount: 3,
  syntheseExecutive: "Microsoft lance Agent 365 en disponibilité générale, marquant l'entrée de la gouvernance des agents IA dans le mainstream IT. Google répond avec un AI Control Center pour Workspace. Côté SEO, les AI Overviews atteignent 42% de couverture. Le marché MarTech montre des signes de consolidation avec plusieurs acquisitions majeures.",
  statDominante: { chiffre: "42%", titre: "DES REQUÊTES AVEC AI OVERVIEWS", description: "La couverture des AI Overviews continue sa progression, passant de 38% à 42% en une semaine." },
  domaines: [
    { id: 1, code: "RAG / LLM", titre: "MICROSOFT AGENT 365 EN DISPONIBILITÉ GÉNÉRALE", badge: "CRITIQUE", previousBadge: "IMPORTANT", description: "Microsoft lance Agent 365 pour découvrir, gouverner et sécuriser les agents IA cross-platform. Intégration native avec Copilot et Azure AI.", category: "IA", sources: [{ nom: "Computerworld", url: "https://www.computerworld.com" }], details: ["Agent 365 GA depuis le 1er mai 2026", "Gouvernance cross-platform des agents IA", "Intégration native Copilot + Azure AI", "Dashboard centralisé de monitoring"] },
    { id: 2, code: "GOOGLE AI", titre: "GOOGLE AI CONTROL CENTER POUR WORKSPACE", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Google déploie un centre de contrôle IA centralisé pour Workspace, permettant aux admins de gérer l'usage de Gemini dans l'organisation.", category: "GOOGLE", sources: [{ nom: "blog.google", url: "https://blog.google" }], details: ["Vue centralisée de l'usage IA dans Workspace", "Contrôles granulaires par utilisateur et groupe", "Rapports d'utilisation et de conformité", "Intégration avec Google Cloud Security"] },
    { id: 3, code: "ZERO-CLICK", titre: "AI OVERVIEWS ATTEIGNENT 42% DE COUVERTURE", badge: "CRITIQUE", previousBadge: "CRITIQUE", description: "La couverture des AI Overviews progresse de 4 points en une semaine, confirmant l'accélération de la transition vers la recherche générative.", category: "SEO", sources: [{ nom: "Search Engine Journal", url: "https://www.searchenginejournal.com" }], details: ["Couverture passée de 38% à 42% en une semaine", "Accélération notable sur les requêtes informationnelles", "CTR organique en baisse continue", "Les featured snippets disparaissent progressivement"] },
    { id: 4, code: "DXP / HEADLESS", titre: "CONSOLIDATION DU MARCHÉ MARTECH", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Plusieurs acquisitions majeures signalent une consolidation du marché MarTech autour de plateformes unifiées.", category: "ARCHI", sources: [{ nom: "MarTech.org", url: "https://martech.org" }], details: ["3 acquisitions majeures en avril 2026", "Tendance vers les plateformes CXP unifiées", "Les pure-players spécialisés sous pression", "Budget MarTech moyen en hausse de 12%"] },
    { id: 5, code: "CDP & DATA", titre: "CLEAN ROOMS : ADOPTION EN ACCÉLÉRATION", badge: "IMPORTANT", previousBadge: "À SURVEILLER", description: "Les data clean rooms passent du stade expérimental à l'adoption mainstream, portées par la fin annoncée des cookies tiers.", category: "CDP", sources: [{ nom: "eMarketer", url: "https://www.emarketer.com" }], details: ["Adoption multipliée par 3 en 6 mois", "Google et Meta lancent leurs propres clean rooms", "Interopérabilité reste un défi majeur", "Budget dédié en hausse de 45% chez les annonceurs"] },
    { id: 6, code: "UX / IA", titre: "DESIGN TOKENS : NOUVEAU STANDARD W3C", badge: "À SURVEILLER", previousBadge: "À SURVEILLER", description: "Le W3C publie la spécification finale des Design Tokens, standardisant l'échange de tokens entre outils de design et code.", category: "UX", sources: [{ nom: "W3C", url: "https://www.w3.org" }], details: ["Spécification finale publiée le 25 avril", "Adoption immédiate par Figma et Adobe", "Format JSON standardisé", "Facilite la cohérence multi-plateforme"] },
    { id: 7, code: "SCHEMA.ORG", titre: "SCHEMA.ORG 27.0 : NOUVEAUX TYPES POUR L'IA", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Schema.org 27.0 introduit de nouveaux types spécifiquement conçus pour décrire les capacités et limites des systèmes IA.", category: "SEO", sources: [{ nom: "schema.org", url: "https://schema.org" }], details: ["Nouveaux types AIApplication et AIModel", "Propriétés pour décrire les biais et limites", "Adoption recommandée pour la conformité EU AI Act", "Google annonce le support dans Search Console"] },
    { id: 8, code: "INNOVATION MKT", titre: "SOCIAL VIDEO DÉPASSE CTV EN DÉPENSES", badge: "À SURVEILLER", previousBadge: null, description: "Pour la première fois, les dépenses publicitaires en social video dépassent celles de la CTV, portées par TikTok et YouTube Shorts.", category: "INNOV MKT", sources: [{ nom: "eMarketer", url: "https://www.emarketer.com" }], details: ["Social video : 48 Md$ vs CTV : 45 Md$ en 2026", "TikTok et YouTube Shorts captent 60% de la croissance", "Format vertical dominant (78% des impressions)", "ROI mesuré supérieur de 23% vs display classique"] },
  ],
  actions: [
    { id: 1, titre: "Évaluer Microsoft Agent 365 pour la gouvernance des outils IA internes", domaine: "GOUVERNANCE", responsable: "DSI + JURIDIQUE" },
    { id: 2, titre: "Auditer la couverture AI Overviews sur les requêtes stratégiques TBS Education", domaine: "SEO / GEO", responsable: "ÉQUIPE SEO" },
    { id: 3, titre: "Initier un POC data clean room avec les partenaires média", domaine: "DATA / MARKETING", responsable: "DATA + MARKETING" },
    { id: 4, titre: "Mettre à jour le balisage Schema.org vers la version 27.0", domaine: "SEO / TECHNIQUE", responsable: "ÉQUIPE SEO + DEV" },
    { id: 5, titre: "Benchmarker les formats social video pour les campagnes recrutement", domaine: "MARKETING", responsable: "ÉQUIPE MARKETING" },
  ],
  signauxEmergents: [
    { titre: "Gouvernance IA cross-platform", description: "Émergence d'outils centralisés pour gérer les agents IA déployés sur plusieurs plateformes", horizon: "3-6 MOIS" },
    { titre: "Design Tokens standardisés", description: "Le standard W3C va accélérer l'adoption des design systems multi-plateforme", horizon: "6-12 MOIS" },
    { titre: "Social video programmatique", description: "L'achat programmatique de social video se structure avec de nouveaux DSP spécialisés", horizon: "6-12 MOIS" },
  ],
  tendancesPassees: [
    { titre: "Déploiement massif des architectures RAG", description: "RAG = architecture LLM la plus déployée en entreprise (Databricks 2024-2025)" },
    { titre: "Accessibilité numérique (EU AI Act + WCAG)", description: "8 800 plaintes ADA en 2024 (+7%), pression réglementaire croissante" },
    { titre: "Transition CMS monolithiques vers DXP composables", description: "Adoption accélérée des architectures MACH" },
    { titre: "IA dans la création publicitaire", description: "Google Vids, génération créative automatisée, personnalisation à grande échelle" },
  ],
  dashboardDetails: {
    domaines: ["RAG / LLM", "Google AI", "Zero-Click / GEO", "DXP / Headless", "CDP & Data", "UX / IA", "Schema.org", "Innovation Marketing"],
    sources: ["Computerworld", "blog.google", "Search Engine Journal", "MarTech.org", "eMarketer", "W3C", "schema.org", "Search Engine Land", "Forbes", "DLA Piper", "KNIME", "Oracle Blog", "Croct", "BrandLab", "arXiv", "UX Matters", "Digital Applied"],
    critiques: ["RAG / LLM : Microsoft Agent 365 en GA", "Zero-Click : AI Overviews atteignent 42%"],
    importants: ["Google AI : AI Control Center pour Workspace", "DXP : Consolidation du marché MarTech", "CDP & Data : Clean Rooms en accélération", "Schema.org 27.0 : Nouveaux types IA"],
    actions: ["Évaluer Microsoft Agent 365", "Auditer couverture AI Overviews", "POC data clean room", "Mettre à jour Schema.org 27.0", "Benchmarker social video"],
    emergents: ["Gouvernance IA cross-platform", "Design Tokens standardisés", "Social video programmatique"],
  },
};

// Semaine 17
const s17: ArchiveEdition = {
  week: 17,
  year: 2026,
  date: "21 avril 2026",
  signalMajeur: "Google supprime les SERPs classiques sur desktop — recherche 100% conversationnelle",
  domainsCount: 7,
  sourcesCount: 15,
  criticalCount: 4,
  importantCount: 2,
  actionsCount: 7,
  emergingCount: 3,
  syntheseExecutive: "Google confirme la suppression de la page de résultats traditionnelle sur desktop le 22 avril 2026. Les AI Overviews couvrent 38% des recherches. Le CTR organique chute jusqu'à -61%. Une refonte profonde des stratégies de visibilité, de contenu et d'architecture technique s'impose.",
  statDominante: { chiffre: "60%", titre: "DES RECHERCHES GOOGLE SE TERMINENT SANS CLIC", description: "Les AI Overviews couvrent désormais 38% des requêtes. Le trafic organique traditionnel s'érode structurellement." },
  domaines: [
    { id: 1, code: "GOOGLE AI", titre: "SUPPRESSION DES SERPS CLASSIQUES SUR DESKTOP", badge: "CRITIQUE", previousBadge: "CRITIQUE", description: "Google confirme la transition vers une recherche 100% conversationnelle sur desktop à partir du 22 avril 2026.", category: "GOOGLE", sources: [{ nom: "Search Engine Land", url: "https://searchengineland.com" }], details: ["Transition effective le 22 avril 2026", "Interface conversationnelle par défaut", "Liens organiques relégués en bas de page", "Option de retour aux résultats classiques supprimée"] },
    { id: 2, code: "ZERO-CLICK", titre: "CTR ORGANIQUE EN CHUTE LIBRE (-61%)", badge: "CRITIQUE", previousBadge: "CRITIQUE", description: "Le CTR organique chute de 61% sur les requêtes couvertes par les AI Overviews. Le modèle de trafic organique est structurellement remis en cause.", category: "SEO", sources: [{ nom: "Digital Applied", url: "https://www.digitalapplied.com" }], details: ["CTR organique : -61% sur les requêtes avec AI Overview", "Position 1 organique perd 45% de ses clics", "Les featured snippets ne protègent plus le CTR", "Seules les requêtes transactionnelles résistent"] },
    { id: 3, code: "RAG / LLM", titre: "CHATGPT DÉPASSE 2.5 MILLIARDS DE PROMPTS QUOTIDIENS", badge: "CRITIQUE", previousBadge: "IMPORTANT", description: "ChatGPT franchit le cap des 2.5 milliards de prompts quotidiens, confirmant l'adoption massive des LLM comme interface de recherche alternative.", category: "IA", sources: [{ nom: "OpenAI Blog", url: "https://openai.com/blog" }], details: ["2.5 milliards de prompts/jour (vs 1.8 Md en janvier)", "40% des prompts sont des requêtes informationnelles", "Croissance de 38% en 3 mois", "Concurrence directe avec Google Search"] },
    { id: 4, code: "SCHEMA.ORG", titre: "GOOGLE LIMITE GOOGLEBOT À 2 MO PAR PAGE", badge: "CRITIQUE", previousBadge: "IMPORTANT", description: "Google annonce une limite stricte de 2 Mo pour le crawl Googlebot. Au-delà, les données structurées et le contenu en fin de page sont ignorés.", category: "SEO", sources: [{ nom: "Search Engine Roundtable", url: "https://www.seroundtable.com" }], details: ["Limite de 2 Mo effective immédiatement", "Données structurées ignorées si HTML > 2 Mo", "Impact majeur sur les sites e-commerce et SPA", "Recommandation : audit de poids de page urgent"] },
    { id: 5, code: "DXP / HEADLESS", titre: "SITECORE FÊTE 25 ANS ET PIVOTE VERS L'IA", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Sitecore célèbre ses 25 ans en annonçant un pivot stratégique vers l'IA avec une nouvelle suite de produits composables.", category: "ARCHI", sources: [{ nom: "MarTech.org", url: "https://martech.org" }], details: ["Nouvelle suite Sitecore XM Cloud + IA", "Migration facilitée depuis les versions monolithiques", "Partenariat avec Microsoft Azure OpenAI", "Objectif : 50% des clients migrés d'ici fin 2026"] },
    { id: 6, code: "CDP & DATA", titre: "ORACLE : CDP ET DATA WAREHOUSE COMPLÉMENTAIRES", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Oracle publie un framework clarifiant la complémentarité entre CDP et Data Warehouse pour la stratégie data client.", category: "CDP", sources: [{ nom: "Oracle Blog", url: "https://blogs.oracle.com" }], details: ["CDP pour l'activation temps réel", "Data Warehouse pour l'analyse historique", "Les deux sont nécessaires et complémentaires", "Framework de décision publié"] },
    { id: 7, code: "UX / IA", titre: "HEURISTIQUES DE NIELSEN REVISITÉES POUR L'IA", badge: "À SURVEILLER", previousBadge: "À SURVEILLER", description: "Un article arXiv propose une révision des 10 heuristiques de Nielsen adaptée aux interfaces pilotées par l'IA.", category: "UX", sources: [{ nom: "arXiv", url: "https://arxiv.org" }], details: ["10 heuristiques adaptées aux agents IA", "Nouvelles dimensions : transparence, contrôle, explicabilité", "Framework d'évaluation UX pour les chatbots", "Adoption recommandée pour les audits UX"] },
  ],
  actions: [
    { id: 1, titre: "Auditer immédiatement le poids HTML de toutes les pages clés (< 2 Mo)", domaine: "TECHNIQUE", responsable: "ÉQUIPE TECHNIQUE" },
    { id: 2, titre: "Mesurer l'impact de la suppression des SERPs classiques sur le trafic organique", domaine: "SEO / ANALYTICS", responsable: "ÉQUIPE SEO + ANALYTICS" },
    { id: 3, titre: "Développer une stratégie de contenu optimisée pour les réponses conversationnelles", domaine: "CONTENU / SEO", responsable: "ÉQUIPE ÉDITORIALE + SEO" },
    { id: 4, titre: "Évaluer la visibilité TBS Education dans ChatGPT et les LLM alternatifs", domaine: "SEO / GEO", responsable: "ÉQUIPE SEO" },
    { id: 5, titre: "Prioriser la migration vers une architecture headless pour les pages lourdes", domaine: "TECHNIQUE / ARCHI", responsable: "DSI + ÉQUIPE TECHNIQUE" },
    { id: 6, titre: "Mettre en place un monitoring du CTR organique par catégorie de requête", domaine: "ANALYTICS", responsable: "ÉQUIPE ANALYTICS" },
    { id: 7, titre: "Réviser les heuristiques UX internes pour intégrer les dimensions IA", domaine: "UX", responsable: "ÉQUIPE UX" },
  ],
  signauxEmergents: [
    { titre: "Recherche 100% conversationnelle", description: "La page de résultats classique disparaît au profit d'interfaces dialogiques", horizon: "0-3 MOIS" },
    { titre: "LLM comme moteurs de recherche", description: "ChatGPT et Perplexity captent une part croissante des requêtes informationnelles", horizon: "3-6 MOIS" },
    { titre: "Audit de poids de page comme priorité SEO", description: "La limite Googlebot 2 Mo impose un nouveau KPI technique", horizon: "0-3 MOIS" },
  ],
  tendancesPassees: [
    { titre: "Déploiement massif des architectures RAG", description: "RAG = architecture LLM la plus déployée en entreprise" },
    { titre: "Accessibilité numérique (EU AI Act + WCAG)", description: "Pression réglementaire croissante" },
    { titre: "Transition CMS monolithiques vers DXP composables", description: "Adoption accélérée des architectures MACH" },
    { titre: "IA dans la création publicitaire", description: "Génération créative automatisée à grande échelle" },
  ],
  dashboardDetails: {
    domaines: ["Google AI", "Zero-Click / GEO", "RAG / LLM", "Schema.org", "DXP / Headless", "CDP & Data", "UX / IA"],
    sources: ["Search Engine Land", "Digital Applied", "OpenAI Blog", "Search Engine Roundtable", "MarTech.org", "Oracle Blog", "arXiv", "Search Engine Journal", "Computerworld", "Forbes", "DLA Piper", "KNIME", "BrandLab", "UX Matters", "Croct"],
    critiques: ["Google AI : Suppression des SERPs classiques", "Zero-Click : CTR organique -61%", "RAG / LLM : ChatGPT 2.5 Md prompts/jour", "Schema.org : Limite Googlebot 2 Mo"],
    importants: ["DXP : Sitecore pivote vers l'IA", "CDP : Oracle clarifie CDP vs DW"],
    actions: ["Auditer poids HTML < 2 Mo", "Mesurer impact SERPs", "Stratégie contenu conversationnel", "Visibilité dans ChatGPT", "Migration headless", "Monitoring CTR", "Réviser heuristiques UX"],
    emergents: ["Recherche conversationnelle", "LLM comme moteurs", "Audit poids de page"],
  },
};

// Liste complète des archives (triées par semaine décroissante)
export const allArchives: ArchiveEdition[] = [s19, s18, s17, s16, s15, s14, s13, s12, s11, s10];

// Fonction utilitaire pour récupérer une édition par numéro de semaine
export function getEditionByWeek(week: number): ArchiveEdition | undefined {
  return allArchives.find((a) => a.week === week);
}

// Liste résumée pour la page d'index des archives
export const archivesSummary = allArchives.map((a) => ({
  week: a.week,
  year: a.year,
  date: a.date,
  signalMajeur: a.signalMajeur,
  domaines: a.domainsCount,
  sources: a.sourcesCount,
  critiques: a.criticalCount,
}));
