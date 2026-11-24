# Veille IA & Web — S48 2026

**Édition du 24 novembre 2026** · Veille du **17 au 24 novembre inclus**, arrêtée le 24 novembre en heure de Paris · **9/9 domaines** · **25 sources**

## Signal majeur

> **20/25 — Score de gravité publié par l’équipe Drupal**
>
> Le 18 novembre, l’équipe de sécurité de Drupal a publié un avis de gravité 20/25 et un correctif. Elle indique avoir reçu un signalement d’exploitation sur des sites en production dès le 19 novembre. La même semaine, WordPress et PHP ont publié leurs propres correctifs, ce qui justifie de vérifier en priorité les composants effectivement présents. [8](#source-8) [9](#source-9) [10](#source-10)

## Tableau de bord

| Domaines | Sources uniques | Critique | Importants | À surveiller | Actions | Signaux émergents | Cas d’école | Bonus |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 9/9 | 25 | 1 | 4 | 4 | 7 | 6 | 0 | 1 |

## Synthèse exécutive

Sur le web, Google déploie les fils temporaires dans AI Mode et commence à ouvrir la connexion facultative à Wallet. [1](#source-1) [2](#source-2) Semrush observe des évolutions opposées du volume de citations sociales dans les réponses Google et ChatGPT, sur un panel américain. [4](#source-4) [5](#source-5) Les correctifs Drupal, WordPress et PHP donnent la priorité à la vérification des composants et à la recette des mises à jour. [8](#source-8) [9](#source-9) [10](#source-10) Côté données, la CNIL sollicite des retours sur les pixels de courriel jusqu’au 3 décembre et Matomo change le calcul du temps moyen sur une page. [14](#source-14) [16](#source-16) [17](#source-17) Côté IA, la résolution sur l’éducation fournit des repères pour les achats, alors que les agents de Google et d’Anthropic rendent les permissions et la validation humaine plus concrètes. [18](#source-18) [19](#source-19) [21](#source-21) En marketing, Google annonce l’accès programmatique à des inventaires Pinterest dans Display & Video 360, avec un périmètre distinct pour Spotify. [23](#source-23)

## Analyses par domaine

### 1. Moteurs de réponse IA — AI Mode déploie les fils temporaires et amorce la connexion à Wallet

**À SURVEILLER · ACTUALITÉ**

_Deux réglages de recherche aux effets différents sur le contexte de réponse_

Le 17 novembre, Google a annoncé le déploiement mondial des fils temporaires sur navigateur mobile et ordinateur, dans les langues déjà prises en charge par AI Mode. Ces échanges restent hors historique et ne contribuent pas à la personnalisation future selon Google. Le 23 novembre, Google a annoncé le début du déploiement de la connexion facultative de Wallet à Personal Intelligence. Drive et l’application Gemini sont annoncés pour les semaines suivantes. La disponibilité de ces connexions en France reste à vérifier.

**Impact pour une école.** Une même question sur un programme peut être posée avec des contextes différents. Un suivi de visibilité gagne à documenter le mode utilisé.

**Recommandation · Indicatif.** Consigner le marché, la langue et le mode de personnalisation dans les relevés. Tester les questions sur les programmes sans saisir de données de candidature.

- <a name="source-1"></a>[Temporary threads are now available in AI Mode in Search](https://blog.google/products-and-platforms/products/search/temporary-threads-ai-mode/) · Google · 17 novembre 2026
- <a name="source-2"></a>[Tailored Google Search with Personal Intelligence apps](https://blog.google/products-and-platforms/products/search/google-search-personal-intelligence-apps/) · Google · 23 novembre 2026
- <a name="source-3"></a>[Google Search’s AI Mode can now tap into Drive and Wallet for more personalized responses](https://techcrunch.com/2026/11/23/google-searchs-ai-mode-can-now-tap-into-drive-and-wallet-for-more-personalized-responses/) · TechCrunch · 23 novembre 2026

### 2. Zero-click et GEO — Les plateformes IA citent différemment les mêmes domaines sociaux

**IMPORTANT · ACTUALITÉ**

_Étude Semrush sur les volumes de citations de 18 domaines_

Le 23 novembre, Semrush a publié une étude sur 18 domaines sociaux ou de contenus d’utilisateurs, selon des requêtes américaines de janvier à août 2026. Entre janvier et août, l’éditeur rapporte une hausse de 52 % du volume agrégé de citations pour AI Overviews, AI Mode et Gemini, et une baisse de 44 % pour ChatGPT. Les résultats portent sur les volumes de ce panel par domaine. La part dans toutes les citations, les réponses consultées sans clic et les conversions exigent d’autres données. Semrush commercialise des outils de suivi de la visibilité IA.

**Impact pour une école.** Le moteur d’origine et les répétitions du test comptent lorsqu’une école suit les sources qui parlent de ses programmes.

**Recommandation · Règle de conception.** Garder un panel stable de requêtes françaises et anglaises et noter, pour chaque moteur, la date, la source citée et le domaine. Mesurer les visites séparément.

- <a name="source-4"></a>[AI citations to social media & UGC grew 52% on Google’s AI platforms, fell 44% on ChatGPT](https://www.semrush.com/blog/ai-citations-social-media-ugc/) · Semrush · 23 novembre 2026
- <a name="source-5"></a>[Google AI cites social media 52% more, ChatGPT 44% less: Study](https://searchengineland.com/google-ai-cites-social-media-more-chatgpt-less-study-502787) · Search Engine Land · 23 novembre 2026

### 3. Données structurées et accès des robots — Le W3C actualise ses brouillons de modélisation RDF

**À SURVEILLER · ACTUALITÉ**

_Un vocabulaire de description et des exemples pour les données liées_

Le W3C a publié un projet de guide RDF le 19 novembre et un nouveau brouillon de RDF Schema le 23 novembre. Le guide introduit notamment les triplets qui relient deux éléments. Le schéma décrit le vocabulaire des classes et des propriétés utilisé pour modéliser ces relations. Les deux publications restent des projets du groupe RDF & SPARQL. Les règles d’éligibilité aux résultats enrichis et d’accès des robots relèvent de leurs propres documentations.

**Impact pour une école.** Ces documents peuvent servir de référence si une école modélise des liens stables entre programmes, campus, sessions et conditions d’admission.

**Recommandation · Indicatif.** Documenter les identifiants et relations du catalogue avant toute évolution de balisage. Baser les corrections SEO sur les règles publiées du moteur concerné.

- <a name="source-6"></a>[RDF 1.2 Schema](https://www.w3.org/TR/2026/WD-rdf12-schema-20261123/) · W3C · 23 novembre 2026
- <a name="source-7"></a>[RDF 1.2 Primer](https://www.w3.org/TR/2026/DNOTE-rdf12-primer-20261119/) · W3C · 19 novembre 2026

### 4. CMS et socle technique — Correctifs Drupal, WordPress et PHP à vérifier en priorité

**CRITIQUE · ACTUALITÉ**

_Mises à jour disponibles et signalement public d’exploitation sur Drupal_

Drupal et WordPress ont publié des correctifs le 18 novembre. Pour l’un de ses avis, l’équipe Drupal publie un score de 20/25 et indique avoir reçu un signalement d’exploitation sur des sites en production dès le 19 novembre. PHP a publié des correctifs pour quatre branches le 19 novembre. Le CERT-FR a relayé les avis Drupal, WordPress et PHP le même jour. Le score 20/25 relève de la grille Drupal et concerne l’avis cité.

**Impact pour une école.** Si un composant concerné figure dans le périmètre d’une école, il faut confirmer son statut de correction et vérifier les parcours après mise à jour.

**Recommandation · Immédiat.** Faire contrôler l’applicabilité des bulletins, planifier les correctifs nécessaires et conserver la preuve de la recette des formulaires et des parcours critiques.

- <a name="source-8"></a>[Drupal core — avis de sécurité hautement critique](https://www.drupal.org/sa-core-2026-017) · Drupal Security Team · 18 novembre 2026
- <a name="source-9"></a>[WordPress — publication d’une mise à jour de sécurité](https://wordpress.org/news/2026/11/wordpress-7-1-5-release/) · WordPress.org · 18 novembre 2026
- <a name="source-10"></a>[Archives des publications PHP 2026 — correctifs de novembre](https://www.php.net/archive/2026.php#2026-11-19-4) · PHP.net · 19 novembre 2026
- <a name="source-11"></a>[Multiples vulnérabilités dans PHP](https://cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1580/) · CERT-FR · 19 novembre 2026
- <a name="source-12"></a>[Multiples vulnérabilités dans Drupal](https://cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1579/) · CERT-FR · 19 novembre 2026
- <a name="source-13"></a>[Multiples vulnérabilités dans WordPress](https://cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1574/) · CERT-FR · 19 novembre 2026

### 5. Data first-party, consentement, navigateurs — La CNIL ouvre un retour d’expérience sur les pixels de suivi par courriel

**IMPORTANT · ACTUALITÉ**

_Les expéditeurs et fournisseurs peuvent contribuer jusqu’au 3 décembre_

Le 20 novembre, la CNIL a invité les expéditeurs et fournisseurs à faire remonter leurs difficultés, coûts, changements de pratiques et solutions alternatives jusqu’au 3 décembre. La recommandation publiée le 14 avril demeure le texte de référence. Elle traite la finalité des pixels, les cas où le consentement est nécessaire et les conditions d’exemption. L’échéance de décembre concerne la contribution au retour d’expérience.

**Impact pour une école.** Une école peut identifier ce que mesurent les pixels de ses courriels, qui reçoit les données et comment les choix des destinataires sont appliqués.

**Recommandation · Immédiat.** Revoir les finalités et les mécanismes de choix avec le délégué à la protection des données. Rassembler des observations si une contribution est envisagée.

- <a name="source-14"></a>[Pixels de suivi dans les courriels : la CNIL sollicite un premier retour d’expérience sur sa recommandation](https://www.cnil.fr/fr/recommandation-pixels-retour-dexperience) · CNIL · 20 novembre 2026
- <a name="source-15"></a>[Recommandation relative aux pixels de suivi dans les courriers électroniques](https://www.cnil.fr/sites/default/files/2026-04/recommandation-pixels_de_suivi.pdf) · CNIL · 14 avril 2026

### 6. Mesure et attribution — Matomo change le calcul du temps moyen sur la page

**IMPORTANT · ACTUALITÉ**

_Une rupture de série à annoter à la date d’application_

Dans sa publication du 23 novembre, Matomo indique que le temps moyen sur la page est calculé par vue de page au lieu de la visite. L’éditeur date le changement du 18 novembre pour son service hébergé et du jour de mise à niveau pour les installations auto-hébergées. Matomo indique que les données antérieures ne sont pas recalculées. Une variation à la date de migration peut donc provenir de la nouvelle définition.

**Impact pour une école.** Si une école utilise un indicateur dont le calcul change, les comparaisons avant et après migration demandent une annotation et une vérification du dénominateur.

**Recommandation · Règle de conception.** Conserver la définition précédente, annoter la date d’effet et revoir les seuils d’alerte après observation d’une période comparable.

- <a name="source-16"></a>[Matomo — notes de la mise à jour majeure de novembre](https://matomo.org/changelog/matomo-6-0-0/) · Matomo · 23 novembre 2026
- <a name="source-17"></a>[Matomo — changements de calcul et dates d’application](https://fr.matomo.org/blog/2026/11/matomo-6-new-version-numbers-trust-faster/) · Matomo · 23 novembre 2026

### 7. UX conversationnelle et web agentique — Gemini déploie le pilotage d’applications sur Mac

**À SURVEILLER · ACTUALITÉ**

_Aperçu en direct, pause, périmètre d’accès et confirmation_

Le 19 novembre, Google a annoncé le déploiement progressif de Computer Use dans l’application Gemini pour Mac, en anglais aux États-Unis et pour des comptes personnels éligibles. Google décrit une fenêtre de travail isolée avec un aperçu en direct dans la discussion. La personne choisit les applications accessibles, peut interrompre le déroulement et confirme certaines actions. La source ne fournit pas de résultat d’accessibilité ou de fiabilité en situation réelle.

**Impact pour une école.** Une école qui conçoit un service agentique peut s’appuyer sur ces contrôles pour préciser ce que la personne doit pouvoir voir, arrêter et reprendre.

**Recommandation · Règle de conception.** Tester sur données fictives la visibilité du périmètre, la pause, l’annulation, la confirmation des actions sensibles et la reprise humaine.

- <a name="source-18"></a>[Automate Mac tasks with Gemini computer use](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/) · Google · 19 novembre 2026

### 8. IA en production et gouvernance — IA dans l’éducation et approbation automatisée : deux décisions de gouvernance

**IMPORTANT · ACTUALITÉ**

_Résolution de la Global Privacy Assembly et lancement de Claude Ship_

Le 20 novembre, la CNIL a présenté la résolution adoptée par la Global Privacy Assembly sur l’IA dans l’éducation. Le texte réunit onze principes de protection des données, avec une attention particulière aux enfants et aux publics vulnérables. C’est une résolution d’orientation. Le 23 novembre, Anthropic a présenté Claude Ship pour les dépôts GitHub des offres Team et Enterprise. Code Review est disponible de manière générale sur ce périmètre. PR Steward et Claude Approvals sont en bêta. Ce dernier peut approuver des changements selon une politique définie par l’équipe.

**Impact pour une école.** Pour une école, ces deux faits alimentent des décisions distinctes. Le premier concerne les garanties pour les apprenants. Le second pose la question du contrôle des changements apportés au code.

**Recommandation · Contractuel.** Vérifier minimisation, sécurité et maîtrise des usages avant l’achat d’un outil pédagogique. Pour tout pilote d’approbation de code, commencer en observation et réserver les changements sensibles à une validation humaine.

- <a name="source-19"></a>[IA et éducation : une résolution mondiale pour la protection des données](https://www.cnil.fr/fr/gpa-ia-education) · CNIL · 20 novembre 2026
- <a name="source-20"></a>[Résolution sur l’intelligence artificielle dans le secteur de l’éducation](https://globalprivacyassembly.com/wp-content/uploads/2026/11/DEWG-GPA-Resolution-sur-lAI-dans-le-secteur-de-leducation.20261118-FRA_.pdf) · Global Privacy Assembly · texte accessible au plus tard le 20 novembre 2026
- <a name="source-21"></a>[Introducing Claude Ship](https://claude.com/resources/articles/introducing-claude-ship) · Anthropic · 23 novembre 2026
- <a name="source-22"></a>[Anthropic launches Claude Ship, letting AI agents review, fix, and approve code changes](https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/) · TechCrunch · 23 novembre 2026

### 9. Innovation marketing et plateformes publicitaires — Pinterest et Spotify : deux évolutions d’inventaire dans Display & Video 360

**À SURVEILLER · SUIVI**

_Suivi S45 pour Pinterest, conditions géographiques explicites pour Spotify_

Le 18 novembre, Google a annoncé que les acheteurs de Display & Video 360 pouvaient accéder à des inventaires vidéo et display de Pinterest. La S45 avait traité Programmatic Deals côté Pinterest. Le fait nouveau est l’accès annoncé par Google dans sa plateforme d’achat. Google annonce aussi l’accès à ses segments d’audience sur l’inventaire Spotify pour des acheteurs aux États-Unis et en Inde. Le billet ne documente pas d’éligibilité équivalente en France.

**Impact pour une école.** Un canal d’achat supplémentaire est une option à qualifier selon le marché, les audiences, les formats et l’objectif de campagne d’une école.

**Recommandation · À arbitrer.** Vérifier l’éligibilité locale et demander des conditions d’achat et de mesure écrites avant tout essai média.

- <a name="source-23"></a>[Google Marketing Platform Drop — novembre](https://blog.google/products/marketingplatform/360/google-marketing-platform-drop-november/) · Google Marketing Platform · 18 novembre 2026

## Cas d’école

Aucun nouveau cas retenu. Les résultats des campagnes repérées ne sont pas suffisamment documentés par une source indépendante. [Arbitrages de sélection](cas-ecole.md).

## Bonus #10 — À Lille, la robotique souple passe par la simulation

La SOFA Week est programmée à Lille du 23 au 27 novembre. Le consortium SOFA et le laboratoire CRIStAL listent une formation à la simulation de robots souples le 23, puis un symposium le 24. L’atelier avancé combine des bases sur les corps déformables et la construction d’une première simulation. Le symposium prévoit des présentations de recherche et des démonstrations. L’intérêt pédagogique tient au passage d’un modèle à un essai simulé, avant de décider quel prototype physique mérite d’être construit. Les deux pages décrivent un programme et ne donnent aucun résultat de performance.

**Ce qu’on en retient.** La simulation donne aux étudiants un moyen de comparer des hypothèses de mouvement avant de concevoir une expérience sur un robot réel.

- <a name="source-24"></a>[SOFA Week 2026 — programme de la semaine](https://www.sofa-framework.org/sofa-events/sofa-week-2026/) · SOFA Consortium · ouverture programmée le 23 novembre 2026
- <a name="source-25"></a>[SOFA Week 2026 — annonce de l’événement](https://www.cristal.univ-lille.fr/actualites/2026-11-23-1192/?force_lang=true) · CRIStAL, Université de Lille · ouverture programmée le 23 novembre 2026

## Actions prioritaires

| Action | Domaine | Équipe | Échéance |
|---|---|---|---|
| Confirmer le statut des correctifs applicables et tester les parcours critiques après mise à jour. | CMS / SOCLE | Exploitation web et sécurité | Immédiat |
| Vérifier les finalités et les preuves de choix liées aux pixels de courriel. | CDP / DATA | CRM et délégué à la protection des données | Avant le 3 décembre si contribution |
| Annoter toute rupture de calcul d’un indicateur dans les tableaux de bord. | MESURE | Mesure d’audience | À la date de migration |
| Normaliser le panel de requêtes, les contextes et les traces de citation. | ZERO-CLICK / GEO | SEO et contenus | Prochain cycle de mesure |
| Tester la pause, la reprise humaine et la confirmation d’actions sensibles. | UX | Produit et accessibilité | Avant tout pilote |
| Évaluer les garanties pour les étudiants et formaliser les décisions de code réservées à une personne. | IA | Pédagogie, sécurité et achats | Avant tout contrat ou pilote |
| Vérifier l’éligibilité et la mesure de l’inventaire publicitaire par marché. | INNOV MKT | Communication et achats médias | Avant prochain arbitrage média |

## Signaux émergents

| Tendance | Indicateur à suivre | Horizon |
|---|---|---|
| Recherche avec ou sans contexte personnel | Disponibilité locale des fils temporaires et des connecteurs, et écart de réponse à requête identique. | 1–3 mois |
| Citations sociales selon le moteur | Stabilité des domaines cités dans un panel local répété et ventilation par moteur. | 3 mois |
| Mesure par vue de page | Date d’application du nouveau calcul et amplitude des ruptures dans les séries suivies. | Prochain cycle de mesure |
| Conception d’agents supervisables | Actions soumises à validation, capacité de pause et qualité des traces de décision. | 1–6 mois |
| Garanties pour l’IA pédagogique | Publication de guides découlant de la résolution et inscription de critères vérifiables dans les achats. | 3–6 mois |
| Inventaire programmatique élargi | Éligibilité de comptes locaux, conditions d’achat et disponibilité des rapports de diffusion. | Avant campagne |

## Mémoire stratégique

- **Gouvernance du JSON-LD.** Garder un responsable, une provenance et une règle de mise à jour pour les données publiées. [S42](../2026-W42/rapport.md)
- **Attribution des visites IA.** L’incident sur les paramètres UTM reste une annotation de mesure lorsque les séries historiques sont comparées. [S43](../2026-W43/rapport.md)
- **Cas Currys.** Le cas primé par l’IPA reste un repère pour demander une méthode d’incrémentalité et l’accès à ses hypothèses. [S43](../2026-W43/rapport.md)
- **Sécurité du socle PHP.** Les bulletins d’octobre restent liés à leurs correctifs d’origine. Les publications de novembre ont leurs propres avis. [S44](../2026-W44/rapport.md)
- **Identité des agents.** Les principes du NIST sur l’identité, l’autorisation et la révocation restent des critères de revue de conception. [S45](../2026-W45/rapport.md)
- **Programmatic Deals de Pinterest.** L’annonce Pinterest d’octobre reste le point de départ du suivi de l’accès dans Display & Video 360. [S45](../2026-W45/rapport.md)

## Journal de vérification

Contrôle sur les quatre éditions précédentes, S42 à S45. L’accès Pinterest dans Display & Video 360 est un suivi S45, daté du 18 novembre. Le compteur recense les URL externes retenues, texte de référence et bonus inclus. [Journal des recherches, exclusions et limites](journal.md) · [Registre des sources](sources.json).
