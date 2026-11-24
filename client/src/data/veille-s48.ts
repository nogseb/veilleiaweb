import registry from "../../../content/2026-W48/sources.json";

const dateFormat = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function sourceDate(source: (typeof registry.sources)[number]) {
  const date = dateFormat.format(new Date(`${source.date}T00:00:00Z`));
  if (source.date_status === "date d’ouverture au programme")
    return `Ouverture programmée le ${date}`;
  if (source.date_status.startsWith("mise à disposition"))
    return `Accessible au plus tard le ${date}`;
  return date;
}

const sources = registry.sources.map(source => ({
  id: source.id,
  nom: `${source.publisher} — ${source.title}`,
  url: source.url,
  date: sourceDate(source),
}));

function selectSources(...ids: number[]) {
  return sources.filter(source => ids.includes(source.id));
}

const domaines = [
  {
    id: 1,
    domainName: "Moteurs de réponse IA",
    code: "GOOGLE AI",
    titre:
      "AI Mode déploie les fils temporaires et amorce la connexion à Wallet",
    badge: "À SURVEILLER",
    previousBadge: null,
    editorialStatus: "ACTUALITÉ",
    category: "GOOGLE",
    subjectsCount: 2,
    description:
      "Deux réglages de recherche aux effets différents sur le contexte de réponse. Le 17 novembre, Google a annoncé le déploiement mondial des fils temporaires sur navigateur mobile et ordinateur, dans les langues déjà prises en charge par AI Mode. Ces échanges restent hors historique et ne contribuent pas à la personnalisation future selon Google.",
    sources: selectSources(1, 2, 3),
    details: [
      "Le 17 novembre, Google a annoncé le déploiement mondial des fils temporaires sur navigateur mobile et ordinateur, dans les langues déjà prises en charge par AI Mode. Ces échanges restent hors historique et ne contribuent pas à la personnalisation future selon Google.",
      "Le 23 novembre, Google a annoncé le début du déploiement de la connexion facultative de Wallet à Personal Intelligence. Drive et l’application Gemini sont annoncés pour les semaines suivantes. La disponibilité de ces connexions en France reste à vérifier.",
      "Impact pour une école : Une même question sur un programme peut être posée avec des contextes différents. Un suivi de visibilité gagne à documenter le mode utilisé.",
      "Recommandation (Indicatif) : Consigner le marché, la langue et le mode de personnalisation dans les relevés. Tester les questions sur les programmes sans saisir de données de candidature.",
    ],
    recommendationStatus: "Indicatif",
    longDescription:
      "Le 17 novembre, Google a annoncé le déploiement mondial des fils temporaires sur navigateur mobile et ordinateur, dans les langues déjà prises en charge par AI Mode. Ces échanges restent hors historique et ne contribuent pas à la personnalisation future selon Google. Le 23 novembre, Google a annoncé le début du déploiement de la connexion facultative de Wallet à Personal Intelligence. Drive et l’application Gemini sont annoncés pour les semaines suivantes. La disponibilité de ces connexions en France reste à vérifier. Impact pour une école : Une même question sur un programme peut être posée avec des contextes différents. Un suivi de visibilité gagne à documenter le mode utilisé. Recommandation (Indicatif) : Consigner le marché, la langue et le mode de personnalisation dans les relevés. Tester les questions sur les programmes sans saisir de données de candidature.",
  },
  {
    id: 2,
    domainName: "Zero-click et GEO",
    code: "ZERO-CLICK / GEO",
    titre: "Les plateformes IA citent différemment les mêmes domaines sociaux",
    badge: "IMPORTANT",
    previousBadge: null,
    editorialStatus: "ACTUALITÉ",
    category: "SEO",
    subjectsCount: 1,
    description:
      "Étude Semrush sur les volumes de citations de 18 domaines. Le 23 novembre, Semrush a publié une étude sur 18 domaines sociaux ou de contenus d’utilisateurs, selon des requêtes américaines de janvier à août 2026. Entre janvier et août, l’éditeur rapporte une hausse de 52 % du volume agrégé de citations pour AI Overviews, AI Mode et Gemini, et une baisse de 44 % pour ChatGPT.",
    sources: selectSources(4, 5),
    details: [
      "Le 23 novembre, Semrush a publié une étude sur 18 domaines sociaux ou de contenus d’utilisateurs, selon des requêtes américaines de janvier à août 2026. Entre janvier et août, l’éditeur rapporte une hausse de 52 % du volume agrégé de citations pour AI Overviews, AI Mode et Gemini, et une baisse de 44 % pour ChatGPT.",
      "Les résultats portent sur les volumes de ce panel par domaine. La part dans toutes les citations, les réponses consultées sans clic et les conversions exigent d’autres données. Semrush commercialise des outils de suivi de la visibilité IA.",
      "Impact pour une école : Le moteur d’origine et les répétitions du test comptent lorsqu’une école suit les sources qui parlent de ses programmes.",
      "Recommandation (Règle de conception) : Garder un panel stable de requêtes françaises et anglaises et noter, pour chaque moteur, la date, la source citée et le domaine. Mesurer les visites séparément.",
    ],
    recommendationStatus: "Règle de conception",
    longDescription:
      "Le 23 novembre, Semrush a publié une étude sur 18 domaines sociaux ou de contenus d’utilisateurs, selon des requêtes américaines de janvier à août 2026. Entre janvier et août, l’éditeur rapporte une hausse de 52 % du volume agrégé de citations pour AI Overviews, AI Mode et Gemini, et une baisse de 44 % pour ChatGPT. Les résultats portent sur les volumes de ce panel par domaine. La part dans toutes les citations, les réponses consultées sans clic et les conversions exigent d’autres données. Semrush commercialise des outils de suivi de la visibilité IA. Impact pour une école : Le moteur d’origine et les répétitions du test comptent lorsqu’une école suit les sources qui parlent de ses programmes. Recommandation (Règle de conception) : Garder un panel stable de requêtes françaises et anglaises et noter, pour chaque moteur, la date, la source citée et le domaine. Mesurer les visites séparément.",
  },
  {
    id: 3,
    domainName: "Données structurées et accès des robots",
    code: "SCHEMA / ACCÈS",
    titre: "Le W3C actualise ses brouillons de modélisation RDF",
    badge: "À SURVEILLER",
    previousBadge: null,
    editorialStatus: "ACTUALITÉ",
    category: "DATA",
    subjectsCount: 1,
    description:
      "Un vocabulaire de description et des exemples pour les données liées. Le W3C a publié un projet de guide RDF le 19 novembre et un nouveau brouillon de RDF Schema le 23 novembre. Le guide introduit notamment les triplets qui relient deux éléments. Le schéma décrit le vocabulaire des classes et des propriétés utilisé pour modéliser ces relations.",
    sources: selectSources(6, 7),
    details: [
      "Le W3C a publié un projet de guide RDF le 19 novembre et un nouveau brouillon de RDF Schema le 23 novembre. Le guide introduit notamment les triplets qui relient deux éléments. Le schéma décrit le vocabulaire des classes et des propriétés utilisé pour modéliser ces relations.",
      "Les deux publications restent des projets du groupe RDF & SPARQL. Les règles d’éligibilité aux résultats enrichis et d’accès des robots relèvent de leurs propres documentations.",
      "Impact pour une école : Ces documents peuvent servir de référence si une école modélise des liens stables entre programmes, campus, sessions et conditions d’admission.",
      "Recommandation (Indicatif) : Documenter les identifiants et relations du catalogue avant toute évolution de balisage. Baser les corrections SEO sur les règles publiées du moteur concerné.",
    ],
    recommendationStatus: "Indicatif",
    longDescription:
      "Le W3C a publié un projet de guide RDF le 19 novembre et un nouveau brouillon de RDF Schema le 23 novembre. Le guide introduit notamment les triplets qui relient deux éléments. Le schéma décrit le vocabulaire des classes et des propriétés utilisé pour modéliser ces relations. Les deux publications restent des projets du groupe RDF & SPARQL. Les règles d’éligibilité aux résultats enrichis et d’accès des robots relèvent de leurs propres documentations. Impact pour une école : Ces documents peuvent servir de référence si une école modélise des liens stables entre programmes, campus, sessions et conditions d’admission. Recommandation (Indicatif) : Documenter les identifiants et relations du catalogue avant toute évolution de balisage. Baser les corrections SEO sur les règles publiées du moteur concerné.",
  },
  {
    id: 4,
    domainName: "CMS et socle technique",
    code: "CMS / SOCLE",
    titre: "Correctifs Drupal, WordPress et PHP à vérifier en priorité",
    badge: "CRITIQUE",
    previousBadge: null,
    editorialStatus: "ACTUALITÉ",
    category: "ARCHI",
    subjectsCount: 2,
    description:
      "Mises à jour disponibles et signalement public d’exploitation sur Drupal. Drupal et WordPress ont publié des correctifs le 18 novembre. Pour l’un de ses avis, l’équipe Drupal publie un score de 20/25 et indique avoir reçu un signalement d’exploitation sur des sites en production dès le 19 novembre.",
    sources: selectSources(8, 9, 10, 11, 12, 13),
    details: [
      "Drupal et WordPress ont publié des correctifs le 18 novembre. Pour l’un de ses avis, l’équipe Drupal publie un score de 20/25 et indique avoir reçu un signalement d’exploitation sur des sites en production dès le 19 novembre.",
      "PHP a publié des correctifs pour quatre branches le 19 novembre. Le CERT-FR a relayé les avis Drupal, WordPress et PHP le même jour. Le score 20/25 relève de la grille Drupal et concerne l’avis cité.",
      "Impact pour une école : Si un composant concerné figure dans le périmètre d’une école, il faut confirmer son statut de correction et vérifier les parcours après mise à jour.",
      "Recommandation (Immédiat) : Faire contrôler l’applicabilité des bulletins, planifier les correctifs nécessaires et conserver la preuve de la recette des formulaires et des parcours critiques.",
    ],
    recommendationStatus: "Immédiat",
    longDescription:
      "Drupal et WordPress ont publié des correctifs le 18 novembre. Pour l’un de ses avis, l’équipe Drupal publie un score de 20/25 et indique avoir reçu un signalement d’exploitation sur des sites en production dès le 19 novembre. PHP a publié des correctifs pour quatre branches le 19 novembre. Le CERT-FR a relayé les avis Drupal, WordPress et PHP le même jour. Le score 20/25 relève de la grille Drupal et concerne l’avis cité. Impact pour une école : Si un composant concerné figure dans le périmètre d’une école, il faut confirmer son statut de correction et vérifier les parcours après mise à jour. Recommandation (Immédiat) : Faire contrôler l’applicabilité des bulletins, planifier les correctifs nécessaires et conserver la preuve de la recette des formulaires et des parcours critiques.",
  },
  {
    id: 5,
    domainName: "Data first-party, consentement, navigateurs",
    code: "CDP / DATA",
    titre:
      "La CNIL ouvre un retour d’expérience sur les pixels de suivi par courriel",
    badge: "IMPORTANT",
    previousBadge: null,
    editorialStatus: "ACTUALITÉ",
    category: "CDP",
    subjectsCount: 1,
    description:
      "Les expéditeurs et fournisseurs peuvent contribuer jusqu’au 3 décembre. Le 20 novembre, la CNIL a invité les expéditeurs et fournisseurs à faire remonter leurs difficultés, coûts, changements de pratiques et solutions alternatives jusqu’au 3 décembre.",
    sources: selectSources(14, 15),
    details: [
      "Le 20 novembre, la CNIL a invité les expéditeurs et fournisseurs à faire remonter leurs difficultés, coûts, changements de pratiques et solutions alternatives jusqu’au 3 décembre.",
      "La recommandation publiée le 14 avril demeure le texte de référence. Elle traite la finalité des pixels, les cas où le consentement est nécessaire et les conditions d’exemption. L’échéance de décembre concerne la contribution au retour d’expérience.",
      "Impact pour une école : Une école peut identifier ce que mesurent les pixels de ses courriels, qui reçoit les données et comment les choix des destinataires sont appliqués.",
      "Recommandation (Immédiat) : Revoir les finalités et les mécanismes de choix avec le délégué à la protection des données. Rassembler des observations si une contribution est envisagée.",
    ],
    recommendationStatus: "Immédiat",
    longDescription:
      "Le 20 novembre, la CNIL a invité les expéditeurs et fournisseurs à faire remonter leurs difficultés, coûts, changements de pratiques et solutions alternatives jusqu’au 3 décembre. La recommandation publiée le 14 avril demeure le texte de référence. Elle traite la finalité des pixels, les cas où le consentement est nécessaire et les conditions d’exemption. L’échéance de décembre concerne la contribution au retour d’expérience. Impact pour une école : Une école peut identifier ce que mesurent les pixels de ses courriels, qui reçoit les données et comment les choix des destinataires sont appliqués. Recommandation (Immédiat) : Revoir les finalités et les mécanismes de choix avec le délégué à la protection des données. Rassembler des observations si une contribution est envisagée.",
  },
  {
    id: 6,
    domainName: "Mesure et attribution",
    code: "MESURE",
    titre: "Matomo change le calcul du temps moyen sur la page",
    badge: "IMPORTANT",
    previousBadge: null,
    editorialStatus: "ACTUALITÉ",
    category: "MESURE",
    subjectsCount: 1,
    description:
      "Une rupture de série à annoter à la date d’application. Dans sa publication du 23 novembre, Matomo indique que le temps moyen sur la page est calculé par vue de page au lieu de la visite. L’éditeur date le changement du 18 novembre pour son service hébergé et du jour de mise à niveau pour les installations auto-hébergées.",
    sources: selectSources(16, 17),
    details: [
      "Dans sa publication du 23 novembre, Matomo indique que le temps moyen sur la page est calculé par vue de page au lieu de la visite. L’éditeur date le changement du 18 novembre pour son service hébergé et du jour de mise à niveau pour les installations auto-hébergées.",
      "Matomo indique que les données antérieures ne sont pas recalculées. Une variation à la date de migration peut donc provenir de la nouvelle définition.",
      "Impact pour une école : Si une école utilise un indicateur dont le calcul change, les comparaisons avant et après migration demandent une annotation et une vérification du dénominateur.",
      "Recommandation (Règle de conception) : Conserver la définition précédente, annoter la date d’effet et revoir les seuils d’alerte après observation d’une période comparable.",
    ],
    recommendationStatus: "Règle de conception",
    longDescription:
      "Dans sa publication du 23 novembre, Matomo indique que le temps moyen sur la page est calculé par vue de page au lieu de la visite. L’éditeur date le changement du 18 novembre pour son service hébergé et du jour de mise à niveau pour les installations auto-hébergées. Matomo indique que les données antérieures ne sont pas recalculées. Une variation à la date de migration peut donc provenir de la nouvelle définition. Impact pour une école : Si une école utilise un indicateur dont le calcul change, les comparaisons avant et après migration demandent une annotation et une vérification du dénominateur. Recommandation (Règle de conception) : Conserver la définition précédente, annoter la date d’effet et revoir les seuils d’alerte après observation d’une période comparable.",
  },
  {
    id: 7,
    domainName: "UX conversationnelle et web agentique",
    code: "UX",
    titre: "Gemini déploie le pilotage d’applications sur Mac",
    badge: "À SURVEILLER",
    previousBadge: null,
    editorialStatus: "ACTUALITÉ",
    category: "UX",
    subjectsCount: 1,
    description:
      "Aperçu en direct, pause, périmètre d’accès et confirmation. Le 19 novembre, Google a annoncé le déploiement progressif de Computer Use dans l’application Gemini pour Mac, en anglais aux États-Unis et pour des comptes personnels éligibles.",
    sources: selectSources(18),
    details: [
      "Le 19 novembre, Google a annoncé le déploiement progressif de Computer Use dans l’application Gemini pour Mac, en anglais aux États-Unis et pour des comptes personnels éligibles.",
      "Google décrit une fenêtre de travail isolée avec un aperçu en direct dans la discussion. La personne choisit les applications accessibles, peut interrompre le déroulement et confirme certaines actions. La source ne fournit pas de résultat d’accessibilité ou de fiabilité en situation réelle.",
      "Impact pour une école : Une école qui conçoit un service agentique peut s’appuyer sur ces contrôles pour préciser ce que la personne doit pouvoir voir, arrêter et reprendre.",
      "Recommandation (Règle de conception) : Tester sur données fictives la visibilité du périmètre, la pause, l’annulation, la confirmation des actions sensibles et la reprise humaine.",
    ],
    recommendationStatus: "Règle de conception",
    longDescription:
      "Le 19 novembre, Google a annoncé le déploiement progressif de Computer Use dans l’application Gemini pour Mac, en anglais aux États-Unis et pour des comptes personnels éligibles. Google décrit une fenêtre de travail isolée avec un aperçu en direct dans la discussion. La personne choisit les applications accessibles, peut interrompre le déroulement et confirme certaines actions. La source ne fournit pas de résultat d’accessibilité ou de fiabilité en situation réelle. Impact pour une école : Une école qui conçoit un service agentique peut s’appuyer sur ces contrôles pour préciser ce que la personne doit pouvoir voir, arrêter et reprendre. Recommandation (Règle de conception) : Tester sur données fictives la visibilité du périmètre, la pause, l’annulation, la confirmation des actions sensibles et la reprise humaine.",
  },
  {
    id: 8,
    domainName: "IA en production et gouvernance",
    code: "IA",
    titre:
      "IA dans l’éducation et approbation automatisée : deux décisions de gouvernance",
    badge: "IMPORTANT",
    previousBadge: null,
    editorialStatus: "ACTUALITÉ",
    category: "IA",
    subjectsCount: 2,
    description:
      "Résolution de la Global Privacy Assembly et lancement de Claude Ship. Le 20 novembre, la CNIL a présenté la résolution adoptée par la Global Privacy Assembly sur l’IA dans l’éducation. Le texte réunit onze principes de protection des données, avec une attention particulière aux enfants et aux publics vulnérables. C’est une résolution d’orientation.",
    sources: selectSources(19, 20, 21, 22),
    details: [
      "Le 20 novembre, la CNIL a présenté la résolution adoptée par la Global Privacy Assembly sur l’IA dans l’éducation. Le texte réunit onze principes de protection des données, avec une attention particulière aux enfants et aux publics vulnérables. C’est une résolution d’orientation.",
      "Le 23 novembre, Anthropic a présenté Claude Ship pour les dépôts GitHub des offres Team et Enterprise. Code Review est disponible de manière générale sur ce périmètre. PR Steward et Claude Approvals sont en bêta. Ce dernier peut approuver des changements selon une politique définie par l’équipe.",
      "Impact pour une école : Pour une école, ces deux faits alimentent des décisions distinctes. Le premier concerne les garanties pour les apprenants. Le second pose la question du contrôle des changements apportés au code.",
      "Recommandation (Contractuel) : Vérifier minimisation, sécurité et maîtrise des usages avant l’achat d’un outil pédagogique. Pour tout pilote d’approbation de code, commencer en observation et réserver les changements sensibles à une validation humaine.",
    ],
    recommendationStatus: "Contractuel",
    longDescription:
      "Le 20 novembre, la CNIL a présenté la résolution adoptée par la Global Privacy Assembly sur l’IA dans l’éducation. Le texte réunit onze principes de protection des données, avec une attention particulière aux enfants et aux publics vulnérables. C’est une résolution d’orientation. Le 23 novembre, Anthropic a présenté Claude Ship pour les dépôts GitHub des offres Team et Enterprise. Code Review est disponible de manière générale sur ce périmètre. PR Steward et Claude Approvals sont en bêta. Ce dernier peut approuver des changements selon une politique définie par l’équipe. Impact pour une école : Pour une école, ces deux faits alimentent des décisions distinctes. Le premier concerne les garanties pour les apprenants. Le second pose la question du contrôle des changements apportés au code. Recommandation (Contractuel) : Vérifier minimisation, sécurité et maîtrise des usages avant l’achat d’un outil pédagogique. Pour tout pilote d’approbation de code, commencer en observation et réserver les changements sensibles à une validation humaine.",
  },
  {
    id: 9,
    domainName: "Innovation marketing et plateformes publicitaires",
    code: "INNOV MKT",
    titre:
      "Pinterest et Spotify : deux évolutions d’inventaire dans Display & Video 360",
    badge: "À SURVEILLER",
    previousBadge: null,
    editorialStatus: "SUIVI",
    category: "INNOV MKT",
    subjectsCount: 2,
    description:
      "Suivi S45 pour Pinterest, conditions géographiques explicites pour Spotify. Le 18 novembre, Google a annoncé que les acheteurs de Display & Video 360 pouvaient accéder à des inventaires vidéo et display de Pinterest. La S45 avait traité Programmatic Deals côté Pinterest. Le fait nouveau est l’accès annoncé par Google dans sa plateforme d’achat.",
    sources: selectSources(23),
    details: [
      "Le 18 novembre, Google a annoncé que les acheteurs de Display & Video 360 pouvaient accéder à des inventaires vidéo et display de Pinterest. La S45 avait traité Programmatic Deals côté Pinterest. Le fait nouveau est l’accès annoncé par Google dans sa plateforme d’achat.",
      "Google annonce aussi l’accès à ses segments d’audience sur l’inventaire Spotify pour des acheteurs aux États-Unis et en Inde. Le billet ne documente pas d’éligibilité équivalente en France.",
      "Impact pour une école : Un canal d’achat supplémentaire est une option à qualifier selon le marché, les audiences, les formats et l’objectif de campagne d’une école.",
      "Recommandation (À arbitrer) : Vérifier l’éligibilité locale et demander des conditions d’achat et de mesure écrites avant tout essai média.",
    ],
    recommendationStatus: "À arbitrer",
    longDescription:
      "Le 18 novembre, Google a annoncé que les acheteurs de Display & Video 360 pouvaient accéder à des inventaires vidéo et display de Pinterest. La S45 avait traité Programmatic Deals côté Pinterest. Le fait nouveau est l’accès annoncé par Google dans sa plateforme d’achat. Google annonce aussi l’accès à ses segments d’audience sur l’inventaire Spotify pour des acheteurs aux États-Unis et en Inde. Le billet ne documente pas d’éligibilité équivalente en France. Impact pour une école : Un canal d’achat supplémentaire est une option à qualifier selon le marché, les audiences, les formats et l’objectif de campagne d’une école. Recommandation (À arbitrer) : Vérifier l’éligibilité locale et demander des conditions d’achat et de mesure écrites avant tout essai média.",
  },
];

const actions = [
  {
    id: 1,
    type: "PRIORITÉ",
    titre:
      "Confirmer le statut des correctifs applicables et tester les parcours critiques après mise à jour.",
    domaine: "CMS / SOCLE",
    responsable: "Exploitation web et sécurité",
    echeance: "Immédiat",
    recommendationStatus: "Immédiat",
  },
  {
    id: 2,
    type: "PROTECTION DES DONNÉES",
    titre:
      "Vérifier les finalités et les preuves de choix liées aux pixels de courriel.",
    domaine: "CDP / DATA",
    responsable: "CRM et délégué à la protection des données",
    echeance: "Avant le 3 décembre si contribution",
    recommendationStatus: "Immédiat",
  },
  {
    id: 3,
    type: "MESURE",
    titre:
      "Annoter toute rupture de calcul d’un indicateur dans les tableaux de bord.",
    domaine: "MESURE",
    responsable: "Mesure d’audience",
    echeance: "À la date de migration",
    recommendationStatus: "Règle de conception",
  },
  {
    id: 4,
    type: "RÉFÉRENCEMENT",
    titre:
      "Normaliser le panel de requêtes, les contextes et les traces de citation.",
    domaine: "ZERO-CLICK / GEO",
    responsable: "SEO et contenus",
    echeance: "Prochain cycle de mesure",
    recommendationStatus: "Règle de conception",
  },
  {
    id: 5,
    type: "CONCEPTION",
    titre:
      "Tester la pause, la reprise humaine et la confirmation d’actions sensibles.",
    domaine: "UX",
    responsable: "Produit et accessibilité",
    echeance: "Avant tout pilote",
    recommendationStatus: "Règle de conception",
  },
  {
    id: 6,
    type: "CONTRAT",
    titre:
      "Évaluer les garanties pour les étudiants et formaliser les décisions de code réservées à une personne.",
    domaine: "IA",
    responsable: "Pédagogie, sécurité et achats",
    echeance: "Avant tout contrat ou pilote",
    recommendationStatus: "Contractuel",
  },
  {
    id: 7,
    type: "ARBITRAGE",
    titre:
      "Vérifier l’éligibilité et la mesure de l’inventaire publicitaire par marché.",
    domaine: "INNOV MKT",
    responsable: "Communication et achats médias",
    echeance: "Avant prochain arbitrage média",
    recommendationStatus: "À arbitrer",
  },
];
const signauxEmergents = [
  {
    titre: "Recherche avec ou sans contexte personnel",
    description:
      "Disponibilité locale des fils temporaires et des connecteurs, et écart de réponse à requête identique.",
    horizon: "1–3 mois",
  },
  {
    titre: "Citations sociales selon le moteur",
    description:
      "Stabilité des domaines cités dans un panel local répété et ventilation par moteur.",
    horizon: "3 mois",
  },
  {
    titre: "Mesure par vue de page",
    description:
      "Date d’application du nouveau calcul et amplitude des ruptures dans les séries suivies.",
    horizon: "Prochain cycle de mesure",
  },
  {
    titre: "Conception d’agents supervisables",
    description:
      "Actions soumises à validation, capacité de pause et qualité des traces de décision.",
    horizon: "1–6 mois",
  },
  {
    titre: "Garanties pour l’IA pédagogique",
    description:
      "Publication de guides découlant de la résolution et inscription de critères vérifiables dans les achats.",
    horizon: "3–6 mois",
  },
  {
    titre: "Inventaire programmatique élargi",
    description:
      "Éligibilité de comptes locaux, conditions d’achat et disponibilité des rapports de diffusion.",
    horizon: "Avant campagne",
  },
];
const tendancesPassees = [
  {
    titre: "S42 — Gouvernance du JSON-LD",
    description:
      "Garder un responsable, une provenance et une règle de mise à jour pour les données publiées.",
  },
  {
    titre: "S43 — Attribution des visites IA",
    description:
      "L’incident sur les paramètres UTM reste une annotation de mesure lorsque les séries historiques sont comparées.",
  },
  {
    titre: "S43 — Cas Currys",
    description:
      "Le cas primé par l’IPA reste un repère pour demander une méthode d’incrémentalité et l’accès à ses hypothèses.",
  },
  {
    titre: "S44 — Sécurité du socle PHP",
    description:
      "Les bulletins d’octobre restent liés à leurs correctifs d’origine. Les publications de novembre ont leurs propres avis.",
  },
  {
    titre: "S45 — Identité des agents",
    description:
      "Les principes du NIST sur l’identité, l’autorisation et la révocation restent des critères de revue de conception.",
  },
  {
    titre: "S45 — Programmatic Deals de Pinterest",
    description:
      "L’annonce Pinterest d’octobre reste le point de départ du suivi de l’accès dans Display & Video 360.",
  },
];

const critiques = domaines.filter(domaine => domaine.badge === "CRITIQUE");
const importants = domaines.filter(domaine => domaine.badge === "IMPORTANT");

export const veilleS48 = {
  week: registry.week,
  year: registry.year,
  publicationDate: dateFormat.format(
    new Date(`${registry.publicationDate}T00:00:00Z`)
  ),
  collectionWindow: "17 au 24 novembre 2026 inclus",
  shareDescription:
    "Pour une école : correctifs du socle web, pixels de courriel, mesure d’audience et gouvernance de l’IA dans l’éducation.",
  domainsCount: domaines.length,
  domainsTotal: 9,
  sourcesCount: sources.length,
  criticalCount: critiques.length,
  importantCount: importants.length,
  actionsCount: actions.length,
  emergingCount: signauxEmergents.length,
  caseStudiesCount: registry.caseStudiesCount,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "Socle web — vérifier les correctifs de novembre",
  },
  statDominante: {
    chiffre: "20/25",
    titre: "Score de gravité publié par l’équipe Drupal",
    description:
      "Le 18 novembre, l’équipe de sécurité de Drupal a publié un avis de gravité 20/25 et un correctif. Elle indique avoir reçu un signalement d’exploitation sur des sites en production dès le 19 novembre. La même semaine, WordPress et PHP ont publié leurs propres correctifs, ce qui justifie de vérifier en priorité les composants effectivement présents.",
    source: selectSources(8)[0],
  },
  syntheseExecutive:
    "Sur le web, Google déploie les fils temporaires dans AI Mode et commence à ouvrir la connexion facultative à Wallet. Semrush observe des évolutions opposées du volume de citations sociales dans les réponses Google et ChatGPT, sur un panel américain. Les correctifs Drupal, WordPress et PHP donnent la priorité à la vérification des composants et à la recette des mises à jour. Côté données, la CNIL sollicite des retours sur les pixels de courriel jusqu’au 3 décembre et Matomo change le calcul du temps moyen sur une page. Côté IA, la résolution sur l’éducation fournit des repères pour les achats, alors que les agents de Google et d’Anthropic rendent les permissions et la validation humaine plus concrètes. En marketing, Google annonce l’accès programmatique à des inventaires Pinterest dans Display & Video 360, avec un périmètre distinct pour Spotify.",
  dashboardDetails: {
    domaines: domaines.map(domaine => domaine.domainName),
    sources: sources.map(source => source.nom),
    critiques: critiques.map(domaine => domaine.titre),
    importants: importants.map(domaine => domaine.titre),
    actions: actions.map(action => action.titre),
    emergents: signauxEmergents.map(signal => signal.titre),
  },
  domaines,
  measurement: undefined,
  caseStudies: [],
  bonus: {
    id: 10,
    label: "BONUS #10 — ROBOTIQUE",
    code: "ROBOTIQUE",
    titre: "À Lille, la robotique souple passe par la simulation",
    badge: "BONUS",
    previousBadge: null,
    editorialStatus: "ACTUALITÉ",
    chiffre: "23–27 NOV.",
    statLabel: "SOFA Week à Lille",
    description:
      "La SOFA Week est programmée à Lille du 23 au 27 novembre. Le consortium SOFA et le laboratoire CRIStAL listent une formation à la simulation de robots souples le 23, puis un symposium le 24. L’atelier avancé combine des bases sur les corps déformables et la construction d’une première simulation. Le symposium prévoit des présentations de recherche et des démonstrations. L’intérêt pédagogique tient au passage d’un modèle à un essai simulé, avant de décider quel prototype physique mérite d’être construit. Les deux pages décrivent un programme et ne donnent aucun résultat de performance.",
    sources: selectSources(24, 25),
    source: selectSources(24)[0],
    details: [
      "Le programme indique une formation à la simulation robotique le 23 novembre.",
      "Le symposium du 24 prévoit des présentations de recherche et des démonstrations.",
    ],
    perspective:
      "Ce qu’on en retient : La simulation donne aux étudiants un moyen de comparer des hypothèses de mouvement avant de concevoir une expérience sur un robot réel.",
    longDescription:
      "La SOFA Week est programmée à Lille du 23 au 27 novembre. Le consortium SOFA et le laboratoire CRIStAL listent une formation à la simulation de robots souples le 23, puis un symposium le 24. L’atelier avancé combine des bases sur les corps déformables et la construction d’une première simulation. Le symposium prévoit des présentations de recherche et des démonstrations. L’intérêt pédagogique tient au passage d’un modèle à un essai simulé, avant de décider quel prototype physique mérite d’être construit. Les deux pages décrivent un programme et ne donnent aucun résultat de performance. La simulation donne aux étudiants un moyen de comparer des hypothèses de mouvement avant de concevoir une expérience sur un robot réel.",
  },
  actions,
  signauxEmergents,
  tendancesPassees,
  sources,
};
