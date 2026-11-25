# 04 — CMS et socle technique — S48 2026

**Statut : RETENU.** Fenêtre stricte : publications du 16 au 23 novembre 2026 inclus. Deux sujets retenus, trois requêtes distinctes et quatre pages ouvertes par fetch. Antécédents S45 et titres de sources S45 lus avant la collecte. Aucune configuration, version utilisée, exposition à une faille ou identité d’une école n’est publiée.

## 1. PHP : nouvelles publications de sécurité disponibles le 19 novembre

**Niveau : CRITIQUE. Statut éditorial : SUIVI** du thème de maintenance PHP traité en S44–S45, avec un fait nouveau : les publications de sécurité du 19 novembre. Le correctif initial PHP2Shell et le signalement CISA d’octobre ne sont pas réédités.

Le 18 novembre 2026, l’équipe de sécurité PHP annonce des publications pour le lendemain, visant les branches prises en charge. Elle indique que la gravité maximale est « CRITICAL », tout en précisant que les problèmes ainsi classés nécessitent une configuration non standard ou des installations peu courantes. Le 19 novembre, php.net annonce la disponibilité immédiate des publications de sécurité et encourage les utilisateurs concernés à mettre à jour. **Statut : correctifs publiés et disponibles, non simple annonce future ; aucune application par une école n’est attestée.** [1]

Le bulletin CERT-FR publié le 23 novembre répertorie des vulnérabilités PHP datées du 19 novembre, dont plusieurs notées **9,2** dans son tableau, avec des risques d’exécution de code à distance et, selon la vulnérabilité, de déni de service. La colonne d’exploitabilité indique « Pas d’information » pour les lignes PHP concernées : cela ne constitue ni une preuve d’exploitation ni une garantie d’absence d’exploitation. Les chiffres sont ceux du bulletin, sans recalcul. [2]

**Impact pour une école.** Si le socle web est concerné, une atteinte à l’intégrité du site ou une indisponibilité pourrait affecter l’information des candidats et les parcours en ligne. Cette conséquence est une analyse de risque conditionnelle, pas le constat d’une exposition d’une école.

**Recommandation — Immédiat.** Faire vérifier en privé l’applicabilité des avis et obtenir la confirmation de l’application des correctifs de sécurité adaptés, avec contrôle fonctionnel des parcours essentiels. Ne pas confondre correctif de sécurité et migration majeure. Ne publier aucun inventaire technique.

**Sources retenues.** php.net est une source officielle N1 ; les annonces des 18 et 19 novembre sont datées sur la page ouverte. Le CERT-FR est une source officielle N1 ; la première et la dernière version du bulletin sont datées du 23 novembre. Il synthétise des avis et ne remplace pas l’analyse d’applicabilité ni les instructions des éditeurs. Il ne s’agit pas d’une étude d’éditeur ni d’un résultat commercial.

## 2. Drupal : avis de sécurité sur l’installateur et risque de prise de contrôle

**Niveau : CRITIQUE. Statut éditorial : NOUVEAU.** L’avis sur l’installateur est distinct du correctif Field UI traité en S43 et de Commerce Core traité en S45.

La page officielle des avis de sécurité contient une annonce datée du **16 novembre 2026**, prévoyant une publication de sécurité du cœur Drupal le 18 novembre. Elle précise qu’au moins une vulnérabilité peut être exploitée par des utilisateurs anonymes et que plusieurs configurations sont concernées. [3]

Cette même page publie un avis daté du **18 novembre 2026**, intitulé « Drupal core - Highly critical - Remote code execution - SA-CORE-2026-017 ». Il explique que, dans des conditions spécifiques, un attaquant peut utiliser l’installateur pour tenter de réinstaller Drupal, ce qui peut conduire à une prise de contrôle du site ou à une exécution de code à distance. **Statut : avis officiel publié ; risque conditionnel, non exposition universelle ; déploiement dans une école non établi.** La page consultée ne fournit pas, dans cet extrait d’avis, les instructions complètes de correction : aucun numéro de correctif ni détail de mitigation n’est donc ajouté. [3]

**Impact pour une école.** Si l’avis est applicable au socle d’une école, l’intégrité des contenus et la continuité des parcours publics peuvent être menacées. Il ne permet pas de conclure qu’une école utilise Drupal ou est vulnérable.

**Recommandation — Immédiat.** Faire vérifier sans délai l’applicabilité de l’avis et la prise en compte des correctifs officiels, puis contrôler l’intégrité du site et le fonctionnement des parcours essentiels. Conserver les résultats techniques dans un canal privé.

**Limite de datation importante.** La page lue contient aussi une mise à jour signalant une exploitation sur des sites dès le 19 novembre à 19 h UTC. La date de publication de cette mise à jour n’est pas affichée dans le contenu lu. Ce signalement est donc **écarté des faits éditoriaux retenus**, malgré la date d’événement dans la fenêtre. Le score courant et l’indicateur d’exploitation susceptibles d’avoir été modifiés ne sont pas utilisés pour reconstituer l’état initial de l’avis. [3]

**Source retenue.** Drupal.org est une source officielle N1. La page d’index ouverte contient le texte des annonces et des avis cités ; les pages individuelles liées n’ont pas été ouvertes et ne sont pas présentées comme des sources lues. La promotion de Drupal Steward présente sur la page n’est pas utilisée ni recommandée. Aucune étude commerciale n’est invoquée.

## Résultat des quatre vérifications obligatoires

**php.net : vérification positive.** L’accueil officiel a été ouvert et lu. Avis préalable du 18 novembre et publications de sécurité disponibles le 19 novembre retenus. La publication majeure également annoncée le 19 novembre n’est pas sélectionnée : elle ne doit pas être confondue avec le traitement urgent des correctifs. Aucune nouvelle fin de support datée de la fenêtre n’est établie par la page lue. [1]

**drupal.org/security : vérification positive.** Page ouverte et lue : annonce du 16 novembre, avis sur l’installateur du 18 novembre retenu. L’autre avis du 18 novembre décrit une chaîne de méthodes utilisable en combinaison avec une désérialisation non sûre et indique explicitement qu’elle n’est pas directement exploitable ; il n’est pas transformé en troisième sujet. [3]

**wordpress.org/news : vérification positive.** La rubrique officielle Security de WordPress News a été ouverte et lue. Elle affiche une nouvelle publication de sécurité datée du **18 novembre 2026**, corrigeant plusieurs problèmes, avec recommandation de mise à jour immédiate. **Statut : publication de sécurité disponible ; application effective non établie.** Ce nouveau fait serait admissible comme suivi de S45 mais n’est pas sélectionné afin de respecter la limite de deux sujets et de privilégier les risques les mieux caractérisés par les pages lues. La page individuelle de la publication n’a pas été ouverte : aucun détail de vulnérabilité, chiffre ou statut d’exploitation n’est extrapolé. Les billets d’octobre sont hors fenêtre. [4]

**cert.ssi.gouv.fr : vérification positive.** Bulletin CERTFR-2026-ACT-049 ouvert et lu, première et dernière version du **23 novembre 2026**. Il couvre les vulnérabilités significatives du 16 au 22 novembre, renvoie notamment à un avis PHP du 19 novembre et rappelle des alertes sur Java et NGINX. PHP est utilisé comme corroboration. Les autres alertes ne sont pas retenues, compte tenu de la limite éditoriale et de l’absence de lecture des avis individuels. Le bulletin avertit qu’il ne remplace pas l’analyse de l’ensemble des avis. [2]

## Les trois requêtes exactes

1. Requête française : `CERT-FR PHP Drupal WordPress sécurité 16 23 novembre 2026`
2. Requête visant la presse tech généraliste : `TechCrunch The Verge 404 Media WordPress Drupal PHP security November 16 23 2026`
3. Requête anglaise visant les sources officielles : `php.net drupal.org/security wordpress.org/news security releases November 16 23 2026`

Aucun filtre temporel relatif n’a été utilisé. La sélection repose sur les dates affichées dans les pages réellement ouvertes, pas sur les seuls extraits de recherche.

## Sources et éléments écartés

**Pages lues.** La rubrique WordPress Security est conservée comme preuve de vérification, mais son nouveau correctif du 18 novembre n’est pas retenu comme sujet pour respecter la limite de deux sujets. Les anciennes publications WordPress d’octobre sont hors fenêtre. L’annonce majeure PHP du 19 novembre est écartée comme sujet distinct de modernisation. L’avis Drupal sur la chaîne de méthodes n’est pas une exploitation directe et ne justifie pas une troisième carte. La mise à jour Drupal sur l’exploitation est exclue faute de date de publication vérifiée. Les autres produits du bulletin CERT-FR restent hors sélection : les avis individuels n’ont pas été lus.

**Résultats de recherche non ouverts, non cités.** Les articles TechCrunch et The Verge proposés sur PHP en octobre sont écartés dès la sélection : métadonnées hors fenêtre et thème déjà traité. Les billets de prestataires de maintenance WordPress, fournisseurs de sécurité, agrégateurs et publications sociales trouvés ne sont pas utilisés : absence de lecture et priorité aux sources N1. Les titres et extraits de ces résultats ne fondent aucun fait du rapport. Aucun contenu sponsorisé, promotionnel ou derrière un paywall non lu n’est retenu.

## Références

[1]: https://www.php.net/ "PHP — annonces officielles des 18 et 19 novembre 2026"
[2]: https://cert.ssi.gouv.fr/actualite/CERTFR-2026-ACT-049/ "CERT-FR — bulletin d’actualité du 23 novembre 2026"
[3]: https://www.drupal.org/security "Drupal.org — Security advisories, annonces et avis des 16 et 18 novembre 2026"
[4]: https://wordpress.org/news/category/security/ "WordPress News — Security, publication de sécurité du 18 novembre 2026"
