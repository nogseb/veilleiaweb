# Recherche — Schema.org et données structurées

**Fenêtre vérifiée : 2026-10-13 au 2026-10-19 inclus**  
**Domaine :** Schema.org, JSON-LD, données structurées et interopérabilité.

## Conclusion de qualification

La fenêtre contient une actualité qualifiante principalement institutionnelle : Google a documenté plusieurs changements de recherche directement liés aux données structurées, et le groupe de travail JSON-LD du W3C a enregistré des travaux d’interopérabilité pendant la période. Les faits ci-dessous sont limités à ce que les pages consultées permettent d’attribuer précisément. Aucun cas marketing ne satisfait les exigences marque + période + mécanisme + KPI chiffré + URL consultée.

## Sources retenues

### [1] Google Search Central — mises à jour de la documentation Search

- **URL :** https://developers.google.com/search/updates
- **Date(s) affichée(s) dans la page :** 2026-10-13, 2026-10-16 et 2026-10-17 ; page indiquant « Last updated 2026-10-16 UTC ».
- **Faits exactement attribués :** le 13 octobre, Google a retiré l’élément visuel « host group » de la galerie des éléments visuels parce qu’il n’apparaît plus dans les résultats Google Search. Le 16 octobre, Google a ajouté une documentation dédiée aux données structurées « vehicle listing ». Le 17 octobre, Google a ajouté dans la documentation « Article structured data » un rappel de fournir le fuseau horaire et a précisé ce qui se passe lorsqu’il n’est pas fourni ; la page mentionne aussi que le fuseau horaire de Googlebot est PST.
- **Pertinence :** source officielle, changements datés dans la fenêtre, impact direct sur l’usage et l’interprétation des données structurées et des résultats enrichis.
- **Limites :** la page est un journal de changements de documentation, pas une étude d’impact ; elle ne fournit ni hausse de visibilité ni KPI de sites. La mention du 17 octobre et le « Last updated 2026-10-16 UTC » créent une légère ambiguïté de mise à jour éditoriale ; les dates d’événement sont néanmoins explicitement listées par Google.

### [2] W3C JSON-LD Working Group — Activity

- **URL :** https://www.w3.org/groups/wg/json-ld/activity/
- **Date :** activité affichée pour octobre 2026 ; entrées datées du 15, 17 et 18 octobre 2026.
- **Faits exactement attribués :** le 18 octobre, le dépôt `w3c/json-ld-api` a reçu un nouveau commentaire sur la prise en charge de valeurs autres que des chaînes dans une Language Map, et une pull request intitulée « remove all mentions of lexicographical(ly) » a été ouverte. Le 17 octobre, le dépôt `w3c/json-ld-streaming` a enregistré l’ouverture de l’issue « Non-propagating scoped contexts and `@nest` can trigger unpredictable buffering ». Le 15 octobre, une pull request du dépôt `w3c/json-ld-api` a reçu un commentaire sur « replace sequence by mf:includes based path ». Le même journal signale en octobre deux publications de documents, mais leur dernière publication indiquée est le 5 octobre, donc antérieure à la fenêtre et non retenue comme actualité de la semaine.
- **Pertinence :** source institutionnelle W3C et signaux directement liés à la spécification, aux algorithmes de traitement et au streaming JSON-LD ; intérêt d’interopérabilité technique.
- **Limites :** il s’agit d’activité de dépôt et non de spécifications finales. Les issues et pull requests ne constituent pas des changements normatifs adoptés. La page d’activité est indiquée comme étant en bêta par W3C.

### [3] JSON-LD Community Group — JSON-LD Requirements

- **URL :** https://json-ld.org/requirements/latest/
- **Date affichée dans le résultat de recherche :** 2026-10-13 ; la page consultée ne reproduit pas de métadonnée de date dans son corps textuel.
- **Faits exactement attribués :** le document se présente comme un travail expérimental en cours destiné à rassembler les exigences du Linked Data en JSON et à fournir une mesure objective pour évaluer la spécification JSON-LD. Il définit les données structurées comme un sur-ensemble du Linked Data dans lequel les nœuds peuvent ne pas avoir d’IRI résoluble. Il énonce notamment qu’un document JSON-LD doit pouvoir exprimer un graphe de données liées et être un document JSON valide ; il décrit aussi les règles relatives aux sujets, propriétés, valeurs typées, tableaux et listes ordonnées.
- **Pertinence :** contenu directement centré sur JSON-LD, les données structurées et l’interopérabilité sémantique.
- **Limites :** le document est explicitement expérimental et « work in progress ». La date du 13 octobre 2026 est visible dans le résultat indexé, mais n’est pas reprise dans le texte extrait de la page ; elle est donc traitée avec prudence et ne porte pas à elle seule la qualification principale.

## Synthèse factuelle

1. **Évolution de la surface de résultats Google.** Google a retiré le visuel « host group » de sa galerie le 13 octobre, au motif qu’il n’apparaît plus dans Search. Cela documente la fin d’une surface d’affichage, sans établir que le vocabulaire Schema.org ou JSON-LD correspondant est supprimé.
2. **Nouveau type documenté.** Google a ajouté le 16 octobre une documentation « vehicle listing structured data ». La page de journal ne fournit pas, dans l’extrait consulté, de chiffres d’adoption ou de performance associés.
3. **Précision temporelle pour Article.** Le 17 octobre, Google a renforcé la documentation Article sur le fuseau horaire et explicité le comportement en cas d’absence de fuseau. C’est une clarification de données attendues et de traitement, pas une promesse de classement.
4. **Interopérabilité en cours côté W3C.** Les activités JSON-LD des 15, 17 et 18 octobre portent sur des détails de traitement et de streaming : chemins fondés sur `mf:includes`, buffering avec contextes scopés et `@nest`, Language Maps et terminologie algorithmique. Ces éléments sont en discussion et ne doivent pas être présentés comme des normes finales.

## Exclusions et refus

- **Search Engine Journal, « What Are Common Structured Data Mistakes That Hurt AI Visibility? – Ask An SEO », 2026-10-01 :** article consulté, mais hors de la fenêtre stricte ; exclu malgré sa pertinence thématique.
- **Search Engine Land, « Structured data and SEO: What you need to know in 2025 », 2024-10-07 :** hors fenêtre et ancien ; exclu.
- **Search Engine Land, « Google drops reporting on several structured data types », 2025-09-09 :** hors fenêtre ; exclu.
- **Search Engine Land, « Google updates structured data for forum and Q&A content », 2026-03-26 :** hors fenêtre ; exclu.
- **W3C JSON-LD Working Group — réunion du 2026-10-07 et publication YAML-LD du 2026-10-05 :** antérieures au 13 octobre ; exclues de la fenêtre, même si elles apparaissent dans le récapitulatif d’octobre.
- **Guides ou articles non autorisés et/ou antérieurs** repérés dans les résultats (DigiDoP, Digital Applied, Gemeos Agency, Definition, LinkedIn et autres blogs) : exclus car hors liste prioritaire, hors fenêtre, ou sans valeur institutionnelle suffisante pour cette veille.
- **Cas marketing :** aucun cas vérifié ne contient simultanément une marque, une période, un mécanisme, un KPI chiffré et une URL consultée dans la fenêtre. `caseStudy.available` doit donc rester à `false`.

## Références

[1]: https://developers.google.com/search/updates "Google Search Central — Latest Google Search Documentation Updates"
[2]: https://www.w3.org/groups/wg/json-ld/activity/ "W3C JSON-LD Working Group — Activity"
[3]: https://json-ld.org/requirements/latest/ "JSON-LD Requirements"
