export const veilleS32 = {
  week: 32,
  year: 2026,
  publicationDate: "3 août 2026",
  domainsCount: 8,
  sourcesCount: 18,
  criticalCount: 3,
  importantCount: 3,
  actionsCount: 6,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "L'EU AI Act entre en application le 2 août 2026 — la Commission européenne lance l'enforcement des obligations de transparence Article 50. Chatbots doivent déclarer leur nature IA, deepfakes labellés, contenu synthétique marqué machine-readable. 180+ organisations signataires du Code of Practice. Amendes jusqu'à 15 M€ ou 3 % du CA mondial. Application extraterritoriale : toute entreprise dont les outputs atteignent des utilisateurs EU est concernée.",
  },

  statDominante: {
    chiffre: "2 AOÛT",
    titre: "ENFORCEMENT EU AI ACT ARTICLE 50 — TRANSPARENCE IA OBLIGATOIRE",
    description: "Le 2 août 2026, la Commission européenne commence l'enforcement de l'AI Act. Les obligations Article 50 deviennent exécutoires : chatbots = disclosure obligatoire, deepfakes = labelling visible, contenu IA = marquage machine-readable détectable. 180+ organisations ont signé le Code of Practice. Les amendes atteignent 15 M€ ou 3 % du CA mondial. L'application est extraterritoriale : les entreprises US dont les outputs atteignent des utilisateurs EU sont concernées. Les systèmes déjà sur le marché avant le 2 août ont jusqu'au 2 décembre 2026 pour le marquage Article 50(2).",
  },

  syntheseExecutive: "La semaine 32 est dominée par l'entrée en vigueur de l'EU AI Act Article 50 le 2 août 2026, premier enforcement réel de la réglementation IA européenne avec application extraterritoriale. En parallèle, Google déploie un opt-out Search Console permettant aux éditeurs de retirer leur contenu des AI Overviews sans quitter Search, mais au prix probable de la perte du placement Top Stories intégré aux AI Overviews (15,5 % US, 17,5 % UK des trending news selon NewzDash). Côté modèles, Claude Opus 5 (24 juillet) atteint 70 % sur CursorBench à moitié du prix de Fable 5, tandis que le gap gouvernance s'élargit : 88 % des organisations utilisent l'IA mais seulement 8 % ont un framework mature (McKinsey). Le marché CDP connaît une rupture architecturale avec Databricks CustomerLake, premier Agentic CDP natif lakehouse qui menace structurellement les CDP standalone par un modèle consumption-based sans platform fee. Adobe Advertising intègre Eyeota pour la résolution d'identité CTV cookie-independent, alors que Chrome atteint 80 % de deprecation cookies (full removal attendu Q3 2026). Pour les équipes digitales, la priorité est triple : vérifier la conformité Article 50 immédiatement, arbitrer l'opt-out AI Overviews en connaissance du trade-off Top Stories, et structurer le contenu pour les citations IA (schema markup = 2,8x plus de citations selon AirOps).",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Zero-Click / GEO", "Schema / Web Agentique", "DXP / CMS Headless", "CDP / Data First-Party", "UX / Interfaces IA", "IA Générative / Gouvernance", "Innovation Marketing"],
    sources: ["TechCrunch", "Search Engine Journal", "Press Gazette / NewzDash", "Google Search Central", "Similarweb / Semrush", "AirOps", "SchemaApp", "Luminary", "CDP.com / Databricks", "PPC Land / Eyeota", "Improvado", "Intempt", "Commission européenne", "Faegre Drinker", "Caylent / Anthropic", "Superblocks / McKinsey / Gartner", "Adobe GenStudio", "NielsenIQ"],
    critiques: ["IA / Gouvernance : EU AI Act Article 50 entre en vigueur le 2 août 2026 — enforcement réel, amendes 15 M€/3 % CA, application extraterritoriale (Commission européenne, 31 juillet)", "Google AI Search : opt-out Search Console déployé — retrait des AI Overviews possible mais perte probable du placement Top Stories intégré (SEJ, 1er août)", "CDP / Data : Databricks lance CustomerLake, premier Agentic CDP natif lakehouse — menace existentielle pour les CDP standalone par pricing consumption-based (CDP.com, 1er août)"],
    importants: ["Zero-Click / GEO : 47 % des SERP avec AI Overview (Semrush), Top Stories intégrées dans 15,5 % US / 17,5 % UK des AI Overviews news (NewzDash, 30 juillet)", "Schema / Web Agentique : pages avec schema + structure propre = 2,8x plus de citations IA, FAQ schema sur seulement 10,5 % des pages citées (AirOps 2026)", "DXP / CMS : Optimizely Agent Platform atteint 10 000 actions agents/jour, x10 en un an — les agentic content workflows deviennent table stakes (Luminary, 30 juillet)"],
    actions: ["Vérifier immédiatement la conformité Article 50 EU AI Act : disclosure chatbot, marquage machine-readable, labelling deepfakes — enforcement actif depuis le 2 août, amendes 15 M€/3 % CA mondial", "Arbitrer l'opt-out AI Overviews via Search Console en connaissance du trade-off : retrait = perte probable du placement Top Stories intégré (15,5 % US / 17,5 % UK des trending news)", "Enrichir le schema markup (Organization, FAQ, HowTo, Course) : 2,8x plus de citations IA pour les pages structurées, FAQ schema sur seulement 10,5 % des pages citées — opportunité de différenciation", "Évaluer Databricks CustomerLake vs CDP actuel : architecture Agentic CDP natif lakehouse, pricing consumption-based sans platform fee, identity resolution intégrée", "Préparer la stratégie identity resolution post-cookies : Chrome à 80 % de deprecation, full removal Q3 2026 — Adobe/Eyeota CTV IDs, LiveRamp, solutions deterministic", "Auditer la gouvernance agents IA : 88 % utilisent l'IA mais 8 % ont un framework mature, 35 % ne pourraient pas arrêter un agent rogue — nommer un responsable gouvernance IA"],
    emergents: ["L'opt-out AI Overviews crée un dilemme stratégique pour les éditeurs : visibilité IA vs contrôle du contenu, avec un trade-off Top Stories non documenté par Google", "Databricks CustomerLake redéfinit l'économie des CDP : pas de platform fee, compute-only pricing — les CDP standalone font face à une asymétrie structurelle de pricing", "Le Delegative UI remplace le Conversational UI : Miro, Figma, Canva construisent autour de l'assignation d'objectifs, pas du chat — l'utilisateur délègue au lieu de demander", "La gouvernance IA devient une fonction nommée : 76 % des organisations ont un CAIO (vs 26 % un an avant), dépenses gouvernance IA à 492 M$ en 2026 (Gartner)", "Chrome cookie deprecation à 80 % : le full removal Q3 2026 accélère la course à l'identity resolution deterministic — Adobe, LiveRamp, Databricks convergent"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "OPT-OUT SEARCH CONSOLE DÉPLOYÉ — LE TRADE-OFF TOP STORIES CHANGE LA DONNE",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "Google déploie un contrôle Search Console permettant aux éditeurs de retirer leur contenu des AI Overviews, AI Mode et Discover AI sans quitter Search. Mais Press Gazette/NewzDash révèle que les Top Stories apparaissent désormais DANS les AI Overviews (15,5 % US, 17,5 % UK), et que l'opt-out entraîne probablement la perte de ce placement premium. 47 % des SERP affichent un AI Overview (Semrush Sensor).",
      category: "GOOGLE",
      sources: [
        { nom: "Search Engine Journal", url: "https://www.searchenginejournal.com/what-opting-out-of-googles-ai-search-features-means-now/584321/" },
        { nom: "Press Gazette / NewzDash", url: "https://pressgazette.co.uk/platforms/google-adds-top-stories-links-to-many-news-related-ai-summaries/" },
        { nom: "Google Search Central", url: "https://developers.google.com/search/blog/2026/07/platform-properties-social-video-guide" }
      ],
      details: [
        "Google déploie un opt-out Search Console : retrait des AI Overviews, AI Mode et Discover AI sans quitter Search (SEJ, 1er août)",
        "CMA UK impose ce contrôle aux éditeurs britanniques — page-level controls pas avant mars 2027",
        "Top Stories apparaissent DANS les AI Overviews : 15,5 % US, 17,5 % UK des trending news (NewzDash, 17M+ analysées)",
        "Entertainment = catégorie la plus touchée : 35,1 % US / 31,5 % UK des Top Stories dans AI Overviews",
        "47 % des SERP affichent un AI Overview tous types de requêtes confondus (Semrush Sensor)",
        "Platform Properties Search Console : suivi Instagram, TikTok, X, YouTube dans Search (Google, 29 juillet)"
      ],
      longDescription: "Google déploie un nouveau contrôle Search Console permettant aux éditeurs de retirer leur contenu des AI Overviews, AI Mode et des fonctionnalités IA de Discover, sans quitter les résultats de recherche traditionnels. Ce contrôle est imposé par la CMA britannique, avec des contrôles au niveau page attendus pour mars 2027. Mais Press Gazette et NewzDash révèlent un trade-off majeur : les Top Stories apparaissent désormais directement DANS les AI Overviews (15,5 % aux US, 17,5 % au UK sur 17 millions de Top Stories analysées en 30 jours). L'opt-out entraîne probablement la perte de ce placement premium, car les Top Stories n'apparaissent qu'à un seul endroit (dans l'AI Overview OU en standalone, jamais les deux). L'entertainment est la catégorie la plus touchée (35,1 % US / 31,5 % UK). Selon Semrush Sensor, 47 % de toutes les pages de résultats Google affichent désormais un AI Overview. En parallèle, Google lance les Platform Properties dans Search Console, permettant de suivre la visibilité des posts Instagram, TikTok, X et YouTube directement dans Search. Pour les éditeurs, le dilemme est clair : opter out protège le contenu mais sacrifie une visibilité croissante dans les réponses IA."
    },
    {
      id: 2,
      code: "ZERO-CLICK",
      titre: "47 % DES SERP AVEC AI OVERVIEW — LE REFERRAL IA RESTE MARGINAL MAIS PROGRESSE",
      badge: "IMPORTANT",
      previousBadge: "CRITIQUE",
      description: "Semrush Sensor confirme que 47 % des pages de résultats Google affichent un AI Overview (tous types de requêtes). Similarweb mesure que seulement 6,8 % des requêtes ChatGPT desktop US incluent des citations, mais le taux de landing sur des pages web passe de 25 % (mars) à ~60 % (mai) après l'update du 7 mai. Google se transforme de gateway en destination.",
      category: "GEO",
      sources: [
        { nom: "TechCrunch / Similarweb", url: "https://techcrunch.com/2026/07/27/googles-ai-search-is-rapidly-becoming-the-default-new-data-shows/" },
        { nom: "Semrush Sensor", url: "https://www.semrush.com/sensor/" },
        { nom: "Press Gazette / NewzDash", url: "https://pressgazette.co.uk/platforms/google-adds-top-stories-links-to-many-news-related-ai-summaries/" }
      ],
      details: [
        "47 % des SERP avec AI Overview tous types de requêtes (Semrush Sensor, cité par Press Gazette 30 juillet)",
        "AI Overviews : de 15 % à 43 % des recherches en un an (Similarweb via TechCrunch, 27 juillet)",
        "AI Mode visits : 126M (juin 2025) → 279M (mai 2026) — croissance continue",
        "ChatGPT desktop : seulement 6,8 % des requêtes US incluent des citations (Similarweb, mai 2026)",
        "Mais referrals améliorés : landing sur pages web passe de 25 % (mars) à ~60 % (mai) après update 7 mai",
        "Google se transforme de gateway (renvoyer du trafic) en destination (répondre directement)"
      ],
      longDescription: "Les données de la semaine confirment l'accélération de la recherche IA générative. Semrush Sensor mesure que 47 % de toutes les pages de résultats Google affichent désormais un AI Overview, tous types de requêtes confondus. Similarweb via TechCrunch confirme la progression de 15 % à 43 % des recherches en un an. AI Mode atteint 279 millions de visites en mai 2026 (vs 126M en juin 2025). Côté trafic référent IA, les chiffres restent contrastés : seulement 6,8 % des requêtes ChatGPT desktop US incluent des citations avec lien. Mais l'update du 7 mai a significativement amélioré la qualité des referrals : la proportion de visites atterrissant sur des pages web passe de 25 % en mars à environ 60 % fin mai. Le pattern structurant est la transformation de Google de gateway (renvoyer du trafic vers les éditeurs) en destination (répondre directement dans l'interface). Pour les équipes SEO, la stratégie GEO doit intégrer cette réalité : optimiser pour être cité dans les réponses IA, pas seulement pour apparaître dans les résultats traditionnels."
    },
    {
      id: 3,
      code: "SCHEMA",
      titre: "2,8X PLUS DE CITATIONS IA POUR LES PAGES STRUCTURÉES — FAQ SCHEMA = OPPORTUNITÉ SOUS-EXPLOITÉE",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "AirOps (State of AI Search 2026) mesure que les pages avec schema markup + structure propre génèrent 2,8x plus de citations IA. Le FAQ/Q&A schema n'est présent que sur 10,5 % des pages citées par l'IA malgré son alignement direct avec le format de réponse. Les pages avec 3+ types de schema ont ~13 % plus de chances d'être citées. SchemaApp formalise le concept de 'web agentique'.",
      category: "SCHEMA",
      sources: [
        { nom: "AirOps", url: "https://www.airops.com/blog/schema-markup-aeo" },
        { nom: "SchemaApp", url: "https://www.schemaapp.com/" },
        { nom: "Parseur", url: "https://parseur.com/blog/structured-data-for-ai-agents" }
      ],
      details: [
        "Pages avec schema + structure propre = 2,8x plus de citations IA (AirOps 2026 State of AI Search)",
        "FAQ/Q&A schema sur seulement 10,5 % des pages citées par l'IA — opportunité sous-exploitée",
        "Pages avec 3+ types de schema = ~13 % plus de chances d'être citées dans les réponses IA",
        "JSON-LD = format recommandé pour le scaling, validation essentielle avant déploiement",
        "SchemaApp : 'En 2026, on n'optimise plus pour un moteur qui lit, mais pour un web agentique qui agit'",
        "Parseur : données structurées pour agents IA = champs nommés avec types prévisibles, pas des documents à interpréter"
      ],
      longDescription: "Le rapport AirOps 2026 State of AI Search quantifie l'impact du schema markup sur la visibilité IA : les pages combinant données structurées et structure HTML propre génèrent 2,8 fois plus de citations dans les réponses IA que les pages mal structurées. Le FAQ/Q&A schema représente une opportunité sous-exploitée majeure : il n'est présent que sur 10,5 % des pages citées par l'IA, alors qu'il s'aligne directement avec le format question-réponse des moteurs génératifs. Les pages déployant 3 types de schema ou plus ont environ 13 % de chances supplémentaires d'être citées. SchemaApp formalise le concept de 'web agentique' : en 2026, on n'optimise plus pour un moteur qui lit mais pour un écosystème d'agents qui agissent. Parseur complète cette vision en définissant les données structurées pour agents IA comme des champs nommés avec des types prévisibles, par opposition aux documents que l'agent doit interpréter. Pour les équipes techniques, la priorité est l'enrichissement schema.org en JSON-LD (Organization, FAQ, HowTo, Course, Product) avec validation systématique avant déploiement."
    },
    {
      id: 4,
      code: "DXP",
      titre: "OPTIMIZELY AGENT PLATFORM : 10 000 ACTIONS/JOUR — LES WORKFLOWS AGENTIQUES DEVIENNENT TABLE STAKES",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Luminary (30 juillet) révèle qu'Optimizely Agent Platform (ex-Opal) atteint 10 000 actions d'agents par jour, soit une croissance x10 en un an. Le système no-code orchestre des agents IA marketing (contenu, personnalisation, testing) dans l'écosystème Optimizely. Les agentic content workflows deviennent table stakes dans le CMS composable tier-3 (DXP Scorecard).",
      category: "DXP",
      sources: [
        { nom: "Luminary", url: "https://www.luminary.com/blog/optimizely-agent-platform-2026" },
        { nom: "DXP Scorecard", url: "https://www.dxpscorecard.com" },
        { nom: "Surekha Technologies", url: "https://www.facebook.com/Surekha.Technologies/posts/1623752573092500/" }
      ],
      details: [
        "Optimizely Agent Platform : ~10 000 actions agents/jour, x10 en un an (Luminary, 30 juillet)",
        "Système no-code pour orchestrer des agents IA marketing dans l'écosystème Optimizely",
        "Luminary = première agence APAC certifiée Opal, la plus accréditée de la région",
        "Agentic content workflows = table stakes dans le CMS composable tier-3 (DXP Scorecard)",
        "Optimizely rebrandé 'the Agent Platform' — Opal reste dans le produit et les docs",
        "Marketer-first headless CMS avec gouvernance enterprise et localisation pour audiences globales"
      ],
      longDescription: "Luminary, première agence APAC certifiée Opal et la plus accréditée de la région, publie le 30 juillet un retour d'expérience détaillé sur Optimizely Agent Platform (ex-Opal). La plateforme atteint 10 000 actions d'agents par jour, soit une croissance x10 en un an. Le système no-code permet d'orchestrer des agents IA marketing couvrant la création de contenu, la personnalisation, le testing A/B et l'optimisation dans l'écosystème Optimizely. Optimizely s'est rebrandé 'the Agent Platform' (le nom Opal persiste dans le produit et la documentation). DXP Scorecard confirme que les agentic content workflows sont désormais table stakes dans le CMS composable tier-3. Pour les équipes digitales évaluant leur stack CMS, le critère de sélection 2026 n'est plus 'est-il headless ?' mais 'supporte-t-il des workflows agentiques natifs ?'. La convergence CMS + agents IA redéfinit les attentes en matière de productivité éditoriale et de personnalisation à grande échelle."
    },
    {
      id: 5,
      code: "CDP",
      titre: "DATABRICKS CUSTOMERLAKE : L'AGENTIC CDP NATIF LAKEHOUSE MENACE LES CDP STANDALONE",
      badge: "CRITIQUE",
      previousBadge: "À SURVEILLER",
      description: "Databricks lance CustomerLake (Private Preview, 1er août), premier Agentic CDP natif lakehouse. Profile Agents (unification) + Campaign Agents (activation) + Infinity campaigns (boucles continues). Pricing consumption-based sans platform fee = menace existentielle pour les CDP standalone. Adobe Advertising intègre Eyeota pour la résolution d'identité CTV cookie-independent (30 juillet).",
      category: "CDP",
      sources: [
        { nom: "CDP.com / Databricks", url: "https://cdp.com/articles/what-is-databricks-customerlake-cdp/" },
        { nom: "PPC Land / Adobe / Eyeota", url: "https://ppc.land/adobe-advertising-ties-eyeota-ctv-ids-to-identities-without-cookies/" },
        { nom: "Improvado", url: "https://improvado.io/blog/multi-touch-attribution" }
      ],
      details: [
        "Databricks CustomerLake : premier Agentic CDP natif lakehouse (Private Preview, 1er août)",
        "Profile Agents (unification data) + Campaign Agents (activation) + Infinity campaigns (boucles continues)",
        "Identity resolution : deterministic + probabilistic + agentic matching + marketplace (Acxiom, Epsilon, LiveRamp, TransUnion, Adstra)",
        "Pricing consumption-based, pas de platform fee séparé — menace existentielle pour CDP standalone",
        "Adobe Advertising + Eyeota : CTV IDs cookie-independent, résolution d'identité cross-channel (30 juillet)",
        "Chrome cookie deprecation 80 % complète, full removal attendu Q3 2026 (Improvado)"
      ],
      longDescription: "Le marché CDP connaît une rupture architecturale avec le lancement de Databricks CustomerLake en Private Preview le 1er août. C'est le premier Agentic CDP natif lakehouse, combinant Profile Agents (transformation bronze-to-gold, identity resolution agentic) et Campaign Agents (activation par langage naturel via Genie, simulation pré-lancement). Le concept d'Infinity campaigns introduit des boucles continues où les agents analysent, décident et agissent en temps réel. L'identity resolution combine matching deterministic, probabilistic et agentic, avec un marketplace intégrant Acxiom, Epsilon, LiveRamp, TransUnion et Adstra. Le modèle économique est structurellement disruptif : pricing consumption-based sans platform fee séparé. Comme le note Martech Therapy : 'On ne peut pas gagner une guerre des prix contre une entreprise qui n'a pas besoin de votre produit pour gagner de l'argent.' En parallèle, Adobe Advertising intègre Eyeota pour la résolution d'identité CTV cookie-independent (30 juillet), alors que seulement 23 % des IP résidentielles CTV atteignent leur cible géographique (Adstra/InterMedia). Chrome atteint 80 % de deprecation cookies avec le full removal attendu Q3 2026."
    },
    {
      id: 6,
      code: "UX / IA",
      titre: "DELEGATIVE UI : DE L'ASSISTANT QUI RÉPOND À L'AGENT QUI AGIT",
      badge: "À SURVEILLER",
      previousBadge: "À SURVEILLER",
      description: "Le concept de Delegative UI se formalise : passage du conversationnel (demander → répondre → décider) au délégatif (assigner un objectif → l'IA agit). Miro, Figma et Canva ont tous construit leurs updates 2026 autour de ce paradigme, pas du chat. L'utilisateur délègue une tâche complète au lieu de poser des questions séquentielles.",
      category: "UX",
      sources: [
        { nom: "Intempt", url: "https://intempt.com/blog/conversational-ai-design" },
        { nom: "Aaron Usiskin / LinkedIn", url: "https://www.linkedin.com/pulse/delegative-ui-aaron-usiskin-ld5xc" },
        { nom: "Intempt / GTM Skills", url: "https://intempt.com/blog/gtm-skills-experimentation-lead" }
      ],
      details: [
        "Delegative UI : passage du conversationnel (demander → répondre → décider) au délégatif (assigner un objectif → l'IA agit)",
        "Aaron Usiskin formalise le concept en janvier 2026 — adoption accélérée en S2",
        "Miro, Figma, Canva : updates 2026 construites autour du delegative UI, pas du chat",
        "L'utilisateur délègue une tâche complète au lieu de poser des questions séquentielles",
        "Implications UX : moins d'écrans de conversation, plus de dashboards de suivi d'objectifs",
        "Le pattern transforme les interfaces IA de 'répondeur intelligent' en 'exécutant autonome'"
      ],
      longDescription: "Le concept de Delegative UI, formalisé par Aaron Usiskin en janvier 2026, connaît une adoption accélérée au second semestre. Le paradigme marque le passage du Conversational UI (l'utilisateur pose une question, l'IA répond, l'utilisateur décide quoi faire) au Delegative UI (l'utilisateur assigne un objectif, l'IA agit de manière autonome dans des guardrails définis). Miro, Figma et Canva ont tous construit leurs updates 2026 autour de ce paradigme : l'utilisateur ne chat plus avec l'IA, il lui délègue une tâche complète. Les implications UX sont profondes : moins d'écrans de conversation, plus de dashboards de suivi d'objectifs et de résultats. Les interfaces IA se transforment de 'répondeur intelligent' en 'exécutant autonome'. Pour les équipes produit et UX, ce shift impose de repenser les patterns d'interaction : la valeur n'est plus dans la qualité de la réponse mais dans la qualité de l'exécution déléguée."
    },
    {
      id: 7,
      code: "IA / GOV",
      titre: "EU AI ACT ARTICLE 50 EN VIGUEUR — 180+ SIGNATAIRES, AMENDES 15 M€, EXTRATERRITORIALITÉ",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "La Commission européenne lance l'enforcement de l'AI Act le 2 août 2026. Article 50 : chatbots = disclosure, deepfakes = labelling, contenu IA = marquage machine-readable. 180+ signataires du Code of Practice. Amendes : 15 M€ ou 3 % CA mondial. Application extraterritoriale. Claude Opus 5 (24 juillet) : 70 % CursorBench à moitié du prix de Fable 5. Gap gouvernance : 88 % utilisent l'IA, 8 % gouvernent maturément.",
      category: "IA",
      sources: [
        { nom: "Commission européenne", url: "https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august" },
        { nom: "Faegre Drinker", url: "https://www.faegredrinker.com/en/insights/publications/2026/7/eu-ai-act-commission-confirms-transparency-code-of-practice-as-adequate-and-publishes-final-version-of-its-guidelines-on-transparency-obligations" },
        { nom: "Caylent / Anthropic", url: "https://caylent.com/blog/claude-opus-5-changes-improvements-and-how-it-compares-to-fable-5" }
      ],
      details: [
        "EU AI Act Article 50 : enforcement le 2 août 2026 — Commission européenne + autorités nationales (communiqué 31 juillet)",
        "4 obligations : disclosure chatbot, marquage machine-readable contenu synthétique, notification reconnaissance émotionnelle, labelling deepfakes",
        "180+ signataires du Code of Practice on Transparency of AI-Generated Content",
        "Amendes : 15 M€ ou 3 % CA mondial — application extraterritoriale (US companies touchées si outputs atteignent EU)",
        "Systèmes déjà sur le marché avant 2/08 : deadline 2 décembre 2026 pour Article 50(2) marking",
        "Claude Opus 5 (24 juillet) : $5/$25 per M tokens, 1M context, 128K output, 70 % CursorBench (vs 70,5 % Fable 5 à 2x le prix)"
      ],
      longDescription: "Le 2 août 2026, la Commission européenne lance l'enforcement de l'AI Act avec les autorités nationales. Les obligations Article 50 deviennent exécutoires : les chatbots et systèmes IA interactifs doivent déclarer leur nature artificielle, les deepfakes doivent être labellés visiblement, et le contenu généré ou altéré par IA doit porter un marquage machine-readable détectable. Plus de 180 organisations ont signé le Code of Practice on Transparency of AI-Generated Content, que la Commission et l'AI Board ont confirmé comme adéquat pour démontrer la conformité. Les amendes atteignent 15 millions d'euros ou 3 % du chiffre d'affaires mondial. L'application est extraterritoriale : les entreprises US dont les outputs atteignent des utilisateurs EU sont concernées. Les systèmes déjà sur le marché avant le 2 août ont jusqu'au 2 décembre 2026 pour implémenter le marquage Article 50(2). Côté modèles, Claude Opus 5 (lancé le 24 juillet) atteint 70 % sur CursorBench au max effort, contre 70,5 % pour Fable 5 à deux fois le prix. Le gap gouvernance reste béant : 88 % des organisations utilisent l'IA mais seulement 8 % ont un framework de gouvernance mature (McKinsey). 76 % ont désormais un CAIO (vs 26 % un an avant, IBM). Les dépenses en plateformes de gouvernance IA atteignent 492 M$ en 2026 (Gartner)."
    },
    {
      id: 8,
      code: "INNOVATION",
      titre: "ADOBE GENSTUDIO FOR CTV — LE WORKFLOW CRÉATIF PUBLICITAIRE DEVIENT GENAI-FIRST",
      badge: "À SURVEILLER",
      previousBadge: "IMPORTANT",
      description: "Adobe lance GenStudio for CTV : workflow GenAI-first permettant aux performance marketers de créer des ads CTV de qualité broadcast en self-service, du brief à la livraison. Le retail media poursuit sa croissance mais le gap mesure/confiance persiste. Morrisons déploie des smart trolleys IA. Chrome cookies à 80 % de deprecation accélère la convergence identity/CTV/retail media.",
      category: "INNOVATION",
      sources: [
        { nom: "Adobe GenStudio", url: "https://experienceleague.adobe.com/en/docs/genstudio-for-performance-marketing/user-guide/release-notes" },
        { nom: "NielsenIQ", url: "https://nielseniq.com/global/en/insights/analysis/2026/retail-media-incrementality-measurement/" },
        { nom: "Retail Media Update / LinkedIn", url: "https://www.linkedin.com/pulse/retail-media-update-july-2026-weareactivation-rcd6c" }
      ],
      details: [
        "Adobe GenStudio for CTV : workflow GenAI-first, du brief à la livraison d'ads CTV broadcast-quality en self-service",
        "Performance marketers peuvent créer des ads CTV sans équipe production vidéo dédiée",
        "Retail Media Update juillet : Morrisons smart trolleys IA, Tesco innovations retail media",
        "Chrome cookie deprecation 80 % → full removal Q3 2026 accélère convergence identity/CTV/retail media",
        "Adobe Advertising + Eyeota : résolution d'identité CTV cross-channel sans cookies",
        "Le workflow créatif publicitaire se compresse : de semaines de production à heures avec GenAI"
      ],
      longDescription: "Adobe lance GenStudio for CTV, un workflow GenAI-first permettant aux performance marketers de créer des publicités CTV de qualité broadcast en self-service, du brief créatif à la livraison finale. Ce lancement compresse le workflow créatif publicitaire de semaines de production à quelques heures, sans équipe production vidéo dédiée. En parallèle, le Retail Media Update de juillet 2026 révèle que Morrisons déploie des smart trolleys IA et que Tesco poursuit ses innovations retail media. La deprecation des cookies Chrome à 80 % (full removal attendu Q3 2026) accélère la convergence entre identity resolution, CTV et retail media. Adobe Advertising intègre Eyeota pour la résolution d'identité CTV cross-channel sans cookies, créant un pont entre l'impression TV connectée et le comportement digital/mobile. Pour les équipes marketing, la combinaison GenAI (création) + identity resolution (ciblage) + CTV (distribution) dessine un nouveau stack publicitaire où la production créative n'est plus le goulot d'étranglement."
    }
  ],

  actions: [
    { id: 1, titre: "Vérifier immédiatement la conformité Article 50 EU AI Act : disclosure chatbot, marquage machine-readable, labelling deepfakes — enforcement actif depuis le 2 août, amendes 15 M€/3 % CA mondial", domaine: "JURIDIQUE / TECHNIQUE", responsable: "DIRECTION DIGITALE + JURIDIQUE" },
    { id: 2, titre: "Arbitrer l'opt-out AI Overviews via Search Console en connaissance du trade-off : retrait = perte probable du placement Top Stories intégré (15,5 % US / 17,5 % UK des trending news)", domaine: "SEO / STRATÉGIE", responsable: "ÉQUIPE SEO + DIRECTION ÉDITORIALE" },
    { id: 3, titre: "Enrichir le schema markup (Organization, FAQ, HowTo, Course) : 2,8x plus de citations IA pour les pages structurées, FAQ schema sur seulement 10,5 % des pages citées — opportunité de différenciation", domaine: "SEO / TECHNIQUE", responsable: "ÉQUIPE SEO + DEV" },
    { id: 4, titre: "Évaluer Databricks CustomerLake vs CDP actuel : architecture Agentic CDP natif lakehouse, pricing consumption-based sans platform fee, identity resolution intégrée", domaine: "DATA / MARTECH", responsable: "DATA + MARKETING" },
    { id: 5, titre: "Préparer la stratégie identity resolution post-cookies : Chrome à 80 % de deprecation, full removal Q3 2026 — évaluer Adobe/Eyeota CTV IDs, LiveRamp, solutions deterministic", domaine: "DATA / ACQUISITION", responsable: "DATA + ACQUISITION" },
    { id: 6, titre: "Auditer la gouvernance agents IA : 88 % utilisent l'IA mais 8 % ont un framework mature, 35 % ne pourraient pas arrêter un agent rogue — nommer un responsable gouvernance IA", domaine: "GOUVERNANCE / ORGANISATION", responsable: "DIRECTION DIGITALE + DSI" },
  ],

  signauxEmergents: [
    { titre: "L'opt-out AI Overviews crée un dilemme stratégique pour les éditeurs", description: "Google offre le contrôle mais au prix de la visibilité : l'opt-out entraîne la perte probable du placement Top Stories intégré aux AI Overviews. Les éditeurs doivent arbitrer entre contrôle du contenu et visibilité dans un écosystème où 47 % des SERP affichent un AI Overview.", horizon: "COURT TERME (Q3 2026)" },
    { titre: "Databricks CustomerLake redéfinit l'économie des CDP", description: "Pas de platform fee, pricing compute-only, identity resolution native, agents intégrés. Les CDP standalone font face à une asymétrie structurelle de pricing : Databricks peut subsidier la couche CDP pour augmenter l'adoption lakehouse. La question n'est plus 'quel CDP ?' mais 'faut-il encore un CDP séparé ?'", horizon: "MOYEN TERME (2026-2027)" },
    { titre: "Le Delegative UI remplace le Conversational UI comme paradigme dominant", description: "Miro, Figma, Canva construisent autour de l'assignation d'objectifs, pas du chat. L'utilisateur délègue au lieu de demander. Les interfaces IA se transforment d'assistants en exécutants autonomes. Les équipes produit doivent repenser les patterns d'interaction.", horizon: "MOYEN TERME (2026-2027)" },
    { titre: "La gouvernance IA devient une fonction organisationnelle nommée", description: "76 % des organisations ont un CAIO (vs 26 % un an avant). Dépenses gouvernance IA : 492 M$ en 2026. Le gap adoption/gouvernance (88 % vs 8 %) crée un risque systémique. 35 % ne pourraient pas arrêter un agent rogue. La régulation (EU AI Act) accélère la professionnalisation.", horizon: "COURT TERME (S2 2026)" },
    { titre: "Chrome cookie deprecation à 80 % accélère la convergence identity/CTV/retail media", description: "Le full removal Q3 2026 force l'adoption de solutions deterministic (Adobe/Eyeota, LiveRamp, Databricks). La CTV devient le canal pivot de l'identity resolution post-cookies. Le retail media et le CTV convergent autour de la résolution d'identité cross-channel.", horizon: "COURT TERME (Q3-Q4 2026)" },
  ],

  tendancesPassees: [
    { titre: "De l'expansion européenne des AI Overviews au dilemme opt-out", description: "S31 : AI Overviews lancés en France le 22 juillet. S32 : Google déploie l'opt-out Search Console mais les Top Stories apparaissent DANS les AI Overviews (15,5 % US / 17,5 % UK). L'opt-out protège le contenu mais sacrifie une visibilité croissante. Le dilemme stratégique se cristallise." },
    { titre: "EU AI Act : de la deadline annoncée à l'enforcement réel", description: "S30 : Digital Omnibus signé. S31 : Guidelines publiées, deadline confirmée. S32 : enforcement actif le 2 août, 180+ signataires Code of Practice, amendes exécutoires. Le passage de la théorie réglementaire à la pratique d'enforcement est acté." },
    { titre: "CDP : de l'accélération identity à la rupture architecturale", description: "S31 : Acxiom réduit le build identité de 24 mois à quelques semaines. S32 : Databricks lance CustomerLake, premier Agentic CDP natif lakehouse avec pricing consumption-based. La question passe de 'quel CDP ?' à 'faut-il encore un CDP séparé ?'." },
    { titre: "Du Delegative UI au commerce conversationnel : le pattern s'industrialise", description: "S31 : Michaels déploie Ask Mike en 6 semaines, Shoppable intègre le checkout dans ChatGPT. S32 : le concept Delegative UI se formalise — Miro, Figma, Canva construisent autour de l'assignation d'objectifs. Le paradigme passe du pilote à la norme." },
    { titre: "Agents IA : du ROI mesuré à la gouvernance comme urgence", description: "S31 : 41 % des déploiements agents atteignent le ROI en 12 mois. S32 : 88 % utilisent l'IA mais 8 % gouvernent maturément, 35 % ne pourraient pas arrêter un agent rogue. Le CAIO passe de 26 % à 76 % en un an. La gouvernance devient la priorité." },
  ]
};
