export const veilleData = {
  week: 23,
  year: 2026,
  publicationDate: "2 juin 2026",
  domainsCount: 7,
  sourcesCount: 16,
  criticalCount: 3,
  importantCount: 4,
  actionsCount: 6,
  emergingCount: 4,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "Google I/O 2026 et Google Marketing Live officialisent le passage au web agentique — Gemini 3.5 Flash et Antigravity transforment la recherche en une interface générative multimodale.",
  },

  statDominante: {
    chiffre: "40%",
    titre: "PART DES REVENUS OPENAI LIÉE À L'ENTERPRISE",
    description: "Le marché de l'IA agentique en entreprise explose : OpenAI annonce que 40% de ses 25 milliards de dollars de revenus annualisés proviennent désormais du segment Enterprise, porté par le déploiement de flottes d'agents autonomes.",
  },

  syntheseExecutive: "La semaine 23 confirme la transition structurelle vers le web agentique. Lors de Google I/O et Google Marketing Live, la firme a dévoilé la plus grande refonte de la recherche en 25 ans, intégrant Gemini 3.5 Flash et la génération d'interfaces à la volée (Antigravity). Parallèlement, une étude XSquareSEO sur 44 éditeurs démontre que le trafic web ne s'effondre pas, mais se concentre vers les acteurs institutionnels au détriment des éditeurs dépendants du SEO. Côté entreprise, OpenAI confirme l'adoption massive des agents autonomes, qui représentent désormais 40% de ses revenus, tandis que le secteur MarTech (Attentive, Hightouch) intègre nativement ces capacités pour l'orchestration des données first-party.",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Zero-Click / GEO", "DXP / MarTech", "CDP / Data First-Party", "UX / IA", "Agents IA / LLM", "Innovation Marketing"],
    sources: ["Google Blog", "Elementera", "Strike Social", "PPC Land", "Pew Research", "Ahrefs", "Seer Interactive", "Kogifi", "Newswire", "Google Research", "Decrypt", "OpenAI", "Technology Zone", "Attentive"],
    critiques: ["Google AI : Nouvelle interface multimodale et Generative UI (Antigravity)", "Zero-Click : Internet à deux vitesses confirmé par l'étude XSquareSEO", "Agents IA : OpenAI Enterprise atteint 40% des revenus avec les workflows agentiques"],
    importants: ["DXP / MarTech : Convergence commerce et contenu avec Universal Cart", "CDP : Partenariat Audience Acuity et Hightouch pour l'identité", "UX / IA : Fin du lien bleu au profit des interfaces générées à la volée", "Innovation Mkt : Attentive Thread 2026 lance l'orchestration agentique"],
    actions: ["Auditer l'architecture du site pour les réponses contextuelles Gemini", "Optimiser le Google Merchant Center pour l'Universal Commerce Protocol", "Intégrer les données first-party dans une architecture composable", "Cartographier les workflows internes automatisables par agents IA", "Définir des 'guardrails' en langage naturel pour AI Max", "Préparer la conformité au EU AI Act (nouvelle échéance décembre 2027)"],
    emergents: ["Interfaces génératives à la volée (Antigravity)", "Panier d'achat universel cross-plateformes (Universal Cart)", "Agents personnels 24/7 (Gemini Spark)", "Orchestration marketing autonome"],
  },

  domaines: [
    { id: 1, code: "GOOGLE AI", titre: "GOOGLE I/O : LA PLUS GRANDE REFONTE DE SEARCH EN 25 ANS", badge: "CRITIQUE", previousBadge: "CRITIQUE", description: "Google déploie Gemini 3.5 Flash comme modèle par défaut pour AI Mode et introduit une Search Box multimodale. Les 'Information Agents' arrivent cet été pour surveiller le web en continu.", category: "GOOGLE", sources: [{ nom: "Google Blog", url: "https://blog.google/innovation-and-ai/technology/ai/io-2026-keynote-moment-videos/" }, { nom: "Elementera", url: "https://www.elementera.com/blog/you-missed-google-io-2026-why-matters-aeo-ai-search" }], details: ["AI Mode atteint 1 milliard d'utilisateurs mensuels un an après son lancement", "Gemini 3.5 Flash devient le modèle par défaut mondial pour AI Mode", "Nouvelle Search Box acceptant texte, images, fichiers, vidéos et onglets Chrome", "Passage fluide entre AI Overviews et AI Mode avec conservation du contexte", "Lancement estival des Information Agents (surveillance web 24/7) pour les abonnés Pro/Ultra"] },
    { id: 2, code: "ZERO-CLICK", titre: "INTERNET À DEUX VITESSES : LE WEB SE CENTRALISE", badge: "CRITIQUE", previousBadge: "CRITIQUE", description: "L'étude XSquareSEO sur 44 éditeurs majeurs contredit la thèse de l'effondrement du trafic. Le volume global augmente de 5%, mais se concentre massivement sur les marques institutionnelles.", category: "SEO", sources: [{ nom: "PPC Land", url: "https://ppc.land/googles-ai-search-is-building-a-two-tier-internet-study-finds/" }, { nom: "Pew Research", url: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/" }], details: ["Trafic organique global en hausse (54,59 Md à 57,32 Md de visites entre 2024 et 2026)", "Les marques institutionnelles gagnent massivement (Axios +79%, ESPN +45%, NYT +38%)", "Les éditeurs dépendants du SEO s'effondrent (SFGate -56%, Vox -53%, The Atlantic -52%)", "Pew Research : 47% de baisse relative du taux de clic en présence d'un AI Overview", "Seer Interactive : Les marques citées dans l'IA obtiennent +35% de clics organiques"] },
    { id: 3, code: "DXP / MARTECH", titre: "GML 2026 : CONVERGENCE DU COMMERCE ET DU CONTENU", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Google Marketing Live acte l'intégration de Gemini dans l'écosystème publicitaire. Le Universal Commerce Protocol permet un checkout natif directement depuis les SERPs.", category: "ARCHI", sources: [{ nom: "Strike Social", url: "https://strikesocial.com/blog/google-marketing-live-2026/" }, { nom: "Kogifi", url: "https://www.kogifi.com/articles/omnichannel-marketing-platform" }], details: ["Universal Commerce Protocol (UCP) : checkout natif dans AI Mode via Universal Cart", "Conversational Discovery Ads : publicités générées dynamiquement dans AI Mode", "Ask Advisor : agent IA unifié cross-plateformes (Ads, Analytics, Merchant Center)", "AI Max s'étend au Shopping et au Travel pour capturer les requêtes longue traîne", "AI Brief : pilotage des campagnes via des 'guardrails' en langage naturel"] },
    { id: 4, code: "CDP & DATA", titre: "L'IDENTITÉ AU CŒUR DES ARCHITECTURES COMPOSABLES", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Le partenariat entre Audience Acuity et Hightouch illustre le besoin critique de résolution d'identité déterministe pour alimenter les plateformes marketing agentiques.", category: "CDP", sources: [{ nom: "Newswire", url: "https://www.newswire.com/news/audience-acuity-and-hightouch-announce-strategic-partnership-to-power-22787274" }], details: ["Partenariat stratégique Audience Acuity et Hightouch (Agentic Marketing Platform)", "Objectif : résoudre l'identité (personne/foyer) pour enrichir les profils clients", "L'infrastructure d'identité devient la couche fondamentale des architectures composables", "Enrichissement déterministe nécessaire pour guider les agents IA dans le ciblage", "Les données first-party de qualité seront le thème central des Cannes Lions 2026"] },
    { id: 5, code: "UX / IA", titre: "ANTIGRAVITY : LA FIN DU LIEN BLEU", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Le moteur Antigravity de Google permet la génération d'interfaces utilisateur (Generative UI) à la volée, remplaçant la liste de liens par des expériences interactives personnalisées.", category: "UX", sources: [{ nom: "Google Research", url: "https://research.google/blog/a-new-era-of-innovation-google-research-at-io-2026/" }, { nom: "Elementera", url: "https://www.elementera.com/blog/you-missed-google-io-2026-why-matters-aeo-ai-search" }], details: ["Generative UI via Antigravity : création de layouts et widgets sur mesure dans Search", "Déploiement de 'mini-apps' pour les tâches longues (planification, déménagement)", "Neural Expressive : nouveau langage design Gemini (animations, typographie, haptique)", "Le design d'interface évolue de la conception d'écrans à l'orchestration de systèmes", "Ask YouTube : la recherche vidéo devient une expérience conversationnelle"] },
    { id: 6, code: "AGENTS IA", titre: "LES AGENTS D'ENTREPRISE GÉNÈRENT 40% DES REVENUS OPENAI", badge: "CRITIQUE", previousBadge: "IMPORTANT", description: "L'adoption des workflows agentiques s'accélère. OpenAI tire 40% de ses revenus de l'Enterprise. Côté régulation, l'EU AI Act reporte son échéance 'high-risk' à décembre 2027.", category: "IA", sources: [{ nom: "Decrypt", url: "https://decrypt.co/363844/openai-enterprise-ai-revenue-agentic-workflows" }, { nom: "Technology Zone", url: "https://www.technologyzone.eu/eu-ai-act-2026-compliance-guide-business/" }], details: ["OpenAI Enterprise représente plus de 40% des revenus (25 Md$ annualisés)", "Lancement des ChatGPT Workspace Agents pour Enterprise et Edu", "Codex atteint 3 millions d'utilisateurs actifs", "Panne globale OpenAI le 29 mai 2026 soulignant la dépendance critique aux API", "EU AI Act : report de l'échéance des systèmes 'high-risk' à décembre 2027", "Rappel : les obligations GPAI et pratiques interdites sont DÉJÀ en vigueur"] },
    { id: 7, code: "INNOVATION MKT", titre: "ATTENTIVE LANCE LE MARKETING AGENTIQUE OMNICANAL", badge: "IMPORTANT", previousBadge: "À SURVEILLER", description: "Lors de Thread 2026, Attentive dévoile sa feuille de route agentique pour lutter contre la fatigue des consommateurs, alors que 43% se désabonnent face à la pression marketing.", category: "INNOV MKT", sources: [{ nom: "Attentive", url: "https://www.attentive.com/press-releases/attentive-unveils-next-generation-of-agentic-ai-marketing-innovation-at-thread-2026" }], details: ["Lancement de Brand Voice 2.0, Reporting Agent et AI Campaigns", "6 Md$ de revenus générés via la plateforme au Q1 2026", "43% des consommateurs se désabonnent à cause de la fatigue des messages", "L'orchestration IA devient indispensable pour maintenir l'engagement", "Google Marketing Live : 75% des utilisateurs décident plus vite avec AI Mode"] },
  ],

  actions: [
    { id: 1, titre: "Auditer l'architecture du site web pour s'assurer que les contenus répondent aux requêtes complexes et contextuelles de Gemini 3.5 Flash", domaine: "SEO / CONTENU", responsable: "ÉQUIPE SEO + ÉDITORIALE" },
    { id: 2, titre: "Optimiser le flux Google Merchant Center pour tirer parti du Universal Commerce Protocol (UCP) et du checkout natif dans les SERPs", domaine: "E-COMMERCE / ACQUISITION", responsable: "ÉQUIPE MARKETING" },
    { id: 3, titre: "Évaluer l'intégration des données first-party avec les solutions de résolution d'identité pour alimenter les futures plateformes agentiques", domaine: "DATA / CDP", responsable: "DATA + MARKETING OPS" },
    { id: 4, titre: "Cartographier les workflows internes automatisables par des agents IA (type ChatGPT Workspace Agents) et définir les règles de gouvernance", domaine: "GOUVERNANCE IA", responsable: "DSI + INNOVATION" },
    { id: 5, titre: "Définir des 'guardrails' stricts en langage naturel (AI Brief) pour piloter les campagnes publicitaires AI Max tout en protégeant la marque", domaine: "ACQUISITION", responsable: "ÉQUIPE PAID MEDIA" },
    { id: 6, titre: "Vérifier la conformité immédiate aux obligations GPAI du EU AI Act, malgré le report de l'échéance pour les systèmes 'high-risk'", domaine: "JURIDIQUE / DSI", responsable: "DPO + JURIDIQUE" },
  ],

  signauxEmergents: [
    { titre: "Interfaces génératives à la volée", description: "Création d'UI, layouts et widgets personnalisés en temps réel par l'IA (Antigravity)", horizon: "3-6 MOIS" },
    { titre: "Panier d'achat universel (Universal Cart)", description: "Checkout natif cross-plateformes (Search, Gemini, YouTube) sans passage par le site e-commerce", horizon: "3-6 MOIS" },
    { titre: "Agents personnels 24/7 (Gemini Spark)", description: "Assistants IA asynchrones capables de travailler et prendre des décisions appareil éteint", horizon: "6-12 MOIS" },
    { titre: "Orchestration marketing autonome", description: "Délégation complète de la création, du ciblage et de l'envoi des campagnes à des agents IA", horizon: "6-12 MOIS" },
  ],

  tendancesPassees: [
    { titre: "Convergence GEO et SEO", description: "Confirmation par Google que l'optimisation pour l'IA générative reste fondamentalement du SEO" },
    { titre: "Gouvernance des agents IA en entreprise", description: "Déploiement massif des Workspace Agents et intégration de la sécurité (Microsoft Agent 365, OpenAI Enterprise)" },
    { titre: "Transition CMS monolithiques vers DXP composables", description: "Adoption accélérée des architectures MACH pour intégrer l'orchestration IA" },
    { titre: "Érosion du CTR organique classique", description: "Baisse confirmée des clics traditionnels au profit des marques institutionnelles (Winner-take-all)" },
    { titre: "Déploiement massif des architectures RAG", description: "Standardisation du RAG pour l'ancrage factuel des modèles génératifs" },
  ],
};

export type VeilleData = typeof veilleData;
export type Domaine = typeof veilleData.domaines[0];
