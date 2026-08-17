# Veille stratégique IA & Web — Semaine 34 / 2026

**Date de publication :** 17 août 2026  
**Domaines analysés :** 5 | **Sources citées :** 8

---

## Signal majeur de la semaine

> Le rapport generative AI de Google Search Console est désormais étendu à davantage de propriétés. Il permet de suivre les impressions, pages, pays, appareils et dates dans les fonctions génératives de Search, mais ne donne ni clics ni requêtes. L'accès reste en outre conditionné à un volume d'impressions suffisant. [1]

### 0 CLIC / 0 REQUÊTE — La mesure native Google reste insuffisante pour piloter le GEO

L'extension du rapport est une avancée opérationnelle : elle permet de sortir d'une observation manuelle des apparitions dans les surfaces génératives. Elle ne résout toutefois pas l'attribution. Sans clic, requête ni exposition équivalente sur les assistants externes, Google Search Console ne peut être qu'une composante d'un dispositif GEO combinant logs de crawl, bibliothèque de prompts, visibilité citée, trafic référent IA, signaux de demande de marque et conversion. [1] [2]

---

## Tableau de bord

| Indicateur | Valeur |
|---|---:|
| Domaines analysés | 5 |
| Sources citées | 8 |
| Signaux critiques | 3 |
| Signaux importants | 2 |
| Actions immédiates | 6 |
| Tendances émergentes | 5 |
| Cas d'école retenus | 0 |

Les domaines **Schema.org**, **DXP/CMS composables** et **CDP/résolution d'identité** sont masqués cette semaine : aucune actualité datée, significative et factuellement qualifiée n'a été trouvée dans la fenêtre de collecte. Aucun cas d'école n'est retenu faute de KPI vérifiable.

---

## Synthèse exécutive

L'élargissement du rapport generative AI dans Search Console fournit enfin une mesure native de visibilité, mais l'absence de clics et de requêtes laisse entier le problème d'attribution GEO. [1] La méthode proposée par Search Engine Land confirme qu'un reporting exploitable doit relier accès des bots, citations, trafic référent, demande aval et résultats business, sans confondre les surfaces Google avec du trafic IA identifiable dans GA4. [2] Les pages visitées après une citation doivent privilégier la preuve, l'approfondissement et la continuité de parcours, plutôt qu'une simple landing page PPC de conversion immédiate. [3] Pour les interfaces et assistants internes, Nielsen Norman Group rappelle qu'une démonstration réussie ne constitue pas une évaluation : la qualité doit être testée sur des inputs représentatifs et des exécutions répétées. [4] Côté production, OpenAI observe dans son propre échantillon que les organisations les plus avancées combinent outils, contexte, droits, gouvernance et revue humaine, tandis qu'Anthropic relève l'incertitude croissante des risques agentiques en environnement sensible. [5] [6] Enfin, Google étend l'IA vers le pilotage marketing avec Ask Advisor, des résumés Analytics et des dashboards générés par prompts, à encadrer comme des aides à l'analyse et non comme des décisions autonomes. [7]

---

## Analyse par domaine

### 1. Google AI Search — Critique

**SEARCH CONSOLE ÉTEND LE RAPPORT GENERATIVE AI — SANS CLIC NI REQUÊTE**

Search Engine Roundtable rapporte le 11 août que le rapport Search Console dédié aux fonctions génératives est étendu à davantage de propriétés, sans être encore disponible pour tous les domaines. Il expose impressions, pages, pays, appareils et séries temporelles. Il ne fournit cependant aucune donnée de clic ni de requête et n'apparaît que si le site atteint un volume d'impressions génératives suffisant. [1]

Pour TBS Education, ce rapport doit devenir un nouveau signal de veille hebdomadaire — pas un KPI autonome. Il permet de repérer quelles pages programme, admissions, campus ou expertise apparaissent dans les surfaces génératives, puis de déclencher une vérification éditoriale et de conversion. Mais il ne permet pas de relier proprement cette visibilité à l'intention, au trafic ni à la candidature. Les données doivent donc être réconciliées avec les événements Analytics, les pages de destination et les marqueurs d'origine déclaratifs.

### 2. Recherches Zero-Click et GEO — Critique

**LE GEO SE MESURE SUR CINQ COUCHES, PAS SUR UN SCORE DE CITATION**

Le cadre publié le 11 août par Search Engine Land organise la mesure en cinq couches : accès des systèmes IA, visibilité dans les réponses, trafic référent identifiable, demande aval ou dark funnel, puis pipeline et revenu. [2] Il rappelle qu'AI Overviews et AI Mode ne s'isolent pas proprement comme trafic IA dans GA4 : ils sont généralement absorbés dans l'organique Google, ou parfois dans le direct. [2]

La conséquence est méthodologique. Une hausse de citations ne démontre pas une hausse de candidatures ; à l'inverse, l'absence de referral ne démontre pas que l'IA n'a pas contribué à la décision. Les parcours de recherche peuvent se poursuivre par une requête marque, une visite directe ou un autre canal. La priorité est donc de construire une bibliothèque de prompts stable, de rapprocher ses résultats de la demande de marque et d'ajouter un choix « ChatGPT / AI Search / Perplexity » aux formulaires stratégiques. Les chiffres de conversion LLM publiés par certains acteurs sont à traiter avec prudence lorsqu'ils ne proviennent pas d'un benchmark ouvert et reproductible. [3]

### 3. UX/UI des interfaces conversationnelles — Important

**UNE SORTIE IA RÉUSSIE EST UN EXEMPLE, PAS UNE ÉVALUATION**

Nielsen Norman Group publie le 14 août un rappel structurant pour les équipes produit : un système génératif est non déterministe, et une réponse satisfaisante isolée ne renseigne ni sur sa fiabilité ni sur sa couverture des cas réels. [4] Une évaluation doit réunir plusieurs inputs représentatifs, plusieurs exécutions pour chaque input, puis une moyenne, un intervalle de confiance et une lecture distincte de la variabilité entre les questions et de la variabilité entre les exécutions. [4]

Pour TBS Education, ce principe s'applique immédiatement à tout chatbot candidat, assistant éditorial ou agent métier. Avant une mise en production, il faut définir les scénarios critiques, les critères d'acceptation, les exceptions non négociables, le comportement de repli vers un humain et la cadence de réévaluation. La démonstration doit devenir un protocole. Chaque évaluation doit documenter le modèle, la version, les prompts, les outils connectés, le contexte et la date, afin que l'équipe puisse expliquer toute variation de résultat.

### 4. IA générative en production et gouvernance — Critique

**DE L'ASSISTANCE À L'EXÉCUTION : LES DROITS ET LA REVUE HUMAINE DEVIENNENT L'UNITÉ DE GOUVERNANCE**

OpenAI décrit, dans son propre échantillon entreprise, un passage de l'assistance à l'exécution : les organisations situées dans le top 10 % mensuel de l'usage produisent 8,3 fois plus de tokens par utilisateur actif que les organisations typiques. [5] La publication ne constitue pas un benchmark universel, mais son enseignement est directement exploitable : les organisations les plus avancées relient les agents au contexte et aux outils de l'entreprise tout en définissant droits, gouvernance et revue humaine. [5]

La même semaine, Anthropic relève son appréciation du risque de désalignement dans des contextes à forts enjeux de « very low » à « low », en évoquant notamment les enseignements d'incidents d'évaluations cyber. [6] Pour TBS Education, la priorité n'est pas de chercher des agents plus autonomes : elle est de classer les actions par niveau de risque. Lecture et recherche peuvent être automatisées avec un contrôle réduit ; publication, envoi de communication, modification CRM, accès à des comptes ou traitement de données sensibles imposent un périmètre minimal, une validation humaine nominative, une journalisation et une capacité d'arrêt.

### 5. Innovation marketing et MarTech — Critique

**GOOGLE ADS ET ANALYTICS PASSENT À L'ANALYSE ASSISTÉE PAR AGENT — LE PILOTAGE HUMAIN RESTE DÉCISIONNAIRE**

Google annonce le 10 août de nouvelles capacités IA et agentiques dans Google Ads et Google Analytics. Google Analytics ajoute des résumés IA sur sa page d'accueil, des notifications optionnelles et une bascule de contexte vers Ask Advisor. Google Ads ajoute des cartes d'insights personnalisées et des dashboards pouvant être générés par prompts, annoncés comme à venir dans Google Analytics. Ask Advisor doit aussi proposer un benchmark de campagnes contre des moyennes anonymisées d'entreprises comparables. [7]

Le périmètre annoncé est en bêta pour des comptes anglophones : il ne doit donc pas être considéré comme acquis pour TBS Education. Le signal reste important pour la roadmap MarTech : l'interface d'analyse va progressivement devenir conversationnelle et orientée recommandation. Avant tout usage décisionnel, l'équipe doit identifier les métriques réellement accessibles à l'agent, les définitions de calcul, les limites du benchmark et les règles d'approbation des ajustements média. Une recommandation automatique peut accélérer le diagnostic ; elle ne remplace ni l'analyse de causalité ni l'arbitrage de budget.

---

## Actions prioritaires

| # | Action | Domaine | Responsable indicatif |
|---:|---|---|---|
| 1 | Auditer l'accès au rapport generative AI de Search Console et relever les pages / pays / appareils visibles, en documentant explicitement l'absence de clics et requêtes. | SEO / GEO | SEO + Data |
| 2 | Mettre en place un tableau de bord GEO en cinq couches : crawl IA, citations, referrals, demande de marque et conversion. | SEO / Data | SEO + Analytics |
| 3 | Ajouter un champ d'origine déclarative « ChatGPT / AI Search / Perplexity » aux formulaires d'information ou de candidature à plus forte valeur. | Conversion / CRM | Marketing + CRM |
| 4 | Créer un protocole d'évaluation des assistants : corpus représentatif, répétitions, critères d'acceptation, taux de succès, variabilité et revue humaine. | UX / IA | Produit + Métiers |
| 5 | Formaliser une matrice de droits agents : sources accessibles, actions autorisées, validation humaine, journalisation et arrêt d'urgence. | Gouvernance / Sécurité | DSI + Direction digitale |
| 6 | Préparer une grille d'adoption des fonctions IA Google Ads/Analytics : éligibilité, disponibilité France, données exposées, règles de validation et impact de mesure. | MarTech / Media | Acquisition + Data |

---

## Tendances émergentes

| Signal | Horizon | Implication opérationnelle |
|---|---|---|
| La mesure native de visibilité générative apparaît, mais reste incomplète. | Immédiat | Ne pas transformer les impressions Search Console en KPI de résultat sans rapprochement conversion. |
| La recherche IA s'inscrit dans un parcours de décision plus long et plus opaque. | Court terme | Suivre la demande de marque et les origines déclaratives, en complément du referral. |
| Les pages post-citation deviennent des espaces de preuve et de continuité, non de simple capture. | Court terme | Renforcer sources, expertise, profondeur et parcours de qualification. |
| L'évaluation d'IA se rapproche d'un protocole de recherche quantitative. | Immédiat | Tester répétition et variabilité avant tout déploiement à enjeu candidat ou CRM. |
| L'analyse marketing devient conversationnelle, mais les modèles de données et les décisions restent à gouverner. | Moyen terme | Documenter les définitions métier et les seuils d'approbation avant d'utiliser des recommandations IA. |

---

## Références

[1]: https://www.seroundtable.com/google-search-console-ai-report-live-41850.html "Search Engine Roundtable — Google Search Console Generative AI Performance Report Expands To More, 11 août 2026"
[2]: https://searchengineland.com/ai-search-performance-measurment-framework-484546 "Search Engine Land — A 5-layer framework for measuring AI search performance, 11 août 2026"
[3]: https://searchengineland.com/llm-traffic-converts-differently-what-to-do-484964 "Search Engine Land — LLM traffic converts differently, 14 août 2026"
[4]: https://www.nngroup.com/articles/eval-ai-output/ "Nielsen Norman Group — One AI Output Is an Example, Not an Evaluation, 14 août 2026"
[5]: https://openai.com/index/how-enterprises-put-ai-to-work/ "OpenAI — From assistance to execution: How enterprises put AI to work, 12 août 2026"
[6]: https://www.anthropic.com/aug-2026-risk-report "Anthropic — Risk Report: August 2026"
[7]: https://blog.google/products/ads-commerce/google-ads-analytics-ai-updates/ "Google Blog — Evolve your marketing with new AI tools, 10 août 2026"
[8]: https://www.smashingmagazine.com/2026/08/eu-guidelines-ai-labelling/ "Smashing Magazine — New EU Guidelines For AI Labelling, 13 août 2026"

