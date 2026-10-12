export const veilleS42 = {
  week: 42,
  year: 2026,
  publicationDate: "12 octobre 2026",
  domainsCount: 6,
  sourcesCount: 16,
  criticalCount: 1,
  importantCount: 3,
  actionsCount: 8,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "L’INTERFACE CONVERSATIONNELLE DEVIENT UNE SURFACE COMPOSÉE, ADMINISTRABLE ET CONTRÔLABLE.",
  },

  statDominante: {
    chiffre: "1,2 MD",
    titre: "UTILISATEURS HEBDOMADAIRES DE CHATGPT DÉCLARÉS PAR OPENAI",
    description: "OpenAI avance ce chiffre dans son annonce du 7 octobre sur GPT-6 et Intelligent UI. Il s’agit d’une déclaration fournisseur, sans méthode publiée ni audit indépendant. Le signal utile est moins le volume lui-même que l’industrialisation d’interfaces mêlant texte, visuels, boutons, formulaires, permissions et contrôles utilisateur.",
  },

  syntheseExecutive: "La S42 publie six analyses sur huit : les thèmes Zero-Click/GEO et DXP/headless sont masqués faute de source qualifiée dans la fenêtre du 6 au 12 octobre. Côté web et data, Google mentionne la diffusion de contenus abonnés dans Search, AI Mode, AI Overviews et Gemini, tandis que les retards Search Console rappellent de ne pas interpréter une tendance sur une donnée incomplète. Les travaux JSON-LD et les signaux first-party convergent vers une même exigence : information structurée, provenance, consentement et statut doivent être maintenus comme des actifs de gouvernance. Le signal principal est UX : les assistants deviennent des surfaces composées, avec validation humaine, permissions par rôle et retours d’état accessibles. Côté production, le cadre d’enforcement de l’AI Act doit entrer dans les critères de mise en production des usages GPAI. Enfin, Chili’s illustre une mécanique créateurs-produit avec des KPI rapportés, mais sans preuve d’incrémentalité ni de causalité business.",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Schema.org / données structurées", "CDP / first-party / identité", "UX / IA conversationnelle", "IA / gouvernance", "Innovation marketing"],
    sources: ["Search Engine Roundtable — Reader Revenue Manager", "Search Engine Roundtable — retard Search Console", "Google Search Central", "W3C JSON-LD Working Group", "JSON-LD Community Group", "W3C — Verifiable Credential Barcodes", "CDP.com", "OpenAI — Intelligent UI", "OpenAI — Composer predictions", "OpenAI — Enterprise/Edu", "Anthropic Trust Center", "Commission européenne — AI Act", "ADWEEK — Chili’s", "MIT News — SANDO", "U.S. Department of Energy", "Agility Robotics"],
    critiques: ["IA / gouvernance : le cadre d’enforcement AI Act rend opérationnels les contrôles, restrictions et plafonds de sanctions pour les modèles GPAI"],
    importants: ["Google AI Search : les contenus abonnés sont mentionnés dans Search, AI Mode, AI Overviews et Gemini, sans KPI publié", "CDP / identité : la valeur de la first-party data dépend aussi du statut, de la provenance et du consentement", "UX / IA : la réponse devient une interface composée avec validation, permissions et retours d’état accessibles"],
    actions: ["Annoter les périodes de retard Search Console avant toute lecture de tendance", "Auditer les parcours de contenus abonnés et leurs métadonnées", "Maintenir JSON-LD comme un actif de gouvernance et de versionnement", "Conserver le consentement activable et auditable", "Tester acceptation, modification et désactivation des suggestions IA", "Inclure les permissions et l’accessibilité dans les critères de production", "Mettre à jour le registre de conformité IA pour les usages GPAI", "Exiger une méthode d’incrémentalité pour les cas marketing"],
    emergents: ["L’abonnement dans les surfaces de réponse IA", "La fraîcheur des données comme condition de décision", "JSON-LD 1.2 et les formats adjacents", "L’identité vérifiable et le contrôle d’état", "L’interface agentique sous politique et permission"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "LES CONTENUS ABONNÉS SONT MENTIONNÉS DANS SEARCH, AI MODE, AI OVERVIEWS ET GEMINI",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Reader Revenue Manager mentionne une surface « From your subscriptions » dans Google Search, AI Mode, AI Overviews et Gemini. Cette mention ne prouve ni visibilité, ni classement, ni trafic. Un retard observé dans Search Console impose aussi de qualifier la fraîcheur des données avant toute lecture de tendance.",
      category: "GOOGLE",
      sources: [
        { nom: "Search Engine Roundtable — Reader Revenue Manager", url: "https://www.seroundtable.com/google-updates-reader-revenue-manager-42261.html" },
        { nom: "Search Engine Roundtable — retard Search Console", url: "https://www.seroundtable.com/google-search-console-performance-report-delayed-42271.html" },
        { nom: "Google Search Central — parcours de formation", url: "https://developers.google.com/search/blog/2026/10/seo-learning-paths?hl=en" }
      ],
      details: [
        "La page Reader Revenue Manager mentionne la surface « From your subscriptions » dans Google Search, AI Mode, AI Overviews et Gemini",
        "La source ne publie ni audience, ni impressions, ni clics, ni garantie de visibilité pour les éditeurs",
        "Le 11 octobre, le rapport général de performance Search Console a été observé avec plus de 64 heures de retard, puis environ 44 heures",
        "Google a publié deux parcours de formation sur Search Console, rapports de performance, exports et API ; ce contenu est pédagogique, pas une annonce AI Search",
        "Les données de fraîcheur doivent être visibles dans les tableaux de bord avant toute conclusion quotidienne"
      ],
      longDescription: "Le signal Google de la semaine porte sur une possibilité de distribution documentée, non sur une performance démontrée. Search Engine Roundtable rapporte que la page Reader Revenue Manager associe « From your subscriptions » à Google Search, AI Mode, AI Overviews et Gemini. Pour TBS Education, cette mention invite à surveiller la façon dont des contenus à accès contrôlé, des espaces experts ou des publications à forte valeur peuvent être présentés dans des parcours de recherche et de réponse. Elle ne justifie aucun objectif de visibilité : la source ne publie ni audience, ni impression, ni CTR, ni garantie de classement. En parallèle, le retard observé sur le rapport général de performance Search Console rappelle une règle de pilotage simple : une variation apparente ne vaut pas tendance si le délai de collecte n’est pas connu. Les équipes SEO et data doivent annoter les périodes de données incomplètes, différer les comparaisons quotidiennes et privilégier des fenêtres consolidées. Les parcours de formation Google sur Search Console confirment enfin la valeur des exports et API pour industrialiser cette discipline, sans apporter de nouveauté spécifique sur AI Overviews ou AI Mode.",
    },
    {
      id: 3,
      code: "SCHEMA.ORG",
      titre: "JSON-LD AVANCE SUR LA GOUVERNANCE, PAS SUR UNE NOUVELLE PROMESSE SEO",
      badge: "À SURVEILLER",
      previousBadge: null,
      description: "Le groupe JSON-LD du W3C a travaillé sur YAML-LD, CBOR-LD et les errata vers JSON-LD 1.2. Un rapport d’exigences publié le 12 octobre formalise le besoin d’exprimer un graphe de données liées dans un JSON valide, mais reste expérimental et ne constitue pas un standard W3C.",
      category: "SEO",
      sources: [
        { nom: "W3C — JSON-LD Working Group", url: "https://www.w3.org/events/meetings/c3c86d05-0391-4490-a686-3038acfdb231/20261007T120000/" },
        { nom: "JSON-LD Community Group — Requirements", url: "https://json-ld.org/requirements/latest/" }
      ],
      details: [
        "L’agenda du groupe JSON-LD du W3C couvre YAML-LD, CBOR-LD, les PR/issues et la préparation de JSON-LD 1.2",
        "Le chantier annoncé est principalement fondé sur des errata, sans adoption ni date de livraison établie",
        "Le rapport JSON-LD Requirements demande notamment qu’un document JSON-LD exprime un graphe de données liées tout en restant un JSON valide",
        "Le rapport est explicitement un Final Community Group Report expérimental, ni standard W3C ni document en voie de standardisation",
        "Aucune nouvelle release Schema.org ni évolution Google dédiée aux données structurées n’est retenue cette semaine"
      ],
      longDescription: "La S42 ne fournit pas de raison de lancer une refonte Schema.org, mais elle confirme un enjeu de qualité documentaire. Le 7 octobre, l’agenda du JSON-LD Working Group couvre YAML-LD, CBOR-LD, la curation d’issues et une trajectoire JSON-LD 1.2 surtout constituée d’errata. Le 12 octobre, le rapport JSON-LD Requirements rappelle qu’un document JSON-LD doit pouvoir exprimer un graphe de données liées tout en restant un JSON valide. Ces éléments sont utiles pour situer les données structurées comme un contrat d’interopérabilité : identifier clairement les entités, maintenir leurs relations et contrôler la validité du graphe au fil des changements de contenu ou de système. Ils ne constituent pas une preuve de gain SEO, ni une nouvelle fonctionnalité Google à déployer. Le rapport est un Final Community Group Report expérimental et non un standard W3C ; l’agenda de réunion n’est pas un compte rendu de décision. Pour TBS Education, la priorité reste donc la maintenance : sources, propriétaires de données, date de révision, versionnement et contrôle avant publication des informations programmes, campus, événements et personnes.",
    },
    {
      id: 5,
      code: "CDP & DATA",
      titre: "L’IDENTITÉ DOIT PORTER UN STATUT, UNE PROVENANCE ET UN CONSENTEMENT ACTIVABLE",
      badge: "IMPORTANT",
      previousBadge: null,
      description: "Le W3C rappelle qu’une signature numérique seule ne bloque pas la réutilisation d’un justificatif copié : le statut et la révocation comptent. En parallèle, CDP.com détaille les traces à conserver dans la first-party data : finalité, horodatage, version de politique et juridiction.",
      category: "CDP",
      sources: [
        { nom: "W3C — identité, statut et révocation", url: "https://www.w3.org/press-releases/2026/data-breaches-identity-theft-and-revocation-a-real-world-case-study-on-why-w3c-is-developing-verifiable-credential-barcodes/" },
        { nom: "CDP.com — first-party data", url: "https://cdp.com/articles/what-is-first-party-data-and-why-is-it-so-important/" }
      ],
      details: [
        "Le W3C explique qu’une signature seule ne bloque pas la réutilisation d’une image copiée ; un contrôle de statut et de révocation est nécessaire",
        "Bitstring Status List permet de vérifier le statut d’un justificatif sans appel intrusif à l’émetteur à chaque contrôle",
        "CDP.com classe dans la first-party data les événements web/app, achats, CRM, support, préférences et consentements",
        "Les traces de consentement doivent notamment conserver finalité, horodatage, version de politique et juridiction",
        "Les chiffres historiques BCG/Google repris par CDP.com ne sont pas utilisés comme preuve de performance 2026"
      ],
      longDescription: "Le sujet de la semaine n’est pas une nouvelle promesse de personnalisation, mais la qualité de l’autorisation qui rend une donnée utilisable. Le W3C rappelle, dans un cas centré sur les justificatifs d’identité, qu’une signature numérique ne suffit pas lorsque l’image d’un document peut être copiée. La valeur réside alors dans un statut vérifiable et, si nécessaire, révocable. Cette logique est directement utile aux systèmes CDP et CRM : une donnée ne devrait pas seulement être reliée à une personne ou à un profil, mais aussi à une provenance, une finalité, un état de consentement et une durée d’usage. CDP.com précise que ces traces incluent notamment l’horodatage, la version de politique et la juridiction. La source est une publication spécialisée avec présence commerciale, non une doctrine réglementaire, et les statistiques BCG/Google qu’elle rappelle sont historiques. Elle ne fonde donc pas une cible d’activation. Pour TBS Education, la décision opérationnelle consiste à traiter consentement et droit d’usage comme des attributs activables, auditables et séparés du simple identifiant, y compris lorsque la donnée est mise à disposition d’un assistant ou d’un agent.",
    },
    {
      id: 6,
      code: "UX / IA",
      titre: "LA RÉPONSE DEVIENT UNE INTERFACE COMPOSÉE, AVEC VALIDATION, RÔLES ET RETOURS D’ÉTAT",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "OpenAI décrit Intelligent UI comme un assemblage progressif de texte, visuels, boutons, formulaires et graphiques. Les suggestions de Codex restent acceptables, modifiables ou désactivables ; les espaces Enterprise/Edu ajoutent une gouvernance par rôle. Anthropic documente des retours d’état accessibles pour Claude Code CLI.",
      category: "UX",
      sources: [
        { nom: "OpenAI — GPT-6 et Intelligent UI", url: "https://openai.com/index/gpt-6-for-everyone/" },
        { nom: "OpenAI — Composer predictions", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
        { nom: "OpenAI — Enterprise et Edu", url: "https://help.openai.com/en/articles/10128477-chatgpt-enterprise-and-edu-release-notes" },
        { nom: "Anthropic Trust Center — ACR Claude Code CLI", url: "https://trust.anthropic.com/" }
      ],
      details: [
        "Intelligent UI combine texte, visuels et composants interactifs rendus progressivement via des composants natifs",
        "Les Composer predictions peuvent être acceptées, relues, modifiées avant envoi ou désactivées dans les réglages",
        "Les plugins Enterprise/Edu peuvent être gérés par rôle avec les états Available, Install ou Disabled",
        "L’ACR d’Anthropic documente un mode lecteur d’écran, des menus numérotés, des annonces d’état et une signalisation de fin ou d’attente",
        "Les chiffres de 1,2 milliard d’utilisateurs hebdomadaires et de 44 % de réponse plus rapide sont déclaratifs ou issus d’une évaluation interne OpenAI"
      ],
      longDescription: "Le changement important de la S42 est la sortie du modèle « une question, une réponse en texte ». OpenAI décrit Intelligent UI comme une interface qui assemble progressivement texte, visuels, boutons, formulaires, graphiques et expériences interactives. Cette capacité doit être évaluée comme une couche de produit : ce qui est affiché, ce qui est éditable, ce qui est confirmé et ce qui est exécuté ne peuvent pas être confondus. Les Composer predictions de Codex illustrent un contrôle individuel utile : la suggestion est proposée, puis l’utilisateur peut l’accepter, la relire, la modifier ou la désactiver. Les espaces Enterprise/Edu ajoutent la gouvernance des plugins par rôle. Anthropic complète ce tableau avec des retours d’état accessibles dans Claude Code CLI. Pour TBS Education, un assistant doit donc instrumenter le taux d’acceptation, la fréquence de modification, les refus, les erreurs de permission, les abandons et la qualité du relais humain. Les annonces n’apportent pas de preuve indépendante de confiance, de productivité ou d’accessibilité. Les chiffres publiés par OpenAI sont déclaratifs ou internes ; ils ne doivent pas devenir une cible d’expérience utilisateur.",
    },
    {
      id: 7,
      code: "IA / GOV",
      titre: "LE CADRE D’ENFORCEMENT DE L’AI ACT DOIT ENTRER DANS LES CRITÈRES DE PRODUCTION",
      badge: "CRITIQUE",
      previousBadge: null,
      description: "La Commission européenne décrit les compétences de l’AI Office sur les modèles GPAI, les demandes d’information, l’accès pour évaluation, les mesures correctives et les plafonds de sanctions. Il s’agit d’un cadre applicable et d’un calendrier, non d’une sanction prononcée dans la semaine.",
      category: "IA",
      sources: [
        { nom: "Commission européenne — cadre d’enforcement AI Act", url: "https://digital-strategy.ec.europa.eu/en/policies/enforcement-ai-act" }
      ],
      details: [
        "L’AI Office supervise notamment les fournisseurs de modèles GPAI, les autorités nationales couvrant les autres systèmes",
        "Le cadre prévoit demandes d’information, accès à des modèles pour évaluation, mesures correctives et restrictions possibles de disponibilité publique",
        "Les plafonds affichés atteignent 35 M€ ou 7 % du chiffre d’affaires mondial pour les pratiques interdites",
        "Depuis le 2 août 2026, les obligations GPAI de transparence, droit d’auteur et sécurité/sûreté sont concernées par l’enforcement",
        "Les montants sont des plafonds légaux, non des amendes effectivement infligées"
      ],
      longDescription: "La mise à jour de la Commission européenne fait de l’enforcement un sujet de conception, pas seulement de veille juridique. Le cadre attribue à l’AI Office une compétence sur les fournisseurs de modèles GPAI et décrit des demandes d’information, l’accès à des modèles pour évaluation, des mesures correctives et la possibilité de restreindre une disponibilité publique. Les plafonds de sanctions affichés — jusqu’à 35 millions d’euros ou 7 % du chiffre d’affaires mondial pour les pratiques interdites — sont des plafonds légaux, non des sanctions prononcées durant la semaine. Depuis le 2 août 2026, les obligations de transparence, droit d’auteur et sécurité/sûreté des modèles GPAI sont concernées par l’enforcement. Pour TBS Education, la conséquence utile est de compléter chaque dossier d’usage IA par les éléments qui rendent une solution gouvernable : fournisseur, rôle du modèle, sources et droits sur les données, mécanismes de contrôle humain, procédures de retrait, documentation de sécurité et responsabilité métier. La source ne publie ni taux d’hallucination, ni KPI RAG, ni ROI d’agent. Elle ne permet donc pas de conclure sur la qualité technique d’un produit précis.",
    },
    {
      id: 8,
      code: "INNOV MKT",
      titre: "CHILI’S MONTRE UNE MÉCANIQUE PRODUIT-CRÉATEURS, PAS UN ROI INCRÉMENTAL PROUVÉ",
      badge: "À SURVEILLER",
      previousBadge: null,
      description: "ADWEEK décrit une campagne Chili’s autour du Triple Dipper avec neuf créateurs TikTok, 9 % d’engagement, 21,7 millions de personnes atteintes et 23 millions de commandes supplémentaires rapportées. La source ne donne ni période comparative, ni coût, ni groupe de contrôle : la causalité business reste non démontrée.",
      category: "INNOV MKT",
      sources: [
        { nom: "ADWEEK — Chili’s × Influencer", url: "https://www.adweek.com/brand-marketing/adweek-team-visionary-awards-2026-better-together/" }
      ],
      details: [
        "La campagne mobilise neuf créateurs TikTok autour du produit Triple Dipper",
        "ADWEEK rapporte 9 % d’engagement, annoncé à plus de 50 % au-dessus de la cible, et une portée de 21,7 millions de personnes",
        "La source rapporte 23 millions de commandes supplémentaires et indique que le produit représente 15 % des ventes de Chili’s",
        "La croissance de 8,6 % des ventes comparables est citée avec le marketing parmi les moteurs, sans attribution à la seule campagne",
        "Aucune définition des commandes, période de comparaison, dépense, revenu incrémental ou groupe témoin n’est fourni"
      ],
      longDescription: "Le cas Chili’s est publiable comme exemple de mécanique creator-led, avec une réserve stricte sur l’attribution. ADWEEK décrit une activation autour du Triple Dipper, portée par neuf créateurs TikTok. Les KPI rapportés sont un taux d’engagement de 9 %, présenté comme supérieur de plus de 50 % à la cible, une portée de 21,7 millions de personnes et 23 millions de commandes supplémentaires. Le Triple Dipper représenterait désormais 15 % des ventes de Chili’s. Ces éléments rendent le cas utile pour analyser la cohérence entre un produit clairement identifiable, un dispositif de créateurs et des métriques de diffusion. Ils ne démontrent pas un ROI incrémental. La source ne précise ni la définition opérationnelle des commandes supplémentaires, ni période de comparaison, ni dépense, ni chiffre d’affaires incrémental, ni groupe témoin. La croissance de 8,6 % des ventes comparables est attribuée par le dirigeant au marketing et à la construction de marque parmi d’autres moteurs, sans isoler l’effet de cette activation. Pour TBS Education, le bon apprentissage est méthodologique : une campagne influence ou créateurs doit définir en amont ses objectifs, son groupe de comparaison, ses liens trackés et ses critères d’incrémentalité avant d’être présentée comme une réussite business.",
    },
  ],

  bonus: {
    label: "BONUS #10 — ROBOTIQUE",
    titre: "UN DRONE DU MIT ÉVITE TOUS LES OBSTACLES DYNAMIQUES SUR 12 VOLS",
    chiffre: "12 VOLS",
    statLabel: "TESTS RÉELS AVEC UAV OÙ SANDO A ÉVITÉ TOUS LES OBSTACLES DYNAMIQUES SELON LE MIT",
    description: "MIT News présente SANDO, un planificateur qui recalcule une trajectoire de drone dans un environnement dynamique inconnu. Le résultat dépend d’hypothèses de modèle, notamment une borne de vitesse des obstacles : douze vols ne démontrent pas une robustesse universelle.",
    details: [
      "SANDO construit un corridor de sécurité spatio-temporel autour d’obstacles mobiles pour guider la trajectoire d’un drone",
      "Selon le modèle de recherche, le système garantit l’absence de collision dans les hypothèses définies",
      "Lors de 12 vols avec un UAV réel, MIT rapporte que tous les obstacles dynamiques ont été évités grâce au recalcul embarqué",
      "Le DOE annonce quatre projets de robotique pour la découverte scientifique autonome et 30 M$ au total, dont 2 M$ en FY2026",
      "Agility Robotics revendique plus de 65 000 heures d’opération réelle et plus de 300 M$ de commandes potentielles : ce dernier montant n’est pas un revenu de période"
    ],
    perspective: "La robotique autonome devient crédible lorsqu’elle rend explicites ses hypothèses, ses limites physiques, ses marges de sécurité et ses mécanismes de reprise — une discipline transposable aux agents logiciels.",
    longDescription: "Le Bonus S42 traite SANDO comme un résultat de recherche, non comme une promesse de drone autonome généralisable. MIT News décrit un planificateur qui construit un corridor de sécurité spatio-temporel autour d’obstacles mobiles, puis recalcule la trajectoire d’un UAV dans un environnement inconnu et dynamique. Selon le modèle étudié, le système garantit une absence de collision. Dans les 12 vols réalisés avec un drone réel, MIT rapporte que tous les obstacles dynamiques ont été évités. Les simulations publiées indiquent aussi des trajectoires plus rapides que plusieurs références, sans collision dans les environnements testés. La limite est déterminante : la garantie dépend des hypothèses du modèle, dont une borne connue sur la vitesse des obstacles, et 12 vols ne suffisent pas à prouver une performance universelle. En parallèle, le DOE annonce 30 millions de dollars pour quatre projets de robotique destinés à la découverte scientifique autonome, tandis qu’Agility Robotics revendique des heures d’opération et une valeur potentielle de commandes à interpréter avec prudence. Pour TBS Education, le parallèle pédagogique est utile : une autonomie responsable se définit par son périmètre, ses hypothèses, ses contrôles et ses conditions de sortie, pas par une démonstration spectaculaire isolée.",
    source: { nom: "MIT News", url: "https://news.mit.edu/2026/planning-system-ensures-robots-flight-path-will-remain-collision-free-1007", date: "7 octobre 2026" }
  },

  actions: [
    { id: 1, titre: "Annoter les tableaux de bord lorsque la fraîcheur Search Console est insuffisante et geler les conclusions journalières", domaine: "SEARCH / ANALYTICS", responsable: "SEO + DATA" },
    { id: 2, titre: "Auditer l’éligibilité, les métadonnées et les surfaces observables des contenus abonnés, sans promettre de visibilité IA", domaine: "SEARCH / CONTENU", responsable: "SEO + ÉDITORIAL" },
    { id: 3, titre: "Maintenir les graphes JSON-LD : propriétaire, source, date de révision, version et validation avant publication", domaine: "ARCHITECTURE / SEO", responsable: "DIGITAL + ÉDITORIAL + DSI" },
    { id: 4, titre: "Conserver finalité, horodatage, version de politique et juridiction dans la chaîne d’activation first-party", domaine: "DATA / CONSENTEMENT", responsable: "CRM + DATA PROTECTION" },
    { id: 5, titre: "Concevoir chaque suggestion IA avec acceptation, édition, désactivation et retour d’état compréhensible", domaine: "UX / IA", responsable: "DIGITAL + UX + MÉTIERS" },
    { id: 6, titre: "Tester permissions, navigation clavier, lecteur d’écran et reprise humaine dans les pilotes d’assistants", domaine: "ACCESSIBILITÉ / IA", responsable: "UX + DSI + MÉTIERS" },
    { id: 7, titre: "Mettre à jour le registre de conformité des usages GPAI : fournisseur, droits, sécurité, contrôles et échéances AI Act", domaine: "GOUVERNANCE / IA", responsable: "DSI + JURIDIQUE + DPO" },
    { id: 8, titre: "Exiger une période de comparaison, des liens trackés et une méthode d’incrémentalité avant de qualifier un cas marketing de réussite", domaine: "INNOVATION MARKETING", responsable: "MARKETING + DATA" }
  ],

  signauxEmergents: [
    { titre: "De l’abonnement au parcours de réponse IA", description: "La mention des surfaces Search, AI Mode, AI Overviews et Gemini ouvre une piste de distribution à observer, sans constituer une preuve de visibilité ou de trafic.", horizon: "IMMÉDIAT" },
    { titre: "De la variation mesurée à la donnée fraîche", description: "La disponibilité des données devient une condition de décision : délai, couverture et annotations doivent accompagner toute lecture de performance.", horizon: "IMMÉDIAT" },
    { titre: "Du balisage tactique au contrat d’information", description: "Graphes cohérents, versionnement et traçabilité donnent davantage de valeur à JSON-LD qu’un empilement de propriétés isolées.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "De l’identité client au droit d’usage activable", description: "Provenance, statut et consentement doivent être transmissibles avec la donnée, y compris lorsqu’un agent l’exploite.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "Du chat à l’interface agentique sous politique", description: "Composition de réponse, validation humaine, permissions et accessibilité deviennent des objets de design et de gouvernance indissociables.", horizon: "MOYEN TERME (2027)" }
  ],

  tendancesPassees: [
    { titre: "De la visibilité IA à la preuve de parcours", description: "Une mention dans une réponse générative, un lien affiché, une visite et une conversion restent des signaux distincts à rapprocher sans les confondre." },
    { titre: "Des données structurées au contrat d’interopérabilité", description: "Les données machine-readable sont utiles lorsqu’elles restent cohérentes, sourcées, révisées et gouvernées au fil des évolutions éditoriales et techniques." },
    { titre: "De la first-party data à l’autorisation traçable", description: "Centraliser un profil ne suffit pas : provenance, consentement, finalité, permission et durée de rétention conditionnent l’usage responsable de la donnée." },
    { titre: "De l’agent autonome à l’action contrôlable", description: "L’autonomie en production demande des frontières explicites, une validation humaine, des permissions compréhensibles, des traces et un relais opérationnel." },
    { titre: "Du cas marketing aux preuves d’incrémentalité", description: "Un KPI de portée ou d’engagement peut éclairer une mécanique créative ; seule une méthode de comparaison rend une conclusion business robuste." }
  ]
};
