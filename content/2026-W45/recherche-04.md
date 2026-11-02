# Recherche 04 — CMS et socle technique

## SUIVI — CRITIQUE · action < 30 jours
### PHP : l’inscription au catalogue d’exploitation connue transforme le correctif d’octobre en priorité immédiate

**État : fait nouveau constaté le 26 octobre 2026. Statut de recommandation : Immédiat.**

Le 26 octobre, l’agence américaine CISA a ajouté au catalogue des vulnérabilités connues comme exploitées deux failles critiques de PHP. Sa mise à jour du même jour établit que ce n’est plus seulement une alerte de correctif : l’exploitation est désormais reconnue dans son catalogue de référence. Le fait nouveau autorise un **SUIVI** du sujet PHP traité en S44, qui portait sur le correctif et la fin de support ; il ne répète pas l’alerte initiale du 21 octobre. CISA précise que les installations PHP qui servent des requêtes web sont concernées et demande de prioriser les systèmes exposés à Internet. Elle indique également que les organisations ne pouvant pas corriger immédiatement devraient retirer les systèmes concernés du service jusqu’à correction. [1] [2]

**Impact pour une école.** Un service web exposé qui dépend de PHP peut faire l’objet d’une compromission avant qu’un correctif habituel ne soit appliqué. L’ajout au catalogue d’exploitation connue justifie une priorité supérieure à la simple maintenance planifiée.

**Recommandation.** Une école doit faire confirmer immédiatement, par les responsables techniques ou le prestataire contractuellement responsable, la couverture de correctif de ses services web PHP exposés. En attente d’une confirmation fiable, elle doit réduire l’exposition des services concernés et appliquer sa procédure de détection et de réponse aux incidents en cas de signal suspect. Cette recommandation reste générale : les sources ne permettent pas de conclure sur l’utilisation de PHP par une école donnée.

## CRITIQUE · action < 30 jours
### CMS : correctif WordPress et avis Drupal Commerce signalant une exploitation active

**État : correctifs publiés le 28 octobre 2026 ; exploitation active signalée pour le composant Drupal concerné. Statut de recommandation : Immédiat.**

Le 28 octobre, WordPress.org a publié une mise à jour de sécurité et recommande de l’appliquer immédiatement. L’avis public couvre notamment un défaut pouvant conduire à l’exécution de code durant une fenêtre de mise à jour, ainsi que plusieurs problèmes de script stocké, de confidentialité et de disponibilité. Les correctifs ont aussi été reportés vers les branches encore éligibles au support de sécurité. [3]

Le même jour, Drupal.org a publié un avis très critique pour le module contribué Commerce Core. L’éditeur indique qu’un contournement d’accès est activement exploité, qu’il peut affecter la confidentialité et l’intégrité, et demande aussi de contrôler les incohérences dans les données concernées après correction. Il s’agit d’un module contribué, non d’un nouvel avis sur le cœur Drupal : cette distinction évite de recycler l’alerte de cœur Drupal traitée en S43. [4]

**Impact pour une école.** Les deux avis confirment des correctifs disponibles. Le risque Drupal ne vise que les sites employant ce composant ; l’avis WordPress vise le logiciel de publication. Aucun élément public ne permet d’inférer l’usage de l’un ou l’autre par une école.

**Recommandation.** Une école doit demander une vérification prioritaire de la présence de ces composants dans son périmètre validé, appliquer les correctifs de l’éditeur lorsqu’ils sont présents et contrôler la cohérence des données métier potentiellement touchées. Toute mise à jour doit suivre les procédures de sauvegarde, de validation et de traçabilité déjà approuvées.

## Comparaison avec les antécédents

La S44 a déjà couvert le correctif PHP et l’échéance de support. Le seul fait retenu ici est donc la bascule datée du 26 octobre vers le catalogue CISA des vulnérabilités exploitées. La S43 a couvert un avis de sécurité du cœur Drupal et des échéances de branches. Aucun avis cœur Drupal n’a été publié dans la fenêtre : le plus récent affiché par le filtre officiel est daté du 14 octobre. L’avis Commerce Core du 28 octobre est nouveau, porte sur un projet contribué et mentionne une exploitation active. La publication WordPress de sécurité du 28 octobre n’apparaît pas dans les antécédents.

## Recherches réalisées

1. Requête française : `CMS PHP Drupal WordPress sécurité serveur 26 octobre 2026 2 novembre 2026`.
2. Requête presse tech généraliste : `TechCrunch The Verge 404 Media JDN BDM Next.ink WordPress Drupal PHP security October 2026`.
3. Requête anglaise finale : `PHP WordPress Drupal CMS server security October 26 2026 November 2 2026 official`.
4. Vérification complémentaire Drupal : recherches ciblées des avis Drupal datés des 28 et 29 octobre ainsi que du 1er novembre 2026.

Les portails requis ont tous été ouverts et lus : php.net, Drupal Security, WordPress.org et CERT-FR.

## Sources ouvertes mais non retenues

- **PHP.net, 26 octobre** : une reconstruction des paquets Windows intègre une dépendance corrigée. Elle ne modifie pas le moteur PHP et la décompression concernée n’est pas active par défaut ; fait trop étroit pour une carte distincte.
- **Drupal Security — cœur** : aucun avis cœur daté entre le 26 octobre et le 2 novembre ; les avis de cœur les plus récents visibles sont du 14 octobre. Les nombreux avis contrib du 28 octobre n’ont pas été multipliés en cartes ; seul Commerce Core est retenu car l’éditeur signale une exploitation active.
- **WordPress.org, 27 octobre** : version bêta de développement ; état de test, non retenu comme fait de sécurité opérationnel.
- **CERT-FR** : l’alerte PHP visible est datée du 21 octobre, hors fenêtre et déjà couverte en S44. Le bulletin du 26 octobre récapitule la semaine précédente sans fait CMS/PHP/serveur nouveau qualifié dans la fenêtre.
- **TechCrunch, 23 octobre** : article vidéo lu pour satisfaire la recherche de presse tech généraliste, mais daté hors fenêtre et redondant avec les sources officielles ; non cité.
- **WordPress.org, 21 octobre** : communication relative à l’alerte PHP initiale, hors fenêtre et déjà couverte en S44 ; non citée.

## Limites

- Les sources officielles établissent l’existence des correctifs, l’inscription au catalogue CISA et l’exploitation active signalée pour le module Drupal, mais ne renseignent pas l’usage réel de ces technologies par une école.
- La liste CISA est une source américaine ; elle atteste le statut d’exploitation connu, sans constituer à elle seule une mesure de prévalence dans le secteur éducatif français.
- Les avis Drupal du 28 octobre visent des projets contribués. Leur applicabilité dépend donc de la présence effective du composant, qui n’est pas recherchée ni publiée ici.

## Sources retenues

[1]: https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching "Critical Vulnerabilities in PHP Require Immediate Patching — CISA, révisé le 26 octobre 2026"
[2]: https://www.cisa.gov/known-exploited-vulnerabilities-catalog "Known Exploited Vulnerabilities Catalog — CISA, entrées PHP ajoutées le 26 octobre 2026"
[3]: https://wordpress.org/news/2026/10/wordpress-7-1-4/ "Publication de sécurité WordPress — WordPress.org, 28 octobre 2026"
[4]: https://www.drupal.org/sa-contrib-2026-254 "Commerce Core — Highly critical Access bypass — Drupal.org, 28 octobre 2026"
