import { veilleData } from "./veille-s21";
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

// Semaine 21 — édition actuelle (données complètes depuis veille-s21.ts)
const s21: ArchiveEdition = {
  week: 21,
  year: 2026,
  date: "19 mai 2026",
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

// Semaine 19
const s19: ArchiveEdition = {
  week: 19,
  year: 2026,
  date: "5 mai 2026",
  signalMajeur: "L'ère du GEO (Generative Engine Optimization) devient structurelle — Gartner confirme -25% de volume de recherche traditionnelle, les AI Overviews couvrent 47% des requêtes.",
  domainsCount: 9,
  sourcesCount: 20,
  criticalCount: 3,
  importantCount: 5,
  actionsCount: 6,
  emergingCount: 4,
  syntheseExecutive: "La transition vers une recherche conversationnelle et générative (GEO) s'accélère massivement, avec 47% des requêtes Google désormais couvertes par les AI Overviews, entraînant une baisse de 38% du CTR organique classique. Côté architecture et gouvernance, l'intégration des agents IA en entreprise se structure avec de nouvelles plateformes (Google Gemini Enterprise, Microsoft Agent 365) mais encadrée par des exigences de conformité strictes (EU AI Act, deadline août 2026). Pour les équipes digitales, l'urgence est double : adapter les contenus pour exister dans les réponses générées par l'IA, et sécuriser l'utilisation des outils IA en interne.",
  statDominante: { chiffre: "47%", titre: "DES REQUÊTES COUVERTES PAR LES AI OVERVIEWS", description: "Les AI Overviews de Google couvrent désormais près de la moitié des requêtes SEO trackées, en hausse depuis 31% au Q1 2026. Le CTR organique chute de 38% en moyenne sur ces requêtes." },
  domaines: [
    { id: 1, code: "GOOGLE AI", titre: "NOUVELLE VAGUE D'UTILISATEURS TRANSFORME LA RECHERCHE", badge: "CRITIQUE", previousBadge: "CRITIQUE", description: "Google confirme que les requêtes deviennent plus longues et complexes. Les utilisateurs découvrent la capacité du moteur à traiter des prompts.", category: "GOOGLE", sources: [{ nom: "Search Engine Journal", url: "https://www.searchenginejournal.com/google-says-a-new-wave-of-ai-users-is-transforming-search/573873/" }, { nom: "blog.google", url: "https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/" }], details: ["Nikola Todorovic qualifie le changement de révolutionnaire", "Les requêtes moyennes s'allongent significativement", "Google Cloud Next '26 : Gemini Enterprise Agent Platform, TPU 8e génération", "75% des clients Google Cloud utilisent déjà l'IA"] },
    { id: 2, code: "ZERO-CLICK", titre: "EFFONDREMENT DU CTR ORGANIQUE CLASSIQUE", badge: "CRITIQUE", previousBadge: "CRITIQUE", description: "Les AI Overviews couvrent 47% des requêtes (vs 31% au Q1). CTR organique passe de 0.61 à 0.38 par recherche (-38%).", category: "SEO", sources: [{ nom: "Digital Applied", url: "https://www.digitalapplied.com/blog/ai-search-traffic-tipping-point-40-percent-math-2026" }], details: ["AI Overviews : couverture passée de 31% à 47%", "CTR organique moyen chute de 0.61 à 0.38", "Gartner projette -25% de volume de recherche traditionnelle", "ChatGPT traite plus de 2.5 milliards de prompts"] },
    { id: 3, code: "SCHEMA.ORG", titre: "LE MARKUP DEVIENT SIGNAL CLÉ POUR LES LLM", badge: "IMPORTANT", previousBadge: "À SURVEILLER", description: "Les données structurées évoluent pour devenir le langage de base compris par les modèles d'IA générative.", category: "SEO", sources: [{ nom: "Search Engine Roundtable", url: "https://www.seroundtable.com" }, { nom: "iovista", url: "https://www.iovista.com" }], details: ["Google Search Console teste un AI Contribution Report", "Nouveau user agent Google-Agent", "Limite Googlebot 2 Mo", "Le schema markup devient un signal de support pour le GEO"] },
    { id: 4, code: "DXP / HEADLESS", titre: "L'IA FORCE LA REFONTE DES STACKS MARTECH", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "La croissance plate du secteur masque un pivot profond : l'IA au centre de la création de valeur.", category: "ARCHI", sources: [{ nom: "MarTech.org", url: "https://martech.org" }], details: ["MarTech 2026 : l'IA provoque un reset majeur", "Migration vers des plateformes d'expérience unifiées", "Les CXP promettent un ROI de 300%", "Sitecore 25 ans : évolution vers DXP composable + IA"] },
    { id: 5, code: "CDP & DATA", titre: "L'URGENCE DE LA RÉSOLUTION D'IDENTITÉ FIRST-PARTY", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "L'approche de la fin des cookies tiers impose clean rooms et résolution d'identité durable côté serveur.", category: "CDP", sources: [{ nom: "Oracle Blog", url: "https://blogs.oracle.com" }], details: ["Oracle : CDP et Data Warehouse sont complémentaires", "Personnalisation privacy-first nécessite un stack côté serveur", "L'identity resolution reste le chantier le plus sous-estimé"] },
    { id: 6, code: "UX / IA", titre: "LE DESIGN SYSTÈME REMPLACE LE DESIGN D'ÉCRAN", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "L'UI générative modifie le rôle des designers : concevoir des systèmes d'orchestration.", category: "UX", sources: [{ nom: "BrandLab", url: "https://brandlab.com.au" }], details: ["Generative UI : design systems deviennent des couches d'orchestration", "arXiv : revisiter les 10 heuristiques de Nielsen pour les agents IA", "MAUX : framework multi-agents pour automatiser le design UX"] },
    { id: 7, code: "RAG / LLM", titre: "GOUVERNANCE DES AGENTS IA ET EU AI ACT", badge: "CRITIQUE", previousBadge: "IMPORTANT", description: "Microsoft (Agent 365) et Google (Gemini Enterprise) lancent des outils de gouvernance. EU AI Act : amendes jusqu'à 35M€.", category: "IA", sources: [{ nom: "Computerworld", url: "https://www.computerworld.com" }], details: ["Microsoft Agent 365 (GA 1er mai)", "Google AI control center pour Workspace", "EU AI Act : obligations high-risk potentiellement reportées", "Amendes : jusqu'à 35M€ ou 7% du CA mondial"] },
    { id: 8, code: "INNOVATION MKT", titre: "L'ÈRE DU MARKETING CONVERSATIONNEL CONTINU", badge: "À SURVEILLER", previousBadge: "À SURVEILLER", description: "Fin du marketing blast. Conversations personnalisées continues. Retail Media atteint 197 Md$ en 2026.", category: "INNOV MKT", sources: [{ nom: "Forbes", url: "https://www.forbes.com" }], details: ["KitKat Break Mode : packaging cage de Faraday", "Retail Media : 197 Md$ en 2026", "Fin du marketing blast : conversations continues pilotées par l'IA"] },
    { id: 9, code: "RETAIL MEDIA", titre: "EXPLOSION DES INVESTISSEMENTS PUBLICITAIRES RETAIL", badge: "IMPORTANT", previousBadge: null, description: "Le Retail Media devient le 3e canal publicitaire mondial avec 197 Md$ en 2026.", category: "INNOV MKT", sources: [{ nom: "Advertising Week", url: "https://advertisingweek.com" }], details: ["Retail Media : 197 Md$ en 2026, soit 16% des dépenses publicitaires mondiales", "Amazon Ads, Walmart Connect et Instacart dominent le marché US"] },
  ],
  actions: [
    { id: 1, titre: "Auditer la visibilité GEO de TBS Education", domaine: "SEO / GEO", responsable: "ÉQUIPE SEO + ANALYTICS" },
    { id: 2, titre: "Alléger le code source sous 2 Mo", domaine: "TECHNIQUE", responsable: "ÉQUIPE TECHNIQUE" },
    { id: 3, titre: "Déployer Schema.org exhaustif", domaine: "SEO / TECHNIQUE", responsable: "ÉQUIPE SEO + DEV" },
    { id: 4, titre: "Cartographier les usages IA internes", domaine: "GOUVERNANCE", responsable: "DSI + JURIDIQUE" },
    { id: 5, titre: "Préparer la résolution d'identité first-party", domaine: "DATA / MARKETING", responsable: "DATA + MARKETING" },
    { id: 6, titre: "Adapter la stratégie de contenu", domaine: "CONTENU / SEO", responsable: "ÉQUIPE ÉDITORIALE + SEO" },
  ],
  signauxEmergents: [
    { titre: "UI Générative et adaptative", description: "Interfaces web qui se recomposent en temps réel selon le profil", horizon: "6-12 MOIS" },
    { titre: "Agents IA autonomes en entreprise", description: "Déploiement d'agents capables d'exécuter des tâches complexes", horizon: "12-18 MOIS" },
    { titre: "Clean Rooms Data", description: "Partage sécurisé de données first-party entre partenaires", horizon: "6-12 MOIS" },
    { titre: "Marketing conversationnel omnicanal", description: "Remplacement des campagnes email classiques par des flux de discussion continus", horizon: "6-12 MOIS" },
  ],
  tendancesPassees: [
    { titre: "Déploiement massif des architectures RAG", description: "RAG = architecture LLM la plus déployée en entreprise" },
    { titre: "Accessibilité numérique (EU AI Act + WCAG)", description: "Pression réglementaire croissante" },
    { titre: "Transition CMS monolithiques vers DXP composables", description: "Adoption accélérée des architectures MACH" },
    { titre: "IA dans la création publicitaire", description: "Google Vids, génération créative automatisée" },
  ],
  dashboardDetails: {
    domaines: ["Google AI", "Zero-Click / GEO", "Schema.org", "DXP / Headless", "CDP & Data", "UX / IA", "RAG / LLM", "Innovation Marketing", "Retail Media & Pub"],
    sources: ["Search Engine Journal", "blog.google", "Digital Applied", "Search Engine Land", "National Law Review", "Search Engine Roundtable", "iovista", "MarTech.org", "ISG / Yahoo Finance", "Oracle Blog", "Croct", "BrandLab", "arXiv", "UX Matters", "Computerworld", "DLA Piper", "KNIME", "Forbes", "Advertising Week", "MarTech Pulse"],
    critiques: ["Google AI : Nouvelle vague d'utilisateurs transforme la recherche", "Zero-Click : Effondrement du CTR organique classique", "RAG / LLM : Gouvernance des agents IA et EU AI Act"],
    importants: ["Schema.org : Le markup devient signal clé pour les LLM", "DXP / Headless : L'IA force la refonte des stacks MarTech", "CDP & Data : L'urgence de la résolution d'identité first-party", "UX / IA : Le design système remplace le design d'écran", "Retail Media : Explosion des investissements publicitaires"],
    actions: ["Auditer la visibilité GEO", "Alléger le code source sous 2 Mo", "Déployer Schema.org exhaustif", "Cartographier les usages IA internes", "Préparer la résolution d'identité first-party", "Adapter la stratégie de contenu"],
    emergents: ["UI Générative et adaptative", "Agents IA autonomes en entreprise", "Clean Rooms Data", "Marketing conversationnel omnicanal"],
  },
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
    { id: 1, code: "RAG / LLM", titre: "MICROSOFT AGENT 365 EN DISPONIBILITÉ GÉNÉRALE", badge: "CRITIQUE", previousBadge: "IMPORTANT", description: "Microsoft lance Agent 365 pour découvrir, gouverner et sécuriser les agents IA cross-platform.", category: "IA", sources: [{ nom: "Computerworld", url: "https://www.computerworld.com" }], details: ["Agent 365 GA depuis le 1er mai 2026", "Gouvernance cross-platform des agents IA", "Intégration native Copilot + Azure AI", "Dashboard centralisé de monitoring"] },
    { id: 2, code: "GOOGLE AI", titre: "GOOGLE AI CONTROL CENTER POUR WORKSPACE", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Google déploie un centre de contrôle IA centralisé pour Workspace.", category: "GOOGLE", sources: [{ nom: "blog.google", url: "https://blog.google" }], details: ["Vue centralisée de l'usage IA dans Workspace", "Contrôles granulaires par utilisateur et groupe", "Rapports d'utilisation et de conformité"] },
    { id: 3, code: "ZERO-CLICK", titre: "AI OVERVIEWS ATTEIGNENT 42% DE COUVERTURE", badge: "CRITIQUE", previousBadge: "CRITIQUE", description: "La couverture des AI Overviews progresse de 4 points en une semaine.", category: "SEO", sources: [{ nom: "Search Engine Journal", url: "https://www.searchenginejournal.com" }], details: ["Couverture passée de 38% à 42% en une semaine", "Accélération sur les requêtes informationnelles", "CTR organique en baisse continue"] },
    { id: 4, code: "DXP / HEADLESS", titre: "CONSOLIDATION DU MARCHÉ MARTECH", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Plusieurs acquisitions majeures signalent une consolidation du marché MarTech.", category: "ARCHI", sources: [{ nom: "MarTech.org", url: "https://martech.org" }], details: ["3 acquisitions majeures en avril 2026", "Tendance vers les plateformes CXP unifiées", "Budget MarTech moyen en hausse de 12%"] },
    { id: 5, code: "CDP & DATA", titre: "CLEAN ROOMS : ADOPTION EN ACCÉLÉRATION", badge: "IMPORTANT", previousBadge: "À SURVEILLER", description: "Les data clean rooms passent du stade expérimental à l'adoption mainstream.", category: "CDP", sources: [{ nom: "eMarketer", url: "https://www.emarketer.com" }], details: ["Adoption multipliée par 3 en 6 mois", "Google et Meta lancent leurs propres clean rooms", "Budget dédié en hausse de 45%"] },
    { id: 6, code: "UX / IA", titre: "DESIGN TOKENS : NOUVEAU STANDARD W3C", badge: "À SURVEILLER", previousBadge: "À SURVEILLER", description: "Le W3C publie la spécification finale des Design Tokens.", category: "UX", sources: [{ nom: "W3C", url: "https://www.w3.org" }], details: ["Spécification finale publiée le 25 avril", "Adoption immédiate par Figma et Adobe", "Format JSON standardisé"] },
    { id: 7, code: "SCHEMA.ORG", titre: "SCHEMA.ORG 27.0 : NOUVEAUX TYPES POUR L'IA", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Schema.org 27.0 introduit de nouveaux types pour décrire les systèmes IA.", category: "SEO", sources: [{ nom: "schema.org", url: "https://schema.org" }], details: ["Nouveaux types AIApplication et AIModel", "Propriétés pour décrire les biais et limites", "Google annonce le support dans Search Console"] },
    { id: 8, code: "INNOVATION MKT", titre: "SOCIAL VIDEO DÉPASSE CTV EN DÉPENSES", badge: "À SURVEILLER", previousBadge: null, description: "Pour la première fois, les dépenses en social video dépassent celles de la CTV.", category: "INNOV MKT", sources: [{ nom: "eMarketer", url: "https://www.emarketer.com" }], details: ["Social video : 48 Md$ vs CTV : 45 Md$ en 2026", "TikTok et YouTube Shorts captent 60% de la croissance", "ROI mesuré supérieur de 23% vs display classique"] },
  ],
  actions: [
    { id: 1, titre: "Évaluer Microsoft Agent 365 pour la gouvernance IA", domaine: "GOUVERNANCE", responsable: "DSI + JURIDIQUE" },
    { id: 2, titre: "Auditer la couverture AI Overviews sur les requêtes stratégiques", domaine: "SEO / GEO", responsable: "ÉQUIPE SEO" },
    { id: 3, titre: "Initier un POC data clean room", domaine: "DATA / MARKETING", responsable: "DATA + MARKETING" },
    { id: 4, titre: "Mettre à jour Schema.org vers la version 27.0", domaine: "SEO / TECHNIQUE", responsable: "ÉQUIPE SEO + DEV" },
    { id: 5, titre: "Benchmarker les formats social video", domaine: "MARKETING", responsable: "ÉQUIPE MARKETING" },
  ],
  signauxEmergents: [
    { titre: "Gouvernance IA cross-platform", description: "Émergence d'outils centralisés pour gérer les agents IA", horizon: "3-6 MOIS" },
    { titre: "Design Tokens standardisés", description: "Le standard W3C va accélérer l'adoption des design systems multi-plateforme", horizon: "6-12 MOIS" },
    { titre: "Social video programmatique", description: "L'achat programmatique de social video se structure", horizon: "6-12 MOIS" },
  ],
  tendancesPassees: [
    { titre: "Déploiement massif des architectures RAG", description: "RAG = architecture LLM la plus déployée en entreprise" },
    { titre: "Accessibilité numérique (EU AI Act + WCAG)", description: "Pression réglementaire croissante" },
    { titre: "Transition CMS monolithiques vers DXP composables", description: "Adoption accélérée des architectures MACH" },
    { titre: "IA dans la création publicitaire", description: "Google Vids, génération créative automatisée" },
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
  syntheseExecutive: "Google confirme la suppression de la page de résultats traditionnelle sur desktop le 22 avril 2026. Les AI Overviews couvrent 38% des recherches. Le CTR organique chute jusqu'à -61%.",
  statDominante: { chiffre: "60%", titre: "DES RECHERCHES GOOGLE SE TERMINENT SANS CLIC", description: "Les AI Overviews couvrent désormais 38% des requêtes. Le trafic organique traditionnel s'érode structurellement." },
  domaines: [
    { id: 1, code: "GOOGLE AI", titre: "SUPPRESSION DES SERPS CLASSIQUES SUR DESKTOP", badge: "CRITIQUE", previousBadge: "CRITIQUE", description: "Google confirme la transition vers une recherche 100% conversationnelle sur desktop.", category: "GOOGLE", sources: [{ nom: "Search Engine Land", url: "https://searchengineland.com" }], details: ["Transition effective le 22 avril 2026", "Interface conversationnelle par défaut", "Liens organiques relégués en bas de page"] },
    { id: 2, code: "ZERO-CLICK", titre: "CTR ORGANIQUE EN CHUTE LIBRE (-61%)", badge: "CRITIQUE", previousBadge: "CRITIQUE", description: "Le CTR organique chute de 61% sur les requêtes couvertes par les AI Overviews.", category: "SEO", sources: [{ nom: "Digital Applied", url: "https://www.digitalapplied.com" }], details: ["CTR organique : -61% sur les requêtes avec AI Overview", "Position 1 organique perd 45% de ses clics", "Seules les requêtes transactionnelles résistent"] },
    { id: 3, code: "RAG / LLM", titre: "CHATGPT DÉPASSE 2.5 MILLIARDS DE PROMPTS QUOTIDIENS", badge: "CRITIQUE", previousBadge: "IMPORTANT", description: "ChatGPT franchit le cap des 2.5 milliards de prompts quotidiens.", category: "IA", sources: [{ nom: "OpenAI Blog", url: "https://openai.com/blog" }], details: ["2.5 milliards de prompts/jour", "40% sont des requêtes informationnelles", "Croissance de 38% en 3 mois"] },
    { id: 4, code: "SCHEMA.ORG", titre: "GOOGLE LIMITE GOOGLEBOT À 2 MO PAR PAGE", badge: "CRITIQUE", previousBadge: "IMPORTANT", description: "Google annonce une limite stricte de 2 Mo pour le crawl Googlebot.", category: "SEO", sources: [{ nom: "Search Engine Roundtable", url: "https://www.seroundtable.com" }], details: ["Limite de 2 Mo effective immédiatement", "Données structurées ignorées si HTML > 2 Mo", "Impact majeur sur les sites e-commerce et SPA"] },
    { id: 5, code: "DXP / HEADLESS", titre: "SITECORE FÊTE 25 ANS ET PIVOTE VERS L'IA", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Sitecore annonce un pivot stratégique vers l'IA avec une nouvelle suite composable.", category: "ARCHI", sources: [{ nom: "MarTech.org", url: "https://martech.org" }], details: ["Nouvelle suite Sitecore XM Cloud + IA", "Partenariat avec Microsoft Azure OpenAI", "Objectif : 50% des clients migrés d'ici fin 2026"] },
    { id: 6, code: "CDP & DATA", titre: "ORACLE : CDP ET DATA WAREHOUSE COMPLÉMENTAIRES", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Oracle publie un framework clarifiant la complémentarité entre CDP et Data Warehouse.", category: "CDP", sources: [{ nom: "Oracle Blog", url: "https://blogs.oracle.com" }], details: ["CDP pour l'activation temps réel", "Data Warehouse pour l'analyse historique", "Les deux sont nécessaires et complémentaires"] },
    { id: 7, code: "UX / IA", titre: "HEURISTIQUES DE NIELSEN REVISITÉES POUR L'IA", badge: "À SURVEILLER", previousBadge: "À SURVEILLER", description: "Un article arXiv propose une révision des 10 heuristiques de Nielsen pour l'IA.", category: "UX", sources: [{ nom: "arXiv", url: "https://arxiv.org" }], details: ["10 heuristiques adaptées aux agents IA", "Nouvelles dimensions : transparence, contrôle, explicabilité"] },
  ],
  actions: [
    { id: 1, titre: "Auditer le poids HTML de toutes les pages clés (< 2 Mo)", domaine: "TECHNIQUE", responsable: "ÉQUIPE TECHNIQUE" },
    { id: 2, titre: "Mesurer l'impact de la suppression des SERPs classiques", domaine: "SEO / ANALYTICS", responsable: "ÉQUIPE SEO + ANALYTICS" },
    { id: 3, titre: "Développer une stratégie de contenu pour les réponses conversationnelles", domaine: "CONTENU / SEO", responsable: "ÉQUIPE ÉDITORIALE + SEO" },
    { id: 4, titre: "Évaluer la visibilité TBS Education dans ChatGPT", domaine: "SEO / GEO", responsable: "ÉQUIPE SEO" },
    { id: 5, titre: "Prioriser la migration vers une architecture headless", domaine: "TECHNIQUE / ARCHI", responsable: "DSI + ÉQUIPE TECHNIQUE" },
    { id: 6, titre: "Mettre en place un monitoring du CTR organique", domaine: "ANALYTICS", responsable: "ÉQUIPE ANALYTICS" },
    { id: 7, titre: "Réviser les heuristiques UX internes pour l'IA", domaine: "UX", responsable: "ÉQUIPE UX" },
  ],
  signauxEmergents: [
    { titre: "Recherche 100% conversationnelle", description: "Google supprime les SERPs classiques sur desktop", horizon: "IMMÉDIAT" },
    { titre: "Agents IA transactionnels", description: "LLM capables d'exécuter des achats et réservations", horizon: "6-12 MOIS" },
    { titre: "Attribution multi-touch IA", description: "Modèles d'attribution pilotés par l'IA pour le marketing", horizon: "6-12 MOIS" },
  ],
  tendancesPassees: [
    { titre: "Déploiement massif des architectures RAG", description: "RAG = architecture LLM la plus déployée en entreprise" },
    { titre: "Accessibilité numérique (EU AI Act + WCAG)", description: "Pression réglementaire croissante" },
    { titre: "Transition CMS monolithiques vers DXP composables", description: "Adoption accélérée des architectures MACH" },
    { titre: "IA dans la création publicitaire", description: "Google Vids, génération créative automatisée" },
  ],
  dashboardDetails: {
    domaines: ["Google AI", "Zero-Click / GEO", "RAG / LLM", "Schema.org", "DXP / Headless", "CDP & Data", "UX / IA"],
    sources: ["Search Engine Land", "Digital Applied", "OpenAI Blog", "Search Engine Roundtable", "MarTech.org", "Oracle Blog", "arXiv", "Forbes", "Computerworld", "DLA Piper", "KNIME", "BrandLab", "UX Matters", "National Law Review", "Croct"],
    critiques: ["Google AI : Suppression des SERPs classiques", "Zero-Click : CTR organique -61%", "RAG / LLM : ChatGPT 2.5 Md prompts/jour", "Schema.org : Limite Googlebot 2 Mo"],
    importants: ["DXP : Sitecore pivote vers l'IA", "CDP & Data : Oracle framework CDP/DW"],
    actions: ["Auditer poids HTML < 2 Mo", "Mesurer impact suppression SERPs", "Stratégie contenu conversationnel", "Visibilité dans ChatGPT", "Migration headless", "Monitoring CTR organique", "Heuristiques UX IA"],
    emergents: ["Recherche 100% conversationnelle", "Agents IA transactionnels", "Attribution multi-touch IA"],
  },
};

// Export de toutes les éditions (ordre chronologique inversé)
export const archives: ArchiveEdition[] = [s21, s19, s18, s17, s16, s15, s14, s13, s12, s11, s10];

// Export de l'édition courante
export const currentEdition = s21;

// Alias pour compatibilité
export const allArchives = archives;

export function getEditionByWeek(week: number): ArchiveEdition | undefined {
  return archives.find((e) => e.week === week);
}
