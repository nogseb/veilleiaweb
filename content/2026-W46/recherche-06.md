# W46 2026 — 06 · Mesure et attribution

**Statut : RETENU.** Un sujet retenu pour la fenêtre stricte du **2 au 9 novembre 2026 inclus**. Collecte effectuée le 25 novembre 2026 : exactement trois requêtes distinctes et trois pages ouvertes par `fetch`. Deux pages officielles étayent le sujet, dont une seule porte la date de lancement dans la fenêtre ; il ne s’agit pas de deux confirmations indépendantes.

## Google Analytics lance Data Manager en bêta : éviter les flux de conversions en double

**Niveau : IMPORTANT. Statut éditorial : NOUVEAU. Statut produit : lancé en bêta ouverte, susceptible de changer.**

Le **6 novembre 2026**, Google annonce le lancement de Data Manager dans Google Analytics. Ce point d’entrée dans l’administration rassemble les liens produits, les flux de données et les données de première partie. Il permet aussi de traiter les alertes de diagnostic et de surveiller l’état des connexions. C’est la nouveauté datée retenue dans la fenêtre, et non un nouveau modèle d’attribution. [1]

La documentation officielle décrit une carte des connexions, avec les sources en entrée et les destinations en sortie. Elle avertit surtout de ne pas activer un pipeline identique dans Google Analytics et Google Ads ou Google Marketing Platform : cela peut enregistrer les conversions deux fois. Les données ingérées dans Data Manager de Google Analytics circulent vers les comptes liés, mais pas dans le sens inverse. Google préconise de conserver la gestion des connexions existantes dans leur interface d’origine et de créer les nouvelles connexions depuis Google Analytics. [2]

**Limites de preuve.** La page de documentation [2] ne présente pas de date de publication visible : elle sert à préciser le fonctionnement du lancement daté par [1], et non à dater séparément l’avertissement de double comptage. Les sous-propriétés et propriétés roll-up ne prennent pas en charge la page d’accueil de Data Manager selon cette documentation. Aucun gain chiffré de qualité de mesure ou d’attribution n’est démontré. Les deux sources proviennent de Google, qui a un intérêt commercial à l’adoption de ses outils de mesure et de publicité ; il ne s’agit pas d’une étude indépendante. [2]

**Impact pour une école.** Lorsqu’une école évalue de nouvelles connexions de mesure, une ingestion en double peut fausser les conversions utilisées pour comparer les campagnes de recrutement. La carte des flux peut aider à repérer des chemins redondants. Ce constat n’implique ni l’usage de la plateforme par une école, ni un incident dans un établissement.

**Recommandation — Règle de conception.** Pour une école, documenter un chemin d’ingestion unique par événement de conversion et contrôler l’absence de flux redondants avant toute nouvelle connexion. Ne pas dupliquer une connexion existante à l’occasion du lancement de la nouvelle interface. Ce lancement ne justifie pas à lui seul une migration immédiate.

## Requêtes exactes

1. Français : `mesure attribution GA4 Google Ads novembre 2026 2 9 novembre consentement`
2. Presse tech généraliste : `TechCrunch The Verge 404 Media advertising measurement attribution November 2026 analytics`
3. Anglais, sources officielles : `Google Analytics Google Ads official measurement attribution November 2 9 2026`

## Sources retenues, ouvertes et lues

**[1] Google Analytics Help — “What's new in Google Analytics”. Niveau N1.** Section datée du **6 novembre 2026**, intitulée “Data Manager in Google Analytics (beta)”. Elle établit la date et le statut du lancement. Les entrées des 11 et 18 novembre ne sont pas retenues, car elles sont hors fenêtre. Source officielle de l’éditeur, sans mesure indépendante de bénéfice.

**[2] Google Analytics Help — “About Data Manager in Google Analytics (beta)”. Niveau N1.** Page sans date visible, liée depuis l’annonce du 6 novembre et lue comme documentation d’appui. Elle précise la bêta ouverte, la carte des connexions, le sens des flux, l’avertissement de double comptage et les limites de disponibilité. Sa date ne permet pas d’en faire une actualité autonome.

## Source ouverte et écartée

**Google Developers — “Google Advertising and Measurement Developer Blog”. Niveau N1.** La page ouverte affiche une dernière mise à jour au **10 novembre 2026**, hors fenêtre, et ne restitue aucune annonce exploitable dans le texte extrait. Elle n’étaye donc aucun fait retenu. [3]

Les autres résultats de recherche n’ont pas été ouverts ni utilisés comme preuves. Aucun résultat de la presse tech généraliste n’a été retenu. Les contenus de prestataires ou de nature promotionnelle ne servent pas de source à ce rapport.

## Contrôle des doublons

Les antécédents S45 et les fichiers `sources.json` de S42 à S45 ont été consultés. Le lancement du point d’entrée Data Manager dans Google Analytics n’y est pas traité. Il est distinct du sujet antérieur sur le format et le hachage des données de Data Manager API. Les sujets Connected Apps Platform, Reddit connecté, préférence IA Google/IETF, sanction CNIL, Octoverse, NIST agent identity, Pinterest, Ads in AI Mode et proclamation robotique ne sont pas repris. Les précédents sujets UTM ChatGPT, Nozzle et panel de sessions/conversions ne sont pas recyclés.

## Références

[1]: https://support.google.com/analytics/answer/9164320?hl=en "Google Analytics — What's new, lancement du 6 novembre 2026"
[2]: https://support.google.com/analytics/answer/18107176?hl=en "Google Analytics — About Data Manager, bêta ouverte"
[3]: https://developers.google.com/ads/blog "Google Advertising and Measurement Developer Blog — page écartée"
