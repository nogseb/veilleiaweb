# Recherche 03 — Données structurées et accès des robots

## Signal retenu — Google annonce son intention de prendre en charge un contrôle partagé de l’entraînement IA dans robots.txt

**Priorité : À SURVEILLER**
**État : annoncé ; objectif de prise en charge en 2027, pas déployé.**
**Statut de recommandation : À arbitrer.**

Le 30 octobre, Google a annoncé son intention de prendre en charge dans `robots.txt` un signal commun pour exprimer une préférence d’exclusion de l’entraînement IA auprès de plusieurs fournisseurs participants. Sans instruction explicite contraire, Google prévoit de l’interpréter comme une exclusion de son contrôle dédié ; les contrôles propres à chaque entreprise resteraient disponibles. La cible est 2027 : aucune modification de fichier n’est justifiée à ce stade. [1]

Le mécanisme s’appuie sur un texte de travail IETF publié le même jour. Il décrit un jeton de politique dans des groupes `robots.txt`, sans modifier la grammaire existante, et prévoit que les implémentations non compatibles l’ignorent. Le document n’a ni approbation ni statut de norme IETF. [2]

**Impact pour une école.** Le sujet peut simplifier l’expression d’une préférence relative à l’entraînement IA, mais son effet dépendra des fournisseurs participants et de la version finale. Il ne concerne ni l’indexation classique ni la sécurité d’un contenu. [1] [2]

**Recommandation — À arbitrer.** Pour une école, inscrire ce signal au registre de gouvernance des accès automatisés et séparer la décision sur l’entraînement IA des choix d’indexation et d’accès applicatif. Attendre la spécification stabilisée et la liste des adopteurs avant toute configuration ; conserver les règles existantes et vérifier les effets sur un environnement public de test lors d’un éventuel déploiement.

## Sources retenues

1. **Supporting a shared AI training control for websites** — Google Search Central — 30 octobre 2026 — https://developers.google.com/search/blog/2026/10/ai-training-control
2. **Machine-Readable Training Preference Signal** — IETF Datatracker, auteur : Kevin Kelley — 30 octobre 2026 — https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/

## Comparaison aux antécédents

Les S43 et S44 ont traité les données structurées, `robots.txt` et Google-Extended comme éléments de fond. Le fait nouveau daté est l’annonce Google du 30 octobre d’un contrôle inter-fournisseurs envisagé et relié à un travail IETF, avec une cible de prise en charge en 2027. Ce n’est donc ni un rappel de Google-Extended ni une nouvelle consigne sur le JSON-LD.

## Recherches réalisées

1. Requête française, 2 novembre 2026 : « données structurées Schema.org JSON-LD crawl robots agents actualité 26 octobre 2026 ».
2. Requête presse tech généraliste, 2 novembre 2026 : « TechCrunch The Verge 404 Media JDN BDM Next.ink robots crawl agents web octobre 2026 ».
3. Requête anglaise, 2 novembre 2026 : « Schema.org JSON-LD crawl robots AI agents October 26 2026 » ; variante « structured data crawler robot access agents November 2 2026 ».
4. Requête anglaise finale, 2 novembre 2026 : « site:developers.google.com OR site:openai.com OR site:cloudflare.com crawler robots agent access October 26 2026 November 2 2026 » ; variante « site:blog.google robots crawl AI agents October 2026 ».

## Sources ouvertes rejetées et raisons

- **Latest Google Search Documentation Updates** — Google Search Central : ouvert. Le résultat du 26 octobre porte sur la prévention du spam généré par les utilisateurs, sans évolution qualifiée de Schema.org, JSON-LD, crawl ou accès des agents. L’extrait renvoyait en outre à un crawler Vertex annoncé antérieurement ; il est hors fenêtre.
- **Overview of Google crawlers and fetchers** — Google : ouvert. Documentation de référence, sans nouvelle publication datée dans la fenêtre ; non retenue comme actualité.
- **Introduction to robots.txt** — Google : ouvert. Rappel de fonctionnement général ; non retenu pour ne pas rééditer un sujet de fond.
- **DoorDash said it’s only received ‘several hundred’ orders from AI agents** — TechCrunch, 30 octobre 2026 : ouvert. La presse tech généraliste est bien couverte et l’article rapporte un chiffre prononcé lors des résultats trimestriels, mais il s’agit d’une observation propre à un fournisseur de livraison, non d’une évolution générale des règles d’accès des robots.
- **DoorDash Releases Third Quarter 2026 Financial Results** — DoorDash, 29 octobre 2026 : ouvert. Source primaire de contexte de l’article TechCrunch ; elle décrit des capacités et produits du fournisseur, donc exclue comme cas fournisseur.
- **DoorDash brings office ordering to the AI tools teams already use** — DoorDash, 30 septembre 2026 : ouvert. Annonce promotionnelle, hors fenêtre et limitée à une bêta fournisseur ; exclue.

## Limites

- Le mécanisme annoncé reste conditionné à l’adoption par les fournisseurs participants et à la finalisation du travail IETF.
- Google donne une cible de prise en charge en 2027, sans date de disponibilité ni liste complète d’adopteurs.
- Aucun fait nouveau qualifié sur Schema.org ou JSON-LD n’a été trouvé dans la fenêtre après les recherches tracées ; aucun sujet n’a été ajouté pour remplir le domaine.

## Références

[1]: https://developers.google.com/search/blog/2026/10/ai-training-control "Supporting a shared AI training control for websites"

[2]: https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/ "Machine-Readable Training Preference Signal"
