import registry from "../../../content/2026-W48/sources.json";

const sourceRegistry = registry.sources.map((source) => ({
  id: source.id,
  nom: `${source.publisher} — ${source.title}`,
  url: source.url,
  date: new Intl.DateTimeFormat("fr-FR", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(`${source.date}T00:00:00Z`)),
}));
const selectSources = (...ids: number[]) => sourceRegistry.filter((source) => ids.includes(source.id));

export const veilleS48 = {
  "week": 48,
  "year": 2026,
  "publicationDate": "24 novembre 2026",
  "collectionWindow": "17 au 24 novembre 2026 inclus — rattrapage explicite du 16 novembre",
  "shareDescription": "Pour une école : correctifs web prioritaires, contexte des réponses IA, pixels de courriel et agents de code — une S48 consolidée et sourcée.",
  "domainsCount": 9,
  "domainsTotal": 9,
  "sourcesCount": registry.sources.length,
  "criticalCount": 1,
  "importantCount": 6,
  "actionsCount": 8,
  "emergingCount": 6,
  "caseStudiesCount": 0,
  "signalMajeur": {
    "label": "SIGNAL MAJEUR DE LA SEMAINE",
    "title": "CORRECTIFS WEB — CONFIRMER LA REMÉDIATION ET LA RECETTE"
  },
  "statDominante": {
    "chiffre": "18–19 NOVEMBRE",
    "titre": "DATES PUBLIÉES DES CORRECTIFS DRUPAL, WORDPRESS ET PHP",
    "description": "Drupal et WordPress publient le 18 novembre 2026, PHP le 19. L’avis Drupal révisé le 21 signale une exploitation depuis le 19 à 19 h UTC. Ce sont des dates officielles, non un délai calculé ni un nombre de victimes ; l’applicabilité et la recette doivent être confirmées en privé pour une école.",
    "source": selectSources(8)[0]
  },
  "syntheseExecutive": "Les correctifs web publiés les 18 et 19 novembre et l’exploitation signalée dans l’avis Drupal rendent prioritaire une preuve de remédiation, sans attribuer un environnement à une école. Dans Search, le contexte personnel et les fils temporaires changent les conditions d’observation, tandis que le préavis de décembre ne constitue pas un déploiement. Les panels de citations et de position des liens restent limités à leurs méthodes et ne prédisent pas les candidatures. En data, le bilan CNIL sur les pixels ne remet pas les délais à zéro ; les nouveaux filtres de recherche et les objectifs rendez-vous demandent des définitions rigoureuses. Côté IA, le déploiement Mac limité, les bêtas d’approbation de code et la résolution centrée sur les mineurs ne justifient ni adoption générale ni extension juridique au supérieur. En marketing, recetter les exclusions et vérifier le marché précèdent toute migration ou test d’inventaire.",
  "dashboardDetails": {
    "domaines": [
      "Moteurs de réponse IA",
      "Zero-click et GEO",
      "Données structurées et accès des robots",
      "CMS et socle technique",
      "Data first-party, consentement, navigateurs",
      "Mesure et attribution",
      "UX conversationnelle et web agentique",
      "IA en production et gouvernance",
      "Innovation marketing et plateformes publicitaires"
    ],
    "sources": sourceRegistry.map((source) => source.nom),
    "critiques": [
      "CMS et socle technique — CORRECTIFS DES 18–19 NOVEMBRE : CONFIRMER L’APPLICATION ET LA RECETTE"
    ],
    "importants": [
      "Moteurs de réponse IA — AI MODE : CONTRÔLER LE CONTEXTE, SANS CONFONDRE PRÉAVIS ET DÉPLOIEMENT",
      "Zero-click et GEO — CITATIONS SOCIALES ET LIENS : DEUX OBSERVATIONS, PAS UNE RECETTE DE CONVERSION",
      "Data first-party, consentement, navigateurs — PIXELS DE COURRIEL : UN BILAN CNIL, PAS UN NOUVEAU DÉLAI DE CONFORMITÉ",
      "Mesure et attribution — SEARCH ANALYTICS ET RENDEZ-VOUS : QUALIFIER LA DONNÉE AVANT D’OPTIMISER",
      "IA en production et gouvernance — CLAUDE SHIP ET IA ÉDUCATIVE : BORNER L’AUTORISATION ET LE PÉRIMÈTRE",
      "Innovation marketing et plateformes publicitaires — AI MAX EN RATTRAPAGE, PINTEREST EN SUIVI : CONTRÔLER AVANT DE MIGRER"
    ],
    "actions": [
      "Obtenir en privé l’applicabilité, la correction ou l’atténuation et la recette des avis de sécurité.",
      "Documenter marché, langue, compte et session du panel de réponses, et séparer les citations des visites.",
      "Faire classer les agents vérifiés et tester les règles d’accès ciblées, sans autorisation globale.",
      "Revoir les finalités des pixels si utilisés et décider d’un retour CNIL fondé sur des observations documentées.",
      "Tester l’éligibilité de classification et distinguer appel, réservation confirmée et rendez-vous honoré.",
      "Recetter libellés, erreurs, confirmation et reprise humaine avec de vrais utilisateurs.",
      "Exiger politique d’approbation des agents, contrôle humain des changements sensibles, données et coûts explicites.",
      "Tester les exclusions et règles héritées avant migration ; vérifier le marché avant un essai média."
    ],
    "emergents": [
      "Préavis de classement de décembre",
      "Contexte personnel des réponses",
      "Position des liens et diversité des citations",
      "Qualité des objectifs rendez-vous",
      "Approbation de code par agents",
      "Simulation et robotique souple"
    ]
  },
  "domaines": [
    {
      "id": 1,
      "domainName": "Moteurs de réponse IA",
      "code": "GOOGLE AI",
      "category": "GOOGLE",
      "titre": "AI MODE : CONTRÔLER LE CONTEXTE, SANS CONFONDRE PRÉAVIS ET DÉPLOIEMENT",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "subjectsCount": 2,
      "description": "Wallet commence son déploiement dans Personal Intelligence ; les fils temporaires retirent le contexte du compte. La clôture de la mise à jour de novembre est rapportée par la presse, mais non restituée par l’incident primaire relu ; le préavis de décembre est confirmé, sans date de lancement.",
      "sources": selectSources(1, 2, 3, 4),
      "details": [
        "Faits des 17 et 23 novembre : fils temporaires déployés selon Google ; Wallet en lecture seule, Drive et contexte Gemini annoncés à venir.",
        "Classement le 24 : clôture à 9 h 03, heure de New York, selon Search Engine Roundtable seulement ; préavis décembre primaire confirmé, pas mise à jour déjà lancée.",
        "Impact pour une école : un relevé connecté peut dépendre du contexte personnel ; ni une session temporaire ni un préavis ne garantissent réponse stable, visibilité ou trafic.",
        "Recommandation (Règle de conception) : noter marché, langue, compte et mode de session dans le panel ; annoter la clôture comme rapportée et attendre la date réelle de décembre avant comparaison."
      ],
      "recommendationStatus": "Règle de conception",
      "longDescription": "Google annonce le 17 novembre des fils temporaires dans AI Mode, détachés du compte et sans utilisation des préférences passées ni enrichissement de l’historique. Le 23, Wallet commence son déploiement dans Personal Intelligence, en lecture seule ; Drive et le partage de contexte avec Gemini restent annoncés pour les semaines suivantes. Ces deux annonces forment un même enjeu de contrôle du contexte, pas une garantie de réponse neutre ou stable. Le calendrier de classement apporte un second sujet : Search Engine Roundtable rapporte la clôture de novembre le 24 à 9 h 03, heure de New York, mais l’incident primaire rouvert ne la restitue pas. Le préavis officiel de décembre est confirmé, sans jour de lancement. Pour une école, consigner les conditions de chaque observation, comparer des sessions équivalentes et distinguer une étape rapportée d’un déploiement confirmé. Aucun rappel automatique au 1er décembre ni réécriture des pages ne découle de ces seules annonces."
    },
    {
      "id": 2,
      "domainName": "Zero-click et GEO",
      "code": "ZERO-CLICK / GEO",
      "category": "SEO",
      "titre": "CITATIONS SOCIALES ET LIENS : DEUX OBSERVATIONS, PAS UNE RECETTE DE CONVERSION",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "subjectsCount": 2,
      "description": "Semrush publie +52 % de citations sur ses surfaces Google et −44 % dans ChatGPT pour un panel américain de 18 domaines. Peec AI relève une moindre présence du premier lien en haut des réponses. Ni ce panel ni ce relevé sans échantillon précisé ne mesurent les admissions ou la causalité des clics.",
      "sources": selectSources(5, 6),
      "details": [
        "Étude du 23 novembre : 18 domaines, requêtes américaines, janvier–août 2026 ; chiffres Semrush publiés +52 % et −44 %.",
        "Relevé relayé le 24 : premier lien dans le premier tiers, 76,8 % le 21 septembre et 51,8 % le 20 novembre ; taille et sélection de l’échantillon absentes.",
        "Impact pour une école : les sources citées peuvent varier par moteur ; rien ne prouve qu’une plateforme sociale apporte plus de candidatures ou que la position du lien cause une baisse de visites.",
        "Recommandation (Règle de conception) : suivre séparément citations par moteur, position des liens, sessions attribuées et résultats ; ne pas choisir un canal à partir des seules parts américaines."
      ],
      "recommendationStatus": "Règle de conception",
      "longDescription": "Le 23 novembre, Semrush publie une étude de citations concernant 18 domaines sociaux et communautaires sur des requêtes américaines entre janvier et août. L’éditeur rapporte une hausse agrégée de 52 % sur ses surfaces Google et une baisse de 44 % dans ChatGPT. Les parts restent limitées à ces domaines ; les outils de collecte des citations et des visites référées ne sont pas identiques. Semrush commercialise ces mesures : la publication ne démontre ni causalité ni performance dans l’éducation française. Le 24, Search Engine Roundtable relaie Peec AI : le premier lien apparaît dans le premier tiers de 76,8 % des réponses le 21 septembre, contre 51,8 % le 20 novembre. La page ne précise pas l’échantillon. Pour une école, observer des requêtes locales répétées par moteur, sans confondre présence et visite. Définir les résultats utiles séparément et ne pas transformer une association de citations ou une position de lien en prévision de recrutement."
    },
    {
      "id": 3,
      "domainName": "Données structurées et accès des robots",
      "code": "SCHEMA / ACCÈS",
      "category": "DATA",
      "titre": "GOOGLE DOCUMENTE DES CLIENTS EXISTANTS : CLASSER AVANT D’AUTORISER",
      "badge": "À SURVEILLER",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "subjectsCount": 1,
      "description": "Le changelog primaire du 23 novembre documente six crawlers particuliers et six fetchers déclenchés par utilisateur déjà existants. Il corrige aussi la classification et la chaîne d’APIs-Google. C’est un progrès d’identification, non un lancement de robots ni une nouvelle recette de référencement.",
      "sources": selectSources(7),
      "details": [
        "Fait documentaire du 23 novembre : six crawlers et six fetchers existants ajoutés ; Google précise qu’ils ne sont pas nouveaux.",
        "APIs-Google est déplacé vers les fetchers et sa chaîne corrigée ; ses webhooks ignorent robots.txt, sans généraliser ce comportement aux autres agents.",
        "Impact pour une école : une classification imprécise peut confondre services automatisés et trafic humain ; aucun blocage, usage d’agenda ou effet sur un formulaire n’est établi pour une école.",
        "Recommandation (Indicatif) : demander une classification des agents vérifiés par usage et politique d’accès, puis tester les règles ciblées ; ne pas autoriser tout trafic portant un nom Google."
      ],
      "recommendationStatus": "Indicatif",
      "longDescription": "Le changelog officiel de l’infrastructure de crawl Google, daté du 23 novembre, documente six crawlers particuliers et six fetchers déclenchés par utilisateur déjà en activité. Google indique qu’il s’agit de clients existants à fort volume, pas de nouveaux robots. Le même texte déplace APIs-Google vers les fetchers, corrige sa chaîne documentée et précise que ses requêtes de webhook ignorent robots.txt. Ce comportement ne doit pas être étendu à tous les agents. La source primaire accessible remplace le recours au seul article de presse de la collecte précédente ; les brouillons de modélisation RDF ne remplissent donc pas ce domaine. Pour une école, l’intérêt est la classification fiable du trafic et la cohérence des règles d’accès. Faire vérifier l’identité des requêtes, leur usage et les règles ciblées avant de décider d’autoriser, limiter ou bloquer. Ni la documentation ni le nom d’un agent ne prouvent une légitimité universelle, un gain de visibilité ou un besoin de changer les données structurées."
    },
    {
      "id": 4,
      "domainName": "CMS et socle technique",
      "code": "CMS / SOCLE",
      "category": "ARCHI",
      "titre": "CORRECTIFS DES 18–19 NOVEMBRE : CONFIRMER L’APPLICATION ET LA RECETTE",
      "badge": "CRITIQUE",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "subjectsCount": 1,
      "description": "Drupal et WordPress publient des correctifs le 18 novembre, PHP le 19. L’avis Drupal SA-CORE-2026-017 révisé le 21 signale une exploitation depuis le 19. Les sources éditeurs et CERT-FR rendent urgente la confirmation des correctifs applicables, sans attribuer technologie ou exposition à une école.",
      "sources": selectSources(8, 9, 10, 11, 12, 13, 14),
      "details": [
        "Faits primaires : correctifs Drupal et WordPress le 18 novembre, PHP le 19 ; bulletin CERTFR-2026-ACT-049 du 23 et avis individuels du 19 ouverts.",
        "Drupal SA-CORE-2026-017 : exploitation signalée depuis le 19 à 19 h UTC ; 20 sur 25 est un score de gravité selon la grille Drupal, pas une mesure de victimes.",
        "Impact pour une école : si un composant est réellement présent et concerné, le délai de correction et sa preuve comptent ; aucune compromission ou architecture ne peut être inférée.",
        "Recommandation (Immédiat) : obtenir en privé l’applicabilité, la correction ou l’atténuation, l’heure, le responsable et la recette ; contrôler les traces selon l’avis et les procédures approuvées."
      ],
      "recommendationStatus": "Immédiat",
      "longDescription": "Les sources officielles publient des correctifs Drupal et WordPress le 18 novembre, puis PHP le 19. L’avis Drupal SA-CORE-2026-017 décrit une prise de contrôle ou une exécution de code sans authentification dans certaines conditions de l’installateur. Sa révision du 21 novembre, datée dans le HTML de la page, signale une exploitation sur des sites depuis le 19 à 19 h UTC. Le score de 20 sur 25 relève de la grille de gravité Drupal ; il ne compte pas des victimes. PHP précise des conditions de configuration particulières. Le bulletin CERT-FR du 23 et ses avis du 19 corroborent la nécessité de consulter les solutions éditeurs. Pour une école, vérifier en privé l’applicabilité, obtenir une attestation de correction ou d’atténuation et une recette documentée. Ne pas inférer un incident ni publier l’inventaire. Les dates publiées restent telles quelles : aucun délai dérivé ou total de failles WordPress reconstitué n’est utilisé."
    },
    {
      "id": 5,
      "domainName": "Data first-party, consentement, navigateurs",
      "code": "CDP / DATA",
      "category": "CDP",
      "titre": "PIXELS DE COURRIEL : UN BILAN CNIL, PAS UN NOUVEAU DÉLAI DE CONFORMITÉ",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "subjectsCount": 1,
      "description": "La CNIL ouvre le 20 novembre un retour d’expérience sur sa recommandation du 14 avril. Les contributions sont possibles jusqu’au 3 décembre. Le fait nouveau est ce bilan des coûts, pratiques de mesure et alternatives, non une nouvelle règle ni une remise à zéro des délais précédents.",
      "sources": selectSources(15),
      "details": [
        "Le 20 novembre, la CNIL sollicite les expéditeurs et fournisseurs privés ; contributions jusqu’au jeudi 3 décembre 2026.",
        "La recommandation est datée du 14 avril ; le 3 décembre clôt l’appel à retours, pas une échéance générale de conformité.",
        "Impact pour une école : si des pixels sont utilisés, leur finalité et les limites du taux d’ouverture doivent être documentées ; la page ne décrit ni outil ni pratique d’une école.",
        "Recommandation (À arbitrer) : faire revoir finalités, information, choix et qualité des indicateurs ; décider d’une contribution uniquement si des observations vérifiées sont disponibles."
      ],
      "recommendationStatus": "À arbitrer",
      "longDescription": "La CNIL publie le 20 novembre un appel à premier retour d’expérience sur les pixels de suivi dans les courriels. Elle rappelle que sa recommandation a été publiée le 14 avril et sollicite jusqu’au 3 décembre les entreprises privées, fournisseurs techniques et expéditeurs. Elle souhaite des retours précis sur les coûts de mise en conformité, l’évolution de la mesure d’audience et de la personnalisation, ainsi que les alternatives. Le fait nouveau est cette consultation de bilan : le 3 décembre n’est pas une échéance générale de conformité et aucun délai antérieur ne repart du 20 novembre. Pour une école, vérifier les finalités et la qualité des indicateurs seulement si de tels pixels sont utilisés. Ne pas supposer un outil de routage ou de scoring. Une revue avec la protection des données peut distinguer information, choix effectif et interprétation des ouvertures. Une contribution reste facultative et ne devrait porter que sur des observations documentées, sans déclarer un changement de droit applicable."
    },
    {
      "id": 6,
      "domainName": "Mesure et attribution",
      "code": "MESURE",
      "category": "MESURE",
      "titre": "SEARCH ANALYTICS ET RENDEZ-VOUS : QUALIFIER LA DONNÉE AVANT D’OPTIMISER",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "RATTRAPAGE",
      "subjectsCount": 2,
      "description": "En rattrapage du 16 novembre, Search Analytics ouvre classification marque, données multimodales et filtres multiples. Le 24, la presse relève une mise à jour documentaire de Book Appointment. Un appel compté par durée n’est pas une réservation certaine, et une propriété inéligible peut retourner une réponse vide.",
      "sources": selectSources(16, 17, 18),
      "details": [
        "API signifie interface de programmation d’applications : le 16 novembre, Google ajoute brandedClassification, webMultimodal et filterLists ; rattrapage explicite.",
        "Le 24, Book Appointment est documenté pour partenaires, site et appels ; une durée d’appel est un proxy, pas la preuve d’un rendez-vous honoré.",
        "Impact pour une école : les vues marque/hors marque deviennent automatisables sous condition d’éligibilité ; les résultats doivent distinguer contact, rendez-vous confirmé et présence effective.",
        "Recommandation (Règle de conception) : tester l’éligibilité et les définitions sur un périmètre public borné ; valider les événements de rendez-vous sans assimiler tous les appels ou formulaires à une réservation."
      ],
      "recommendationStatus": "Règle de conception",
      "longDescription": "Le 16 novembre, Google ajoute trois capacités à Search Analytics, son interface de programmation d’applications pour les données de recherche : brandedClassification pour marque et hors marque, webMultimodal pour Lens, Circle to Search et images, et filterLists pour plusieurs pays ou appareils. Ce fait laissé hors de la collecte mesure S47 est retenu en rattrapage ; une propriété non éligible à la classification renvoie une réponse vide. Le 24, Search Engine Roundtable relève une mise à jour documentaire de Book Appointment, confirmée par l’aide Google. Ce n’est pas un lancement produit daté certain. Le suivi couvre partenaires compatibles, confirmation sur site et appels atteignant une durée : ce dernier mécanisme reste un proxy. Pour une école, vérifier les définitions avant toute optimisation, sans supposer un outil existant. Distinguer contact, réservation confirmée, rendez-vous honoré et résultat ultérieur. Ces fonctionnalités ne démontrent ni gains d’attribution ni hausse de candidatures, et n’isolent pas un taux de clic propre aux réponses IA."
    },
    {
      "id": 7,
      "domainName": "UX conversationnelle et web agentique",
      "code": "UX",
      "category": "UX",
      "titre": "GEMINI SUR MAC : UN DÉPLOIEMENT LIMITÉ, PAS UNE VALIDATION DU PARCOURS",
      "badge": "À SURVEILLER",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "subjectsCount": 1,
      "description": "Google annonce le 19 novembre computer use sur Mac, en anglais aux États-Unis pour comptes personnels majeurs éligibles. L’utilisateur choisit les applications, observe, peut suspendre et confirme les actions clés. Ces contrôles annoncés ne prouvent pas fiabilité ou accessibilité dans un autre contexte.",
      "sources": selectSources(19),
      "details": [
        "Annonce du 19 novembre : navigation entre fichiers locaux, applications et web dans une fenêtre isolée avec aperçu en direct.",
        "Déploiement limité aux États-Unis, à l’anglais et aux comptes personnels majeurs éligibles ; pas d’ouverture française ou professionnelle établie.",
        "Impact pour une école : un agent pourrait aborder un parcours autrement, mais aucun usage sur des admissions ni résultat d’accessibilité n’est démontré.",
        "Recommandation (Règle de conception) : prévoir des libellés explicites, erreurs compréhensibles, confirmation et reprise humaine ; tester avec des personnes et ne pas remplacer la recette d’accessibilité par un agent."
      ],
      "recommendationStatus": "Règle de conception",
      "longDescription": "Le 19 novembre, Google annonce computer use dans l’application Gemini pour Mac. L’agent est présenté comme capable de naviguer dans des fichiers locaux, des applications et des pages web, au sein d’une fenêtre isolée avec aperçu en direct. L’utilisateur choisit les applications autorisées, peut suspendre et confirme les actions clés. Le déploiement est limité à l’anglais aux États-Unis, aux comptes personnels de personnes majeures et à des abonnements et appareils éligibles. Il ne prouve ni ouverture en France, ni accès professionnel, ni résultat de fiabilité ou d’accessibilité. Pour une école, l’intérêt est un signal de conception plutôt qu’une adoption immédiate. Un parcours doit rester compréhensible pour une personne : libellés, erreurs, confirmation et recours humain. Un test d’agent peut compléter une recette, mais ne remplace pas les essais humains, le clavier ou le lecteur d’écran. Aucun formulaire effectivement rempli ni gain de temps sur des candidatures ne peut être déduit de la démonstration fournisseur."
    },
    {
      "id": 8,
      "domainName": "IA en production et gouvernance",
      "code": "IA",
      "category": "IA",
      "titre": "CLAUDE SHIP ET IA ÉDUCATIVE : BORNER L’AUTORISATION ET LE PÉRIMÈTRE",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "ACTUALITÉ",
      "subjectsCount": 2,
      "description": "Claude Ship associe une revue généralement disponible à deux agents en bêta : les changements autorisés dépendent d’une politique écrite. La résolution présentée par la CNIL vise les mineurs du primaire et du secondaire, non une obligation nouvelle pour le supérieur. L’orientation et les garanties produit restent distinctes.",
      "sources": selectSources(20, 21, 22),
      "details": [
        "Claude Ship le 23 : Code Review disponible, PR Steward et Claude Approvals en bêta ; PR Steward ne doit ni approuver ni fusionner.",
        "La résolution présentée le 20 vise les moins de 18 ans des deux premiers niveaux de l’éducation formelle ; ce n’est pas une loi étendue au supérieur.",
        "Impact pour une école : une approbation de code confiée à un agent appelle un contrôle indépendant ; les principes éducatifs peuvent éclairer un achat sans prédire un contrôle réglementaire.",
        "Recommandation (Contractuel) : exiger déclaration des agents, politique d’approbation, contrôle humain des changements sensibles, limites de données et coûts ; commencer en observation sur un périmètre autorisé."
      ],
      "recommendationStatus": "Contractuel",
      "longDescription": "Anthropic présente Claude Ship le 23 novembre : Code Review est généralement disponible, tandis que PR Steward et Claude Approvals sont en bêta. Le premier est conçu pour ne pas approuver ni fusionner ; le second applique une politique de dépôt et peut renvoyer les changements risqués à une personne. L’éditeur recommande de commencer en observation et avertit que des bugs ou vulnérabilités peuvent être manqués. Certaines configurations de conservation et de chiffrement sont exclues, et les coûts varient. La résolution éducative présentée par la CNIL le 20 apporte un second sujet : son texte primaire vise les moins de 18 ans aux deux premiers niveaux de l’éducation formelle. Elle n’est pas une loi nouvelle applicable au supérieur. Pour une école, ces sources justifient un cadrage proportionné, sans prédire les décisions du régulateur : déclarer les agents, conserver un contrôle humain indépendant pour les changements sensibles et confirmer contractuellement les données, l’autorisation, le retrait et les coûts avant tout essai."
    },
    {
      "id": 9,
      "domainName": "Innovation marketing et plateformes publicitaires",
      "code": "INNOV MKT",
      "category": "INNOV MKT",
      "titre": "AI MAX EN RATTRAPAGE, PINTEREST EN SUIVI : CONTRÔLER AVANT DE MIGRER",
      "badge": "IMPORTANT",
      "previousBadge": null,
      "editorialStatus": "RATTRAPAGE",
      "subjectsCount": 2,
      "description": "La clarification du 16 novembre explique les exclusions AI Max par tokens complets et les limites des anciennes règles après migration. Le 18, Google annonce Pinterest dans Display & Video 360 et des audiences Spotify aux États-Unis/Inde. Ni une exclusion ni un nouvel inventaire ne garantit un résultat commercial.",
      "sources": selectSources(23, 24, 25),
      "details": [
        "Rattrapage réservé à S48 : le 16, règles AI Max par URL exacte, libellé de flux ou tokens ; underscores non séparateurs et espaces logiques ET.",
        "Suivi S45 : Pinterest dans Display & Video 360 le 18 ; restriction États-Unis/Inde annoncée pour Spotify seulement, sans extrapolation à Pinterest.",
        "Impact pour une école : une règle mal construite peut laisser une destination éligible ; aucun usage publicitaire, marché français ou gain de campagne d’une école n’est présumé.",
        "Recommandation (À arbitrer) : recetter exclusions et règles héritées avant migration ; vérifier marché, conditions et résultat défini avant tout essai d’inventaire, sans activer des options pour la seule nouveauté."
      ],
      "recommendationStatus": "À arbitrer",
      "longDescription": "Le 16 novembre, Search Engine Land rapporte une clarification Google sur les exclusions d’URL AI Max. L’aide primaire confirme trois méthodes et une correspondance par tokens complets, non par fragment de mot. Les underscores ne séparent pas les tokens, les espaces agissent comme ET, et les anciennes règles Dynamic Search Ads deviennent non modifiables après migration. Ce rattrapage avait été réservé à S48. Le 18, Google annonce Pinterest dans Display & Video 360 : c’est un suivi du signal Programmatic Deals S45, avec une nouvelle voie d’achat. Les audiences Google sur Spotify sont limitées aux États-Unis et à l’Inde ; cette restriction n’est pas étendue à Pinterest sans preuve. Pour une école, vérifier d’abord les destinations exclues et les conséquences d’une migration. Les options requises par les exclusions ne justifient pas leur activation. Tout essai média doit ensuite disposer d’un marché pertinent, de conditions vérifiées et d’un résultat défini, sans reprendre les chiffres fournisseur comme objectif garanti."
    }
  ],
  "measurement": undefined,
  "caseStudies": [],
  "bonus": {
    "id": 10,
    "label": "BONUS #10 — SIMULATION ET ROBOTIQUE",
    "code": "ROBOTIQUE",
    "titre": "SOFA WEEK : UN PROGRAMME DE SIMULATION, PAS UN RÉSULTAT",
    "badge": "BONUS",
    "previousBadge": null,
    "editorialStatus": "ACTUALITÉ",
    "chiffre": "23–27 NOVEMBRE",
    "statLabel": "DATES PROGRAMMÉES DE SOFA WEEK 2026",
    "description": "Du 23 au 27 novembre, la SOFA Week est programmée dans la métropole lilloise, avec des formations le 23 et un symposium le 24. Le consortium SOFA et le laboratoire CRIStAL présentent un rendez-vous autour de la simulation mécanique interactive, notamment utile à la biomécanique et à la robotique souple. Le programme réunit apprentissage, démonstrations et échanges techniques. Les pages ouvertes décrivent un événement prévu, pas un résultat expérimental ni la preuve de sa tenue. Pour une école, c’est une illustration de la coopération entre simulation et recherche ; aucune efficacité pédagogique ou adoption de robots n’en découle.",
    "sources": selectSources(26, 27),
    "source": selectSources(26)[0],
    "details": [
      "Programme : formations le 23 novembre et symposium le 24 dans la métropole lilloise.",
      "Les dates du registre sont celles de l’événement, pas une date de publication démontrée.",
      "Organisateur et laboratoire impliqué ne sont pas des évaluateurs indépendants.",
      "Aucune preuve de tenue, de performance ou d’adoption publiée ici."
    ],
    "perspective": "Ce qu’on en retient : distinguer un programme, une démonstration et un résultat évalué ; attendre les comptes rendus avant de parler de progrès pratique.",
    "longDescription": "Du 23 au 27 novembre, la SOFA Week est programmée dans la métropole lilloise, avec des formations le 23 et un symposium le 24. Le consortium SOFA et le laboratoire CRIStAL présentent un rendez-vous autour de la simulation mécanique interactive, notamment utile à la biomécanique et à la robotique souple. Le programme réunit apprentissage, démonstrations et échanges techniques. Les pages ouvertes décrivent un événement prévu, pas un résultat expérimental ni la preuve de sa tenue. Pour une école, c’est une illustration de la coopération entre simulation et recherche ; aucune efficacité pédagogique ou adoption de robots n’en découle. Les prix, quotas et liens anciens présents dans le programme ne sont pas repris : ils n’éclairent pas le signal retenu."
  },
  "actions": [
    {
      "id": 1,
      "type": "PRIORITÉ",
      "titre": "Obtenir en privé l’applicabilité, la correction ou l’atténuation et la recette des avis de sécurité.",
      "domaine": "CMS / SOCLE",
      "responsable": "Technique et prestataire contractuellement responsable",
      "echeance": "Immédiat — selon procédure approuvée",
      "recommendationStatus": "Immédiat"
    },
    {
      "id": 2,
      "type": "CADRAGE",
      "titre": "Documenter marché, langue, compte et session du panel de réponses, et séparer les citations des visites.",
      "domaine": "GOOGLE AI / ZERO-CLICK / GEO",
      "responsable": "Référencement et mesure",
      "echeance": "Prochain relevé du panel",
      "recommendationStatus": "Règle de conception"
    },
    {
      "id": 3,
      "type": "CONTRÔLE",
      "titre": "Faire classer les agents vérifiés et tester les règles d’accès ciblées, sans autorisation globale.",
      "domaine": "SCHEMA / ACCÈS",
      "responsable": "Sécurité et technique",
      "echeance": "Avant toute modification de règle",
      "recommendationStatus": "Indicatif"
    },
    {
      "id": 4,
      "type": "ARBITRAGE",
      "titre": "Revoir les finalités des pixels si utilisés et décider d’un retour CNIL fondé sur des observations documentées.",
      "domaine": "CDP / DATA",
      "responsable": "Protection des données et communication",
      "echeance": "Avant le 3 décembre — contribution facultative",
      "recommendationStatus": "À arbitrer"
    },
    {
      "id": 5,
      "type": "MESURE",
      "titre": "Tester l’éligibilité de classification et distinguer appel, réservation confirmée et rendez-vous honoré.",
      "domaine": "MESURE",
      "responsable": "Mesure et responsables de parcours",
      "echeance": "Avant prochaine évolution de reporting",
      "recommendationStatus": "Règle de conception"
    },
    {
      "id": 6,
      "type": "CONCEPTION",
      "titre": "Recetter libellés, erreurs, confirmation et reprise humaine avec de vrais utilisateurs.",
      "domaine": "UX",
      "responsable": "Produit et accessibilité",
      "echeance": "Avant tout pilote agentique",
      "recommendationStatus": "Règle de conception"
    },
    {
      "id": 7,
      "type": "CONTRAT",
      "titre": "Exiger politique d’approbation des agents, contrôle humain des changements sensibles, données et coûts explicites.",
      "domaine": "IA",
      "responsable": "Sécurité, achats et technique",
      "echeance": "Avant tout essai ou contrat",
      "recommendationStatus": "Contractuel"
    },
    {
      "id": 8,
      "type": "ARBITRAGE",
      "titre": "Tester les exclusions et règles héritées avant migration ; vérifier le marché avant un essai média.",
      "domaine": "INNOV MKT",
      "responsable": "Communication et achats médias",
      "echeance": "Avant migration ou campagne",
      "recommendationStatus": "À arbitrer"
    }
  ],
  "signauxEmergents": [
    {
      "titre": "Préavis de classement de décembre",
      "description": "Suivre la date effective de lancement ; un incident de préannonce ne prouve pas un déploiement.",
      "horizon": "Décembre 2026"
    },
    {
      "titre": "Contexte personnel des réponses",
      "description": "Observer l’ouverture de Drive et Gemini et documenter les conditions de session, sans attendre une réponse stable.",
      "horizon": "Prochaines semaines"
    },
    {
      "titre": "Position des liens et diversité des citations",
      "description": "Reproduire localement les observations par moteur ; ne pas transformer le panel américain ou Peec AI en prévision de clic.",
      "horizon": "3–6 mois"
    },
    {
      "titre": "Qualité des objectifs rendez-vous",
      "description": "Vérifier le passage de l’appel compté à la réservation confirmée et au rendez-vous honoré avant optimisation.",
      "horizon": "Avant campagne"
    },
    {
      "titre": "Approbation de code par agents",
      "description": "Suivre les résultats documentés des bêtas, les restrictions de données et la réversibilité des politiques.",
      "horizon": "3–6 mois"
    },
    {
      "titre": "Simulation et robotique souple",
      "description": "Attendre un compte rendu ou des travaux issus de SOFA Week ; le programme ne constitue pas un résultat.",
      "horizon": "Après événement"
    }
  ],
  "tendancesPassees": [
    {
      "titre": "Mémoire S44 — sécurité du socle",
      "description": "PHP2Shell et ses correctifs restent un antécédent ; les avis du 18–19 novembre sont distincts, sans exposition d’une école déduite."
    },
    {
      "titre": "Mémoire S45 — consentement mobile",
      "description": "La décision individuelle sur la personnalisation mobile reste séparée du bilan de pixels de courriel de S48."
    },
    {
      "titre": "Mémoire S45 — inventaires Pinterest",
      "description": "Programmatic Deals était déjà traité ; seule la voie Display & Video 360 du 18 novembre motive le suivi."
    },
    {
      "titre": "Mémoire S46 — Data Manager",
      "description": "La bêta et le risque de flux redondants restent en mémoire ; aucune migration d’outil n’est déduite des nouveaux filtres Search."
    },
    {
      "titre": "Mémoire S47 — Business Hub et mesure",
      "description": "La bêta et l’analyse des impressions IA restent archivées : mentions, clics, sessions et résultats ne sont pas interchangeables."
    },
    {
      "titre": "Mémoire S43 — cas Currys",
      "description": "Ce cas demeure un repère méthodologique historique, pas un nouveau cas ni un résultat transposable à une école."
    }
  ],
  "sources": sourceRegistry
};
