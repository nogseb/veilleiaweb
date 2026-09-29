# Veille — Schema.org et données structurées

## Retenues

### Source principale — Google Search Central, mise à jour documentaire du 24 septembre 2026
- **Titre :** *Latest documentation updates*
- **URL :** https://developers.google.com/search/updates
- **Éditeur :** Google Search Central
- **Date vérifiée :** 24 septembre 2026 (la page indique également « Last updated 2026-09-24 UTC »).
- **Type :** source primaire/institutionnelle, journal officiel des mises à jour documentaires.
- **Décision :** retenue.

La page documente deux changements pertinents dans la fenêtre du 22 au 28 septembre 2026 :

1. **24 septembre 2026 — VideoObject structured data** : ajout de la propriété `creator` (avec mention du support de `author`) et mise à jour de `interactionStatistic` afin de documenter les types d’interactions pris en charge.
2. **23 septembre 2026 — Merchant listings structured data** : ajout de la propriété `priceType` à la documentation des fiches marchands et ajout de nouveaux exemples de prix soldés. La justification publiée est : « To make it easier for merchants to specify sale pricing through structured data and bring parity with price features in Merchant Center. »

Ces deux éléments sont des annonces documentaires officielles, datées dans la fenêtre obligatoire, et portent directement sur les données structurées utilisées par les moteurs.

## Faits vérifiés

- **Libellé publié (24/09/2026) :** « Added `creator` property and updated `interaction Statistic` in `Video Object` structured data ». Contexte publié : Google a ajouté `creator`, en notant le support de `author`, et a documenté les types d’interactions pris en charge pour `interactionStatistic` dans la documentation `VideoObject`.
- **Libellé publié (23/09/2026) :** « Adding support for sale pricing ». Contexte publié : ajout de `priceType` à la documentation *merchant listing* et ajout de nouveaux exemples de prix soldés, pour faciliter la déclaration des prix soldés via les données structurées et assurer la parité avec les fonctions de prix de Merchant Center.
- **Chiffres/KPI :** aucun chiffre de performance, taux d’adoption, volume ou résultat marketing n’est publié dans la source retenue. Aucun calcul ni extrapolation n’est donc effectué.
- **Cas marketing :** aucun cas marketing qualifié (marque + période/mécanisme + KPI chiffré + source) ne ressort dans la fenêtre. Les changements `priceType` et prix soldés sont des évolutions de documentation/implémentation, pas une preuve de performance commerciale.

## Exclusions

- **Schema.org — version 30.1** : https://schema.org/docs/releases.html — publication datée du **16 septembre 2026**, donc hors de la fenêtre obligatoire (22–28 septembre inclus). Le contenu est pourtant pertinent sur le fond (Digital Product Passports et vocabulaire e-commerce), mais il ne peut pas être retenu.
- **Page produit Google Search Central** : https://developers.google.com/search/docs/appearance/structured-data/product — page utile pour le contexte (Product snippets, Merchant listings, données d’expédition, prix et disponibilité), mais sa date de dernière mise à jour affichée est **10 décembre 2025**, donc hors fenêtre ; utilisée uniquement pour contrôler le contexte, pas comme source retenue.
- Guides SEO, articles d’agences et contenus promotionnels trouvés dans la recherche : exclus lorsqu’ils n’étaient pas datés dans la fenêtre, ne constituaient pas une source primaire, ou n’apportaient pas d’observation propre vérifiable.
- Aucun chiffre non attribué, aucune URL inaccessible et aucune reprise promotionnelle n’a été retenu.

## Angle TBS Education

Pour TBS Education, l’angle exploitable est celui de la **gouvernance de l’information machine-readable** : les changements Google montrent que la conformité ne se limite pas à ajouter du JSON-LD, mais implique de maintenir les propriétés et les vocabulaires selon les usages documentés. Le cas `priceType` permet d’aborder la fiabilité des informations commerciales (prix normal/prix soldé) ; le cas `creator`/`author` permet d’aborder l’attribution et la qualité des métadonnées vidéo. Pour un établissement d’enseignement, le prolongement pertinent est la gouvernance des données structurées des pages de programmes, cours, événements et contenus vidéo, sans promettre de gain SEO non mesuré.

**Bonus — hors des huit domaines :** aucun complément retenu ; les sources hors périmètre ont été écartées pour non-conformité de date, de nature ou de preuve.
