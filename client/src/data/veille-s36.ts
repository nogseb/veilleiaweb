export const veilleS36 = {
  week: 36,
  year: 2026,
  publicationDate: "31 août 2026",
  domainsCount: 8,
  sourcesCount: 13,
  criticalCount: 3,
  importantCount: 4,
  actionsCount: 6,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "LES AGENTS QUITTENT LE STATUT D’ASSISTANT : ILS ADMINISTRENT, ORCHESTRENT ET AGISSENT. LA DIFFÉRENCE ENTRE VALEUR ET RISQUE SE JOUE DÉSORMAIS DANS LES DROITS, LES VALIDATIONS ET LA TRAÇABILITÉ.",
  },

  statDominante: {
    chiffre: "45 %",
    titre: "DES TICKETS IT RÉSOLUS PAR LES FLUX AGENTIQUES D’OPENAI",
    description: "Dans la présentation de son plugin d’administration pour ChatGPT Work et Codex, OpenAI indique que ses flux IT déployés résolvent environ 45 % du volume de tickets. La métrique concerne le cas interne d’OpenAI et ne vaut pas comme benchmark universel. Elle rend toutefois tangible le passage de l’agent conversationnel à l’exécution d’actions encadrées par des rôles et des autorisations.",
  },

  syntheseExecutive: "La S36 montre que l’agent devient une couche d’exécution, et non plus seulement une interface de réponse : OpenAI rapproche administration conversationnelle, permissions et validation, tandis que son retour d’expérience sécurité rappelle la nécessité de sandbox, de droits minimaux et de supervision. Dans Search, Google teste des AI Overviews capables d’orienter vers AI Mode, ce qui allonge le parcours sans garantir un clic sortant ; la stratégie doit suivre l’utilité, la citation et l’aval du parcours, pas le seul ranking. La forte volatilité liée à l’August Spam Update et l’aménagement européen de la politique de réputation de site renforcent le besoin de contenus réellement maîtrisés, originaux et techniquement fiables. Les données structurées et les CMS deviennent des pipelines de production et de diffusion pour les machines autant que pour les visiteurs. Côté data, la priorité revient à la distinction entre données déclarées et inférées, ainsi qu’au droit de consulter et corriger le contexte client. Enfin, la normalisation du vocabulaire retail media et la dette UX induite par l’IA rappellent que l’industrialisation doit rester mesurable, gouvernée et utile.",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Zero-Click / GEO", "Schema.org", "DXP / Headless", "CDP & Data", "UX / IA", "IA / Gouvernance", "Innovation Marketing"],
    sources: ["Google Search Central", "Google Ads Developer Blog", "Search Engine Roundtable", "Search Engine Land", "CMSWire", "MarTech.org", "Nielsen Norman Group", "OpenAI", "IAB Australia", "Anthropic"],
    critiques: ["IA / gouvernance : l’agent d’administration doit rester contraint par les rôles, validations et journaux d’action", "Google AI Search : AI Overviews peut basculer l’utilisateur vers AI Mode, éloignant encore le parcours du clic sortant", "SEO : l’August Spam Update accroît la volatilité ; la résilience repose sur la qualité, l’originalité et le contrôle technique"],
    importants: ["GEO : 81 % des décideurs marketing interrogés désignent encore leur stratégie de visibilité IA comme du SEO", "DXP / Headless : Webflow expose audit, gestion CMS et contrôles de publication à ChatGPT et Codex", "CDP & Data : données déclarées, inférées et mécanismes de correction doivent être explicitement séparés", "UX / IA : la dette UX naît lorsque la vitesse de génération dépasse l’évaluation de l’utilité, de la confiance et de l’accessibilité"],
    actions: ["Définir une politique d’agent exécuteur : propriétaire, mandat, données, outils, droits minimums, validations et journalisation", "Surveiller séparément les parcours AI Overviews, AI Mode, citations et actions aval dans le dispositif de mesure Search", "Auditer les contenus tiers, comparateurs, espaces partenaires et gabarits susceptibles d’affecter la réputation de site ou la cohérence éditoriale", "Traiter les flux de données structurées comme du code : contrats, versioning, tests de transformation et contrôle des changements", "Mettre en place un droit de revue et de correction des données déclarées ou inférées utilisées pour guider un parcours candidat", "Intégrer une revue UX, accessibilité et compréhension avant toute mise en ligne accélérée par une IA"],
    emergents: ["Le moteur de recherche devient un environnement conversationnel continu, de l’aperçu à l’action", "L’administration elle-même bascule vers des interfaces agentiques sous contrôle de rôle", "La qualité du contexte client devient un sujet de droit de regard, pas seulement de modélisation", "Les conventions de données structurées se traitent comme des contrats de pipeline", "La robotique agentique progresse par tâches programmables, non par autonomie générale"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "AI OVERVIEWS COMMENCE À POUSSER VERS AI MODE",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "Google teste dans AI Overviews une réponse enrichie et un champ de suivi « Ask anything » qui ouvre AI Mode. Le résultat de recherche se rapproche d’un parcours conversationnel continu, dont la sortie vers le site devient une étape possible plutôt qu’un réflexe.",
      category: "GOOGLE",
      sources: [
        { nom: "Search Engine Roundtable", url: "https://www.seroundtable.com/google-ai-overviews-push-ai-mode-responses-41974.html" },
        { nom: "Search Engine Land", url: "https://searchengineland.com/google-august-2026-spam-update-ranking-impact-485980" }
      ],
      details: [
        "Le test étend dynamiquement certains AI Overviews avec une réponse enrichie",
        "Le champ « Ask anything » permet de poursuivre la recherche dans AI Mode",
        "Google indique que le comportement n’est activé que lorsqu’il est jugé utile",
        "Le module se retire si l’utilisateur a déjà commencé à faire défiler la page",
        "La mesure doit suivre la visibilité, l’engagement et les actions aval, pas seulement le clic organique"
      ],
      longDescription: "Le test signalé le 28 août ne constitue pas une annonce de disponibilité générale, mais il éclaire la direction prise par Search : AI Overviews peut devenir une rampe d’accès vers une conversation AI Mode. Le parcours ne s’arrête donc plus nécessairement à la lecture d’une synthèse ou au choix d’un lien. Pour TBS Education, l’enjeu est de distinguer trois niveaux de présence : être compris dans l’aperçu, être suffisamment fiable pour nourrir les suites de conversation, et conserver une raison crédible de poursuivre vers une page propriétaire. Les contenus sur les programmes, les admissions, les financements et les métiers doivent privilégier des réponses précises, traçables, mises à jour et facilement comparables. Il ne faut pas en déduire qu’un contenu interactif est indispensable partout. La bonne pratique est de recenser les questions candidat à forte complexité, puis d’identifier le format qui réduit réellement l’incertitude : tableau comparatif, simulateur transparent, checklist ou entretien humain. Le tableau de bord doit rapprocher impressions, citations, requêtes, navigation aval et conversions déclarées afin d’éviter de confondre exposition générative et acquisition réelle."
    },
    {
      id: 2,
      code: "ZERO-CLICK",
      titre: "LE GEO RESTE APPELÉ SEO, MAIS CHANGE D’OBJET",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Une enquête Fractl relayée par Search Engine Land auprès de 343 décideurs marketing américains indique que 81 % appellent encore leur stratégie de visibilité IA « SEO ». Le changement est moins sémantique qu’opérationnel : être cité et compris compte autant que générer une visite.",
      category: "GEO",
      sources: [
        { nom: "Search Engine Land", url: "https://searchengineland.com/ai-search-marketers-call-it-seo-485574" }
      ],
      details: [
        "L’enquête porte sur 343 décideurs marketing américains",
        "81 % nomment encore leur stratégie de visibilité IA « SEO »",
        "24 % du budget recherche et contenu est en moyenne alloué à cette visibilité, selon les répondants",
        "Ces chiffres sont déclaratifs et ne mesurent pas directement l’efficacité d’un canal",
        "La métrique pertinente associe visibilité, citation, demande de marque et qualité du parcours post-clic"
      ],
      longDescription: "L’étude relayée le 24 août confirme surtout un décalage de vocabulaire et de pilotage. Les organisations continuent d’appeler SEO une activité qui doit désormais prendre en compte les réponses synthétiques, les citations sans clic, les réponses conversationnelles et les assistants externes. Les 81 % et 24 % publiés par Search Engine Land décrivent des déclarations de décideurs américains ; ils ne justifient pas une transposition automatique à TBS Education. Le signal utile est ailleurs : un même dispositif éditorial doit produire de la visibilité dans les moteurs, de la compréhension pour les systèmes génératifs et de la confiance pour que l’utilisateur choisisse la marque lorsqu’il veut approfondir. Le GEO n’est donc pas une discipline séparée à acheter, ni un score propriétaire à poursuivre. Il prolonge la qualité SEO par un travail sur les entités, l’expertise identifiable, les informations de référence, les pages comparables et la cohérence du parcours. La gouvernance doit suivre les requêtes à enjeu candidat, les citations constatées, les questions non couvertes et les actions aval. Un test ne doit être retenu que s’il explicite son hypothèse, son périmètre et ses limites de mesure."
    },
    {
      id: 3,
      code: "SCHEMA.ORG",
      titre: "LES DONNÉES STRUCTURÉES DEVIENNENT DES CONTRATS DE PIPELINE",
      badge: "IMPORTANT",
      previousBadge: "CRITIQUE",
      description: "Google annonce des évolutions non versionnées de l’API Display & Video 360 et de ses Structured Data Files, effectives en octobre. Le signal ne concerne pas Schema.org directement, mais rappelle qu’une donnée structurée est un contrat technique soumis à des changements de schéma, de version et de transformation.",
      category: "SEO",
      sources: [
        { nom: "Google Ads Developer Blog", url: "https://ads-developers.googleblog.com/2026/08/october-2026-changes-to-display-video.html" }
      ],
      details: [
        "Google annonce trois changements non versionnés pour l’API Display & Video 360 et les Structured Data Files",
        "Les changements prendront effet en octobre 2026",
        "Les formats de données structurées doivent être surveillés à chaque modification de pipeline",
        "Schema.org ne doit pas être traité comme un raccourci de citation IA",
        "Le contrôle porte sur le contenu visible, la validité, la cohérence et le comportement après déploiement"
      ],
      longDescription: "L’annonce Google du 27 août concerne les Structured Data Files de Display & Video 360, et non le balisage Schema.org du web. Elle reste cependant utile comme signal de gouvernance : dès lors qu’une organisation fait circuler des données structurées entre outils, les formats deviennent des contrats de production. Les changements non versionnés, les mappings implicites et les transformations dans les connecteurs peuvent produire des écarts silencieux. Pour TBS Education, le principe est transposable aux objets programmes, événements, campus, auteurs et contenus : une propriété structurée doit avoir une définition, une source de vérité, un responsable et un contrôle de qualité. Le balisage Schema.org doit décrire fidèlement ce que la page affiche ; il ne faut ni le surcharger, ni inventer un « AI schema » présenté comme une garantie de citation. La priorité est une chaîne testable : schéma de contenu documenté, validation de type, contrôle du HTML rendu, suivi des erreurs et revue lors des évolutions CMS ou tag management. Cette discipline sécurise à la fois la découverte par les moteurs, les résultats enrichis, les flux partenaires et la réutilisation future par des assistants."
    },
    {
      id: 4,
      code: "DXP / HEADLESS",
      titre: "LE CMS OUVRE SES OPÉRATIONS AUX AGENTS, PAS SEULEMENT SA RÉDACTION",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "CMSWire rapporte que Webflow étend son intégration ChatGPT et l’accès à Codex avec des « Skills » couvrant l’audit de site, la gestion de contenu CMS et la validation avant publication en langage naturel. Le CMS devient une surface d’opérations qu’il faut encadrer, versionner et auditer.",
      category: "ARCHI",
      sources: [
        { nom: "CMSWire", url: "https://www.cmswire.com/digital-experience/webflow-brings-site-automation-to-chatgpt-codex/" }
      ],
      details: [
        "Les Skills annoncées couvrent audit de site, gestion de contenu CMS et validation avant publication",
        "L’intégration est étendue à ChatGPT et à Codex",
        "Le langage naturel réduit la friction d’accès aux opérations de contenu",
        "Les droits de publication, de suppression et de modification restent des contrôles essentiels",
        "Un CMS agent-ready doit tracer qui a demandé, proposé, validé et appliqué un changement"
      ],
      longDescription: "La nouvelle intégration Webflow décrite par CMSWire le 26 août marque un déplacement important : l’IA ne sert plus uniquement à générer un brouillon, mais à piloter des opérations sur le CMS. Auditer un site, modifier un contenu ou préparer une publication à partir d’une instruction en langage naturel peut accélérer les équipes. Cela rapproche cependant l’interface conversationnelle des droits d’administration. Pour TBS Education, l’arbitrage ne porte pas sur l’adoption d’un fournisseur, mais sur le niveau de contrôle exigé par toute architecture comparable. Il faut distinguer les actions de lecture, de recommandation, de préparation, de modification en brouillon et de publication. Chacune doit être associée à un rôle, à un périmètre de contenu, à une conservation de l’historique et à une possibilité de retour arrière. Les contenus à fort enjeu — admissions, coûts, conditions réglementaires, calendrier ou informations institutionnelles — nécessitent une validation humaine explicite. Une expérimentation utile cible une tâche bornée, avec un indicateur de temps gagné, un contrôle d’erreurs éditoriales et une vérification d’accessibilité. L’automatisation ne doit pas contourner la gouvernance éditoriale existante ; elle doit la rendre plus observable."
    },
    {
      id: 5,
      code: "CDP & DATA",
      titre: "LA DONNÉE CLIENT DOIT POUVOIR ÊTRE DISTINGUÉE, RELUE ET CORRIGÉE",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "MarTech.org rappelle la nécessité de différencier données déclarées et données inférées, puis de permettre aux personnes de comprendre, corriger et contrôler leur profil. Avec des recommandations ou actions pilotées par agents, cette séparation devient un prérequis de confiance et de conformité.",
      category: "CDP",
      sources: [
        { nom: "MarTech.org", url: "https://martech.org/better-data-starts-with-treating-people-like-people/" },
        { nom: "MarTech.org", url: "https://martech.org/the-latest-ai-powered-martech-news-and-releases/" }
      ],
      details: [
        "Les données fournies par une personne et les déductions algorithmiques n’ont pas le même statut",
        "Un profil utilisable par un agent doit pouvoir être inspecté et corrigé",
        "Les annonces martech de la semaine accélèrent la création de segments et de campagnes en langage naturel",
        "Une recommandation est d’autant plus risquée qu’elle s’appuie sur une donnée obsolète ou inférée à tort",
        "La source de vérité, la fraîcheur et le consentement doivent être visibles dans le modèle de donnée"
      ],
      longDescription: "Le sujet data de la S36 ne réside pas dans une nouvelle plateforme, mais dans une règle de conception que les agents rendent incontournable : une donnée déclarée par un candidat n’est pas équivalente à une intention ou à une propension déduite. MarTech.org insiste le 27 août sur la possibilité de comprendre, corriger et contrôler son profil. Cette exigence devient plus concrète si un assistant recommande une formation, adapte une relance ou priorise une demande. Pour TBS Education, le chantier est de cartographier les attributs réellement utilisés dans les parcours : provenance, date de dernière mise à jour, base légale, niveau de confiance, sensibilité, durée de conservation et outil source. Les données inférées doivent être identifiées comme telles et ne pas devenir des faits silencieux dans le CRM ou le CDP. Les équipes métier ont besoin d’un mécanisme simple pour signaler une erreur et d’un circuit clair de correction. L’agent peut aider à synthétiser un contexte, mais sa décision ne doit jamais être plus certaine que les données qui l’alimentent. C’est le prérequis pour une personnalisation utile, explicable et proportionnée."
    },
    {
      id: 6,
      code: "UX / IA",
      titre: "LA VITESSE DE GÉNÉRATION CRÉE UNE DETTE UX À REMBOURSER",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Nielsen Norman Group décrit une « dette UX » lorsque la capacité de l’IA à produire interfaces et contenus plus vite que les équipes ne les évaluent fragilise l’utilité, la compréhension, l’accessibilité et la confiance. L’accélération ne remplace pas la recherche ni la revue d’expérience.",
      category: "UX",
      sources: [
        { nom: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/ai-ux-debt/" }
      ],
      details: [
        "La dette UX augmente lorsque la production dépasse la capacité d’évaluation",
        "Les interfaces générées peuvent produire des incohérences de contenu, d’interaction et de ton",
        "L’accessibilité et la compréhension doivent être vérifiées avant publication",
        "Les règles et retours UX doivent nourrir les systèmes de génération",
        "Le gain de vitesse n’a de valeur que s’il réduit réellement le temps de résolution d’un besoin utilisateur"
      ],
      longDescription: "Nielsen Norman Group alerte le 28 août sur une dette UX spécifique aux produits accélérés par IA. Elle apparaît lorsque l’outil produit assez vite pour que les étapes de recherche, de design critique, d’accessibilité et de validation deviennent le goulot d’étranglement. Le risque n’est pas uniquement esthétique : des réponses incohérentes, des formulaires mal hiérarchisés, des libellés ambigus ou des parcours opaques peuvent dégrader la confiance candidat. Pour TBS Education, l’IA peut utilement accélérer l’exploration de variantes, la préparation d’un contenu ou la consolidation de retours. Elle doit cependant être insérée dans une boucle courte mais réelle : critères d’utilité, contrôle d’accessibilité, relecture métier, vérification des informations et test sur un besoin concret. Le bon dispositif n’est pas d’augmenter les écrans ou les assistants, mais de faire remonter les erreurs et les hésitations afin d’améliorer les règles de conception. Une fiche de test doit préciser le public, le scénario, l’hypothèse, l’indicateur et la décision attendue. Cette discipline empêche que l’IA convertisse un gain de production local en coût d’expérience durable."
    },
    {
      id: 7,
      code: "IA / GOV",
      titre: "L’AGENT EXÉCUTE : LES DROITS ET LA TRAÇABILITÉ DEVIENNENT LE PRODUIT",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "OpenAI lance un plugin d’administration conversationnelle pour ChatGPT Work et Codex, conçu pour respecter rôles, permissions et approbations. La même semaine, son retour d’expérience sécurité souligne le renforcement annoncé des sandbox, du contrôle d’accès réseau et du monitoring pour les agents capables d’agir.",
      category: "IA",
      sources: [
        { nom: "OpenAI", url: "https://openai.com/index/introducing-admin-plugin/" },
        { nom: "OpenAI", url: "https://openai.com/index/hugging-face-incident-and-the-road-ahead/" }
      ],
      details: [
        "Le plugin Admin permet d’interroger l’activité, gérer des accès et mener des actions supportées dans une conversation",
        "OpenAI indique que l’outil n’accorde pas de permissions au-delà du rôle existant",
        "OpenAI rapporte environ 45 % de tickets IT résolus par ses flux déployés en interne",
        "Le retour d’expérience sécurité annonce un durcissement de l’isolation, de l’accès internet et du monitoring",
        "Tout agent doit disposer d’un mandat, de droits minimaux, d’un journal et d’une validation humaine avant action sensible"
      ],
      longDescription: "Les deux publications OpenAI des 25 et 26 août doivent être lues ensemble. Le plugin Admin pour ChatGPT Work et Codex rend l’administration plus simple : un administrateur peut analyser l’usage, examiner un accès, ajuster un paramètre autorisé et obtenir une confirmation sans quitter l’interface conversationnelle. L’éditeur précise que le plugin reste borné par les rôles et permissions existants. Cette promesse est essentielle, car son retour d’expérience sécurité publié le lendemain rappelle que les agents persistants, outillés et collaboratifs exigent une isolation technique, une maîtrise des accès et un monitoring adapté. Les détails techniques de l’incident ne constituent pas un modèle à reproduire ; le signal stratégique est que le contrôle ne peut plus être laissé au prompt. Pour TBS Education, chaque agent doit avoir une fiche de mandat : propriétaire, finalité, données accessibles, outils autorisés, limites, action de confirmation, logs, mécanisme d’arrêt et procédure d’incident. Les agents peuvent réduire des tâches répétitives, mais aucune automatisation ne doit publier, modifier une donnée CRM, engager un budget, contacter un tiers ou accéder à une donnée sensible sans contrôle adapté au risque."
    },
    {
      id: 8,
      code: "INNOVATION MKT",
      titre: "RETAIL MEDIA : LA NORMALISATION DES MÉTRIQUES PRÉCÈDE L’IA À GRANDE ÉCHELLE",
      badge: "À SURVEILLER",
      previousBadge: "À SURVEILLER",
      description: "IAB Australia publie le Commerce and Retail Media Glossary 2026, structuré autour des formats, données, ciblage, attribution, exposition, parcours et modèles commerciaux. Aucun cas KPI n’a été retenu cette semaine : le signal porte sur les fondations communes nécessaires à une mesure comparable.",
      category: "INNOV MKT",
      sources: [
        { nom: "IAB Australia", url: "https://www.iabaustralia.com.au/resource/commerce-and-retail-media-glossary-2026/" }
      ],
      details: [
        "Le glossaire a été publié le 25 août 2026 par l’IAB Australia Retail Media Council",
        "Il couvre notamment données, ciblage, attribution, exposition, comportements et parcours d’achat",
        "Les définitions s’appuient sur des travaux IAB Australia, IAB Europe et standards in-store IAB Europe/US",
        "La publication ne fournit pas de résultats de campagne ou de KPI de performance",
        "La S36 ne retient donc aucun cas d’école chiffré, conformément au filtre de vérification"
      ],
      longDescription: "L’innovation marketing de la semaine est moins spectaculaire qu’une campagne primée, mais plus structurante : l’IAB Australia a publié le 25 août une mise à jour de son glossaire Commerce and Retail Media. Les catégories couvrent l’écosystème, les formats, l’audience, les données, le ciblage, l’attribution, l’exposition, le comportement d’achat et les modèles commerciaux. Il ne s’agit pas d’un benchmark de performance ni d’un cas d’école à reprendre. La S36 ne retient d’ailleurs aucun cas chiffré dans la fenêtre de recherche, faute de source primaire attribuant un KPI à une marque, à un mécanisme et à une période. Le signal est méthodologique : la promesse d’optimisation par IA n’a de sens que si les événements, identifiants, définitions de conversion et règles d’attribution sont comparables. Pour TBS Education, cette logique vaut pour les partenariats média, le tracking d’acquisition et les dispositifs de contenu : avant d’automatiser un arbitrage ou de comparer deux canaux, il faut stabiliser les définitions, les sources de données et les limites d’interprétation. L’IA ne corrige pas un modèle de mesure ambigu ; elle peut en accélérer les biais."
    }
  ],

  bonus: {
    label: "BONUS #10 — ROBOTIQUE",
    titre: "UN STANDARD POUR DONNER DES MAINS AUX AGENTS",
    chiffre: "MINUTES",
    statLabel: "AU LIEU DE SEMAINES OU MOIS D’INTÉGRATION",
    description: "Anthropic ouvre une recherche sur le Model Hardware Standard : une spécification permettant à des agents d’opérer de manière encadrée microscopes, bras robotiques ou instruments programmables. Le futur geek devient concret : l’agent ne se limite plus à l’écran, mais la sécurité physique reste non négociable.",
    details: [
      "MHS est une recherche ouverte destinée à des laboratoires et industriels partenaires",
      "Le standard vise les équipements disposant d’une interface programmable",
      "Anthropic indique que l’intégration peut passer de semaines ou mois à des heures ou minutes",
      "Le système est annoncé comme agnostique aux modèles et compatible avec MCP",
      "Les expérimentations mettent aussi en évidence les limites des modèles face aux contraintes physiques réelles"
    ],
    perspective: "Un robot qui agit n’est pas un chatbot avec des roues. Le principe transférable à tout projet : un agent doit commencer sur une tâche programmable, bornée, observable et réversible avant de gagner en autonomie.",
    longDescription: "Le Model Hardware Standard, présenté par Anthropic le 27 août, donne une forme concrète à la robotique agentique : une spécification commune pour qu’un agent découvre, lise et commande de manière encadrée des instruments programmables tels que microscopes, bras robotiques ou systèmes de laboratoire. Anthropic indique que les installations hétérogènes demandent souvent des semaines ou des mois d’intégration et que le standard cherche à réduire ce travail à des heures ou des minutes. La promesse est intéressante, mais l’article insiste aussi sur les limites actuelles : les agents peuvent rencontrer des erreurs qu’ils interprètent mal faute de compréhension physique. Ce contraste est le vrai fun fact de la semaine : une IA peut coordonner plusieurs machines, sans pour autant disposer d’un sens commun fiable face au monde matériel. Pour TBS Education, la leçon est transversale. Toute automatisation ambitieuse doit démarrer par une tâche bornée, mesurable, contrôlable et réversible. La démonstration technologique ne vaut jamais preuve de robustesse. La sécurité dépend de limites d’action explicites, de données de retour exploitables et d’un humain capable d’interrompre ou de reprendre l’opération.",
    source: { nom: "Anthropic", url: "https://www.anthropic.com/news/model-hardware-standard-research-preview", date: "27 août 2026" }
  },

  actions: [
    { id: 1, titre: "Créer une fiche d’agent exécuteur obligatoire : propriétaire, finalité, données, outils, droits minimums, approbations, journaux, arrêt et procédure d’incident", domaine: "GOUVERNANCE / SÉCURITÉ", responsable: "DSI + JURIDIQUE + MÉTIERS" },
    { id: 2, titre: "Ajouter à la mesure Search une lecture conjointe des impressions AIO, bascules vers AI Mode, citations, requêtes, visites et actions aval", domaine: "SEARCH / ANALYTICS", responsable: "SEO + DATA" },
    { id: 3, titre: "Auditer les espaces tiers, comparateurs et gabarits associés aux domaines TBS Education afin de vérifier maîtrise éditoriale, valeur originale et cohérence de réputation", domaine: "SEO / ÉDITORIAL", responsable: "ÉDITORIAL + SEO + JURIDIQUE" },
    { id: 4, titre: "Traiter les objets structurés programmes, campus, événements et auteurs comme des contrats de données : définition, source de vérité, tests et journal des changements", domaine: "ARCHITECTURE / DATA", responsable: "DIGITAL + DSI" },
    { id: 5, titre: "Définir dans CRM/CDP la séparation visible entre données déclarées et données inférées, avec circuit de revue et correction lorsqu’un attribut pilote un parcours", domaine: "DATA / CRM", responsable: "CRM + DATA PROTECTION" },
    { id: 6, titre: "Imposer une revue UX courte avant publication assistée par IA : exactitude métier, compréhension, accessibilité, confiance et indicateur de valeur utilisateur", domaine: "UX / CONTENU", responsable: "UX + ÉDITORIAL" }
  ],

  signauxEmergents: [
    { titre: "De l’aperçu à la conversation continue", description: "AI Overviews peut devenir une entrée vers AI Mode : la visibilité doit être pensée comme un parcours de réponse, pas comme une position isolée.", horizon: "IMMÉDIAT" },
    { titre: "De l’assistant à l’agent exécuteur", description: "Les interfaces conversationnelles prennent en charge des actions d’administration ; rôle, validation et journalisation deviennent des fonctionnalités clés.", horizon: "IMMÉDIAT" },
    { titre: "De la donnée client au droit de regard", description: "L’usage agentique rend indispensable la distinction entre information déclarée, inférée, fiable, obsolète ou corrigeable.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "De Schema au contrat de données", description: "Les modèles structurés et leurs transformations doivent être suivis, testés et versionnés à chaque évolution de CMS ou de flux.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "De l’agent logiciel au monde physique", description: "Les standards d’interopérabilité ouvrent l’accès à des appareils programmables, tout en renforçant les exigences de sûreté et de supervision.", horizon: "MOYEN TERME (2027)" }
  ],

  tendancesPassees: [
    { titre: "De la réponse générative au parcours génératif", description: "S34-S35 avaient documenté les interfaces génératives dans Search. S36 montre l’étape suivante : AI Overviews peut orienter l’utilisateur vers une conversation AI Mode prolongée." },
    { titre: "Du GEO au pilotage de la présence", description: "Les semaines précédentes ont fait émerger citations, préférence de source et trafic IA. S36 confirme que le nom importe moins que le modèle de mesure reliant présence, confiance et action aval." },
    { titre: "De Schema comme balisage à la donnée comme contrat", description: "S35 avait mis l’accent sur le parsing JSON-LD. S36 généralise le sujet : formats, transformations et sources de vérité doivent être contrôlés comme des dépendances de production." },
    { titre: "Du CMS assistant au CMS opérable par agent", description: "S34-S35 suivaient le contenu agent-ready. S36 ajoute la dimension opérationnelle : audit, préparation et gestion CMS deviennent accessibles via une interface conversationnelle, sous droits et validation." },
    { titre: "De l’autonomie contrôlée à la sécurité de l’exécution", description: "Le fil rouge S33-S35 se renforce : les bénéfices des agents dépendent moins du prompt que du mandat, de l’isolation, des permissions minimales, des traces et de l’arrêt possible." }
  ]
};
