export const veilleS31 = {
  week: 31,
  year: 2026,
  publicationDate: "27 juillet 2026",
  domainsCount: 8,
  sourcesCount: 19,
  criticalCount: 3,
  importantCount: 3,
  actionsCount: 6,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "Google lance les AI Overviews en France le 22 juillet 2026 — première grande expansion européenne de la recherche IA. En parallèle, Gemini bondit de 13,3 % à 27,7 % de part de marché chatbot en un seul mois (First Page Sage, juillet 2026), porté par l'intégration Android/Gmail et le deal Apple/Siri iOS 27. ChatGPT passe sous les 53 % pour la première fois.",
  },

  statDominante: {
    chiffre: "27,7 %",
    titre: "PART DE MARCHÉ GEMINI EN JUILLET 2026 — BOND DE +108 % EN UN MOIS",
    description: "Selon First Page Sage (juillet 2026), Google Gemini passe de 13,3 % à 27,7 % de part de marché des chatbots IA aux États-Unis en un seul mois, soit un bond de +108 %. Cette progression historique est portée par l'intégration native dans Android, Gmail et le deal Apple/Siri iOS 27. Dans le même temps, ChatGPT chute de 58,6 % à 52,7 % (-14,4 points depuis janvier 2026). Claude atteint 10,3 % (+14 % trimestriel) tandis que Perplexity poursuit son déclin à 2,0 %.",
  },

  syntheseExecutive: "La semaine 31 marque un tournant dans la géographie et l'équilibre concurrentiel de la recherche IA. Google lance les AI Overviews en France le 22 juillet, première grande expansion européenne incluant AI Mode, Search Live et la recherche multimodale. Gemini double sa part de marché chatbot en un mois (13,3 % → 27,7 %, First Page Sage) grâce à l'intégration native Android/Gmail et au deal Apple/Siri, tandis que ChatGPT passe sous les 53 % pour la première fois. Côté réglementaire, la Commission européenne publie les Guidelines officielles Article 50 le 20 juillet — la deadline du 2 août 2026 est confirmée sans report, les agents IA étant explicitement couverts. L'écosystème publicitaire IA se structure : Criteo intègre les ads dans les assistants shopping IA, Shoppable lance le premier checkout universel dans ChatGPT (500M produits, 900M WAU), et Broadsign exécute la première campagne OOH entièrement agentique. Pour les équipes digitales, la priorité est triple : préparer la conformité Article 50 avant le 2 août, auditer la visibilité de marque dans les réponses IA multi-plateformes (Gemini désormais incontournable), et structurer le contenu pour le web agentique (schema.org + llms.txt).",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Zero-Click / GEO", "Schema / Web Agentique", "DXP / CMS Headless", "CDP / Data First-Party", "UX / Interfaces IA", "IA Générative / Gouvernance", "Innovation Marketing"],
    sources: ["Le Monde", "First Page Sage", "Digiday / DataDome", "Search Engine Land", "Originality.ai / Ahrefs", "Vardot", "Luminary", "Acxiom / Salesforce", "Versium", "Logarithmic", "Anthropic", "PromptAI Learning", "Digital Applied / McKinsey / Gartner", "Commission européenne", "Trustible", "NielsenIQ", "Criteo", "Agile Brand Guide / Broadsign", "HBR / Harvard Art Museums"],
    critiques: ["Google AI Search : AI Overviews lancés en France le 22 juillet — AI Mode, Search Live, recherche multimodale, première expansion européenne majeure (Le Monde)", "Zero-Click / GEO : Gemini bondit de 13,3 % à 27,7 % de part de marché en un mois, ChatGPT passe sous 53 % pour la première fois (First Page Sage, juillet 2026)", "IA / Gouvernance : Guidelines officielles Article 50 publiées le 20 juillet — deadline 2 août confirmée, agents IA explicitement couverts (Commission européenne)"],
    importants: ["Schema / Web Agentique : LLMs.txt croît de 8,8x en 12 mois (36 120 instances) mais 97 % sans aucune requête — Google confirme que ce n'est pas nécessaire pour le GEO (Originality.ai / Ahrefs)", "DXP / CMS : Salesforce acquiert Contentful pour Agentforce, le concept d'agentic CMS émerge avec MCP comme proxy d'évaluation (Vardot / Luminary)", "Innovation Marketing : première campagne OOH entièrement agentique — agent sell-side Broadsign + agent buy-side Draft Digital via protocole AdCP (Agile Brand Guide)"],
    actions: ["Préparer la conformité Article 50 EU AI Act avant le 2 août : disclosure chatbot, marquage machine-readable du contenu IA, labelling deepfakes — les agents IA sont explicitement couverts", "Auditer la visibilité de marque dans Gemini (27,7 % de part) en plus de ChatGPT — le marché multi-assistants impose une stratégie GEO multi-plateforme", "Optimiser les Google Business Profiles et le schema markup pour les AI Overviews France — les pages structurées génèrent 73 % des citations IA", "Évaluer l'intégration des ads dans les assistants shopping IA (Criteo Commerce Max, Shoppable/ChatGPT) pour la stratégie d'acquisition", "Implémenter schema.org (Organization, Course, EducationalOrganization, FAQ) et évaluer llms.txt pour le web agentique", "Tester le Webflow AEO Maturity Index sur les propriétés web : médiane = 16 % d'apparition dans les réponses IA, 6 % avec citation"],
    emergents: ["Gemini double sa part en un mois — l'intégration OS-native (Android, Gmail, Siri) redéfinit la distribution des chatbots IA plus que la qualité du modèle", "Le web agentique se structure : trafic agents +45 % en Q2 (DataDome), Meta RAG crawler +163 %, mais les publishers passent de l'optimisation trafic à la monétisation des citations", "L'agentic CMS émerge comme catégorie : Salesforce/Contentful, Optimizely 'AI platform for marketing', MCP comme standard d'interopérabilité agent-CMS", "Le retail media atteint $107,6 Md aux US en 2026 (NielsenIQ) mais 47 % des CMO ne font pas confiance à la mesure — l'incrémentalité reste le pain point majeur", "La première campagne publicitaire entièrement agentique (Broadsign/Draft Digital) compresse le workflow media planning en protocoles agent-to-agent"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "AI OVERVIEWS LANCÉS EN FRANCE — PREMIÈRE EXPANSION EUROPÉENNE MAJEURE",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "Google lance les AI Overviews en France le 22 juillet 2026, incluant AI Mode (interface conversationnelle), Search Live (recherche par vidéo live) et l'ajout de photos/fichiers dans la barre de recherche. Les fonctionnalités sont non désactivables mais un onglet 'Web Mode' permet de revenir à la recherche classique. Gemini 3.6 Flash sort le 21 juillet comme nouveau modèle par défaut ($1,50/$7,50 per M tokens, knowledge cutoff avancé de 14 mois).",
      category: "GOOGLE",
      sources: [
        { nom: "Le Monde", url: "https://www.lemonde.fr/en/pixels/article/2026/07/22/google-s-ai-overview-now-available-in-france-raises-anticipation-and-concern_6755715_13.html" },
        { nom: "PromptAI Learning", url: "https://promptailearning.com/ai-news/weekly/ai-news-week-july-19-25-2026" },
        { nom: "AIOSEO", url: "https://aioseo.com/googles-ai-search-overhaul/" }
      ],
      details: [
        "AI Overviews lancés en France le 22 juillet 2026 — première expansion européenne majeure de Google AI Search",
        "AI Mode accessible via un onglet séparé : interface conversationnelle type ChatGPT intégrée à Google Search",
        "Search Live : recherche par vidéo live depuis le smartphone + ajout de photos/fichiers dans la barre de recherche",
        "Fonctionnalités non désactivables — un onglet 'Web Mode' permet de revenir à la recherche classique",
        "Gemini 3.6 Flash (21 juillet) : nouveau modèle par défaut, knowledge cutoff avancé de 14 mois (jan 2025 → mars 2026)",
        "Pricing Gemini 3.6 Flash : $1,50/$7,50 per M tokens (vs $9 output pour 3.5 Flash), -17 % de tokens nécessaires"
      ],
      longDescription: "Le lancement des AI Overviews en France le 22 juillet 2026 constitue la première grande expansion européenne de Google AI Search. L'ensemble comprend AI Mode (interface conversationnelle accessible via un onglet dédié), Search Live (recherche par vidéo live depuis le smartphone) et la possibilité d'ajouter des photos ou fichiers dans la barre de recherche. Les fonctionnalités sont non désactivables mais un onglet 'Web Mode' permet de revenir à la recherche classique traditionnelle. En parallèle, Google DeepMind sort Gemini 3.6 Flash le 21 juillet comme nouveau modèle workhorse par défaut, avec un knowledge cutoff avancé de 14 mois (janvier 2025 → mars 2026) et un pricing agressif à $1,50/$7,50 per million tokens. Gemini 3.5 Flash-Lite cible le travail agentic à $0,30/M input tokens. Pour les éditeurs français, c'est un changement de paradigme immédiat : les AI Overviews apparaîtront au-dessus des résultats traditionnels pour les requêtes complexes, avec des liens vers les pages web sources. La stratégie GEO devient une priorité opérationnelle pour le marché francophone."
    },
    {
      id: 2,
      code: "ZERO-CLICK",
      titre: "GEMINI BONDIT DE 13,3 % À 27,7 % — CHATGPT PASSE SOUS 53 %",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "First Page Sage (juillet 2026) révèle un basculement historique : Gemini passe de 13,3 % à 27,7 % de part de marché chatbot en un seul mois (+108 %), porté par l'intégration Android/Gmail et le deal Apple/Siri iOS 27. ChatGPT chute à 52,7 % (-14,4 points depuis janvier). Claude atteint 10,3 %. Le trafic agents IA croît de +45 % en Q2 2026 (DataDome, 17,7 Md de requêtes).",
      category: "GEO",
      sources: [
        { nom: "First Page Sage", url: "https://firstpagesage.com/reports/top-generative-ai-chatbots/" },
        { nom: "Digiday / DataDome", url: "https://digiday.com/media/in-graphic-detail-ai-visibility-is-no-longer-about-referral-traffic/" },
        { nom: "Swaay Health", url: "https://swaay.health/2026/07/23/back-to-the-future-why-ai-search-is-making-pr-essential-again/" }
      ],
      details: [
        "Gemini : 13,3 % → 27,7 % de part de marché chatbot en un mois (+108 %) — bond historique (First Page Sage, juillet 2026)",
        "ChatGPT : 58,6 % → 52,7 % en un mois, -14,4 points depuis janvier 2026 (67,1 % → 52,7 %)",
        "Claude : 10,3 % (+14 % trimestriel), Grok : 2,8 %, Perplexity : 2,0 % (en baisse continue depuis 5,3 % en janvier)",
        "Trafic agents IA : +45 % en Q2 2026 (17,7 Md de requêtes avril-juin, DataDome)",
        "Meta = principal générateur de trafic agent : RAG crawler +163 % Q1→Q2",
        "ChatGPT = 80 % du trafic référent IA, mais ChatGPT-User visite les sites -6 % en Q2 vs Q1"
      ],
      longDescription: "Le rapport First Page Sage de juillet 2026 révèle un basculement historique dans le marché des chatbots IA. Google Gemini bondit de 13,3 % à 27,7 % de part de marché en un seul mois (+108 %), une progression sans précédent portée par l'intégration native dans Android, Gmail et le deal Apple/Siri pour iOS 27. ChatGPT passe sous les 53 % pour la première fois (52,7 %), perdant 14,4 points depuis janvier 2026. Claude atteint 10,3 % (+14 % trimestriel) grâce aux lancements successifs d'Opus 4.8, Fable 5 et Mythos 5. Perplexity poursuit son déclin à 2,0 % (vs 5,3 % en janvier) — les assistants généralistes absorbent la fonction 'answer engine'. En parallèle, Digiday/DataDome révèle que le trafic agents IA a crû de +45 % en Q2 2026 (17,7 milliards de requêtes). Meta est devenu le principal générateur de trafic agent (RAG crawler +163 %). Les publishers passent d'une logique de trafic référent à une logique de monétisation des citations IA. Le Webflow AEO Maturity Index montre que la médiane des entreprises n'apparaît que dans 16 % des réponses IA pertinentes, et seulement 6 % avec un lien de citation."
    },
    {
      id: 3,
      code: "SCHEMA",
      titre: "LLMS.TXT CROÎT DE 8,8X MAIS 97 % SANS REQUÊTE — LE WEB AGENTIQUE CHERCHE SES STANDARDS",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Originality.ai mesure 36 120 instances LLMs.txt (8,8x en 12 mois) mais Ahrefs révèle que 97 % n'ont reçu aucune requête en mai 2026. Google confirme que LLMs.txt n'est pas nécessaire pour le GEO. Search Engine Land rappelle que le schema markup reste le levier principal : 73 % des citations IA proviennent de pages structurées. Le vrai standard émergent est MCP (Model Context Protocol).",
      category: "SCHEMA",
      sources: [
        { nom: "Search Engine Land", url: "https://searchengineland.com/schema-ai-search-identify-prioritize-entity-gaps-482728" },
        { nom: "Digiday / Originality.ai / Ahrefs", url: "https://digiday.com/media/in-graphic-detail-ai-visibility-is-no-longer-about-referral-traffic/" },
        { nom: "Frase.io", url: "https://www.frase.io/blog/how-to-make-your-website-agent-ready" }
      ],
      details: [
        "LLMs.txt : 36 120 instances en mai 2026 (vs 4 088 en juin 2025) = croissance 8,8x en 12 mois (Originality.ai)",
        "Mais 97 % des fichiers LLMs.txt n'ont reçu aucune requête en mai 2026 (Ahrefs server-log research)",
        "Google confirme que LLMs.txt n'est PAS nécessaire pour l'optimisation IA (Search Engine Journal)",
        "73 % des citations IA proviennent de pages avec données structurées schema.org",
        "Search Engine Land : schema markup = knowledge graph pour les LLM, identifier les entity gaps",
        "MCP (Model Context Protocol) émerge comme standard d'interopérabilité agent-CMS"
      ],
      longDescription: "Le web agentique cherche ses standards mais la réalité du terrain est contrastée. Originality.ai mesure 36 120 instances LLMs.txt en mai 2026, soit une croissance de 8,8x en 12 mois, mais Ahrefs révèle via son analyse de server logs que 97 % de ces fichiers n'ont reçu aucune requête. Google confirme explicitement que LLMs.txt n'est pas nécessaire pour le GEO. Le véritable levier reste le schema markup traditionnel : 73 % des citations IA proviennent de pages avec données structurées. Search Engine Land détaille comment construire un knowledge graph via schema.org pour identifier les entity gaps que les LLM ne peuvent pas combler. Le standard émergent à surveiller est MCP (Model Context Protocol), qui permet aux agents IA externes de requêter et opérer sur un CMS de manière structurée et permissionnée. Pour les équipes SEO, la priorité reste l'enrichissement schema.org (Organization, Article, FAQ, Product, Course) plutôt que l'adoption de LLMs.txt."
    },
    {
      id: 4,
      code: "DXP",
      titre: "L'AGENTIC CMS ÉMERGE — SALESFORCE ACQUIERT CONTENTFUL, MCP COMME PROXY D'ÉVALUATION",
      badge: "IMPORTANT",
      previousBadge: "À SURVEILLER",
      description: "Salesforce signe l'acquisition de Contentful (juin 2026) pour alimenter sa couche contenu Agentforce. Luminary publie un field guide 'agentic CMS' : le critère de sélection n'est plus 'est-il headless ?' mais 'peut-on posséder la couche agent ?'. Gartner confirme que 70 % des organisations sont mandatées pour du composable DXP en 2026. Adobe AEM 6.5 Managed Services termine le 31 août 2026.",
      category: "DXP",
      sources: [
        { nom: "Vardot", url: "https://www.vardot.com/en/ideas/blog/enterprise-cms-landscape-2026" },
        { nom: "Luminary", url: "https://www.luminary.com/blog/what-is-an-agentic-cms" },
        { nom: "Acquia", url: "https://www.acquia.com/blog/decoupled-vs-headless-cms" }
      ],
      details: [
        "Salesforce acquiert Contentful (juin 2026) pour la couche contenu Agentforce",
        "Luminary (21 juillet) : 'agentic CMS' = peut agir sur un objectif, pas seulement assister une tâche",
        "Critère de sélection 2026 : 'peut-on posséder la couche agent ?' — MCP support comme proxy",
        "Gartner : 70 % des organisations mandatées pour du composable DXP en 2026",
        "Adobe AEM 6.5 Managed Services : fin de support le 31 août 2026",
        "Drupal AI Initiative : 31 partenaires, ~$1,5M de financement, 50+ contributeurs actifs"
      ],
      longDescription: "Le marché des CMS enterprise connaît une recomposition majeure en 2026, structurée autour de trois forces convergentes : la mainstreaming du composable, la course à l'AI-native, et la consolidation des acteurs. Salesforce signe l'acquisition de Contentful pour alimenter sa couche contenu Agentforce, tandis qu'Optimizely se rebrand 'the AI platform for marketing'. Luminary publie un field guide définissant l'agentic CMS comme un système capable d'agir sur un objectif (pas seulement assister une tâche) dans des guardrails définis. Le nouveau critère de sélection n'est plus 'est-il headless ?' mais 'peut-on posséder la couche agent ?' — avec le support MCP comme proxy d'évaluation. Gartner confirme que 70 % des organisations sont mandatées pour acquérir du composable DXP en 2026. Adobe AEM 6.5 Managed Services termine le 31 août 2026, forçant des milliers d'entreprises à un choix d'architecture. La Drupal AI Initiative (31 partenaires, ~$1,5M, 50+ contributeurs) se réorganise en deux workstreams : 'Inside AI' (assistants éditoriaux) et 'Outside AI' (agents externes via MCP)."
    },
    {
      id: 5,
      code: "CDP",
      titre: "ACXIOM RÉDUIT LE BUILD IDENTITÉ DE 24 MOIS À QUELQUES SEMAINES — LE CONSENT AGENTIQUE EN QUESTION",
      badge: "À SURVEILLER",
      previousBadge: "IMPORTANT",
      description: "Acxiom (24 juillet) annonce réduire le temps de construction d'un graphe d'identité de 24 mois à quelques semaines grâce à Salesforce. Logarithmic alerte : les ads conversationnelles IA exigent une architecture de consentement que personne n'a encore construite. Les CDPs promettent l'unification d'identité à vitesse machine mais créent des risques privacy inédits dans un contexte agentique.",
      category: "CDP",
      sources: [
        { nom: "Acxiom / PPC Land", url: "https://ppc.land/acxiom-cuts-identity-build-time-from-24-months-to-weeks-with-salesforce/" },
        { nom: "Versium", url: "https://versium.com/blog/how-to-fix-dtc-audience-building-in-2026/" },
        { nom: "Logarithmic", url: "https://www.logarithmic.com/perspectives/conversational-ai-ads-demand-a-consent-architecture-nobody-has-built-yet" }
      ],
      details: [
        "Acxiom (24 juillet) : temps de build identité réduit de 24 mois à quelques semaines avec Salesforce",
        "Logarithmic (24 juillet) : les ads conversationnelles IA exigent une consent architecture inexistante",
        "Versium (22 juillet) : identity resolution + enrichment = solution pour les marques DTC en 2026",
        "Les CDPs promettent l'unification d'identité à vitesse machine mais créent des risques privacy",
        "L'autonomous identity resolution dans un contexte agentique pose des questions RGPD inédites",
        "Databricks lance un 'agentic CDP' intégrant nativement la résolution d'identité"
      ],
      longDescription: "Le domaine CDP/data first-party connaît une accélération technique majeure mais soulève des questions de gouvernance inédites. Acxiom annonce le 24 juillet avoir réduit le temps de construction d'un graphe d'identité de 24 mois à quelques semaines grâce à son intégration Salesforce. Versium détaille comment l'identity resolution combinée à l'enrichissement résout le problème d'audience building des marques DTC en 2026. Mais Logarithmic lance une alerte structurante : les publicités conversationnelles IA (type ChatGPT Ads, Shoppable) exigent une architecture de consentement que personne n'a encore construite. L'autonomous identity resolution dans un contexte agentique — où des agents IA prennent des décisions d'achat pour l'utilisateur — pose des questions RGPD et ePrivacy sans précédent. Databricks entre dans la course avec un 'agentic CDP' intégrant nativement la résolution d'identité. Pour les équipes data, l'enjeu est de concilier la vitesse d'exécution (quelques semaines vs 24 mois) avec la conformité privacy dans un monde où les agents IA deviennent des interlocuteurs commerciaux autonomes."
    },
    {
      id: 6,
      code: "UX / IA",
      titre: "MICHAELS 'ASK MIKE' : DE CONCEPT À PRODUCTION EN 6 SEMAINES — LE SHOPPING CONVERSATIONNEL S'INDUSTRIALISE",
      badge: "À SURVEILLER",
      previousBadge: "IMPORTANT",
      description: "Michaels lance Ask Mike (21 juillet), assistant shopping IA sur Gemini Enterprise : 75 000 conversations depuis mai, 60 % centrées sur la découverte produit, déployé en 6 semaines. Shoppable intègre son Universal Checkout dans ChatGPT (500M produits, 900M WAU). Criteo lance les ads dans les assistants shopping IA. Le pattern 'commerce conversationnel' passe du pilote à la production à grande échelle.",
      category: "UX",
      sources: [
        { nom: "PromptAI Learning / Google Cloud", url: "https://promptailearning.com/ai-news/weekly/ai-news-week-july-19-25-2026" },
        { nom: "Agile Brand Guide / Shoppable", url: "https://agilebrandguide.com/yesterdays-marketing-technology-ai-news-july-22-2026-2/" },
        { nom: "Criteo Commerce Max", url: "https://help.retailmedia.criteo.com/kb/guide/en/whats-new-on-commerce-max-2026-xJBAchLLZZ/Steps/5684477" }
      ],
      details: [
        "Michaels 'Ask Mike' (21 juillet) : assistant shopping IA sur Gemini Enterprise, 75 000 conversations depuis mai",
        "60 % des interactions centrées sur la découverte produit — concept → production en 6 semaines",
        "Shoppable : Universal Checkout Plugin dans ChatGPT — 500M produits, 900M WAU, multi-retailer",
        "Premier MCP server de commerce universel (Shoppable)",
        "Criteo Commerce Max : nouveau type d'ad placement dans les assistants shopping IA",
        "Albertsons Media Collective intègre les sponsored products dans la recherche conversationnelle IA"
      ],
      longDescription: "Le commerce conversationnel passe du pilote à la production industrielle cette semaine. Michaels, plus grand retailer arts & crafts d'Amérique du Nord, lance Ask Mike le 21 juillet — un assistant shopping IA construit sur Gemini Enterprise qui a généré 75 000 conversations depuis mai, avec 60 % des interactions centrées sur la découverte produit. Le plus remarquable : le passage de concept à production en seulement 6 semaines. Shoppable franchit une étape structurante en intégrant son Universal Checkout Plugin dans ChatGPT, donnant accès à 500 millions de produits multi-retailer pour les 900 millions d'utilisateurs hebdomadaires. C'est aussi le premier MCP server de commerce universel. Côté monétisation, Criteo lance un nouveau type d'ad placement dans Commerce Max spécifiquement conçu pour les assistants shopping IA, et Albertsons Media Collective intègre les sponsored products dans sa recherche conversationnelle IA. Le pattern est clair : la découverte produit migre des pages de résultats vers les conversations IA, et l'écosystème publicitaire suit."
    },
    {
      id: 7,
      code: "IA / GOV",
      titre: "GUIDELINES ARTICLE 50 PUBLIÉES — DEADLINE 2 AOÛT CONFIRMÉE, AGENTS IA COUVERTS",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "La Commission européenne publie les Guidelines officielles Article 50 le 20 juillet. La deadline du 2 août 2026 est confirmée sans report (le Digital Omnibus ne repousse que le high-risk). Les agents IA sont explicitement couverts par les obligations 50(1) et 50(2). Claude Opus 5 sort le 24 juillet (Anthropic, ~$74 Md ARR). Seuls 41 % des déploiements agents atteignent le ROI en 12 mois (Gartner/Digital Applied).",
      category: "IA",
      sources: [
        { nom: "Commission européenne", url: "https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems" },
        { nom: "Trustible", url: "https://trustible.ai/post/everything-you-need-to-know-about-eu-ai-act-transparency-obligations-article-50/" },
        { nom: "Digital Applied / McKinsey / Gartner", url: "https://www.digitalapplied.com/blog/ai-agent-productivity-statistics-2026-roi-data-points" }
      ],
      details: [
        "Commission européenne publie les Guidelines Article 50 le 20 juillet 2026 — deadline 2 août confirmée",
        "Digital Omnibus NE repousse PAS l'Article 50 (seulement high-risk → décembre 2027)",
        "Agents IA explicitement couverts : obligation 50(1) disclosure + 50(2) marquage contenu",
        "Grace period de 4 mois (→ 2 décembre 2026) uniquement pour le marquage machine-readable des systèmes déjà sur le marché",
        "Claude Opus 5 (24 juillet) : proche de Fable 5 à moitié prix ($5/$25 per M tokens), effort dial",
        "41 % des déploiements agents atteignent le ROI en 12 mois, 19 % n'atteignent jamais le payback (Gartner)"
      ],
      longDescription: "La Commission européenne publie le 20 juillet les Guidelines officielles sur les obligations de transparence Article 50 de l'AI Act. La deadline du 2 août 2026 est confirmée sans aucun report — le Digital Omnibus ne repousse que les obligations high-risk (→ décembre 2027). Les 4 obligations sont : disclosure de l'interaction IA, marquage machine-readable du contenu synthétique, notification pour la reconnaissance émotionnelle/biométrique, et labelling des deepfakes. Point critique : les agents IA sont explicitement couverts par 50(1) ET 50(2). Seule exception : une grace period de 4 mois (→ 2 décembre 2026) pour le marquage machine-readable des systèmes génératifs déjà sur le marché avant le 2 août. Côté modèles, Anthropic sort Claude Opus 5 le 24 juillet (proche de Fable 5 à moitié prix, $5/$25 per M tokens, effort dial low/medium/high). L'ARR d'Anthropic atteint ~$74 Md en juillet 2026 (vs $9 Md en décembre 2025). Digital Applied compile les premières données de productivité agents IA à grande échelle : médiane 6,4h gagnées/semaine/travailleur (McKinsey), mais seulement 41 % des déploiements atteignent le ROI en 12 mois (Gartner), principalement à cause des lacunes en évaluation et gouvernance."
    },
    {
      id: 8,
      code: "INNOVATION",
      titre: "PREMIÈRE CAMPAGNE OOH ENTIÈREMENT AGENTIQUE — LE WORKFLOW MEDIA PLANNING SE COMPRESSE",
      badge: "IMPORTANT",
      previousBadge: "À SURVEILLER",
      description: "Broadsign exécute la première campagne OOH entièrement agentique (22 juillet) : agent sell-side + agent buy-side Draft Digital, protocole AdCP, pour l'association Lot of Happiness. Le retail media atteint $107,6 Md aux US (NielsenIQ) mais 47 % des CMO ne font pas confiance à la mesure. HCLTech : 90 % des organisations adoptent l'IA mais seulement 18 % voient un impact revenu.",
      category: "INNOVATION",
      sources: [
        { nom: "Agile Brand Guide / Broadsign", url: "https://agilebrandguide.com/yesterdays-marketing-technology-ai-news-july-22-2026-2/" },
        { nom: "NielsenIQ", url: "https://nielseniq.com/global/en/insights/analysis/2026/retail-media-incrementality-measurement/" },
        { nom: "HBR / Harvard Art Museums", url: "https://hbr.org/podcast/2026/07/how-a-museum-marketing-team-used-ai-to-bring-people-closer-to-art" }
      ],
      details: [
        "Broadsign (22 juillet) : première campagne OOH entièrement agentique — agent sell-side + agent buy-side Draft Digital",
        "Protocole AdCP, pour l'association Lot of Happiness avec Global Netherlands",
        "Retail media US : $107,6 Md en 2026, quasi triple en 5 ans (NielsenIQ, 24 juillet)",
        "67 % des CMO prévoient d'augmenter l'investissement retail media, mais 47 % ne font pas confiance à la mesure",
        "HCLTech (22 juillet) : 90 % adoptent l'IA, mais seulement 18 % voient un impact revenu significatif",
        "Harvard Art Museums (HBR) : cas d'école IA + marketing culturel — avatars IA pour animer des œuvres"
      ],
      longDescription: "L'innovation marketing cette semaine est marquée par la première campagne publicitaire entièrement agentique. Broadsign annonce le 22 juillet que son agent sell-side et l'agent buy-side de Draft Digital ont exécuté une campagne OOH de bout en bout pour l'association Lot of Happiness, via le protocole AdCP et le media owner Global Netherlands. Le workflow complet — ciblage audience, sélection media, setup campagne, workflow créatif, approbations et exécution — a été compressé en protocoles agent-to-agent sans intervention humaine. Le retail media atteint $107,6 milliards aux US en 2026 (NielsenIQ, quasi triple en 5 ans), mais le pain point majeur reste la mesure : 67 % des CMO prévoient d'augmenter l'investissement mais 47 % ne font pas confiance à la mesure d'incrémentalité fournie par les RMN. HCLTech quantifie le gap adoption/impact : 90 % des organisations disent que l'IA transforme les workflows, mais seulement 18 % voient un impact revenu significatif. Harvard Business Review publie un cas d'école sur les Harvard Art Museums utilisant des avatars IA pour animer des œuvres dans une campagne marketing — illustrant les tensions entre innovation et stewardship de marque dans le secteur culturel."
    }
  ],

  actions: [
    { id: 1, titre: "Préparer la conformité Article 50 EU AI Act avant le 2 août : disclosure chatbot, marquage machine-readable du contenu IA, labelling deepfakes — les agents IA sont explicitement couverts", domaine: "JURIDIQUE / TECHNIQUE", responsable: "DIRECTION DIGITALE + JURIDIQUE" },
    { id: 2, titre: "Auditer la visibilité de marque dans Gemini (27,7 % de part, +108 % en un mois) en plus de ChatGPT — le marché multi-assistants impose une stratégie GEO multi-plateforme", domaine: "SEO / GEO / STRATÉGIE", responsable: "ÉQUIPE SEO + MARKETING" },
    { id: 3, titre: "Optimiser les Google Business Profiles et enrichir le schema markup pour les AI Overviews France — 73 % des citations IA proviennent de pages structurées", domaine: "SEO / TECHNIQUE", responsable: "ÉQUIPE SEO + DEV" },
    { id: 4, titre: "Évaluer l'intégration des ads dans les assistants shopping IA (Criteo Commerce Max, Shoppable/ChatGPT) pour la stratégie d'acquisition digitale", domaine: "ACQUISITION / INNOVATION", responsable: "ACQUISITION + MARKETING" },
    { id: 5, titre: "Implémenter schema.org (Organization, Course, EducationalOrganization, FAQ) et évaluer la pertinence de llms.txt pour le web agentique", domaine: "SEO / TECHNIQUE", responsable: "ÉQUIPE SEO + DEV" },
    { id: 6, titre: "Tester le Webflow AEO Maturity Index sur les propriétés web : médiane = 16 % d'apparition dans les réponses IA, 6 % avec citation — identifier les gaps", domaine: "ANALYTICS / GEO", responsable: "DATA + SEO" },
  ],

  signauxEmergents: [
    { titre: "Gemini double sa part en un mois — la distribution OS-native redéfinit le marché", description: "L'intégration dans Android, Gmail et Siri (deal Apple) propulse Gemini de 13,3 % à 27,7 % en un mois. La qualité du modèle compte moins que la distribution native. Pour la visibilité IA, Gemini devient incontournable au même titre que ChatGPT.", horizon: "COURT TERME (Q3 2026)" },
    { titre: "Le web agentique se structure mais les standards divergent", description: "Trafic agents +45 % en Q2 (DataDome), Meta RAG crawler +163 %, LLMs.txt 8,8x mais 97 % sans requête. Les publishers passent de l'optimisation trafic à la monétisation des citations. Le standard qui s'impose est MCP, pas LLMs.txt.", horizon: "MOYEN TERME (2026-2027)" },
    { titre: "L'agentic CMS émerge comme catégorie de marché", description: "Salesforce/Contentful, Optimizely 'AI platform for marketing', Drupal AI Initiative. Le critère de sélection CMS devient 'peut-on posséder la couche agent ?' avec MCP comme proxy. Les replatforming forcés (Adobe AEM 6.5 fin août) accélèrent la transition.", horizon: "MOYEN TERME (2026-2027)" },
    { titre: "Le retail media atteint $107,6 Md mais le gap mesure/confiance s'élargit", description: "NielsenIQ confirme le quasi-triplement en 5 ans. Mais 47 % des CMO ne font pas confiance à la mesure d'incrémentalité. L'arrivée des ads dans les assistants IA (Criteo, Shoppable) ajoute une couche de complexité à un problème d'attribution déjà non résolu.", horizon: "COURT TERME (S2 2026)" },
    { titre: "La première campagne publicitaire entièrement agentique compresse le workflow media", description: "Broadsign/Draft Digital exécutent une campagne OOH sans intervention humaine via le protocole AdCP. Le media planning, buying et execution se compriment en protocoles agent-to-agent. Les agences qui ne développent pas de capacités agentiques risquent la désintermédiation.", horizon: "MOYEN TERME (2026-2027)" },
  ],

  tendancesPassees: [
    { titre: "De l'auto-citation Google à l'expansion européenne des AI Overviews", description: "S30 : Google s'auto-cite 8,4x dans AI Mode (Profound, 32M+ instances). S31 : AI Overviews lancés en France le 22 juillet — première expansion européenne incluant AI Mode, Search Live et recherche multimodale. La désintermédiation des éditeurs s'étend géographiquement." },
    { titre: "ChatGPT : de la domination à la fragmentation accélérée", description: "S30 : ChatGPT atteint 1 Md de MAU mais perd 25 points de part web. S31 : chute à 52,7 % de part chatbot (-14,4 points depuis janvier). Gemini bondit à 27,7 % (+108 % en un mois). La distribution OS-native l'emporte sur la qualité du modèle." },
    { titre: "EU AI Act : des guidelines à la deadline — J-6 pour l'Article 50", description: "S30 : Digital Omnibus signé le 8 juillet, high-risk repoussé. S31 : Commission publie les Guidelines officielles le 20 juillet, deadline 2 août confirmée, agents IA explicitement couverts. Il reste 6 jours pour se mettre en conformité." },
    { titre: "Du delegative UI au commerce conversationnel industrialisé", description: "S30 : le delegative UI remplace le conversational UI (Miro, Figma, Canva). S31 : Michaels déploie Ask Mike en 6 semaines, Shoppable intègre le checkout dans ChatGPT, Criteo lance les ads dans les assistants IA. Le pattern passe du concept à la production." },
    { titre: "Agents IA : du taux d'échec au ROI mesuré", description: "S30 : 89 % des pilotes agents échouent en production (Gartner/IDC). S31 : Digital Applied compile les premières données à grande échelle — 6,4h/semaine gagnées, 41 % atteignent le ROI en 12 mois, payback médian 6,7 mois. Le problème n'est plus la capacité mais l'évaluation et la gouvernance." },
  ]
};
