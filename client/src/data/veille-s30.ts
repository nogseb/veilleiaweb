export const veilleData = {
  week: 30,
  year: 2026,
  publicationDate: "20 juillet 2026",
  domainsCount: 8,
  sourcesCount: 18,
  criticalCount: 3,
  importantCount: 3,
  actionsCount: 6,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "Google s'auto-cite 8,4x plus dans AI Mode en 11 semaines (Profound, 32M+ instances, 15 avril – 30 juin 2026) — google.com devient le #2 domaine le plus cité via Business Profiles et Product Panels. En parallèle, le Digital Omnibus signé le 8 juillet repousse le high-risk EU AI Act à décembre 2027 mais l'Article 50 (transparence chatbot, marquage IA) reste au 2 août 2026.",
  },

  statDominante: {
    chiffre: "8,4x",
    titre: "CROISSANCE DES AUTO-CITATIONS GOOGLE DANS AI MODE EN 11 SEMAINES",
    description: "Selon Profound (32M+ instances google.com/searchviewer analysées, 15 avril – 30 juin 2026), les citations de Google vers ses propres pages dans AI Mode ont été multipliées par 8,4 en seulement 11 semaines. Google.com est désormais le #2 domaine le plus cité dans AI Mode, porté par les Google Business Profiles et les Product Knowledge Panels. SE Ranking (février 2026) avait déjà mesuré une progression de 5,7 % à 17,42 % des réponses AI Mode citant google.com.",
  },

  syntheseExecutive: "La semaine 30 révèle une double recomposition structurelle. Côté search, Google accélère l'auto-référencement dans AI Mode (8,4x en 11 semaines selon Profound) en s'appuyant sur ses propres surfaces structurées — Business Profiles et Product Panels — au détriment des sites tiers. Le marché publicitaire IA se fragmente en trois modèles incompatibles : ChatGPT Ads ($100M ARR en 6 semaines, CPM $60), Google AI Mode (25,5 % des résultats IA monétisés), et Perplexity qui abandonne la publicité pour un modèle 100 % abonnement. Côté réglementaire, le Digital Omnibus signé le 8 juillet clarifie le calendrier EU AI Act : Article 50 (transparence) au 2 août 2026 comme prévu, mais high-risk Annex III repoussé de 17 mois au 2 décembre 2027. GPT-5.6 (Sol/Terra/Luna) atteint la disponibilité générale avec 750 tokens/s sur Cerebras. Pour les équipes digitales, la priorité est triple : compléter les Google Business Profiles (nouveau levier de visibilité IA), préparer la conformité Article 50 avant le 2 août, et évaluer les trois plateformes publicitaires IA selon les objectifs de conversion.",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Zero-Click / GEO", "Schema / Web Agentique", "DXP / CMS Headless", "CDP / Data First-Party", "UX / Interfaces IA", "IA Générative / Gouvernance", "Innovation Marketing"],
    sources: ["Profound", "Search Engine Land", "Search Engine Roundtable", "Digital Applied", "Stan Ventures / Similarweb", "Sensor Tower / Reuters", "Seer Interactive", "Intempt", "TechCrunch", "OpenAI / ODSC", "Technology.org", "Beri.net / Gartner / IDC", "LiveRamp", "Osmos / eMarketer", "DXP Scorecard", "The WP Clan", "Laioutr", "Webyes"],
    critiques: ["Google AI Search : google.com devient #2 domaine cité dans AI Mode, auto-citations 8,4x en 11 semaines (Profound, 32M+ instances)", "Zero-Click / GEO : ChatGPT atteint 1 milliard de MAU (Sensor Tower, juin 2026) mais sa part de marché web chute de 79 % à 53,9 % en 12 mois (Similarweb)", "IA / Gouvernance : Digital Omnibus signé le 8 juillet — Article 50 (transparence) au 2 août 2026, high-risk repoussé au 2 décembre 2027"],
    importants: ["Innovation Marketing : ChatGPT Ads atteint $100M ARR en moins de 6 semaines, CPM $60, 800M+ WAU (Digital Applied)", "CDP / Data : LiveRamp étend son réseau à EA et Giphy, positionne RampID comme backbone de l'orchestration agentique (LiveRamp, 16 juillet)", "UX / Interfaces : le delegative UI remplace le conversational UI — Miro Canvas 26, Figma Make, Canva AI 2.0 passent au pattern 'assigner un objectif' (Intempt)"],
    actions: ["Compléter et optimiser les Google Business Profiles : c'est désormais le premier levier de visibilité dans AI Mode (8,4x de croissance des citations)", "Préparer la conformité Article 50 EU AI Act avant le 2 août 2026 : disclosure chatbot, marquage contenu IA, labelling deepfake", "Évaluer les trois plateformes publicitaires IA (ChatGPT Ads, Google AI Mode, Perplexity organique) selon les objectifs de conversion et de budget", "Auditer la présence de marque dans les réponses IA multi-plateformes : ChatGPT (53,9 % part web), Gemini (27,9 %), Claude (9,2 %)", "Tester le delegative UI sur un workflow interne : assigner un objectif à l'IA plutôt que poser des questions (pattern Figma Make / Canva AI 2.0)", "Mettre à jour le schema markup Product et LocalBusiness pour maximiser la citation dans les AI Overviews et AI Mode"],
    emergents: ["Google s'auto-cite 8,4x plus dans AI Mode — les Business Profiles deviennent la 'nouvelle homepage' pour la visibilité locale IA", "Le marché publicitaire IA se fragmente en 3 modèles incompatibles : ads conversationnelles (ChatGPT), ads intégrées (Google), et zéro-pub (Perplexity)", "ChatGPT atteint 1 milliard de MAU mais perd 25 points de part de marché web en 12 mois — la domination se dilue dans un marché multi-assistants", "Le delegative UI remplace le conversational UI : les outils passent de 'répondre à une question' à 'exécuter un objectif' (Miro, Figma, Canva)", "89 % des pilotes agents IA échouent en production (Gartner/IDC) — le passage à l'échelle reste le principal défi enterprise"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "GOOGLE S'AUTO-CITE 8,4X PLUS DANS AI MODE EN 11 SEMAINES",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "Profound (32M+ instances, 15 avril – 30 juin 2026) révèle que google.com est le #2 domaine le plus cité dans AI Mode, avec des auto-citations multipliées par 8,4 en 11 semaines. La croissance est portée par les Google Business Profiles et Product Knowledge Panels. Google déploie aussi les Top Stories dans les AI Overviews (mobile US) et la génération d'images IA dans les AI Overviews.",
      category: "GOOGLE",
      sources: [
        { nom: "Digital Applied / Profound", url: "https://www.digitalapplied.com/blog/google-cites-itself-ai-mode-gbp-product-schema-visibility-2026" },
        { nom: "Search Engine Land", url: "https://searchengineland.com/top-stories-roll-out-in-google-ai-overviews-482615" },
        { nom: "Search Engine Roundtable", url: "https://www.seroundtable.com/google-ai-overviews-ai-images-41680.html" }
      ],
      details: [
        "Profound (32M+ instances, 15 avril – 30 juin 2026) : google.com = #2 domaine le plus cité dans AI Mode",
        "Auto-citations Google multipliées par 8,4x en 11 semaines",
        "Moteur de croissance : Google Business Profiles + Product Knowledge Panels",
        "SE Ranking (février 2026) : 17,42 % des réponses AI Mode citent google.com (vs 5,7 % en juin 2025)",
        "Google #1 domaine cité dans 19 des 20 niches analysées (SE Ranking)",
        "Top Stories déployées dans les AI Overviews (mobile US, 17 juillet)",
        "Génération d'images IA dans les AI Overviews (modèle Nano Banana, 15 juillet)",
        "Nick Fox (SVP Google) : 'milliards de clics vers les sites chaque semaine via AI Search' (17 juillet)"
      ],
      longDescription: "L'étude Profound (32 millions d'instances analysées entre le 15 avril et le 30 juin 2026) révèle un phénomène structurant : Google s'auto-cite massivement dans AI Mode, avec une croissance de 8,4x en seulement 11 semaines. Google.com est désormais le deuxième domaine le plus cité dans ses propres réponses IA, porté presque exclusivement par les Google Business Profiles et les Product Knowledge Panels. SE Ranking confirme la tendance avec une progression de 5,7 % à 17,42 % des réponses AI Mode citant google.com entre juin 2025 et février 2026. Pour un Responsable Projets Digitaux dans l'enseignement supérieur, l'implication est directe : le Google Business Profile de l'établissement devient un levier de visibilité IA de premier plan. La complétude du profil (attributs, photos, avis, horaires) détermine désormais comment l'institution apparaît dans les réponses AI Mode — avant même que le site web soit consulté. En parallèle, Google enrichit les AI Overviews avec les Top Stories (actualités) et la génération d'images, transformant la SERP en surface d'information autonome."
    },
    {
      id: 2,
      code: "ZERO-CLICK",
      titre: "CHATGPT ATTEINT 1 MILLIARD DE MAU MAIS PERD 25 POINTS DE PART WEB",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "ChatGPT franchit 1 milliard de MAU en juin 2026 (Sensor Tower/Reuters) — l'app la plus rapide à atteindre ce seuil. Mais sa part de marché web chute de 79 % à 53,9 % en 12 mois (Similarweb). Gemini monte à 27,9 % (+450 % YoY), Claude à 9,2 % (+855 % YoY). Le trafic référent ChatGPT convertit à 16 % vs 1,8 % pour Google organic (Seer Interactive).",
      category: "SEO",
      sources: [
        { nom: "Stan Ventures / Similarweb / Sensor Tower", url: "https://www.stanventures.com/news/the-state-of-chat-gpt-july-2026-7429/" },
        { nom: "Digital Applied", url: "https://www.digitalapplied.com/blog/ai-search-advertising-chatgpt-google-perplexity-2026" }
      ],
      details: [
        "ChatGPT : 1 milliard de MAU (juin 2026, Sensor Tower/Reuters) — app la plus rapide à ce seuil",
        "900 millions de WAU (OpenAI, février 2026)",
        "Part de marché web : 53,9 % (mai 2026) vs 79 % (mai 2025) — perte de 25 points en 12 mois",
        "Gemini : 27,9 % de part web (+450 % YoY). Claude : 9,2 % (+855 % YoY)",
        "Trafic référent ChatGPT convertit à 16 % vs 1,8 % pour Google organic (Seer Interactive)",
        "2,5 milliards de prompts/jour (≈30 % du volume de recherche Google)",
        "ChatGPT Go ($4,50/mois) : a doublé la base utilisateurs en Inde en 1 mois",
        "AI search traffic +527 % YoY (Semrush 2026 AI SEO report)"
      ],
      longDescription: "Le paradoxe ChatGPT en juillet 2026 est saisissant : l'application franchit 1 milliard d'utilisateurs actifs mensuels (Sensor Tower/Reuters, juin 2026) — plus rapide que TikTok, Instagram ou Google Maps — tout en perdant 25 points de part de marché web en 12 mois (79 % à 53,9 %, Similarweb). La raison : le marché des assistants IA s'est fragmenté. Gemini croît de 450 % YoY (27,9 % de part), porté par l'intégration iOS 27/Siri. Claude progresse de 855 % (9,2 %). Le signal le plus actionnable pour les équipes digitales : le trafic référent ChatGPT convertit à 16 % contre 1,8 % pour Google organic (Seer Interactive), soit un ratio de 9x. Le volume reste faible (<1 % du trafic organique) mais l'intention est exceptionnelle. Avec 2,5 milliards de prompts quotidiens et le lancement de ChatGPT Go ($4,50/mois) qui a doublé la base indienne en un mois, OpenAI construit une plateforme de découverte à l'échelle mondiale. Pour un établissement d'enseignement supérieur, la stratégie de visibilité doit désormais couvrir au minimum trois plateformes IA simultanément."
    },
    {
      id: 3,
      code: "SCHEMA / AGENTS",
      titre: "LE SCHEMA MARKUP DEVIENT LE LANGAGE DES AGENTS IA",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Les données structurées Schema.org sont confirmées comme facteur de citation dans AI Mode (Google cite ses propres Knowledge Panels structurés). Google renomme le user-agent NotebookLM en 'Google-GeminiNotebook'. Le schema Product et LocalBusiness deviennent les premiers leviers de visibilité agentique. Volatilité ranking non confirmée autour du 11 juillet.",
      category: "ARCHI",
      sources: [
        { nom: "Laioutr", url: "https://www.laioutr.com/en/blog/schema-org-product-markup-ai-agent-visibility-2026" },
        { nom: "Webyes", url: "https://www.webyes.com/blogs/structured-data-ai-agents/" },
        { nom: "Search Engine Roundtable", url: "https://www.seroundtable.com/google-search-ranking-volatility-july-11th-41676.html" }
      ],
      details: [
        "Schema.org Product Markup confirmé comme facteur de visibilité pour les agents IA (Laioutr, 17 juillet)",
        "Les données structurées = le langage que les agents IA utilisent pour comprendre les pages (Webyes, 14 juillet)",
        "Google auto-cite ses Knowledge Panels structurés dans AI Mode (Profound) — preuve que le schema markup drive la citation",
        "Google renomme le user-agent NotebookLM en 'Google-GeminiNotebook' (Search Engine Roundtable, 17 juillet)",
        "Volatilité ranking non confirmée autour du 11 juillet ('7-Eleven update', non officiel)",
        "Les 5 types de contenu gagnants pour la citation IA (guide GEO Google) : original research, expert analysis, first-hand experience, unique data, proprietary perspective"
      ],
      longDescription: "L'étude Profound sur les auto-citations Google dans AI Mode apporte une preuve indirecte mais puissante : les surfaces structurées (Business Profiles, Product Knowledge Panels) sont celles que l'IA cite le plus. Le schema markup n'est plus un bonus SEO technique — c'est le langage natif des agents IA. Laioutr (17 juillet) et Webyes (14 juillet) confirment que les données structurées Schema.org sont le mécanisme par lequel les agents comprennent et citent les pages web. Le renommage du user-agent NotebookLM en 'Google-GeminiNotebook' illustre la convergence des produits Google autour de Gemini comme moteur agentique unifié. Pour un Responsable Projets Digitaux, l'action technique est claire : auditer et enrichir le schema markup LocalBusiness (pour le profil établissement), Organization (pour la marque), Course et EducationalOrganization (pour les programmes), et Product (pour les formations). Ces marquages structurés déterminent directement la qualité de la citation dans les réponses IA. La volatilité ranking observée autour du 11 juillet reste non confirmée par Google, mais rappelle l'importance d'un monitoring continu des positions."
    },
    {
      id: 4,
      code: "DXP / CMS",
      titre: "DXP SCORECARD 2026 : BENCHMARK COMPARATIF DES PLATEFORMES HEADLESS",
      badge: "À SURVEILLER",
      previousBadge: "À SURVEILLER",
      description: "Le DXP Scorecard publie ses évaluations mi-2026 : Optimizely SaaS 68/100, Bloomreach 63/100, Contentful reste le benchmark API-first. Le marché se structure entre CMS headless purs (Contentful, Sanity, Storyblok) et DXP hybrides (Optimizely, Bloomreach). La migration off AEM 6.5 s'accélère vers des architectures composables.",
      category: "ARCHI",
      sources: [
        { nom: "DXP Scorecard", url: "https://www.dxpscorecard.com/platform/contentful" },
        { nom: "The WP Clan", url: "https://thewpclan.com/headless-cms-comparison-2026/" },
        { nom: "HT Blue", url: "https://www.htblue.com/blog/migrating-off-aem-6-5-engineering-playbook" }
      ],
      details: [
        "DXP Scorecard (16 juillet 2026) : Optimizely SaaS = 68/100, Bloomreach = 63/100",
        "Contentful reste le benchmark API-first headless CMS (DXP Scorecard)",
        "Comparaison complète 2026 : Contentful, Storyblok, Strapi, Payload, Sanity (The WP Clan, 19 juillet)",
        "Migration off AEM 6.5 : guide engineering vers Sanity, WordPress headless ou AEM Cloud (HT Blue, 14 juillet)",
        "Le marché se structure entre CMS headless purs et DXP hybrides avec visual editing",
        "Brightspot positionné comme 'hybrid headless CMS' combinant API-first et visual editing"
      ],
      longDescription: "Le DXP Scorecard publie ses évaluations mi-2026, offrant un benchmark comparatif rare dans un marché fragmenté. Optimizely SaaS obtient 68/100, Bloomreach 63/100, tandis que Contentful reste la référence API-first. Le marché se structure désormais autour de deux pôles : les CMS headless purs (Contentful, Sanity, Storyblok, Strapi, Payload) qui privilégient la flexibilité développeur, et les DXP hybrides (Optimizely, Bloomreach, Brightspot) qui combinent API-first et visual editing pour les équipes marketing. The WP Clan (19 juillet) publie une comparaison exhaustive qui aide à naviguer ce paysage. En parallèle, la migration off AEM 6.5 s'accélère (HT Blue, 14 juillet) avec un guide engineering détaillé. Pour un établissement d'enseignement supérieur planifiant une refonte, le choix se joue entre la flexibilité d'un headless pur (idéal pour un écosystème multi-sites/multi-canaux) et le confort éditorial d'un DXP hybride (idéal pour des équipes marketing autonomes). Le critère différenciant en 2026 : la capacité native à alimenter les agents IA via des API structurées."
    },
    {
      id: 5,
      code: "CDP & DATA",
      titre: "LIVERAMP POSITIONNE RAMPID COMME BACKBONE DE L'ORCHESTRATION AGENTIQUE",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "LiveRamp étend son réseau avec Electronic Arts et Giphy (16 juillet), et positionne RampID comme l'infrastructure d'identité pour les agents IA marketing. 900+ partenaires globaux. En parallèle, le retail media US atteint $71,09 Md en 2026 (+17,8 % YoY, eMarketer) et 71 % des marques élargissent leurs datasets first-party.",
      category: "CDP",
      sources: [
        { nom: "LiveRamp", url: "https://liveramp.com/blog/liveramp-expands-across-travel-gaming-and-more-scaling-the-trusted-network-for-ai-powered-marketing" },
        { nom: "Osmos / eMarketer", url: "https://www.osmos.ai/blog/retail-media-evolution-the-complete-guide" }
      ],
      details: [
        "LiveRamp (16 juillet) : Electronic Arts et Giphy rejoignent le réseau de collaboration data",
        "RampID positionné comme backbone d'identité pour l'orchestration agentique IA marketing",
        "900+ partenaires globaux dans le réseau LiveRamp",
        "3 piliers de la stratégie agentique LiveRamp : Proven Identity (RampID), Secure Clean Rooms, AI-Ready Marketplace",
        "Retail media US : $71,09 Md en 2026 (+17,8 % YoY, eMarketer). Amazon : 79,7 % de part",
        "Commerce media projeté à $142,07 Md d'ici 2030 (23,9 % du digital US, eMarketer)",
        "71 % des marques élargissent leurs datasets first-party en réponse à la perte de signal tiers (Rockbot 2026)"
      ],
      longDescription: "LiveRamp franchit une étape stratégique en positionnant explicitement RampID comme l'infrastructure d'identité pour les agents IA marketing (blog du 16 juillet). L'arrivée d'Electronic Arts et Giphy dans le réseau illustre l'élargissement au-delà du retail vers le gaming et les médias sociaux. Les trois piliers de la stratégie agentique — Proven Identity (RampID), Secure Clean Rooms, AI-Ready Marketplace — dessinent l'architecture d'un marketing où les agents IA orchestrent les campagnes de manière autonome, mais sur une base d'identité gouvernée. Le contexte macro renforce l'urgence : le retail media US atteint $71,09 milliards en 2026 (+17,8 % YoY selon eMarketer), Amazon captant 79,7 % de cette dépense. Le commerce media au sens large est projeté à $142 milliards d'ici 2030. Pour un Responsable Projets Digitaux dans l'enseignement supérieur, le signal est double : la résolution d'identité first-party devient le prérequis de toute activation IA (y compris le CRM candidat), et le modèle 'clean room' offre un cadre pour collaborer avec des partenaires data sans exposer les données personnelles des prospects."
    },
    {
      id: 6,
      code: "UX / INTERFACES",
      titre: "LE DELEGATIVE UI REMPLACE LE CONVERSATIONAL UI",
      badge: "IMPORTANT",
      previousBadge: "À SURVEILLER",
      description: "Miro Canvas 26, Figma Make et Canva AI 2.0 passent du pattern 'poser une question' (conversational UI) au pattern 'assigner un objectif' (delegative UI). L'utilisateur définit le résultat attendu, l'IA exécute les étapes. En parallèle, Apple lance la beta publique iOS 27 avec Siri AI propulsé par Gemini (licence ~$1 Md/an).",
      category: "UX",
      sources: [
        { nom: "Intempt", url: "https://intempt.com/blog/conversational-ai-design" },
        { nom: "TechCrunch", url: "https://techcrunch.com/2026/07/14/apple-opens-its-new-siri-ai-to-everyone-with-the-ios-27-public-beta/" }
      ],
      details: [
        "Distinction clé 2026 : conversational UI (poser une question) vs delegative UI (assigner un objectif)",
        "Miro Canvas 26 (mai 2026) : agents IA et humains sur le même canvas partagé, connecté à Slack/GitHub/ChatGPT/Claude",
        "Figma Make : prompt → prototype fonctionnel (pas un mockup statique)",
        "Canva AI 2.0 : workspace agentique, gère des campagnes entières comme une tâche déléguée",
        "iOS 27 beta publique (14 juillet) : Siri AI propulsé par Gemini, 1,2 trillion de paramètres",
        "Apple licence Gemini à ~$1 Md/an pour alimenter Siri",
        "Siri AI : interface conversationnelle complète avec fenêtre on-screen et indexation du contenu device"
      ],
      longDescription: "La distinction la plus structurante en UX/UI pour 2026 n'est pas entre 'avec IA' et 'sans IA', mais entre conversational UI (poser une question, recevoir une réponse) et delegative UI (assigner un objectif, l'outil exécute). Miro Canvas 26, Figma Make et Canva AI 2.0 ont tous basculé vers le second pattern cette année. L'utilisateur ne configure plus l'output — il définit le résultat attendu et juge le livrable. Ce changement de paradigme transforme le rôle des équipes design et produit : la compétence clé n'est plus l'exécution technique mais la formulation d'objectifs et l'évaluation de résultats. En parallèle, Apple lance la beta publique iOS 27 avec un Siri AI entièrement reconstruit sur Gemini (licence estimée à $1 milliard/an). L'interface conversationnelle de Siri — fenêtre on-screen, voix expressive, indexation du contenu device — crée un nouveau canal de découverte pour les marques. Pour un Responsable Projets Digitaux, deux implications : les outils de production créative internes basculent vers le delegative UI (former les équipes à 'briefer l'IA' plutôt qu'à 'utiliser l'outil'), et Siri AI devient un canal de visibilité à monitorer pour les requêtes liées à l'enseignement supérieur."
    },
    {
      id: 7,
      code: "IA / GOUVERNANCE",
      titre: "DIGITAL OMNIBUS SIGNÉ : ARTICLE 50 AU 2 AOÛT, HIGH-RISK REPOUSSÉ À DÉCEMBRE 2027",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "Le Digital Omnibus sur l'IA, signé le 8 juillet 2026, clarifie le calendrier EU AI Act. Article 50 (transparence chatbot, marquage contenu IA, labelling deepfake) reste au 2 août 2026. High-risk Annex III repoussé au 2 décembre 2027 (+17 mois). Nouvelle interdiction Article 5 : images intimes non-consenties. GPT-5.6 Sol/Terra/Luna en disponibilité générale depuis le 9 juillet.",
      category: "IA",
      sources: [
        { nom: "Technology.org", url: "https://www.technology.org/2026/07/17/eu-ai-act-what-actually-applies-on-2-august-2026/" },
        { nom: "OpenAI / ODSC", url: "https://opendatascience.com/in-case-you-missed-it-last-week-in-ai-july-6-july-12-2026/" },
        { nom: "Beri.net / Gartner / IDC", url: "https://www.beri.net/article/ai-agent-adoption-enterprise-2026-gartner-idc" }
      ],
      details: [
        "Digital Omnibus signé le 8 juillet 2026, en attente de publication au Journal Officiel UE",
        "Article 50 (transparence) : enforceable au 2 août 2026 — disclosure chatbot, marquage contenu IA, labelling deepfake",
        "High-risk Annex III : repoussé au 2 décembre 2027 (+17 mois vs calendrier initial)",
        "Annex I (produits régulés) : repoussé au 2 août 2028",
        "Nouvelle interdiction Article 5 : images intimes non-consenties générées par IA (applicable 2 décembre 2026)",
        "AI Office : pouvoirs élargis sur les fournisseurs verticalement intégrés",
        "GPT-5.6 Sol/Terra/Luna : disponibilité générale le 9 juillet. Sol : $5/$30 par M tokens, 750 tokens/s (Cerebras)",
        "89 % des pilotes agents IA échouent en production (Gartner/IDC). 40 % des projets agents seront abandonnés d'ici 2027",
        "UK AI Security Institute : jailbreaks universels trouvés dans GPT-5.6 Sol (cyber safeguards)"
      ],
      longDescription: "Le Digital Omnibus sur l'IA, signé le 8 juillet 2026 et en attente de publication au Journal Officiel, clarifie enfin le calendrier EU AI Act. L'Article 50 (transparence) reste au 2 août 2026 : toute organisation déployant un chatbot, générant du contenu IA ou produisant des deepfakes doit se conformer dans 13 jours. Les obligations high-risk (Annex III) sont repoussées de 17 mois au 2 décembre 2027 — un sursis significatif pour les systèmes de recrutement, scoring crédit et éducation. Une nouvelle interdiction (Article 5) cible les images intimes non-consenties générées par IA. Côté modèles, GPT-5.6 atteint la disponibilité générale avec trois variantes (Sol à $5/$30, Terra à $2,50/$15, Luna à $1/$6) et 750 tokens/s sur Cerebras. Mais le UK AI Security Institute a trouvé des jailbreaks universels dans les safeguards cyber de Sol. Côté enterprise, Gartner/IDC confirment que 89 % des pilotes agents IA échouent en production et 40 % des projets seront abandonnés d'ici 2027. Pour un Responsable Projets Digitaux, l'action immédiate est la conformité Article 50 : auditer tous les chatbots et contenus IA de l'établissement, implémenter les disclosures, et documenter les processus de marquage."
    },
    {
      id: 8,
      code: "INNOVATION MKT",
      titre: "TROIS MODÈLES PUBLICITAIRES IA INCOMPATIBLES ÉMERGENT",
      badge: "À SURVEILLER",
      previousBadge: "À SURVEILLER",
      description: "Le marché publicitaire IA se fragmente en trois modèles : ChatGPT Ads ($100M ARR en 6 semaines, CPM $60, minimum $200K), Google AI Mode (25,5 % des résultats monétisés, Direct Offers shopping), et Perplexity qui abandonne la publicité pour un modèle 100 % abonnement ($500M cible). Apple Siri AI (iOS 27 beta) crée un nouveau canal de découverte.",
      category: "INNOV",
      sources: [
        { nom: "Digital Applied", url: "https://www.digitalapplied.com/blog/ai-search-advertising-chatgpt-google-perplexity-2026" },
        { nom: "Search Engine Land", url: "https://searchengineland.com/google-says-ai-search-features-sending-billions-of-clicks-to-websites-each-week-482599" }
      ],
      details: [
        "ChatGPT Ads : $100M ARR en moins de 6 semaines. CPM ~$60, minimum $200K. Ciblage contextuel (pas comportemental)",
        "Google AI Mode : ads dans 25,5 % des résultats IA. Direct Offers (shopping ads) lancées en février 2026",
        "Perplexity : abandon total de la publicité (février 2026). Cible $500M de revenus abonnement. 780M+ requêtes/mois",
        "63 % des utilisateurs disent que les ads dans l'IA search réduisent leur confiance (Ipsos)",
        "US AI search ad spend projeté : $1 Md (2025) → $25,9 Md (2029) = 13,6 % de tout le search (eMarketer)",
        "Apple Siri AI (iOS 27 beta publique, 14 juillet) : nouveau canal de découverte pour les marques",
        "Gemini-powered Siri : licence Apple → Google estimée à ~$1 Md/an"
      ],
      longDescription: "Le marché publicitaire IA se fragmente en 2026 en trois modèles fondamentalement incompatibles, chacun reflétant une vision différente de la relation utilisateur-plateforme. ChatGPT Ads a atteint $100M d'ARR en moins de 6 semaines avec un modèle CPM à $60 et un minimum de $200K — ciblage contextuel basé sur la conversation, pas de tracking comportemental. Google intègre méthodiquement les ads dans AI Mode (25,5 % des résultats monétisés) avec des Direct Offers shopping, s'appuyant sur son infrastructure Google Ads existante. Perplexity prend le contre-pied total en abandonnant la publicité (février 2026) pour un modèle 100 % abonnement ciblant $500M de revenus. Le signal de confiance est parlant : 63 % des utilisateurs déclarent que les ads dans l'IA search réduisent leur confiance dans les résultats (Ipsos). Pour un Responsable Projets Digitaux dans l'enseignement supérieur, cette fragmentation impose un choix stratégique : investir dans la visibilité organique multi-plateforme (être cité par les IA) plutôt que de disperser le budget publicitaire sur des plateformes aux modèles incompatibles. Apple Siri AI (beta publique iOS 27) ajoute un canal de découverte supplémentaire à monitorer."
    }
  ],

  actions: [
    { id: 1, titre: "Compléter les Google Business Profiles : premier levier de visibilité AI Mode (8,4x de croissance des auto-citations Google)", domaine: "GOOGLE AI / SEARCH", responsable: "ÉQUIPE SEO + MARKETING" },
    { id: 2, titre: "Conformité Article 50 EU AI Act avant le 2 août : disclosure chatbot, marquage contenu IA, labelling deepfake sur toutes les interfaces IA", domaine: "JURIDIQUE / TECHNIQUE", responsable: "DIRECTION DIGITALE + JURIDIQUE" },
    { id: 3, titre: "Évaluer les 3 plateformes publicitaires IA (ChatGPT Ads CPM $60, Google AI Mode, Perplexity organique) selon objectifs de conversion", domaine: "ACQUISITION / STRATÉGIE", responsable: "ACQUISITION + MARKETING" },
    { id: 4, titre: "Auditer la présence de marque multi-plateformes IA : citation share ChatGPT (53,9 %), Gemini (27,9 %), Claude (9,2 %)", domaine: "ANALYTICS / STRATÉGIE", responsable: "DATA + MARKETING" },
    { id: 5, titre: "Enrichir le schema markup LocalBusiness, Organization, Course, EducationalOrganization pour la visibilité agentique", domaine: "SEO / TECHNIQUE", responsable: "ÉQUIPE SEO + DEV" },
    { id: 6, titre: "Former les équipes au delegative UI : tester le pattern 'assigner un objectif' avec Figma Make ou Canva AI 2.0", domaine: "UX / INNOVATION", responsable: "ÉQUIPE UX + MARKETING" },
  ],

  signauxEmergents: [
    { titre: "Google s'auto-cite massivement dans AI Mode", description: "Les Business Profiles deviennent la 'nouvelle homepage' pour la visibilité locale IA. Google cite ses propres surfaces structurées 8,4x plus en 11 semaines — les sites tiers sont progressivement désintermédiés dans les réponses IA.", horizon: "COURT TERME (Q3 2026)" },
    { titre: "Fragmentation du marché publicitaire IA en 3 modèles", description: "Ads conversationnelles (ChatGPT, CPM $60), ads intégrées (Google AI Mode, 25,5 % des résultats), et zéro-pub (Perplexity). Les annonceurs doivent choisir entre trois écosystèmes aux logiques incompatibles.", horizon: "COURT TERME (S2 2026)" },
    { titre: "ChatGPT perd la domination malgré 1 Md de MAU", description: "La part de marché web chute de 79 % à 53,9 % en 12 mois. Le marché multi-assistants se consolide : Gemini (27,9 %), Claude (9,2 %), Grok (2,4 %). La visibilité IA doit être multi-plateforme.", horizon: "MOYEN TERME (2026-2027)" },
    { titre: "Le delegative UI remplace le conversational UI", description: "Les outils passent de 'répondre à une question' à 'exécuter un objectif complet'. Miro, Figma et Canva ont tous basculé en 2026. Le rôle des équipes se déplace de l'exécution vers la formulation d'objectifs et l'évaluation.", horizon: "MOYEN TERME (2026-2027)" },
    { titre: "89 % des pilotes agents IA échouent en production", description: "Gartner/IDC confirment que le passage à l'échelle reste le principal défi enterprise. 40 % des projets agents seront abandonnés d'ici 2027 (coûts, ROI flou, gouvernance). Le routing multi-modèles (Anthropic : 96 % perf à 46 % du coût) émerge comme solution.", horizon: "COURT TERME (2026-2027)" },
  ],

  tendancesPassees: [
    { titre: "AI Overviews à 70,48 % des recherches personnalisées US", description: "S29 : Advanced Web Ranking confirme le franchissement du seuil des 70 %. S30 : Google accélère l'auto-citation dans AI Mode (8,4x). La tendance est à l'autonomisation complète de la SERP." },
    { titre: "EU AI Act : du compte à rebours au calendrier clarifié", description: "S29 : deadline 2 août à 20 jours, 78 % non conformes. S30 : Digital Omnibus signé le 8 juillet clarifie — Article 50 maintenu, high-risk repoussé de 17 mois. Le sursis ne concerne pas la transparence." },
    { titre: "ChatGPT : de 92,4 % du trafic IA à 1 Md de MAU", description: "S29 : ChatGPT capte 92,4 % du trafic IA référent standalone (Previsible). S30 : franchit 1 Md de MAU mais perd 25 points de part web. La domination se dilue dans un marché multi-assistants." },
    { titre: "Palantir/Zeta Global → LiveRamp/EA : l'infrastructure marketing agentique se construit", description: "S29 : Palantir + Zeta Global signent un partenariat 7 ans sur Foundry. S30 : LiveRamp positionne RampID comme backbone agentique, EA et Giphy rejoignent. L'orchestration IA marketing passe par l'identité." },
    { titre: "GPT-5.6 : du preview gouvernemental à la disponibilité générale", description: "S29 : GPT-5.6 en preview limité. S30 : disponibilité générale le 9 juillet (Sol/Terra/Luna). ChatGPT Work transforme OpenAI de fournisseur de modèles en plateforme workflow enterprise." },
  ]
};
