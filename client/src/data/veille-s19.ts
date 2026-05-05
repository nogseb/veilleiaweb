export const veilleData = {
  week: 19,
  year: 2026,
  publicationDate: "5 mai 2026",
  domainsCount: 8,
  sourcesCount: 18,
  criticalCount: 3,
  importantCount: 4,
  actionsCount: 6,
  emergingCount: 4,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "L'ère du GEO (Generative Engine Optimization) devient structurelle — Gartner confirme -25% de volume de recherche traditionnelle, les AI Overviews couvrent 47% des requêtes.",
  },

  statDominante: {
    chiffre: "47%",
    titre: "DES REQUÊTES COUVERTES PAR LES AI OVERVIEWS",
    description: "Les AI Overviews de Google couvrent désormais près de la moitié des requêtes SEO trackées, en hausse depuis 31% au Q1 2026. Le CTR organique chute de 38% en moyenne sur ces requêtes.",
  },

  syntheseExecutive: "La transition vers une recherche conversationnelle et générative (GEO) s'accélère massivement, avec 47% des requêtes Google désormais couvertes par les AI Overviews, entraînant une baisse de 38% du CTR organique classique. Côté architecture et gouvernance, l'intégration des agents IA en entreprise se structure avec de nouvelles plateformes (Google Gemini Enterprise, Microsoft Agent 365) mais encadrée par des exigences de conformité strictes (EU AI Act, deadline août 2026). Pour les équipes digitales, l'urgence est double : adapter les contenus pour exister dans les réponses générées par l'IA, et sécuriser l'utilisation des outils IA en interne.",

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "NOUVELLE VAGUE D'UTILISATEURS TRANSFORME LA RECHERCHE",
      badge: "CRITIQUE",
      description: "Google confirme que les requêtes deviennent plus longues et complexes. Les utilisateurs découvrent la capacité du moteur à traiter des prompts. Les fan-out queries maintiennent le search classique en arrière-plan.",
      category: "GOOGLE",
      sources: [
        { nom: "Search Engine Journal", url: "https://www.searchenginejournal.com/google-says-a-new-wave-of-ai-users-is-transforming-search/573873/" },
        { nom: "blog.google", url: "https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/" },
      ],
      details: [
        "Nikola Todorovic (Director Software Engineering, Google Search) qualifie le changement de révolutionnaire",
        "Les requêtes moyennes s'allongent significativement — les utilisateurs formulent des prompts complexes",
        "Google Cloud Next '26 : Gemini Enterprise Agent Platform, TPU 8e génération, Gemma 4",
        "75% des clients Google Cloud utilisent déjà l'IA, 330 organisations traitent >1 trillion de tokens/an",
      ],
    },
    {
      id: 2,
      code: "ZERO-CLICK",
      titre: "EFFONDREMENT DU CTR ORGANIQUE CLASSIQUE",
      badge: "CRITIQUE",
      description: "Les AI Overviews couvrent 47% des requêtes (vs 31% au Q1). CTR organique passe de 0.61 à 0.38 par recherche (-38%). Le GEO remplace le SEO traditionnel comme enjeu de direction générale.",
      category: "SEO",
      sources: [
        { nom: "Digital Applied", url: "https://www.digitalapplied.com/blog/ai-search-traffic-tipping-point-40-percent-math-2026" },
        { nom: "Search Engine Land", url: "https://searchengineland.com/unifying-the-search-experience-for-real-growth-in-2026-474537" },
        { nom: "National Law Review", url: "https://natlawreview.com/press-releases/death-blue-link-why-2026-year-generative-engine-optimization-geo-became" },
      ],
      details: [
        "AI Overviews : couverture passée de 31% (Q1 2026) à 47% des requêtes SEO trackées",
        "CTR organique moyen chute de 0.61 à 0.38 par recherche sur les requêtes avec AI Overview",
        "Gartner projette -25% de volume de recherche traditionnelle d'ici fin 2026",
        "ChatGPT traite désormais plus de 2.5 milliards de prompts",
      ],
    },
    {
      id: 3,
      code: "SCHEMA.ORG",
      titre: "LE MARKUP DEVIENT SIGNAL CLÉ POUR LES LLM",
      badge: "IMPORTANT",
      description: "Les données structurées évoluent pour devenir le langage de base compris par les modèles d'IA générative. Google impose une limite de 2 Mo à Googlebot.",
      category: "SEO",
      sources: [
        { nom: "Search Engine Roundtable", url: "https://www.seroundtable.com/april-may-2026-google-webmaster-report-41251.html" },
        { nom: "iovista", url: "https://www.iovista.com/blog/schema-markup-structured-data-llm-seo-guide/" },
      ],
      details: [
        "Google Search Console teste un AI Contribution Report mesurant la contribution IA",
        "Nouveau user agent Google-Agent pour les agents IA de Google",
        "Limite Googlebot 2 Mo : données structurées ignorées si HTML trop lourd",
        "Le schema markup devient un signal de support pour le GEO (pas un facteur direct)",
      ],
    },
    {
      id: 4,
      code: "DXP / HEADLESS",
      titre: "L'IA FORCE LA REFONTE DES STACKS MARTECH",
      badge: "IMPORTANT",
      description: "La croissance plate du secteur masque un pivot profond : l'IA au centre de la création de valeur. Migration vers des plateformes CXP unifiées et composables.",
      category: "ARCHI",
      sources: [
        { nom: "MarTech.org", url: "https://martech.org/martech-2026-ai-drives-a-major-industry-reset/" },
        { nom: "ISG / Yahoo Finance", url: "https://ca.finance.yahoo.com/news/end-end-platforms-unify-customer-130000951.html" },
      ],
      details: [
        "MarTech 2026 : l'IA provoque un reset majeur de l'industrie",
        "Migration des outils départementaux vers des plateformes d'expérience unifiées",
        "Les CXP promettent un ROI de 300% via la personnalisation temps réel",
        "Sitecore 25 ans : évolution du CMS monolithique vers DXP composable + IA",
      ],
    },
    {
      id: 5,
      code: "CDP & DATA",
      titre: "L'URGENCE DE LA RÉSOLUTION D'IDENTITÉ FIRST-PARTY",
      badge: "IMPORTANT",
      description: "L'approche de la fin des cookies tiers impose clean rooms et résolution d'identité durable côté serveur. CDP et Data Warehouse doivent fonctionner de concert.",
      category: "CDP",
      sources: [
        { nom: "Oracle Blog", url: "https://blogs.oracle.com/cx/data-warehouse-cdp-or-both-a-new-opportunity-to-rethink-enterprise-customer-data-strategy" },
        { nom: "Croct", url: "https://blog.croct.com/post/privacy-first-personalization-playbook" },
      ],
      details: [
        "Oracle : CDP et Data Warehouse sont complémentaires, pas concurrents",
        "Brysa publie un Ad Ops 2030 Readiness Checklist pour l'ère cookieless",
        "La personnalisation privacy-first nécessite un stack côté serveur",
        "L'identity resolution reste le chantier le plus sous-estimé des équipes data",
      ],
    },
    {
      id: 6,
      code: "UX / IA",
      titre: "LE DESIGN SYSTÈME REMPLACE LE DESIGN D'ÉCRAN",
      badge: "IMPORTANT",
      description: "L'UI générative modifie le rôle des designers : concevoir des systèmes d'orchestration capables de générer des interfaces en temps réel selon le contexte.",
      category: "UX",
      sources: [
        { nom: "BrandLab", url: "https://brandlab.com.au/generative-ui-is-here-how-designers-are-building-systems-instead-of-screens/" },
        { nom: "arXiv", url: "https://arxiv.org/html/2605.02729v1" },
        { nom: "UX Matters", url: "https://www.uxmatters.com/mt/archives/2026/05/the-future-of-ux-research-navigating-ai-powered-tools-and-methods.php" },
      ],
      details: [
        "Generative UI : les design systems deviennent des couches d'orchestration vivantes",
        "arXiv : revisiter les 10 heuristiques de Nielsen pour les agents IA",
        "En 2026, la majorité des équipes UX utilisent l'IA pour l'analyse et la synthèse",
        "MAUX : framework multi-agents pour automatiser le design UX (ScienceDirect)",
      ],
    },
    {
      id: 7,
      code: "RAG / LLM",
      titre: "GOUVERNANCE DES AGENTS IA ET EU AI ACT",
      badge: "CRITIQUE",
      description: "Microsoft (Agent 365) et Google (Gemini Enterprise) lancent des outils de gouvernance. EU AI Act : amendes jusqu'à 35M€ ou 7% du CA mondial dès août 2026.",
      category: "IA",
      sources: [
        { nom: "Computerworld", url: "https://www.computerworld.com/article/4167054/microsoft-google-push-ai-agent-governance-into-enterprise-it-mainstream.html" },
        { nom: "DLA Piper", url: "https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/2026/The-Digital-AI-Omnibus-Proposed-deferral-of-high-risk-AI-obligations-under-the-AI-Act" },
        { nom: "KNIME", url: "https://www.knime.com/blog/eu-ai-act-what-enterprises-need-do-august-2026" },
      ],
      details: [
        "Microsoft Agent 365 (GA 1er mai) : découvrir, gouverner et sécuriser les agents IA cross-platform",
        "Google AI control center pour Workspace : vue centralisée de l'usage IA",
        "EU AI Act : 2e trilogue du 28 avril sans accord. Report possible au 2 décembre 2027",
        "Si pas adopté avant le 2 août 2026, les obligations high-risk s'appliquent comme prévu",
        "Amendes : jusqu'à 35M€ ou 7% du CA mondial pour les violations les plus graves",
        "NSA/DoD publie un guide sur l'adoption prudente des agents IA autonomes",
      ],
    },
    {
      id: 8,
      code: "INNOVATION MKT",
      titre: "L'ÈRE DU MARKETING CONVERSATIONNEL CONTINU",
      badge: "À SURVEILLER",
      description: "Fin du marketing blast. Conversations personnalisées continues via email, SMS, WhatsApp. Retail Media atteint 197 Md$ en 2026 (16% des dépenses pub mondiales).",
      category: "IA",
      sources: [
        { nom: "Forbes", url: "https://www.forbes.com/sites/rogerdooley/2026/05/01/kitkats-faraday-wrapper-shows-how-smart-packaging-should-work/" },
        { nom: "Advertising Week", url: "https://advertisingweek.com/retail-media-needs-dooh-connectivity/" },
        { nom: "MarTech Pulse", url: "https://martech-pulse.com/news/the-end-of-the-marketing-blast-retail-enters-the-conversation-era/" },
      ],
      details: [
        "KitKat Break Mode : packaging cage de Faraday bloquant les signaux smartphone (Ogilvy Colombia)",
        "Retail Media : 197 Md$ en 2026, soit 16% de toutes les dépenses publicitaires mondiales",
        "Fin du marketing blast : les marques passent aux conversations continues pilotées par l'IA",
        "Google Marketing Live 2026 (20 mai) : nouveaux outils de mesure pour l'ère IA",
        "Social video dépasse CTV en dépenses totales, portée par la personnalisation IA",
      ],
    },
  ],

  actions: [
    {
      id: 1,
      titre: "Auditer la visibilité GEO de TBS Education dans les AI Overviews et ChatGPT pour les requêtes stratégiques",
      domaine: "SEO / GEO",
      responsable: "ÉQUIPE SEO + ANALYTICS",
    },
    {
      id: 2,
      titre: "Alléger le code source des pages clés sous 2 Mo pour garantir la lecture des données structurées par Googlebot",
      domaine: "TECHNIQUE",
      responsable: "ÉQUIPE TECHNIQUE",
    },
    {
      id: 3,
      titre: "Déployer un balisage Schema.org exhaustif sur les fiches programmes pour faciliter l'ingestion par les LLM",
      domaine: "SEO / TECHNIQUE",
      responsable: "ÉQUIPE SEO + DEV",
    },
    {
      id: 4,
      titre: "Cartographier les usages IA internes pour anticiper la conformité EU AI Act (systèmes à haut risque RH/admissions)",
      domaine: "GOUVERNANCE",
      responsable: "DSI + JURIDIQUE",
    },
    {
      id: 5,
      titre: "Préparer la résolution d'identité first-party et auditer la résilience face à la disparition des cookies tiers",
      domaine: "DATA / MARKETING",
      responsable: "DATA + MARKETING",
    },
    {
      id: 6,
      titre: "Adapter la stratégie de contenu : créer des contenus profonds et structurés pour répondre aux prompts complexes",
      domaine: "CONTENU / SEO",
      responsable: "ÉQUIPE ÉDITORIALE + SEO",
    },
  ],

  signauxEmergents: [
    {
      titre: "UI Générative et adaptative",
      description: "Interfaces web qui se recomposent en temps réel selon le profil et l'intention du visiteur",
      horizon: "6-12 MOIS",
    },
    {
      titre: "Agents IA autonomes en entreprise",
      description: "Déploiement d'agents capables d'exécuter des tâches complexes multi-systèmes de bout en bout",
      horizon: "12-18 MOIS",
    },
    {
      titre: "Clean Rooms Data",
      description: "Partage sécurisé de données first-party entre partenaires sans exposer les PII",
      horizon: "6-12 MOIS",
    },
    {
      titre: "Marketing conversationnel omnicanal",
      description: "Remplacement des campagnes email classiques par des flux de discussion continus pilotés par l'IA",
      horizon: "6-12 MOIS",
    },
  ],

  tendancesPassees: [
    {
      titre: "Déploiement massif des architectures RAG",
      description: "RAG = architecture LLM la plus déployée en entreprise (Databricks 2024-2025)",
    },
    {
      titre: "Accessibilité numérique (EU AI Act + WCAG)",
      description: "8 800 plaintes ADA en 2024 (+7%), pression réglementaire croissante",
    },
    {
      titre: "Transition CMS monolithiques vers DXP composables",
      description: "Adoption accélérée des architectures MACH (Microservices, API-first, Cloud-native, Headless)",
    },
    {
      titre: "IA dans la création publicitaire",
      description: "Google Vids, génération créative automatisée, personnalisation à grande échelle",
    },
  ],
};

export type VeilleData = typeof veilleData;
