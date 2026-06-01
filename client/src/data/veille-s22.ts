export const veilleData = {
  week: 22,
  year: 2026,
  publicationDate: "26 mai 2026",
  domainsCount: 7,
  sourcesCount: 11,
  criticalCount: 2,
  importantCount: 3,
  actionsCount: 5,
  emergingCount: 4,

  signalMajeur: {
    label: "SIGNAL MAJEUR DE LA SEMAINE",
    title: "Google I/O 2026 : AI Mode franchit 1 milliard d'utilisateurs mensuels, la recherche devient agentique avec des agents autonomes 24/7 et un champ de recherche multimodal — la plus grande refonte en 25 ans.",
  },

  statDominante: {
    chiffre: "1 Md",
    titre: "UTILISATEURS MENSUELS GOOGLE AI MODE",
    description: "Un an apres son lancement, AI Mode depasse le milliard d'utilisateurs actifs mensuels. AI Overviews atteint 2,5 milliards. Google traite desormais 3,2 quadrillions de tokens par mois.",
  },

  syntheseExecutive: "La semaine 22 est dominee par les annonces de Google I/O 2026, qui actent la transition definitive du moteur de recherche vers un moteur de reponse agentique. AI Mode franchit le milliard d'utilisateurs, le champ de recherche accepte desormais des entrees multimodales, et des agents autonomes surveillent le web en continu pour les abonnes premium. Google clarifie simultanement que GEO et AEO ne sont que du SEO, invalidant plusieurs tactiques emergentes. Sur le plan reglementaire, l'EU AI Act accorde un sursis de 16 mois pour les systemes a haut risque, tandis qu'Anthropic consolide sa position B2B avec le recrutement de Karpathy et une alliance strategique avec KPMG deployant Claude aupres de 276 000 collaborateurs.",

  dashboardDetails: {
    domaines: ["Google AI", "Zero-Click", "Schema.org", "DXP / MarTech", "IA / Gouvernance"],
    sources: ["Google Blog", "Google Developers", "Search Engine Land", "Search Engine Roundtable", "Elementera", "Strike Social", "ChiefMartec", "Technology Zone", "Anthropic", "KPMG", "EU Council"],
    critiques: ["Google AI : AI Mode franchit 1 milliard d'utilisateurs", "IA / Gouvernance : EU AI Act sursis de 16 mois + Karpathy rejoint Anthropic"],
    importants: ["Zero-Click : Google confirme GEO et AEO sont du SEO", "Schema.org : FAQ rich results retires + Universal Cart", "DXP / MarTech : Peak MarTech atteint — specialisation verticale"],
    actions: ["Arreter les tactiques GEO specifiques", "Reorienter vers le contenu E-E-A-T", "Retirer les balises FAQPage", "Mettre a jour le retroplanning EU AI Act", "Auditer l'architecture MarTech"],
    emergents: ["Agents informationnels autonomes", "Fin de la dichotomie Search/Chat", "Specialisation verticale des CMS", "Deploiement systemique de l'IA en entreprise"],
  },

  domaines: [
    { id: 1, code: "GOOGLE AI", titre: "GOOGLE I/O 2026 : AI MODE FRANCHIT 1 MILLIARD D'UTILISATEURS", badge: "CRITIQUE", previousBadge: "CRITIQUE", description: "Google I/O 2026 redefinit l'architecture de la recherche. AI Mode depasse 1 milliard d'utilisateurs mensuels, AI Overviews atteint 2,5 milliards. Le champ de recherche accepte des entrees multimodales et des agents autonomes surveillent le web 24/7.", category: "GOOGLE", sources: [{ nom: "Google Blog", url: "https://blog.google/technology/ai/io-2026-keynote/" }, { nom: "Google Developers", url: "https://developers.google.com/search/blog/2026/05/google-io-search" }], details: ["AI Mode depasse 1 milliard d'utilisateurs mensuels actifs", "AI Overviews atteint 2,5 milliards d'utilisateurs", "Google traite 3,2 quadrillions de tokens par mois", "Champ de recherche multimodal (texte, image, voix)", "Agents autonomes 24/7 pour les abonnes premium", "Plus grande refonte de la recherche en 25 ans"] },
    { id: 2, code: "ZERO-CLICK", titre: "GOOGLE CONFIRME : GEO ET AEO SONT DU SEO — GUIDE OFFICIEL", badge: "IMPORTANT", previousBadge: "CRITIQUE", description: "Google publie un guide officiel invalidant la necessite de disciplines separees (GEO/AEO). Les fichiers llms.txt, le chunking pour IA et la reecriture en style IA sont declares inutiles. Le contenu non-commoditise reste le seul levier durable.", category: "SEO", sources: [{ nom: "Google Developers", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" }, { nom: "Search Engine Land", url: "https://searchengineland.com/google-geo-aeo-seo-guide-official-2026/" }], details: ["Google publie un guide officiel confirmant GEO = SEO", "Les fichiers llms.txt declares inutiles", "Le chunking pour IA et la reecriture en style IA sont inutiles", "Le contenu non-commoditise reste le seul levier durable", "Pas de discipline separee necessaire pour le GEO/AEO"] },
    { id: 3, code: "SCHEMA.ORG", titre: "FAQ RICH RESULTS RETIRES — UNIVERSAL CART IMPOSE UN NOUVEAU PIPELINE", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Google retire officiellement les FAQ rich results (7 mai). Schema.org v30.0 apporte des ajouts mineurs. Le veritable enjeu est Universal Cart, dont l'eligibilite depend du flux Merchant Center et non du balisage Schema.org seul.", category: "SEO", sources: [{ nom: "Search Engine Roundtable", url: "https://www.seroundtable.com/google-faq-rich-results-retired-41400.html" }, { nom: "Search Engine Land", url: "https://searchengineland.com/schema-org-v30-universal-cart-2026/" }], details: ["Google retire officiellement les FAQ rich results (effectif 7 mai 2026)", "Schema.org v30.0 : ajouts mineurs", "Universal Cart : eligibilite depend du flux Merchant Center", "Le balisage Schema.org seul ne suffit plus pour Universal Cart", "Nouveau pipeline d'integration requis"] },
    { id: 4, code: "DXP / MARTECH", titre: "PEAK MARTECH ATTEINT — LA SPECIALISATION VERTICALE COMME AVENIR", badge: "IMPORTANT", previousBadge: "IMPORTANT", description: "Le Martech Supergraphic 2026 revele une croissance quasi-nulle (+0,79%) avec 15 000+ outils. Les CMS se multiplient (+21%, 612 acteurs) mais la differenciation passe desormais par la specialisation verticale et l'expertise metier.", category: "ARCHI", sources: [{ nom: "ChiefMartec", url: "https://chiefmartec.com/2026/05/martech-supergraphic-2026/" }], details: ["Martech Supergraphic 2026 : croissance quasi-nulle (+0,79%)", "15 000+ outils MarTech recenses", "CMS : +21% de croissance, 612 acteurs", "La differenciation passe par la specialisation verticale", "L'expertise metier devient le facteur cle"] },
    { id: 5, code: "IA / GOUVERNANCE", titre: "EU AI ACT : SURSIS DE 16 MOIS — KARPATHY REJOINT ANTHROPIC", badge: "CRITIQUE", previousBadge: "IMPORTANT", description: "L'accord Omnibus VII reporte de 16 mois les obligations high-risk de l'EU AI Act (decembre 2027). Anthropic recrute Karpathy et signe une alliance strategique avec KPMG deployant Claude aupres de 276 000 collaborateurs.", category: "IA", sources: [{ nom: "Technology Zone", url: "https://www.technologyzone.eu/eu-ai-act-2026-compliance-guide-business/" }, { nom: "Anthropic", url: "https://www.anthropic.com/news/karpathy-joins-anthropic" }, { nom: "KPMG", url: "https://kpmg.com/xx/en/media/press-releases/2026/05/kpmg-anthropic-claude-deployment.html" }], details: ["Accord Omnibus VII : report de 16 mois des obligations high-risk", "Nouvelle echeance : decembre 2027 pour les systemes a haut risque", "Transparence maintenue pour decembre 2026", "Anthropic recrute Andrej Karpathy", "Alliance strategique KPMG-Anthropic : Claude deploye aupres de 276 000 collaborateurs"] },
  ],

  actions: [
    { id: 1, titre: "Arreter l'investissement dans les tactiques GEO specifiques (llms.txt, chunking IA) et recentrer sur le SEO fondamental et le contenu non-commoditise", domaine: "SEO / CONTENU", responsable: "EQUIPE SEO + EDITORIALE" },
    { id: 2, titre: "Reorienter la production editoriale vers le contenu base sur l'experience terrain et les donnees proprietaires (E-E-A-T), seul levier durable pour les citations IA", domaine: "CONTENU / SEO", responsable: "EQUIPE EDITORIALE" },
    { id: 3, titre: "Retirer l'implementation des balises FAQPage des priorites de developpement — impact nul dans les SERPs depuis le 7 mai 2026", domaine: "SEO / TECHNIQUE", responsable: "EQUIPE SEO + DEV" },
    { id: 4, titre: "Mettre a jour le retroplanning de conformite EU AI Act : report a decembre 2027 pour les systemes high-risk, vigilance maintenue sur transparence (decembre 2026)", domaine: "GOUVERNANCE IA", responsable: "DSI + JURIDIQUE" },
    { id: 5, titre: "Auditer l'architecture MarTech sous l'angle de la consolidation et de l'orchestration native — le marche a atteint son point de saturation", domaine: "ARCHI / MARTECH", responsable: "DSI + MARKETING OPS" },
  ],

  signauxEmergents: [
    { titre: "Agents informationnels autonomes", description: "Google lance des agents operant en arriere-plan 24/7 qui surveillent le web et poussent des syntheses proactives aux utilisateurs premium", horizon: "3-6 MOIS" },
    { titre: "Fin de la dichotomie Search/Chat", description: "La refonte du champ de recherche Google fusionne definitivement l'interface de requete par mots-cles et l'interface conversationnelle multimodale", horizon: "IMMEDIAT" },
    { titre: "Specialisation verticale des CMS", description: "La differenciation des plateformes de gestion de contenu ne se fait plus par les fonctionnalites techniques mais par l'expertise metier specifique a une industrie", horizon: "6-12 MOIS" },
    { titre: "Deploiement systemique de l'IA en entreprise", description: "L'accord KPMG/Anthropic illustre le passage de l'IA experimentale a l'infrastructure de base des services professionnels (276 000 utilisateurs)", horizon: "3-6 MOIS" },
  ],

  tendancesPassees: [
    { titre: "Erosion du trafic organique non-brande", description: "Confirmee par les metriques de zero-click sur AI Mode (93%), necessite un pivot vers la construction de marque (brand entity)" },
    { titre: "L'architecture composable comme standard", description: "La proliferation des outils MarTech (15 000+) rend l'approche API-first indispensable pour eviter la dette technique" },
    { titre: "La primaute des donnees first-party", description: "Renforcee par les exigences de personnalisation de l'IA et la depreciation continue des cookies tiers" },
    { titre: "La gouvernance IA par la gestion des risques", description: "Le glissement d'une approche purement technologique vers une approche de conformite et de securite de l'information (EU AI Act)" },
    { titre: "Cas d'ecole Klarna (S14 2026)", description: "L'automatisation de 66% des interactions service client par l'IA reste le benchmark de reference pour la reduction des couts operationnels" },
  ],
};

export type VeilleData = typeof veilleData;
export type Domaine = typeof veilleData.domaines[0];
