# Vérification de publication — S39

**Édition contrôlée :** Semaine 39 — 21 septembre 2026  
**Édition archivée contrôlée :** Semaine 38 — 14 septembre 2026  
**Date de contrôle :** 22 septembre 2026

## Contrôles éditoriaux et techniques

| Contrôle | Résultat |
|---|---|
| Intégrité éditoriale S39 | Conforme : script `scripts/verify-s39-data.ts` validé avec 8 domaines, 9 sources et un Bonus distinct. |
| Ordre des domaines | Conforme : Google AI, Zero-Click, Schema.org, DXP / Headless, CDP & Data, UX / IA, IA / Gouvernance, Innovation Marketing. |
| Fenêtre des sources | Conforme : les 9 sources du registre sont datées du 15 au 21 septembre 2026. |
| TypeScript | Conforme : `pnpm run check` sans erreur. |
| Tests | Conforme : 23 tests réussis dans 6 fichiers Vitest. |
| Build | Conforme : `pnpm run build` réussi. L’avertissement Rollup sur la taille de bundle est non bloquant et préexistant. |
| Diff | Conforme : `git diff --check` sans erreur d’espacement. |
| GA4 | Conforme : le tag G-NZ24YB5E5N est présent dans `client/index.html`, juste après `<head>`, avec Consent Mode sur `analytics_storage: denied` par défaut. |

## Contrôle visuel — desktop

Les captures plein écran à **1440 × 1080** confirment la continuité de la charte : palette éditoriale, grille bento, sections sombres, hiérarchie du signal majeur et carte Bonus hachurée. L’accueil affiche S39, le 21 septembre 2026, 8 domaines, 9 sources, le signal « IA métier » et le chiffre 54,0 %. L’archive `/semaine/38` conserve l’édition précédente, y compris son Bonus Reuters.

| Test Bonus desktop | S39 accueil | S38 archive |
|---|---|---|
| Carte trouvée et ouverte | Oui — 373 px dans une grille de 1 120 px | Oui — 373 px dans une grille de 1 120 px |
| Face synthèse | Oui — source visible, bouton `ANALYSE` présent | Oui — source visible, bouton `ANALYSE` présent |
| Face analyse | Oui — bouton `RETOUR` et intitulé `ANALYSE COMPLÈTE` présents | Oui — bouton `RETOUR` et intitulé `ANALYSE COMPLÈTE` présents |

## Contrôle visuel — mobile

Les captures plein écran à **375 × 812** confirment la continuité de l’affichage mobile, sans dérive de structure. La carte Bonus occupe la pleine largeur disponible, conformément à la règle mobile de double largeur par rapport aux cartes de domaine.

| Test Bonus mobile | S39 accueil | S38 archive |
|---|---|---|
| Carte trouvée et ouverte | Oui — 327 px dans une grille de 327 px | Oui — 327 px dans une grille de 327 px |
| Face synthèse | Oui — source visible, bouton `ANALYSE` présent | Oui — source visible, bouton `ANALYSE` présent |
| Face analyse | Oui — bouton `RETOUR` et intitulé `ANALYSE COMPLÈTE` présents | Oui — bouton `RETOUR` et intitulé `ANALYSE COMPLÈTE` présents |

## Conclusion

La S39 est prête pour checkpoint et publication : l’accueil est basculé sur S39, S38 est archivée avec sa carte Bonus, la charte graphique et les comportements Bonus / Flip Card sont conservés sur desktop et mobile. La publication de production et la synchronisation GitHub restent les dernières étapes opérationnelles.
