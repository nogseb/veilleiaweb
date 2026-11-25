# 04 — CMS et socle technique — W46 2026

**Statut : RETENU.** Fenêtre de publication strictement appliquée : du 2 au 9 novembre 2026 inclus. Recherche réalisée le 25 novembre 2026. Un sujet retenu, fondé sur une source N1 ouverte et lue ; quatre pages officielles ont été consultées, soit moins de cinq sources qualifiées. Aucun établissement, inventaire interne ni exposition à une vulnérabilité n’est identifié.

## Sujet retenu — Drupal : nouveaux avis sur la réinitialisation des comptes et le calendrier éditorial

**Niveau : IMPORTANT. Statut éditorial : NOUVEAU.** Les avis du 4 novembre concernent des modules complémentaires, et non le correctif du cœur Drupal déjà traité en S43. Ils ne reprennent pas les sujets PHP et WordPress de S44–S45.

**Faits datés et statut.** Le registre officiel Drupal publie le 4 novembre 2026 deux avis distincts. L’avis SA-CONTRIB-2026-305, consacré à Reset Password Email/SMS OTP, décrit une validation insuffisante de la réinitialisation des mots de passe des utilisateurs bloqués. Drupal le classe « Critical », avec un score publié de 15 / 25. Limite déterminante : une personne disposant des permissions appropriées doit débloquer le compte pour que l’attaquant puisse utiliser le nouveau mot de passe. La source qualifie l’exploitation de théorique, et non d’attaque observée. [1]

L’avis SA-CONTRIB-2026-306, consacré à Scheduler, décrit un contrôle insuffisant des permissions de modification des dates de publication ou de dépublication. Des informations pourraient être publiées avant la date prévue, ou devenir indisponibles plus tôt ou plus tard que prévu. Drupal le classe « Moderately critical », avec un score publié de 13 / 25. L’attaquant doit déjà pouvoir modifier le contenu concerné, lequel doit être éditable par une API de services web. Là encore, l’exploitation est qualifiée de théorique. [1]

**Statut technique : avis publiés.** La page lue établit les vulnérabilités et leurs conditions. Les pages individuelles et les instructions détaillées de correction n’ont pas été ouvertes dans le budget de quatre fetch ; aucun correctif précis ni déploiement effectif n’est affirmé.

**Impact pour une école.** Si les composants concernés sont présents, ces défauts peuvent affecter la gestion des comptes et le respect des dates de publication de contenus. L’applicabilité doit être vérifiée en privé : rien ne permet d’affirmer qu’une école est équipée des modules concernés ou exposée.

**Recommandation — Immédiat.** Faire vérifier en privé l’applicabilité des avis officiels, puis les instructions de correction correspondantes. Si le périmètre est concerné, prioriser la remédiation et contrôler les permissions de publication ainsi que le traitement des comptes bloqués. Ne publier ni résultat d’inventaire ni détail de configuration.

**Source retenue.** Drupal.org, « Security advisories », entrées datées du 4 novembre 2026, N1. Le registre a été ouvert et les passages complets des deux avis ont été lus. Source de première main, pas une étude commerciale ; aucune preuve d’exploitation active ou de correction appliquée à une école. [1]

## Résultat des quatre vérifications obligatoires

**php.net — vérifié.** L’archive officielle présente le 5 novembre une candidate à la publication destinée aux tests, avec interdiction explicite d’usage en production. Cette annonce est dans la fenêtre, mais n’est pas retenue : étape de test sans correctif opérationnel établi dans le passage lu. Les publications du 26 octobre et du 12 novembre sont hors fenêtre. Aucun rappel de fin de support ou de PHP2Shell n’est recyclé. [2]

**drupal.org/security — vérifié.** Le registre contient les avis du 4 novembre retenus ci-dessus. Les avis du 11 novembre, comme l’annonce de publication du cœur prévue le 18 novembre, sont hors fenêtre. Les autres avis de modules du 4 novembre ne sont pas transformés en catalogue : un seul sujet est retenu, centré sur les comptes et le calendrier éditorial. [1]

**wordpress.org/news — vérifié.** L’archive de novembre présente une bêta datée du 3 novembre, explicitement limitée au développement et aux tests, ainsi qu’une publication du 9 novembre sur un programme de contribution académique. La bêta est écartée faute de signal opérationnel suffisamment fort ; le programme est hors du périmètre technique et n’est pas utilisé comme cas d’établissement. Les publications du 10 novembre et suivantes sont hors fenêtre. Aucune configuration d’une école n’est déduite de ces annonces. [3]

**cert.ssi.gouv.fr — vérifié, couverture limitée à l’index.** La page ouverte mène au portail CERT-FR et affiche une alerte OpenSSH datée du 5 novembre ainsi que les bulletins d’actualité datés des 2 et 9 novembre. Le contenu de ces documents n’a pas été ouvert : leurs seuls titres ne permettent pas de qualifier une vulnérabilité, un correctif ou une recommandation technique. Ils ne sont donc pas retenus. Les avis visibles en page d’accueil sont datés du 23 novembre, hors fenêtre. Cette vérification ne vaut pas consultation exhaustive des archives d’avis. [4]

## Les trois requêtes exécutées

1. Français : `PHP Drupal WordPress CERT-FR sécurité correctif 2 9 novembre 2026`
2. Presse tech généraliste : `TechCrunch The Verge 404 Media WordPress PHP Drupal security November 2 9 2026`
3. Anglais, sources officielles : `php.net drupal.org/security wordpress.org/news cert.ssi.gouv.fr November 2 9 2026 release security bulletin`

Exactement trois requêtes distinctes et quatre fetch ont été exécutés. Les lectures locales portent sur les antécédents et les contenus déjà extraits, sans nouvelle recherche web.

## Sources et pistes écartées

**Pages ouvertes.** PHP : annonce de test du 5 novembre, non retenue pour pertinence opérationnelle limitée ; publications voisines hors fenêtre. WordPress : bêta du 3 novembre non retenue pour le même motif ; programme de contribution du 9 novembre hors périmètre. Drupal : avis postérieurs au 9 novembre hors fenêtre ; autres modules du 4 novembre non sélectionnés pour conserver un seul sujet. CERT-FR : documents de la fenêtre seulement repérés dans l’index, non lus individuellement, donc non qualifiés. [1] [2] [3] [4]

**Pistes de recherche non ouvertes et non citées comme preuves.** Le résultat CyberShield du 9 novembre est écarté comme contenu promotionnel d’un prestataire non admis en N1/N2. Les résultats de blogs commerciaux et réseaux sociaux ne constituent pas des preuves recevables. Les pistes PHP d’octobre sont à la fois hors fenêtre et déjà traitées. Les pistes Drupal et PHP du 19 novembre sont hors fenêtre. La requête visant TechCrunch, The Verge et 404 Media n’a pas produit de page de presse généraliste suffisamment qualifiée pour être ouverte et retenue ; les reprises sur réseaux sociaux ne valent pas lecture de l’article original.

**Antériorité.** Les fichiers d’antécédents S45 et les sources S42 à S45 ont été contrôlés. S43 couvre déjà le cœur Drupal et ses échéances de support ; S44 couvre PHP2Shell et le support PHP ; S45 couvre des alertes CISA, une publication de sécurité WordPress et Commerce Core. Aucun de ces sujets n’est repris sans fait nouveau.

## Références

[1]: https://www.drupal.org/security "Drupal — Security advisories, entrées du 4 novembre 2026"
[2]: https://www.php.net/archive/2026.php "PHP — Archive officielle des annonces de 2026"
[3]: https://wordpress.org/news/2026/11/ "WordPress News — Archive de novembre 2026"
[4]: https://www.cert.ssi.gouv.fr/ "CERT-FR — Index des alertes, avis et bulletins d’actualité"
