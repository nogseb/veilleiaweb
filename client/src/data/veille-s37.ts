export const veilleS37 = {
  week: 37,
  year: 2026,
  publicationDate: "7 septembre 2026",
  domainsCount: 8,
  sourcesCount: 12,
  criticalCount: 3,
  importantCount: 4,
  actionsCount: 6,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "LA VISIBILITÉ GÉNÉRATIVE ENTRE DANS LE PILOTAGE : GOOGLE OUVRE À TOUS LES SITES LE RAPPORT AI SEARCH ET LE CONTRÔLE ASSOCIÉ. LA PRIORITÉ N’EST PLUS D’ÊTRE PRÉSENT PAR DÉFAUT, MAIS DE MESURER, ARBITRER ET ASSUMER SA STRATÉGIE.",
  },

  statDominante: {
    chiffre: "8,3×",
    titre: "PLUS DE TOKENS PRODUITS PAR LES ENTREPRISES LES PLUS AVANCÉES",
    description: "OpenAI indique que les entreprises du décile supérieur de son étude Enterprise Signals génèrent 8,3 fois plus de tokens par utilisateur actif que le décile médian, contre 2,6 fois en janvier. Ce chiffre est propre aux données OpenAI : il signale surtout que la valeur vient de workflows outillés et mesurés, pas d’un usage conversationnel isolé.",
  },

  syntheseExecutive: "La S37 fait passer la recherche générative du constat au pilotage : le rapport AI Search de Google Search Console devient disponible à tous les sites, avec une lecture des impressions et des surfaces, mais sans clics ni requêtes. Les données Ahrefs confirment que la citation s’appuie fortement sur des plateformes de contenu et de communauté ; le GEO doit donc combiner socle technique, autorité éditoriale et présence de marque. En revanche, une nouvelle analyse rappelle que le balisage JSON-LD seul ne déclenche pas mécaniquement les citations IA : Schema.org reste une condition de lisibilité, non une garantie de sélection. Côté architecture, l’évolution de Webflow vers une couche code-first et accessible via MCP montre que le CMS devient le poste de coordination entre humains et agents. Pour les données client, le choix se déplace de la seule solution CDP vers l’emplacement de l’intelligence, des droits et de la décision. Les agents progressent en entreprise, mais les modèles les plus avancés renforcent également l’exigence de contrôle, de limitation d’accès et de preuve. Enfin, l’innovation marketing dépend toujours de données et de mesures comparables : l’IA accélère le dispositif, elle ne répare pas ses fondations.",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Zero-Click / GEO", "Schema.org", "DXP / Headless", "CDP & Data", "UX / IA", "IA / Gouvernance", "Innovation Marketing"],
    sources: ["Google Search Central / Search Engine Roundtable", "Ahrefs", "CMSWire", "MarTech.org", "LiveRamp", "Nielsen Norman Group", "OpenAI", "IAB Australia", "IFA Berlin"],
    critiques: ["Google AI Search : un reporting génératif disponible sans clic ni requête impose de compléter la mesure avec les données de parcours et de conversion", "IA / gouvernance : les agents capables d’utiliser des outils exigent mandat, droits minimaux, supervision et arrêt documenté", "CDP & Data : l’agentification ne peut reposer que sur une identité résolue, une donnée fraîche et des règles de consentement exploitables"],
    importants: ["GEO : les plateformes citées dans AI Overviews concentrent une part importante de la visibilité et déplacent le travail vers l’autorité éditoriale", "Schema.org : le JSON-LD favorise la lisibilité mais ne garantit pas une citation générative", "DXP / Headless : les interfaces CMS s’ouvrent aux agents ; versions, permissions et publication deviennent des contrôles produit", "UX / IA : le prototypage IA rend possible le test anticipé d’interactions conversationnelles complexes, sans dispenser d’une revue experte"],
    actions: ["Créer une grille de pilotage AI Search combinant impressions génératives, pages concernées, citations observées, visites, actions aval et décisions d’opt-out", "Prioriser les contenus que des sources externes crédibles peuvent naturellement citer : expertise nommée, données primaires, réponses vérifiables et formats comparables", "Maintenir Schema.org comme socle de cohérence du contenu visible, avec tests de rendu et de validité, sans en faire un KPI de citation IA", "Définir, avant tout accès agentique au CMS, les rôles lecture / brouillon / modification / publication, les validations et les journaux d’action", "Arbitrer l’architecture CDP selon l’emplacement du contexte client, de la décision et de la responsabilité, plutôt que sur une liste de fonctions", "Imposer à chaque agent un périmètre de tâche, des sources de preuve, une validation humaine et un mécanisme d’arrêt proportionnés au risque"],
    emergents: ["La Search Console se dote d’une couche de visibilité générative, mais la causalité vers la conversion reste à reconstruire", "La présence de marque dans les assistants dépend davantage de l’autorité observée que d’un balisage technique isolé", "Le CMS devient un espace de collaboration humain-agent, structuré par le code, les rôles et le versioning", "La CDP évolue vers une couche de contexte gouverné, mise à disposition de la décision automatisée", "La physical AI progresse par coordination de tâches, perception et contrôle, non par autonomie générale"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "AI SEARCH CONSOLE DEVIENT UN SUJET DE PILOTAGE, PAS UN SIMPLE RAPPORT",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "Google ouvre à tous les propriétaires de sites son rapport de performance des fonctionnalités génératives et le contrôle associé. Le rapport expose des impressions et des dimensions de surface, mais ne donne ni clics ni requêtes : il faut donc le raccorder au dispositif analytique existant.",
      category: "GOOGLE",
      sources: [
        { nom: "Search Engine Roundtable", url: "https://www.seroundtable.com/google-search-console-generative-ai-tools-live-41984.html" },
        { nom: "Search Engine Roundtable", url: "https://www.seroundtable.com/sept-2026-google-webmaster-report-41979.html" }
      ],
      details: [
        "Le rapport et le contrôle Search génératif sont annoncés comme accessibles à tous les sites",
        "Les dimensions disponibles incluent impressions, pages, pays, appareils et dates",
        "Les clics et les requêtes ne sont pas fournis dans ce rapport spécifique",
        "La donnée décrit une présence, pas un effet direct sur l’acquisition",
        "Le choix de participation ou de blocage doit être documenté par type de contenu"
      ],
      longDescription: "L’ouverture généralisée du rapport AI Search change la nature de la discussion : la présence dans les fonctionnalités génératives peut désormais être suivie dans un outil de référence, mais elle ne se réduit pas à un compteur de clics. Les dimensions publiées — impressions, pages, pays, appareils et dates — permettent d’identifier les zones d’exposition. L’absence de requêtes et de clics impose cependant de croiser cette lecture avec les données web analytics, la recherche de marque, les formulaires, les prises de rendez-vous et les autres actions aval. Pour TBS Education, le bon pilotage consiste à sélectionner quelques familles de pages à enjeu : programmes, admissions, financement, alternance et vie de campus. Pour chacune, il faut définir l’objectif de présence, le risque éventuel de réponse sans visite, le contenu propriétaire qui justifie l’approfondissement et l’indicateur de décision. L’opt-out n’est ni une protection automatique ni une erreur par principe : c’est un arbitrage documenté. La gouvernance doit conserver les paramètres choisis, la date, le périmètre et le résultat observé, afin d’éviter qu’une modification technique ne soit interprétée après coup comme une preuve causale."
    },
    {
      id: 2,
      code: "ZERO-CLICK",
      titre: "LES CITATIONS AI OVERVIEWS SE CONCENTRENT SUR DES ÉCOSYSTÈMES DE CONTENU",
      badge: "CRITIQUE",
      previousBadge: "IMPORTANT",
      description: "L’analyse Ahrefs de plus de 3 millions de requêtes américaines suivies par Brand Radar place YouTube, Reddit et Facebook parmi les domaines les plus cités dans AI Overviews. Le signal GEO est clair : l’autorité observée dépasse le seul classement d’une page propriétaire.",
      category: "GEO",
      sources: [
        { nom: "Ahrefs", url: "https://ahrefs.com/blog/most-cited-domains-ai-overviews/" }
      ],
      details: [
        "L’étude suit plus de 3 millions de requêtes américaines via Brand Radar",
        "YouTube représente 22,9 % de la part de mentions des 50 premiers domaines cités",
        "Reddit atteint 18,5 % et Facebook 10,1 % dans ce classement",
        "La méthodologie mesure des mentions dans AI Overviews, pas la conversion ni la qualité des visites",
        "Le GEO doit intégrer les contenus de preuve, d’expertise et de communauté"
      ],
      longDescription: "La photographie Ahrefs ne dit pas que les plateformes sociales remplacent le site institutionnel ; elle montre que Google AI Overviews puise largement ses citations dans des environnements où l’information est abondante, renouvelée et socialement validée. Sur le périmètre mesuré, YouTube concentre 22,9 % de la part de mentions des cinquante premiers domaines, suivi par Reddit et Facebook. Ces chiffres sont propres à la méthodologie Brand Radar et au corpus américain ; ils ne préjugent ni de la visibilité de TBS Education ni de l’efficacité d’un canal. Leur valeur opérationnelle est de déplacer la question : l’objectif ne doit plus être uniquement de positionner une URL, mais de rendre l’expertise identifiable et réutilisable dans les sources que les systèmes consultent. Pour TBS Education, cela renforce l’intérêt de contenus experts attribués, de vidéos pédagogiques exploitables, de réponses actualisées aux questions candidat et de mentions éditoriales obtenues légitimement. La priorité reste le site propriétaire comme source de vérité ; les formats externes doivent le prolonger avec cohérence, pas le concurrencer. La mesure doit séparer citations, présence de marque, trafic, qualité des visites et conversion afin de ne pas valoriser une simple exposition."
    },
    {
      id: 3,
      code: "SCHEMA.ORG",
      titre: "LE JSON-LD EST UN SOCLE DE LISIBILITÉ, PAS UNE PROMESSE DE CITATION",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Une analyse CMSWire relayant une étude Ahrefs appariée sur 1 885 pages ne relève pas de hausse mesurable des citations dans AI Mode ou ChatGPT après ajout de JSON-LD. Les données structurées restent nécessaires à la qualité technique, mais ne remplacent ni l’autorité ni la preuve éditoriale.",
      category: "SEO",
      sources: [
        { nom: "CMSWire", url: "https://www.cmswire.com/digital-marketing/does-structured-data-actually-improve-answer-engine-citations/" }
      ],
      details: [
        "L’étude Ahrefs citée porte sur 1 885 pages ayant ajouté du JSON-LD",
        "Le résultat rapporté n’est pas une hausse mesurable de citation dans AI Mode ou ChatGPT",
        "L’étude porte sur des pages déjà citées dans AI Overviews, limite reconnue par les auteurs",
        "Google ne demande pas de balisage spécial pour AI Overviews ou AI Mode",
        "Le balisage doit continuer à refléter fidèlement le contenu visible et les entités réelles"
      ],
      longDescription: "La semaine apporte un correctif utile à une promesse trop simple : ajouter du JSON-LD ne suffit pas à obtenir des citations génératives. CMSWire rapporte une étude Ahrefs appariée sur 1 885 pages ayant ajouté des données structurées, sans hausse mesurable dans AI Mode ou ChatGPT. L’analyse souligne aussi une limite : les pages du corpus disposaient déjà de nombreuses citations AI Overviews, ce qui ne permet pas de conclure sur les situations de découverte initiale. Pour TBS Education, la conséquence est méthodologique. Schema.org demeure essentiel pour rendre des objets comme les programmes, événements, lieux, auteurs ou organisations cohérents, vérifiables et exploitables par les moteurs. Il faut continuer à contrôler le contenu rendu, les identifiants, la fraîcheur, les erreurs de validation et la correspondance entre balisage et page visible. Mais l’investissement GEO principal doit aller vers la qualité des réponses, la preuve primaire, l’expertise attribuée et la reconnaissance externe. Le bon tableau de bord distingue santé technique, rich results éventuels, visibilité de marque et citations génératives. Cela évite de transformer un chantier de données fiable en promesse de performance qui ne pourrait pas être démontrée."
    },
    {
      id: 4,
      code: "DXP / HEADLESS",
      titre: "LE CMS AGENTIQUE SE JOUE DANS LE CODE, LES DROITS ET LE VERSIONING",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Webflow présente Source comme une évolution code-first de sa plateforme. CMSWire rapporte que la connexion de clients entreprise via MCP est passée de près de 2 % à plus de 50 % cette année, ce qui fait du CMS une surface de collaboration humain-agent à gouverner.",
      category: "ARCHI",
      sources: [
        { nom: "CMSWire", url: "https://www.cmswire.com/digital-experience/why-webflow-faces-a-pivotal-moment-in-its-digital-experience-evolution/" }
      ],
      details: [
        "Source place le code, plutôt que le canvas visuel, comme source de vérité selon Webflow",
        "CMSWire rapporte une adoption MCP entreprise passée d’environ 2 % à plus de 50 % en 2026",
        "Le chiffre est une déclaration produit de Webflow relayée par CMSWire",
        "Les coûts principaux demeurent après le lancement : expérimentation, données, contenu et gouvernance",
        "Une surface CMS accessible aux agents doit distinguer lecture, brouillon, modification et publication"
      ],
      longDescription: "Le signal DXP de la semaine est moins l’apparition d’une fonction IA que le déplacement de la source de vérité. Webflow positionne Source comme une couche code-first et indique, via CMSWire, une forte montée de l’usage MCP chez ses clients entreprise. Cette tendance ne se traduit pas par la disparition du CMS : elle renforce au contraire son rôle de lieu où s’alignent contenu, règles, versions, permissions et déploiement. Pour TBS Education, il faut évaluer toute promesse « agent-ready » à partir des contrôles concrets : quelles données l’agent peut-il lire, quelles opérations peut-il préparer, qui valide les changements, quelle trace reste disponible et quel retour arrière est possible ? Les contenus académiques, réglementaires ou commerciaux nécessitent des niveaux d’autorisation distincts. Le code peut devenir une source de vérité utile pour tester, reproduire et auditer, mais il ne remplace ni la responsabilité éditoriale ni l’accessibilité. Une expérimentation raisonnable consiste à faire analyser ou préparer des modifications dans un environnement de brouillon, avec un jeu de scénarios, une revue métier et un journal de différences. Le bénéfice attendu doit être mesuré en délai, qualité et taux de correction, pas seulement en nombre de pages générées."
    },
    {
      id: 5,
      code: "CDP & DATA",
      titre: "LA QUESTION CDP DEVIENT : OÙ VIVENT LE CONTEXTE, LA DÉCISION ET LA RESPONSABILITÉ ?",
      badge: "CRITIQUE",
      previousBadge: "IMPORTANT",
      description: "MarTech oppose deux trajectoires : plateforme intégrée ou approche warehouse-centric où les agents exécutent l’orchestration. Dans les deux cas, l’activation ne tient que si identité, qualité, consentement et droits de décision sont fiables ; LiveRamp cite 55 % de marketeurs dont la donnée first-party reste au moins partiellement cloisonnée.",
      category: "CDP",
      sources: [
        { nom: "MarTech", url: "https://martech.org/the-next-cdp-decision-goes-beyond-the-cdp/" },
        { nom: "LiveRamp", url: "https://liveramp.com/blog/audience-activation" }
      ],
      details: [
        "MarTech décrit une convergence des modèles CDP autour de la composabilité et des agents",
        "L’approche intégrée privilégie cohérence et contrôles centralisés",
        "L’approche warehouse-centric favorise le choix et la flexibilité sous réserve d’une forte maturité data",
        "LiveRamp cite 55 % de marketeurs avec une donnée first-party totalement ou partiellement cloisonnée",
        "L’identité, les permissions, l’exclusion, la mesure et l’optimisation doivent accompagner toute activation"
      ],
      longDescription: "La comparaison des CDP ne peut plus se limiter à une liste de connecteurs ou à une promesse de profil unifié. MarTech décrit un choix entre une plateforme intégrée, qui centralise données, orchestration et contrôles, et une approche warehouse-centric, où les agents exploitent un contexte client gouverné à travers plusieurs applications. LiveRamp rappelle, à partir d’une statistique attribuée à eMarketer, que 55 % des marketeurs font encore face à des données first-party totalement ou partiellement cloisonnées. Pour TBS Education, ce constat précède tout projet d’agent de personnalisation. Il faut savoir où vivent les identités, qui résout les doublons, quelle source prévaut, comment les consentements se propagent, quelles exclusions sont appliquées et qui assume une décision automatisée. Une architecture composable peut offrir de la flexibilité, mais elle exige une gouvernance opérationnelle et des compétences data plus fortes. Une plateforme intégrée peut réduire les frictions, mais accroître la dépendance fournisseur. La décision doit partir des cas d’usage : information candidat, relance, personnalisation de contenu, reporting ou support. Le contexte distribué à un agent doit rester traçable, frais, proportionné et révisable par un humain."
    },
    {
      id: 6,
      code: "UX / IA",
      titre: "LE PROTOTYPAGE IA PERMET DE TESTER L’INCERTITUDE AVANT DE CODER",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Nielsen Norman Group montre que des prototypes interactifs générés avec IA permettent de tester plus tôt des interfaces complexes et conversationnelles, y compris les réponses non déterministes. L’outil accélère le test ; il ne remplace ni les décisions de conception ni la revue de production.",
      category: "UX",
      sources: [
        { nom: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/test-earlier-with-ai/" }
      ],
      details: [
        "Les interfaces conversationnelles comportent de nombreux états et réponses possibles difficiles à simuler statiquement",
        "NN/g recommande de préciser interactions, données, cas limites et critères de test avant le prompt",
        "Les prototypes interactifs peuvent faire émerger des cas inattendus avant le développement",
        "Les données réelles utilisées doivent respecter les règles de protection et de confidentialité",
        "Un prototype haute fidélité ne doit pas être confondu avec un produit prêt pour la production"
      ],
      longDescription: "La valeur UX de l’IA n’est pas seulement de produire une maquette plus vite : elle permet de rendre testables des comportements jusqu’ici trop coûteux à simuler. Nielsen Norman Group cite notamment les interfaces conversationnelles, où une réponse peut dépendre d’une formulation imprévue, d’un contexte ou d’un état de dossier. Pour TBS Education, un prototype agentique peut aider à tester un parcours de question-réponse sur les admissions ou le financement avant de connecter un système réel. Mais le protocole doit rester plus important que l’outil. Avant de générer le prototype, l’équipe définit les questions de recherche, les états à couvrir, les données autorisées, les erreurs possibles et les situations où l’interface doit orienter vers un conseiller humain. Les jeux de données doivent être synthétiques ou strictement protégés. La recommandation de NN/g est particulièrement utile contre l’effet de faux aboutissement : une interface riche, interactive et convaincante peut masquer des problèmes d’accessibilité, de hiérarchie ou d’exactitude. Le test doit donc déboucher sur une décision documentée : ce qui fonctionne, ce qui reste à concevoir, les conditions de passage en production et la responsabilité de la validation métier."
    },
    {
      id: 7,
      code: "IA / GOV",
      titre: "À MESURE QUE LES AGENTS GAGNENT EN CAPACITÉ, LE CONTRÔLE DEVIENT UNE FONCTION PRODUIT",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "OpenAI décrit des écarts d’usage importants entre entreprises et souligne que les workflows les plus avancés reposent sur contexte, outils, tests et revue humaine. Parallèlement, l’éditeur classe Astra à son seuil critique de cybersécurité et annonce des contrôles renforcés pour limiter abus et actions non autorisées.",
      category: "IA",
      sources: [
        { nom: "OpenAI", url: "https://openai.com/index/ai-native-company-workflows/" },
        { nom: "OpenAI", url: "https://openai.com/index/path-to-astra/" }
      ],
      details: [
        "OpenAI indique un écart de 8,3× entre son décile supérieur et son décile médian d’usage entreprise",
        "Les cas présentés combinent contexte persistant, outils autorisés, tests et revue humaine",
        "OpenAI qualifie Astra de premier modèle au seuil Critical de son cadre cybersécurité",
        "Les contrôles annoncés incluent accès limité, refus renforcés, monitoring et arrêt d’activité suspecte",
        "La logique transposable est un agent limité par son mandat, ses droits, ses preuves et ses validations"
      ],
      longDescription: "Les publications OpenAI de la semaine doivent être lues comme deux faces d’un même signal. D’un côté, l’éditeur décrit des entreprises qui rendent des workflows agents réutilisables en y associant contexte, outils, critères de réussite, tests et revue humaine ; il observe un écart de 8,3 fois entre les entreprises du décile supérieur d’usage et le décile médian. De l’autre, OpenAI place Astra à un niveau critique de capacité cybersécurité et renforce les protections associées. Cette juxtaposition rappelle que la maturité ne consiste pas à déléguer plus vite, mais à déléguer dans un cadre plus contrôlé. Pour TBS Education, aucun agent ne doit accéder à une information personnelle, modifier un contenu sensible, envoyer une communication ou exécuter une action technique sans mandat explicite. Le mandat décrit la finalité, les données autorisées, les outils, les conditions d’arrêt, les éléments de preuve attendus et les points de validation. Les logs doivent être utiles à une revue, et pas seulement produits en cas d’incident. Les cas d’usage à faible risque sont une entrée pertinente : synthèse interne, classification assistée, préparation de brouillons. L’autonomie augmente seulement lorsque la qualité, la sécurité et la compréhension des exceptions sont démontrées."
    },
    {
      id: 8,
      code: "INNOVATION MKT",
      titre: "L’IA ACCÉLÈRE LA MESURE, MAIS NE RÉPARE PAS UNE FONDATION DATA FRAGMENTÉE",
      badge: "À SURVEILLER",
      previousBadge: "À SURVEILLER",
      description: "Le Future of Measurement Report 2026 d’IAB Australia identifie la donnée comme contrainte principale de la mesure : fragmentation des expositions, disparition des signaux adressables et difficultés cross-media. Le rapport appelle à des données standardisées et à une collaboration privacy-safe ; aucun cas KPI n’est retenu cette semaine.",
      category: "INNOV MKT",
      sources: [
        { nom: "IAB Australia", url: "https://www.iabaustralia.com.au/resource/future-of-measurement-report-2026/" }
      ],
      details: [
        "Le rapport est publié le 1er septembre 2026 par IAB Australia",
        "Sa conclusion centrale est que la contrainte est la donnée, non le manque de méthodes",
        "La mesure d’audience cross-media reste le principal manque identifié",
        "Les clean rooms sont décrites parmi les capacités encore les moins réalisées",
        "L’IA peut accélérer la mesure sans résoudre la qualité ni la comparabilité des données"
      ],
      longDescription: "Le rapport IAB Australia de la semaine pose un rappel utile à l’heure du commerce agentique et de la personnalisation automatisée : l’IA ne remet pas à zéro les problèmes de mesure. La fragmentation des plateformes, formats, appareils et identifiants complique toujours le rapprochement entre exposition et résultat. Pour l’organisation, la priorité n’est donc pas de multiplier les tableaux de bord ou les modèles prédictifs, mais de stabiliser les définitions : événement, audience, consentement, exposition, conversion, source de vérité, fenêtre d’attribution et règles de rapprochement. IAB Australia appelle à des données d’audience standardisées, à une mesure cross-media et à des formes de collaboration privacy-safe ; le rapport souligne aussi que les clean rooms restent peu réalisées. Pour TBS Education, l’application directe concerne les canaux d’acquisition et les parcours candidat : avant de comparer l’efficacité d’une campagne, d’un média partenaire ou d’une recommandation IA, il faut s’assurer que les données ne doublonnent pas les personnes, que les conversions sont définies de manière stable et que les limites du modèle sont connues. Aucun cas d’école chiffré n’est retenu cette semaine, faute de résultat primaire vérifiable associé à une campagne précise."
    }
  ],

  bonus: {
    label: "BONUS #10 — ROBOTIQUE",
    titre: "LES ROBOTS JOUENT AU FOOT, MAIS C’EST LA COORDINATION QUI FAIT LE SIGNAL",
    chiffre: "ROBOCUP",
    statLabel: "DES MACHINES QUI ANALYSENT, DÉCIDENT ET COORDONNENT LEUR JEU",
    description: "À l’IFA Berlin, RoboCup met en scène des robots autonomes capables d’analyser le jeu, de prendre des décisions et de coordonner leurs actions. Le fun fact est moins le robot footballeur que la leçon : dans le monde physique aussi, l’agent utile est celui qui perçoit, coopère et reste encadré.",
    details: [
      "RoboCup est présenté à l’IFA Berlin du 4 au 8 septembre 2026",
      "Les machines autonomes analysent la situation de jeu, prennent des décisions et se coordonnent",
      "L’IFA met en avant humanoïdes, robots quadrupèdes et démonstrations de physical AI",
      "Le salon décrit la physical AI comme la capacité à percevoir l’environnement, réagir et accomplir une tâche",
      "La démonstration publique ne constitue pas une preuve d’autonomie générale en environnement non contrôlé"
    ],
    perspective: "Un agent fiable ne se définit pas par son apparence humanoïde, mais par un périmètre d’action, des signaux de retour, une coordination observable et une possibilité de reprise humaine.",
    longDescription: "Le bonus robotique de la S37 se déroule à Berlin : à l’IFA, RoboCup montre des machines capables d’analyser une situation de jeu, de prendre des décisions et de coordonner leurs actions avec des coéquipiers. Le salon met aussi en avant des humanoïdes, des quadrupèdes et la notion de « physical AI », c’est-à-dire la capacité d’un système à percevoir un environnement, réagir à ses changements et réaliser des tâches physiques. Le fun fact serait de retenir les backflips et le football robotisé. Le signal plus utile est ailleurs : l’agent hors écran doit apprendre à gérer le temps réel, les limites matérielles, les retours capteurs et l’incertitude. Pour TBS Education, cette démonstration n’appelle aucune robotisation immédiate. Elle illustre une règle de conception valable pour tout automatisme : commencer par une tâche définie, des critères de réussite observables, des limites d’action explicites et une reprise humaine. La valeur ne vient pas d’une autonomie spectaculaire, mais d’une coordination fiable entre contexte, décision et exécution. C’est aussi la condition pour que l’IA reste un outil d’assistance crédible dans les environnements pédagogiques et administratifs.",
    source: { nom: "IFA Berlin", url: "https://www.ifa-berlin.com/press-releases/ifa2026-humanoid-robots", date: "5 septembre 2026" }
  },

  actions: [
    { id: 1, titre: "Créer un tableau de bord AI Search par famille de pages : impressions génératives, pages, pays, appareils, citations observées, visites, actions aval et décision d’opt-out", domaine: "SEARCH / ANALYTICS", responsable: "SEO + DATA" },
    { id: 2, titre: "Établir une feuille de route GEO fondée sur l’autorité éditoriale : expertise nommée, données primaires, sources de preuve, vidéos utiles et questions candidat prioritaires", domaine: "SEO / ÉDITORIAL", responsable: "ÉDITORIAL + SEO" },
    { id: 3, titre: "Auditer Schema.org comme un contrat de contenu : source de vérité, contenu visible, tests de rendu, identifiants, erreurs et revue à chaque évolution CMS", domaine: "ARCHITECTURE / SEO", responsable: "DIGITAL + DSI" },
    { id: 4, titre: "Définir le modèle d’autorisation de tout CMS agent-ready : lecture, brouillon, modification, publication, historique, validation et retour arrière", domaine: "DXP / GOUVERNANCE", responsable: "DIGITAL + ÉDITORIAL + DSI" },
    { id: 5, titre: "Arbitrer l’architecture CDP sur la maturité des identités, des consentements, de la qualité de contexte et des droits de décision avant tout cas d’usage agentique", domaine: "DATA / CRM", responsable: "CRM + DATA PROTECTION + DSI" },
    { id: 6, titre: "Formaliser une fiche de mandat d’agent avec finalité, données, outils, preuves, permissions, seuil de validation, logs et mécanisme d’arrêt", domaine: "IA / GOUVERNANCE", responsable: "DSI + JURIDIQUE + MÉTIERS" }
  ],

  signauxEmergents: [
    { titre: "De la visibilité générative au pilotage d’exposition", description: "Le reporting AI Search rend l’exposition mesurable, mais impose de reconnecter cette donnée aux parcours et aux résultats métier.", horizon: "IMMÉDIAT" },
    { titre: "De la page optimisée à l’autorité observable", description: "Les citations IA privilégient des écosystèmes de contenu et de communauté ; l’expertise reconnue devient un actif de présence.", horizon: "IMMÉDIAT" },
    { titre: "Du CMS comme outil au CMS comme espace de coordination", description: "L’accès agentique transforme les droits, versions et validations en caractéristiques centrales de l’expérience éditoriale.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "Du profil client au contexte actionnable", description: "La donnée CDP devient une couche de contexte pour la décision automatisée, avec une exigence renforcée de consentement et de fraîcheur.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "Du modèle fort au modèle contrôlé", description: "Les capacités agents renforcent la nécessité de tests, de limites d’accès, d’observabilité et de validation humaine.", horizon: "MOYEN TERME (2027)" }
  ],

  tendancesPassees: [
    { titre: "De l’opt-out à la mesure de la présence générative", description: "S31-S36 documentaient la diffusion d’AI Overviews et les arbitrages de participation. S37 ouvre une étape de pilotage par le reporting Search Console." },
    { titre: "Du GEO technique à l’autorité éditoriale", description: "Les semaines précédentes ont suivi le balisage et les citations. S37 confirme que la lisibilité technique reste une base, mais que la sélection dépend de signaux d’autorité plus larges." },
    { titre: "Du CMS agent-ready au CMS coordonné par agent", description: "S34-S36 portaient sur l’accès d’agents aux opérations CMS. S37 précise la condition de réussite : code, versions, permissions et validations restent le cœur du produit." },
    { titre: "De la CDP unifiée à la décision gouvernée", description: "Le fil rouge S35-S36 se prolonge : le contexte client ne vaut que s’il est résolu, frais, consenti et distribué à des agents selon des droits explicites." },
    { titre: "De l’agent assisté à l’agent sous contraintes", description: "Les avancées de capacité renforcent la tendance observée depuis S33 : la valeur en production dépend du mandat, des preuves, des contrôles et de la reprise humaine." }
  ]
};
