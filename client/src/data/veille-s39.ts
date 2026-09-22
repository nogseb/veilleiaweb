export const veilleS39 = {
  week: 39,
  year: 2026,
  publicationDate: "21 septembre 2026",
  domainsCount: 8,
  sourcesCount: 9,
  criticalCount: 2,
  importantCount: 5,
  actionsCount: 6,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "L’IA MÉTIER ENTRE EN PRODUCTION AVEC UN NOUVEAU CONTRAT : SOURCES AUTORISÉES, PERMISSIONS, CONFIDENTIALITÉ, REVUE HUMAINE ET PREUVES DOIVENT ÊTRE CONÇUES AVANT L’AUTOMATISATION.",
  },

  statDominante: {
    chiffre: "54,0 %",
    titre: "DE CONTRÔLE GLOBAL DE CORRECTION ANNONCÉ PAR OPENAI SUR UN BENCHMARK JURIDIQUE PRIVÉ",
    description: "OpenAI annonce 54,0 % sur 200 questions américaines du benchmark privé Legal Research Bench de Vals AI, contre 38,7 % pour GPT-6 Astra avec recherche web seule. Ce chiffre fournisseur, non indépendant et propre au juridique, ne se transpose pas à TBS Education ; il illustre le rôle du contexte, des sources et des contrôles dans une IA métier.",
  },

  syntheseExecutive: "La S39 confirme que la valeur d’une IA en production dépend moins d’un modèle généraliste que de son cadre d’exécution : sources autorisées, permissions, confidentialité, supervision et critères de preuve. OpenAI présente Astra for Law comme une configuration métier, tandis que les plateformes de contenu requalifient leur promesse autour de l’IA agentique et de la gouvernance. Côté recherche, l’observation d’un panneau local Google labellisé AI Overview et le cadre Fight / Influence / Generate demand rappellent que la présence générative, le clic et la création de demande doivent être pilotés séparément. Schema.org 30.1 étend son vocabulaire vers les passeports numériques et les données produit, sans promettre de gain SEO. Pour la data et l’UX, l’identité consentie et les scénarios conversationnels limités restent les conditions pratiques d’une personnalisation fiable. Enfin, le cas Siemens montre qu’un événement peut être pensé comme une séquence full-funnel, mais ses KPI, publiés par LinkedIn, doivent être testés localement avant extrapolation.",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Zero-Click / GEO", "Schema.org", "DXP / Headless", "CDP & Data", "UX / IA", "IA / Gouvernance", "Innovation Marketing"],
    sources: ["Search Engine Roundtable", "Search Engine Land", "Schema.org", "CMSWire", "CDP.com / Treasure AI", "Nielsen Norman Group", "OpenAI", "LinkedIn Marketing Solutions", "MIT News"],
    critiques: ["Zero-Click / GEO : présence dans une réponse, clic et création de demande doivent être arbitrés par intention", "IA / gouvernance : une IA métier exige données autorisées, permissions, confidentialité, traces et revue humaine avant toute action"],
    importants: ["Google AI Search : les informations locales peuvent entrer dans des interfaces génératives observées sans preuve de déploiement généralisé", "Schema.org : la version 30.1 étend la description de conformité et de données produit sans constituer un levier SEO autonome", "DXP / Headless : l’étiquette DXP cède le pas à l’agentic, mais la gouvernance des contenus reste le véritable critère", "CDP & Data : ingestion, identité, activation et consentement forment une chaîne à rendre explicable", "UX / IA : un cas d’usage précis et un relais humain priment sur l’ajout systématique d’un chatbot"],
    actions: ["Cartographier les sources, permissions et validations de tout usage IA à enjeu avant toute connexion de production", "Segmenter les requêtes candidat entre intention directe, influence générative et création de demande", "Tester la fraîcheur et la cohérence des informations publiques des fiches locales et campus", "Auditer le contrat de contenu et de données : identifiants, provenance, dates, droits et conformité visible", "Tester une séquence événementielle full-funnel avec KPI de qualité de lead, présence et progression vers la candidature", "Formaliser les cas conversationnels : besoin, limites, prompts guidés, données autorisées et relais humain"],
    emergents: ["De l’IA généraliste à l’IA métier gouvernée", "Du clic attribué à l’arbitrage entre capturer, influencer et créer la demande", "Du DXP comme suite au contenu gouverné comme infrastructure agentique", "Du profil unifié à une chaîne first-party consentie et explicable", "Du laboratoire robotisé à l’infrastructure expérimentale accessible à distance"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "LE LOCAL PEUT AUSSI BASCULER DANS UNE INTERFACE GÉNÉRATIVE",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Search Engine Roundtable observe un panneau local associé à un Google Business Profile portant le libellé « AI Overview ». Dans l’expérience reproduite par l’auteur, le bouton « Show more » ouvre une interface de suivi de type AI Mode. Il s’agit d’une observation, pas d’une annonce Google ni d’un déploiement généralisé.",
      category: "GOOGLE",
      sources: [
        { nom: "Search Engine Roundtable", url: "https://www.seroundtable.com/google-local-knowledge-panel-ai-overview-42105.html" }
      ],
      details: [
        "L’article rapporte un panneau de connaissance local lié à un Google Business Profile avec le libellé « AI Overview »",
        "Le panneau observé comporte un bouton « Show more »",
        "Ce bouton ouvre une interface conversationnelle de suivi décrite comme AI Mode",
        "Barry Schwartz indique avoir reproduit l’expérience après un exemple partagé par Ben Fisher",
        "La source ne fournit ni pays, ni couverture, ni effet trafic, ni preuve de déploiement général"
      ],
      longDescription: "Le signal Google de la S39 concerne la recherche locale plutôt qu’une annonce de produit. Search Engine Roundtable rapporte l’observation d’un panneau de connaissance local associé à un Google Business Profile, portant le libellé « AI Overview ». Dans l’expérience décrite, le bouton « Show more » ouvre une interface de suivi de type AI Mode. L’auteur indique avoir lui-même reproduit le comportement après un exemple partagé par Ben Fisher. Cette information ne permet pas de conclure à un déploiement global, à une couverture précise, ni à un effet sur le trafic. Elle rappelle néanmoins que des informations habituellement consultées dans une fiche locale peuvent être reformulées dans une réponse conversationnelle. Pour TBS Education, l’action proportionnée est de vérifier la fraîcheur, l’exactitude et la cohérence des fiches Google Business Profile des campus et implantations : adresse, horaires, téléphone, catégorie, liens et informations pratiques. Il faut traiter cette vérification comme une mesure de qualité des informations publiques, non comme une optimisation garantissant une visibilité générative. La mesure doit ensuite distinguer apparition, consultation de fiche, trafic et action aval.",
    },
    {
      id: 2,
      code: "ZERO-CLICK",
      titre: "FACE AU ZÉRO-CLIC, CHOISIR ENTRE CAPTURER, INFLUENCER ET CRÉER LA DEMANDE",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "Search Engine Land propose un cadre Fight / Influence / Generate demand : défendre les requêtes commerciales, viser la mention ou la citation dans une réponse générative, ou investir en amont lorsque le zéro-clic limite la capture. C’est une grille d’analyse, non une étude de causalité.",
      category: "GEO",
      sources: [
        { nom: "Search Engine Land", url: "https://searchengineland.com/ai-overviews-paid-search-fight-influence-generate-demand-488451" }
      ],
      details: [
        "Le cadre distingue Fight pour les requêtes commerciales, Influence pour la visibilité générative et Generate demand pour l’amont",
        "L’article recommande de coordonner SEO et PPC lorsqu’une marque vise citation ou mention",
        "Il propose de ne pas maintenir mécaniquement certaines enchères informationnelles quand Google répond directement",
        "Les leviers proposés pour créer la demande incluent Demand Gen, vidéo, contenus propriétaires, avis et communautés",
        "La source ne fournit pas de mesure longitudinale attribuant une baisse de trafic aux AI Overviews"
      ],
      longDescription: "Le zéro-clic ne se résume pas à une baisse de trafic qu’il faudrait compenser par davantage d’achat média. Search Engine Land propose de séparer trois objectifs : Fight pour les requêtes à intention commerciale où la capture reste prioritaire, Influence pour les situations où la marque ou la source doit être présente dans une réponse générative, et Generate demand lorsque la réponse directe réduit la possibilité de capter la visite mais que l’intérêt doit être créé en amont. C’est un cadre professionnel utile, mais il ne constitue pas une étude indépendante ni une démonstration d’impact pour l’enseignement supérieur. Pour TBS Education, la traduction opérationnelle consiste à segmenter les questions candidat : certaines portent sur une action immédiate, d’autres sur la comparaison, l’orientation ou la découverte. Les KPI doivent suivre l’objectif : clic et demande d’information pour les requêtes de capture ; exactitude, présence et recherche de marque pour l’influence ; audience qualifiée, vidéo vue et progression dans le parcours pour la création de demande. Cette lecture évite de juger tous les contenus à partir d’un seul taux de clic et rend les arbitrages SEO, éditoriaux et média plus explicites.",
    },
    {
      id: 3,
      code: "SCHEMA.ORG",
      titre: "SCHEMA.ORG 30.1 ÉTEND LE VOCABULAIRE VERS LA CONFORMITÉ ET LA DONNÉE PRODUIT",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Schema.org publie la version 30.1 avec un vocabulaire pour les passeports numériques de produits et plusieurs attributs de données produit, d’offre et de livraison. C’est une évolution officielle du vocabulaire, non une annonce Google ni une preuve d’effet SEO.",
      category: "SEO",
      sources: [
        { nom: "Schema.org", url: "https://schema.org/docs/releases.html" }
      ],
      details: [
        "La version 30.1 est publiée le 16 septembre 2026",
        "Elle ajoute notamment DigitalProductPassport et hasDigitalProductPassport",
        "EnvironmentalProductDeclaration et DeclarationOfConformity deviennent des sous-types de Certification",
        "La release ajoute aussi des propriétés de données produit, d’offre et de livraison",
        "Aucune donnée d’adoption, de résultat enrichi, de trafic ou de classement n’est publiée"
      ],
      longDescription: "La version 30.1 de Schema.org montre que les données structurées évoluent aussi pour décrire la conformité et la donnée commerciale. La release ajoute notamment DigitalProductPassport, hasDigitalProductPassport, EnvironmentalProductDeclaration et DeclarationOfConformity. Elle enrichit également des attributs liés aux produits, aux offres et à la livraison. Cette publication est une source officielle sur le vocabulaire, mais elle ne vaut ni annonce de prise en charge par Google Search, ni promesse de résultat enrichi, ni amélioration SEO démontrée. Pour TBS Education, le signal est surtout méthodologique. Les données structurées doivent continuer à représenter des objets réels, leur provenance et les relations qui les unissent : organisation, programmes, cours, événements, personnes ou lieux. Le chantier utile reste la cohérence entre le contenu visible et le balisage, avec des identifiants stables, des dates contrôlées et des règles de mise à jour. La S39 ne justifie pas de déployer de nouveaux types liés aux produits ; elle confirme que Schema.org est un contrat de description évolutif, à suivre sans le confondre avec une garantie de visibilité.",
    },
    {
      id: 4,
      code: "DXP / HEADLESS",
      titre: "L’ÉTIQUETTE DXP RECULE, LA GOUVERNANCE DE CONTENU RESTE LE SOCLE AGENTIQUE",
      badge: "IMPORTANT",
      previousBadge: "CRITIQUE",
      description: "CMSWire rapporte le repositionnement d’Acquia autour de Drupal et de la gouvernance de contenu, tandis que Contentstack et Optimizely emploient des formulations liées à l’IA agentique. Le fait est stratégique et lexical : les capacités DXP ne disparaissent pas, mais leur récit évolue.",
      category: "ARCHI",
      sources: [
        { nom: "CMSWire", url: "https://www.cmswire.com/digital-experience/another-digital-experience-platform-dxp-bites-the-dust/" }
      ],
      details: [
        "CMSWire rapporte qu’Acquia retire l’expression « digital experience platform » de son message d’accueil",
        "L’article rappelle le passage de Contentstack vers « Agentic Experience Platform » en juin 2026",
        "Il cite également le repositionnement d’Optimizely autour d’une plateforme IA pour le marketing",
        "Acquia Source est décrite comme une « agentic content platform » avec Drupal comme fondation",
        "Le recul du label DXP est une lecture de marché, pas une preuve de disparition des capacités"
      ],
      longDescription: "La S39 ne documente pas la disparition des plateformes DXP. CMSWire observe plutôt un changement de récit : Acquia se repositionne autour de Drupal et de la gouvernance de contenu, tandis que Contentstack et Optimizely ont déjà introduit des formulations centrées sur l’IA agentique. L’article décrit Acquia Source comme une « agentic content platform » qui réunit contenu, actifs, gouvernance et coordination d’agents. Ce signal est important parce qu’il déplace les critères de décision. La question n’est plus seulement de choisir une suite DXP, un CMS headless ou une architecture composable. Il faut déterminer si les contenus, droits, versions et métadonnées sont suffisamment gouvernés pour être réutilisés par un humain, un service ou un agent. Pour TBS Education, une évaluation de plateforme devrait donc expliciter la source de vérité, le modèle de contenu, les rôles lecture / brouillon / modification / publication, les journaux d’action et la possibilité de retour arrière. Le positionnement commercial « agentic » ne constitue pas une preuve de valeur : la capacité à expliquer et corriger un contenu reste le test le plus utile.",
    },
    {
      id: 5,
      code: "CDP & DATA",
      titre: "L’IDENTITÉ FIRST-PARTY RESTE UNE CHAÎNE : INGESTION, RAPPROCHEMENT, ACTIVATION, CONSENTEMENT",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Un guide CDP.com décrit quatre étapes d’activation : ingestion, résolution d’identité, segmentation / activation, confidentialité et consentement. C’est un contenu éditorial d’acteur CDP, sans métrique de performance, mais il rend visible la chaîne à gouverner avant toute personnalisation ou orchestration.",
      category: "CDP",
      sources: [
        { nom: "CDP.com / Treasure AI", url: "https://cdp.com/glossary/first-party-data/" }
      ],
      details: [
        "La source définit les données first-party comme collectées directement sur les canaux détenus par la marque",
        "Elle décrit une chaîne en quatre étapes : ingestion, résolution d’identité, activation, confidentialité et consentement",
        "La résolution d’identité associe sessions anonymes et profils connus par rapprochements déterministes ou probabilistes",
        "Les données comportementales, transactionnelles et déclarées / zero-party sont distinguées",
        "La publication est un guide d’un acteur CDP ; aucun chiffre de performance n’est repris"
      ],
      longDescription: "Le signal data de la S39 est moins une nouveauté technologique qu’un rappel de séquence. CDP.com décrit l’activation first-party comme une chaîne qui relie ingestion, résolution d’identité, segmentation et activation, puis confidentialité et consentement. Le guide explique que le rapprochement peut associer sessions anonymes et profils connus à partir d’éléments déterministes, comme un e-mail ou un identifiant client, ou de techniques probabilistes. Cette publication provient d’un acteur CDP et ne constitue donc ni une étude indépendante ni une preuve de performance. Elle aide toutefois à rendre explicites les prérequis d’un cas d’usage. Pour TBS Education, toute personnalisation de contenu, relance CRM ou audience de campagne devrait pouvoir répondre à des questions simples : quelle donnée a déclenché l’action, quel identifiant a été utilisé, quelle préférence autorise cet usage, quelle source prévaut et comment une opposition est-elle propagée ? L’enjeu n’est pas d’ajouter un outil ou un identifiant de plus. Il est de reconstituer la chaîne de décision et d’appliquer une exclusion de manière fiable, observable et réversible.",
    },
    {
      id: 6,
      code: "UX / IA",
      titre: "UN CHATBOT N’EST PAS UNE STRATÉGIE UX : PARTIR DU BESOIN ET GARDER UN RELAIS HUMAIN",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Le study guide de Nielsen Norman Group recommande de vérifier la valeur d’usage avant d’ajouter un chatbot. Il met l’accent sur des fonctions IA ciblées, des suggestions de prompts contextualisées et la transparence, avec un passage vers un humain lorsque le scénario l’exige.",
      category: "UX",
      sources: [
        { nom: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/designing-ai-study-guide/" }
      ],
      details: [
        "NN/g recommande d’évaluer le besoin utilisateur avant d’ajouter une fonctionnalité de chat",
        "Le guide présente les fonctions IA à périmètre étroit comme plus faciles à comprendre",
        "Les suggestions de prompts doivent être contextualisées, personnalisées et adaptées à la tâche",
        "Pour un chatbot spécifique à un site, NN/g mentionne notamment le relais humain, la flexibilité et la transparence",
        "Le contenu est un study guide ; il ne s’agit pas d’une nouvelle étude utilisateur chiffrée"
      ],
      longDescription: "L’UX conversationnelle est souvent abordée comme un choix d’interface : ajouter un chatbot ou une zone de prompt. Le guide de Nielsen Norman Group ramène le sujet au besoin utilisateur. Il recommande de vérifier que l’IA apporte une valeur réelle, de privilégier des fonctionnalités à périmètre étroit et d’aider les personnes à formuler leur demande avec des suggestions contextualisées. Pour les chatbots spécifiques à un site, le guide met notamment en avant la transparence, la flexibilité et la capacité à passer le relais à un humain. Cette publication est un study guide qui rassemble des travaux NN/g ; elle ne fournit pas un benchmark nouveau ni une mesure de performance. Pour TBS Education, le bon point de départ n’est donc pas un assistant généraliste sur tout le site. Il consiste à choisir une situation précise, par exemple orienter vers une formation, clarifier une étape d’admission ou expliquer un financement. Le scénario doit indiquer les données autorisées, les réponses à éviter, les informations officielles auxquelles se référer et le point de transfert vers un conseiller. Une interface conversationnelle n’est utile que si elle réduit une difficulté identifiée sans masquer les limites de l’information fournie.",
    },
    {
      id: 7,
      code: "IA / GOV",
      titre: "UNE IA MÉTIER À FORT ENJEU SE CONSTRUIT AVEC DES SOURCES, DES DROITS ET UNE REVUE",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "OpenAI annonce Astra for Law, une configuration de GPT-6 Astra pour le travail juridique. L’annonce décrit des sources autorisées, des permissions, des ethical walls, des contrôles de confidentialité et des processus de revue. Les résultats chiffrés reposent sur un benchmark privé et fournisseur.",
      category: "IA",
      sources: [
        { nom: "OpenAI", url: "https://openai.com/index/astra-for-law/" }
      ],
      details: [
        "Astra for Law est annoncé pour les cabinets et entreprises de technologie juridique, avec réglages, outils et contextes dédiés",
        "L’accès initial est annoncé via Trusted Access pour des cabinets sélectionnés, l’API étant indiquée comme prochaine",
        "OpenAI mentionne Zero Data Retention pour les cabinets API éligibles et l’exclusion par défaut de la revue humaine dans ChatGPT Enterprise",
        "L’éditeur cite des mécanismes de permissions, ethical walls, instructions client et supervision avec Latham & Watkins",
        "Sur 200 questions américaines d’un benchmark privé, OpenAI annonce 54,0 % de correction globale contre 38,7 % avec recherche web seule"
      ],
      longDescription: "OpenAI présente Astra for Law comme une configuration de GPT-6 Astra destinée à un environnement professionnel à forts enjeux. L’intérêt de l’annonce ne tient pas uniquement au modèle ou au benchmark associé. Elle décrit une architecture de travail qui combine sources autorisées, intégration aux workflows, permissions d’information, ethical walls, instructions client, confidentialité et supervision. OpenAI annonce également un accès initial via Trusted Access pour des cabinets sélectionnés. Sur son benchmark privé Legal Research Bench, l’éditeur annonce 54,0 % de correction globale sur 200 questions américaines, contre 38,7 % pour GPT-6 Astra avec recherche web seule. Ces chiffres sont ceux du fournisseur, sur un corpus et un protocole non entièrement détaillés ; ils ne sont ni indépendants ni transposables à TBS Education. La leçon pratique est néanmoins robuste : une IA métier doit être conçue comme un système gouverné. Pour TBS Education, avant tout usage en contexte candidat, étudiant, administratif ou pédagogique, il faut définir les sources autorisées, les données exclues, les rôles, les actions interdites, les conditions de revue humaine et les traces nécessaires pour vérifier une réponse ou une action.",
    },
    {
      id: 8,
      code: "INNOVATION MKT",
      titre: "UN ÉVÉNEMENT FULL-FUNNEL SE MESURE AU-DELÀ DE L’INSCRIPTION",
      badge: "À SURVEILLER",
      previousBadge: "À SURVEILLER",
      description: "LinkedIn Marketing Solutions présente le cas Siemens à Hannover Messe 2026 : contenus d’échauffement, retargeting, inscription, LinkedIn Live et Event Ads. La customer story rapporte 3,2× de leads, −39 % de coût par lead et +42 % de complétion de formulaire, sans méthodologie complète ni audit indépendant.",
      category: "INNOV MKT",
      sources: [
        { nom: "LinkedIn Marketing Solutions", url: "https://www.linkedin.com/business/marketing/blog/events/siemens-case-study-outcomes" }
      ],
      details: [
        "Siemens a organisé Hannover Messe 2026 comme un programme full-funnel plutôt qu’une seule campagne d’inscription",
        "La première phase a utilisé Thought Leader Ads, Video Ads et Single Image Ads sans demander l’inscription",
        "Les personnes engagées ont ensuite alimenté une audience de retargeting pour la génération de leads",
        "La diffusion LinkedIn Live et les Event Ads ont prolongé la portée au-delà de l’événement physique",
        "La customer story rapporte 3,2× de leads, −39 % de coût par lead et +42 % de complétion de formulaire en comparaison annuelle"
      ],
      longDescription: "La S39 retient un cas d’innovation marketing parce qu’il propose un mécanisme complet et des KPI explicitement publiés. LinkedIn Marketing Solutions décrit la présence de Siemens à Hannover Messe 2026 comme une séquence full-funnel : contenus d’expertise et vidéo pour faire émerger l’intérêt, constitution d’une audience engagée, retargeting et inscription, puis LinkedIn Live et Event Ads pour prolonger l’événement. La customer story rapporte une hausse annuelle de 3,2 fois des leads, une baisse de 39 % du coût par lead et une hausse de 42 % de la complétion de formulaire. Ces résultats viennent de la plateforme qui fournit les formats média ; la page ne donne ni budget, ni échantillon, ni définition détaillée des leads, ni méthode d’attribution isolant les effets. Pour TBS Education, le cas ne justifie donc aucune projection de performance. Il suggère toutefois une hypothèse de test : traiter une journée portes ouvertes, un webinaire ou un recrutement de programme comme un parcours qui commence avant l’inscription et se poursuit après. La mesure devrait inclure qualité de lead, présence, demande d’échange et progression vers la candidature, pas seulement le volume de formulaires.",
    }
  ],

  bonus: {
    label: "BONUS #10 — ROBOTIQUE",
    titre: "UN LABORATOIRE ROBOTISÉ PEUT MONTER, RÉGLER ET RELANCER UNE EXPÉRIENCE D’OPTIQUE",
    chiffre: "50 / 30",
    statLabel: "50 MANŒUVRES EN 30 MINUTES POUR UNE CAVITÉ LASER FONCTIONNELLE",
    description: "MIT News présente un laboratoire d’optique reconfigurable : un bras robotique, des composants identifiés par QR code, des caméras et un logiciel de pilotage ont construit une cavité laser, puis l’ont réalignée après une perturbation. Il s’agit d’une démonstration de laboratoire, pas d’un déploiement industriel.",
    details: [
      "Le système utilise un bras robotique à sept articulations, des boîtiers imprimés en 3D, des QR codes et des caméras",
      "Il assemble des composants optiques et ajuste miroirs et lentilles à l’échelle du micron",
      "Dans la démonstration, le robot a construit une cavité laser fonctionnelle en 50 manœuvres et 30 minutes",
      "Après déplacement volontaire d’un composant, le système a réaligné l’installation pour maintenir l’intensité du laser",
      "Les chercheurs développent un accès cloud pour soumettre des protocoles à distance ; la disponibilité continue reste une projection"
    ],
    perspective: "La robotique utile ne se limite pas à un bras qui agit : elle associe protocole, environnement instrumenté, vérification et reprise. Le même raisonnement s’applique à un agent numérique relié à des systèmes réels.",
    longDescription: "Le Bonus S39 décrit une forme de robotique moins spectaculaire qu’un humanoïde, mais plus proche d’une infrastructure autonome. MIT News présente un laboratoire d’optique reconfigurable capable d’assembler des composants standard, de régler la position et l’angle de miroirs et de lentilles à l’échelle du micron, puis de rétablir l’alignement après une perturbation. Le dispositif combine un bras à sept articulations, des boîtiers identifiés par QR code, des caméras et une couche logicielle de contrôle. Dans la démonstration rapportée, il a construit une cavité laser fonctionnelle en 50 manœuvres et 30 minutes. Les chercheurs envisagent une application cloud pour recevoir à distance des protocoles expérimentaux. Cette actualité reste une démonstration de laboratoire : elle ne publie ni taux d’erreur, ni coût, ni comparaison avec un opérateur humain, ni preuve de fonctionnement industriel continu. Pour TBS Education, l’analogie avec l’IA est simple : l’autonomie crédible suppose un environnement structuré, des règles vérifiables, des capteurs ou traces, et une capacité de reprise. Un prototype ne doit jamais être confondu avec une infrastructure fiable à grande échelle.",
    source: { nom: "MIT News", url: "https://news.mit.edu/2026/robotic-lab-runs-optics-experiments-on-demand-0917", date: "17 septembre 2026" }
  },

  actions: [
    { id: 1, titre: "Formaliser le contrat de chaque IA métier : finalité, sources autorisées, données exclues, rôles, actions interdites, revue humaine et traces de preuve", domaine: "IA / GOUVERNANCE", responsable: "DSI + JURIDIQUE + MÉTIERS" },
    { id: 2, titre: "Segmenter les requêtes candidat entre capture d’intention, influence générative et création de demande, avec un KPI distinct pour chaque objectif", domaine: "SEARCH / ANALYTICS", responsable: "SEO + DATA" },
    { id: 3, titre: "Vérifier les informations publiques des campus dans Google Business Profile : exactitude, fraîcheur, liens, coordonnées et cohérence avec les pages officielles", domaine: "SEO LOCAL / ÉDITORIAL", responsable: "DIGITAL + CAMPUS" },
    { id: 4, titre: "Auditer les contenus pouvant être consommés par un agent : propriétaire, droits, version, provenance, date de révision et circuit de publication", domaine: "DXP / GOUVERNANCE", responsable: "DIGITAL + ÉDITORIAL + DSI" },
    { id: 5, titre: "Tracer un scénario CRM de bout en bout : collecte, identité, consentement, activation, opposition et délai de mise à jour dans chaque destination", domaine: "DATA / CRM", responsable: "CRM + DATA PROTECTION + DSI" },
    { id: 6, titre: "Tester un événement ou un webinaire comme une séquence full-funnel et mesurer qualité de lead, présence, demande d’échange et progression vers la candidature", domaine: "INNOVATION MARKETING", responsable: "MARKETING + ADMISSIONS" }
  ],

  signauxEmergents: [
    { titre: "De l’IA généraliste à l’IA métier gouvernée", description: "Les cas à enjeux se structurent autour des sources, rôles, permissions, confidentialité et mécanismes de revue, pas autour du seul modèle.", horizon: "IMMÉDIAT" },
    { titre: "Du clic attribué à l’arbitrage par intention", description: "La recherche générative impose de distinguer capture de demande, influence de marque et création de demande en amont.", horizon: "IMMÉDIAT" },
    { titre: "Du DXP comme promesse au contenu gouverné comme infrastructure", description: "Les plateformes se disent agentiques ; la différenciation durable reste la qualité des contenus, des droits, des versions et des traces.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "Du profil client à une chaîne first-party explicable", description: "Identité, consentement et activation doivent rester reconstituables afin de rendre une personnalisation ou une automatisation acceptable.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "Du robot manipulateur à l’infrastructure expérimentale", description: "La robotique de recherche avance lorsque l’environnement, le protocole et les mécanismes de vérification sont conçus avec l’automatisation.", horizon: "MOYEN TERME (2027)" }
  ],

  tendancesPassees: [
    { titre: "De la présence générative à la qualité des informations publiques", description: "S37-S38 ont structuré la mesure AI Search et GEO. S39 étend le sujet aux informations locales susceptibles d’être reformulées dans une interface générative." },
    { titre: "Du score GEO à l’arbitrage par intention", description: "Après avoir séparé mention, citation, trafic et conversion, la S39 propose de distinguer capture, influence et création de demande." },
    { titre: "Du CMS agent-ready au contenu gouverné", description: "Les dernières semaines ont déplacé la priorité du volume généré vers l’autorité, les droits, les versions et la fraîcheur du contenu source." },
    { titre: "De la donnée first-party au consentement opérable", description: "Le fil rouge CDP se précise : l’identité ne vaut que si le rapprochement, la préférence et l’exclusion restent traçables de bout en bout." },
    { titre: "De l’agent sous contraintes à l’IA métier auditée", description: "La S39 explicite l’étape suivante : sources autorisées, permissions, confidentialité et revue humaine deviennent les composants du produit IA." }
  ]
};
