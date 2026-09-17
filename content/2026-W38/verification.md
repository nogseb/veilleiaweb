# Vérification de publication — S38

**Édition contrôlée :** semaine 38, publiée le 14 septembre 2026.  
**Périmètre de contrôle :** édition courante, archive S37, carte Bonus et modales à deux faces.

## Intégrité éditoriale

La structure S38 est cohérente avec le registre de sources : l’édition comprend **8 domaines** dans l’ordre imposé, **9 sources** au total et un **Bonus #10** distinct. Le compteur des sources est identique dans `veille-s38.ts`, `sources.json` et `rapport.md`. Les 9 URL ont été vérifiées le 17 septembre 2026 : sept répondent directement en HTTP 200. CMSWire applique un refus automatisé HTTP 403 et Reuters une authentification HTTP 401 dans cet environnement ; ces protections techniques ne modifient pas les références conservées dans le registre de sources.

## Validation applicative

La page d’accueil charge l’édition S38 et affiche la métadonnée « Semaine 38 — 2026 », le signal majeur et la statistique dominante de **0,48 %**. Le registre d’archives charge S38 comme édition courante et conserve S37 comme édition accessible à l’URL `/semaine/37` avec ses huit domaines et son Bonus source IFA Berlin.

Le contrôle TypeScript, les tests automatisés et le build de production ont tous réussi. La suite Vitest compte **17 tests réussis sur 17**.

## Contrôle visuel desktop

Les captures plein écran à 1440 × 1080 confirment que l’accueil S38 respecte la maquette existante : hiérarchie éditoriale, palette, sections foncées, grille bento et carte Bonus à trame hachurée. La carte Bonus S38 reste à largeur standard sur desktop. La page archivées S37 conserve la même logique et le Bonus historique n’est pas intégré aux compteurs des huit domaines.

## Contrôle responsive et modales Bonus

Les scripts de contrôle ont validé les vues 375 × 812 et 1440 × 1080 pour l’accueil S38 et l’archive S37. Dans les deux contextes, la face avant de la modale Bonus affiche le bouton « ANALYSE » et la source ; la face arrière affiche « RETOUR » et « ANALYSE COMPLÈTE ». Sur mobile, la carte Bonus s’étend sur les deux colonnes disponibles et le contenu reste volontairement contraint à la largeur d’une colonne. Sur desktop, elle revient à une largeur bento standard.

| Route | Mobile 375 px | Desktop 1440 px | Face avant | Face analyse |
|---|---|---|---|---|
| `/` — S38 courante | Carte Bonus sur 2 colonnes | Carte Bonus standard | Validée | Validée |
| `/semaine/37` — S37 archivée | Carte Bonus sur 2 colonnes | Carte Bonus standard | Validée | Validée |

## Résultat

**Validation prête pour checkpoint et publication WebDev.**

## Confirmation visuelle mobile

Les captures plein écran à 375 × 812 confirment la continuité de la mise en page mobile pour l’accueil S38 et l’archive S37. Les cartes de domaine restent sur deux colonnes, tandis que la carte Bonus hachurée s’étend bien sur la largeur des deux colonnes sans surcharger le texte. Aucun décalage, débordement horizontal ni dérive de la palette n’a été observé dans les vues vérifiées.
