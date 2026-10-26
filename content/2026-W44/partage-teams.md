# Aperçus de partage Teams — correction du 26 octobre 2026

La capture fournie montre une vignette de page recadrée et un titre générique, sans descriptif. Le HTML public contenait une image Open Graph de checkpoint mais ni `meta description` ni `og:description`.

## Correction

Un titre daté et une description propre à l’édition sont maintenant fournis dans le HTML initial : accueil, pages de semaines et pages publiques. La description S44 est : « PHP2Shell : sécuriser les environnements PHP. Rea et rétro-ingénierie, visibilité IA/GEO et gouvernance data : les priorités de TBS Education. »

Une vignette typographique dédiée remplace la capture automatique. Format PNG 1 200 × 1 200, 37 791 octets, couleur et police du site, texte centré. Son contenu contrasté tient entre les coordonnées 340–860 et 355–847 : il reste entier dans les recadrages centrés 1:1, environ 1,25:1 montré dans Teams et 1,90:1. Ce test ne promet pas tous les cadrages possibles des clients Teams.

Image publiée sur une URL CDN permanente et publique, vérifiée HTTP 200 en GET et HEAD, sans redirection signée ni connexion. Le stockage WebDev existe aussi mais n’est pas utilisé par les balises sociales pour éviter la mise en cache d’une redirection signée périmée.

Les balises Open Graph et Twitter comprennent titre, description, image, dimensions, type MIME et texte alternatif. Un seul jeu de balises est servi. Le build et le serveur les produisent sans JavaScript ; la navigation React les met aussi à jour. La balise Google et le consentement existants restent inchangés. Les statistiques ne sont pas exposées dans les métadonnées.

## Validation et usage

TypeScript, 44 tests unitaires et build réussis. Contrôle HTTP sans JavaScript de sept routes en développement et du build de production. Image publique vérifiée ; mise en page du site inchangée. Aucun accès à Teams ni demande d’authentification.

Après publication WebDev, coller un nouveau lien de semaine, par exemple `/semaine/44`, est préférable à réutiliser toujours la racine : la destination de l’édition reste fixe et l’URL est différente d’une semaine à l’autre. Un paramètre de partage peut aider à déclencher une nouvelle lecture, mais ne constitue pas une garantie de purge du cache Teams. Les cartes déjà envoyées peuvent conserver l’ancien aperçu. Certains formats compacts de Teams peuvent ne pas afficher la description, même si le site la fournit.

La correction est validée et prête à publier au moment de cette note ; le déploiement de ces métadonnées n’est pas encore attesté.

## Références vérifiées

[1]: https://ogp.me/ "Open Graph Protocol — description, images, dimensions, texte alternatif et priorité des balises"
[2]: https://learn.microsoft.com/en-us/answers/questions/1867084/open-graph-thumbnail-previews-for-urls-get-cut-off "Microsoft Q&A — recadrage des vignettes Teams signalé en août 2024"
[3]: https://learn.microsoft.com/en-us/answers/questions/5636536/how-do-i-update-the-thumbnail-in-a-url-preview-on "Microsoft Q&A — métadonnées et mise à jour d’une vignette de lien Teams"
[4]: https://learn.microsoft.com/en-us/microsoftteams/platform/messaging-extensions/how-to/link-unfurling "Microsoft — le cache de 30 minutes documenté concerne l’unfurling applicatif, pas l’aperçu standard Open Graph"

- [Protocole Open Graph][1]
- [Signalement du recadrage Teams][2]
- [Métadonnées et mise à jour d’aperçu Teams][3]
- [Unfurling applicatif, distinct du partage standard][4]
