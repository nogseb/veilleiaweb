import registry from "../../../content/2026-W46/sources.json";

const sourceRegistry = registry.sources.map((source) => ({
  id: source.id,
  nom: `${source.publisher} — ${source.title}`,
  url: source.url,
  date: source.date
    ? new Intl.DateTimeFormat("fr-FR", {
        day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
      }).format(new Date(`${source.date}T00:00:00Z`))
    : "Documentation non datée — appui au lancement du 6 novembre ; consultée le 25 novembre 2026",
}));

const selectSources = (...ids: number[]) => sourceRegistry.filter((source) => ids.includes(source.id));

export const veilleS46 = {
  "week": 46,
  "year": 2026,
  "publicationDate": "9 novembre 2026",
  "collectionWindow": "2 au 9 novembre 2026 inclus",
  "shareDescription": "Pour une école : décider avant l’activation annoncée des agents, vérifier les avis Drupal, tracer les conversions et distinguer observation IA et lancement en S46.",
  "domainsCount": 8,
  "domainsTotal": 9,
  "sourcesCount": registry.sources.length,
  "criticalCount": 1,
  "importantCount": 3,
  "actionsCount": 7,
  "emergingCount": 6,
  "caseStudiesCount": 0,
  "signalMajeur": {
    "label": "SIGNAL MAJEUR DE LA SEMAINE",
    "title": "DOTS — DÉCIDER AVANT L’ACTIVATION PAR DÉFAUT ANNONCÉE AU 18 NOVEMBRE"
  },
  "statDominante": {
    "chiffre": "18 NOVEMBRE 2026",
    "titre": "ACTIVATION PAR DÉFAUT ANNONCÉE LE 4 NOVEMBRE POUR LES ESPACES ÉLIGIBLES",
    "description": "Le 4 novembre, OpenAI annonce une prévisualisation administrateur de dots jusqu’au 18 novembre 2026, avant leur disponibilité par défaut dans les espaces éligibles. Cette échéance publiée, et non un délai recalculé ou une statistique de performance, motive la priorité impact × urgence : décider de l’autorisation, des connexions et de la supervision avant activation. La clôture au 9 novembre ne confirme ni la bascule ultérieure ni l’usage d’une école.",
    "source": selectSources(15)[0]
  },
  "syntheseExecutive": "Sur le web, AI Mode ajoute selon une couverture secondaire des liens américains vers des partenaires de réservation, tandis que Google documente les activités dans ses unités agrégateur et fournisseur de l’Espace économique européen. Le Business Hub de ChatGPT reste une observation du 6 novembre en développement, non un lancement officiel dans cette édition. La priorité data et mesure est de garder les flux de conversions traçables et non redondants ; Privacy for Kids apporte une ressource de sensibilisation, pas une nouvelle règle de consentement. Les avis Drupal contribués justifient une vérification privée d’applicabilité et de correction, sans attribuer une exposition à une école. Côté IA, le signal majeur est la décision à prendre avant l’activation par défaut de dots annoncée au 18 novembre ; le guidage pédagogique reste un modèle à tester avec de vraies personnes. En innovation marketing, aucune nouveauté suffisamment qualifiée n’est publiée et le domaine est masqué après trois requêtes.",
  "dashboardDetails": {
    "domaines": [
      "Moteurs de réponse IA",
      "Zero-click et GEO",
      "Données structurées et accès des robots",
      "CMS et socle technique",
      "Data first-party, consentement, navigateurs",
      "Mesure et attribution",
      "UX conversationnelle et web agentique",
      "IA en production et gouvernance"
    ],
    "sources": sourceRegistry.map((source) => source.nom),
    "critiques": [
      "IA en production et gouvernance — décision explicite avant l’activation par défaut annoncée"
    ],
    "importants": [
      "CMS et socle technique — vérification privée des avis contribués et de la recette",
      "Mesure et attribution — éviter les flux de conversions redondants",
      "UX conversationnelle et web agentique — tester le guidage avec de vraies personnes"
    ],
    "actions": [
      "Consigner l’autorisation ou le refus de dots et les contrôles des espaces effectivement concernés.",
      "Vérifier en privé l’applicabilité des avis Drupal contribués et archiver correction et recette.",
      "Définir un seul chemin d’ingestion par conversion avant toute nouvelle connexion.",
      "Tester le guidage pédagogique avec des personnes réelles et un accès explicite à l’enseignant.",
      "Attendre les définitions et conditions officielles du Business Hub avant toute connexion ou achat.",
      "Vérifier pertinence et éligibilité des activités publiques avant tout projet d’intégration aux unités Google.",
      "Examiner les ressources Privacy for Kids adaptées au public, à la langue et au contexte pédagogique."
    ],
    "emergents": [
      "Réservation locale depuis AI Mode",
      "Mesure native dans ChatGPT",
      "Activités dans les unités Google",
      "Carte des flux en bêta",
      "Guidage pédagogique et contrôle d’accès",
      "Agents persistants administrables"
    ]
  },
  "domaines": [
    {
      "id": 1,
      "domainName": "Moteurs de réponse IA",
      "code": "GOOGLE AI",
      "titre": "AI MODE : DES LIENS DE RÉSERVATION AMÉRICAINS, PAS UN PARCOURS ÉDUCATIF",
      "badge": "À SURVEILLER",
      "previousBadge": null,
      "editorialStatus": "SUIVI",
      "category": "GOOGLE",
      "subjectsCount": 1,
      "description": "Search Engine Journal rapporte le 4 novembre des liens de réservation et de devis de services à domicile aux États-Unis. Le calendrier varie selon les partenaires. Il s’agit d’une continuation chez le partenaire, pas d’une réservation autonome dans la réponse ni d’une disponibilité éducative ou française.",
      "sources": selectSources(1),
      "details": [
        "Fait / état source : l’article du 4 novembre rapporte une annonce Google de liens directs depuis AI Mode pour des services à domicile aux États-Unis.",
        "La disponibilité varie selon le partenaire ; les critères de sélection Google et une extension française ou éducative ne sont pas établis.",
        "Impact pour une école : une réponse locale peut orienter vers une démarche de contact, mais aucune éligibilité ni adoption par une école n’est démontrée.",
        "Recommandation (Indicatif) : maintenir des informations publiques cohérentes et attendre une annonce d’extension vérifiable avant toute intégration ou dépense."
      ],
      "recommendationStatus": "Indicatif",
      "longDescription": "Le 4 novembre, Search Engine Journal rapporte une annonce Google de liens de réservation et de demande de devis depuis AI Mode pour les services à domicile aux États-Unis. La démonstration associe prestataires locaux, notes, descriptions et certains créneaux. Le fait nouveau est le lien vers des partenaires nommés, distinct du signal comparatif et local antérieur. Le parcours continue chez un partenaire ; il ne prouve pas une réservation entièrement exécutée par la réponse IA. Les calendriers diffèrent selon les plateformes, certaines intégrations restant annoncées comme prochaines. Cette preuve secondaire ne confirme ni lancement français ni extension aux formations ou admissions. Pour une école, l’impact demeure prospectif : garder lieux, coordonnées et démarches de contact exacts et cohérents. Il ne faut ni changer de plateforme ni engager un budget pour accéder à cette surface sur la seule base de l’article. Une extension géographique ou sectorielle doit être confirmée avant toute décision."
    },
    {
      "id": 2,
      "domainName": "Zero-click et GEO",
      "code": "ZERO-CLICK / GEO",
      "titre": "BUSINESS HUB : UNE OBSERVATION EN DÉVELOPPEMENT, PAS UN LANCEMENT",
      "badge": "À SURVEILLER",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "category": "SEO",
      "subjectsCount": 1,
      "description": "Deux articles du 6 novembre rapportent un outil ChatGPT distinguant apparitions et clics quotidiens. Ils reposent sur le même auteur et témoignage ; Search Engine Land le dit non lancé. La mise à jour non datée de disponibilité est exclue de l’état historique S46.",
      "sources": selectSources(2, 3),
      "details": [
        "Fait / état source : le 6 novembre, deux articles rapportent une observation du Business Hub de ChatGPT en développement ; le produit n’est pas présenté comme lancé.",
        "Même auteur et même témoignage, sans confirmation officielle ouverte ; la mise à jour de disponibilité non datée ne fait pas partie de la fenêtre.",
        "Impact pour une école : une éventuelle mesure native pourrait distinguer présence et visites, mais ne prouverait ni la cause d’une variation ni une candidature supplémentaire.",
        "Recommandation (Indicatif) : attendre une documentation officielle sur éligibilité, définition et couverture avant toute connexion ou achat de visibilité IA."
      ],
      "recommendationStatus": "Indicatif",
      "longDescription": "Le 6 novembre, Search Engine Roundtable et Search Engine Land décrivent un outil rattaché à un Business Hub de ChatGPT. Leur récit repose sur le même auteur, la même capture et le même témoignage : il ne s’agit pas de deux confirmations indépendantes. Selon l’observation, l’interface distingue les apparitions d’une entreprise dans les réponses et les clics quotidiens vers son site, après vérification de propriété. Elle ne livre ni prompts, données des utilisateurs, classement ou comparaison concurrentielle. Search Engine Land indique explicitement que le produit n’est pas lancé. La mise à jour de disponibilité ajoutée à l’autre page est non datée et exclue de S46. Pour une école, la piste serait utile pour séparer présence et visites, sous réserve d’éligibilité. Elle ne démontre aucune efficacité de stratégie de visibilité IA. Une décision de connexion ou d’achat doit attendre des définitions officielles, une couverture connue et un accès vérifiable."
    },
    {
      "id": 3,
      "domainName": "Données structurées et accès des robots",
      "code": "SCHEMA / ACCÈS",
      "titre": "UNITÉS GOOGLE : EXTENSION AUX ACTIVITÉS, PAS NOUVEAU BALISAGE UNIVERSEL",
      "badge": "À SURVEILLER",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "category": "DATA",
      "subjectsCount": 1,
      "description": "Le 9 novembre, Search Central documente les requêtes « things to do » dans les unités agrégateur et fournisseur de l’Espace économique européen. Les conditions diffèrent selon le rôle. Aucun nouveau balisage universel ni affichage garanti pour une école n’en découle.",
      "sources": selectSources(4, 5, 6),
      "details": [
        "Fait / état source : l’entrée documentaire du 9 novembre indique que les unités agrégateur et fournisseur prennent désormais en charge les requêtes d’activités.",
        "Les agrégateurs sont soumis à approbation et flux de données ; les fournisseurs directs s’appuient sur l’exploration, sans affichage garanti.",
        "Impact pour une école : des activités ouvertes au public pourraient justifier un examen conditionnel, mais l’éligibilité d’une école n’est pas établie.",
        "Recommandation (Indicatif) : vérifier d’abord pertinence des offres et éligibilité ; ne pas lancer de balisage spécialisé ni de flux sans besoin documenté."
      ],
      "recommendationStatus": "Indicatif",
      "longDescription": "Le journal Search Central du 9 novembre annonce l’ajout des requêtes « things to do » aux unités agrégateur et fournisseur. Les documentations mises à jour le même jour indiquent une disponibilité pour les utilisateurs de l’Espace économique européen. La date documentaire est vérifiée, mais la mise en service technique exacte n’est pas précisée. Un agrégateur doit être approuvé comme service de recherche verticale, fournir les données utiles et répondre aux critères de qualité ; les activités utilisent des flux directs. Un fournisseur direct peut être éligible à partir des données explorables du site, et son unité ne paraît que si celle des agrégateurs apparaît. Il ne s’agit donc pas d’un nouveau balisage universel ni d’une promesse d’affichage. Pour une école, examiner uniquement les activités publiques réellement pertinentes. L’éligibilité et l’effet sur les visites restent inconnus. La priorité est l’exactitude des informations accessibles, pas une intégration engagée sans périmètre justifié."
    },
    {
      "id": 4,
      "domainName": "CMS et socle technique",
      "code": "CMS / SOCLE",
      "titre": "DRUPAL : VÉRIFIER LES AVIS CONTRIBUÉS SUR COMPTES ET PUBLICATION",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "category": "ARCHI",
      "subjectsCount": 1,
      "description": "Les avis SA-CONTRIB-2026-305 et -306 du 4 novembre concernent des composants contribués de réinitialisation de comptes et de calendrier éditorial. Des instructions correctives sont publiées. Les conditions d’exploitation sont précises et théoriques ; aucune exposition d’une école n’est inférée.",
      "sources": selectSources(7, 8, 9),
      "details": [
        "Fait / état source : les avis contribués SA-CONTRIB-2026-305 et SA-CONTRIB-2026-306 du 4 novembre publient des instructions correctives pour comptes bloqués et dates de publication.",
        "Le premier nécessite un déblocage autorisé du compte ; le second nécessite déjà des droits d’édition et un accès au contenu par services web. L’exploitation est théorique.",
        "Impact pour une école : si les composants sont effectivement présents, la gestion des comptes et le respect du calendrier éditorial peuvent être affectés, sans exposition présumée.",
        "Recommandation (Immédiat) : faire vérifier en privé l’applicabilité, appliquer les instructions correctives pertinentes et archiver la recette des permissions et comptes bloqués."
      ],
      "recommendationStatus": "Immédiat",
      "longDescription": "Le 4 novembre, Drupal publie deux avis concernant des composants contribués, distincts du cœur déjà traité et des alertes antérieures. SA-CONTRIB-2026-305 décrit une validation insuffisante de la réinitialisation des mots de passe des utilisateurs bloqués. Le nouveau mot de passe n’est utilisable par l’attaquant qu’après un déblocage par une personne autorisée. SA-CONTRIB-2026-306 concerne les permissions de changement des dates de publication et de dépublication dans Scheduler. L’attaquant doit déjà pouvoir modifier le contenu, lequel doit être éditable par une interface de services web. Les deux exploitations sont qualifiées de théoriques, non d’attaques observées. La relecture des pages individuelles confirme des instructions correctives publiées, corrigeant la limite de collecte initiale. Pour une école, vérifier l’applicabilité en privé, puis la correction et sa recette selon les procédures approuvées. Rien ne démontre la présence de ces composants, une exposition ou une correction déjà appliquée dans un établissement."
    },
    {
      "id": 5,
      "domainName": "Data first-party, consentement, navigateurs",
      "code": "CDP / DATA",
      "titre": "PRIVACY FOR KIDS : UNE RESSOURCE INSTITUTIONNELLE, PAS UNE NOUVELLE RÈGLE",
      "badge": "À SURVEILLER",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "category": "CDP",
      "subjectsCount": 1,
      "description": "Le Comité européen de la protection des données lance Privacy for Kids le 4 novembre. Le portail propose jeux, vidéos et quiz filtrables pour sensibiliser aux données personnelles. Aucun changement de consentement ou de navigateur, ni résultat pédagogique mesuré, n’est annoncé.",
      "sources": selectSources(10),
      "details": [
        "Fait / état source : le Comité européen de la protection des données annonce le lancement de Privacy for Kids le 4 novembre, avec des ressources présentées comme disponibles.",
        "La page décrit des filtres d’âge, de pays, de format et de thème ; le portail n’est pas audité et aucun effet pédagogique mesuré n’est publié.",
        "Impact pour une école : une porte d’entrée institutionnelle peut aider à choisir des supports de sensibilisation adaptés à l’âge et à la langue.",
        "Recommandation (Indicatif) : examiner les ressources pertinentes avant usage pédagogique, sans modifier un dispositif de consentement ni annoncer une nouvelle obligation."
      ],
      "recommendationStatus": "Indicatif",
      "longDescription": "Le 4 novembre, le Comité européen de la protection des données annonce Privacy for Kids, un portail destiné aux parents, enseignants et éducateurs. La publication institutionnelle accessible par une URL de la CNIL présente des jeux, vidéos et quiz fournis par des autorités européennes. Les filtres portent sur l’âge, le pays, le format et des thèmes tels que partage en ligne, applications, réseaux sociaux et confidentialité à l’école. Le communiqué établit un lancement et une disponibilité déclarée, pas une efficacité pédagogique ni une adoption mesurée. Le portail lui-même n’a pas été audité. Ce fait relève de la compréhension du partage et de la collecte de données personnelles, sans nouvelle règle de consentement ni évolution de navigateur. Pour une école, examiner des supports adaptés au public et à la langue avant une séquence pédagogique. La décision reste indicative et ne justifie aucune modification des dispositifs de choix ou de collecte."
    },
    {
      "id": 6,
      "domainName": "Mesure et attribution",
      "code": "MESURE",
      "titre": "DATA MANAGER EN BÊTA : UN SEUL CHEMIN PAR CONVERSION",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "category": "MESURE",
      "subjectsCount": 1,
      "description": "Google lance Data Manager dans Analytics le 6 novembre en bêta. La documentation d’appui non datée avertit qu’un pipeline identique dans deux interfaces peut doubler l’enregistrement des conversions. L’enjeu est la traçabilité des flux, pas une migration immédiate ni un modèle d’attribution nouveau.",
      "sources": selectSources(11, 12),
      "details": [
        "Fait / état source : la note du 6 novembre annonce un point d’entrée Data Manager en bêta pour les connexions, données de première partie et diagnostics.",
        "L’avertissement de double comptage vient d’une documentation non datée consultée le 25 novembre : appui technique, pas fait autonome daté dans la fenêtre.",
        "Impact pour une école : une ingestion redondante peut fausser la comparaison des campagnes ; aucune utilisation de la plateforme ni aucun incident n’est présumé.",
        "Recommandation (Règle de conception) : documenter un chemin d’ingestion unique par conversion et vérifier les connexions existantes avant toute nouvelle connexion ou migration."
      ],
      "recommendationStatus": "Règle de conception",
      "longDescription": "Le 6 novembre, Google annonce Data Manager dans Google Analytics comme un point d’entrée centralisé en bêta ouverte. Il rassemble liens produits, flux, données de première partie et diagnostics. La documentation liée représente les sources en entrée et les destinations en sortie. Elle avertit qu’un pipeline identique activé dans deux interfaces peut enregistrer les conversions deux fois et demande de conserver les connexions existantes dans leur interface d’origine. Cette page n’affiche aucune date : elle précise le fonctionnement actuel, sans dater séparément l’avertissement ni garantir son état historique au 9 novembre. Les sous-propriétés et propriétés agrégées ne prennent pas en charge sa page d’accueil. Pour une école, la leçon de conception consiste à définir un chemin unique par événement et à contrôler les doublons avant une nouvelle connexion. Aucun incident, gain chiffré ou changement de modèle d’attribution n’est établi. La bêta ne justifie pas, seule, une migration immédiate."
    },
    {
      "id": 7,
      "domainName": "UX conversationnelle et web agentique",
      "code": "UX",
      "titre": "GUIDED LEARNING : TESTER LE GUIDAGE, PAS PROMETTRE UN GAIN D’APPRENTISSAGE",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "category": "UX",
      "subjectsCount": 1,
      "description": "Google annonce Guided Learning dans Classroom le 3 novembre : questions ouvertes, progression pas à pas et ressources du cours. Le pilote Search reste futur et américain ; les contrôles des comptes élèves restent annoncés sans date officielle. Aucun gain pédagogique indépendant n’est retenu.",
      "sources": selectSources(13, 14),
      "details": [
        "Fait / état source : Google déclare Guided Learning disponible mondialement dans Classroom le 3 novembre, avec des activités attribuées par l’enseignant et ancrées dans le cours.",
        "Le pilote Search américain est futur dans la fenêtre ; les contrôles du primaire et secondaire sont annoncés sans date officielle et ne valent pas pour tout enseignement supérieur.",
        "Impact pour une école : le modèle permet de tester une aide qui sollicite le raisonnement, mais ne prouve ni apprentissage supérieur ni autonomie accrue.",
        "Recommandation (Règle de conception) : tester avec de vrais utilisateurs les étapes de raisonnement, l’usage des ressources du cours, l’accès à l’enseignant et les effets d’une désactivation."
      ],
      "recommendationStatus": "Règle de conception",
      "longDescription": "Le 3 novembre, Google déclare Guided Learning disponible mondialement dans Classroom. Une activité attribuée par l’enseignant propose des questions ouvertes, une progression pas à pas et un ancrage dans les ressources du cours, plutôt qu’une réponse finale immédiate. Le billet distingue cette disponibilité déclarée d’un pilote Search prévu plus tard en novembre dans certains établissements américains. Il annonce aussi des contrôles futurs pour les comptes élèves du primaire et secondaire, sans date officielle de mise en œuvre. TechCrunch souligne qu’une restriction complète de l’IA peut également supprimer l’accès à Search pour ces comptes. Cette dépendance doit être rendue compréhensible, sans extrapolation à l’enseignement supérieur. Les études liées ne sont pas reprises : aucun gain pédagogique indépendant n’est retenu. Pour une école, tester avec des personnes réelles le guidage, les ressources et la reprise par un enseignant. L’annonce fournit un modèle d’interaction à évaluer, pas un mandat d’adoption."
    },
    {
      "id": 8,
      "domainName": "IA en production et gouvernance",
      "code": "IA",
      "titre": "DOTS : DÉCIDER AVANT L’ACTIVATION PAR DÉFAUT ANNONCÉE AU 18 NOVEMBRE",
      "badge": "CRITIQUE",
      "previousBadge": null,
      "editorialStatus": "SUIVI",
      "category": "IA",
      "subjectsCount": 1,
      "description": "Le 4 novembre, OpenAI annonce dots pour les espaces Enterprise, Edu et Healthcare éligibles, avec prévisualisation administrateur puis activation par défaut annoncée au 18 novembre. L’échéance appelle une décision explicite sur membres, connexions et supervision ; son exécution ultérieure n’est pas confirmée par S46.",
      "sources": selectSources(15),
      "details": [
        "Fait / état source : la note du 4 novembre annonce une prévisualisation administrateur jusqu’au 18 novembre 2026, puis une disponibilité par défaut pour les espaces éligibles.",
        "Les contrôles couvrent membres, connexions, pause et revue d’activité ; certaines résidences aux Émirats arabes unis sont exclues. La bascule ultérieure n’est pas constatée au 9 novembre.",
        "Impact pour une école : des assistants poursuivant leurs tâches entre les conversations requièrent une décision de gouvernance explicite, sans présumer l’usage d’une école.",
        "Recommandation (Immédiat) : pour un espace concerné, consigner autorisation ou refus avant le 18 novembre annoncé ; limiter personnes et connexions et vérifier pause, suppression et responsabilité."
      ],
      "recommendationStatus": "Immédiat",
      "longDescription": "L’entrée OpenAI du 4 novembre annonce dots pour les espaces Enterprise, Edu et Healthcare éligibles. Ces assistants personnels peuvent poursuivre des tâches entre les conversations. Une prévisualisation administrateur est prévue jusqu’au 18 novembre 2026 ; les propriétaires et administrateurs peuvent autoriser l’accès ou s’y opposer avant la disponibilité par défaut annoncée à cette date. Certaines résidences des données ou de l’inférence aux Émirats arabes unis sont exclues. Les contrôles documentés portent sur membres, connexions, pause, reprise, usage et activité d’administration ; les propriétaires peuvent supprimer les dots personnels. Le fait nouveau concerne le périmètre des espaces et le calendrier, pas le lancement initial des agents. Pour une école concernée, une activation par défaut impose une décision explicite et traçable, des connexions limitées et un responsable. Le signal est critique par impact potentiel et urgence calendaire. Arrêtée au 9 novembre, cette veille ne constate pas l’exécution ultérieure de la bascule."
    }
  ],
  "measurement": undefined,
  "caseStudies": [],
  "bonus": {
    "id": 10,
    "label": "BONUS #10 — ROBOTIQUE SPATIALE",
    "code": "ROBOTIQUE",
    "titre": "CANADARM2 : UNE SORTIE RÉALISÉE SOUS SUPERVISION HUMAINE",
    "badge": "BONUS",
    "previousBadge": null,
    "editorialStatus": "ACTUALITÉ",
    "chiffre": "6 H 59 MIN",
    "statLabel": "DURÉE RÉELLE DE LA SORTIE DU 5 NOVEMBRE",
    "description": "Le 5 novembre 2026, Joshua Kutryk et Anil Menon ont installé un panneau solaire sur la Station spatiale internationale lors d’une sortie de 6 heures et 59 minutes. Selon l’Agence spatiale canadienne, cette opération clôt la campagne de mise à niveau commencée en 2021. Canadarm2, manœuvré depuis la Station et surveillé par les équipes au sol, a assisté les astronautes. Une vidéo officielle publiée le 6 novembre décrit simulation en réalité virtuelle, entraînement en piscine et répétition collective. Il s’agit d’une coopération humaine et robotique réalisée, pas d’une démonstration de robot autonome ni d’un résultat transposable à une école.",
    "sources": selectSources(16, 17),
    "source": selectSources(16)[0],
    "details": [
      "Le compte rendu du 5 novembre rapporte une sortie de 6 heures et 59 minutes et l’installation d’un panneau solaire.",
      "Canadarm2 est manœuvré depuis la Station et surveillé par des équipes au sol.",
      "La vidéo du 6 novembre décrit les simulations, l’entraînement en piscine et la répétition collective.",
      "Deux pages de la même agence, sans preuve d’autonomie robotique ni efficacité transposable à une école."
    ],
    "perspective": "Ce qu’on en retient : la robotique utile dépend aussi de procédures répétées, d’une supervision humaine et de responsabilités explicites ; ce cas est une illustration pédagogique, pas une recommandation d’achat.",
    "longDescription": "Le 5 novembre 2026, Joshua Kutryk et Anil Menon ont installé un panneau solaire sur la Station spatiale internationale lors d’une sortie de 6 heures et 59 minutes. Selon l’Agence spatiale canadienne, cette opération clôt la campagne de mise à niveau commencée en 2021. Canadarm2, manœuvré depuis la Station et surveillé par les équipes au sol, a assisté les astronautes. Une vidéo officielle publiée le 6 novembre décrit simulation en réalité virtuelle, entraînement en piscine et répétition collective. Il s’agit d’une coopération humaine et robotique réalisée, pas d’une démonstration de robot autonome ni d’un résultat transposable à une école. La durée prévue évoquée dans la vidéo ne remplace pas la durée réelle du compte rendu. Aucun gain de puissance n’est chiffré et aucune efficacité pédagogique n’est démontrée."
  },
  "actions": [
    {
      "id": 1,
      "type": "PRIORITÉ",
      "titre": "Consigner l’autorisation ou le refus de dots et les contrôles des espaces effectivement concernés.",
      "domaine": "IA",
      "responsable": "Gouvernance, sécurité et administration",
      "echeance": "Avant le 18 novembre annoncé — perspective au 9 novembre",
      "recommendationStatus": "Immédiat"
    },
    {
      "id": 2,
      "type": "PRIORITÉ",
      "titre": "Vérifier en privé l’applicabilité des avis Drupal contribués et archiver correction et recette.",
      "domaine": "CMS / SOCLE",
      "responsable": "Technique et responsable contractuel de maintenance",
      "echeance": "Immédiat — selon procédure approuvée",
      "recommendationStatus": "Immédiat"
    },
    {
      "id": 3,
      "type": "CONCEPTION",
      "titre": "Définir un seul chemin d’ingestion par conversion avant toute nouvelle connexion.",
      "domaine": "MESURE",
      "responsable": "Mesure et gouvernance des données",
      "echeance": "Avant toute connexion",
      "recommendationStatus": "Règle de conception"
    },
    {
      "id": 4,
      "type": "RECETTE",
      "titre": "Tester le guidage pédagogique avec des personnes réelles et un accès explicite à l’enseignant.",
      "domaine": "UX",
      "responsable": "Pédagogie, produit et accessibilité",
      "echeance": "Avant un pilote borné",
      "recommendationStatus": "Règle de conception"
    },
    {
      "id": 5,
      "type": "VEILLE",
      "titre": "Attendre les définitions et conditions officielles du Business Hub avant toute connexion ou achat.",
      "domaine": "ZERO-CLICK / GEO",
      "responsable": "Contenus et mesure numérique",
      "echeance": "À publication d’une documentation officielle",
      "recommendationStatus": "Indicatif"
    },
    {
      "id": 6,
      "type": "CADRAGE",
      "titre": "Vérifier pertinence et éligibilité des activités publiques avant tout projet d’intégration aux unités Google.",
      "domaine": "SCHEMA / ACCÈS",
      "responsable": "Contenus et information publique",
      "echeance": "Avant tout projet de flux",
      "recommendationStatus": "Indicatif"
    },
    {
      "id": 7,
      "type": "PÉDAGOGIE",
      "titre": "Examiner les ressources Privacy for Kids adaptées au public, à la langue et au contexte pédagogique.",
      "domaine": "CDP / DATA",
      "responsable": "Pédagogie et protection des données",
      "echeance": "Prochaine séquence de sensibilisation",
      "recommendationStatus": "Indicatif"
    }
  ],
  "signauxEmergents": [
    {
      "titre": "Réservation locale depuis AI Mode",
      "description": "Observer une éventuelle extension géographique ou sectorielle officielle, sans extrapoler les services à domicile aux admissions.",
      "horizon": "3–6 mois"
    },
    {
      "titre": "Mesure native dans ChatGPT",
      "description": "Attendre méthode, éligibilité et couverture officielles ; l’observation du 6 novembre n’est pas un lancement.",
      "horizon": "À confirmation officielle"
    },
    {
      "titre": "Activités dans les unités Google",
      "description": "Suivre les conditions d’éligibilité et l’affichage réel avant toute intégration ; aucun balisage universel nouveau.",
      "horizon": "Prochain cycle éditorial"
    },
    {
      "titre": "Carte des flux en bêta",
      "description": "Évaluer la traçabilité et les risques de redondance sans faire de la bêta une migration obligatoire.",
      "horizon": "Avant nouvelle connexion"
    },
    {
      "titre": "Guidage pédagogique et contrôle d’accès",
      "description": "Observer tests humains et modalités officielles des contrôles, distinctes de la disponibilité annoncée dans Classroom.",
      "horizon": "3–6 mois"
    },
    {
      "titre": "Agents persistants administrables",
      "description": "Vérifier toute activation annoncée, les contrôles effectifs et la décision du responsable avant généralisation.",
      "horizon": "18 novembre annoncé, puis revue"
    }
  ],
  "tendancesPassees": [
    {
      "titre": "Mémoire S42 — interface sous politique",
      "description": "Composition, validation humaine, permissions et retours d’état accessibles restent des exigences ; le guidage S46 est un fait distinct."
    },
    {
      "titre": "Mémoire S43 — citations et attribution",
      "description": "L’incident de marquage des liens reste historique ; le Business Hub observé ne répare pas les sessions antérieures ni leur attribution."
    },
    {
      "titre": "Mémoire S43 — cas Currys",
      "description": "Conserver le repère de valeur du conseil humain et ses limites méthodologiques ; aucun résultat du distributeur ne devient un objectif pour une école."
    },
    {
      "titre": "Mémoire S44 — sécurité du socle",
      "description": "Les correctifs initiaux restent archivés ; les avis contribués du 4 novembre ne constituent ni une répétition ni une exposition générale des CMS."
    },
    {
      "titre": "Mémoire S44 — donnée et droit applicable",
      "description": "Le mandat Digital Omnibus et le format des données de l’interface de programmation restent distincts d’une loi adoptée et du lancement Analytics S46."
    },
    {
      "titre": "Mémoire S45 — consentement et supervision",
      "description": "La décision individuelle sur les traceurs et les principes d’identité des agents restent du contexte, non de nouvelles obligations S46."
    }
  ],
  "sources": sourceRegistry
};
