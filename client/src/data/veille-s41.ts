export const veilleS41 = {
  week: 41,
  year: 2026,
  publicationDate: "5 octobre 2026",
  domainsCount: 3,
  sourcesCount: 7,
  criticalCount: 1,
  importantCount: 2,
  actionsCount: 5,
  emergingCount: 4,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "DU CHAT À L’ACTION SUPERVISÉE, LA VISIBILITÉ ET L’AUTONOMIE DOIVENT ÊTRE MESURÉES PAR ÉTAPE, PAS PAR UN SCORE UNIQUE.",
  },

  statDominante: {
    chiffre: "4 000+",
    titre: "APPLICATIONS AUXQUELLES OPENAI INDIQUE QUE SES AGENTS « DOTS » PEUVENT SE CONNECTER",
    description: "OpenAI présente ce chiffre dans une annonce produit du 29 septembre. Il ne constitue ni un KPI d’adoption, ni une mesure indépendante de qualité UX, ni une preuve de pertinence pour TBS Education. Il rend toutefois concret l’enjeu de conception : plus un agent peut accéder à des applications, plus les permissions, validations, traces et reprises humaines doivent être explicites.",
  },

  syntheseExecutive: "La S41 est volontairement resserrée : seules trois analyses disposent de sources qualifiées dans la fenêtre du 29 septembre au 5 octobre, et cinq domaines sont masqués plutôt que complétés par des contenus hors période. Google illustre des parcours AI Mode comparatifs, locaux et orientés tâche, sans publier de KPI de visibilité ou de trafic. Le signal GEO rappelle que mention, citation, impression, clic et conversion sont des objets distincts, à mesurer sur un panel local multi-moteurs et non à condenser en score unique. OpenAI décrit des agents persistants avec permissions applicatives, vue d’activité, approbations, blocages et relais utilisateur ; ces annonces restent des déclarations fournisseur à tester localement. Pour TBS Education, la priorité est double : publier des contenus experts, originaux et vérifiables, puis concevoir les assistants comme des services supervisés à faible risque. Aucun cas d’école marketing ne satisfait simultanément les critères de marque, période, mécanisme et KPI vérifiable cette semaine.",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Zero-Click / GEO", "UX / IA conversationnelle"],
    sources: ["Google Search", "M+C Saatchi Performance", "Google Search Central", "OpenAI — dots", "OpenAI — sécurité dots", "OpenAI — guide GPT-6", "MIT News"],
    critiques: ["Zero-Click / GEO : mention, citation, impression, clic et conversion ne sont pas interchangeables"],
    importants: ["Google AI Search : AI Mode met en avant des requêtes comparatives, locales et orientées tâche", "UX / IA : un agent persistant doit rendre permissions, activité, validations et reprise humaine compréhensibles"],
    actions: ["Constituer un panel local de requêtes GEO multi-moteurs", "Rendre la validation humaine obligatoire pour les contenus IA publiés", "Structurer les contenus comparatifs et vérifiables utiles aux parcours candidat", "Prototyper une matrice permissions–approbations–relais humain à faible risque", "Conserver le registre des sujets masqués et des exclusions hebdomadaires"],
    emergents: ["Du SEO de clic au protocole de visibilité par étape", "Du chat question-réponse à la supervision d’agent", "De l’annonce produit à la preuve locale de valeur", "Du signal hebdomadaire au registre d’exclusions vérifiable"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "AI MODE ILLUSTRE DES REQUÊTES COMPARATIVES ET ORIENTÉES TÂCHE",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Google présente AI Mode comme une interface capable de comparer des options en tableau, de chercher un équipement disponible localement et de personnaliser des recommandations de cours. L’article est illustratif : il ne publie ni évolution de Search Console, ni déploiement homogène, ni KPI de trafic.",
      category: "GOOGLE",
      sources: [
        { nom: "Google — Search", url: "https://blog.google/products-and-platforms/products/search/coffee-tips-google-search/" }
      ],
      details: [
        "Google montre une comparaison de méthodes de préparation selon le goût, la facilité et l’équipement, restituée sous forme de tableau",
        "AI Mode est aussi illustré pour des recherches locales d’équipement avec des formulations telles que « nearby » ou « near me »",
        "La source évoque des recommandations de cours locaux personnalisées à partir d’applications Google connectées",
        "L’article ne documente ni changement d’algorithme, ni mise à jour de Search Console, ni couverture géographique homogène",
        "Aucune statistique de performance, de trafic ou de visibilité n’est retenue : les formulations marketing sans série ni méthode sont exclues"
      ],
      longDescription: "La publication Google du 1er octobre est utile comme signal de format, pas comme preuve de marché. AI Mode y est illustré par des demandes qui comparent plusieurs méthodes selon le goût, la facilité d’usage et l’équipement requis, avec une restitution sous forme de tableau. Google décrit aussi la recherche locale d’équipement et la possibilité de personnaliser une recommandation de cours locaux à partir d’applications connectées. Ces exemples suggèrent des parcours plus comparatifs, localisés et orientés tâche que la simple consultation d’une liste de liens. Ils ne démontrent cependant ni déploiement homogène, ni disponibilité française, ni visibilité accrue pour une marque ou un établissement. L’article ne publie aucun volume, impression, clic, taux de conversion ou résultat SEO. Pour TBS Education, la conséquence utile est éditoriale : les pages programmes, campus, admissions et formation continue doivent répondre à des questions précises, comparables et vérifiables, avec des informations stables sur conditions d’admission, calendrier, modalités, localisation et accompagnement. Il faut suivre les apparitions dans les interfaces génératives séparément des données web classiques. Une démonstration produit ne doit jamais devenir un KPI de visibilité.",
    },
    {
      id: 2,
      code: "ZERO-CLICK",
      titre: "GEO : MENTION, CITATION, CLIC ET CONVERSION RESTENT QUATRE OBJETS DIFFÉRENTS",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "M+C Saatchi Performance recommande de compléter le SEO par les mentions, citations et part de voix dans les réponses IA. Les chiffres qu’il relaie proviennent de tiers et de périmètres surtout américains : ils ne sont ni une mesure TBS Education ni une preuve causale de performance GEO.",
      category: "GEO",
      sources: [
        { nom: "M+C Saatchi Performance", url: "https://www.mcsaatchiperformance.com/news/generative-engine-optimization-data-trends-and-tactics/" },
        { nom: "Google Search Central", url: "https://developers.google.com/search/updates" }
      ],
      details: [
        "L’article définit le GEO comme l’optimisation de la visibilité d’une marque dans des réponses produites par plusieurs moteurs IA",
        "Il préconise de suivre les mentions, citations et la part de voix en complément des clics et visites",
        "Les statistiques zero-click, AI Overviews et mentions sont explicitement attribuées par l’article à SparkToro/Similarweb, Advanced Web Ranking et AirOps ; elles ne sont pas reprises comme KPI S41",
        "Google rappelle qu’une production massive de pages IA sans valeur ajoutée peut relever de l’abus de contenu à grande échelle",
        "Google demande exactitude, qualité, pertinence, vérification humaine et conformité aux Search Essentials et aux politiques anti-spam"
      ],
      longDescription: "Le sujet S41 n’est pas de promettre un nouveau levier GEO, mais de clarifier ce qui doit être mesuré. L’article de M+C Saatchi Performance distingue la présence d’une marque dans les réponses générées, les mentions, les citations, la part de voix, les clics et les visites. Les statistiques qu’il rapporte sont attribuées à SparkToro sur données Similarweb, Advanced Web Ranking et AirOps ; elles portent majoritairement sur les États-Unis et reposent sur des définitions, périodes et méthodes hétérogènes. Elles ne sont donc pas reprises comme indicateurs de performance pour TBS Education. Le rappel Google du 1er octobre est plus opérationnel : des pages générées en masse sans valeur ajoutée peuvent relever de l’abus de contenu à grande échelle, et les sorties IA demandent une vérification humaine. Pour TBS Education, le chantier consiste à constituer un panel documenté de requêtes sur les formations, le management, l’alternance, les campus et la recherche. Pour chaque moteur, il faut enregistrer la date, la réponse, les citations, le lien affiché, puis rapprocher ces observations des impressions, clics référents et conversions réelles. Une citation n’est pas un clic, un clic n’est pas une candidature, et aucun de ces signaux ne remplace une mesure de qualité du parcours.",
    },
    {
      id: 6,
      code: "UX / IA",
      titre: "UN AGENT PERSISTANT DOIT EXPOSER PERMISSIONS, ÉTAT ET RELAIS HUMAIN",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "OpenAI présente des agents persistants accessibles par conversation, avec permissions applicatives, règles, vue d’activité, approbations, redirection ou arrêt du travail. Les sources restent des annonces fournisseur et ne fournissent pas de KPI indépendant de satisfaction, de réussite ou d’adoption.",
      category: "UX",
      sources: [
        { nom: "OpenAI — Introducing dots", url: "https://openai.com/index/introducing-dots/" },
        { nom: "OpenAI — Safety, security and privacy into dots", url: "https://openai.com/index/how-we-build-safety-security-and-privacy-into-dots/" },
        { nom: "OpenAI — A model guide for the GPT-6 family", url: "https://openai.com/index/practical-guide-building-gpt-6/" }
      ],
      details: [
        "OpenAI décrit des agents persistants accessibles dans ChatGPT, Slack et Teams, avec conservation de contexte entre canaux",
        "Les permissions peuvent être accordées, soumises à approbation ou bloquées selon l’application et la règle définie",
        "Activity View doit permettre de suivre, corriger, rediriger ou arrêter le travail d’un agent",
        "Les actions sensibles peuvent être rendues à l’utilisateur ; certains actes requièrent une approbation à chaque fois",
        "OpenAI signale explicitement les risques d’erreur et de prompt injection dans les contenus consultés"
      ],
      longDescription: "Les sources OpenAI de la semaine décrivent une évolution d’interface importante : la conversation devient le point d’entrée d’un travail qui peut durer, changer de canal et agir sur des applications connectées. L’utilisateur ne dialogue plus seulement avec un assistant ; il confie une mission, observe une activité, répond à des demandes de précision et peut reprendre la main. Les mécanismes documentés comprennent des permissions par application, des règles, une vue d’activité, des approbations et la possibilité de corriger ou d’arrêter le travail. OpenAI précise aussi que l’agent peut se tromper et que les e-mails, documents ou pages consultés peuvent contenir des prompt injections. L’annonce ne fournit aucun KPI indépendant de satisfaction, de productivité, de réussite ou d’adoption. Elle ne justifie donc pas un déploiement généralisé. Pour TBS Education, un assistant destiné aux étudiants, admissions, équipes pédagogiques ou services support doit rendre lisible ce qu’il peut lire, préparer et exécuter. Les actions à conséquence doivent être explicitement confirmées, les motifs de blocage compris, et le relais humain doit transporter le contexte de la conversation. Un premier prototype doit rester à faible risque et mesurer compréhension des permissions, corrections, abandons, erreurs de routage et qualité de reprise par un collaborateur.",
    },
  ],

  bonus: {
    label: "BONUS #10 — ROBOTIQUE",
    titre: "DES CELLULES MUSCULAIRES FONT NAGER UN ROBOT ULTRAFIN",
    chiffre: "0,5 MM",
    statLabel: "ÉPAISSEUR DU FILM DE GELMA UTILISÉ COMME SQUELETTE PAR LE ROBOT BIOHYBRIDE DU MIT",
    description: "MIT News présente un robot nageur biohybride très fin : deux nageoires de gel sont recouvertes de cellules musculaires vivantes modifiées pour répondre à la lumière. Le prototype a nagé et tourné dans un labyrinthe simple. C’est une preuve de concept de laboratoire, pas une technologie commercialisée.",
    details: [
      "Le robot est formé d’un film de gel très fin dont les deux moitiés servent de nageoires",
      "Chaque nageoire reçoit une couche de cellules musculaires vivantes modifiées pour se contracter sous flashes lumineux",
      "L’éclairage différencié permet de contrôler direction et vitesse dans un labyrinthe aquatique simple",
      "MIT rapporte une vitesse maximale d’environ quatre longueurs corporelles par minute",
      "La démonstration repose sur une boîte de Petri et une lumière déplacée manuellement ; les applications environnementales restent prospectives"
    ],
    perspective: "La robotique biohybride rend visible une convergence entre matériaux souples, ingénierie tissulaire et contrôle optique. Elle n’efface pas l’écart entre une démonstration académique et un usage opérationnel responsable.",
    longDescription: "Le Bonus S41 propose un fait scientifique, non une promesse industrielle. MIT News décrit un robot nageur biohybride bidimensionnel très fin dont le squelette est un film de GelMA de 0,5 mm. Les deux moitiés du film forment des nageoires recouvertes de cellules musculaires vivantes, génétiquement modifiées pour se contracter sous l’effet de flashes lumineux. En éclairant une nageoire ou l’autre, les chercheurs contrôlent la direction et la vitesse du prototype, qui a nagé et tourné dans un labyrinthe aquatique simple. MIT rapporte une vitesse maximale d’environ quatre longueurs corporelles par minute. La démonstration se déroule dans une boîte de Petri, avec une source lumineuse déplacée manuellement, et le robot reste lent ; il s’agit donc d’une preuve de concept de laboratoire. Les applications de surveillance environnementale ou d’exploration d’environnements fragiles sont évoquées comme pistes futures, non comme capacités démontrées. Pour TBS Education, l’intérêt est pédagogique : ce cas permet de distinguer une innovation scientifique, une maturité technologique et une solution déployable. Il ouvre aussi une discussion sur les compétences, l’éthique et les contrôles nécessaires lorsqu’une capacité biologique et un système robotique sont combinés.",
    source: { nom: "MIT News", url: "https://news.mit.edu/2026/powered-by-muscle-cells-paper-thin-robot-swims-through-watery-maze-0929", date: "29 septembre 2026" }
  },

  actions: [
    { id: 1, titre: "Constituer un panel local de requêtes GEO et consigner pour chaque moteur la réponse, les citations, le lien, les impressions, les clics référents et les conversions", domaine: "SEARCH / ANALYTICS", responsable: "SEO + DATA" },
    { id: 2, titre: "Rendre obligatoire la validation humaine, l’attribution des sources et la vérification factuelle avant publication d’un contenu produit avec IA", domaine: "CONTENU / GOUVERNANCE", responsable: "ÉDITORIAL + SEO" },
    { id: 3, titre: "Prioriser des contenus programmes, campus et admissions comparatifs, localisés, précis et facilement vérifiables", domaine: "CONTENU / CONVERSION", responsable: "MARKETING + ADMISSIONS" },
    { id: 4, titre: "Prototyper un assistant à faible risque avec matrice permissions–approbations–relais humain, journal d’activité et tests utilisateurs", domaine: "UX / IA", responsable: "DIGITAL + UX + MÉTIERS" },
    { id: 5, titre: "Conserver le registre des thèmes masqués et des exclusions afin de ne pas transformer une absence de source qualifiée en pseudo-signal", domaine: "VEILLE / GOUVERNANCE", responsable: "DIGITAL + ÉDITORIAL" }
  ],

  signauxEmergents: [
    { titre: "Du SEO de clic au protocole de visibilité par étape", description: "La présence, la mention, la citation, le lien, la visite et la conversion doivent être instrumentés séparément par moteur et par requête.", horizon: "IMMÉDIAT" },
    { titre: "Du chat question-réponse à la supervision d’agent", description: "L’interface doit rendre visibles la mission, les permissions, l’activité, les validations, les motifs de blocage et la reprise humaine.", horizon: "IMMÉDIAT" },
    { titre: "De l’annonce produit à la preuve locale de valeur", description: "Les promesses de produit doivent être testées sur un périmètre limité avant toute décision d’échelle ou KPI de performance.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "Du signal hebdomadaire au registre d’exclusions vérifiable", description: "Masquer un thème non sourçable protège la qualité éditoriale et évite de recycler artificiellement des faits hors fenêtre.", horizon: "COURT TERME (Q4 2026)" }
  ],

  tendancesPassees: [
    { titre: "Du reporting multimodal au suivi par parcours", description: "Les semaines précédentes ont ajouté le format et le moteur aux analyses Search ; S41 renforce une lecture par réponse, citation, clic et action aval." },
    { titre: "Du contenu généré à la valeur originale vérifiée", description: "Les contenus assistés par IA doivent rester exacts, utiles, attribués, revus humainement et non produits en masse sans valeur ajoutée." },
    { titre: "Du chat d’interface à la délégation supervisée", description: "La conversation devient une couche de pilotage : action, permission, statut, confirmation et relais humain doivent être distincts." },
    { titre: "De l’identité agentique au contrôle des actions", description: "Les droits, traces et mécanismes de suspension restent nécessaires dès qu’un agent consulte des sources, applications ou données." },
    { titre: "Du cas marketing apparent à la causalité mesurable", description: "Un exemple créatif ou technologique ne devient un cas d’école que si marque, période, mécanisme et KPI vérifiable sont réunis." }
  ]
};
