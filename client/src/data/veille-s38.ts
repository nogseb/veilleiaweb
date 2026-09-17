export const veilleS38 = {
  week: 38,
  year: 2026,
  publicationDate: "14 septembre 2026",
  domainsCount: 8,
  sourcesCount: 9,
  criticalCount: 3,
  importantCount: 4,
  actionsCount: 6,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "LA VISIBILITÉ DANS LES RÉPONSES IA NE SE TRADUIT PAS MÉCANIQUEMENT EN TRAFIC. LE GEO DOIT DEVENIR UN PILOTAGE À PLUSIEURS INDICATEURS : MENTION, CITATION, VISITE, RECHERCHE DE MARQUE ET CONVERSION.",
  },

  statDominante: {
    chiffre: "0,48 %",
    titre: "DES SESSIONS INDUSTRIELLES PROVENAIENT DES ASSISTANTS ET D’AI MODE",
    description: "Dans son étude sectorielle américaine publiée le 8 septembre, Semrush mesure 0,48 % de sessions en provenance d’outils IA ou d’AI Mode entre janvier et juillet 2026. Ce n’est pas une référence pour tous les secteurs : le signal est que citation, mention et trafic doivent être suivis séparément.",
  },

  syntheseExecutive: "La S38 apporte un correctif de méthode : la présence dans les réponses génératives n’est pas encore un canal de trafic directement proportionnel. L’étude Semrush montre, sur un secteur précis, la dissociation entre mentions, citations et visites ; le GEO doit donc être relié à la recherche de marque, au trafic direct et aux actions aval. Côté recherche, Google teste des interfaces AI Mode et AI Overviews où la visibilité des liens peut se réduire : la qualité de la source et son motif de clic deviennent plus importants. Les données structurées restent nécessaires à la lisibilité machine, mais l’analyse Ahrefs relayée par Search Engine Journal ne montre pas d’effet significatif du seul ajout de JSON-LD sur les citations. Le CMS agentique déplace la priorité vers la gouvernance des contenus-source, leurs droits et leur fraîcheur. Pour la donnée client, l’identité first-party se rapproche de l’activation, sous réserve d’un consentement et de règles réellement propagés. Enfin, la sécurité des agents devient un sujet de production : les permissions, traces et mécanismes d’arrêt font partie du produit, pas de sa documentation.",

  dashboardDetails: {
    domaines: ["Google AI / Search", "Zero-Click / GEO", "Schema.org", "DXP / Headless", "CDP & Data", "UX / IA", "IA / Gouvernance", "Innovation Marketing"],
    sources: ["Search Engine Roundtable", "Semrush", "Search Engine Journal", "CMSWire", "Commanders Act / First-id", "Nielsen Norman Group", "Anthropic", "IAB", "Reuters"],
    critiques: ["Zero-Click / GEO : les citations et mentions ne constituent pas un proxy direct de trafic ou de conversion", "DXP / CMS : un agent connecté propage plus vite les incohérences d’un référentiel de contenu non gouverné", "IA / gouvernance : les opérations agentiques exigent droits minimaux, journalisation, seuils de validation et arrêt"],
    importants: ["Google AI Search : les tests d’interface réduisant la place visible des citations renforcent la nécessité de contenus qui méritent le clic", "Schema.org : le JSON-LD clarifie l’information sans déclencher à lui seul les citations IA", "CDP & Data : la chaîne consentement-identité-profil-activation doit être auditable de bout en bout", "UX / IA : l’IA permet de tester les scénarios non déterministes plus tôt, sans transformer un prototype en produit"],
    actions: ["Mettre en place une lecture GEO par étapes : présence de marque, citation, visite, recherche de marque et conversion", "Auditer les contenus-source à forte réutilisation : propriétaire, fraîcheur, preuve, date de révision, droits et dépendances", "Contrôler Schema.org comme contrat de contenu visible et identitaire, sans lui attribuer un objectif de citation autonome", "Cartographier la propagation du consentement et de l’identité entre collecte, CDP, CRM, analytics et activations", "Définir le mandat de tout agent : objectif, données, outils, limites, journal, validation humaine et mécanisme d’arrêt", "Tester les parcours conversationnels avec prototypes interactifs et données synthétiques avant toute connexion à un système de production"],
    emergents: ["La valeur GEO migre d’un score unique vers un entonnoir de présence et d’effets indirects", "Les interfaces génératives arbitrent elles-mêmes la place accordée aux citations et aux suites de conversation", "La qualité du référentiel CMS devient une condition de fiabilité des artefacts produits par agents", "Les identifiants first-party deviennent une chaîne opérationnelle entre consentement, déduplication et activation", "La robotique industrielle rappelle que l’autonomie à grande échelle dépend encore de données d’exploitation et de tâches définies"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "DANS AI MODE, L’INTERFACE DEVIENT AUSSI UN FACTEUR DE VISIBILITÉ",
      badge: "IMPORTANT",
      previousBadge: "CRITIQUE",
      description: "Search Engine Roundtable observe deux tests : des réponses de suivi paginées dans AI Mode et un panneau de citations plus étroit dans AI Overviews. Ce sont des expérimentations observées, non un déploiement généralisé, mais elles rappellent que le format de réponse peut modifier l’exposition réelle des sources.",
      category: "GOOGLE",
      sources: [
        { nom: "Search Engine Roundtable", url: "https://www.seroundtable.com/recap-09-08-2026-42041.html" }
      ],
      details: [
        "AI Mode est observé avec des réponses de suivi paginées et un bouton de saut",
        "Google teste un panneau de citations plus étroit dans AI Overviews",
        "Les deux éléments sont rapportés comme des tests, pas comme une disponibilité générale",
        "Une citation moins exposée peut modifier la probabilité de clic sans changer la présence de la source",
        "La mesure doit séparer apparition dans une réponse, visibilité du lien et visite réelle"
      ],
      longDescription: "Le signal Google de la semaine est d’abord une évolution d’interface. Search Engine Roundtable observe dans AI Mode des réponses de suivi paginées, accompagnées d’un bouton permettant de les ignorer, ainsi qu’un panneau de citations plus étroit dans AI Overviews. Ces observations ne valent pas annonce de déploiement général : elles doivent être traitées comme des tests. Leur intérêt opérationnel est néanmoins important. Dans une réponse générative, une source peut être techniquement citée sans que le lien soit particulièrement vu, compris ou choisi par l’utilisateur. La présence dans l’interface et la capacité à provoquer un approfondissement deviennent donc deux sujets distincts. Pour TBS Education, les pages les plus susceptibles d’être citées doivent proposer une valeur immédiatement identifiable au-delà du résumé : conditions détaillées, dates actualisées, critères d’éligibilité, témoignages de responsables ou outils d’aide à la décision. Le tableau de bord ne doit pas confondre impression générative, apparition d’une citation, trafic référent et action aval. Cette granularité est aussi nécessaire pour interpréter un éventuel opt-out ou une évolution de contenu sans fabriquer de causalité à partir d’un seul signal.",
    },
    {
      id: 2,
      code: "ZERO-CLICK",
      titre: "MENTION, CITATION ET TRAFIC IA : TROIS MÉTRIQUES À DISSOCIER",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "L’étude Semrush sur 458 requêtes industrielles américaines montre des AI Overviews sur 57 % du volume suivi en juillet, contre 38 % en janvier. Pourtant, assistants et AI Mode ne représentent que 0,48 % des sessions sectorielles : la présence IA doit être pilotée comme un effet de découverte, pas comme un canal garanti.",
      category: "GEO",
      sources: [
        { nom: "Semrush", url: "https://www.semrush.com/blog/manufacturing-seo-ai-search/" }
      ],
      details: [
        "Le corpus suit 458 mots-clés industriels américains entre janvier et juillet 2026",
        "Les AI Overviews passent de 38 % à 57 % du volume de recherche suivi",
        "AI Mode et assistants comptent pour 0,48 % des sessions sectorielles mesurées",
        "Seules deux marques figurent à la fois dans les quinze premières mentions et citations de l’étude",
        "La méthodologie combine SERP, clickstream et base de visibilité IA Semrush"
      ],
      longDescription: "L’étude Semrush ne permet pas de généraliser le chiffre de 0,48 % à l’enseignement supérieur français ; son apport est méthodologique. Sur un secteur industriel américain, AI Overviews se diffusent rapidement, alors que le trafic directement attribuable aux assistants et à AI Mode demeure faible. Le même travail montre qu’une marque peut être mentionnée sans être citée, citée sans générer beaucoup de visites, ou bénéficier d’un effet différé sur la recherche de marque et le trafic direct. Le GEO ne doit donc ni être abandonné au motif que le trafic référent est faible, ni être valorisé sur la seule base d’un score de citation. Pour TBS Education, l’enjeu est de mettre en place une chaîne de lecture : part de présence sur des questions candidat prioritaires, qualité et exactitude de la réponse, visibilité de la source, évolution des requêtes de marque, visites, engagement et conversion. Les contenus qui méritent un clic doivent livrer plus qu’une définition générique : informations vérifiables, points de comparaison, preuves de l’expérience étudiant et contacts utiles. Cette approche évite de surinterpréter le zero-click tout en traitant l’IA comme une couche réelle de découverte et de préférence.",
    },
    {
      id: 3,
      code: "SCHEMA.ORG",
      titre: "LE JSON-LD CLARIFIE LE CONTENU, MAIS NE REMPLACE PAS LA PERTINENCE",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Search Engine Journal relaie un test Ahrefs : 1 885 pages ayant ajouté du JSON-LD ont été comparées à 4 000 pages contrôle. Les écarts de citations observés dans AI Mode et ChatGPT ne sont pas significatifs : les données structurées sont un contrat de lisibilité, pas un bouton GEO.",
      category: "SEO",
      sources: [
        { nom: "Search Engine Journal", url: "https://www.searchenginejournal.com/brands-are-tracking-ai-visibility-but-are-they-measuring-the-right-things/587888/" }
      ],
      details: [
        "Ahrefs compare 1 885 pages ayant ajouté du JSON-LD à 4 000 pages contrôle",
        "Le test relayé ne constate pas de hausse significative des citations dans AI Mode ou ChatGPT",
        "Les pages citées par IA étaient presque trois fois plus susceptibles de contenir du JSON-LD, sans démonstration causale",
        "Le corpus porte sur des pages déjà référencées par AI Overviews avant le changement",
        "Le balisage doit rester fidèle au contenu visible, aux entités et aux relations réellement publiées"
      ],
      longDescription: "Le débat Schema.org gagne en maturité : l’enjeu n’est plus de savoir si le JSON-LD « plaît » aux moteurs génératifs, mais de comprendre ce qu’il peut et ne peut pas expliquer. Search Engine Journal relaie une analyse Ahrefs comparant 1 885 pages qui ont ajouté du JSON-LD avec 4 000 pages contrôle. Si les pages citées sont plus souvent dotées de données structurées, l’ajout de balisage n’a pas produit de hausse statistiquement significative de citations dans AI Mode ou ChatGPT dans ce test. La distinction est essentielle : corrélation de qualité éditoriale et technique n’est pas causalité de citation. Pour TBS Education, Schema.org reste un socle : Organization, EducationalOccupationalProgram, Course, Event, Person ou BreadcrumbList doivent exprimer des objets réels, cohérents avec la page affichée et maintenus dans le temps. Il faut vérifier les identifiants, liens entre entités, dates, redirections et rendu visible. Le KPI pertinent est la santé du contrat de contenu : complétude, validité, fraîcheur et capacité à éviter les contradictions. La visibilité générative se gagne ensuite par la substance : informations originales, sources, expertise attribuée et adéquation avec l’intention détaillée des candidats.",
    },
    {
      id: 4,
      code: "DXP / HEADLESS",
      titre: "UN CMS AGENTIQUE AMPLIFIE LE CONTENU SOURCE — BON OU MAUVAIS",
      badge: "CRITIQUE",
      previousBadge: "IMPORTANT",
      description: "CMSWire rapporte que les agents déplacent le goulot d’étranglement de la production d’artefacts vers la gouvernance des faits réutilisables. Avec MCP, connecter les systèmes devient plus simple ; la rareté devient la qualité, la structure et l’autorisation du référentiel éditorial.",
      category: "ARCHI",
      sources: [
        { nom: "CMSWire", url: "https://www.cmswire.com/digital-experience/what-happens-when-ai-agents-inherit-your-messy-content-repository/" }
      ],
      details: [
        "CMSWire distingue le contenu-source gouverné des artefacts de diffusion comme une page ou un email",
        "Une information copiée dans plusieurs artefacts devient un point de défaillance lors d’une mise à jour",
        "MCP réduit la friction de connexion mais ne crée ni autorité ni qualité de contenu",
        "La taxonomie, les métadonnées, la provenance et les droits deviennent des conditions de récupération fiable",
        "Les tactiques GEO, y compris FAQ et métadonnées, doivent être testées plutôt que présumées"
      ],
      longDescription: "Le point décisif pour une architecture CMS agentique n’est pas la capacité de l’agent à générer davantage de pages. CMSWire met en avant une distinction opérationnelle : les contenus-source — faits approuvés, règles, descriptions, visuels, références — doivent être gouvernés séparément des artefacts qui les expriment, comme une landing page, un email ou une fiche programme. Sans cette séparation, une information obsolète se propage dans tous les livrables produits ou recombinés par l’agent. Le développement de MCP réduit le coût de connexion aux systèmes, mais n’améliore pas par lui-même la qualité de ce qui est exposé. Pour TBS Education, il faut traiter les informations de programme, admissions, frais, critères, contacts et exigences réglementaires comme des objets source avec propriétaire, date de révision, droits d’usage et historique. Les agents peuvent ensuite proposer des brouillons ou contrôles de cohérence, mais ne doivent pas devenir l’arbitre d’un fait. La première expérimentation pertinente consiste à choisir une famille de contenus, cartographier ses sources de vérité et tester l’impact d’un flux de brouillon avec validation humaine. Le gain à mesurer est la réduction de divergences et de corrections, pas le seul volume produit.",
    },
    {
      id: 5,
      code: "CDP & DATA",
      titre: "L’IDENTITÉ FIRST-PARTY SE JOUE DANS LA CHAÎNE CONSENTEMENT → PROFIL → ACTIVATION",
      badge: "IMPORTANT",
      previousBadge: "CRITIQUE",
      description: "Commanders Act annonce l’intégration de First-id dans sa plateforme : consentement, identification, déduplication, CDP et activation sont proposés comme une chaîne unique. C’est une annonce fournisseur, sans KPI client publié, mais elle illustre le déplacement de l’identité vers une capacité opérationnelle et gouvernée.",
      category: "CDP",
      sources: [
        { nom: "Commanders Act / First-id", url: "https://www.commandersact.com/news/commanders-act-and-first-id-join-forces-to-help-brands-take-back-control-of-their-marketing-identity/" }
      ],
      details: [
        "L’annonce décrit une intégration native de First-id dans Gateway, l’environnement server-side de Commanders Act",
        "La chaîne proposée relie signal de consentement, reconnaissance, enrichissement de profil, déduplication et activation",
        "Les cas évoqués incluent CRM, analytics, APIs de conversion et marketing automation",
        "Aucune performance client chiffrée n’est publiée dans le communiqué",
        "Le mécanisme ne dispense pas de vérifier base légale, transparence, durée, droits et propagation des exclusions"
      ],
      longDescription: "Le signal CDP de la semaine est fourni par un communiqué de partenariat, et doit être lu comme tel : il ne prouve aucune performance de campagne. En revanche, il décrit clairement le nouvel objet de décision. L’identification first-party n’est plus une fonction isolée ; elle s’inscrit dans une chaîne qui part du consentement, relie des interactions, enrichit un profil, déduplique une audience puis alimente des activations CRM, analytics, publicité ou automatisation. Pour TBS Education, l’enjeu prioritaire n’est pas d’adopter un identifiant supplémentaire, mais d’être capable de documenter ce qui se passe à chaque étape. Quel consentement autorise quel usage ? Quelle donnée fait foi si deux profils divergent ? Comment une opposition est-elle propagée dans chaque destination ? Quels sont les délais de mise à jour et les contrôles de qualité ? Les réponses déterminent la faisabilité d’une personnalisation ou d’un agent d’orchestration. Une architecture peut être souveraine ou composable, mais elle doit être observable et réversible. Avant une activation, l’équipe doit être en mesure de reconstituer la chaîne qui a produit une audience, d’en expliquer les critères et d’appliquer une exclusion sans délai indu.",
    },
    {
      id: 6,
      code: "UX / IA",
      titre: "PROTOTYPER AVEC L’IA POUR TESTER LES CAS LIMITES AVANT LA PRODUCTION",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Nielsen Norman Group montre que les prototypes IA interactifs permettent de tester plus tôt les nombreux états et réponses possibles d’une interface conversationnelle. Leur avertissement est central : un prototype convaincant peut sembler prêt à livrer alors qu’il masque encore des erreurs de hiérarchie, d’accessibilité ou de comportement.",
      category: "UX",
      sources: [
        { nom: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/test-earlier-with-ai/" }
      ],
      details: [
        "L’IA facilite la création de prototypes interactifs avec états, données et réponses variées",
        "Les interfaces conversationnelles sont difficiles à représenter avec des écrans statiques et des parcours heureux",
        "NN/g recommande de définir interactions, données, règles, erreurs et critères de recherche avant de prompter",
        "Des données réelles exigent des règles de confidentialité ; les données synthétiques sont une alternative",
        "La haute fidélité visuelle ne constitue pas une preuve de préparation à la production"
      ],
      longDescription: "Les interfaces IA ne se résument pas à une zone de chat. Elles comportent des réponses incertaines, des transitions d’état, des erreurs, des escalades vers un humain et des cas limites qui peuvent rester invisibles dans un prototype statique. Nielsen Norman Group souligne qu’un prototype interactif généré avec l’IA permet de mettre ces comportements à l’épreuve plus tôt, avant qu’une décision d’architecture ou un développement coûteux ne fige une mauvaise solution. Pour TBS Education, cette possibilité est utile pour tester une aide conversationnelle sur les admissions, les financements ou le choix d’un programme. L’équipe doit cependant commencer par le protocole, pas par l’outil : définir la question de recherche, les situations sensibles, les informations autorisées, les réponses qui nécessitent un transfert vers un conseiller et les critères d’acceptation. Les données de test doivent être synthétiques ou protégées. Une revue UX, accessibilité, métier et juridique reste indispensable avant toute mise en production. Le prototype accélère l’apprentissage ; il ne certifie ni la pertinence des réponses ni la conformité. La bonne issue du test peut aussi être de renoncer à une interaction conversationnelle au profit d’un parcours guidé plus clair.",
    },
    {
      id: 7,
      code: "IA / GOV",
      titre: "LES AGENTS CAPABLES D’AGIR EXIGENT DES CONTRÔLES D’EXÉCUTION, PAS SEULEMENT DES RÈGLES D’USAGE",
      badge: "CRITIQUE",
      previousBadge: "CRITIQUE",
      description: "Le rapport d’Anthropic sur les abus observés entre décembre 2025 et août 2026 décrit des opérations où l’IA a été employée pour l’orchestration, la reconnaissance, l’exploitation et l’exfiltration. Le signal entreprise : les agents dotés d’outils doivent être limités, observables et interrompables.",
      category: "IA",
      sources: [
        { nom: "Anthropic", url: "https://www.anthropic.com/threat-intelligence-report-september-2026" }
      ],
      details: [
        "Le rapport couvre sept catégories de préjudices et des activités perturbées de décembre 2025 à août 2026",
        "Les cas décrivent des usages allant au-delà du chatbot : cadres multi-agents, outils et exécution de tâches",
        "La majorité des opérations citées impliquait exécution ou orchestration directe par IA selon Anthropic",
        "Les contrôles renforcés, partage de renseignement et interruption d’activité font partie de la réponse décrite",
        "La transposition entreprise impose minimisation des droits, traces, seuils d’approbation et arrêt"
      ],
      longDescription: "Le rapport d’Anthropic ne constitue pas une étude d’usage entreprise standard ; il documente des opérations malveillantes identifiées et perturbées. Il est néanmoins très utile pour penser le déploiement d’agents : lorsque des modèles peuvent utiliser des outils et enchaîner des actions, le risque ne se situe plus uniquement dans la formulation d’une réponse erronée. Il concerne les accès accordés, les actions réellement exécutées, la capacité à détecter une dérive et celle à interrompre le système. Pour TBS Education, un agent doit recevoir un mandat étroit : périmètre de données, finalité, outils autorisés et opérations interdites. Les permissions doivent être minimales, les environnements sensibles séparés, les actions réversibles lorsque possible et les étapes à impact soumises à validation humaine. La journalisation doit permettre de reconstituer le contexte, la source utilisée, la décision prise et l’effet produit. Les agents externes ne doivent pas disposer d’un accès général à des boîtes mail, CRM, fichiers ou CMS de production. Cette discipline est compatible avec l’innovation : elle permet de commencer sur des cas de faible risque, de mesurer les erreurs et d’augmenter l’autonomie lorsque les contrôles ont été démontrés en situation.",
    },
    {
      id: 8,
      code: "INNOVATION MKT",
      titre: "LA DÉCOUVERTE PAR IA DEVIENT UN SUJET DE BUDGET, DE VISIBILITÉ ET DE MESURE",
      badge: "À SURVEILLER",
      previousBadge: "À SURVEILLER",
      description: "La mise à jour de septembre de l’IAB Outlook Study s’appuie sur plus de 200 décideurs de marques et agences américaines. Elle place la découverte par IA, la visibilité de marque et la mesure parmi les priorités qui reconfigurent les arbitrages média ; le signal est stratégique, pas un benchmark français à transposer tel quel.",
      category: "INNOV MKT",
      sources: [
        { nom: "IAB", url: "https://www.iab.com/insights/2026-outlook-study-september-update/" }
      ],
      details: [
        "L’étude IAB est publiée le 10 septembre 2026",
        "Elle s’appuie sur les retours de plus de 200 décideurs de marques et d’agences américaines",
        "Elle examine la découverte pilotée par IA, la visibilité de marque et l’évolution de la mesure",
        "Le périmètre américain doit être distingué de la réalité marché et réglementaire française",
        "Le sujet opérationnel est la capacité à relier exposition IA, médias, marque et résultats métier"
      ],
      longDescription: "L’innovation marketing de la semaine n’est pas une campagne à copier : c’est un déplacement de l’agenda média. L’IAB interroge plus de 200 décideurs de marques et agences américaines et souligne que la découverte par IA, la visibilité de marque et la mesure entrent dans les priorités d’arbitrage. Le résultat ne s’applique pas mécaniquement à la France ou à l’enseignement supérieur, mais il confirme une question désormais opérationnelle : comment une marque est-elle rencontrée, évaluée et mémorisée lorsque la première interaction se déroule dans un assistant ou une réponse synthétique ? Pour TBS Education, il est prématuré de réallouer un budget sur la seule base d’un signal de visibilité IA. La priorité est d’intégrer ce nouvel environnement dans les mécanismes de marque et de performance existants : recherche de marque, accès direct, qualité des visites, demandes d’information, candidatures et perception. Les partenariats, contenus experts et médias affinitaires doivent être pensés comme des actifs de découverte et de preuve, pas seulement comme des sources de clic. L’innovation utile associe une hypothèse claire, un public, une exposition contrôlée, une mesure proportionnée et une décision de poursuite documentée.",
    }
  ],

  bonus: {
    label: "BONUS #10 — ROBOTIQUE",
    titre: "LE ROBOT HUMANOÏDE N’EST PAS ENCORE UN PRODUIT INDUSTRIEL À GRANDE ÉCHELLE",
    chiffre: "30 000",
    statLabel: "ROBOTS PAR AN : CAPACITÉ VISÉE PAR HYUNDAI EN 2028",
    description: "Reuters rapporte que Hyundai vise une usine capable de produire 30 000 robots par an en 2028 et prévoit un premier déploiement d’humanoïdes à son site de Géorgie la même année. Le fun fact est prospectif : même Boston Dynamics reste confronté au passage difficile entre démonstration et déploiement à grande échelle.",
    details: [
      "Reuters publie le 14 septembre les éléments de trajectoire industrielle de Boston Dynamics et Hyundai",
      "Hyundai vise une capacité de 30 000 robots par an en 2028",
      "Le groupe prévoit un premier déploiement d’humanoïdes dans son usine de Géorgie en 2028",
      "Reuters cite des analystes rappelant que le déploiement large dans les usines reste difficile",
      "Un horizon de démonstration ou d’annonce ne vaut pas preuve de généralisation industrielle"
    ],
    perspective: "Le passage du prototype à l’échelle dépend moins de l’apparence du robot que de l’environnement, des données d’exploitation, des tâches définies, de la sécurité et du coût de reprise humaine.",
    longDescription: "Le bonus robotique de la S38 est un rappel salutaire contre l’effet démonstration. Reuters rapporte que Hyundai vise une capacité de production de 30 000 robots par an en 2028 et prévoit de déployer pour la première fois des humanoïdes dans son usine américaine de Géorgie la même année. Ces objectifs sont ambitieux ; le reportage rappelle que Boston Dynamics ne déploie pas encore Atlas à grande échelle en usine et cite des analystes pour qui la généralisation industrielle reste difficile. La bonne lecture n’est donc pas « les humanoïdes remplacent demain les opérateurs », mais « le passage à l’échelle exige des tâches stables, des données de terrain, des conditions de sécurité et une preuve économique ». Pour TBS Education, l’analogie utile concerne les agents numériques : un prototype spectaculaire ne garantit ni la robustesse, ni l’acceptabilité, ni la valeur dans un processus réel. Les projets doivent démarrer avec un cas limité, un environnement connu, des critères de réussite, un suivi des exceptions et un rôle de reprise humaine. L’autonomie crédible est une progression contrôlée, non un saut technologique proclamé.",
    source: { nom: "Reuters", url: "https://www.reuters.com/business/media-telecom/ipo-humanoid-robot-maker-boston-dynamics-unlikely-2027-executive-says-2026-09-14/", date: "14 septembre 2026" }
  },

  actions: [
    { id: 1, titre: "Construire un tableau de bord GEO en cinq étages : présence de marque, citation, exposition du lien, visite ou recherche de marque, action aval", domaine: "SEARCH / ANALYTICS", responsable: "SEO + DATA" },
    { id: 2, titre: "Auditer les pages candidat qui risquent d’être résumées par IA et leur ajouter une raison documentée d’approfondir : conditions détaillées, preuves, outils ou contact", domaine: "SEO / ÉDITORIAL", responsable: "ÉDITORIAL + SEO" },
    { id: 3, titre: "Maintenir Schema.org comme contrat de contenu : objets réels, correspondance avec le visible, identifiants, validations, dates de révision et résolution des erreurs", domaine: "ARCHITECTURE / SEO", responsable: "DIGITAL + DSI" },
    { id: 4, titre: "Identifier une famille de contenus-source critique et lui attribuer propriétaire, provenance, droits, fraîcheur et règles de réutilisation avant toute expérimentation agentique", domaine: "DXP / GOUVERNANCE", responsable: "DIGITAL + ÉDITORIAL + DSI" },
    { id: 5, titre: "Cartographier le consentement et l’identité entre collecte, CRM, CDP, analytics et activation, avec un test d’exclusion de bout en bout", domaine: "DATA / CRM", responsable: "CRM + DATA PROTECTION + DSI" },
    { id: 6, titre: "Faire de la sécurité une condition d’entrée des agents : droits minimaux, environnement de test, journal exploitable, approbation humaine et arrêt documenté", domaine: "IA / GOUVERNANCE", responsable: "DSI + JURIDIQUE + MÉTIERS" }
  ],

  signauxEmergents: [
    { titre: "Du score GEO à l’entonnoir d’effets", description: "La présence IA doit être lue comme une chaîne allant de la mention à la conversion, avec des effets directs et indirects distincts.", horizon: "IMMÉDIAT" },
    { titre: "De la citation à l’interface de citation", description: "Les tests AI Mode et AI Overviews montrent que la mise en scène du lien peut peser autant que la présence de la source.", horizon: "IMMÉDIAT" },
    { titre: "Du CMS de publication au référentiel de vérités", description: "Les agents accélèrent la production d’artefacts ; le différenciant devient le contenu-source gouverné, traçable et à jour.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "Du profil unifié à la chaîne d’identité contrôlée", description: "L’identité first-party relie consentement, rapprochement, profil et activation : le contrôle doit suivre toute la chaîne.", horizon: "COURT TERME (Q4 2026)" },
    { titre: "De l’agent puissant à l’agent opérable", description: "L’autonomie utile se construit avec des tâches limitées, des droits réduits, des traces et une reprise humaine.", horizon: "MOYEN TERME (2027)" }
  ],

  tendancesPassees: [
    { titre: "De la présence AI Search au pilotage de sa valeur", description: "S31-S37 ont suivi le déploiement et la mesure de la visibilité générative. S38 distingue explicitement présence, citation, trafic et conversion." },
    { titre: "Du balisage au contrat de données", description: "Le fil rouge Schema.org se précise : les données structurées assurent lisibilité et cohérence, mais ne constituent pas un levier autonome de citations." },
    { titre: "Du CMS agent-ready au CMS source de vérité", description: "Les semaines récentes ont documenté MCP et les agents CMS. S38 replace la gouvernance du référentiel source avant la génération d’artefacts." },
    { titre: "Du profil client à la chaîne consentie d’activation", description: "La CDP reste un sujet de contexte gouverné ; S38 met l’accent sur la propagation opérationnelle du consentement et de l’identité." },
    { titre: "De l’expérimentation agentique au contrôle d’exécution", description: "La montée des agents impose une continuité de mandat, permissions, observations, validation et arrêt, de l’assistant à l’action." }
  ]
};
