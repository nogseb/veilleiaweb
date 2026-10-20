# Recherche — Bonus robotique

**Fenêtre stricte : 2026-10-13 au 2026-10-19 inclus**  
**Domaine :** robotique, futuriste, fun fact geek avec données vérifiables  
**Conclusion : qualifiée**

## Sujet retenu

### LIBERO-PeRM : benchmark de manipulation robotique personnalisée

- **Date de soumission :** 2026-10-15 (UTC), donc dans la fenêtre demandée.
- **Source :** arXiv, dépôt de recherche ouvert reconnu.
- **Titre exact :** *LIBERO-PeRM: Benchmarking Personalized Robotic Manipulation*.
- **Faits attribués aux auteurs :** l’article présente LIBERO-PeRM comme un benchmark de l’apprentissage des préférences pour les agents incarnés. Il distingue l’accomplissement de la tâche de la satisfaction de préférences. Le benchmark couvre cinq questions : suivi de préférences en zero-shot, apprentissage d’une préférence à partir de démonstrations, efficacité d’apprentissage quand le nombre de démonstrations augmente, généralisation à d’autres agencements et tâches, et composition ou conflit entre préférences. Les auteurs indiquent une taxonomie de préférences observables (mouvement, compétence et choix liés au profil utilisateur), limitée aux préférences exprimables en langage et instanciables dans LIBERO sans changer l’objectif de la tâche. Leur pipeline produit des paires de démonstrations avec et sans préférence. Ils créent **cinq suites de tâches et 312 tâches**, avec démonstrations, métadonnées et métriques de satisfaction des préférences. Selon leurs expériences, les politiques VLA actuelles ont des difficultés en personnalisation zero-shot ; le supervised fine-tuning rend les préférences apprenables ; l’entraînement mixte conserve mieux l’absence de préférence que l’adaptation séquentielle et améliore les performances avec des invites contextuelles par rapport à l’entraînement centré sur les préférences, mais peut affaiblir l’apprentissage des préférences de mouvement. La généralisation, la décomposition et la gestion des conflits restent difficiles.
- **Limites :** il s’agit d’un preprint arXiv, pas d’une validation éditoriale définitive. Les résultats décrits sont expérimentaux et portent sur un environnement de simulation LIBERO ; ils ne démontrent pas une performance équivalente sur des robots physiques en conditions domestiques. Les formulations « current VLA policies » et les comparaisons de performance doivent être lues dans le périmètre expérimental de l’article ; aucun chiffre de taux de réussite n’est repris ici car le résumé consulté ne les détaille pas.

## Sources retenues et lecture des URL

### [1] arXiv — fiche de l’article
- **URL :** https://arxiv.org/abs/2610.22372
- **Titre :** *LIBERO-PeRM: Benchmarking Personalized Robotic Manipulation*
- **Date :** 2026-10-15 (soumission v1 à 17:59:59 UTC ; la page affiche « Submitted on 15 Oct 2026 »).
- **Pertinence :** source primaire contenant le résumé, la date de soumission, le périmètre du benchmark, les cinq suites et les 312 tâches, ainsi que les conclusions expérimentales citées ci-dessus.
- **Limite :** preprint ; les résultats et leur portée restent ceux de l’étude et de sa simulation.

### [2] arXiv — liste Robotics, soumissions récentes
- **URL :** https://arxiv.org/list/cs.RO/recent
- **Titre :** *Robotics — Authors and titles for recent submissions*
- **Date consultée :** 2026-10-19 ; la page liste notamment les soumissions du 15 et du 16 octobre 2026.
- **Pertinence :** contrôle de la présence de l’article dans la période et de son classement dans la catégorie Robotics ; la fiche détaillée [1] reste la source des faits.
- **Limite :** page d’index, non source des résultats détaillés ; elle ne remplace pas la lecture de la fiche primaire.

## Exclusions

- **Faraday Future / FF Nova (The Next Web, 2026-10-16)** : contenu dans la fenêtre et factuellement détaillé, mais The Next Web ne figure pas dans la liste des éditeurs explicitement reconnus par le commanditaire. Exclu du corpus autorisé. La page indique en outre que The Next Web n’a pas vérifié indépendamment l’affirmation marketing selon laquelle Nova serait le premier robot humanoïde d’IA incarnée vendu aux États-Unis sous 2 500 dollars.
- **Engineering.com, 2026-10-16 — FF launches Nova humanoid robots** : éditeur non présent dans la liste des sources autorisées ; exclu.
- **MIT Technology Review, 2026-10-08 — AI breakthroughs in robotics won't change your life any time soon** : source autorisée mais antérieure au 13 octobre ; exclu pour non-respect de la fenêtre stricte.
- **MIT News, articles du 2026-10-07 et antérieurs affichés sur la page Robotics** : source institutionnelle pertinente, mais aucun article affiché dans la page consultée n’est daté du 13 au 19 octobre ; exclus pour date hors fenêtre.
- **Événements, calendriers et pages promotionnelles** (Robotics Disrupt, IROS, RoboBusiness, VEX, etc.) : annonces d’événements ou pages de calendrier, sans actualité robotique vérifiable répondant au critère éditorial ; exclus.
- **Articles de presse ou blogs faibles/non autorisés repérés dans les résultats** : exclus lorsque l’éditeur ne figure pas parmi les sources autorisées, ou lorsque la date, la méthode ou la vérification indépendante ne satisfaisait pas les critères.

## Évaluation finale

Le sujet arXiv est retenu car il est directement robotique, publié dans la fenêtre stricte, consulté sur son URL primaire et appuyé par des données méthodologiques explicites (cinq suites, 312 tâches, métriques de satisfaction). Aucun cas marketing n’est retenu : il n’existe pas ici de cas comportant simultanément une marque, une période, un mécanisme et un KPI chiffré vérifiable dans une source autorisée.

## Référence

[1]: https://arxiv.org/abs/2610.22372 "LIBERO-PeRM: Benchmarking Personalized Robotic Manipulation"
[2]: https://arxiv.org/list/cs.RO/recent "Robotics — arXiv recent submissions"
