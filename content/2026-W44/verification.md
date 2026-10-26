# Vérification — Veille IA & Web S44

**Date de vérification :** 26 octobre 2026  
**Édition :** S44 — publication éditoriale du 26 octobre 2026  
**Prévisualisation contrôlée :** `http://127.0.0.1:3000/` et preview WebDev.

## Intégrité éditoriale

- Édition courante : **S44 / 2026**.
- Domaines publiés : **4** — Google AI Search, Zero-Click/GEO, UX/UI conversationnelle et IA en production/gouvernance, dans leur ordre imposé.
- Domaines volontairement masqués : **4** — Schema.org/données structurées, DXP/CMS headless/composable, CDP/data first-party/identité et innovation marketing/cas d’école.
- Sources : **12 URLs distinctes**, inventoriées dans `sources.json` et reliées au rapport Markdown.
- Bonus : **Bonus #10 — robotique**, distinct des quatre domaines et exclu des compteurs de domaines.
- Cas d’école : aucun contenu n’a réuni simultanément marque, mécanisme, période et KPI vérifiable ; aucune carte ne le présente donc comme retenu.
- Archive : **S43 corrigée** disponible sous `/semaine/43` avec 9 analyses, 32 sources et son Bonus distinct.

## Contrôles automatisés

| Contrôle | Résultat |
|---|---|
| `npx tsx scripts/verify-s43-data.ts` | Réussi : 9 analyses, 32 sources et Bonus distinct. |
| `npx tsx scripts/verify-s44-data.ts` | Réussi : 4 analyses qualifiées, 4 domaines masqués, 12 sources et Bonus distinct. |
| `pnpm run check` | Réussi. |
| `pnpm test` | Réussi : 11 fichiers, 38 tests. |
| `pnpm run build` | Réussi. Avertissement Vite non bloquant sur la taille d’un chunk existant. |
| `git diff --check` | Réussi : aucune erreur d’espacement. |
| Routes preview `/` et `/semaine/43` | Disponibles et cohérentes avec les compteurs attendus. |
| URLs citées S44 | 11 réponses HTTP 200 avec redirections suivies ; 1 réponse HTTP 403 anti-bot côté OpenAI, dont le contenu a été lu et vérifié pendant la recherche. |

## Contrôles visuels et interactifs

- Captures plein format contrôlées en **desktop 1440 × 1080** et **mobile 375 × 812** sur la S44 et l’archive S43 corrigée.
- Les compteurs **4 domaines / 12 sources** et l’ordre Google AI, Zero-Click/GEO, UX/UI, IA en production sont visibles sur la page d’accueil.
- La charte existante est préservée : palette, typographie, badges, bento, sections sombres et trame hachurée du Bonus.
- Les cartes Bonus S44 et S43 archivée sont validées sur les deux viewports :
  - desktop : largeur standard **373 px** dans une grille de **1120 px** ;
  - mobile : largeur double colonne **327 px**, égale à la largeur de la grille ;
  - face avant, lien source, bouton `ANALYSE`, face d’analyse et bouton `RETOUR` fonctionnels dans les quatre parcours.

## Résultat

La S44 est validée pour checkpoint, publication WebDev et synchronisation GitHub. La S43 corrigée sera simultanément rendue accessible dans les archives publiques.
