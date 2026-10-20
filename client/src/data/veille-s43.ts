export const veilleS43 = {
  week: 43,
  year: 2026,
  publicationDate: "19 octobre 2026",
  domainsCount: 3,
  sourcesCount: 6,
  criticalCount: 0,
  importantCount: 2,
  actionsCount: 6,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "GOOGLE RENFORCE LA VISIBILITÉ DES LIENS ET DES SOURCES DANS AI MODE ET AI OVERVIEWS.",
  },

  statDominante: {
    chiffre: ">7×",
    titre: "D’UTILISATEURS DE PREFERRED SOURCES SELON GOOGLE DEPUIS LE DÉBUT DE L’ANNÉE",
    description: "Google avance cette progression dans son annonce du 15 octobre sur AI Mode et AI Overviews. Aucun volume absolu, périmètre détaillé ni méthode de calcul ne sont publiés : le chiffre est une déclaration de Google, pas une mesure indépendante de trafic ou de clic.",
  },

  syntheseExecutive: "La S43 publie trois analyses sur huit : Google AI Search, données structurées et innovation marketing ; les cinq autres domaines sont masqués faute de signal vérifiable dans la fenêtre du 13 au 19 octobre. Google augmente la présence et la mise en avant des renvois vers le Web dans ses réponses IA, mais ne publie aucun KPI de clic ou de visibilité. Côté données structurées, les changements Google et les travaux JSON-LD du W3C confirment la nécessité d’un balisage maintenu, sans annoncer de gain SEO. Côté marketing, le signal porte sur l’écart entre capacité achetée et capacité réellement utilisée des stacks MarTech : le sujet devient autant organisationnel que technologique. Aucun cas d’école avec marque, période, mécanisme et KPI vérifiables ne passe le seuil de publication cette semaine. Enfin, le Bonus robotique rappelle qu’une personnalisation observable reste difficile à généraliser, même dans un benchmark contrôlé.",

  dashboardDetails: {
    domaines: ["Google AI Search", "Schema.org / données structurées", "Innovation marketing / MarTech"],
    sources: ["Google — liens vers le Web depuis Search", "Google Search Central — documentation structurée", "W3C — activité JSON-LD", "CMSWire — hybridation MarTech", "CMSWire — usage des stacks", "arXiv — LIBERO-PeRM"],
    critiques: [],
    importants: ["Google AI : liens inline, sources officielles et contenus récents sont davantage exposés dans les réponses", "Innovation marketing : l’usage réel des capacités MarTech et l’intégration data restent les contraintes prioritaires"],
    actions: ["Inventorier les surfaces de liens AI Search visibles sur les requêtes stratégiques", "Renforcer l’autorité éditoriale et l’identification claire des contenus TBS Education", "Contrôler les fuseaux horaires du balisage Article", "Maintenir une veille sur les décisions JSON-LD sans anticiper une norme non adoptée", "Auditer les capacités MarTech réellement utilisées avant toute extension de stack", "Définir les décisions que les agents peuvent prendre sans validation humaine"],
    emergents: ["Du lien cité au parcours vers le Web", "Du balisage ponctuel au contrôle de qualité continu", "De la stack MarTech maximale à la stack utilisée", "De l’agent générique à l’agent sous limites de risque", "De la robotique performante à la personnalisation évaluée"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "GOOGLE RENFORCE LES LIENS ET LES SOURCES DANS AI MODE ET AI OVERVIEWS",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Google annonce davantage de liens inline, une mise en contexte de sources officielles, des carrousels de contenus récents et des profils d’éditeurs cliquables. L’annonce décrit des surfaces de distribution, pas une hausse démontrée de trafic ou de CTR.",
      category: "GOOGLE",
      sources: [
        { nom: "Google — More ways to connect with the web from Search", url: "https://blog.google/products-and-platforms/products/search/updates-ai-mode-overviews-explore-web/" },
      ],
      details: [
        "Google indique avoir substantiellement accru les liens inline et commencer à les afficher plus haut dans certaines réponses IA",
        "Une section de liens officiels avec contexte est testée pour des tâches reposant sur une ou deux sources officielles",
        "Les carrousels d’articles récents s’étendent à davantage de lieux et de langues et peuvent mettre en avant des Preferred Sources",
        "Des noms de créateurs et d’éditeurs deviennent testables comme liens vers leurs profils Search dans AI Mode sur certains résultats vidéo",
        "Google indique que Preferred Sources est utilisé par plus de sept fois plus de personnes depuis le début de l’année, sans volume ni méthode publiés",
      ],
      longDescription: "Le signal S43 est un changement de hiérarchie dans les réponses de recherche génératives : Google cherche à rendre les renvois vers le Web plus visibles et plus compréhensibles. L’annonce du 15 octobre cite cinq évolutions : des liens inline plus présents et plus hauts dans les réponses, une section de sources officielles pour certaines requêtes, des carrousels d’articles récents dans davantage de lieux et langues, des liens connexes plus visuels et des profils cliquables de créateurs ou d’éditeurs dans AI Mode. Preferred Sources est également présenté par Google comme utilisé par plus de sept fois plus de personnes qu’au début de l’année. Cette progression n’est pas un KPI de TBS Education : aucun volume absolu, périmètre, CTR, impression, classement ou méthode n’est publié. Certaines fonctions sont encore des tests et leur disponibilité n’est pas universelle. Pour TBS Education, l’enjeu opérationnel est d’observer les parcours sur les requêtes prioritaires : quelles sources apparaissent, quelle information est attribuée, quel lien est proposé, puis quel parcours est réellement accessible après le clic. La priorité reste l’autorité du contenu, la clarté de l’émetteur, la fraîcheur et l’expérience de destination ; aucune promesse de visibilité IA ne peut être déduite de cette annonce.",
    },
    {
      id: 3,
      code: "SCHEMA.ORG",
      titre: "GOOGLE CLARIFIE LE BALISAGE ET LE W3C POURSUIT DES TRAVAUX JSON-LD NON NORMATIFS",
      badge: "À SURVEILLER",
      previousBadge: "À SURVEILLER",
      description: "Google retire le visuel host group, documente vehicle listing et précise le fuseau horaire attendu pour Article. En parallèle, le W3C enregistre des issues et pull requests JSON-LD : ce sont des travaux d’interopérabilité en cours, pas des normes finalisées.",
      category: "SEO",
      sources: [
        { nom: "Google Search Central — Latest Search Documentation Updates", url: "https://developers.google.com/search/updates" },
        { nom: "W3C — JSON-LD Working Group Activity", url: "https://www.w3.org/groups/wg/json-ld/activity/" },
      ],
      details: [
        "Le 13 octobre, Google retire le visuel host group de sa galerie car il n’apparaît plus dans les résultats Search",
        "Le 16 octobre, Google ajoute une documentation dédiée aux vehicle listing structured data",
        "Le 17 octobre, la documentation Article structured data rappelle de fournir le fuseau horaire et précise le traitement lorsqu’il manque",
        "Les activités W3C des 15, 17 et 18 octobre portent sur un chemin mf:includes, le buffering avec contextes scopés et @nest, ainsi que les Language Maps",
        "Issues et pull requests JSON-LD sont des travaux en cours, non des changements normatifs ou des preuves de gain SEO",
      ],
      longDescription: "La S43 apporte des éléments d’exploitation, pas une nouvelle promesse de performance organique. Le journal de documentation Google indique le retrait du visuel host group, l’ajout d’une documentation pour vehicle listing structured data et une clarification sur le fuseau horaire dans Article structured data. Pour un écosystème éditorial comme celui de TBS Education, le fait directement utile est la discipline de qualité : une date ou un événement n’est pas correctement interprétable si son contexte temporel n’est pas explicite et cohérent. Ces changements ne démontrent ni hausse de visibilité ni enrichissement supplémentaire pour des pages programmes ou actualités. En parallèle, l’activité JSON-LD du W3C enregistre des discussions techniques sur des chemins fondés sur mf:includes, le buffering de contextes scopés, @nest et les Language Maps. Ces sujets éclairent l’interopérabilité à moyen terme mais restent des issues, commentaires et pull requests d’un espace présenté comme bêta. Ils ne doivent pas être formulés comme une norme publiée ni anticipés dans la feuille de route applicative. La bonne décision est de maintenir les graphes existants : entités, relations, dates, fuseaux, sources, versionnement et contrôle avant publication. Le balisage reste un contrat d’information plutôt qu’un levier SEO isolé.",
    },
    {
      id: 8,
      code: "INNOV MKT",
      titre: "LE MARTECH SE RECENTRE SUR L’HYBRIDATION, LA GOUVERNANCE ET L’USAGE RÉEL DES STACKS",
      badge: "IMPORTANT",
      previousBadge: "À SURVEILLER",
      description: "CMSWire décrit des stacks hybrides combinant streaming et batch, règles métier et agents. Ses chiffres rapportés soulignent surtout un enjeu de valeur : 49 % des capacités MarTech seraient utilisées, tandis que l’intégration data reste le premier défi cité.",
      category: "INNOV MKT",
      sources: [
        { nom: "CMSWire — Is the Era of Martech Absolutes Over?", url: "https://www.cmswire.com/digital-marketing/is-the-era-of-martech-absolutes-over-buyers-are-going-hybrid/" },
        { nom: "CMSWire — Why Are Marketers Still Paying for Martech They Never Use?", url: "https://www.cmswire.com/digital-marketing/why-are-marketers-still-paying-for-martech-they-never-use/" },
      ],
      details: [
        "CMSWire présente une approche hybride : streaming et batch, identités déterministes et probabilistes, règles métier et agents selon le cas d’usage",
        "Les décisions à faible risque peuvent être automatisées ; les décisions coûteuses, irréversibles ou engageant la marque doivent conserver une supervision humaine",
        "CMSWire rapporte, en citant Gartner 2025, 49 % des capacités de stack utilisées, contre 33 % en 2023 et 58 % en 2020",
        "La source rapporte 65,7 % d’organisations citant l’intégration de données comme principal défi de gestion de stack, attribution à une enquête MarTech 2025",
        "Les méthodes complètes, tailles d’échantillon et marges d’erreur des études citées ne sont pas détaillées dans les articles consultés",
      ],
      longDescription: "Le signal marketing S43 ne porte pas sur une campagne créative à reproduire, mais sur l’écart durable entre richesse de stack et capacité réelle d’exécution. CMSWire décrit un modèle hybride dans lequel streaming et batch, identité déterministe et probabiliste, règles métier et agents ne se remplacent pas : ils sont sélectionnés selon le risque, le coût, la latence et le cas d’usage. La même source recommande de réserver l’automatisation aux décisions à faible risque et de maintenir une supervision humaine pour les choix coûteux, irréversibles ou engageant la marque. Un second article cite 49 % de capacités MarTech utilisées, 19,4 % de budget marketing associé au MarTech et 65,7 % d’organisations qui feraient de l’intégration data leur premier défi. Ces chiffres sont attribués à Gartner ou à une enquête MarTech, mais les méthodologies complètes, échantillons et dates de terrain ne figurent pas dans les pages consultées. Ils servent donc à questionner le portefeuille, pas à fixer une cible chiffrée pour TBS Education. La recommandation est d’auditer les outils, les usages actifs, les flux de données, les droits d’accès et les décisions automatisées avant d’ajouter une couche IA ou une nouvelle solution. Aucun cas d’école avec marque, période, mécanisme et KPI de campagne vérifiables n’est retenu cette semaine.",
    },
  ],

  bonus: {
    label: "BONUS #10 — ROBOTIQUE",
    titre: "UN BENCHMARK MESURE 312 TÂCHES DE MANIPULATION ROBOTIQUE PERSONNALISÉE",
    chiffre: "312 TÂCHES",
    statLabel: "RÉPARTIES EN 5 SUITES POUR ÉVALUER DES PRÉFÉRENCES EXPRIMÉES EN LANGAGE",
    description: "Le preprint LIBERO-PeRM sépare l’accomplissement d’une tâche robotique de la satisfaction de préférences. Il étudie notamment le suivi zero-shot, l’apprentissage par démonstrations, la généralisation et les conflits de préférences, dans l’environnement de simulation LIBERO.",
    details: [
      "LIBERO-PeRM comprend cinq suites et 312 tâches avec démonstrations, métadonnées et métriques de satisfaction des préférences",
      "Le benchmark distingue la réussite de la tâche de la satisfaction d’une préférence exprimée en langage",
      "Les préférences couvrent le mouvement, la compétence et le profil utilisateur sans modifier l’objectif de la tâche",
      "Les auteurs indiquent que les politiques VLA actuelles peinent en personnalisation zero-shot, tandis que le supervised fine-tuning rend les préférences apprenables",
      "La généralisation, la décomposition et la gestion de conflits restent difficiles selon les résultats publiés",
    ],
    perspective: "La personnalisation robotique reste un problème de preuve : une préférence doit être comprise, respectée, généralisée et arbitrée sans modifier l’objectif ni sortir du périmètre de sécurité.",
    longDescription: "Le Bonus S43 est un benchmark, pas une démonstration de robot domestique prêt au déploiement. Le preprint LIBERO-PeRM, soumis sur arXiv le 15 octobre, évalue la manipulation robotique personnalisée en séparant deux critères : accomplir la tâche et respecter une préférence exprimée en langage. Le protocole comprend cinq suites et 312 tâches, avec démonstrations, métadonnées et métriques de satisfaction. Il couvre le suivi de préférences en zero-shot, l’apprentissage depuis des démonstrations, l’efficacité lorsque les exemples augmentent, la généralisation entre configurations et tâches, puis la composition ou le conflit de préférences. Les auteurs observent que les politiques vision-language-action actuelles rencontrent des difficultés en personnalisation zero-shot. Le supervised fine-tuning rend les préférences apprenables, mais la généralisation, la décomposition et la gestion de conflits restent complexes. Les résultats portent sur l’environnement de simulation LIBERO et le preprint n’a pas encore le statut d’une évaluation éditoriale définitive ; aucun taux de réussite global n’est repris car le résumé consulté ne le détaille pas. Le parallèle utile avec les agents logiciels est clair : une préférence utilisateur ne devient fiable que si le système peut l’expliciter, en vérifier l’effet, traiter les conflits et signaler ses limites.",
    source: { nom: "arXiv — LIBERO-PeRM", url: "https://arxiv.org/abs/2610.22372", date: "15 octobre 2026" }
  },

  actions: [
    { id: 1, titre: "Inventorier chaque semaine les surfaces AI Search visibles sur les requêtes stratégiques : source, lien, contexte et page de destination", domaine: "SEARCH / SEO", responsable: "SEO + ANALYTICS" },
    { id: 2, titre: "Renforcer l’autorité éditoriale, l’auteur, la date et la cohérence de destination des contenus TBS Education exposés à la recherche IA", domaine: "CONTENU / SEO", responsable: "ÉDITORIAL + SEO" },
    { id: 3, titre: "Contrôler les fuseaux horaires, dates et sources dans Article JSON-LD avant publication des actualités et événements", domaine: "DATA STRUCTURÉES", responsable: "ÉDITORIAL + TECHNIQUE" },
    { id: 4, titre: "Conserver une veille des décisions JSON-LD sans planifier de migration sur la base d’issues ou de pull requests non adoptées", domaine: "ARCHITECTURE", responsable: "DSI + ÉQUIPE WEB" },
    { id: 5, titre: "Auditer les capacités MarTech réellement utilisées, les flux data, les droits et les redondances avant toute extension de stack", domaine: "MARTECH / DATA", responsable: "MARKETING + DATA + DSI" },
    { id: 6, titre: "Définir les décisions qu’un agent peut prendre sans validation humaine et celles qui exigent un contrôle explicite", domaine: "GOUVERNANCE / IA", responsable: "DIGITAL + MÉTIERS + DPO" },
  ],

  signauxEmergents: [
    { titre: "Du lien cité au parcours vers le Web", description: "Les réponses IA déplacent l’enjeu vers la présence du lien, son contexte, sa destination et la qualité du parcours post-clic.", horizon: "IMMÉDIAT" },
    { titre: "Du balisage ponctuel au contrôle continu", description: "Dates, fuseaux, entités et relations doivent être validés comme une donnée éditoriale maintenue dans le temps.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "De la stack maximale à la stack utilisée", description: "La valeur MarTech dépend de l’usage actif, de l’intégration data et des décisions réellement opérées, pas du seul nombre d’outils.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "De l’agent générique à l’agent sous limites de risque", description: "Automatiser les décisions à faible risque et documenter les validations humaines devient une règle de conception marketing et métier.", horizon: "MOYEN TERME (2027)" },
    { titre: "De la robotique performante à la personnalisation évaluée", description: "Les préférences utilisateur exigent des protocoles pour mesurer apprentissage, généralisation et gestion des conflits.", horizon: "MOYEN TERME (2027)" },
  ],

  tendancesPassees: [
    { titre: "De la visibilité IA à la preuve de parcours", description: "Une réponse générative, un lien affiché, une visite et une conversion restent des signaux différents à relier sans les confondre." },
    { titre: "Des données structurées au contrat d’interopérabilité", description: "Le balisage produit de la valeur lorsqu’il reste cohérent, daté, sourcé, versionné et contrôlé entre équipes." },
    { titre: "De la first-party data à l’autorisation traçable", description: "Un profil exploitable porte aussi une provenance, une finalité, un consentement et un droit d’usage compréhensibles." },
    { titre: "De l’agent autonome à l’action contrôlable", description: "Les agents utiles en production fonctionnent avec des permissions, des limites de risque, une validation et une reprise humaine visibles." },
    { titre: "Du cas marketing aux preuves d’incrémentalité", description: "Les KPI de portée ou d’engagement éclairent une mécanique ; une comparaison et une méthode rendent une conclusion business défendable." },
  ],
};
