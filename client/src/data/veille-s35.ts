export const veilleS35 = {
  week: 35,
  year: 2026,
  publicationDate: "25 août 2026",
  domainsCount: 8,
  sourcesCount: 12,
  criticalCount: 3,
  importantCount: 4,
  actionsCount: 6,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "GOOGLE FAIT PASSER LES AI OVERVIEWS D’UNE SYNTHÈSE À UNE INTERFACE GÉNÉRATIVE INTERACTIVE. LA VISIBILITÉ NE SE JOUE PLUS UNIQUEMENT DANS LE LIEN CITÉ : ELLE DÉPEND AUSSI DE LA CAPACITÉ DU CONTENU À ALIMENTER DES OUTILS, VISUELS ET PARCOURS RÉUTILISABLES PAR L’IA.",
  },

  statDominante: {
    chiffre: "2×",
    titre: "PLUS DE PROBABILITÉ DE CLIC VERS UNE SOURCE PRÉFÉRÉE",
    description: "TechCrunch rapporte le 20 août que Google a enregistré plus de 345 000 sources distinctes sélectionnées depuis mai et que les utilisateurs sont deux fois plus susceptibles de cliquer vers une source préférée lorsqu’elle est proposée. Ce mécanisme ne remplace ni le SEO ni le GEO : il ajoute une couche d’affinité déclarée à une recherche de plus en plus personnalisée.",
  },

  syntheseExecutive: "La S35 confirme un basculement de Search vers des expériences génératives : Google étend les capacités d’UI générative d’AI Mode aux AI Overviews, tandis que Preferred Sources introduit une préférence explicite de l’utilisateur pour certains éditeurs. Côté GEO, l’enjeu se déplace donc de la seule citation vers la capacité à devenir une source reconnue, identifiable et utile dans un parcours sans sortie immédiate. Le changement de parsing JSON-LD de Googlebot impose un contrôle technique rapide : les données doublement échappées ne seront plus corrigées de manière tolérante. Les CMS et CDP évoluent simultanément vers une couche de contexte, de contenu structuré et de décision temps réel destinée aux agents, ce qui rehausse les exigences de qualité, d’interopérabilité et de gouvernance. En UX, une étude relayée le 21 août sur un bot d’entretien IA rappelle que l’automatisation conversationnelle doit être évaluée sur la profondeur, la neutralité et le respect du protocole, non sur le seul volume de verbatims. Enfin, la mise en production agentique devient un sujet de contrôle des capacités : inventaire, périmètre réduit, approbation avant action sensible, traçabilité et conformité Article 50 doivent être conçus ensemble.",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Zero-Click / GEO", "Schema.org", "DXP / Headless", "CDP & Data", "UX / IA", "IA / Gouvernance", "Innovation Marketing"],
    sources: ["Google Blog", "TechCrunch", "Search Engine Journal", "Search Engine Roundtable", "Optimizely", "CMSWire", "UX Tigers", "Harvard Law School Forum", "VentureBeat", "Simmons & Simmons", "Microsoft Advertising", "Marketing Dive"],
    critiques: ["Google AI Search : l’UI générative commence son déploiement dans AI Overviews — le résultat devient une expérience, pas seulement une réponse", "Schema.org : Googlebot n’effectue plus qu’un passage de déséchappement HTML pour JSON-LD — un markup fragile peut désormais perdre sa lisibilité", "IA / Gouvernance : l’Article 50 est applicable et les agents doivent être limités par mandat, droits, validation et journalisation"],
    importants: ["Zero-Click / GEO : Preferred Sources transforme la préférence déclarée en signal de distribution ; 345 000 sources ont déjà été sélectionnées", "DXP / Headless : les CMS industrialisent contenu structuré, visibilité agentique et assistants éditoriaux", "CDP & Data : le CDP devient une couche de contexte fiable pour les agents, au-delà du profil unifié", "UX / IA : un bot d’entretien IA approfondit seulement 4,9 % de ses tours — profondeur et neutralité doivent être conçues"],
    actions: ["Auditer les contenus TBS Education susceptibles d’alimenter une UI générative : simulations, comparateurs, quiz, preuves et ressources réutilisables", "Lancer une vérification automatisée de tous les JSON-LD : parse JSON strict, rendu serveur, absence de double échappement et validation Rich Results", "Mettre en place un suivi mensuel de la préférence de marque dans les surfaces Google, les citations IA et les parcours post-citation", "Définir une grille d’architecture agent-ready pour le CMS/CDP : contenu structuré, API, droits, données fiables, journalisation et validation", "Maintenir un inventaire des assistants et agents utilisés par TBS Education avec propriétaire métier, données accessibles, actions autorisées et point de contrôle humain", "Pour toute expérimentation marketing IA, exiger une mesure indépendante ou un protocole de test documenté avant de comparer des performances entre plateformes"],
    emergents: ["La recherche devient une surface d’outils générés, pas seulement une page de réponses", "La préférence de source ajoute une couche de fidélité explicite dans les parcours zero-click", "Le JSON-LD devient une dépendance de production à tester comme du code", "Les CDP concurrencent désormais sur le contexte décisionnel et l’activation temps réel, pas sur le volume de profils", "Le contrôle de l’autonomie devient un sujet d’architecture, de sécurité et d’expérience utilisateur"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "AI OVERVIEWS COMMENCE À DEVENIR UNE INTERFACE GÉNÉRATIVE",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "Google confirme que les capacités d’UI générative, déjà disponibles mondialement en anglais dans AI Mode, commencent à être déployées dans AI Overviews. Search peut désormais produire des visuels interactifs, simulations, quiz et fichiers à partir d’une intention, plutôt que renvoyer uniquement une synthèse et des liens.",
      category: "GOOGLE",
      sources: [
        { nom: "Google Blog", url: "https://blog.google/products-and-platforms/products/search/back-to-school-study-tools/" },
        { nom: "Search Engine Journal", url: "https://www.searchenginejournal.com/google-expands-generative-ui-beyond-ai-mode-into-ai-overviews/586452/" }
      ],
      details: [
        "L’UI générative est disponible mondialement en anglais dans AI Mode",
        "Son déploiement a commencé dans AI Overviews, selon Google",
        "Les usages annoncés couvrent visuels, simulations, quiz, notebooks et création de fichiers",
        "Les quiz sont disponibles dans AI Overviews et AI Mode en anglais",
        "L’optimisation doit désormais considérer les contenus comme des composants réutilisables, pas seulement des pages à classer"
      ],
      longDescription: "L’annonce Google du 19 août modifie la nature même de la surface Search. Les capacités d’UI générative disponibles dans AI Mode commencent à apparaître dans AI Overviews : une requête peut déboucher sur une visualisation, un outil, une simulation ou un exercice interactif. Pour l’enseignement supérieur, le signal dépasse la question du trafic. Les contenus programme, métiers, admissions ou financement peuvent être consommés sous forme de réponses actives avant que l’utilisateur ne visite un site. La priorité pour TBS Education est donc de renforcer les briques qui supportent une réutilisation fiable : définitions explicites, faits vérifiables, données structurées, exemples, parcours de comparaison et contenus de preuve. Il ne s’agit pas de produire des mini-outils pour suivre une tendance ; il faut d’abord identifier les questions candidat où un format interactif apporte réellement une compréhension supérieure à une page éditoriale. Les équipes devront suivre la disponibilité réelle en France et dans l’EEE, les sources citées par ces expériences, ainsi que la continuité proposée vers les pages TBS Education. Une présence dans l’expérience Google ne garantit ni clic ni conversion : elle doit être reliée à des signaux aval et à une expérience de site capable de prolonger la recherche." 
    },
    {
      id: 2,
      code: "ZERO-CLICK",
      titre: "PREFERRED SOURCES AJOUTE UNE COUCHE DE PRÉFÉRENCE AU GEO",
      badge: "IMPORTANT",
      previousBadge: "CRITIQUE",
      description: "Google permet aux éditeurs d’intégrer un bouton afin que leurs lecteurs les déclarent comme source préférée dans Search, Discover et Google News. TechCrunch rapporte plus de 345 000 sources sélectionnées depuis mai et une probabilité de clic deux fois plus élevée vers une source préférée lorsqu’elle est proposée.",
      category: "GEO",
      sources: [
        { nom: "TechCrunch", url: "https://techcrunch.com/2026/08/20/google-gives-publishers-a-new-way-to-fight-ai-driven-traffic-losses/" },
        { nom: "Search Engine Roundtable", url: "https://www.seroundtable.com/recap-08-21-2026-41922.html" }
      ],
      details: [
        "Le bouton peut inviter un lecteur à sélectionner un éditeur dans Google Search, Discover et News",
        "Plus de 345 000 sources distinctes auraient été sélectionnées depuis le lancement de mai",
        "Google indique une probabilité de clic deux fois plus élevée vers une source préférée proposée",
        "La fonctionnalité exprime une préférence utilisateur ; elle ne constitue pas un levier de ranking SEO déclaré",
        "La valeur GEO dépend davantage de la relation de confiance, de la preuve et de l’utilité perçue"
      ],
      longDescription: "Preferred Sources donne une forme concrète à un sujet longtemps traité comme immatériel : la préférence de marque dans une recherche où les clics deviennent plus rares. Le 20 août, TechCrunch rapporte que Google permet aux éditeurs d’ajouter un bouton pour aider leurs lecteurs à déclarer une source préférée dans Search, Discover et News. Google a, selon l’article, enregistré plus de 345 000 sources sélectionnées depuis le lancement et observe que les utilisateurs sont deux fois plus susceptibles de cliquer vers une source préférée lorsqu’elle est proposée. Cette donnée doit être lue avec prudence : elle vient de Google et ne démontre ni un gain de visibilité universel ni un effet causal sur le classement. Pour TBS Education, l’intérêt est stratégique plutôt que tactique. Les contenus doivent créer une raison explicite de revenir vers la marque : expertise identifiable, informations à jour, transparence sur les programmes, ressources téléchargeables et réponses utiles aux situations concrètes. Une éventuelle intégration du bouton devra respecter l’expérience de lecture et faire l’objet d’un test mesuré, sans promesse de trafic. Le tableau de bord GEO doit donc rapprocher préférence de source, demande de marque, citations, referrals identifiables et conversions déclaratives, au lieu de réduire le sujet à un seul indicateur de clic." 
    },
    {
      id: 3,
      code: "SCHEMA.ORG",
      titre: "GOOGLEBOT DURCIT L’EXTRACTION JSON-LD : LE MARKUP DOIT ÊTRE TESTÉ COMME DU CODE",
      badge: "CRITIQUE",
      previousBadge: "IMPORTANT",
      description: "Googlebot n’applique désormais qu’un seul passage de déséchappement HTML lors de l’extraction JSON-LD. Les données structurées doublement échappées, auparavant parfois tolérées par le crawler, risquent de ne plus être interprétées. La conformité syntaxique devient un prérequis de production.",
      category: "SEO",
      sources: [
        { nom: "Search Engine Roundtable", url: "https://www.seroundtable.com/recap-08-21-2026-41922.html" }
      ],
      details: [
        "Googlebot ne fait plus qu’un passage de déséchappement HTML pour JSON-LD",
        "Le changement vise l’alignement avec les standards JSON",
        "Les blocs injectés par des gabarits, tags managers ou composants tiers sont les plus exposés",
        "Un JSON-LD valide dans le code source ne garantit pas sa présence correcte dans le HTML rendu",
        "La validation technique doit couvrir syntaxe, rendu, unicité et cohérence avec le contenu visible"
      ],
      longDescription: "Le changement signalé le 21 août par Search Engine Roundtable paraît technique, mais son effet peut être direct sur la lisibilité des contenus par Google. Le crawler ne corrige plus de manière tolérante certaines chaînes JSON-LD doublement échappées : il n’applique désormais qu’un seul passage de déséchappement HTML pour rester conforme aux standards. Les sites qui génèrent leurs données structurées depuis un CMS, un gestionnaire de tags ou des composants front-end peuvent donc perdre des propriétés interprétables sans modification éditoriale visible. Pour TBS Education, l’action n’est pas d’ajouter davantage de balisage ; elle consiste à fiabiliser le balisage existant. Un contrôle doit porter sur les pages admissions, programmes, campus, actualités et événements : récupération du HTML rendu, parse JSON strict, comparaison avec le contenu visible, vérification des types et propriétés réellement attendus, puis surveillance dans Search Console. Cette discipline est particulièrement utile alors que les expériences génératives réutilisent des informations structurées et qu’un défaut de production peut affecter simultanément le SEO classique, les résultats enrichis et la compréhension par les systèmes d’IA. Le correctif relève autant de l’assurance qualité front-end que de la gouvernance SEO." 
    },
    {
      id: 4,
      code: "DXP / HEADLESS",
      titre: "LE CMS DEVIENT UNE COUCHE DE CONTENU STRUCTURÉ POUR ÉDITEURS ET AGENTS",
      badge: "IMPORTANT",
      previousBadge: "À SURVEILLER",
      description: "Les notes de version CMS 13 d’Optimizely, mises à jour le 21 août, confirment l’industrialisation de briques agentiques : agents de modèle de contenu, optimisation GEO/Schema, métadonnées SEO, visibilité des agents et versions markdown destinées aux agents.",
      category: "ARCHI",
      sources: [
        { nom: "Optimizely", url: "https://support.optimizely.com/hc/en-us/articles/44937048830221-2026-Optimizely-CMS-13-release-notes" }
      ],
      details: [
        "Les composants Opal couvrent modèle de contenu, GEO/Schema et métadonnées SEO",
        "Le tableau de visibilité des agents exploite logs CDN et insights générés",
        "Le markdown pour agents est proposé en bêta à l’edge, sans changer l’expérience humaine",
        "Les évolutions de Graph renforcent l’indexation, les champs calculés et les contrats de contenu",
        "L’enjeu architecture est la qualité du modèle de contenu, pas l’ajout isolé d’un assistant rédactionnel"
      ],
      longDescription: "Les notes de version Optimizely CMS 13 mises à jour le 21 août illustrent une transformation qui dépasse un fournisseur : le CMS devient une couche de contenu exploitable par des personnes, des moteurs, des APIs et des agents. Les fonctions documentées couvrent la création de modèles de contenu, l’optimisation GEO et Schema, la génération de métadonnées SEO, la visibilité des agents et une option de diffusion markdown à destination des agents. Ces capacités ne doivent pas être lues comme une raison de remplacer une plateforme : elles décrivent les propriétés que les architectures éditoriales devront progressivement maîtriser. Pour TBS Education, la question structurante est la capacité du modèle de contenu à rendre les informations programmes, formations, admissions, événements et expertises cohérentes, versionnées et réutilisables. Une architecture agent-ready exige aussi des droits explicites : un agent peut suggérer un enrichissement, mais ne doit pas publier ni modifier une donnée de référence sans contrôle. La priorité est donc un audit de maturité : granularité des contenus, API disponibles, métadonnées, gestion des langues, cycle de validation, traçabilité et possibilité de séparer le contenu source des adaptations de canal. C’est ce socle qui rend un CMS compatible avec le GEO, la personnalisation et l’automatisation future." 
    },
    {
      id: 5,
      code: "CDP & DATA",
      titre: "L’AGENTIC CDP DÉPLACE LE JEU DU PROFIL VERS LE CONTEXTE DE DÉCISION",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "CMSWire observe que les offres d’Hightouch et de Databricks redéfinissent le CDP : l’enjeu n’est plus seulement d’unifier les profils, mais de fournir aux agents un contexte client fiable, gouverné et actualisé pour décider et agir en temps réel.",
      category: "CDP",
      sources: [
        { nom: "CMSWire", url: "https://www.cmswire.com/customer-data-platforms/is-the-agentic-customer-data-platform-just-marketing-or-a-real-shift/" }
      ],
      details: [
        "Le CDP agentique promet du contexte client de confiance pour les agents",
        "L’architecture ouverte, l’interopérabilité et la qualité de donnée deviennent des critères centraux",
        "La résolution d’identité et l’activation temps réel doivent être gouvernées au plus près de la source de vérité",
        "Le débat se déplace vers le decisioning, pas seulement le stockage de profils",
        "Le coût d’une erreur augmente lorsque le contexte pilote une action, et non une simple segmentation"
      ],
      longDescription: "L’analyse publiée par CMSWire le 19 août clarifie la bascule derrière l’expression « Agentic CDP ». Le marché ne se contente plus de promettre un profil client unifié ; il cherche à fournir aux agents un contexte fiable, gouverné et actualisé afin de recommander ou d’orchestrer une action. Dans ce modèle, le critère de choix ne peut plus être une liste de connecteurs ou de segments disponibles. Il porte sur l’architecture ouverte, la qualité et la fraîcheur des données, la résolution d’identité, l’interopérabilité avec CRM et marketing automation, ainsi que les règles de consentement et de droits. Pour TBS Education, cette évolution doit être traitée avec prudence. Un contexte candidat ou prospect peut améliorer un accompagnement s’il est exact, pertinent et consenti ; il peut aussi amplifier une erreur de qualification, une donnée obsolète ou un mauvais niveau d’autorisation. Avant tout scénario agentique, il faut définir les données de référence, les finalités d’usage, les attributs sensibles, les délais de mise à jour, les mécanismes de correction et les personnes responsables. La promesse d’activation temps réel ne justifie jamais une automatisation opaque. La valeur est créée lorsque l’organisation peut expliquer quelle donnée a influencé quelle recommandation, puis corriger la décision si nécessaire." 
    },
    {
      id: 6,
      code: "UX / IA",
      titre: "UN AGENT CONVERSATIONNEL NE REMPLACE PAS UN PROTOCOLE DE RECHERCHE UX",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Un résumé UX publié le 21 août rapporte les résultats d’InterviewBot, un bot vocal GPT-4o ayant mené 15 entretiens semi-structurés : il n’a approfondi que 4,9 % de ses tours, a posé plusieurs questions dans 29 % des tours interrogatifs et a recouru à des formulations valorisantes pouvant biaiser les réponses.",
      category: "UX",
      sources: [
        { nom: "UX Tigers", url: "https://www.uxtigers.com/post/ux-roundup-20260821" },
        { nom: "arXiv", url: "https://arxiv.org/abs/2608.10412" }
      ],
      details: [
        "L’étude citée s’appuie sur 15 entretiens semi-structurés menés par un bot vocal GPT-4o",
        "Le bot n’a produit un approfondissement que dans 4,9 % des tours analysés",
        "29 % des tours contenant une question comportaient au moins deux questions",
        "Les réponses valorisantes ou suggestives peuvent orienter le discours du participant",
        "Les usages à grande échelle exigent des critères de profondeur, neutralité, respect du script et reprise humaine"
      ],
      longDescription: "La recherche utilisateur assistée par IA ne doit pas être confondue avec la simple automatisation de conversations. Le 21 août, UX Tigers résume une étude sur InterviewBot : un bot vocal GPT-4o a réalisé 15 entretiens semi-structurés, mais n’a approfondi un propos que dans 4,9 % des tours analysés. L’analyse rapportée constate aussi plusieurs questions dans 29 % des tours interrogatifs, ainsi que des formulations valorisantes susceptibles d’orienter les répondants. L’échantillon est limité et porte sur un modèle antérieur ; il ne permet donc pas de qualifier tous les outils ou modèles actuels. Il livre néanmoins une règle de conception robuste pour TBS Education : un assistant d’entretien ou de qualification doit être évalué sur la profondeur des relances, la neutralité, le respect du protocole, les interruptions et la capacité de reprise humaine. Il est adapté à une collecte large, précoce ou peu sensible, à condition d’informer clairement le participant qu’il interagit avec une IA. Il ne doit pas se substituer à un chercheur humain lorsqu’il faut interpréter une ambiguïté, explorer une contradiction ou recueillir un retour à enjeu. Les objectifs, scripts, règles de relance, garde-fous et critères de qualité doivent être configurés et testés avant déploiement." 
    },
    {
      id: 7,
      code: "IA / GOV",
      titre: "LA GOUVERNANCE DES AGENTS SE JOUE DANS LE PÉRIMÈTRE D’ACTION, PAS DANS LE PROMPT",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "Harvard Law School Forum relaie qu’environ trois entreprises sur quatre prévoient de déployer de l’IA agentique sous deux ans, alors qu’une sur cinq seulement disposerait d’une gouvernance mature. En parallèle, l’Article 50 du règlement européen sur l’IA est désormais applicable pour les obligations de transparence.",
      category: "IA",
      sources: [
        { nom: "Harvard Law School Forum", url: "https://corpgov.law.harvard.edu/2026/08/21/ai-governance-for-private-companies/" },
        { nom: "VentureBeat", url: "https://venturebeat.com/orchestration/enterprises-winning-with-ai-agents-are-limiting-how-much-the-agents-can-do-alone" },
        { nom: "Simmons & Simmons", url: "https://www.simmons-simmons.com/en/publications/cmt09z0uq0056uzywe1qk2rmr/ai-view:august-2026" }
      ],
      details: [
        "Wellington Management indique que près de 75 % des entreprises prévoient l’IA agentique dans les deux ans, mais seulement 20 % disposent d’une gouvernance mature",
        "VentureBeat relaie la prévision Gartner de plus de 40 % de projets agentiques annulés avant 2028",
        "Les pratiques recommandées : agent à périmètre étroit, validation avant action à enjeu, journalisation et droits minimaux",
        "L’Article 50 rend applicables des obligations de transparence pour certaines interactions et certains contenus IA depuis le 2 août",
        "La conformité doit être reliée à l’architecture : inventaire, attribution, autorisation, supervision, évaluation et réponse aux incidents"
      ],
      longDescription: "La S35 rassemble plusieurs sources qui convergent sur un point : la difficulté des agents n’est plus de générer une réponse plausible, mais de maîtriser les actions qu’ils peuvent déclencher. Harvard Law School Forum relaie, sur la base d’une enquête Wellington Management citant Deloitte, que près de trois entreprises sur quatre envisagent un déploiement agentique dans les deux ans, alors qu’une sur cinq seulement dispose d’une gouvernance mature. VentureBeat rappelle pour sa part une prévision Gartner selon laquelle plus de 40 % des projets agentiques en cours pourraient ne pas survivre jusqu’en 2028. Ces chiffres décrivent des échantillons et projections spécifiques ; ils ne constituent pas un benchmark automatique pour TBS Education. Ils justifient néanmoins une méthode prudente : un agent, un mandat borné ; des permissions minimales ; une approbation humaine avant toute publication, modification CRM, transaction, interaction externe ou accès sensible ; un journal d’exécution ; et un moyen d’arrêt immédiat. Depuis le 2 août, les obligations de transparence Article 50 applicables dans l’Union européenne renforcent cette exigence de conception responsable. Le bon livrable n’est pas un prompt, mais une fiche d’agent complète : objectif, propriétaire, données, outils, risques, contrôle humain, indicateurs et procédure d’incident." 
    },
    {
      id: 8,
      code: "INNOVATION MKT",
      titre: "LE COMMERCE AGENTIQUE FAIT DU FLUX PRODUIT STRUCTURÉ UN ACTIF MARKETING",
      badge: "À SURVEILLER",
      previousBadge: "IMPORTANT",
      description: "Microsoft Advertising, en s’appuyant notamment sur Adobe Analytics, présente l’IA comme le canal retail à la plus forte croissance pendant les fêtes 2025 : +693 % de trafic sur un an et une conversion des visiteurs référés par IA supérieure de 42 % au T1 2026. L’ANA appelle parallèlement à des métriques retail media comparables et indépendantes.",
      category: "INNOV MKT",
      sources: [
        { nom: "Microsoft Advertising", url: "https://about.ads.microsoft.com/en/blog/post/august-2026/how-businesses-win-when-ai-does-the-shopping" },
        { nom: "Marketing Dive", url: "https://www.marketingdive.com/news/ana-cautions-marketers-against-overreliance-on-retail-media-data/828109/" }
      ],
      details: [
        "Microsoft cite Adobe Analytics : trafic retail IA +693 % sur un an pendant les fêtes 2025",
        "Microsoft cite Adobe Analytics : les visiteurs référés par IA convertissent 42 % mieux au T1 2026",
        "Les agents achètent et recommandent à partir de données produit complètes, structurées et à jour",
        "L’ANA demande un cadre commun et une mesure indépendante du retail media",
        "Les comparaisons entre régies nécessitent des définitions homogènes d’exposition, de clic, d’attribution et d’incrémentalité"
      ],
      longDescription: "Le commerce agentique transforme une donnée longtemps traitée comme une contrainte opérationnelle — le flux produit — en actif de visibilité et de conversion. Le 21 août, Microsoft Advertising cite Adobe Analytics : pendant les fêtes 2025, le trafic retail provenant de l’IA aurait progressé de 693 % sur un an et, au T1 2026, les visiteurs référés par IA auraient converti 42 % mieux que le trafic non-IA. Ces chiffres concernent le retail et ne sont pas transposables aux parcours de recrutement étudiant. Le signal reste pertinent : un assistant recommande ce qu’il peut identifier, comparer et justifier grâce à des données complètes et fraîches. Pour TBS Education, l’équivalent d’un flux produit est un référentiel de formation structuré : programme, niveau, durée, campus, modalités, conditions d’admission, calendrier, débouchés, coût et sources de preuve. L’enjeu est de rendre ces informations cohérentes entre site, CRM, plateformes de diffusion et réponses d’assistants. En parallèle, l’ANA appelle à une mesure retail media plus comparable et indépendante. Cette mise en garde vaut pour toute promesse d’IA marketing : sans définitions d’attribution, sans groupe de comparaison et sans accès aux données brutes, un tableau de bord plateforme ne suffit pas à conclure à un impact incrémental." 
    }
  ],

  actions: [
    { id: 1, titre: "Cartographier les questions candidat où une UI générative apporte une valeur démontrable, puis renforcer les contenus de référence, preuves et ressources nécessaires", domaine: "SEARCH / CONTENU", responsable: "SEO + ÉDITORIAL" },
    { id: 2, titre: "Contrôler tous les JSON-LD rendus des gabarits stratégiques : parse JSON strict, absence de double échappement, cohérence entre HTML visible et balisage", domaine: "SEO / TECHNIQUE", responsable: "DEV + SEO" },
    { id: 3, titre: "Tester une stratégie de préférence de source sur des contenus éditoriaux à forte valeur, en mesurant clics, demande de marque et retours qualitatifs sans promesse de ranking", domaine: "GEO / ÉDITORIAL", responsable: "ÉDITORIAL + ANALYTICS" },
    { id: 4, titre: "Évaluer la maturité agent-ready du CMS et du référentiel formations : structure, API, métadonnées, droits, versions, validation et journalisation", domaine: "ARCHITECTURE / DATA", responsable: "DIGITAL + DSI" },
    { id: 5, titre: "Créer une fiche de contrôle obligatoire pour chaque agent : mandat, propriétaire, données, outils, actions, approbation humaine, logs et arrêt d’urgence", domaine: "GOUVERNANCE / SÉCURITÉ", responsable: "DSI + JURIDIQUE + MÉTIERS" },
    { id: 6, titre: "Imposer une méthode de mesure indépendante aux pilotes marketing IA : définition d’objectif, hypothèse, comparaison, attribution, coût et décision de poursuite", domaine: "MARKETING / DATA", responsable: "DATA + ACQUISITION" }
  ],

  signauxEmergents: [
    { titre: "La recherche générative devient interactive", description: "La réponse synthétique se complète de simulations, outils et fichiers. La capacité à fournir des faits structurés et des parcours de preuve gagne en importance.", horizon: "IMMÉDIAT" },
    { titre: "La préférence de source devient un actif de distribution", description: "Les signaux de marque et de confiance peuvent influencer le choix de la source dans des parcours où la sortie vers le site n’est plus systématique.", horizon: "COURT TERME (Q3 2026)" },
    { titre: "Le balisage devient une dépendance de production", description: "L’évolution du parsing Googlebot impose des contrôles continus de JSON-LD rendu, au même titre que les redirections, le canonique ou le sitemap.", horizon: "IMMÉDIAT" },
    { titre: "Le CDP devient une couche de décision sous contrôle", description: "La qualité, la fraîcheur et les droits d’accès au contexte client déterminent la fiabilité des recommandations ou actions agentiques.", horizon: "COURT TERME (Q3-Q4 2026)" },
    { titre: "Le design d’IA doit préserver l’exploration", description: "La vitesse de génération rend indispensables des interfaces de comparaison, curation, annotation et validation avant convergence vers une solution.", horizon: "MOYEN TERME (2026-2027)" }
  ],

  tendancesPassees: [
    { titre: "De la visibilité générative à l’expérience générative", description: "S34 mesurait les impressions dans Search Console. S35 montre l’évolution de l’interface : AI Overviews commence à produire des outils et interactions, ce qui élargit la question de la présence au-delà de la citation." },
    { titre: "Du score GEO à la préférence de marque", description: "S28-S34 ont installé la logique de portefeuille de signaux. S35 ajoute une préférence explicitement déclarée : la visibilité IA dépend aussi de la confiance et de l’utilité reconnue par l’utilisateur." },
    { titre: "De Schema comme enrichissement à Schema comme contrôle qualité", description: "Les semaines précédentes soulignaient le rôle du contenu structuré pour les moteurs. Le changement de parsing Googlebot rappelle qu’un balisage non conforme peut être un incident de production." },
    { titre: "Du CDP au contexte pour agents", description: "S26-S34 ont suivi l’arrivée des Agentic CDP. S35 stabilise le critère d’arbitrage : un contexte fiable, gouverné, temps réel et explicable vaut plus qu’un profil centralisé mais inactif." },
    { titre: "De l’autonomie à l’autorisation", description: "S33-S34 avaient mis en évidence les risques d’agents hors mandat. S35 traduit ce fil rouge en design opérationnel : périmètre étroit, droits minimaux, validation avant action, logs et arrêt." }
  ]
};
