export const veilleS44 = {
  week: 44,
  year: 2026,
  publicationDate: "26 octobre 2026",
  domainsCount: 4,
  sourcesCount: 12,
  criticalCount: 0,
  importantCount: 4,
  actionsCount: 5,
  emergingCount: 5,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "EN PRODUCTION, UNE IA N’EST FIABLE QUE SI SES DÉPENDANCES RÉELLES ET SES PREUVES SONT CONTRÔLÉES.",
  },

  statDominante: {
    chiffre: "0,4 %",
    titre: "D’ÉTAPES OBSOLÈTES APRÈS FERMETURE DES IMPORTS STATIQUES DANS LE REPLAY DVC",
    description: "Une prépublication sur 38 083 commits de 714 pipelines publics DVC abaisse de 3,3 % à 0,4 % la réutilisation d’étapes obsolètes, tout en évitant 81,6 % des exécutions. Ce résultat de recherche ne constitue ni un benchmark TBS Education ni une promesse de gain opérationnel.",
  },

  syntheseExecutive: "La S44 ramène l’IA à une exigence de production : une signature ou une preuve ne suffit pas si les dépendances réellement appelées ne sont pas couvertes. Google décrit une Search plus agentique, dans laquelle les agents pourront accéder aux sites par les pages ou par des protocoles ; robots.txt contrôle surtout le crawl, pas nécessairement l’usage ultérieur d’un contenu déjà récupéré. Les données publiées cette semaine confirment aussi que le trafic direct des LLM reste faible face à Google, même lorsque des taux de conversion plus élevés sont observés sur un sous-échantillon. Les citations IA demeurent variables et vulnérables aux sources déjà privilégiées. Côté UX, l’interface conversationnelle devient adaptative, avec des formulaires et contrôles composés dans l’échange : un pilote doit donc être mesuré sur l’effort, la résolution et le recours humain. Les domaines Schema.org, CMS/DXP, CDP/data et innovation marketing sont volontairement masqués : aucun signal de la semaine n’atteint le niveau de preuve requis.",

  dashboardDetails: {
    domaines: ["Google AI Search", "Zero-Click / GEO", "UX/UI conversationnelle", "IA en production / gouvernance"],
    sources: ["Search Engine Journal", "Google Search Central", "OpenAI", "Forrester", "arXiv — pipelines IA", "arXiv — robotique"],
    critiques: [],
    importants: ["Google : accès agentique par pages et protocoles", "GEO : trafic LLM faible mais conversion à interpréter avec prudence", "UX : UI adaptative et mesure experience-first", "IA en production : dépendances déclarées et release gates fail-closed"],
    actions: ["Tester la visibilité AI Search sur un panel documenté", "Contrôler les règles Google-Extended et les objectifs d’inclusion", "Mesurer séparément citations IA, visites et conversions CRM", "Inclure dépendances, provenance et revue humaine dans les IA en production", "Préparer un pilote conversationnel avec protocole de mesure"],
    emergents: ["Accès agentique aux sites par pages et protocoles", "Contrôles Google de partage dans les expériences génératives", "UI conversationnelle adaptative", "Gouvernance fail-closed des pipelines IA", "Robotique multimodale : progrès rapides, contraintes de coût et de précision"],
  },

  domaines: [
    {
      id: 1,
      code: "GOOGLE AI",
      titre: "GOOGLE DÉCRIT UNE SEARCH PLUS AGENTIQUE, ENTRE NAVIGATION PAR PAGES ET PROTOCOLES",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Sundar Pichai présente une couche agentique qui relierait Search, Gemini et l’exécution de tâches ; Google précise les limites de robots.txt pour l’usage IA des contenus.",
      category: "GOOGLE",
      sources: [
        { nom: "Search Engine Journal — Agentic layer", url: "https://www.searchenginejournal.com/google-ceo-sundar-pichai-views-search-absorbed-into-agentic-layer/593923/" },
        { nom: "Search Engine Journal — Pages and APIs", url: "https://www.searchenginejournal.com/pichai-ai-agents-browsing-protocols/593986/" },
        { nom: "Search Engine Journal — robots.txt and AI content use", url: "https://www.searchenginejournal.com/google-illyes-robots-txt-crawling-ai-training/593957/" },
      ],
      details: [
        "Sundar Pichai décrit une couche agentique destinée à unifier Search, Gemini et l’exécution de tâches ; aucun calendrier ferme ni KPI de déploiement n’est publié",
        "Google distingue l’accès des agents aux sites par navigation de pages et par protocoles spécialisés, notamment MCP, UCP et Google-Agent",
        "Gary Illyes rappelle que robots.txt contrôle d’abord le crawl, pas l’usage ultérieur d’un contenu déjà récupéré",
        "Google-Extended est présenté comme un contrôle documenté pour certains usages Gemini ; Content-Usage reste un brouillon IETF non adopté",
      ],
      longDescription: "Les 22 octobre, Search Engine Journal rapporte la vision de Sundar Pichai d’une couche agentique reliant Search, Gemini et l’exécution de tâches. Google distingue deux voies d’accès aux sites : la navigation des pages existantes et des protocoles spécialisés. Les protocoles sont décrits comme plus évolutifs, mais aussi plus longs à développer ; aucun calendrier de déploiement, volume d’usage ou effet sur le trafic n’est publié. Dans le même mouvement, Gary Illyes rappelle la limite de robots.txt : ce fichier contrôle principalement le crawl. Il ne règle pas à lui seul l’usage IA qui pourrait être fait d’un contenu déjà récupéré. Google-Extended demeure le contrôle documenté pour certains usages Gemini, alors qu’un éventuel champ Content-Usage n’est qu’un brouillon IETF. Pour TBS Education, il faut renforcer des contenus institutionnels à jour, crawlables et structurés, sans inventer de directives robots. Le pilotage doit distinguer indexation, citation par une réponse IA, visite qualifiée et conversion : ces mécanismes ne sont pas interchangeables.",
    },
    {
      id: 2,
      code: "ZERO-CLICK / GEO",
      titre: "LE GEO DOIT ÊTRE MESURÉ COMME UN SIGNAL DE PRÉSENCE, PAS COMME UN RACCOURCI VERS LA CONVERSION",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Sur 100 sites suivis, ChatGPT représente 0,62 % du volume de Google Organic et les LLM 0,73 % ; les citations restent instables et doivent être recoupées.",
      category: "SEO",
      sources: [
        { nom: "Search Engine Journal — GEO Is A Distraction", url: "https://www.searchenginejournal.com/geo-is-a-distraction-heres-where-the-real-opportunity-is/593870/" },
        { nom: "Search Engine Journal — Made-up concept citations", url: "https://www.searchenginejournal.com/ai-search-tools-cited-a-made-up-concept-within-a-week-paper-finds/593472/" },
        { nom: "Google Search Central — Control what you share", url: "https://developers.google.com/search/docs/crawling-indexing/control-what-you-share" },
        { nom: "Google Search Central — Latest updates", url: "https://developers.google.com/search/updates" },
      ],
      details: [
        "Sur 12 mois de GA4 couvrant 100 sites et plus de 145 millions de sessions, ChatGPT représente 0,62 % du volume de Google Organic et tous les LLM 0,73 %",
        "Sur 55 sites avec conversions suivies, ChatGPT affiche 13,8 % contre 3,02 % pour Google Organic, mais Google concentre 96,5 % des conversions",
        "Dans une expérience sur un concept fictif, 8 outils IA sur 10 le citent sous sept jours ; le protocole ne démontre pas un effet identique pour un produit réel",
        "Google documente le contrôle de partage avec Search pour AI Overviews et AI Mode, en complément de noindex, robots meta, data-nosnippet et X-Robots-Tag",
      ],
      longDescription: "Les données publiées le 23 octobre par Search Engine Journal replacent le GEO dans un ordre de grandeur utile. Sur 12 mois de GA4 couvrant 100 sites et plus de 145 millions de sessions, le trafic ChatGPT représente 0,62 % du volume de Google Organic et tous les LLM 0,73 %. Dans un sous-échantillon de 55 sites où les conversions sont suivies, ChatGPT affiche un taux déclaré de 13,8 % contre 3,02 % pour Google Organic ; Google concentre pourtant 96,5 % des conversions. Ces données ne sont pas transposables telles quelles à TBS Education. Elles rappellent surtout qu’un bon taux sur un faible volume ne justifie pas de déplacer une priorité d’acquisition. Une autre étude montre que les citations IA peuvent intégrer un concept fictif en quelques jours ; elle ne permet pas de conclure sur une marque réelle. Le bon protocole pour TBS Education est un panel fixe de requêtes de marque et de programmes, évalué régulièrement, avec mesure distincte de présence, visites qualifiées et conversions CRM.",
    },
    {
      id: 6,
      code: "UX / CONVERSATION",
      titre: "L’INTERFACE CONVERSATIONNELLE DEVIENT ADAPTATIVE : LA MESURE DOIT DÉPASSER LA SEULE DÉFLEXION",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "OpenAI documente une interface qui compose texte, visuels et contrôles dans la conversation ; Forrester recommande pilotes, A/B tests et métriques d’effort et de résolution.",
      category: "UX",
      sources: [
        { nom: "OpenAI — Intelligent UI in ChatGPT", url: "https://help.openai.com/en/articles/20001598-intelligent-ui-in-chatgpt" },
        { nom: "Forrester — AI-Driven Customer Self-Service", url: "https://www.forrester.com/cx-cast/practitioner-stories-ai-driven-customer-self-service-with-ancestry-and-appfolio/" },
      ],
      details: [
        "Intelligent UI compose dans l’échange du texte, des visuels, des graphiques, des boutons, des formulaires et des expériences interactives",
        "Le mode Simple réduit ces éléments ; aucune donnée d’usage, de satisfaction ou de performance n’est publiée",
        "Forrester recommande une démarche experience-first, des pilotes, des tests A/B, la préparation des contenus et API, puis la mesure de l’effort et des résultats",
        "Aucun cas d’école public de la semaine ne réunit marque, mécanisme, période et KPI vérifiable",
      ],
      longDescription: "Une documentation OpenAI mise à jour dans la fenêtre décrit Intelligent UI : une conversation peut désormais composer du texte, des visuels et des éléments interactifs comme des boutons, formulaires ou graphiques. Un mode Simple réduit ces éléments, sans que la source ne publie d’indicateur d’usage ou de satisfaction. Le 22 octobre, Forrester complète ce signal par une recommandation méthodologique : partir de l’expérience à résoudre, préparer les contenus et les API, limiter le premier périmètre puis comparer avec le parcours existant. Pour TBS Education, un assistant de choix de programme ou de préparation de candidature ne doit pas être mesuré uniquement par les contacts non traités par une équipe humaine. Les indicateurs doivent couvrir l’effort perçu, le taux de résolution, la qualité factuelle, le recours à un conseiller et l’abandon. La première étape est un pilote ou un A/B test avec des critères définis à l’avance. Aucun KPI externe de la semaine ne justifie une promesse de satisfaction, d’inscription ou de retour sur investissement.",
    },
    {
      id: 7,
      code: "IA / PRODUCTION",
      titre: "LA GOUVERNANCE D’UNE IA EN PRODUCTION DÉPEND DES DÉPENDANCES RÉELLES, PAS SEULEMENT DES PREUVES SIGNÉES",
      badge: "IMPORTANT",
      previousBadge: "IMPORTANT",
      description: "Un replay de 714 pipelines publics DVC montre qu’un gate fail-closed n’est robuste que si les dépendances implicites sont couvertes et la provenance contrôlée.",
      category: "IA",
      sources: [{ nom: "arXiv — Reusing Assurance Evidence in AI Pipelines", url: "https://arxiv.org/html/2610.27672v1" }],
      details: [
        "Le replay porte sur 38 083 commits de 714 pipelines DVC publics",
        "La réutilisation selon les dépendances déclarées évite 83,4 % des exécutions, mais réutilise une étape obsolète dans 3,3 % des commits",
        "La fermeture statique des imports réduit ce taux à 0,4 % tout en évitant 81,6 % des exécutions",
        "Le gate signé proposé bloque 8 scénarios de manipulation sur 9, contre 1 pour un gate fondé sur le seul planificateur",
      ],
      longDescription: "Une prépublication du 20 octobre étudie la réutilisation de preuves d’assurance dans 38 083 commits de 714 pipelines publics DVC. Son résultat utile n’est pas un gain de performance à reprendre tel quel, mais une condition de gouvernance : réutiliser une preuve ou une étape n’est fiable que si l’ensemble des dépendances réelles est connu. Sur les dépendances déclarées, la méthode évite 83,4 % des exécutions, mais réutilise une étape obsolète dans 3,3 % des commits. En ajoutant une fermeture statique des imports, ce taux tombe à 0,4 % tout en évitant 81,6 % des exécutions. Le gate fail-closed proposé bloque également 8 scénarios de manipulation sur 9. Pour TBS Education, l’application prudente est organisationnelle : versionner modèles, prompts, données et configurations ; documenter les dépendances ; tracer la provenance ; prévoir une validation humaine et une réexécution après changement. L’étude est un préprint sur des pipelines DVC publics. Elle ne mesure ni des usages marketing, ni des usages pédagogiques, ni un retour sur investissement pour l’école.",
    },
  ],

  bonus: {
    label: "BONUS #10 — ROBOTIQUE",
    titre: "LES ROBOTS MULTIMODAUX PROGRESSENT VITE, MAIS RESTENT LOIN D’UN BUDGET PRATIQUE POUR DES TÂCHES PHYSIQUES COMPLEXES",
    chiffre: "53,9 J",
    statLabel: "TEMPS ESTIMÉ POUR DOUBLER LA PERFORMANCE DANS ROBO DOJO ENTRE JUILLET ET OCTOBRE 2026",
    description: "Une évaluation de neuf modèles multimodaux sur six tâches RoboDojo observe des progrès rapides sur des bras robotiques physiques, avec des compromis persistants entre réussite, vitesse et coût.",
    details: [
      "Le benchmark évalue neuf modèles multimodaux sur six tâches avec des bras robotisés physiques",
      "Les auteurs estiment un doublement de performance en 53,9 jours entre juillet et octobre 2026",
      "Le meilleur taux d’exécution progresse d’un facteur 4,4 et le coût minimal par sous-tâche diminue d’un facteur 6,2 selon le papier",
      "La précision et l’efficacité restent insuffisantes pour un budget pratique sur les tâches évaluées",
    ],
    perspective: "Le Bonus illustre un progrès mesuré dans un benchmark, sans équivaloir à une autonomie généralisée. La qualité et la diversité des données de démonstration restent un sujet de gouvernance majeur.",
    longDescription: "Le Bonus S44 regarde la robotique comme un benchmark, non comme une démonstration d’autonomie imminente. Une prépublication du 21 octobre évalue neuf modèles multimodaux sur six tâches RoboDojo, avec des bras physiques. Les auteurs estiment que la performance a doublé tous les 53,9 jours entre juillet et octobre 2026. Ils rapportent un facteur 4,4 sur le meilleur taux d’exécution et une baisse d’un facteur 6,2 du coût minimal par sous-tâche. Le même papier conclut toutefois que les modèles restent trop imprécis et trop inefficaces pour une enveloppe pratique dans les tâches évaluées. Une seconde prépublication de la semaine propose de tester si la diversité des contributeurs, environnements et objets améliore davantage la généralisation zéro-shot que le simple volume de données. Il s’agit encore d’une hypothèse et d’un protocole. Pour TBS Education, l’enseignement à retenir est méthodologique : un progrès spectaculaire dans un benchmark ne dispense jamais de vérifier le périmètre, le coût, la sécurité et la diversité des données réelles.",
    source: { nom: "arXiv — The Bitter Lesson Comes to Robotics", url: "https://arxiv.org/html/2610.25287", date: "21 octobre 2026" },
  },

  actions: [
    { id: 1, titre: "Lancer un panel fixe de requêtes sur TBS Education et ses programmes, avec capture des réponses IA et de leurs citations", domaine: "GOOGLE AI / GEO", responsable: "SEO + ANALYTICS" },
    { id: 2, titre: "Vérifier la configuration Google-Extended et les objectifs d’inclusion dans AI Overviews et AI Mode avant toute modification", domaine: "SEO / GOUVERNANCE", responsable: "SEO + TECHNIQUE" },
    { id: 3, titre: "Mettre en place un reporting séparant citations IA, sessions attribuées et conversions CRM ; ne pas agréger ces signaux", domaine: "DATA / ANALYTICS", responsable: "DATA + CRM" },
    { id: 4, titre: "Ajouter au cadre de production IA la version des prompts, des données, des modèles, des configurations et une revue humaine avant publication", domaine: "IA / GOUVERNANCE", responsable: "DIGITAL + DPO + DSI" },
    { id: 5, titre: "Définir un pilote conversationnel candidat avec groupe de comparaison, critères d’effort, résolution, exactitude et recours humain", domaine: "UX / CONVERSION", responsable: "UX + ADMISSIONS + DIGITAL" },
  ],

  signauxEmergents: [
    { titre: "Accès agentique par pages et protocoles", description: "Suivre la matérialisation de MCP, UCP et Google-Agent dans les parcours web réellement accessibles.", horizon: "6–12 MOIS" },
    { titre: "Contrôle de partage dans les expériences génératives", description: "Suivre les évolutions de Google-Extended et des contrôles AI Overviews / AI Mode avant de faire évoluer les règles d’exploration.", horizon: "3–6 MOIS" },
    { titre: "UI conversationnelle adaptative", description: "Suivre la capacité à composer des formulaires et contrôles dans la conversation, sans substituer les tests synthétiques aux retours candidats.", horizon: "3–6 MOIS" },
    { titre: "Release gates fail-closed", description: "Suivre les pratiques de provenance, de dépendances explicites et de refus de publication lorsque la preuve est incomplète.", horizon: "6–12 MOIS" },
    { titre: "Robotique multimodale et diversité des données", description: "Suivre les résultats répliqués sur la généralisation et les compromis coût, précision et sécurité.", horizon: "12–18 MOIS" },
  ],

  tendancesPassees: [
    { titre: "Du SEO au contrôle de la distribution générative", description: "La visibilité se pilote désormais sur les pages, les citations, les règles de partage et la qualité de la source institutionnelle." },
    { titre: "De la présence LLM aux preuves de conversion", description: "Les faibles volumes référents des LLM imposent de dissocier présence, trafic, qualité de visite et résultat CRM." },
    { titre: "De l’assistant texte à l’interface composée", description: "Les expériences conversationnelles intègrent des formulaires, contrôles et visuels, avec une exigence accrue de contenu fiable." },
    { titre: "De l’expérimentation IA au contrôle de production", description: "Prompts, données, modèles, configurations et dépendances doivent être traçables avant une publication ou une décision." },
    { titre: "Des benchmarks robots au terrain", description: "Les progrès de benchmark restent à confronter au coût, à la sécurité et aux conditions réelles d’exécution." },
  ],
};
