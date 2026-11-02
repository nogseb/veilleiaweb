# Recherche 05 — Data first-party, consentement, navigateurs

Fenêtre examinée : du 26 octobre au 2 novembre 2026 inclus. Deux faits nouveaux sont retenus. Ils ne constituent ni un SUIVI ni un RATTRAPAGE.

## CRITIQUE — Traceur de personnalisation mobile : la CNIL sanctionne et impose une mise en conformité sous un mois

**État : décision publiée. Statut de recommandation : Immédiat.**

Le 29 octobre, la CNIL a publié la délibération rendue le 22 octobre contre FNAC DIRECT et FNAC DARTY PARTICIPATIONS ET SERVICES. La sanction pécuniaire totalise **7 millions d’euros** : **6 millions d’euros** et **1 million d’euros** respectivement. La décision vise un traceur d’application mobile qui envoyait à un domaine tiers un identifiant attribué à l’utilisateur et des données d’activité, dont les produits consultés. Ces données servaient à proposer des produits personnalisés et à entraîner un algorithme de recommandations. La formation restreinte juge que cette finalité ne relève pas des exemptions de l’article 82 de la loi Informatique et Libertés : le consentement préalable était donc requis. [1] [2]

La CNIL associe l’amende à une injonction : les sociétés doivent démontrer, dans le mois suivant la notification, que le nouvel outil recueille le consentement lorsqu’il est nécessaire. À défaut, l’astreinte annoncée est de **10 000 euros par jour de retard**. [1] Il s’agit d’une décision individuelle, non d’une nouvelle règle générale, mais elle confirme que le canal applicatif, l’appel à une API tierce et une finalité de recommandation commerciale n’écartent pas l’exigence de consentement.

**Impact pour une école.** Une école qui offre une application ou un service mobile doit vérifier, avant toute personnalisation fondée sur le parcours individuel, que les traceurs non strictement nécessaires sont conditionnés au consentement préalable et que ce choix est effectivement respecté dans les appels vers des tiers.

**Recommandation.** Sous 30 jours, une école doit faire contrôler les finalités de personnalisation et de recommandation de ses services mobiles, puis exiger une preuve documentée du recueil du consentement lorsque l’exemption ne s’applique pas. Ne pas considérer un refus de suivi comme une simple préférence d’interface.

**Sources :**

- [1] « Cookies et application mobile : sanctions de 7 millions d’euros à l’encontre des sociétés FNAC DARTY PARTICIPATIONS ET SERVICES et FNAC DIRECT », CNIL, 29 octobre 2026 — [URL](https://www.cnil.fr/fr/sanction-cookies-app-fnac)
- [2] « Délibération SAN-2026-015 du 22 octobre 2026 », Légifrance, publiée le 29 octobre 2026 — [URL](https://www.legifrance.gouv.fr/cnil/id/CNILTEXT000055022778)

## À SURVEILLER — Opera présente WebAI, un aperçu d’IA locale pour le navigateur

**État : aperçu annoncé et testé, pas un déploiement généralisé. Statut de recommandation : Règle de conception.**

Le 27 octobre, Opera a annoncé WebAI, un aperçu précoce permettant à des sites et extensions d’appeler des modèles exécutés localement dans le navigateur. Selon l’éditeur, l’activation est volontaire : aucun modèle n’est téléchargé avant l’activation dans les réglages, et l’utilisateur peut désactiver la fonction. Opera présente cette approche comme un moyen de traiter le contenu sur l’appareil plutôt que de l’envoyer à un fournisseur d’IA dans le cloud. [3] La couverture de TechCrunch confirme le caractère d’aperçu, l’activation volontaire et le compromis de performance lié au matériel. [4]

Le fait est pertinent pour les données first-party car il ouvre, à terme, une voie où certains traitements de texte ou de contenu consulté peuvent rester dans le navigateur. Il ne prouve toutefois ni l’absence de tout transfert de données par un site ou une extension, ni la conformité automatique d’un traitement : la base légale, l’information des personnes et le contrôle des autres traceurs restent à apprécier séparément. La compatibilité annoncée est limitée et les capacités restent en aperçu ; ce n’est donc pas une fonction sur laquelle fonder un service destiné à tous les navigateurs.

**Impact pour une école.** Une école peut suivre cette évolution comme option de minimisation des flux, sans la présenter comme une garantie de consentement ou de sécurité.

**Recommandation.** Pour tout futur service web proposant un traitement local, une école doit conserver une fonctionnalité équivalente sans dépendance à cette préversion, expliciter le choix laissé à l’utilisateur et vérifier séparément les données éventuellement transmises par le service ou ses extensions.

**Sources :**

- [3] « WebAI: Local AI for the web, now in Opera », Opera, 27 octobre 2026 — [URL](https://blogs.opera.com/news/2026/10/webai-local-ai-for-the-web-now-in-opera/)
- [4] « Opera introduces a new web standard to let users deploy AI locally in their browser », TechCrunch, 27 octobre 2026 — [URL](https://techcrunch.com/2026/10/27/opera-introduces-a-new-web-standard-to-let-users-deploy-ai-locally-in-their-browser/)

## Comparaison aux antécédents

Les antécédents S42 avaient traité l’identité et la révocation des données first-party. La S44 avait déjà couvert le format et le hachage dans Data Manager, la résolution d’identité WebKit et le mandat du Digital Omnibus. Aucun de ces sujets n’est repris : la décision CNIL porte sur la preuve du consentement préalable pour un traceur de personnalisation dans une application mobile, et WebAI est un nouvel aperçu de traitement local dans un navigateur. Aucun nouveau fait daté ne justifie un suivi de WebKit ou du Digital Omnibus.

## Recherches réalisées

1. `données first-party consentement navigateurs 26 octobre 2026 2 novembre 2026` — requête française généraliste, avec priorité aux sources officielles.
2. `site:techcrunch.com OR site:theverge.com OR site:404media.co OR site:bdm.tools OR site:next.ink navigateur données consentement 2026` — requête ciblant la presse technologique généraliste ; aucun résultat directement exploitable n’a été renvoyé.
3. `consent first-party data browser identity privacy October 2026` — requête anglaise finale de couverture internationale.
4. `site:ico.org.uk OR site:edpb.europa.eu OR site:commission.europa.eu consent browser data October 2026` — vérification complémentaire auprès d’autorités.
5. `site:opera.com/blog local AI browser web standard October 2026` — identification de la publication primaire Opera.
6. `site:legifrance.gouv.fr OR site:cnil.fr délibération sanction cookies application Fnac 29 octobre 2026` — accès au texte primaire de la décision.

## Sources ouvertes rejetées et raisons

- « ICO statement on Highly Effective Age Assurance », ICO, 29 octobre 2026 : source officielle ouverte, mais déclaration d’orientation portant sur les plateformes sociales et de partage vidéo au Royaume-Uni ; elle n’établit pas une obligation nouvelle et directement exploitable pour ce domaine.
- « Agenda », CNIL : page ouverte, mais calendrier et renvois ; ce n’est pas une source suffisante pour un fait de veille. Son lien vers la sanction a conduit à la source primaire retenue.
- « Web AI », Opera Next : documentation ouverte, mais page sans date de publication affichée ; utilisée pour contrôle de cohérence technique, non citée comme preuve temporelle.
- Page d’accueil de l’ICO : page ouverte pour accéder au communiqué ; elle ne constitue pas une source factuelle autonome.
- Résultats commerciaux ou promotionnels sur la fin des cookies et le consentement : écartés car ils ne documentaient pas un fait nouveau vérifiable dans la fenêtre ou relevaient d’un fournisseur.

## Limites

La sanction CNIL concerne des responsables de traitement identifiés et une situation examinée ; elle ne permet pas de déduire automatiquement la conformité ou la non-conformité d’un autre service. Le délai d’un mois et l’astreinte sont ceux de l’injonction adressée aux sociétés sanctionnées. WebAI repose sur les déclarations d’Opera et sur une préversion limitée ; aucune preuve indépendante de son adoption, de son interopérabilité ou de l’absence de tout autre flux de données n’a été trouvée. Les chiffres reproduits sont ceux publiés par la CNIL et ne sont pas recalculés.

## Références

[1]: https://www.cnil.fr/fr/sanction-cookies-app-fnac "Cookies et application mobile : sanctions de 7 millions d’euros"
[2]: https://www.legifrance.gouv.fr/cnil/id/CNILTEXT000055022778 "Délibération SAN-2026-015 du 22 octobre 2026"
[3]: https://blogs.opera.com/news/2026/10/webai-local-ai-for-the-web-now-in-opera/ "WebAI: Local AI for the web, now in Opera"
[4]: https://techcrunch.com/2026/10/27/opera-introduces-a-new-web-standard-to-let-users-deploy-ai-locally-in-their-browser/ "Opera introduces a new web standard to let users deploy AI locally in their browser"
