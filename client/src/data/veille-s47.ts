import registry from "../../../content/2026-W47/sources.json";

type RegistrySource = (typeof registry.sources)[number];

const sourceRegistry = registry.sources.map((source: RegistrySource) => ({
  id: source.id,
  nom: `${source.publisher} — ${source.title}`,
  url: source.url,
  date: source.date
    ? new Intl.DateTimeFormat("fr-FR", {
        day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
      }).format(new Date(`${source.date}T00:00:00Z`))
    : "Documentation non datée — appui du fait daté, consultée le 25 novembre 2026",
}));

const selectSources = (...ids: number[]) => sourceRegistry.filter((source) => ids.includes(source.id));

export const veilleS47 = {
  "week": 47,
  "year": 2026,
  "publicationDate": "16 novembre 2026",
  "collectionWindow": "9 au 16 novembre 2026 inclus",
  "shareDescription": "Pour une école : conservation IA, sécurité documentaire, accès des robots et suivi Business Hub — les décisions S47 sans promesse de performance.",
  "domainsCount": 7,
  "domainsTotal": 9,
  "sourcesCount": registry.sources.length,
  "criticalCount": 0,
  "importantCount": 5,
  "actionsCount": 7,
  "emergingCount": 5,
  "caseStudiesCount": 0,
  "signalMajeur": {
    "label": "SIGNAL MAJEUR DE LA SEMAINE",
    "title": "IA : CLARIFIER LA CONSERVATION AVANT TOUT USAGE DE DONNÉES RÉELLES"
  },
  "statDominante": {
    "chiffre": "30 JOURS",
    "titre": "CONSERVATION POUR LA SURVEILLANCE DE SÉCURITÉ — ANTHROPIC, 9 NOVEMBRE 2026",
    "description": "Anthropic annonce le 9 novembre 30 jours de conservation pour la surveillance de sécurité des clients hors modalités éligibles de zéro rétention de données, dite ZDR. Ce délai ne décrit pas toutes les finalités. Enterprise Frontier Safeguards reste en bêta privée : faire confirmer par écrit données surveillées, stockage, durée et éligibilité avant d’utiliser du code ou des données sensibles.",
    "source": selectSources(12)[0]
  },
  "syntheseExecutive": "Sur le web, Google annonce un nouveau modèle Search tandis que le Business Hub de ChatGPT passe de l’observation S46 à une bêta officielle le 10 novembre. La revendication d’informations et les Business Agents ont des conditions distinctes, sans éligibilité démontrée d’une école ni promesse de trafic. Côté données et accès, un réseau de diffusion de contenu doit préserver les robots vérifiés et maîtriser le cache initial ; les avis Drupal ciblent des extensions documentaires avec exploitation théorique et solutions publiées. La mesure doit garder des périmètres compatibles pour les impressions et clics, puis contrôler la qualité des collectes déjà autorisées sans transmettre davantage de données. Côté IA, les 30 jours annoncés par Anthropic pour la surveillance de sécurité rendent prioritaire une clarification contractuelle de la conservation et de la zéro rétention de données, dite ZDR, avant usage réel. En innovation marketing, l’extension britannique de télévision connectée LinkedIn reste une disponibilité d’inventaire, non une preuve de recrutement ; les domaines consentement et UX sont masqués plutôt que remplis artificiellement.",
  "dashboardDetails": {
    "domaines": [
      "Moteurs de réponse IA",
      "Zero-click et GEO",
      "Données structurées et accès des robots",
      "CMS et socle technique",
      "Mesure et attribution",
      "IA en production et gouvernance",
      "Innovation marketing et plateformes publicitaires"
    ],
    "sources": [
      "Google — Google Search gets a major upgrade with Gemini 4 Hydrogen",
      "Search Engine Roundtable — Google Search Gets Massive Upgrade With Gemini 4 Hydrogen",
      "OpenAI — Introducing Businesses in ChatGPT",
      "Search Engine Roundtable — Businesses in ChatGPT Business Hub Live With Click Data",
      "Search Engine Journal — Ziff Davis CEO: Not Planning On A Search Recovery",
      "Google Search Console — Generative AI performance report — Search",
      "Google Search Central — Moving to a CDN without overwhelming your origin or blocking Googlebot",
      "Drupal.org — Avis SA-CONTRIB-2026-338 — File Resumable Upload",
      "Drupal.org — Avis SA-CONTRIB-2026-327 — Entity Print",
      "Google Analytics — What’s new in Google Analytics — diagnostic du 11 novembre",
      "Google Analytics — Troubleshoot diagnostics for user-provided data collection",
      "Anthropic — Claude Fable 5.2 and Mythos 5.2 — accès et conservation",
      "LinkedIn — LinkedIn Expands CTV Ads to the UK",
      "Fermilab — Fermilab, IBM and NVIDIA plan modular quantum computing co-design platform to advance scientific discovery",
      "IBM — IBM, Fermilab, and NVIDIA Announce Plans for a Modular Quantum Co-Design Platform"
    ],
    "critiques": [],
    "importants": [
      "Moteurs de réponse IA — SEARCH CHANGE DE MODÈLE ; BUSINESS HUB PASSE DE L’OBSERVATION À LA BÊTA",
      "Données structurées et accès des robots — DIFFUSION WEB : PRÉCHAUFFER LE CACHE ET PRÉSERVER L’ACCÈS DES ROBOTS VÉRIFIÉS",
      "CMS et socle technique — TÉLÉVERSEMENT ET EXPORT PDF : AVIS D’EXTENSIONS DRUPAL AVEC SOLUTIONS PUBLIÉES",
      "Mesure et attribution — DIAGNOSTIC ANALYTICS : CORRIGER LA QUALITÉ SANS ÉLARGIR LA COLLECTE",
      "IA en production et gouvernance — CLAUDE : CONFIRMER LA CONSERVATION ET L’ÉLIGIBILITÉ AVANT LES DONNÉES RÉELLES"
    ],
    "actions": [
      "Faire confirmer conservation, stockage, surveillance et éligibilité de zéro rétention avant tout usage IA de données réelles.",
      "Vérifier en privé l’applicabilité des avis de téléversement et d’export, puis la remédiation et sa recette.",
      "Recetter robots vérifiés, préchauffage et ralentissement temporaire avant une migration de diffusion web.",
      "Refaire un relevé daté de questions publiques après le changement du modèle Search.",
      "Vérifier l’éligibilité au Business Hub et valider les informations publiques sans engager de Business Agent.",
      "Documenter les périmètres de clics et d’impressions et revoir les alertes de qualité des collectes déjà autorisées.",
      "N’envisager un essai de télévision connectée qu’avec objectif professionnel britannique, budget plafonné et mesure préalable."
    ],
    "emergents": [
      "Conditions réelles de zéro rétention",
      "Business Hub et couverture des indicateurs",
      "Réponses Search après Hydrogen",
      "Accès des robots lors des migrations",
      "Inventaire de télévision connectée par marché"
    ]
  },
  "domaines": [
    {
      "id": 1,
      "domainName": "Moteurs de réponse IA",
      "code": "GOOGLE AI",
      "titre": "SEARCH CHANGE DE MODÈLE ; BUSINESS HUB PASSE DE L’OBSERVATION À LA BÊTA",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "SUIVI",
      "category": "GOOGLE",
      "subjectsCount": 2,
      "description": "Google annonce Hydrogen dans Search le 12 novembre. Le 10 novembre, OpenAI lance Businesses in ChatGPT en bêta : c’est le suivi de l’observation du 6 novembre en S46. Business Hub et Business Agents ont des conditions distinctes ; aucun gain de visibilité ou de candidature n’est démontré.",
      "sources": selectSources(1, 2, 3, 4),
      "details": [
        "Faits datés / SUIVI : Hydrogen est annoncé mondialement le 12 novembre ; le lancement officiel bêta du Business Hub le 10 novembre est le fait nouveau après l’observation S46 du 6 novembre.",
        "Business Hub concerne les entreprises éligibles là où ChatGPT est disponible ; les Business Agents démarrent séparément pour certaines entreprises aux États-Unis. Les clics ne confirment ni visites ni conversions.",
        "Impact pour une école : les réponses et les informations reprises peuvent évoluer sans changement des pages publiques ; l’éligibilité d’une école et son éventuelle citation restent à vérifier.",
        "Recommandation (Indicatif) : refaire un relevé daté de questions publiques et vérifier l’éligibilité avant une éventuelle revendication ; ne pas lancer un agent ni promettre de visibilité sur la seule base de la bêta."
      ],
      "recommendationStatus": "Indicatif",
      "longDescription": "Le 12 novembre, Google annonce la disponibilité mondiale de Gemini 4 Hydrogen dans Search. Le compte rendu spécialisé reproduit aussi son statut de modèle par défaut dans AI Mode et son usage pour les questions difficiles dans AI Overviews. Les capacités et les liens supplémentaires restent des déclarations fournisseur, sans gain de trafic démontré. Un second suivi concerne OpenAI : l’observation de Business Hub du 6 novembre appartient à S46 ; le fait nouveau est le lancement officiel de Businesses in ChatGPT en bêta le 10 novembre. Les entreprises éligibles peuvent revendiquer leurs informations et consulter des indicateurs agrégés, soumis à des seuils non chiffrés. Les Business Agents démarrent séparément sur certains secteurs aux États-Unis. Pour une école, vérifier d’abord l’éligibilité et la fidélité des seules informations publiques. Un clic enregistré ne confirme ni visite ni candidature. Un relevé stable de questions permet de documenter les changements sans les attribuer automatiquement à une performance de référencement."
    },
    {
      "id": 2,
      "domainName": "Zero-click et GEO",
      "code": "ZERO-CLICK / GEO",
      "titre": "IMPRESSIONS IA ET CLICS SEARCH : PAS DE TAUX DE CLIC AVEC DES PÉRIMÈTRES DIFFÉRENTS",
      "badge": "À SURVEILLER",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "category": "SEO",
      "subjectsCount": 1,
      "description": "L’analyse SEJ du 9 novembre explique pourquoi comparer impressions IA et tous les clics Search ne produit pas un taux de clic IA. Les chiffres de Ziff Davis du 6 novembre sont exclus. La documentation primaire rouverte soutient les définitions, sans dater un changement de produit au 16 novembre.",
      "sources": selectSources(5, 6),
      "details": [
        "Fait / état source : l’analyse méthodologique publiée le 9 novembre distingue impressions des réponses IA et ensemble des clics reçus depuis Search.",
        "La documentation primaire du rapport décrit des impressions provenant du type Web ; elle est non datée. Le constat SEJ arrêté au 8 novembre n’est pas extrapolé à l’état du produit au 16 novembre.",
        "Impact pour une école : un rapport aux périmètres incompatibles peut conduire à une mauvaise lecture de visibilité et de trafic, sans prouver une baisse propre à l’IA.",
        "Recommandation (Règle de conception) : documenter le numérateur et le dénominateur ; publier « non mesurable séparément » lorsque les clics IA ne sont pas isolables, plutôt qu’un taux estimé."
      ],
      "recommendationStatus": "Règle de conception",
      "longDescription": "Le 9 novembre, Search Engine Journal publie une analyse de la comparaison entre les impressions IA de Ziff Davis et ses clics reçus depuis Search. L’article distingue deux périmètres : les impressions dans AI Mode et AI Overviews constituent un sous-ensemble, alors que les clics Search utilisés dans la comparaison couvrent différents types de résultats. Le ratio ne représente donc pas un taux de clic propre aux réponses IA. La documentation primaire rouverte confirme que le rapport IA décrit des impressions issues du type Web ; sa lecture actuelle ne reconstitue pas son état historique exact. Les chiffres déclarés par Ziff Davis le 6 novembre ne sont pas republiés comme actualité S47. Pour une école, conserver les définitions et les périmètres de chaque indicateur évite une interprétation erronée du sans-clic. Une présence observée, un clic, une visite et une candidature doivent rester distincts. Si les clics IA ne sont pas isolables, signaler la limite plutôt que fabriquer une estimation ou une causalité."
    },
    {
      "id": 3,
      "domainName": "Données structurées et accès des robots",
      "code": "SCHEMA / ACCÈS",
      "titre": "DIFFUSION WEB : PRÉCHAUFFER LE CACHE ET PRÉSERVER L’ACCÈS DES ROBOTS VÉRIFIÉS",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "SUIVI",
      "category": "DATA",
      "subjectsCount": 1,
      "description": "Google publie le 11 novembre un guide de passage à un réseau de diffusion de contenu, ou CDN. Un cache vide sollicite encore l’origine et une protection générale peut bloquer Googlebot. C’est un suivi opérationnel de l’accès, pas une nouveauté de balisage ni une garantie de référencement.",
      "sources": selectSources(7),
      "details": [
        "Fait / état source : le guide officiel du 11 novembre décrit les premières requêtes renvoyées vers l’origine lorsque le cache du réseau de diffusion de contenu est vide.",
        "Googlebot ne résout pas les défis visuels automatiques ; un blocage persistant peut réduire l’exploration. Google limite le frein temporaire par réponses HTTP 429 ou 503 à quelques heures ou 1 à 2 jours au maximum.",
        "Impact pour une école : la conception d’une diffusion des pages publiques doit contrôler ensemble la charge et l’accès des robots souhaités ; aucun incident dans une école n’est établi.",
        "Recommandation (Règle de conception) : prévoir un préchauffage à rythme maîtrisé, une recette des robots vérifiés et une procédure de ralentissement temporaire, sans interdiction générale durable."
      ],
      "recommendationStatus": "Règle de conception",
      "longDescription": "La publication officielle du 11 novembre apporte un fait opérationnel nouveau au suivi de l’accès des robots traité en S43 et S44. Lors du passage à un réseau de diffusion de contenu, ou CDN, les premières demandes de pages non mises en cache atteignent encore le serveur d’origine. Des réponses rapides peuvent augmenter progressivement la capacité d’exploration de Google, sous réserve de demande, sans protéger immédiatement l’origine. Une protection générale contre les robots peut en outre imposer des défis que Googlebot ne résout pas. Si ce blocage persiste, l’exploration diminue et des pages peuvent quitter les résultats. Pour une école préparant une migration, la recette doit vérifier les robots souhaités, le préchauffage progressif et la charge effective. Google décrit un frein temporaire par réponses HTTP 429 ou 503 pour quelques heures ou 1 à 2 jours au maximum. Ce guide ne justifie ni nouveau balisage ni promesse de visibilité. Il n’établit pas le comportement de tous les robots IA."
    },
    {
      "id": 4,
      "domainName": "CMS et socle technique",
      "code": "CMS / SOCLE",
      "titre": "TÉLÉVERSEMENT ET EXPORT PDF : AVIS D’EXTENSIONS DRUPAL AVEC SOLUTIONS PUBLIÉES",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "category": "ARCHI",
      "subjectsCount": 2,
      "description": "Les avis SA-CONTRIB-2026-338 et -327 du 11 novembre concernent deux extensions, pas le cœur Drupal. Ils décrivent respectivement des téléversements non autorisés et une transmission de données de session vers des ressources tierces lors d’un export PDF. L’exploitation est théorique ; les solutions individuelles ont été lues.",
      "sources": selectSources(8, 9),
      "details": [
        "Faits datés : SA-CONTRIB-2026-338 et SA-CONTRIB-2026-327, publiés le 11 novembre, fournissent des correctifs ; le second prévoit aussi une atténuation par désactivation des adresses distantes du moteur de rendu.",
        "Les téléversements partiels ne sont pas exécutables ; l’exploitation délibérée de l’export requiert des droits d’édition permettant des ressources de sites arbitraires. Les avis ne signalent pas d’exploitation active.",
        "Impact pour une école : les fonctions documentaires peuvent affecter les autorisations et la confidentialité si les composants concernés sont présents ; aucun usage ni exposition d’une école n’est présumé.",
        "Recommandation (Immédiat) : faire vérifier en privé l’applicabilité, appliquer la solution ou l’atténuation approuvée, puis tester accès et exports sans publier d’inventaire technique."
      ],
      "recommendationStatus": "Immédiat",
      "longDescription": "Drupal publie le 11 novembre deux avis concernant des composants contribués. SA-CONTRIB-2026-338 décrit un téléversement pouvant être commencé sans authentification sur un formulaire non autorisé. Les données partielles restent non exécutables et leur rattachement au contenu conserve les contrôles du formulaire normal. SA-CONTRIB-2026-327 décrit la transmission de données de session et d’authentification vers des ressources tierces lors d’un export PDF. Une exploitation délibérée nécessite des droits pour intégrer des ressources de sites arbitraires dans le contenu. Les deux avis qualifient l’exploitation de théorique, non active. Après un échec d’extraction, les pages individuelles ont été lues au navigateur : elles fournissent des solutions et une atténuation pour l’export. Pour une école, demander une vérification privée d’applicabilité, puis la preuve de remédiation et de recette si nécessaire. Aucun composant, configuration ou incident n’est attribué à une école. L’annonce du cœur du 16 novembre reste réservée à S48 et n’alimente pas cette analyse."
    },
    {
      "id": 6,
      "domainName": "Mesure et attribution",
      "code": "MESURE",
      "titre": "DIAGNOSTIC ANALYTICS : CORRIGER LA QUALITÉ SANS ÉLARGIR LA COLLECTE",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "category": "MESURE",
      "subjectsCount": 1,
      "description": "Google annonce le 11 novembre un diagnostic des données fournies par les utilisateurs, ou UPD. Il signale l’absence de réception et des problèmes de qualité. La documentation d’appui, rouverte en anglais, reste non datée. Une alerte technique ne prouve ni conformité ni amélioration de l’attribution.",
      "sources": selectSources(10, 11),
      "details": [
        "Fait / état source : l’entrée officielle du 11 novembre annonce des alertes de diagnostic dans Administration et Flux de données de Google Analytics.",
        "Les types d’alertes sont précisés par une documentation non datée ; aucun gain chiffré d’attribution ou de conversion n’est publié.",
        "Impact pour une école : pour une collecte déjà autorisée, une interruption de données peut fausser la lecture des campagnes ; le diagnostic ne justifie pas une collecte supplémentaire.",
        "Recommandation (Règle de conception) : ajouter les alertes à la revue de qualité du dispositif existant et soumettre toute extension à une validation distincte de nécessité, finalité et consentement."
      ],
      "recommendationStatus": "Règle de conception",
      "longDescription": "Le 11 novembre, Google annonce le lancement d’un diagnostic des problèmes de collecte de données fournies par les utilisateurs, ou UPD. Des alertes apparaissent dans Administration et Flux de données lorsque la propriété ne reçoit pas ces données ou rencontre des problèmes de qualité. C’est un fait produit distinct du point d’entrée Data Manager lancé le 6 novembre et traité en S46. La documentation associée a été rouverte en anglais pour remplacer la lecture initiale d’une traduction ; elle décrit notamment absence de réception et proportion insuffisante d’informations identifiantes. Cette page reste non datée et ne constitue pas une deuxième annonce. Pour une école dont la collecte est déjà autorisée, ces alertes peuvent aider à vérifier une interruption avant d’interpréter la performance des campagnes. Aucun usage actuel n’est présumé. La priorité est de corriger le dispositif existant sans élargir les données transmises. Une alerte de qualité ne prouve ni conformité ni gain d’attribution ; toute extension exige une validation séparée de sa finalité et de sa nécessité."
    },
    {
      "id": 8,
      "domainName": "IA en production et gouvernance",
      "code": "IA",
      "titre": "CLAUDE : CONFIRMER LA CONSERVATION ET L’ÉLIGIBILITÉ AVANT LES DONNÉES RÉELLES",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "category": "IA",
      "subjectsCount": 1,
      "description": "Le 9 novembre, Anthropic annonce Fable 5.2 disponible et Mythos 5.2 à accès vérifié. La zéro rétention de données, dite ZDR, dépend de conditions d’éligibilité ; Enterprise Frontier Safeguards reste en bêta privée. Pour les autres clients, 30 jours de conservation sont annoncés pour la surveillance de sécurité, pas toutes les finalités.",
      "sources": selectSources(12),
      "details": [
        "Fait / état source : annonce Anthropic du 9 novembre ; Fable disponible selon l’éditeur, Mythos à accès direct vérifié et Enterprise Frontier Safeguards en bêta privée.",
        "La zéro rétention de données, dite ZDR, est conditionnelle ; Anthropic indique 30 jours de conservation pour la surveillance de sécurité des autres clients. Aucun benchmark n’est publié ici.",
        "Impact pour une école : une requête contenant du code ou des données sensibles doit avoir un traitement contractuellement compris avant l’usage ; une promesse ZDR ne signifie pas absence de surveillance.",
        "Recommandation (Contractuel) : faire confirmer par écrit données surveillées, stockage, durée et éligibilité ; limiter les premiers essais aux données synthétiques et valider humainement les changements."
      ],
      "recommendationStatus": "Contractuel",
      "longDescription": "L’annonce Anthropic du 9 novembre distingue des modalités qu’il ne faut pas réunir sous une promesse unique. Claude Fable 5.2 est annoncé disponible sur les plateformes indiquées ; l’accès direct à Claude Mythos 5.2 passe par des programmes de vérification en cybersécurité ou sciences du vivant. Enterprise Frontier Safeguards, présenté comme compatible avec la zéro rétention de données, dite ZDR, reste en bêta privée. La surveillance y porte sur les requêtes et réponses stockées dans l’infrastructure du client. Les clients éligibles peuvent continuer en ZDR avant sa mise en œuvre ; pour les autres, Anthropic annonce 30 jours de conservation pour la surveillance de sécurité. Ce délai ne couvre pas nécessairement toutes les finalités. Pour une école, obtenir une confirmation écrite des données surveillées, du lieu de stockage et des conditions exactes avant tout usage de données réelles. Les essais doivent rester synthétiques et à droits restreints. Aucun benchmark ni résultat indépendant de sécurité n’est repris ; la bêta privée n’est pas une garantie universelle."
    },
    {
      "id": 9,
      "domainName": "Innovation marketing et plateformes publicitaires",
      "code": "INNOV MKT",
      "titre": "TÉLÉVISION CONNECTÉE LINKEDIN : EXTENSION BRITANNIQUE, PAS UNE PREUVE DE PERFORMANCE EN FRANCE",
      "badge": "À SURVEILLER",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "category": "INNOV MKT",
      "subjectsCount": 1,
      "description": "LinkedIn annonce le 12 novembre l’extension de ses publicités de télévision connectée, ou CTV, au Royaume-Uni. Les clients internationaux peuvent cibler ce marché, les États-Unis et le Canada. Ni disponibilité du ciblage français ni résultat de recrutement étudiant ne sont démontrés ; les chiffres commerciaux ne sont pas repris.",
      "sources": selectSources(13),
      "details": [
        "Fait / état source : l’annonce LinkedIn du 12 novembre étend les publicités de télévision connectée au Royaume-Uni ; sa date a été vérifiée dans l’élément time du HTML original.",
        "Le ciblage utilise fonction, secteur et niveau de responsabilité ; l’annonce ne documente pas de ciblage de télévision connectée en France ni d’efficacité pour l’éducation.",
        "Impact pour une école : un objectif de relations avec des entreprises au Royaume-Uni peut justifier une piste de notoriété, pas une réallocation de budget de recrutement en France.",
        "Recommandation (À arbitrer) : n’arbitrer un essai qu’avec un objectif britannique explicite, une audience définie, un budget plafonné et une mesure préalable ; sinon maintenir en veille."
      ],
      "recommendationStatus": "À arbitrer",
      "longDescription": "Le 12 novembre, LinkedIn annonce l’extension de ses publicités de télévision connectée, ou CTV, au Royaume-Uni. La date n’apparaissait pas dans l’extraction initiale : elle a été vérifiée dans l’élément time du HTML original. La plateforme permet aux clients internationaux de cibler des acheteurs aux États-Unis, au Canada et au Royaume-Uni. Les critères professionnels portent sur la fonction, le secteur et le niveau de responsabilité, sur des inventaires de télévision en streaming partenaires. Cette annonce de disponibilité ne décrit pas un ciblage en France. Les résultats promotionnels de campagnes antérieures ne sont pas repris comme preuve causale ni comme objectifs de recrutement. Pour une école, l’intérêt éventuel concerne une relation avec des entreprises ou une notoriété professionnelle sur le marché britannique. Un test exige d’abord un objectif explicite, une audience pertinente, un budget plafonné et une mesure adaptée. Sans ce besoin, conserver le sujet en veille. Une extension d’inventaire ne justifie pas une réallocation automatique des dépenses."
    }
  ],
  "measurement": undefined,
  "caseStudies": [],
  "bonus": {
    "id": 10,
    "label": "BONUS #10 — QUANTIQUE MODULAIRE",
    "code": "QUANTIQUE",
    "titre": "FERMILAB, IBM ET NVIDIA : CONNECTER LES PROCESSEURS, UN PROJET ANNONCÉ",
    "badge": "BONUS",
    "previousBadge": null,
    "editorialStatus": "ACTUALITÉ",
    "chiffre": "16 NOVEMBRE",
    "statLabel": "DATE DE L’ANNONCE DU PROJET, PAS DU DÉPLOIEMENT",
    "description": "Le 16 novembre, Fermilab, IBM et NVIDIA annoncent leur intention de créer une plateforme de co-conception associant processeurs quantiques et calcul accéléré. Le projet étudierait comment plusieurs processeurs peuvent travailler ensemble pour des problèmes de physique des particules et nucléaire. Les chercheurs commenceraient par modéliser et émuler les communications entre modules, leurs erreurs et leur latence, avant de guider des connexions physiques. C’est un projet annoncé, pas un ordinateur tolérant aux fautes déjà disponible. Les deux sources sont partenaires de la même initiative et ne valident pas indépendamment ses résultats futurs. Aucun achat ou changement opérationnel pour une école n’en découle.",
    "sources": selectSources(14, 15),
    "source": selectSources(14)[0],
    "details": [
      "Le 16 novembre, les partenaires annoncent une intention de plateforme quantique modulaire hybride.",
      "Les communications seraient d’abord modélisées et émulées avant le développement de connexions physiques.",
      "Le statut est projet annoncé ; aucun déploiement ni avantage quantique de cette plateforme n’est établi.",
      "Les annonces Fermilab et IBM décrivent la même initiative, sans validation indépendante de ses résultats futurs."
    ],
    "perspective": "Ce qu’on en retient : le passage à l’échelle dépend des connexions entre processeurs et de leur coordination avec le calcul classique, pas seulement du nombre de qubits.",
    "longDescription": "Le 16 novembre, Fermilab, IBM et NVIDIA annoncent leur intention de créer une plateforme de co-conception associant processeurs quantiques et calcul accéléré. Le projet étudierait comment plusieurs processeurs peuvent travailler ensemble pour des problèmes de physique des particules et nucléaire. Les chercheurs commenceraient par modéliser et émuler les communications entre modules, leurs erreurs et leur latence, avant de guider des connexions physiques. C’est un projet annoncé, pas un ordinateur tolérant aux fautes déjà disponible. Les deux sources sont partenaires de la même initiative et ne valident pas indépendamment ses résultats futurs. Aucun achat ou changement opérationnel pour une école n’en découle. Pour une école, ce fait peut illustrer une architecture hybride et la différence entre une intention de recherche et une capacité effectivement disponible. Attendre des résultats expérimentaux avant toute conclusion d’utilité pratique."
  },
  "actions": [
    {
      "id": 1,
      "type": "CONTRAT",
      "titre": "Faire confirmer conservation, stockage, surveillance et éligibilité de zéro rétention avant tout usage IA de données réelles.",
      "domaine": "IA",
      "responsable": "Achats, sécurité et gouvernance des données",
      "echeance": "Avant usage réel",
      "recommendationStatus": "Contractuel"
    },
    {
      "id": 2,
      "type": "PRIORITÉ",
      "titre": "Vérifier en privé l’applicabilité des avis de téléversement et d’export, puis la remédiation et sa recette.",
      "domaine": "CMS / SOCLE",
      "responsable": "Technique et prestataire contractuellement responsable",
      "echeance": "Immédiat — selon procédure",
      "recommendationStatus": "Immédiat"
    },
    {
      "id": 3,
      "type": "CONCEPTION",
      "titre": "Recetter robots vérifiés, préchauffage et ralentissement temporaire avant une migration de diffusion web.",
      "domaine": "SCHEMA / ACCÈS",
      "responsable": "Technique et référencement",
      "echeance": "Avant migration",
      "recommendationStatus": "Règle de conception"
    },
    {
      "id": 4,
      "type": "CONTRÔLE",
      "titre": "Refaire un relevé daté de questions publiques après le changement du modèle Search.",
      "domaine": "GOOGLE AI",
      "responsable": "Contenus et référencement",
      "echeance": "Prochain relevé",
      "recommendationStatus": "Indicatif"
    },
    {
      "id": 5,
      "type": "ARBITRAGE",
      "titre": "Vérifier l’éligibilité au Business Hub et valider les informations publiques sans engager de Business Agent.",
      "domaine": "GOOGLE AI",
      "responsable": "Information publique et gouvernance numérique",
      "echeance": "Avant toute revendication",
      "recommendationStatus": "À arbitrer"
    },
    {
      "id": 6,
      "type": "MESURE",
      "titre": "Documenter les périmètres de clics et d’impressions et revoir les alertes de qualité des collectes déjà autorisées.",
      "domaine": "ZERO-CLICK / GEO / MESURE",
      "responsable": "Mesure et gouvernance des données",
      "echeance": "Prochain bilan",
      "recommendationStatus": "Règle de conception"
    },
    {
      "id": 7,
      "type": "ARBITRAGE",
      "titre": "N’envisager un essai de télévision connectée qu’avec objectif professionnel britannique, budget plafonné et mesure préalable.",
      "domaine": "INNOV MKT",
      "responsable": "Communication et achats médias",
      "echeance": "Avant campagne",
      "recommendationStatus": "À arbitrer"
    }
  ],
  "signauxEmergents": [
    {
      "titre": "Conditions réelles de zéro rétention",
      "description": "Suivre l’ouverture et les clauses d’Enterprise Frontier Safeguards ; sa bêta privée ne vaut pas disponibilité universelle.",
      "horizon": "Avant contrat"
    },
    {
      "titre": "Business Hub et couverture des indicateurs",
      "description": "Vérifier l’éligibilité, les seuils et les définitions de mentions et clics sans confondre visite et conversion.",
      "horizon": "1–3 mois"
    },
    {
      "titre": "Réponses Search après Hydrogen",
      "description": "Observer la fidélité des réponses et les destinations citées sur un panel stable, sans promettre de gain de trafic.",
      "horizon": "Prochain relevé"
    },
    {
      "titre": "Accès des robots lors des migrations",
      "description": "Suivre la charge réelle et les défis automatiques avant de généraliser des protections d’accès aux pages publiques.",
      "horizon": "Avant migration"
    },
    {
      "titre": "Inventaire de télévision connectée par marché",
      "description": "Vérifier les pays et conditions effectivement documentés ; aucune extension française n’est déduite de l’annonce britannique.",
      "horizon": "Avant campagne"
    }
  ],
  "tendancesPassees": [
    {
      "titre": "Mémoire S43 — liens dans les réponses Google",
      "description": "Le signal du 15 octobre concernait la présentation des liens ; S47 suit un changement de modèle, sans refaire une promesse de citation ou de trafic."
    },
    {
      "titre": "Mémoire S43 — Currys et valeur du conseil",
      "description": "Le cas historique reste un repère de méthode à résultat déclaré ; aucun KPI ancien n’est publié comme nouveau cas d’école S47."
    },
    {
      "titre": "Mémoire S44 — socle et correctifs",
      "description": "PHP2Shell et le support du socle restent des décisions archivées ; seuls les avis d’extensions du 11 novembre alimentent la carte S47."
    },
    {
      "titre": "Mémoire S45 — consentement et clics référés",
      "description": "La sanction mobile et le périmètre retail Adobe restent historiques ; aucun changement juridique ni objectif de recrutement n’en est dérivé en S47."
    },
    {
      "titre": "Mémoire S46 — Business Hub observé le 6 novembre",
      "description": "L’outil était observé en développement ; S47 marque SUIVI pour le seul fait nouveau de lancement officiel en bêta le 10 novembre."
    },
    {
      "titre": "Mémoire S46 — Data Manager et assistants",
      "description": "Le point d’entrée du 6 novembre, Guided Learning et dots restent rattachés à S46 ; le diagnostic du 11 novembre est un fait distinct, pas une migration imposée."
    }
  ]
,
  sources: sourceRegistry,
};
