export const veilleS43 = {
  "week": 43,
  "year": 2026,
  "publicationDate": "21 octobre 2026",
  "updatedDate": "26 octobre 2026",
  "window": "14 au 21 octobre 2026 ; exceptions documentées : Fudan le 8 octobre et Currys le 1er octobre",
  "domainsCount": 8,
  "sourcesCount": 22,
  "criticalCount": 1,
  "importantCount": 6,
  "actionsCount": 7,
  "emergingCount": 5,
  "caseStudiesCount": 1,
  "signalMajeur": {
    "label": "SIGNAL MAJEUR DE LA SEMAINE",
    "title": "GOOGLE REMONTE LES LIENS DANS SES RÉPONSES IA, SANS PREUVE DE TRAFIC OU DE DISPONIBILITÉ EN FRANCE."
  },
  "statDominante": {
    "chiffre": "7×",
    "titre": "UTILISATION DE PREFERRED SOURCES SELON GOOGLE DEPUIS JANVIER",
    "description": "Le 15 octobre, Google indique une utilisation multipliée par plus de sept. Aucun volume absolu, clic, conversion, ni disponibilité détaillée en France n’est publié : ce chiffre décrit un usage déclaré, pas une performance pour TBS Education."
  },
  "syntheseExecutive": "Google rend les liens plus visibles dans AI Mode et AI Overviews, sans publier de clics ni de disponibilité française du test de sites officiels. La visibilité GEO reste à observer sur un panel répété, au niveau du domaine et de l’URL, sans promesse de citation. Le correctif Drupal et la couverture des branches nécessitent une attestation par environnement, tandis que les flux d’identité doivent distinguer first-party et résolveurs tiers. L’accessibilité humaine et la qualification juridique des usages IA précèdent toute automatisation des parcours candidats. Côté innovation marketing, Universal Cart illustre le contrôle des parcours par les plateformes et Currys fournit une référence d’accompagnement humain, avec limites méthodologiques explicites. La mesure demeure transversale : annoter l’incident UTM ChatGPT sans reconstituer l’historique et recouper les alertes Nozzle avant toute décision.",
  "dashboardDetails": {
    "domaines": [
      "Google AI Search",
      "Zero-click / GEO",
      "Schema / données structurées",
      "DXP / CMS",
      "CDP / data",
      "UX",
      "IA en production / gouvernance",
      "Innovation marketing"
    ],
    "sources": [
      "More ways to connect with the web from Search",
      "Measuring the Gap Between ChatGPT Citations and Common GEO Proxies",
      "Introduction to structured data",
      "Latest Google Search Documentation Updates",
      "Introduction to robots.txt",
      "Google common crawlers and fetchers",
      "SA-CORE-2026-014",
      "Core release cycles schedule",
      "HTTP status codes",
      "RFC 9110",
      "Blocking Identity Resolution Infrastructure",
      "Data Manager API — Formatting user-provided data",
      "Synthetic Users vs. Human Respondents: Same Conclusion, Less Variation",
      "Speech 26/2150",
      "Commission starts enforcing AI Act rules and new transparency requirements",
      "FAQ — Code of Practice on transparency of AI-generated content",
      "Universal Cart launch",
      "IPA Effectiveness Awards 2026 Grand Prix",
      "Currys: The Superpower in Store",
      "Signalement du bug UTM ChatGPT",
      "Poisoned Google SERPs",
      "From Public Posts to AI-Search Citations"
    ],
    "critiques": [
      "DXP / CMS : correctif Drupal et couverture des branches à attester par environnement"
    ],
    "importants": [
      "Google AI Search : liens plus visibles, test de sites officiels non qualifié pour la France",
      "Zero-click / GEO : répétitions et lecture de domaine plutôt que promesse de citation",
      "CDP / data : blocage Safari des résolveurs tiers et contrôle des flux",
      "UX : tests humains et accessibilité des parcours candidats",
      "IA en production : journal indépendant, droits minimaux et validation humaine",
      "Innovation marketing : Universal Cart et accompagnement humain mesurable"
    ],
    "actions": [
      "Obtenir une attestation par environnement : version Drupal exécutée, image ou paquet, correctif, heure, recette et responsable.",
      "Tester le plan de maintenance HTTP 503 depuis CDN, proxy ou serveur et archiver la recette.",
      "Désigner un propriétaire et une page institutionnelle de référence pour programme, campus, frais, calendrier et admission.",
      "Constituer un panel GEO français et anglais ; archiver réponse, domaine, URL, session attribuée et issue CRM sans promettre de citation.",
      "Cartographier chaque flux d’identité : finalité, données, destinataire, consentement, durée, retrait et écart Safari.",
      "Ajouter à la recette des parcours candidats les contrôles clavier, lecteur d’écran, HTML sémantique, erreurs et accès au conseiller, avec tests humains.",
      "Ouvrir un registre des usages IA : finalité, données, accès, pouvoir de décision, journal indépendant et validation humaine des actions sensibles."
    ],
    "emergents": [
      "Déploiement réel du test Google de sites officiels et de ses liens enrichis",
      "Répliques indépendantes sur la variabilité des citations IA",
      "Évolution du Digital Omnibus et du texte Meta applicable",
      "Mesure des écarts Safari dans les flux d’identité tiers",
      "Maturité des parcours agents avec validation humaine"
    ]
  },
  "domaines": [
    {
      "id": 1,
      "code": "GOOGLE AI",
      "titre": "GOOGLE REMONTE LES LIENS DANS AI MODE ET TESTE DES DESTINATIONS OFFICIELLES",
      "category": "GOOGLE",
      "badge": "IMPORTANT",
      "previousBadge": "IMPORTANT",
      "editorialStatus": "ACTUALITÉ",
      "description": "Le 15 octobre, Google annonce des liens plus fréquents et plus hauts dans AI Mode et AI Overviews, ainsi qu’un test pour une ou deux destinations officielles.",
      "sources": [
        {
          "nom": "Google — More ways to connect with the web from Search",
          "url": "https://blog.google/products-and-platforms/products/search/updates-ai-mode-overviews-explore-web/",
          "date": "15 octobre 2026"
        }
      ],
      "details": [
        "Google annonce des liens intégrés plus fréquents et plus hauts dans AI Mode et AI Overviews.",
        "Un test propose une ou deux destinations officielles pour certaines tâches, sans disponibilité détaillée en France.",
        "Google déclare que Preferred Sources est utilisé plus de sept fois plus qu’en janvier, sans base absolue, clic ni conversion.",
        "Les carrousels d’actualité, liens de fin de réponse et profils d’éditeurs complètent l’annonce, sans garantie de visibilité pour un établissement."
      ],
      "longDescription": "Le 15 octobre, Google a annoncé plusieurs évolutions destinées à reconnecter ses réponses IA au Web : des liens intégrés plus fréquents et placés plus haut dans AI Mode et AI Overviews, des liens illustrés en fin de réponse et un test qui met en avant une ou deux destinations officielles lorsqu’une tâche dépend d’une source institutionnelle. Google indique aussi que Preferred Sources est utilisé plus de sept fois plus qu’en janvier. Cette formulation ne donne ni volume de départ, ni taux de clic, ni conversion, ni disponibilité détaillée en France. Elle ne permet donc pas de conclure que TBS Education bénéficiera d’une priorité dans les réponses. L’angle utile pour TBS Education est la netteté des sources : une page institutionnelle, maintenue et sans doublon pour chaque information décisive — programme, frais, campus, calendrier et admission. Il faut conserver un panel de requêtes et archiver la réponse, le domaine cité et la destination. Le test de sites officiels reste à surveiller comme un test, non comme une garantie de trafic ou une raison de réarchitecturer les parcours."
    },
    {
      "id": 2,
      "code": "ZERO-CLICK / GEO",
      "titre": "LES CITATIONS CHATGPT VARIENT : LE DOMAINE EST UN PROXY MOINS FRAGILE, PAS UN INDICATEUR FIABLE PAR PRINCIPE",
      "category": "SEO",
      "badge": "IMPORTANT",
      "previousBadge": "IMPORTANT",
      "editorialStatus": "SUIVI",
      "description": "Un préprint compare les citations de ChatGPT à des proxys Google et API ; il justifie des répétitions et un suivi du domaine, sans prouver une visite ou une candidature.",
      "sources": [
        {
          "nom": "arXiv — Measuring the Gap Between ChatGPT Citations and Common GEO Proxies",
          "url": "https://arxiv.org/html/2610.15382v1",
          "date": "date de publication non indiquée dans la source ; repris le 18 octobre 2026"
        }
      ],
      "details": [
        "Le préprint observe des réponses entre mars et juillet 2026, avec répétitions des requêtes dans plusieurs versions de ChatGPT.",
        "Les proxys Google et API ne reproduisent qu’une partie des citations observées dans l’interface ChatGPT.",
        "Le domaine agrégé est moins fragile qu’une URL isolée ; il ne devient pas fiable sans panel, répétitions et traces de session.",
        "Le document est un préprint : il ne mesure ni admissions, ni marché français, ni outils GEO commerciaux."
      ],
      "longDescription": "Le préprint primaire conservé pour la S43 compare les citations observées dans ChatGPT à des substituts courants, notamment des résultats Google et une recherche via API. Son terrain d’observation couvre mars à juillet 2026 et met en évidence une forte variabilité des citations selon les passages et les modèles. La date de publication n’est pas inventée ici ; le travail a été repris le 18 octobre dans la fenêtre éditoriale. Pour TBS Education, la conséquence est méthodologique : une citation d’URL isolée ne doit pas devenir un KPI. Le suivi au niveau du domaine est moins fragile, mais il reste un proxy. Il doit être associé à un panel stable de requêtes françaises et anglaises, à plusieurs répétitions, à la capture de la réponse et à une observation distincte des sessions attribuées puis des demandes CRM. Le préprint ne prouve pas qu’un gabarit, un balisage ou une page sera davantage cité ; il ne mesure pas non plus les programmes français. La bonne décision est de demander aux prestataires GEO leurs sources, leurs répétitions et leurs limites plutôt que de promettre citation, visite ou candidature."
    },
    {
      "id": 3,
      "code": "SCHEMA",
      "titre": "JSON-LD, ROBOTS ET PRÉFÉRENCES D’AGENTS : UN SUIVI DE FOND À GOUVERNER, PAS UNE NOUVEAUTÉ À SURVENDRE",
      "category": "DATA",
      "badge": "À SURVEILLER",
      "previousBadge": null,
      "editorialStatus": "FOND",
      "description": "Les règles Google rappellent qu’un JSON-LD fidèle rend une page éligible sans garantir son affichage, et que robots.txt organise le crawl coopératif sans protéger un contenu privé.",
      "sources": [
        {
          "nom": "Google Search Central — Introduction aux données structurées",
          "url": "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
          "date": "consulté le 26 octobre 2026"
        },
        {
          "nom": "Google Search Central — Journal des mises à jour",
          "url": "https://developers.google.com/search/updates",
          "date": "consulté le 26 octobre 2026"
        },
        {
          "nom": "Google Search Central — Introduction à robots.txt",
          "url": "https://developers.google.com/search/docs/crawling-indexing/robots/intro",
          "date": "consulté le 26 octobre 2026"
        },
        {
          "nom": "Google — Common crawlers and fetchers",
          "url": "https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers",
          "date": "consulté le 26 octobre 2026"
        }
      ],
      "details": [
        "Le JSON-LD doit refléter un contenu visible, exact, gouverné et maintenu ; l’éligibilité n’assure ni résultat enrichi ni classement.",
        "La correction S43 retire une erreur initiale : des entrées Google de 2023 ne sont pas une annonce d’octobre 2026.",
        "robots.txt règle le crawl coopératif ; le privé relève de l’authentification et le noindex doit rester accessible au crawl.",
        "Google-Extended concerne des usages Gemini/grounding distincts du classement Search ; une préférence par agent ne remplace pas une politique de contenu."
      ],
      "longDescription": "Cette carte est un suivi de fond, non une annonce 2026. Google rappelle que les données structurées sont un vocabulaire pour décrire un contenu et que ses propres règles déterminent les résultats enrichis. Un JSON-LD peut rendre une page éligible ; il ne garantit ni affichage, ni classement, ni citation dans une réponse IA. Pour TBS Education, le chantier utile est un référentiel gouverné : propriétaire, date de révision et source de vérité pour les programmes, campus, frais, calendrier et admission. Le balisage doit reproduire ces données visibles et être contrôlé avec les outils Google appropriés. La correction qualité est également explicite : les entrées Google qui avaient été datées à tort d’octobre 2026 étaient des modifications de 2023 ; elles ne sont pas publiées comme actualité. Côté accès, robots.txt pilote un crawl coopératif, pas la confidentialité ou l’indexation à lui seul. Le contenu privé doit être authentifié. Google-Extended se distingue du classement Search. La portée et la date d’effet d’une éventuelle clause Meta restent non confirmées faute de notice primaire applicable ; elles ne justifient aucune obligation présentée comme acquise."
    },
    {
      "id": 4,
      "code": "DXP / CMS",
      "titre": "DRUPAL : CORRECTIF FIELD UI ET COUVERTURE DES BRANCHES À ATTESTER",
      "category": "ARCHI",
      "badge": "CRITIQUE",
      "previousBadge": "À SURVEILLER",
      "editorialStatus": "ACTUALITÉ",
      "description": "L’avis Drupal du 14 octobre appelle une vérification des versions, modules et développements spécifiques, ainsi qu’un plan de maintien sur une branche couverte.",
      "sources": [
        {
          "nom": "Drupal — SA-CORE-2026-014",
          "url": "https://www.drupal.org/sa-core-2026-014",
          "date": "14 octobre 2026"
        },
        {
          "nom": "Drupal — Core release cycles schedule",
          "url": "https://www.drupal.org/about/core/policies/core-release-cycles/schedule",
          "date": "consulté le 26 octobre 2026"
        },
        {
          "nom": "Google — HTTP status codes",
          "url": "https://developers.google.com/crawling/docs/troubleshooting/http-status-codes",
          "date": "consulté le 26 octobre 2026"
        },
        {
          "nom": "HTTPWG — RFC 9110",
          "url": "https://httpwg.org/specs/rfc9110.html",
          "date": "consulté le 26 octobre 2026"
        }
      ],
      "details": [
        "Drupal publie SA-CORE-2026-014 le 14 octobre pour CVE-2026-108097 dans Field UI ; le cœur seul ne suffit pas à établir le chemin exploitable",
        "Les correctifs historiques sont 11.4.10, 11.3.19 et 10.6.19 ; vérifier la version réellement exécutée et les modules ou développements qui peuvent l’exposer",
        "La fin de couverture des branches 11.3.x et 10.6.x en décembre impose un plan de migration compatible, pas le maintien d’une version seulement corrigée ponctuellement",
        "Exiger version, paquet, correctif, recette et responsable ; un mode maintenance HTTP 503 relève du CDN, du proxy ou du serveur, pas du DNS"
      ],
      "longDescription": "Le 14 octobre, Drupal publie SA-CORE-2026-014 pour CVE-2026-108097 dans Field UI. Les correctifs historiques annoncés sont 11.4.10, 11.3.19 et 10.6.19. La présence de Drupal ne suffit toutefois pas à déduire une exposition : le chemin d’exploitation dépend notamment des modules contribués et du code spécifique ; le cœur seul ne démontre pas ce chemin. La fin de couverture des branches 11.3.x et 10.6.x en décembre appelle en parallèle une trajectoire de migration. Pour TBS Education, demander à l’intégrateur et à l’hébergeur la version effectivement exécutée par environnement, les modules installés, les développements concernés, le paquet ou l’image déployé, le correctif et sa recette. Le contrat de maintenance doit préciser un responsable, une procédure de rollback et la gestion des alertes critiques. Préparer un mode maintenance retournant HTTP 503 via CDN, proxy ou serveur reste une mesure de continuité ; le DNS ne produit pas de réponse HTTP. Ce contrôle ne justifie pas seul une refonte headless ou composable : il relève d’abord de la sécurité et du maintien en condition opérationnelle."
    },
    {
      "id": 5,
      "code": "CDP / DATA",
      "titre": "SAFARI : DISTINGUER DONNÉE FIRST-PARTY ET RÉSOLVEURS D’IDENTITÉ TIERS",
      "category": "CDP",
      "badge": "IMPORTANT",
      "previousBadge": "À SURVEILLER",
      "editorialStatus": "ACTUALITÉ",
      "description": "Safari/WebKit 27 bloque des résolveurs tiers fondés sur l’e-mail cross-site. La personnalisation first-party n’est pas visée, mais un flux CRM/CDP n’est pas exempt par son seul nom.",
      "sources": [
        {
          "nom": "WebKit — Blocking Identity Resolution Infrastructure",
          "url": "https://webkit.org/blog/18438/blocking-identity-resolution-infrastructure/",
          "date": "19 octobre 2026"
        },
        {
          "nom": "Google Data Manager API — format des données utilisateur",
          "url": "https://developers.google.com/data-manager/api/devguides/concepts/formatting",
          "date": "consulté le 26 octobre 2026"
        }
      ],
      "details": [
        "WebKit annonce le 19 octobre le blocage de résolveurs tiers qui transforment l’e-mail saisi en identifiant intersites",
        "La personnalisation first-party n’est pas visée ; un CRM/CDP qui appelle un graphe externe doit néanmoins être analysé flux par flux",
        "La documentation Google Data Manager de fond maintient le hachage avant chiffrement ; aucune nouvelle obligation technique ne se déduit d’une annonce non primaire",
        "Cartographier finalité, données, destinataires, consentement, durée et retrait ; le server-side ne contourne ni RGPD ni ePrivacy"
      ],
      "longDescription": "Le 19 octobre, WebKit annonce que Safari/WebKit 27 bloque des infrastructures tierces de résolution d’identité fondées sur l’e-mail cross-site. La personnalisation first-party n’est pas le mécanisme visé. Cette distinction ne signifie pas que tout outil CRM ou CDP serait exempt : ce sont les appels, destinataires et usages effectifs qui déterminent le contrôle à mener. Pour TBS Education, inventorier les formulaires et la gestion des balises, puis identifier les transferts vers un graphe d’identité externe. Une comparaison Safari/autres navigateurs peut signaler une rupture d’attribution, sans permettre d’imputer chaque écart au même mécanisme. Le suivi de fond de Google Data Manager maintient le hachage avant chiffrement ; une annonce future sans notice primaire applicable ne doit déclencher aucune modification anticipée. La décision opérationnelle consiste à documenter pour chaque flux la finalité, les données, destinataires, consentement, durée de conservation et retrait. Le server-side peut modifier le trajet technique, mais ne remplace pas l’information, la base juridique ni l’analyse DPO. Prioriser des données propres, consenties et gouvernées demeure une orientation de projet, pas une exemption générale au droit."
    },
    {
      "id": 6,
      "code": "UX",
      "titre": "L’UX CONVERSATIONNELLE RESTE UN SUJET HUMAIN : LES UTILISATEURS SYNTHÉTIQUES PRÉPARENT UN TEST, ILS NE LE REMPLACENT PAS",
      "category": "UX",
      "badge": "IMPORTANT",
      "previousBadge": "IMPORTANT",
      "editorialStatus": "ACTUALITÉ",
      "description": "NN/g observe une conclusion synthétique proche sur une question, mais une diversité nettement moindre que chez des répondants humains : l’accessibilité et la recette réelle restent prioritaires.",
      "sources": [
        {
          "nom": "Nielsen Norman Group — Synthetic Users vs. Human Respondents",
          "url": "https://www.nngroup.com/articles/synthetic-users-vs-human-respondents/",
          "date": "16 octobre 2026"
        }
      ],
      "details": [
        "NN/g compare 120 répondants synthétiques et 604 répondants humains sur une question de recherche.",
        "La conclusion générale est proche, mais la diversité des réponses est beaucoup plus faible chez les synthétiques.",
        "Aucune autonomie de remplissage ou de soumission par un agent n’est publiée comme fait établi dans cette édition.",
        "La recette doit couvrir clavier, lecteur d’écran, HTML sémantique, libellés, erreurs, stabilité des étapes et accès au conseiller."
      ],
      "longDescription": "L’étude NN/g du 16 octobre compare des répondants synthétiques à des répondants humains. Elle trouve une conclusion générale proche pour la question étudiée, mais une diversité de réponses fortement réduite du côté synthétique. Ce résultat ne valide pas le remplacement d’une recherche candidat par des personas IA. Il fournit seulement un usage prudent : préparer une hypothèse, un guide ou une première grille de test avant de confronter les parcours à des personnes réelles. Pour TBS Education, l’angle est d’abord l’accessibilité et la qualité de service : un candidat doit pouvoir comprendre un programme, ses frais, les dates et les erreurs de formulaire au clavier et avec un lecteur d’écran. Le HTML sémantique, les libellés explicites, les messages d’erreur et l’accès à un conseiller doivent être testés avec des utilisateurs, puis suivis par des indicateurs d’exactitude, effort, abandon et résolution. Cette carte n’affirme pas qu’un agent peut soumettre une candidature de manière autonome : une telle capacité ou une validation universelle avant soumission ne sont pas prouvées dans les sources retenues. Les tests agents autorisés peuvent compléter la recette, jamais remplacer l’évaluation humaine."
    },
    {
      "id": 7,
      "code": "IA / GOV",
      "titre": "IA EN PRODUCTION : LE REGISTRE D’USAGE ET LES CONTRÔLES INDÉPENDANTS PRIMENT SUR LES RACCORCIS RÉGLEMENTAIRES",
      "category": "IA",
      "badge": "IMPORTANT",
      "previousBadge": "IMPORTANT",
      "editorialStatus": "ACTUALITÉ",
      "description": "Le discours de la Commission du 14 octobre décrit des demandes d’information sur sécurité, évaluation et suivi, sans entreprises nommées ni lien causal démontré avec des incidents.",
      "sources": [
        {
          "nom": "Commission européenne — discours SPEECH/26/2150",
          "url": "https://ec.europa.eu/commission/presscorner/detail/en/speech_26_2150",
          "date": "14 octobre 2026"
        },
        {
          "nom": "Commission européenne — application des règles de transparence IA",
          "url": "https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august",
          "date": "2 août 2026 ; consulté le 26 octobre 2026"
        },
        {
          "nom": "Commission européenne — FAQ du code de bonnes pratiques de transparence",
          "url": "https://digital-strategy.ec.europa.eu/en/faqs/code-practice-transparency-ai-generated-content",
          "date": "consulté le 26 octobre 2026"
        }
      ],
      "details": [
        "La Commission confirme le 14 octobre des demandes d’information du Bureau de l’IA portant sur sécurité, évaluation et suivi",
        "Le discours ne nomme pas d’entreprises et n’établit pas de lien causal avec un incident d’agent",
        "Rappel réglementaire : l’information d’une interaction avec une IA s’applique depuis le 2 août ; le 2 décembre n’est pas une échéance générale pour tous les chatbots",
        "Qualifier chaque usage : finalité, fournisseur, données, permissions, effet sur une décision et contrôle humain ; examiner les admissions avec juridique et DPO"
      ],
      "longDescription": "Le discours de la Commission européenne du 14 octobre confirme des demandes d’information du Bureau de l’IA sur la sécurité, l’évaluation et le suivi des usages. Il ne nomme pas d’entreprises et ne permet pas d’attribuer cette démarche à des incidents précis. Cette limite évite de transformer une séquence institutionnelle en récit causal non démontré. Le suivi réglementaire rappelle aussi que l’information d’une interaction avec une IA est applicable depuis le 2 août 2026 ; le 2 décembre n’est pas une échéance générale de chatbot. Pour TBS Education, tenir un registre de chaque usage réellement déployé : finalité, fournisseur, données, destinataires, permissions, conservation, capacité d’action et responsable. La qualification des outils d’admission dépend de leur finalité et de leur influence effective sur une décision, et doit être examinée avec le juridique et le DPO. Les droits minimaux, la journalisation indépendante et une validation humaine avant une action irréversible sont des exigences de contrôle à contractualiser, pas des garanties absolues de conformité ou de fiabilité. Un usage rédactionnel, un assistant d’information et un outil de sélection ne présentent pas les mêmes risques ni les mêmes obligations."
    },
    {
      "id": 8,
      "code": "INNOV MKT",
      "titre": "UNIVERSAL CART ET CURRYS : PARCOURS DE PLATEFORME ET VALEUR DU CONSEIL HUMAIN",
      "category": "INNOV MKT",
      "badge": "IMPORTANT",
      "previousBadge": "IMPORTANT",
      "editorialStatus": "ACTUALITÉ",
      "description": "Universal Cart, lancé aux États-Unis le 15 octobre, illustre la conversion retenue dans les plateformes. Le cas Currys apporte une référence d’accompagnement humain, avec résultats IPA estimés et méthode complète inaccessible.",
      "sources": [
        {
          "nom": "Google — Universal Cart launch",
          "url": "https://blog.google/products-and-platforms/products/shopping/universal-cart-launch/",
          "date": "15 octobre 2026"
        },
        {
          "nom": "IPA — Effectiveness Awards 2026 Grand Prix",
          "url": "https://ipa.co.uk/news/effectiveness-awards-grand-prix",
          "date": "1er octobre 2026"
        },
        {
          "nom": "IPA — Currys: The Superpower in Store",
          "url": "https://ipa.co.uk/knowledge/case-studies/currys-the-superpower-in-store/",
          "date": "consulté le 26 octobre 2026 ; date de publication non confirmée"
        }
      ],
      "details": [
        "Universal Cart est lancé aux États-Unis le 15 octobre ; il relève du commerce et ne décrit pas un parcours d’admission",
        "Currys est retenu comme cas historique publié par l’IPA le 1er octobre ; agences AMV BBDO et Spark Foundry",
        "L’IPA publie 500 M£ incrémentaux estimés sur deux ans, +1,1 point de part de marché et +44 % de ROI long terme ; méthode complète et dates précises non accessibles",
        "TBS Education peut tester la valeur du conseil humain avec issue CRM et groupe ou période de contrôle, sans extrapoler les chiffres du distributeur"
      ],
      "longDescription": "Google lance Universal Cart aux États-Unis le 15 octobre, avec un panier partagé entre ses interfaces. Le signal montre qu’une plateforme peut retenir davantage de parcours dans son environnement ; il ne prouve ni un effet sur les admissions ni une disponibilité adaptée à TBS Education. Le cas Currys, publié par l’IPA et conservé dans l’exception de trente jours, est plus utile pour l’apprentissage marketing. Les agences AMV BBDO et Spark Foundry sont citées ; l’IPA attribue à la campagne 500 M£ de chiffre d’affaires incrémental estimé sur deux ans, +1,1 point de part de marché et +44 % de ROI long terme. La méthode complète demeure payante et n’a pas été consultée ; les dates précises de la période ne sont pas disponibles. Ces résultats ne deviennent donc ni un benchmark ni une promesse pour l’école. La transposition porte sur la valeur mesurable de l’accompagnement humain : conseil programme, journées portes ouvertes et contacts avec les équipes d’admission. Définir un parcours, une issue CRM et une comparaison avant le test permet de distinguer engagement, conversion et valeur marginale."
    }
  ],
  "measurement": {
    "id": 9,
    "code": "MESURE",
    "titre": "MESURE ET ATTRIBUTION : ANNOTER L’INCIDENT CHATGPT ET CONTRÔLER LES OUTILS AVANT D’AGIR",
    "category": "MESURE",
    "badge": "IMPORTANT",
    "previousBadge": "CRITIQUE",
    "editorialStatus": "SUIVI",
    "description": "Entre le 8 et le 15 octobre, des sessions ChatGPT ont pu être classées en Direct ; le phénomène Nozzle reste une alerte de collecte à vérifier, sans pseudo-tendance ni reconstitution historique.",
    "sources": [
      {
        "nom": "Cedric Huesler — signalement du bug UTM ChatGPT",
        "url": "https://www.linkedin.com/posts/cedrichuesler_relieved-it-was-a-bug-chatgpt-is-tagging-share-7516558430854152192-vTAO/",
        "date": "incident du 8 au 15 octobre 2026 ; consulté le 26 octobre 2026"
      },
      {
        "nom": "Nozzle — Poisoned Google SERPs",
        "url": "https://nozzle.io/research/poisoned-google-serps/",
        "date": "consulté le 26 octobre 2026"
      }
    ],
    "details": [
      "Du 8 au 15 octobre, des sessions provenant de ChatGPT sans UTM ni referrer ont pu être classées Direct.",
      "Le correctif annoncé n’autorise pas à reconstituer ou réécrire l’historique d’attribution de cette période.",
      "Nozzle alerte sur des résultats de collecte automatisée ; cette alerte ne décrit pas nécessairement ce qu’un candidat a vu.",
      "Le tableau de bord sépare présence/citation, session et qualité d’attribution, demande CRM puis résultat aval ; Search Console contrôle toute alerte de tracker."
    ],
    "longDescription": "La mesure est volontairement hors des huit domaines : elle traverse la visibilité IA, les campagnes et le CRM. Entre le 8 et le 15 octobre, des liens ChatGPT ont pu perdre leurs paramètres UTM et leur referrer, faisant classer certaines visites en Direct. L’annotation de la période est utile ; une correction a posteriori qui prétendrait reconstituer les sessions ne l’est pas. L’alerte Nozzle sur les collectes de positions invite également à contrôler les données de rang avant toute décision. Elle n’établit pas ce qu’un candidat a vu et cette édition ne reprend ni série pseudo-évolutive ni statistique de benchmark non primaire. Pour TBS Education, le reporting doit séparer quatre couches : présence ou citation observée, session avec qualité du marquage, demande CRM et résultat aval. Toute action issue d’un rank tracker doit être confrontée à Search Console et au comportement réel du site. Les URL de ce registre documentent un incident et une alerte ; elles ne constituent pas deux preuves indépendantes d’un effet commercial. Le principe est de conserver les limites dans le tableau de bord plutôt que de transformer une anomalie de mesure en conclusion sur le SEO ou le GEO."
  },
  "bonus": {
    "label": "BONUS #10 — ALERTE DE PROVENANCE",
    "titre": "FUDAN : UN CONCEPT INVENTÉ EST CITÉ PAR HUIT OUTILS SUR DIX DANS UN PRÉPRINT",
    "chiffre": "8 / 10",
    "statLabel": "OUTILS DE RECHERCHE IA ONT CITÉ UN CONCEPT INVENTÉ DANS LE PROTOCOLE",
    "description": "Préprint du 8 octobre, retenu comme exception historique S43 : une alerte sur la provenance des réponses IA, jamais une méthode de manipulation à reproduire.",
    "details": [
      "Les auteurs ont identifié des sites fréquemment cités puis y ont placé un concept fabriqué dans un protocole contrôlé.",
      "Le préprint indique que huit outils sur dix ont cité ce concept en sept jours dans l’expérience.",
      "Un produit inventé n’a pas été cité dans le protocole, ce qui limite toute généralisation commerciale.",
      "Le résultat est un préprint du 8 octobre, distinct des huit domaines et non recompté comme une seconde preuve GEO."
    ],
    "perspective": "TBS Education doit surveiller les réponses sur l’établissement et ses programmes, documenter les erreurs et renforcer ses sources institutionnelles plutôt que chercher à semer du contenu.",
    "longDescription": "Le bonus S43 est une alerte de provenance, non une recette GEO. Dans un préprint daté du 8 octobre, des chercheurs de Fudan décrivent une expérience où un concept fabriqué est publié sur des sites identifiés comme souvent cités, puis interrogé auprès de dix outils de recherche IA. Huit outils sur dix le citent en sept jours dans le protocole présenté. Le même travail indique qu’un produit inventé n’a pas été cité : ce résultat borne fortement toute extrapolation vers un achat, une candidature ou une manipulation reproductible. L’exception de date est conservée : Fudan appartient à la S43 comme fait historique, pas à la S44 et pas au compteur des huit catégories. Pour TBS Education, la réponse défensive est de contrôler périodiquement ce que les assistants affirment sur l’établissement, ses programmes et ses conditions d’admission, puis de documenter les erreurs et les sources institutionnelles correctes. Le préprint n’a pas valeur de méthode opérationnelle pour augmenter une visibilité. Il doit encourager la vérification des réponses, pas le semis de contenus artificiels.",
    "source": {
      "nom": "arXiv — From Public Posts to AI-Search Citations",
      "url": "https://arxiv.org/html/2610.11932v1",
      "date": "8 octobre 2026"
    }
  },
  "actions": [
    {
      "id": 1,
      "titre": "Obtenir une attestation par environnement : version Drupal exécutée, image ou paquet, correctif, heure, recette et responsable.",
      "domaine": "DXP / CMS",
      "responsable": "DSI + intégrateur + hébergeur",
      "echeance": "Cette semaine",
      "sources": [
        "https://www.drupal.org/sa-core-2026-014"
      ]
    },
    {
      "id": 2,
      "titre": "Tester le plan de maintenance HTTP 503 depuis CDN, proxy ou serveur et archiver la recette.",
      "domaine": "DXP / CMS",
      "responsable": "DSI + hébergeur",
      "echeance": "Prochaine recette",
      "sources": [
        "https://developers.google.com/crawling/docs/troubleshooting/http-status-codes",
        "https://httpwg.org/specs/rfc9110.html"
      ]
    },
    {
      "id": 3,
      "titre": "Désigner un propriétaire et une page institutionnelle de référence pour programme, campus, frais, calendrier et admission.",
      "domaine": "Google AI",
      "responsable": "Direction marketing + direction des programmes",
      "echeance": "Sous 30 jours",
      "sources": [
        "https://blog.google/products-and-platforms/products/search/updates-ai-mode-overviews-explore-web/"
      ]
    },
    {
      "id": 4,
      "titre": "Constituer un panel GEO français et anglais ; archiver réponse, domaine, URL, session attribuée et issue CRM sans promettre de citation.",
      "domaine": "Zero-click / GEO",
      "responsable": "SEO + data/analytics",
      "echeance": "Sous 30 jours",
      "sources": [
        "https://arxiv.org/html/2610.15382v1"
      ]
    },
    {
      "id": 5,
      "titre": "Cartographier chaque flux d’identité : finalité, données, destinataire, consentement, durée, retrait et écart Safari.",
      "domaine": "CDP / data",
      "responsable": "DPO + data/MarTech",
      "echeance": "Sous 45 jours",
      "sources": [
        "https://webkit.org/blog/18438/blocking-identity-resolution-infrastructure/"
      ]
    },
    {
      "id": 6,
      "titre": "Ajouter à la recette des parcours candidats les contrôles clavier, lecteur d’écran, HTML sémantique, erreurs et accès au conseiller, avec tests humains.",
      "domaine": "UX",
      "responsable": "UX + accessibilité + admissions",
      "echeance": "Prochaine recette",
      "sources": [
        "https://www.nngroup.com/articles/synthetic-users-vs-human-respondents/"
      ]
    },
    {
      "id": 7,
      "titre": "Ouvrir un registre des usages IA : finalité, données, accès, pouvoir de décision, journal indépendant et validation humaine des actions sensibles.",
      "domaine": "IA / gouvernance",
      "responsable": "Direction digitale + DPO + juridique",
      "echeance": "Sous 30 jours",
      "sources": [
        "https://ec.europa.eu/commission/presscorner/detail/en/speech_26_2150"
      ]
    }
  ],
  "signauxEmergents": [
    {
      "titre": "Déploiement du test Google de sites officiels",
      "description": "Vérifier pays, tâches couvertes, domaines et clics avant toute hypothèse de priorité pour TBS Education.",
      "horizon": "3–6 MOIS"
    },
    {
      "titre": "Qualité de mesure des citations IA",
      "description": "Suivre les réplications indépendantes, les répétitions par prompt et la relation documentée aux sessions.",
      "horizon": "3–6 MOIS"
    },
    {
      "titre": "Digital Omnibus et conditions de plateforme",
      "description": "Distinguer mandat, texte primaire applicable et droit effectivement en vigueur avant toute modification de CMP.",
      "horizon": "3–6 MOIS"
    },
    {
      "titre": "Écarts Safari dans les flux d’identité",
      "description": "Mesurer l’attribution par navigateur et documenter les tiers appelés depuis les parcours.",
      "horizon": "3–6 MOIS"
    },
    {
      "titre": "Parcours agents sous contrôle humain",
      "description": "Réexaminer seulement lorsqu’un usage candidat réel et une validation des actions sont démontrés.",
      "horizon": "6–12 MOIS"
    }
  ],
  "tendancesPassees": [
    {
      "date": "2 août 2026",
      "titre": "Transparence de l’interaction IA",
      "description": "Décision maintenue : documenter l’information donnée à l’utilisateur ; la source Commission a été reconsultée le 26 octobre.",
      "statut": "HISTORIQUE REVALIDÉ",
      "source": "https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august"
    },
    {
      "date": "8 octobre 2026",
      "titre": "Alerte Fudan sur la provenance",
      "description": "Décision maintenue : surveiller les réponses IA et ne pas reproduire le protocole de contenu fabriqué.",
      "statut": "HISTORIQUE REVALIDÉ",
      "source": "https://arxiv.org/html/2610.11932v1"
    },
    {
      "date": "14 octobre 2026",
      "titre": "Correctifs Drupal",
      "description": "Décision maintenue : attester les versions, correctifs et recettes par environnement plutôt que déduire un risque de marque CMS.",
      "statut": "HISTORIQUE REVALIDÉ",
      "source": "https://www.drupal.org/sa-core-2026-014"
    },
    {
      "date": "15 octobre 2026",
      "titre": "Liens Google dans les réponses IA",
      "description": "Décision maintenue : gouverner les pages institutionnelles sans promettre un encart officiel ni un trafic France.",
      "statut": "HISTORIQUE REVALIDÉ",
      "source": "https://blog.google/products-and-platforms/products/search/updates-ai-mode-overviews-explore-web/"
    },
    {
      "titre": "Mémoire — cas Currys du 1er octobre",
      "description": "Conserver la mesure de la valeur du conseil humain, sans reprendre les résultats du distributeur comme objectif de recrutement."
    }
  ]
};
