# Vérification de publication — S40

**Édition contrôlée :** Semaine 40 — 2026  
**Date de contrôle :** 29 septembre 2026  
**Prévisualisation :** `https://3000-i2jrock0a8q5v53cu4ghm-16f713a4.us1.manus.computer/`

## Intégrité éditoriale

| Contrôle | Résultat |
|---|---|
| Semaine et date | Conforme : S40, 28 septembre 2026 |
| Domaines obligatoires | Conforme : 8, dans l’ordre contractuel |
| Flip Cards | Conforme : 8 `longDescription` complètes |
| Bonus | Conforme : distinct de `domaines`, distinct des compteurs de domaines, avec source IFR et analyse longue |
| Sources affichées | Conforme : 11 URL dans `sources.json`, 11 sources affichées et 11 liens dans les cartes + Bonus |
| Fenêtre des sources | Conforme : dates du 22 au 28 septembre 2026 |
| Cas Target | Conforme : marque et mécanisme documentés ; les chiffres T2 sont explicitement marqués comme non attribués causalement à « Inside Out » |
| Archive | Conforme : S39 disponible sur `/semaine/39`, avec 8 domaines et Bonus MIT News conservé |

## Contrôles automatisés

| Commande / test | Résultat |
|---|---|
| `npx tsx scripts/verify-s40-data.ts` | Validé : 8 domaines, 11 sources, Bonus distinct |
| `pnpm run check` | Validé sans erreur TypeScript |
| `pnpm test` | Validé : 7 fichiers, 26 tests réussis |
| `pnpm run build` | Validé. Avertissement non bloquant : chunk JavaScript principal supérieur à 500 kB après minification |
| `git diff --check` | Validé sans erreur d’espacement |

## Contrôles visuels et interactions

| Vue | Résultat |
|---|---|
| Accueil S40 — desktop 1440 × 1080 | Conforme : S40, 8 domaines, 11 sources, grille bento et carte Bonus à largeur standard desktop |
| Accueil S40 — mobile 375 × 812 | Conforme : grille responsive ; Bonus sur double colonne, contenu contenu à une colonne visuelle |
| Archive S39 — desktop 1440 × 1080 | Conforme : S39 conservée, 8 domaines et Bonus MIT News |
| Archive S39 — mobile 375 × 812 | Conforme : Bonus sur double colonne mobile et grille lisible |
| Bonus S40 — desktop | Conforme : largeur carte 373 px pour une grille de 1 120 px ; face avant, source, bouton Analyse et face arrière testés |
| Bonus S40 — mobile | Conforme : largeur carte 327 px pour une grille de 327 px ; face avant et arrière testées |
| Bonus S39 — desktop | Conforme : largeur carte 373 px pour une grille de 1 120 px ; face avant, source et analyse testées |
| Bonus S39 — mobile | Conforme : largeur carte 327 px pour une grille de 327 px ; face avant et arrière testées |

## Contrôle des sources

Les 11 URL du registre ont été testées : huit ont répondu `HTTP 200` avec l’agent de vérification. Trois éditeurs (OtterlyAI, OpenAI Help et Marketing Dive) ont renvoyé `HTTP 403` au client direct, comportement anti-bot attendu ; leurs pages ont néanmoins été lues avec l’extracteur web lors de la qualification éditoriale et les contenus associés sont accessibles à cette étape. Aucun fait ou chiffre non attribué n’a été ajouté.

## Conclusion

La prévisualisation S40 est prête au checkpoint et à la publication WebDev. La sauvegarde GitHub doit être synchronisée après le checkpoint final ; elle ne constitue pas le mécanisme de déploiement.
