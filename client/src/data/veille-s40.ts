export const veilleS40 = {
  week: 40,
  year: 2026,
  publicationDate: "28 septembre 2026",
  domainsCount: 8,
  sourcesCount: 11,
  criticalCount: 2,
  importantCount: 5,
  actionsCount: 6,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "LE PILOTAGE DES RECHERCHES IA DEVIENT MULTIMODAL ET MULTI-MOTEURS : CLIC, CITATION, FORMAT ET MOTEUR DOIVENT ÊTRE LUS SÉPARÉMENT.",
  },

  statDominante: {
    chiffre: "1 600",
    titre: "PROMPTS SUIVIS QUOTIDIENNEMENT PAR OTTERLYAI SUR SEPT MOTEURS DE RECHERCHE IA",
    description: "OtterlyAI indique suivre 1 600 prompts dans 16 rapports sectoriels américains, quotidiennement, sur ChatGPT, Google AI Mode, Google AI Overviews, Claude, Perplexity, Gemini et Copilot. Ce périmètre propriétaire n’est ni un benchmark français ni une mesure de trafic ou de conversion ; il rend visible la variabilité des citations selon le moteur et la plateforme.",
  },

  syntheseExecutive: "La S40 marque une étape de méthode : Google ajoute dans Search Console un reporting de la recherche web multimodale, y compris dans le rapport des fonctionnalités d’IA générative, tandis que l’étude propriétaire OtterlyAI rappelle que les citations varient fortement selon le moteur. Le pilotage GEO ne peut donc pas réduire visibilité, citation, clic et conversion à une seule métrique. Côté données structurées, Google documente de nouvelles propriétés pour VideoObject et les prix promotionnels : la priorité reste la qualité et la maintenance des informations machine-readable. Les annonces Liferay, Okta et Microsoft convergent vers un même enjeu d’exécution : contenu, identité, permissions, contexte de travail et actions déléguées doivent être traçables. La Californie propose de pousser l’audit indépendant et la capacité d’arrêt des modèles frontier, ce qui fait de la réversibilité un critère de production. Enfin, Target illustre comment un actif de marque peut se déployer sur les médias, les créateurs et le terrain, mais ses résultats commerciaux publiés ne peuvent pas être attribués à la seule campagne.",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Zero-Click / GEO", "Schema.org", "DXP / Headless", "CDP & Data", "UX / IA", "IA / Gouvernance", "Innovation Marketing"],
    sources: ["Google Search Central — multimodal", "OtterlyAI", "Google Search Central — structured data", "Liferay", "Okta", "OpenAI", "Microsoft", "State of California", "Target", "Marketing Dive", "IFR"],
    critiques: ["Zero-Click / GEO : la part de citation diffère selon le moteur et ne mesure ni le clic ni la conversion", "IA / gouvernance : un agent connecté doit pouvoir être identifié, borné, surveillé et arrêté de manière vérifiable"],
    importants: ["Google AI Search : Search Console étend ses rapports à la recherche web multimodale et aux fonctionnalités d’IA générative", "Schema.org : les propriétés et exemples documentés changent ; la maintenance du balisage reste un sujet de gouvernance", "DXP / Headless : brief, audience, droits, approbations et publication tendent à se rapprocher dans un même flux", "CDP & Data : l’identité first-party doit aussi couvrir les agents qui consultent ou activent des données", "UX / IA : répondre, collaborer et déléguer doivent rester compréhensibles, traçables et réversibles"],
    actions: ["Créer un tableau de bord qui sépare recherche multimodale, fonctionnalités génératives, citation, visite et action aval", "Définir les informations et contenus visuels à suivre dans les exports Search Console multimodaux", "Mettre à jour le modèle de gouvernance des contenus et données : propriétaire, auteur, droits, version, date et validation", "Traiter chaque agent connecté comme une identité avec responsable, droits minimaux, journal d’action et mécanisme de révocation", "Prototyper une interface conversationnelle qui distingue réponse, tâche déléguée, confirmation et relais humain", "Pour chaque campagne omnicanale, séparer les KPI de diffusion, d’engagement, de trafic et de résultat business attribuable"],
    emergents: ["De la présence IA au portefeuille de métriques par moteur et par format", "Du JSON-LD ajouté au cycle de maintenance des informations machine-readable", "Du CMS séparé du pilotage de campagne au flux contenu-audience-approbation-publication", "De l’identité client à l’identité gouvernée des humains et agents", "De l’agent autonome à la délégation bornée, observable et réversible"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "SEARCH CONSOLE OUVRE UN SUIVI DE LA RECHERCHE WEB MULTIMODALE",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Google annonce dans Search Console un filtre « multimodal » pour suivre Lens, Circle to Search, l’envoi d’images et « Search this image », y compris dans le rapport des fonctionnalités d’IA générative. L’annonce ne publie aucun KPI de trafic ou de performance.",
      category: "GOOGLE",
      sources: [
        { nom: "Google Search Central", url: "https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc?hl=en" }
      ],
      details: [
        "Le reporting est ajouté au rapport de performance des résultats Search et au rapport des fonctionnalités d’IA générative",
        "Les données couvrent Lens, Circle to Search sur Android, les images téléversées dans Google Search et « Search this image » de Chrome",
        "Le nouveau filtre de type de recherche « multimodal » peut être utilisé dans les rapports de performance",
        "Les données sont exportables pour analyse dans d’autres outils",
        "Le déploiement mondial commence le 24 septembre ; Google ne publie ni volume, ni taux, ni effet trafic"
      ],
      longDescription: "Google annonce un prolongement concret de la mesure Search : les recherches web multimodales entrent dans les rapports de performance Search Console et dans le rapport des fonctionnalités d’IA générative. La documentation cite Lens, Circle to Search sur Android, les téléversements d’images et la fonction Chrome « Search this image ». Les propriétaires de sites peuvent utiliser un filtre de type de recherche « multimodal » et exporter les données. Le changement est donc une évolution de reporting, pas une preuve qu’un contenu est plus visible ou plus performant dans les réponses génératives. Google ne publie aucun volume, taux de clic, taux de conversion ou effet moyen. Pour TBS Education, l’enjeu est de préparer une lecture éditoriale et analytique des recherches visuelles : pages de campus, contenus vidéo, visuels de programmes, événements et objets pratiques susceptibles d’être découverts par image. Il faut d’abord vérifier quelles propriétés reçoivent effectivement des données, puis isoler le format, la requête, la page et l’action aval disponible. Le bon livrable n’est pas un objectif de croissance présumé, mais un tableau de bord qui distingue recherche multimodale, fonctionnalités génératives, trafic référé et demande d’information.",
    },
    {
      id: 2,
      code: "ZERO-CLICK",
      titre: "UNE CITATION IA NE VAUT NI UN CLIC NI UNE VISIBILITÉ UNIFORME",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "OtterlyAI observe sur son index propriétaire que LinkedIn gagne 39 % de part de citations entre le 1er et le 20 septembre, tandis que YouTube recule de 42 %. Le périmètre couvre 1 600 prompts US et sept moteurs ; il mesure des citations, pas le trafic ni la conversion.",
      category: "GEO",
      sources: [
        { nom: "OtterlyAI", url: "https://otterly.ai/blog/ai-search-updates-september/" }
      ],
      details: [
        "L’index porte sur 1 600 prompts, 16 rapports sectoriels américains et sept moteurs IA, avec exécution quotidienne",
        "LinkedIn passe de 0,407 % à 0,564 % de toutes les citations observées entre le 1er et le 20 septembre, soit +39 %",
        "YouTube passe de 2,221 % à 1,292 % dans la même fenêtre, soit −42 %",
        "Google AI Mode représente 87 % de la baisse de citations YouTube calculée par la source sur la période décrite",
        "La méthode compte des parts de citations quotidiennes médianes ; elle ne mesure ni clic sortant ni conversion"
      ],
      longDescription: "La source OtterlyAI apporte un signal de mesure plus qu’un résultat à reproduire. Sur son index propriétaire de 1 600 prompts, exécutés quotidiennement dans 16 rapports sectoriels américains sur sept moteurs IA, LinkedIn progresse de 0,407 % à 0,564 % des citations entre le 1er et le 20 septembre, alors que YouTube recule de 2,221 % à 1,292 %. La source documente aussi des écarts selon les moteurs : une même plateforme ne se comporte pas de manière homogène dans Google AI Mode, AI Overviews, ChatGPT, Perplexity, Gemini, Claude et Copilot. Ce périmètre ne décrit ni le marché français, ni le trafic, ni la conversion ; il ne faut donc pas convertir une part de citation en objectif business. Pour TBS Education, l’action utile est de séparer quatre dimensions : présence de la marque ou du programme dans une réponse, citations et domaines citants par moteur, visibilité des contenus concernés, puis signaux aval disponibles tels que visite référée, demande d’information ou candidature. Le pilotage GEO doit fonctionner comme un portefeuille de métriques, avec des lectures distinctes par moteur et par format, non comme un score unique.",
    },
    {
      id: 3,
      code: "SCHEMA.ORG",
      titre: "LE BALISAGE RESTE UN CONTRAT À MAINTENIR, PAS UN LEVIER À EMPILER",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Google met à jour sa documentation : propriété `creator` et interactions prises en charge pour VideoObject, ainsi que `priceType` et des exemples de prix soldés pour les Merchant listings. Ce sont des évolutions documentaires, sans KPI SEO publié.",
      category: "SEO",
      sources: [
        { nom: "Google Search Central", url: "https://developers.google.com/search/updates" }
      ],
      details: [
        "Le 24 septembre, Google ajoute `creator`, mentionne le support de `author` et précise les types pris en charge pour `interactionStatistic` dans VideoObject",
        "Le 23 septembre, Google ajoute `priceType` et des exemples de prix soldés dans la documentation Merchant listings",
        "La documentation présente `priceType` comme un moyen de déclarer les prix promotionnels et d’assurer une parité avec Merchant Center",
        "Ces changements portent sur le vocabulaire et la documentation d’implémentation",
        "Google ne publie aucun taux d’adoption, résultat enrichi, trafic, classement ou effet de conversion"
      ],
      longDescription: "Les mises à jour Search Central des 23 et 24 septembre rappellent que les données structurées sont un contrat de description vivant. Google documente l’ajout de `creator`, mentionne le support de `author` et précise les interactions prises en charge par `interactionStatistic` pour VideoObject. La veille documentaire ajoute aussi `priceType` et des exemples de prix soldés aux Merchant listings, afin de mieux déclarer les prix promotionnels et de rester cohérent avec Merchant Center. Ces éléments n’étendent pas directement les cas d’usage de TBS Education : ils concernent des propriétés vidéo et commerciales. Leur intérêt est méthodologique. Une donnée structurée fiable doit être rattachée au contenu visible, à un propriétaire, à une date de contrôle et à un circuit de correction. Pour les vidéos, programmes, cours, événements, personnes et organisations, la question utile est donc de savoir quelles informations sont réellement maintenues lorsque le contenu évolue. Google ne publie ici aucun taux d’adoption, résultat enrichi, gain SEO ou effet de citation. La bonne décision est d’organiser un cycle de maintenance des champs utiles et de documenter les écarts, pas d’ajouter de nouveaux types parce qu’ils sont disponibles.",
    },
    {
      id: 4,
      code: "DXP / HEADLESS",
      titre: "LE BRIEF, L’AUDIENCE, L’APPROBATION ET LA PUBLICATION SE RAPPROCHENT",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Liferay annonce la disponibilité générale de sa Content Marketing Platform, native de son CMS : modèle de données, permissions et publication sont partagés. La promesse est celle d’un flux unifié, pas une preuve de performance client ou de supériorité composable.",
      category: "ARCHI",
      sources: [
        { nom: "Liferay", url: "https://www.liferay.com/w/liferay-announces-general-availability-of-liferay-content-marketing-platform" }
      ],
      details: [
        "La plateforme est annoncée comme generally available le 23 septembre, en add-on de Liferay CMS",
        "Liferay indique que CMS et CMP partagent le modèle de données, les permissions et l’infrastructure de publication",
        "Les tâches de campagne sont reliées aux contenus et le statut d’approbation suit le contenu du brief à la publication",
        "La Content Population Matrix rapproche les actifs des audiences et des étapes du funnel afin d’identifier des lacunes avant diffusion",
        "La période d’essai de 90 jours est une modalité commerciale, non un KPI d’adoption ou de performance"
      ],
      longDescription: "Liferay annonce la disponibilité générale de sa Content Marketing Platform, proposée en complément de son CMS. Le fait intéressant pour la gouvernance n’est pas la promesse commerciale en elle-même : l’éditeur indique que le CMS et la plateforme de campagne partagent modèle de données, permissions et infrastructure de publication. Dans ce modèle, les tâches restent liées aux actifs de contenu, tandis que le statut d’approbation et le contexte de campagne peuvent suivre le passage du brief à la diffusion. La Content Population Matrix associe les actifs aux audiences et étapes du funnel pour mettre en évidence des lacunes avant publication. Cette annonce fournisseur ne fournit ni cas client, ni KPI de campagne, ni démonstration comparative avec une architecture composable ; la période d’essai de 90 jours n’est pas un indicateur de valeur. Pour TBS Education, le signal réside dans la réduction des ruptures de contexte entre communication, marketing, éditorial et IT. Une évaluation de CMS, DXP ou outil de campagne doit tester la portabilité du contenu, les API, les rôles, les validations et la possibilité de sortir d’un fournisseur. L’intégration native simplifie potentiellement le flux ; elle peut aussi réduire la modularité attendue d’une architecture composable.",
    },
    {
      id: 5,
      code: "CDP & DATA",
      titre: "L’IDENTITÉ FIRST-PARTY DOIT AUSSI COUVRIR LES AGENTS QUI ACTIVENT LA DONNÉE",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Okta et onze partenaires annoncent la Blueprint Alliance autour d’une architecture de sécurité agentique : identité distincte, accès borné à la tâche, délégation traçable, surveillance continue et confinement réversible. L’annonce est adjacente à la CDP, mais structurante pour les accès aux données.",
      category: "CDP",
      sources: [
        { nom: "Okta", url: "https://www.okta.com/newsroom/press-releases/industry-leaders-form-the-blueprint-alliance/" }
      ],
      details: [
        "Les membres fondateurs incluent AWS, Databricks, Google Cloud, Salesforce, ServiceNow, Okta et Zscaler",
        "Le blueprint propose de traiter chaque agent comme une identité de premier rang avec un responsable humain ou une équipe opérationnelle",
        "Les accès doivent être bornés à la tâche plutôt que permanents et les délégations rendues traçables",
        "La source mentionne surveillance à l’exécution, révocation de jetons, fin de session et quarantaine réseau",
        "La publication ne mesure ni collecte first-party, ni résolution d’identité client, ni performance CRM ou média"
      ],
      longDescription: "La Blueprint Alliance, annoncée par Okta avec des acteurs de l’identité, de la donnée, du cloud, du SaaS et de la cybersécurité, déplace l’angle CDP vers une question de gouvernance : qui consulte, rapproche ou active la donnée ? Les principes publiés demandent de traiter chaque agent comme une identité de premier rang, d’attribuer un responsable, de borner les accès à la tâche plutôt que d’accorder un privilège permanent, de rendre la délégation traçable et d’observer le comportement à l’exécution. En cas de risque, la source cite notamment la révocation de jetons, la fin de session ou la quarantaine réseau. Il s’agit d’une annonce d’architecture de sécurité et non d’une étude de performance CDP : elle ne fournit ni KPI de collecte first-party, ni résultat d’activation CRM, ni uplift média. Pour TBS Education, la traduction consiste à compléter la carte d’identité client par une carte d’identité des acteurs humains et non humains qui utilisent les données. Chaque cas d’usage doit préciser finalité, données consultables, responsable, permissions, journal d’action et mécanisme de retrait. C’est une condition de confiance avant que des agents ne se connectent au CRM, à la CDP ou aux plateformes d’activation.",
    },
    {
      id: 6,
      code: "UX / IA",
      titre: "RÉPONDRE, COLLABORER ET DÉLÉGUER DOIVENT RESTER LISIBLEMENT DISTINCTS",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Microsoft présente un Copilot où Home réunit Chat et Cowork, tandis qu’Autopilot poursuit des tâches avec objectif et limites définis par l’utilisateur. L’annonce met en avant permissions, audit et gouvernance ; elle ne fournit pas de KPI d’expérience utilisateur.",
      category: "UX",
      sources: [
        { nom: "OpenAI", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
        { nom: "Microsoft", url: "https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/" }
      ],
      details: [
        "OpenAI indique que Voice prend en charge des plugins sur web, iOS et Android, avec possibilité de suivre les réponses écrites dans le chat",
        "Une tâche non terminée dans Work peut continuer en texte après la fin d’un appel vocal",
        "Microsoft réunit Chat et Cowork dans Home : le premier est conversationnel, le second correspond à une tâche déléguée de bout en bout",
        "Autopilot est présenté comme un agent persistant auquel l’utilisateur donne un objectif et des limites",
        "La source Microsoft mentionne permissions, audit et gouvernance, sans KPI de satisfaction, d’adoption ou de productivité"
      ],
      longDescription: "Les annonces OpenAI et Microsoft convergent sur un changement de pattern : une interface conversationnelle ne se limite plus à une zone de chat. OpenAI décrit la continuité entre Voice et texte, y compris la possibilité de consulter les réponses écrites et de poursuivre une tâche non terminée dans Work. Microsoft distingue Chat, pour les questions et itérations rapides, de Cowork, pour la délégation d’une tâche de bout en bout, et présente Autopilot comme un agent persistant avec objectif et limites définis par l’utilisateur. L’enjeu UX n’est pas de reproduire ces produits, dont les annonces sont promotionnelles et sans KPI d’expérience utilisateur publié. Il est de rendre visible le passage entre répondre, assister et agir. Pour TBS Education, une interface destinée à l’orientation ou aux services doit conserver une trace écrite, expliciter les sources et permissions, annoncer clairement lorsqu’une action est déléguée, exposer les changements et proposer un point de transfert vers un humain. Une tâche autonome ne doit pas ressembler à une simple réponse. La compréhension, la confirmation, la réversibilité et l’accessibilité des sorties sont des exigences de confiance avant toute généralisation.",
    },
    {
      id: 7,
      code: "IA / GOV",
      titre: "UNE IA EN PRODUCTION DOIT POUVOIR ÊTRE AUDITÉE ET ARRÊTÉE",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "La Californie annonce un groupe d’experts pour accélérer la supervision indépendante de l’IA et étudier un « kill switch » pour des modèles frontier. Les propositions citent audits, rapports de transparence, évaluations de risques et vérification continue de l’efficacité d’un arrêt d’urgence.",
      category: "IA",
      sources: [
        { nom: "State of California", url: "https://www.gov.ca.gov/2026/09/23/governor-newsom-announces-world-leading-experts-to-deliver-on-his-ai-executive-order-including-advancing-creation-of-a-kill-switch/" }
      ],
      details: [
        "L’annonce du 23 septembre porte sur l’accélération d’une supervision indépendante des entreprises d’IA",
        "Les propositions évoquent l’intégration sur site d’une organisation indépendante de vérification dans les laboratoires frontier",
        "Les cadres de sécurité, rapports de transparence et évaluations de risques devraient être vérifiés indépendamment",
        "L’efficacité d’un éventuel « kill switch » devrait être contrôlée de manière continue",
        "Le texte ne publie ni taux d’hallucination, ni KPI de modèle, ni résultat de production transposable"
      ],
      longDescription: "L’annonce du gouverneur de Californie ne crée pas à elle seule une norme opérationnelle applicable à tous les agents. Elle est néanmoins utile pour identifier les questions de production qui deviennent structurelles : qui vérifie les affirmations de sécurité, qui évalue les risques, quel incident doit être déclaré et qui peut interrompre le système ? Les propositions mentionnent des organisations indépendantes de vérification intégrées dans les laboratoires frontier, des audits réguliers, la vérification de cadres de sécurité et de rapports de transparence, ainsi qu’un éventuel mécanisme d’arrêt dont l’efficacité serait contrôlée en continu. Le texte ne publie aucun taux d’hallucination, de défaillance ou de performance ; il ne faut pas le transformer en benchmark technique. Pour TBS Education, le cas sert de grille de décision avant tout agent connecté à des sources, outils ou données. Il convient de définir le propriétaire du système, les seuils d’escalade, les traces d’exécution, les contrôles avant action, les procédures de suspension et les tests de reprise. La capacité d’arrêt doit être documentée et testée, au même titre que la qualité de réponse. La gouvernance ne peut pas rester un document séparé de l’architecture.",
    },
    {
      id: 8,
      code: "INNOVATION MKT",
      titre: "UN ACTIF DE MARQUE PEUT RELIER CRÉATEURS, EXPÉRIENCES ET MÉDIAS — SANS ATTRIBUTION RACCOURCIE",
      badge: "À SURVEILLER",
      previousBadge: "À SURVEILLER",
      description: "Target déploie « Inside Out » autour de son sac rouge : créateurs, activations à Boston et Chicago, sacs réutilisables dans cinq villes et deux campus, puis télévision, streaming, digital, social et audio. Les +3,8 % de ventes comparables et +3,6 % de trafic cités par Marketing Dive décrivent le T2 de Target, sans attribution causale à la campagne.",
      category: "INNOV MKT",
      sources: [
        { nom: "Target", url: "https://corporate.target.com/news-features/article/2026/09/inside-out-campaign" },
        { nom: "Marketing Dive", url: "https://www.marketingdive.com/news/targets-new-campaign-puts-design-legacy-at-center-of-marketing/831116/" }
      ],
      details: [
        "Target décrit « Inside Out » comme une campagne nationale déployée par phases autour du sac rouge et des histoires de clients",
        "Le plan combine télévision, streaming, digital, social, audio, créateurs, « Red Bag Stories » et « Bagspotting » à Boston et Chicago",
        "Des sacs réutilisables doivent être distribués dans cinq villes et deux campus",
        "Marketing Dive cite +3,8 % de ventes comparables et +3,6 % de trafic au T2 2026 comme résultats du plan de redressement de Target",
        "Les sources ne relient pas causalement ces résultats commerciaux à « Inside Out » ; aucun KPI de campagne n’est retenu"
      ],
      longDescription: "Target offre un cas de mécanisme omnicanal, mais pas un cas de performance de campagne démontrée. La marque présente « Inside Out » comme une campagne nationale construite autour du sac rouge et d’histoires de clients, avec un déploiement progressif entre créateurs, audio, événements culturels, télévision, streaming, digital, social et expériences physiques. Le dispositif inclut « Red Bag Stories », des activations « Bagspotting » à Boston et Chicago, ainsi que la distribution de sacs réutilisables dans cinq villes et deux campus. Marketing Dive cite une hausse de 3,8 % des ventes comparables et de 3,6 % du trafic au T2 2026, mais les présente comme des premiers résultats du plan de redressement de Target, non comme l’effet causal de « Inside Out ». Cette distinction est décisive : aucun KPI de campagne isolé n’est disponible ici, donc le cas n’est pas compté comme un cas d’école chiffré. Pour TBS Education, l’inspiration est de faire d’un actif de marque un fil conducteur entre contenu, créateurs, événements, média et expérience de campus. La mesure doit ensuite distinguer portée, engagement, trafic, visite, lead et candidature, avec une méthode d’attribution explicite.",
    }
  ],

  bonus: {
    label: "BONUS #10 — ROBOTIQUE",
    titre: "CINQ MILLIONS DE ROBOTS INDUSTRIELS ÉTAIENT DÉJÀ EN SERVICE DANS LES USINES",
    chiffre: "5 M",
    statLabel: "ROBOTS INDUSTRIELS OPÉRATIONNELS DANS LE MONDE EN 2025, SELON L’IFR",
    description: "L’International Federation of Robotics annonce un stock opérationnel mondial record de 5 millions de robots industriels en 2025, en hausse de 9 %. Les usines ont installé plus de 600 000 unités sur l’année. Ce sont des robots industriels ; le chiffre ne mesure ni productivité ni emploi.",
    details: [
      "L’IFR chiffre le stock opérationnel mondial à 5 millions de robots industriels en 2025",
      "Le stock progresse de 9 % selon le communiqué World Robotics 2026",
      "Les usines ont installé plus de 600 000 nouveaux robots pendant l’année",
      "En Chine, les installations annuelles progressent de 20 % et représentent 59 % des déploiements mondiaux",
      "Le chiffre décrit des robots industriels opérationnels, pas tous les robots existants ni un gain automatique de productivité"
    ],
    perspective: "Un chiffre massif ne dit pas ce qu’un robot remplace ou améliore. Il rend visible la robotique comme une infrastructure industrielle déjà déployée, dont la valeur dépend toujours des processus, compétences, données et contrôles qui l’entourent.",
    longDescription: "Le Bonus S40 rappelle que la robotique industrielle est déjà une infrastructure mondiale, bien au-delà des démonstrations d’humanoïdes. L’International Federation of Robotics indique qu’en 2025, le stock opérationnel mondial de robots industriels a atteint 5 millions d’unités, en hausse de 9 %, et que les usines ont installé plus de 600 000 nouveaux robots sur l’année. Le communiqué situe aussi la Chine comme premier marché, avec des installations annuelles en hausse de 20 % et 59 % des déploiements mondiaux. Ces chiffres sont attribués au rapport World Robotics 2026 et portent sur des robots industriels opérationnels. Ils ne mesurent ni productivité, ni qualité, ni effet sur l’emploi, ni taux de réussite d’un cas d’usage donné. Pour TBS Education, le fait intéressant est pédagogique et stratégique : l’automatisation se diffuse lorsque processus, compétences, intégration, données et maintenance sont pensés ensemble. La même prudence s’applique aux agents numériques. Un chiffre de déploiement n’est pas une preuve de valeur ; il faut analyser le travail reconfiguré, les compétences nécessaires, les risques et les mécanismes de contrôle.",
    source: { nom: "International Federation of Robotics", url: "https://ifr.org/ifr-press-releases/news/five-million-robots-now-operate-in-factories-globally", date: "24 septembre 2026" }
  },

  actions: [
    { id: 1, titre: "Construire un tableau de bord GEO séparant recherche multimodale, fonctionnalités génératives, citations par moteur, visites et actions aval", domaine: "SEARCH / ANALYTICS", responsable: "SEO + DATA" },
    { id: 2, titre: "Tester les nouvelles données Search Console sur les pages et contenus visuels qui reçoivent effectivement des recherches multimodales", domaine: "SEO / CONTENU", responsable: "SEO + ÉDITORIAL" },
    { id: 3, titre: "Mettre sous contrôle les données machine-readable : propriétaire, auteur, champ, source, date de révision et validation avant publication", domaine: "ARCHITECTURE / SEO", responsable: "DIGITAL + ÉDITORIAL + DSI" },
    { id: 4, titre: "Définir une identité et un responsable pour chaque agent connecté au CRM, à la CDP ou aux outils de contenu, avec droits minimaux et journalisation", domaine: "DATA / GOUVERNANCE", responsable: "DSI + CRM + DATA PROTECTION" },
    { id: 5, titre: "Concevoir les interfaces IA avec une séparation explicite entre réponse, tâche déléguée, confirmation d’action et relais humain", domaine: "UX / IA", responsable: "DIGITAL + UX + MÉTIERS" },
    { id: 6, titre: "Documenter pour chaque campagne les KPI de diffusion, engagement, trafic et résultat business attribuable avant de conclure à son efficacité", domaine: "INNOVATION MARKETING", responsable: "MARKETING + ADMISSIONS + DATA" }
  ],

  signauxEmergents: [
    { titre: "De la présence IA au portefeuille de métriques", description: "Recherche multimodale, citation, moteur, trafic et conversion deviennent des dimensions complémentaires à analyser séparément.", horizon: "IMMÉDIAT" },
    { titre: "Du balisage ponctuel au cycle de maintenance", description: "Les propriétés structurées utiles évoluent ; la qualité repose sur la cohérence, l’attribution et la mise à jour de l’information source.", horizon: "IMMÉDIAT" },
    { titre: "Du flux de campagne fragmenté au contenu gouverné de bout en bout", description: "Brief, audience, validations, droits et publication tendent à être reliés dans un même environnement de travail.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "De l’identité client à l’identité des agents", description: "Les systèmes data devront attribuer responsable, finalité, permissions et traces aux acteurs non humains qui accèdent aux données.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "De l’autonomie promise à l’autonomie réversible", description: "Un agent est crédible en production lorsqu’il peut être observé, limité, suspendu, réattesté et repris par un humain.", horizon: "MOYEN TERME (2027)" }
  ],

  tendancesPassees: [
    { titre: "De l’AI Search à la mesure par parcours", description: "Après le suivi de la présence, des citations et du trafic, la S40 ajoute la recherche multimodale et renforce la nécessité d’une lecture par moteur et par format." },
    { titre: "Des données structurées au contrat d’information", description: "Les mises à jour de documentation confirment que Schema.org et le JSON-LD doivent être maintenus comme des informations fiables, pas ajoutés comme un levier isolé." },
    { titre: "Du contenu agent-ready au flux éditorial gouverné", description: "La S39 mettait l’accent sur droits, versions et sources ; la S40 relie désormais le brief, l’audience, l’approbation et la publication." },
    { titre: "De la first-party data au contrôle des identités", description: "Le fil rouge data s’élargit : l’identité client ne suffit pas si les agents qui accèdent aux données ne sont ni connus, ni limités, ni observables." },
    { titre: "De l’IA métier auditée à l’agent arrêt-able", description: "La capacité d’arrêt, la vérification indépendante et la reprise humaine deviennent des critères de production au-delà de la seule qualité de réponse." }
  ]
};
