# Vérification de publication — S41

**Édition contrôlée :** Semaine 41 — 5 octobre 2026  
**Fenêtre éditoriale :** 29 septembre–5 octobre 2026  
**Date des contrôles :** 5 octobre 2026

## Intégrité éditoriale

- L’édition affiche **3 domaines qualifiés** dans l’ordre relatif imposé : Google AI Search, Zero-click / GEO, UX / IA conversationnelle.
- Les cinq domaines sans source qualifiée dans la fenêtre sont volontairement masqués : Schema.org / données structurées ; DXP / CMS headless / composable ; CDP / data first-party / identité ; IA générative en production / gouvernance ; innovation marketing / cas d’école.
- Le registre `sources.json` contient **7 URL distinctes** : 6 sources de domaines et 1 source Bonus. Le compteur affiché est cohérent avec ce registre.
- Le Bonus #10 est distinct de `domaines` et ne modifie pas le compteur de domaines.
- Les descriptions longues des trois domaines et du Bonus sont présentes pour les modales Flip Card.

## Tests applicatifs

| Contrôle | Résultat |
|---|---|
| `npx tsx scripts/verify-s41-data.ts` | Conforme : 3 domaines qualifiés, 5 domaines masqués, 7 sources et Bonus distinct. |
| `pnpm run check` | Conforme : TypeScript sans erreur. |
| `pnpm test` | Conforme : 8 fichiers de test, 29 tests réussis. |
| `pnpm run build` | Conforme : build Vite et serveur générés. Avertissement non bloquant sur la taille d’un chunk et sur la configuration `pnpm` dépréciée. |
| `git diff --check` | Conforme : aucun espace ou conflit de patch détecté. |

## Contrôle des sources

Les URL Google, M+C Saatchi Performance et MIT News renvoient HTTP 200 lors du contrôle direct. Les trois pages OpenAI renvoient HTTP 403 à un client Python non navigateur ; elles ont été ouvertes et vérifiées durant la collecte S41 via le navigateur de recherche des sous-tâches. Ce blocage anti-automatisation ne remet pas en cause leurs URL, dates ni contenus retenus.

## Contrôle visuel et responsive

Les captures desktop (1440 × 1080) et mobile (375 × 812) de l’accueil S41 et de l’archive S40 confirment la continuité de la charte : palette, grille bento, sections sombres, absence de dérive graphique et compteurs cohérents.

| Parcours Bonus | Desktop | Mobile |
|---|---:|---:|
| Accueil S41 — carte standard / carte double largeur | 373 px sur grille 1120 px | 327 px sur grille 327 px |
| Archive S40 — carte standard / carte double largeur | 373 px sur grille 1120 px | 327 px sur grille 327 px |
| Face synthèse | Conforme | Conforme |
| Lien source visible | Conforme | Conforme |
| Face analyse complète | Conforme | Conforme |
| Bouton retour | Conforme | Conforme |

La modale Bonus S41 a également été ouverte manuellement dans la prévisualisation : source MIT News visible sur la face synthèse, puis texte complet visible après bascule vers « Analyse ».

## Archivage

- S41 devient l’édition courante.
- S40 est disponible à `/semaine/40` avec ses 8 domaines, 11 sources et son Bonus IFR conservé.
- L’ordre des archives est décroissant : S41, S40, S39, puis les éditions antérieures.
