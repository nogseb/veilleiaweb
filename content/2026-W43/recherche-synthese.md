# Veille IA & Web — S43 2026 : synthèse de sélection

**Périmètre temporel strict : 13–19 octobre 2026.** Cette synthèse reprend uniquement les résultats validés fournis. Elle distingue les **domaines qualifiés**, les sujets **masqués** faute de signal vérifiable conforme, et un **Bonus robotique** traité hors classement des domaines.

## Périmètre de sélection

- **3 domaines qualifiés**, dans l’ordre éditorial ci-dessous.
- **1 Bonus distinct** : robotique.
- **10 URL distinctes retenues** au total : **8** rattachées aux trois domaines qualifiés et **2** au Bonus. Ce total comprend les URL de contexte ou d’index explicitement conservées avec leurs réserves ; il n’inclut pas les sources rejetées.
- **Aucun cas marketing** n’est retenu : aucun résultat ne réunit simultanément une marque, une période, un mécanisme, un KPI chiffré et une URL effectivement consultée.

## Domaines qualifiés — ordre de publication

### 1. Google AI Search (AI Overviews, AI Mode, SERPs génératives)

**Titre retenu :** Google renforce les liens et les sources dans AI Mode et AI Overviews

**Faits utilisables**

- Le **15 octobre 2026**, Google annonce avoir substantiellement accru la présence des liens inline dans ses expériences IA et commencer à les faire apparaître plus souvent plus haut dans les réponses.
- Google teste, pour certaines tâches ne reposant que sur une ou deux sources officielles, une section placée en haut de réponse qui explique l’utilité de chaque lien.
- Les carrousels d’articles récents sont déployés dans davantage de lieux et de langues à l’échelle mondiale ; ils peuvent mettre en avant les *Preferred Sources* de l’utilisateur.
- Les liens vers des articles connexes placés à la fin de certaines réponses IA deviennent plus visibles grâce à des vignettes d’images.
- Google teste dans AI Mode des noms cliquables de créateurs et d’éditeurs sur des résultats vidéo, renvoyant vers leurs profils Search.
- Google indique que le nombre de personnes utilisant *Preferred Sources* a été multiplié par plus de sept depuis le début de l’année.

**Signal majeur**

> Google modifie concrètement la place et la présentation des renvois vers le web dans AI Mode et AI Overviews : liens inline placés plus haut, sources officielles mises en contexte, contenus récents et profils d’éditeurs plus visibles. Ce signal est soutenu par l’annonce officielle du 15 octobre 2026.

**Sources retenues**

1. [Google — *More ways to connect with the web from Search*](https://blog.google/products-and-platforms/products/search/updates-ai-mode-overviews-explore-web/) — 15 octobre 2026.
2. [Search Engine Journal — *Google Puts Inline Links Higher In More AI Search Responses*](https://www.searchenginejournal.com/google-inline-links-higher-ai-search-responses/593089/) — 15 octobre 2026.
3. [Google Search Central — *Help your readers find your site through preferred sources in Google Search*](https://developers.google.com/search/docs/appearance/preferred-sources) — mise à jour du 18 septembre 2026, conservée uniquement comme contexte technique.

**Réserves**

- Google ne chiffre ni la hausse des liens inline, ni les lieux et langues concernés, et qualifie plusieurs évolutions de tests.
- Le chiffre « multiplié par plus de sept » ne comporte ni volume absolu ni méthode détaillée.
- L’article de Search Engine Journal repose principalement sur l’annonce Google et n’apporte pas de mesure indépendante de CTR ou de couverture.
- La documentation *Preferred Sources* est antérieure à la fenêtre : elle n’est pas une actualité hebdomadaire.

### 2. Schema.org et données structurées

**Titre retenu :** Google clarifie les données structurées et le W3C poursuit des travaux JSON-LD d’interopérabilité

**Faits utilisables**

- Le **13 octobre 2026**, Google retire le visuel **host group** de sa galerie, en précisant qu’il n’apparaît plus dans Google Search.
- Le **16 octobre**, Google ajoute une documentation dédiée aux **vehicle listing structured data**.
- Le **17 octobre**, Google rappelle dans la documentation **Article structured data** qu’il faut fournir le fuseau horaire et précise le comportement en l’absence de celui-ci.
- Dans l’activité JSON-LD du W3C, un commentaire du **15 octobre** concerne une pull request sur le remplacement de `sequence` par un chemin fondé sur `mf:includes`.
- Une issue ouverte le **17 octobre** dans `json-ld-streaming` porte sur un buffering imprévisible lié à des contextes scopés non propagés et à `@nest`.
- Le **18 octobre**, l’activité relève des travaux sur les **Language Maps** et une pull request sur la terminologie `lexicographical(ly)`.

**Sources retenues**

1. [Google Search Central — *Latest Google Search Documentation Updates*](https://developers.google.com/search/updates) — 17 octobre 2026.
2. [W3C — *JSON-LD Working Group - Activity*](https://www.w3.org/groups/wg/json-ld/activity/) — 18 octobre 2026.
3. [JSON-LD Community Group — *JSON-LD Requirements*](https://json-ld.org/requirements/latest/) — 13 octobre 2026.

**Réserves**

- Le journal Google est un journal de documentation : il ne mesure aucun impact sur les sites et ne fournit aucun KPI. La page indique aussi une mise à jour au 16 octobre UTC malgré une entrée datée du 17 octobre.
- Les issues, commentaires et pull requests du W3C sont des travaux en cours, non des changements normatifs adoptés ; la page est présentée comme bêta.
- Le document *JSON-LD Requirements* est expérimental et en cours ; la date du 13 octobre est visible dans l’indexation mais pas dans le corps textuel consulté.

### 3. Innovation marketing et cas d’école

**Titre retenu :** Le MarTech se recentre sur l’hybridation, la gouvernance et l’usage réel des stacks

**Faits utilisables**

- Le **13 octobre 2026**, CMSWire décrit une approche MarTech « deliberately hybrid » : streaming et batch, identités déterministes et probabilistes, règles métier et agents sont sélectionnés selon le cas d’usage.
- L’article précise que les systèmes agentiques peuvent prendre des décisions à faible risque, tandis que les décisions coûteuses, irréversibles ou engageant la marque doivent rester supervisées par un humain.
- Le **16 octobre**, CMSWire rapporte, en citant le **Gartner 2025 Marketing Technology Survey**, que les marketeurs utilisent **49 %** des capacités de leur stack MarTech, contre **33 %** en 2023 et **58 %** en 2020.
- CMSWire rapporte que le MarTech représente **19,4 %** des budgets marketing en 2026 et que **62 %** des CMO prévoient d’augmenter leurs dépenses MarTech.
- L’article attribue à l’enquête **MarTech 2025 State of Your Stack** le chiffre de **65,7 %** d’organisations citant l’intégration des données comme principal défi de gestion de stack.
- Il présente un paysage MarTech 2026 de **15 505** outils, contre **15 384** en 2025, avec **1 488** produits entrés et **1 367** sortis.

**Sources retenues**

1. [CMSWire — *Is the Era of Martech Absolutes Over? Buyers Are Going Hybrid*](https://www.cmswire.com/digital-marketing/is-the-era-of-martech-absolutes-over-buyers-are-going-hybrid/) — 13 octobre 2026.
2. [CMSWire — *Why Are Marketers Still Paying for Martech They Never Use?*](https://www.cmswire.com/digital-marketing/why-are-marketers-still-paying-for-martech-they-never-use/) — 16 octobre 2026.

**Réserves**

- Le premier article est une analyse éditoriale signée par un responsable marketing de solutions MarTech, sans échantillon, protocole quantitatif ni campagne de marque documentée.
- Pour les chiffres rapportés, les méthodologies complètes, tailles d’échantillon, dates de terrain et marges d’erreur ne sont pas détaillées dans l’article consulté.
- Les données décrivent les stacks et le marché ; elles ne mesurent pas la performance d’une campagne. Aucun cas d’école ne franchit le seuil de preuve requis.

## Bonus distinct — robotique

**Titre retenu :** LIBERO-PeRM évalue la personnalisation des manipulations robotiques

**Faits utilisables**

- Le preprint **LIBERO-PeRM**, soumis le **15 octobre 2026**, présente un benchmark contrôlé qui sépare l’accomplissement de la tâche de la satisfaction des préférences.
- Il couvre cinq questions : suivi zero-shot, apprentissage depuis des démonstrations, efficacité à mesure que les démonstrations augmentent, généralisation entre configurations et tâches, ainsi que composition ou conflit de préférences.
- Le pipeline comprend **cinq suites** et **312 tâches**, avec démonstrations, métadonnées et métriques de satisfaction des préférences.
- Les préférences exprimables en langage concernent notamment le mouvement, la compétence et le profil utilisateur, sans modifier l’objectif de la tâche.
- Selon les expériences rapportées, les politiques VLA actuelles peinent en personnalisation zero-shot ; le *supervised fine-tuning* rend les préférences apprenables.
- L’entraînement mixte conserve mieux l’absence de préférence que l’adaptation séquentielle et améliore les résultats avec des invites contextuelles par rapport à l’entraînement centré sur les préférences, mais peut réduire l’apprentissage des préférences de mouvement.
- La généralisation, la décomposition et la gestion des conflits restent difficiles selon les auteurs.

**Sources retenues**

1. [arXiv — *LIBERO-PeRM: Benchmarking Personalized Robotic Manipulation*](https://arxiv.org/abs/2610.22372) — 15 octobre 2026.
2. [arXiv — *Robotics — Authors and titles for recent submissions*](https://arxiv.org/list/cs.RO/recent) — 19 octobre 2026, index de contrôle.

**Réserves**

- Il s’agit d’un preprint, non d’une validation éditoriale définitive.
- Les expérimentations portent sur l’environnement de simulation LIBERO ; le résumé ne fournit pas tous les taux de réussite détaillés.
- La page arXiv du 19 octobre est un index et ne donne pas de résultats techniques détaillés.

## Domaines masqués

| Domaine masqué | Justification de masquage |
|---|---|
| Zero-Click et GEO | Aucune publication ne satisfait simultanément la fenêtre, le périmètre et les critères de vérifiabilité. Les résultats les plus pertinents sont antérieurs à la période ou correspondent à des pages d’index. |
| DXP, CMS headless et composable | Aucune actualité admissible dans la fenêtre : contenus antérieurs, index sans date exploitable ou événements futurs. |
| CDP, first-party data et identité | Aucun contenu autorisé, directement pertinent et non promotionnel ne franchit le seuil. L’article MarTech du 14 octobre est la promotion d’une table ronde, sans donnée, méthode, résultat nouveau ou KPI vérifiable ; une session W3C pertinente est du 28 octobre, hors fenêtre. |
| UX/UI conversationnelle | Les contenus les plus proches ont été écartés pour ancienneté, éditeur non autorisé ou preuve insuffisante. Aucun chiffre ni cas d’étude n’est utilisable. |
| IA générative en production et gouvernance | Aucun signal ne réunit nouveauté, fait vérifiable, portée directe sur la mise en production ou la gouvernance et niveau de preuve suffisant. L’article CMSWire du 16 octobre est une piste éditoriale, sans étude primaire, méthode, KPI ni cas de déploiement vérifiable. |

## Conclusion éditoriale

La sélection S43 repose sur trois signaux publiables : l’évolution de la présentation des liens et sources dans la recherche IA de Google, des mises à jour de documentation et des travaux JSON-LD à distinguer clairement de normes finalisées, et un constat MarTech sur l’hybridation et l’utilisation réelle des stacks. Les cinq autres domaines sont masqués afin de ne pas transformer des contenus hors fenêtre, des index, des annonces promotionnelles ou des analyses sans méthode en actualités qualifiées. Le benchmark LIBERO-PeRM est conservé comme **Bonus** avec le statut de preprint et ses limites de simulation.
