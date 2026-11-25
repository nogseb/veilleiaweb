# 04 — CMS et socle technique — W47 2026

**Statut : RETENU.** Fenêtre stricte : publications du 9 au 16 novembre 2026 inclus. Un sujet retenu, fondé sur une source officielle N1 ouverte et lue. Collecte réalisée le 25 novembre 2026 : exactement trois requêtes distinctes et quatre fetch. Les antécédents S42 à S45, `2026-W48/antecedents-s45.md` et `2026-W45/antecedents.md` ont été contrôlés.

## Sujet retenu — Drupal : les extensions de téléversement et d’export PDF nécessitent une revue de sécurité

**Niveau : IMPORTANT. Statut éditorial : NOUVEAU.** Il ne s’agit ni du correctif Field UI déjà traité, ni de Commerce Core, ni de l’annonce Drupal du 16 novembre réservée à S48.

**Faits datés et statut.** Le 11 novembre 2026, Drupal a publié l’avis SA-CONTRIB-2026-338 concernant File Resumable Upload. L’absence de contrôle d’accès suffisant permet à une personne non authentifiée de démarrer des téléversements sur des formulaires auxquels elle n’a pas accès et de stocker des données partielles sur le serveur. L’avis précise que ces données ne sont pas exécutables par le serveur web et que leur rattachement au contenu passe par le formulaire normal, qui conserve ses propres contrôles d’accès. Drupal classe le risque « Moderately critical » et l’exploitation « Theoretical » : ce n’est pas un constat d’exploitation active. [1]

Le même jour, l’avis SA-CONTRIB-2026-327 concernant Entity Print indique que la génération d’un PDF contenant des ressources tierces peut transmettre au serveur tiers des données privées, notamment le cookie de session et des identifiants d’authentification HTTP du moteur de rendu. Le tiers peut alors obtenir des données de session et usurper l’identité de l’utilisateur qui imprime. L’avis classe également le risque « Moderately critical » et l’exploitation « Theoretical ». [1]

**Statut technique : avis publiés.** La page consultée décrit les vulnérabilités et leurs conditions, mais ne permet pas de documenter ici les versions corrigées ni un déploiement. Aucun correctif n’est présenté comme installé dans une école.

**Impact pour une école.** Si des fonctions comparables sont présentes, le téléversement de documents et la génération de PDF méritent une vérification ciblée. Ces avis illustrent que des fonctions périphériques d’un CMS peuvent contourner des autorisations ou transmettre des données de session. Aucun usage de ces modules, aucune configuration et aucune exposition ne sont attribués à une école.

**Recommandation — Immédiat.** Faire vérifier, en privé, l’applicabilité des avis aux fonctions de téléversement et d’export documentaire. Si une dépendance concernée est identifiée, engager sa remédiation conformément à l’avis complet et tester les accès ainsi que les ressources externes chargées lors des exports. Ne pas publier l’inventaire technique ni un diagnostic d’exposition d’une école.

**Source retenue.** Drupal.org, « Security advisories », sections SA-CONTRIB-2026-338 et SA-CONTRIB-2026-327 datées du 11 novembre 2026, N1. La page officielle a été ouverte et lue, y compris le contenu intégral enregistré par fetch. Limite : page d’index évolutive, sans lecture des pages individuelles de solution. Ce n’est pas une étude d’éditeur ; aucun résultat commercial ou chiffre de performance n’est repris. [1]

## Résultat des quatre vérifications obligatoires

**php.net — vérifié.** La page annonce le 12 novembre une version candidate destinée aux tests et interdit explicitement son utilisation en production. Non retenu : étape de prépublication, sans correctif de sécurité ni fin de support nouvelle documentée dans cette annonce. L’annonce critique du 18 novembre et les sorties de sécurité du 19 novembre sont hors fenêtre. Les antécédents PHP2Shell et support PHP ne sont pas repris. [2]

**drupal.org/security — vérifié.** Les avis d’extensions du 11 novembre fournissent le sujet retenu. L’annonce de correctifs du cœur datée du 16 novembre est expressément écartée, car réservée à S48. Les avis du cœur du 18 novembre et leur information d’exploitation ultérieure sont hors fenêtre et ne sont pas utilisés. [1]

**wordpress.org/news — vérifié.** L’index affiche « Copy Your WordPress Site with Reprint » au 13 novembre : écarté de cette sélection faute de lecture de l’article et de fait de sécurité ou de support établi. La version candidate du 17 novembre et la sortie de sécurité du 18 novembre sont hors fenêtre. Aucun nouveau sujet WordPress qualifié n’est retenu. [3]

**cert.ssi.gouv.fr — vérifié.** L’accès renvoie au site officiel CERT-FR sous `cert.cyber.gouv.fr`. La page lue référence les bulletins du 9 et du 16 novembre, sans en exposer le contenu. Ils ne sont donc pas cités comme preuve d’une vulnérabilité ou d’un correctif. Les avis affichés sont datés du 23 novembre ; les alertes NGINX et Java du 18 novembre sont hors fenêtre. La vérification est limitée à l’index ouvert : elle ne constitue pas une revue exhaustive des avis et bulletins archivés. Aucun fait CMS ou serveur de la fenêtre n’a été qualifié sur cette page. [4]

## Les trois requêtes exécutées

1. **Français :** `CMS PHP WordPress Drupal CERT-FR sécurité correctifs 9 16 novembre 2026`
2. **Presse tech généraliste :** `TechCrunch The Verge 404 Media WordPress Drupal PHP server security November 9 16 2026`
3. **Anglais, sources officielles :** `php.net drupal.org/security wordpress.org/news cert.ssi.gouv.fr security releases November 9 16 2026`

## Sources et pistes écartées

Les pages effectivement lues mais non retenues comme source du sujet sont php.net, WordPress News et l’index CERT-FR, pour les motifs détaillés dans les quatre vérifications. L’annonce Drupal du 16 novembre est écartée par réservation éditoriale ; les faits ultérieurs sont écartés par date.

Les résultats suivants sont des **pistes de recherche non ouvertes, non citées comme preuves** : les articles TechCrunch et The Verge sur PHP2Shell datés du 21 au 27 octobre sont hors fenêtre et recoupent des antécédents ; l’article CyberShield du 9 novembre est promotionnel et n’est pas admissible seul ; les publications commerciales sur les sorties PHP du 19 novembre sont hors fenêtre ; les résultats Reddit et Facebook ne constituent pas une preuve primaire. Aucun sujet n’est rempli avec ces résultats.

## Références — pages ouvertes et lues

[1]: https://www.drupal.org/security "Drupal.org — Security advisories, avis du 11 novembre 2026"
[2]: https://www.php.net/ "PHP — annonces officielles, consultation du 25 novembre 2026"
[3]: https://wordpress.org/news/ "WordPress News — index officiel des publications"
[4]: https://www.cert.ssi.gouv.fr/ "CERT-FR — index officiel des alertes, avis et bulletins"
