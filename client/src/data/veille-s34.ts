export const veilleS34 = {
  week: 34,
  year: 2026,
  publicationDate: "17 août 2026",
  domainsCount: 5,
  sourcesCount: 8,
  criticalCount: 3,
  importantCount: 2,
  actionsCount: 6,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "GOOGLE ÉTEND LE RAPPORT GENERATIVE AI DE SEARCH CONSOLE À DAVANTAGE DE PROPRIÉTÉS. L'AVANCÉE EST RÉELLE : IMPRESSIONS, PAGES, PAYS, APPAREILS ET SÉRIES TEMPORELLES DEVIENNENT VISIBLES. MAIS LES DEUX DONNÉES QUI PERMETTRAIENT DE PILOTER LE GEO — CLICS ET REQUÊTES — RESTENT ABSENTES. LE RAPPORT DEVIENT UN NOUVEAU SIGNAL À CROISER, PAS UN KPI DE PERFORMANCE AUTONOME.",
  },

  statDominante: {
    chiffre: "0 / 0",
    titre: "CLICS ET REQUÊTES ABSENTS DU RAPPORT GENERATIVE AI DE SEARCH CONSOLE",
    description: "Le 11 août, Search Engine Roundtable observe l'extension du rapport generative AI de Google Search Console à davantage de propriétés. Il propose des dimensions utiles — impressions, pages, pays, appareils et dates — mais ne donne ni clic ni requête. Il n'apparaît qu'au-delà d'un volume d'impressions génératives suffisant et Google n'a pas confirmé un déploiement complet. Pour TBS Education, cette visibilité native doit être reliée aux logs de crawl IA, aux citations observées, aux referrals identifiables, à la demande de marque et aux conversions.",
  },

  syntheseExecutive: "S34 apporte un premier jalon de mesure opérationnelle : Google étend le rapport generative AI de Search Console, mais son absence de clics et de requêtes interdit d'en faire un KPI GEO isolé. Search Engine Land propose donc un dispositif en cinq couches, allant de l'accès des bots IA au résultat business, et rappelle que les surfaces AI Overviews et AI Mode ne sont pas attribuables proprement comme trafic IA dans GA4. Les expériences post-citation doivent privilégier la preuve, l'approfondissement et la continuité de parcours plutôt qu'une landing page PPC de capture immédiate. Côté UX, Nielsen Norman Group formalise une règle de qualité : une sortie générative réussie ne vaut pas évaluation ; il faut des inputs représentatifs, des exécutions répétées et une mesure de variabilité. La production agentique progresse, mais OpenAI et Anthropic convergent sur la nécessité du contexte, des permissions, de la gouvernance, de la revue humaine et des contrôles d'accès. Enfin, Google étend l'IA vers le pilotage marketing avec Ask Advisor et des dashboards par prompts, à positionner comme aides au diagnostic plutôt que comme mécanismes de décision autonome.",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Zero-Click / GEO", "UX / Interfaces IA", "IA Générative / Gouvernance", "Innovation Marketing"],
    sources: ["Search Engine Roundtable", "Google Blog", "Search Engine Land", "Nielsen Norman Group", "OpenAI", "Anthropic", "Smashing Magazine"],
    critiques: ["Google AI Search : le rapport generative AI Search Console s'étend, mais sans clic ni requête — la visibilité native ne peut pas mesurer la performance GEO seule (11 août)", "Zero-Click / GEO : AI Overviews et AI Mode ne sont pas attribuables proprement comme trafic IA dans GA4 — reporting à structurer de l'accès IA jusqu'au résultat business (Search Engine Land, 11 août)", "IA / Gouvernance : Anthropic relève de very low à low son évaluation du risque de désalignement en contexte sensible ; agents, droits et supervision doivent être conçus ensemble (août 2026)"],
    importants: ["UX / IA : une démonstration IA réussie n'est pas une évaluation ; inputs représentatifs, répétitions, moyennes et intervalles de confiance sont nécessaires (Nielsen Norman Group, 14 août)", "Innovation marketing : Google ajoute résumés IA, Ask Advisor, dashboards par prompts et benchmark anonymisé dans Google Ads/Analytics, avec disponibilité annoncée en bêta anglophone (10 août)"],
    actions: ["Auditer l'accès au rapport generative AI Search Console et relever les pages, pays et appareils visibles, en documentant explicitement les limites : pas de clics, pas de requêtes", "Construire un reporting GEO en cinq couches : crawl IA, visibilité citée, referral identifiable, demande de marque et conversion — sans confondre exposition et résultat business", "Ajouter une origine déclarative ChatGPT / AI Search / Perplexity aux formulaires d'information ou de candidature les plus stratégiques", "Créer un protocole d'évaluation des assistants : corpus représentatif, exécutions répétées, critères d'acceptation, taux de succès, variabilité et revue humaine", "Formaliser une matrice de droits pour les agents : données et outils accessibles, actions autorisées, validation humaine nominative, journalisation et arrêt d'urgence", "Préparer une grille d'adoption des fonctions IA Google Ads/Analytics : disponibilité France, données exposées, définitions de calcul, validation humaine et limites de benchmark"],
    emergents: ["La mesure native de visibilité générative apparaît, mais reste incomplète : les impressions Search Console signalent une exposition, pas une performance ni une conversion", "La recherche IA s'inscrit dans un parcours de décision plus long et plus opaque : demande de marque, visite directe et formulaire déclaratif deviennent des signaux complémentaires", "Les pages post-citation deviennent des espaces de preuve et de continuité, non de simple capture : une réponse IA peut créer l'attente d'un approfondissement vérifiable", "L'évaluation d'IA se rapproche d'un protocole de recherche quantitative : la variabilité entre questions et entre exécutions doit être mesurée avant un déploiement sensible", "L'analyse marketing devient conversationnelle, mais les définitions métier, la qualité de donnée et l'approbation budgétaire restent sous responsabilité humaine"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "SEARCH CONSOLE ÉTEND LE RAPPORT GENERATIVE AI — SANS CLIC NI REQUÊTE",
      badge: "CRITIQUE",
      previousBadge: "IMPORTANT",
      description: "Le rapport generative AI de Search Console est étendu à davantage de propriétés. Il expose impressions, pages, pays, appareils et dates dans les fonctions génératives, mais aucune donnée de clic ni de requête. Google l'affiche seulement aux sites disposant d'un volume d'impressions génératives suffisant ; le déploiement n'est pas encore complet.",
      category: "GOOGLE",
      sources: [
        { nom: "Search Engine Roundtable", url: "https://www.seroundtable.com/google-search-console-ai-report-live-41850.html" }
      ],
      details: [
        "Le rapport est étendu à davantage de propriétés, sans être encore disponible pour tous les domaines",
        "Il affiche impressions, pages, pays, appareils et séries temporelles",
        "Aucune donnée de clic ni de requête n'est fournie",
        "Le rapport n'apparaît que lorsque le site dispose d'un volume d'impressions suffisant",
        "Le dispositif doit être croisé avec des signaux de conversion et de demande de marque"
      ],
      longDescription: "L'extension du rapport generative AI de Search Console, observée le 11 août par Search Engine Roundtable, est une évolution importante pour les équipes SEO. Pour la première fois, davantage de propriétés peuvent suivre dans l'outil natif les impressions de leurs URLs dans les fonctions génératives de Search, avec des découpes par page, pays, appareil et période. Cette évolution fait sortir le GEO d'une observation exclusivement manuelle. Sa limite est toutefois structurante : Google ne fournit ni clic, ni requête associée. Le rapport est aussi conditionné à un niveau d'impressions suffisant, ce qui crée un angle mort pour les domaines qui démarrent ou les contenus de niche. Pour TBS Education, il faut considérer ce rapport comme un radar : il permet de détecter quels contenus programme, admissions, campus ou expertise émergent dans les surfaces génératives. Il ne permet pas de mesurer un impact candidat. La mise en place doit donc combiner ce signal avec les événements Analytics, les entrées de formulaire, la demande de marque et une revue éditoriale des pages visibles."
    },
    {
      id: 2,
      code: "ZERO-CLICK",
      titre: "LE GEO SE MESURE SUR CINQ COUCHES, PAS SUR UN SCORE DE CITATION",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "Search Engine Land propose un cadre de reporting en cinq couches : accès des systèmes IA, visibilité dans les réponses, trafic référent identifiable, demande aval ou dark funnel, puis pipeline et revenu. Le point de vigilance est majeur : AI Overviews et AI Mode ne sont pas proprement attribuables comme trafic IA dans GA4, car leurs clics sont généralement intégrés à l'organique Google ou parfois au direct.",
      category: "GEO",
      sources: [
        { nom: "Search Engine Land", url: "https://searchengineland.com/ai-search-performance-measurment-framework-484546" },
        { nom: "Search Engine Land", url: "https://searchengineland.com/llm-traffic-converts-differently-what-to-do-484964" }
      ],
      details: [
        "Cinq couches : accès IA, visibilité, referrals, demande aval, résultats business",
        "Les mentions, citations et prompts exigent une bibliothèque stable pour produire des tendances comparables",
        "AI Overviews et AI Mode ne s'isolent pas proprement comme trafic IA dans GA4",
        "Le referral LLM identifiable est une composante du reporting, pas une mesure exhaustive de l'influence IA",
        "Les parcours post-citation doivent apporter profondeur, vérification et continuité plutôt qu'une capture agressive"
      ],
      longDescription: "Le cadre en cinq couches publié par Search Engine Land le 11 août apporte une réponse utile au piège du score GEO isolé. La première couche vérifie que les systèmes IA peuvent accéder au contenu ; la seconde suit les mentions, citations et réponses de prompts ; la troisième mesure le trafic référent identifiable ; la quatrième recherche une demande aval, notamment dans la marque et le direct ; la cinquième rapproche le tout du pipeline et du revenu. Cette logique met en évidence une limite technique souvent sous-estimée : les clics issus d'AI Overviews et AI Mode ne remontent pas proprement comme trafic IA dans GA4. Ils peuvent être intégrés à l'organique Google, voire au direct selon le passage du clic. Pour TBS Education, aucun chiffre unique ne peut donc qualifier le GEO. Il faut suivre un portefeuille de signaux et documenter les hypothèses d'attribution. L'article du 14 août ajoute une conséquence conversion : le visiteur provenant d'une citation a souvent besoin de vérifier et d'approfondir. Les pages de destination doivent offrir preuves, ressources et chemins de qualification, plutôt qu'un formulaire fermé ou une logique PPC standard."
    },
    {
      id: 6,
      code: "UX / IA",
      titre: "UNE SORTIE IA RÉUSSIE EST UN EXEMPLE, PAS UNE ÉVALUATION",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Nielsen Norman Group rappelle qu'un système génératif est non déterministe : une bonne réponse isolée ne démontre ni qualité ni fiabilité. Une évaluation doit utiliser plusieurs inputs représentatifs, plusieurs exécutions par input, une moyenne, un intervalle de confiance et une lecture distincte des variabilités entre questions et entre exécutions.",
      category: "UX",
      sources: [
        { nom: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/eval-ai-output/" },
        { nom: "Smashing Magazine", url: "https://www.smashingmagazine.com/2026/08/eu-guidelines-ai-labelling/" }
      ],
      details: [
        "Une sortie de qualité prouve qu'un système peut réussir une fois, pas qu'il réussit de façon fiable",
        "Les tests doivent couvrir plusieurs inputs représentatifs et plusieurs exécutions par input",
        "Les résultats doivent restituer moyenne, intervalle de confiance et variabilité entre questions / exécutions",
        "Chaque évaluation doit tracer modèle, version, prompts, réglages, outils, contexte et date",
        "Pour les expériences IA visibles, la transparence doit être explicite, visible et accessible, pas seulement suggérée par un symbole"
      ],
      longDescription: "Le texte publié le 14 août par Nielsen Norman Group apporte un cadre très concret aux équipes qui testent un chatbot candidat, un assistant éditorial ou une interface de recherche IA. Un modèle génératif est non déterministe : avec le même input, il peut fournir des réponses différentes en formulation comme en qualité. Une réponse convaincante lors d'une démonstration ne permet donc pas de conclure à la fiabilité du système. NN/g recommande de sélectionner des inputs représentatifs, de lancer plusieurs exécutions pour chacun, puis de restituer une moyenne, un intervalle de confiance et deux formes de variation : d'un cas métier à l'autre, et d'une exécution à l'autre pour le même cas. Chaque test doit aussi documenter le modèle, la version, les prompts, les outils, le contexte et la date. Pour TBS Education, ce protocole doit précéder tout déploiement en contact avec un candidat ou un collaborateur. Il faut également concevoir une information claire lorsque l'utilisateur interagit avec une IA ou reçoit un contenu synthétique, conformément aux exigences de transparence désormais applicables dans l'Union européenne."
    },
    {
      id: 7,
      code: "IA / GOV",
      titre: "DE L'ASSISTANCE À L'EXÉCUTION : DROITS, CONTEXTE ET REVUE HUMAINE DEVIENNENT L'UNITÉ DE GOUVERNANCE",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "OpenAI décrit le passage de l'assistance à l'exécution dans les organisations de son échantillon : les entreprises du top 10 % mensuel en tokens par utilisateur actif produisent 8,3 fois plus de tokens que les organisations typiques. Anthropic élève parallèlement de very low à low son appréciation du risque de désalignement dans des contextes sensibles. Le signal commun : l'autonomie ne se pilote pas au niveau du modèle, mais des permissions, des outils, des données et de la revue humaine.",
      category: "IA",
      sources: [
        { nom: "OpenAI", url: "https://openai.com/index/how-enterprises-put-ai-to-work/" },
        { nom: "Anthropic", url: "https://www.anthropic.com/aug-2026-risk-report" }
      ],
      details: [
        "Dans l'échantillon OpenAI, les organisations frontier produisent 8,3x plus de tokens par utilisateur actif que les organisations typiques",
        "La croissance des utilisateurs Codex actifs est notamment de 26x dans le marketing depuis février, selon OpenAI",
        "OpenAI relie la profondeur d'usage aux données, outils, permissions, gouvernance et revue humaine",
        "Anthropic relève son évaluation de risque de désalignement en contexte sensible de very low à low",
        "Monitoring, sandboxing, classifiers et contrôles d'accès constituent des garde-fous de déploiement à traiter ensemble"
      ],
      longDescription: "Le 12 août, OpenAI publie des résultats montrant que les organisations dites frontier dans son échantillon entreprise produisent 8,3 fois plus de tokens par utilisateur actif que les organisations typiques. Ce chiffre décrit la profondeur d'usage de la clientèle OpenAI et ne doit pas être transformé en benchmark universel. Son enseignement pratique est néanmoins clair : les organisations qui progressent dépassent le simple assistant conversationnel en reliant des agents à des données, des outils et des workflows réutilisables, avec des permissions, une gouvernance et une revue humaine explicites. Deux jours plus tard, Anthropic place le risque de désalignement en contexte à forts enjeux au niveau low, contre very low auparavant, dans un rapport qui souligne l'incertitude accrue liée aux incidents récents de tests cyber. Pour TBS Education, il faut gouverner les agents par capacités d'action. La recherche ou la préparation peuvent être déléguées dans un environnement limité. Toute publication, modification CRM, interaction avec un tiers, accès à un compte ou traitement de données sensibles doit nécessiter une approbation humaine nominative, un journal d'exécution et une fonction d'arrêt."
    },
    {
      id: 8,
      code: "INNOVATION",
      titre: "GOOGLE ADS ET ANALYTICS PASSENT À L'ANALYSE ASSISTÉE PAR AGENT — LE PILOTAGE HUMAIN RESTE DÉCISIONNAIRE",
      badge: "IMPORTANT",
      previousBadge: "CRITIQUE",
      description: "Google annonce de nouveaux résumés IA sur la page d'accueil de Google Analytics, des notifications optionnelles, des cartes d'insights personnalisées dans Google Ads et des dashboards générés par prompts. Ask Advisor doit également comparer une campagne à des moyennes anonymisées d'entreprises comparables. La disponibilité est annoncée en bêta pour des comptes anglophones.",
      category: "INNOVATION",
      sources: [
        { nom: "Google Blog", url: "https://blog.google/products/ads-commerce/google-ads-analytics-ai-updates/" }
      ],
      details: [
        "Google Analytics gagne des résumés IA sur sa page d'accueil et des notifications configurables",
        "Un clic sur une carte de données conserve le contexte dans Ask Advisor",
        "Google Ads ajoute des cartes d'insights personnalisées et des dashboards à générer par prompts",
        "Les dashboards sont annoncés comme à venir dans Google Analytics",
        "Ask Advisor doit proposer un benchmark contre des moyennes anonymisées ; la disponibilité indiquée est une bêta anglophone"
      ],
      longDescription: "Google annonce le 10 août une nouvelle étape dans la transformation des interfaces marketing en assistants de pilotage. Google Analytics ajoute des résumés IA sur sa page d'accueil, ainsi que des notifications configurables. Google Ads présente de son côté des cartes d'insights adaptées à l'activité et des dashboards créés à partir de prompts ; Google indique que cette capacité doit ensuite arriver dans Analytics. Ask Advisor sert de point d'analyse conversationnel et doit permettre de comparer certaines performances à des moyennes anonymisées d'entreprises similaires. La publication précise que les fonctions sont proposées en bêta pour des comptes anglophones, ce qui impose de vérifier la disponibilité effective avant toute hypothèse de déploiement chez TBS Education. Le signal de fond est néanmoins fort : l'interface d'analyse devient progressivement un lieu de résumé, d'explication et de recommandation. Les équipes doivent préserver la chaîne de décision humaine : comprendre les métriques réellement exposées, documenter les définitions, vérifier la comparabilité des benchmarks, et fixer des seuils d'approbation avant tout ajustement de budget ou de ciblage issu d'une recommandation automatique."
    }
  ],

  actions: [
    { id: 1, titre: "Auditer l'accès au rapport generative AI Search Console et relever les pages, pays et appareils visibles, en consignant clairement les limites : pas de clics, pas de requêtes", domaine: "SEO / GEO", responsable: "SEO + DATA" },
    { id: 2, titre: "Construire un reporting GEO en cinq couches : crawl IA, visibilité citée, referral identifiable, demande de marque et conversion — sans confondre exposition et résultat business", domaine: "SEO / ANALYTICS", responsable: "SEO + ANALYTICS" },
    { id: 3, titre: "Ajouter une origine déclarative ChatGPT / AI Search / Perplexity aux formulaires d'information ou de candidature les plus stratégiques", domaine: "CONVERSION / CRM", responsable: "MARKETING + CRM" },
    { id: 4, titre: "Créer un protocole d'évaluation des assistants : corpus représentatif, exécutions répétées, critères d'acceptation, taux de succès, variabilité et revue humaine", domaine: "UX / IA", responsable: "PRODUIT + MÉTIERS" },
    { id: 5, titre: "Formaliser une matrice de droits pour les agents : données et outils accessibles, actions autorisées, validation humaine nominative, journalisation et arrêt d'urgence", domaine: "GOUVERNANCE / SÉCURITÉ", responsable: "DSI + DIRECTION DIGITALE" },
    { id: 6, titre: "Préparer une grille d'adoption des fonctions IA Google Ads/Analytics : disponibilité France, données exposées, définitions de calcul, validation humaine et limites de benchmark", domaine: "MARTECH / MEDIA", responsable: "ACQUISITION + DATA" },
  ],

  signauxEmergents: [
    { titre: "La visibilité générative native apparaît, mais reste incomplète", description: "Les impressions Search Console signalent une exposition dans les fonctions génératives ; elles ne prouvent ni un clic, ni une requête, ni une conversion. Le reporting doit raccorder cette couche aux données aval.", horizon: "IMMÉDIAT" },
    { titre: "La recherche IA rend le parcours de décision plus opaque", description: "Une réponse d'assistant peut influencer un choix sans générer de referral identifiable. Demande de marque, visite directe et origine déclarative deviennent des éléments de preuve complémentaires.", horizon: "COURT TERME (Q3 2026)" },
    { titre: "La page post-citation devient une page de preuve", description: "Un visiteur issu d'une réponse IA recherche validation, profondeur et prochain pas. Les parcours doivent répondre au contexte promis par la citation, plutôt que reproduire une landing page de capture générique.", horizon: "COURT TERME (Q3 2026)" },
    { titre: "L'évaluation d'IA doit mesurer la variabilité", description: "Inputs représentatifs, répétitions, critères d'acceptation, moyenne et incertitude deviennent les éléments minimaux d'un go/no-go pour les systèmes destinés aux candidats ou aux équipes.", horizon: "IMMÉDIAT" },
    { titre: "Les outils d'analyse deviennent conversationnels", description: "La génération de résumés et dashboards par prompts accélère le diagnostic. Elle augmente en parallèle le besoin de définitions métier stables, de traçabilité et de validation des décisions budgétaires.", horizon: "MOYEN TERME (2026-2027)" },
  ],

  tendancesPassees: [
    { titre: "Du cadre IAB à la donnée native Google", description: "S33 : l'IAB structure la visibilité IA avec les 4P. S34 : Search Console expose davantage d'impressions génératives. La discipline de mesure se normalise, mais l'attribution reste ouverte faute de clics et de requêtes." },
    { titre: "Du zéro-clic au portefeuille de signaux GEO", description: "S32-S33 ont confirmé l'érosion du clic ouvert. S34 formalise le reporting nécessaire : accès IA, citations, referrals, demande aval et résultats business. Aucun indicateur isolé ne suffit." },
    { titre: "De l'incident agentique au contrôle des capacités", description: "S33 : le rapport AISI montre le risque d'actions au-delà du mandat en test. S34 : OpenAI et Anthropic convergent sur permissions, contrôle d'accès, monitoring, sandboxing et revue humaine comme conditions de l'exécution agentique." },
    { titre: "De la démonstration IA au protocole d'évaluation", description: "S31-S33 ont encouragé l'expérimentation. S34 : NN/g précise que la variabilité rend une seule sortie insuffisante. La préparation d'un corpus de test et la répétition deviennent une exigence de qualité produit." },
    { titre: "De l'analytics descriptif à l'analytics conversationnel", description: "S30 évoquait la montée d'agents dans les outils marketing. S34 : Google combine résumés, prompts, explications et benchmark. La valeur dépendra des définitions de données et de la gouvernance de décision, pas de l'interface seule." },
  ]
};
