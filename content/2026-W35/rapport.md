# Veille IA & Web — Semaine 35 — 2026

**Publication : 25 août 2026.** Cette édition couvre les informations publiées et vérifiées entre le 18 et le 25 août 2026. Elle comporte **8 domaines d’analyse**, une carte bonus éditoriale hors périmètre et **13 sources citées**.

> ## Signal majeur — Search devient une interface générative
>
> Google confirme que les capacités d’UI générative, déjà proposées dans AI Mode, commencent à être déployées dans AI Overviews. La recherche peut désormais fournir des simulations, visuels, quiz ou fichiers, et non plus seulement une synthèse accompagnée de liens.[^1] Pour TBS Education, l’enjeu n’est plus uniquement d’être cité : les contenus doivent être suffisamment structurés, exacts et utiles pour alimenter une expérience de recherche interactive, puis prolonger le parcours sur le site.

## Chiffre-clé

> # 2×
>
> **Probabilité de clic vers une source préférée lorsqu’elle est proposée, selon les données Google rapportées par TechCrunch.** L’article évoque également plus de 345 000 sources distinctes sélectionnées depuis le lancement de la fonctionnalité Preferred Sources en mai.[^2]

## Tableau de bord

| Indicateur | Valeur | Lecture opérationnelle |
|---|---:|---|
| Domaines analysés | 8 | Couverture complète du périmètre éditorial |
| Sources citées | 13 | Sources primaires, institutionnelles, académiques ou éditoriales vérifiées |
| Signaux critiques | 3 | UI générative Google, robustesse JSON-LD, gouvernance des agents |
| Signaux importants | 4 | GEO par préférence, CMS agent-ready, CDP contexte, UX de curation |
| Actions immédiates | 6 | SEO technique, contenu, architecture, gouvernance et mesure |
| Tendances émergentes | 5 | Recherche interactive, préférence de source, CDP décisionnel, design de curation |
| Cas d’école retenu | 0 | Aucun cas publié dans la fenêtre hebdomadaire ne réunit à la fois marque, dispositif et KPI vérifiable |

## Synthèse exécutive

La recherche Google poursuit son évolution d’une surface de réponses vers une interface générative : les AI Overviews commencent à intégrer des outils et visualisations issus de l’UI générative.[^1] La fonction Preferred Sources ajoute une logique de préférence explicite qui peut soutenir le trafic vers une marque de confiance, sans constituer un levier de ranking annoncé.[^2] La priorité SEO technique est le contrôle du JSON-LD rendu : Googlebot n’applique désormais qu’un seul déséchappement HTML et un balisage fragile peut devenir illisible.[^3] Les CMS et CDP se repositionnent comme des couches de contenu et de contexte gouverné, réutilisables par des agents ; l’architecture ouverte, la fraîcheur des données et les droits d’accès deviennent des critères de sélection déterminants.[^4] [^5] Côté expérience, un bot d’entretien IA testé dans une étude relayée le 21 août ne produit des relances approfondies que dans 4,9 % des tours : profondeur et neutralité doivent être des exigences vérifiées, non des propriétés présumées.[^6] Enfin, l’industrialisation agentique doit être encadrée par des mandats limités, des validations humaines avant les actions sensibles et les obligations de transparence applicables depuis le 2 août au titre de l’Article 50.[^7] [^8]

## Analyse par domaine

### 01 — Google AI Search

**AI Overviews commence à devenir une interface générative.** Google annonce le début du déploiement de l’UI générative dans AI Overviews : après AI Mode, la recherche peut proposer des visualisations, outils, simulations et quiz interactifs.[^1] La disponibilité mondiale en anglais est confirmée dans AI Mode ; le déploiement dans AI Overviews est progressif.

**Implication TBS Education.** Prioriser les contenus qui peuvent être réutilisés dans une réponse active : comparateurs de formation, définitions pédagogiques, critères d’admission, calendriers, cas d’usage et ressources de preuve. Évaluer les questions utilisateur avant de créer des formats interactifs ; la technologie ne doit pas précéder le besoin candidat.

### 02 — Zero-Click et GEO

**Preferred Sources ajoute une couche de préférence de marque.** Google permet aux éditeurs d’inviter leurs lecteurs à les déclarer comme sources préférées dans Search, Discover et News. TechCrunch rapporte plus de 345 000 sources choisies et une probabilité de clic doublée vers une source préférée lorsqu’elle est proposée.[^2]

**Implication TBS Education.** Ne pas confondre cette fonctionnalité avec un mécanisme de ranking. Tester, sur une sélection de contenus éditoriaux utiles, le potentiel de préférence déclarée et le rapprocher de la demande de marque, des citations IA, des referrals identifiables et des conversions déclaratives.

### 03 — Schema.org et données structurées

**Le JSON-LD doit être testé comme du code.** Selon Search Engine Roundtable, Googlebot applique désormais un unique passage de déséchappement HTML lors de l’extraction JSON-LD. Les blocs doublement échappés, auparavant parfois récupérés par tolérance, ne le seront plus nécessairement.[^3]

**Implication TBS Education.** Lancer un contrôle de régression sur les gabarits les plus critiques : formations, actualités, événements, FAQ, campus et admissions. Vérifier le JSON strict, le rendu serveur, l’absence de double échappement et la cohérence entre données structurées et contenu visible.

### 04 — DXP, CMS headless et architectures composables

**Le CMS devient une couche de contenu exploitable par les agents.** Les notes de version d’Optimizely CMS 13 actualisées le 21 août recensent des agents de modèle de contenu, d’optimisation GEO/Schema et de métadonnées SEO, ainsi que des fonctions de visibilité des agents et de diffusion markdown pour agents.[^4]

**Implication TBS Education.** Évaluer l’architecture éditoriale à partir de propriétés concrètes : granularité et versionnage du contenu, API, métadonnées, multilingue, workflow de validation, droits de publication et journalisation. L’objectif est d’obtenir un référentiel fiable, non un assistant de rédaction isolé.

### 05 — CDP, data first-party et résolution d’identité

**Le CDP devient un contexte de décision.** CMSWire décrit une évolution du CDP : fournir aux agents un contexte client fiable, gouverné et temps réel, au-delà de la consolidation de profils. L’architecture ouverte, la qualité des données, l’interopérabilité, la résolution d’identité et l’activation temps réel deviennent les critères prioritaires.[^5]

**Implication TBS Education.** Avant toute orchestration agentique, documenter les données de référence, les finalités, les attributs sensibles, la fraîcheur, les droits d’accès, les mécanismes de correction et l’explicabilité d’une recommandation. Le contexte candidat doit rester exact, proportionné et réversible.

### 06 — UX/UI des interfaces conversationnelles

**Un agent conversationnel ne remplace pas un protocole de recherche UX.** Une étude relayée le 21 août portant sur 15 entretiens semi-structurés menés par un bot vocal GPT-4o relève seulement 4,9 % de relances approfondies et plusieurs questions dans 29 % des tours interrogatifs.[^6]

**Implication TBS Education.** Réserver l’IA à une collecte large ou peu sensible, avec information explicite de l’utilisateur. Tester avant déploiement la neutralité, la profondeur des relances, le respect du script, les interruptions et les conditions de reprise par un chercheur ou conseiller humain.

### 07 — IA générative en production, agents et gouvernance

**Le contrôle de l’action devient le sujet central.** Wellington Management, via le Harvard Law School Forum, indique que près de trois entreprises sur quatre prévoient de déployer de l’IA agentique sous deux ans, mais qu’une sur cinq seulement a un modèle de gouvernance mature. VentureBeat relaie aussi une prévision Gartner de plus de 40 % de projets agentiques annulés avant 2028.[^7] Depuis le 2 août, les obligations de transparence Article 50 sont applicables dans l’Union européenne.[^8]

**Implication TBS Education.** Instituer une fiche d’agent et une matrice de droits : mandat, propriétaire, données accessibles, outils, actions autorisées, approbation humaine, logs, seuils de surveillance et arrêt d’urgence. La conformité doit être intégrée au design de l’agent.

### 08 — Innovation marketing et commerce agentique

**Le flux structuré devient un actif de recommandation.** Microsoft Advertising cite Adobe Analytics : le trafic retail issu de l’IA a progressé de 693 % sur un an pendant les fêtes 2025 et les visiteurs référés par IA convertissaient 42 % mieux au T1 2026.[^9] Ces chiffres concernent le retail ; ils n’établissent pas une équivalence avec l’enseignement supérieur. L’ANA appelle de son côté à une mesure retail media plus indépendante et comparable.[^10]

**Implication TBS Education.** Traiter le référentiel des formations comme un flux stratégique : informations complètes, structurées, à jour et cohérentes entre site, CRM, plateformes de diffusion et outils IA. Pour toute expérimentation marketing IA, définir une comparaison, une attribution, un coût complet et un seuil de décision avant de conclure à un gain.

## Carte bonus — Robotique

> **3 000 produits présentés en cinq jours.** Au World Robot Conference 2026 de Pékin, Associated Press rapporte des démonstrations de robots humanoïdes boxant, dansant ou jouant au tennis de table, mais aussi l’échec d’un robot à plier une chemise après plusieurs minutes d’essais.[^11]

Cette carte est volontairement **hors des huit domaines et de leurs compteurs**. Le contraste entre démonstration spectaculaire et tâche domestique simple rappelle que la maturité se mesure d’abord sur une tâche bornée, sûre et répétable — une grille de lecture utile avant tout projet d’automatisation ou de robotique de service.

## Actions prioritaires

| Priorité | Action | Responsable indicatif |
|---:|---|---|
| 1 | Contrôler les JSON-LD rendus des gabarits stratégiques avec parse JSON strict et tests de rendu. | Développement + SEO |
| 2 | Identifier les questions candidat pour lesquelles une UI générative apporte une compréhension supérieure à une page seule. | SEO + Éditorial |
| 3 | Tester la préférence de source sur des contenus éditoriaux à forte valeur, sans promesse de ranking. | Éditorial + Analytics |
| 4 | Évaluer la maturité agent-ready du CMS et du référentiel formations. | Digital + DSI |
| 5 | Mettre en place une fiche de contrôle obligatoire pour chaque agent. | DSI + Juridique + Métiers |
| 6 | Formaliser une méthode de mesure indépendante pour les pilotes marketing IA. | Data + Acquisition |

## Signaux émergents et mémoire stratégique

| Signal | Horizon | Lecture |
|---|---|---|
| Recherche générative interactive | Immédiat | La présence SEO doit aussi préparer la réutilisation dans des outils et interfaces générés. |
| Préférence de source | Court terme | La confiance de marque devient un signal complémentaire de distribution. |
| Balisage comme dépendance de production | Immédiat | La conformité JSON-LD doit intégrer les contrôles de qualité technique. |
| CDP comme couche de décision | Court terme | Qualité, fraîcheur, droits et explicabilité deviennent indissociables de l’activation. |
| Curation assistée par IA | Moyen terme | Les outils doivent aider à sélectionner et évaluer, pas seulement produire davantage. |

## Références

[^1]: [Google, *5 new ways to level up your learning with Search*, 19 août 2026](https://blog.google/products-and-platforms/products/search/back-to-school-study-tools/).
[^2]: [TechCrunch, *Google gives publishers a new way to fight AI-driven traffic losses*, 20 août 2026](https://techcrunch.com/2026/08/20/google-gives-publishers-a-new-way-to-fight-ai-driven-traffic-losses/).
[^3]: [Search Engine Roundtable, *Daily Search Forum Recap: August 21, 2026*, 21 août 2026](https://www.seroundtable.com/recap-08-21-2026-41922.html).
[^4]: [Optimizely, *2026 Optimizely CMS 13 release notes*, mis à jour le 21 août 2026](https://support.optimizely.com/hc/en-us/articles/44937048830221-2026-Optimizely-CMS-13-release-notes).
[^5]: [CMSWire, *Is the Agentic Customer Data Platform Just Marketing, or a Real Shift?*, 19 août 2026](https://www.cmswire.com/customer-data-platforms/is-the-agentic-customer-data-platform-just-marketing-or-a-real-shift/).
[^6]: [UX Tigers, *UX Roundup: AI as Interviewer*, 21 août 2026](https://www.uxtigers.com/post/ux-roundup-20260821), résumant l’étude [*InterviewBot*](https://arxiv.org/abs/2608.10412) présentée à HCOMP 2026.
[^7]: [Harvard Law School Forum, *AI Governance for Private Companies*, 21 août 2026](https://corpgov.law.harvard.edu/2026/08/21/ai-governance-for-private-companies/) ; [VentureBeat, *Enterprises winning with AI agents are limiting how much the agents can do alone*, 22 août 2026](https://venturebeat.com/orchestration/enterprises-winning-with-ai-agents-are-limiting-how-much-the-agents-can-do-alone).
[^8]: [Simmons & Simmons, *AI View: August 2026*, 19 août 2026](https://www.simmons-simmons.com/en/publications/cmt09z0uq0056uzywe1qk2rmr/ai-view:august-2026).
[^9]: [Microsoft Advertising, *How businesses win when AI does the shopping*, 21 août 2026](https://about.ads.microsoft.com/en/blog/post/august-2026/how-businesses-win-when-ai-does-the-shopping).
[^10]: [Marketing Dive, *ANA cautions marketers against overreliance on retail media data*, 18 août 2026](https://www.marketingdive.com/news/ana-cautions-marketers-against-overreliance-on-retail-media-data/828109/).
[^11]: [Associated Press, *From robot dogs to helpers, China puts robotics ambitions on display at world conference*, 19 août 2026](https://apnews.com/article/china-robot-conference-951ebd3cddaccf5afcedc68174ba626a).
