# Vérification S42 — 12 octobre 2026

## Périmètre validé

- Édition courante : **S42 — 12 octobre 2026**.
- Fenêtre éditoriale : **6–12 octobre 2026**.
- **6 domaines publiés sur 8** : les domaines Zero-Click/GEO et DXP/headless sont volontairement masqués faute de source qualifiée dans la fenêtre.
- **16 sources** dédupliquées, dont **3 sources Bonus** ; compteur affiché cohérent avec `sources.json`.
- Bonus #10 séparé des domaines et de leurs compteurs.
- S41 conservée en archive, avec son Bonus distinct et sa modale à deux faces.

## Contrôles automatisés

| Contrôle | Résultat |
|---|---|
| `npx tsx scripts/verify-s42-data.ts` | OK — 6 domaines qualifiés, 2 masqués, 16 sources, Bonus distinct. |
| `pnpm run check` | OK — TypeScript sans erreur. |
| `pnpm test` | OK — **9 fichiers / 32 tests** validés. |
| `pnpm run build` | OK — build Vite et bundle serveur terminés. Avertissement non bloquant : chunk frontend supérieur à 500 kB après minification. |
| `git diff --check` | OK — aucune erreur d’espacement. |
| Registre des sources | OK — 16 URL uniques, dates dans la fenêtre ISO S42. |

## Vérification des URL

Le contrôle HTTP avec agent utilisateur a retourné **200** pour 13 URL : Search Engine Roundtable (2), Google, W3C (2), JSON-LD Community Group, CDP.com, Anthropic, Commission européenne, ADWEEK, MIT News, DOE et Agility Robotics.

Les trois URL OpenAI (Intelligent UI, notes de version ChatGPT et notes Enterprise/Edu) répondent **403** à une requête `HEAD` automatisée. Elles ont été retenues après lecture dans la phase de collecte qualifiée ; ce statut est cohérent avec une protection anti-robot du site et ne constitue pas un contenu non accessible dans le navigateur.

## Contrôle visuel et comportemental

| Vue | Résultat |
|---|---|
| Accueil S42 — desktop 1440×1080 | OK — métadonnées S42, signal majeur, compteur 6 domaines / 16 sources, six cartes et Bonus rendus conformément à la charte. |
| Accueil S42 — mobile 375×812 | OK — grille deux colonnes, Bonus sur largeur double, contenu contraint à une colonne. |
| Archive S41 — desktop et mobile | OK — édition archivée accessible, Bonus préservé. |
| Bonus S42 — desktop | OK — carte largeur standard (373 px dans une grille de 1120 px), source et face Analyse accessibles. |
| Bonus S42 — mobile | OK — carte 327 px sur une grille de 327 px, donc double colonne ; source et face Analyse accessibles. |
| Bonus S41 archivé — desktop et mobile | OK — carte, source et face Analyse préservées. |

Les quatre contrôles de modale confirment la présence de **SOURCE**, du bouton **ANALYSE**, du bouton **RETOUR** et de la mention **ANALYSE COMPLÈTE** sur l’accueil S42 et l’archive S41, aux deux viewports.

## Éléments visuels inspectés

- Accueil S42 desktop : `/home/ubuntu/screenshots/webdev-preview-root-1791781580245070148-3435.png`
- Accueil et archive S41 — captures full-page desktop et mobile réalisées par WebDev le 12 octobre 2026.
- Inspection interactive de l’accueil : métadonnées, les six cartes de domaine et le Bonus sont présents dans le DOM de prévisualisation.

## Décision de publication

La version S42 est prête pour checkpoint, sauvegarde GitHub et publication WebDev. Le signal majeur, les compteurs et les cartes respectent le périmètre qualifié ; aucun sujet non sourcé n’a été ajouté pour remplir les deux domaines masqués.
