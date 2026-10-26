# Vérification — Veille IA & Web S43 corrigée

**Date de vérification :** 26 octobre 2026  
**Édition :** S43 — publication éditoriale du 21 octobre 2026  
**Périmètre :** intégration du rapport `veille-ia-web-S43-2026.md` fourni par Sébastien Noguès.

## Intégrité éditoriale

- Édition : **S43 / 2026**, datée du **21 octobre 2026**.
- Analyses affichées : **9**, dans l’ordre éditorial fourni : Google AI, Zero-Click/GEO, robots et données structurées, CMS/DXP, CDP/data/identité, mesure, UX/agents, IA/gouvernance puis innovation marketing.
- Sources citées : **32 URLs uniques** dans `sources.json` ; les 4 exceptions de période ou de contexte sont explicitées dans le registre.
- Bonus : **Bonus #10 — Geek fact**, distinct des analyses et exclu des compteurs de domaines.
- Cas d’école : **Currys**, documenté dans `cas-ecole.md` à partir du communiqué IPA du 1er octobre, retenu dans la fenêtre élargie de 30 jours et assorti de sa limite de source.
- Correction appliquée : les fausses attributions d’entrées Google Search Central d’octobre 2026 ont été retirées ; la carte « robots / data » repose désormais sur les conditions Meta et la gouvernance des bots Cloudflare, conformément au rapport fourni.

## Contrôles automatisés

| Contrôle | Résultat |
|---|---|
| `npx tsx scripts/verify-s43-data.ts` | Réussi : 9 analyses, 32 sources documentées et Bonus distinct. |
| `pnpm run check` | Réussi. |
| `pnpm test` | Réussi : 10 fichiers, 35 tests. |
| `pnpm run build` | Réussi. Avertissement Vite non bloquant sur la taille d’un chunk existant. |
| `git diff --check` | Réussi : aucune erreur d’espacement. |
| URLs citées | 30 réponses HTTP 200 et 2 réponses HTTP 403 de protection anti-bot, pour Search Engine Land ; les deux URLs restent consignées avec leur source dans le rapport fourni. |

## Contrôles visuels et interactifs

- Captures plein format contrôlées en **desktop 1440 × 1080** et **mobile 375 × 812** sur S43 et l’archive S42.
- Les neuf cartes, le filtre additionnel **MESURE**, les compteurs **9 domaines / 32 sources** et l’ordre des analyses sont visibles dans le preview.
- La charte existante est préservée : palette, typographie, badges, sections sombres et trame hachurée de la carte Bonus.
- Carte Bonus S43 et Bonus S42 archivée : face avant, lien source, bouton `ANALYSE`, face d’analyse et bouton `RETOUR` validés en desktop et mobile.
  - desktop : largeur standard **373 px** dans une grille de **1120 px** ;
  - mobile : largeur double colonne **327 px**, égale à la largeur de la grille.

## Résultat

La correction S43 est validée. Elle doit être sauvegardée sur GitHub et sera rendue publiquement accessible comme archive complète lors de la publication de la S44.
