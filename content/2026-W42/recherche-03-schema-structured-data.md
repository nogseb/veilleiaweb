# Audit de veille — Schema.org et données structurées

## Conclusion

**Signal qualifié, mais limité à l’écosystème JSON-LD/W3C :** deux pages institutionnelles accessibles portent une date comprise entre le 6 et le 12 octobre 2026 inclus. Il s’agit d’une réunion officielle du JSON-LD Working Group le 7 octobre et d’un **Final Community Group Report** JSON-LD publié le 12 octobre. Aucun changement Schema.org ou publication Google spécifiquement consacré aux données structurées n’a été identifié dans cette fenêtre après ouverture et contrôle des pages disponibles.

Le signal est donc principalement **normatif et de gouvernance**, pas une annonce de fonctionnalité Google Search ni une nouvelle version Schema.org.

## Sources retenues

### 1. Réunion officielle du JSON-LD Working Group — 7 octobre 2026

- **URL ouverte :** <https://www.w3.org/events/meetings/c3c86d05-0391-4490-a686-3038acfdb231/20261007T120000/>
- **Publication / événement :** 7 octobre 2026, 12:00–13:00 EDT (16:00–17:00 UTC).
- **Éditeur :** W3C, JSON-LD Working Group.
- **Statut affiché :** “Past”, “Confirmed”.

**Faits sourcés.** La page indique qu’il s’agissait d’une réunion officielle du Working Group. L’ordre du jour couvrait un point YAML-LD, un point CBOR-LD, puis les PR et issues des spécifications JSON-LD. Le groupe poursuivait la curation des issues en vue d’un JSON-LD 1.2 construit principalement à partir d’errata issus de la période du “maintenance group”. Une discussion ouverte et une session de questions étaient également prévues.

**Portée stratégique.** Le signal montre une activité de maintenance et de préparation de l’évolution JSON-LD 1.2, avec un travail parallèle sur des sérialisations liées comme YAML-LD et CBOR-LD. La page ne constitue pas une annonce de standard final, de nouvelle version publiée ou de modification de l’éligibilité Google Search.

**Limites.** La page décrit un agenda de réunion, pas un compte rendu de décisions. Elle ne fournit ni KPI, ni date de livraison de JSON-LD 1.2, ni changement de spécification adopté pendant la réunion. Le statut W3C du groupe ne permet pas d’inférer une disponibilité produit.

### 2. JSON-LD Requirements — Final Community Group Report — 12 octobre 2026

- **URL ouverte :** <https://json-ld.org/requirements/latest/>
- **Date affichée :** “Final Community Group Report 12 October 2026”.
- **Éditeur :** JSON for Linking Data W3C Community Group / json-ld.org.

**Faits sourcés.** Le document rassemble des exigences pour JSON-LD, décrit comme une sérialisation JSON fondée sur un contexte pour les données liées. Il définit les données structurées comme un sur-ensemble des données liées où les nœuds peuvent ne pas être étiquetés par une IRI déréférençable. Parmi les exigences listées : un document JSON-LD doit pouvoir exprimer un graphe de données liées et être un document JSON valide ; les propriétés devraient résoudre vers des IRI absolues ; les tableaux peuvent associer plusieurs objets à une propriété, sans impliquer par défaut un ordre des objets.

**Portée stratégique.** Le document constitue une clarification de référence sur les exigences conceptuelles et syntaxiques de JSON-LD. Il peut alimenter la veille sur l’interopérabilité des données structurées, mais il ne s’agit pas d’un nouveau standard W3C : la page précise explicitement qu’il **n’est pas un standard W3C ni sur la voie de standardisation W3C**, et qu’il s’agit d’un travail expérimental.

**Limites.** La page est un rapport de Community Group et non une recommandation normative W3C. Elle ne relie pas directement ses exigences à l’implémentation Schema.org ou aux fonctionnalités Google Search. La date du 12 octobre est incluse dans la fenêtre demandée, mais elle correspond au dernier jour de la période ; aucun changement ultérieur ne peut être évalué dans cet audit.

## Contexte vérifié mais hors fenêtre ou non qualifiant

### Schema.org : version 30.1 antérieure à la fenêtre

La page officielle [Schema.org Releases](https://schema.org/docs/releases.html) a été ouverte. Elle indique que la version 30.1 a été publiée le **16 septembre 2026**, donc hors période autorisée. Cette version ajoute notamment le vocabulaire `DigitalProductPassport`, des éléments liés aux déclarations environnementales et de conformité, ainsi que des propriétés de données produit et e-commerce. Elle est écartée du signal S42 en raison de sa date, même si son contenu est pertinent pour le périmètre.

La page d’accueil Schema.org confirme également “V30.1 | 2026-09-16” et indique que le vocabulaire peut être exprimé notamment en JSON-LD, RDFa et Microdata. Ces éléments servent uniquement de contrôle de contexte, pas de publication qualifiée S42.

### Google Search Central : documentation de référence, pas de publication S42

La documentation [Introduction to structured data markup in Google Search](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) a été ouverte. Elle indique que Google recommande généralement JSON-LD car il est plus facile à implémenter et maintenir, et que Google prend en charge JSON-LD, Microdata et RDFa lorsque le balisage est valide. Elle rappelle que la documentation Google Search Central fait autorité pour le comportement dans Google Search, plutôt que la documentation Schema.org seule.

La page est marquée **“Last updated 2025-12-10 UTC”**. Elle est donc écartée comme actualité de la fenêtre, tout en étant conservée comme référence de fond. Elle mentionne des chiffres de cas d’étude — Rotten Tomatoes +25 % de CTR, Food Network +35 % de visites, Rakuten 1,5× plus de temps passé et 3,6× plus d’interactions AMP, Nestlé +82 % de CTR — mais ces chiffres sont des cas historiques intégrés à la documentation et ne constituent pas des résultats publiés entre le 6 et le 12 octobre 2026. Ils ne sont pas extrapolés.

La page [Google Search updates](https://developers.google.com/search/updates) a également été ouverte. Elle était marquée “Last updated 2026-10-08 UTC”, mais le contenu accessible ne faisait pas apparaître, dans la fenêtre du 6 au 12 octobre, une entrée nouvelle consacrée à Schema.org, JSON-LD ou aux données structurées. Les mises à jour structurées visibles concernaient des mois antérieurs. Elle est donc écartée comme signal qualifié faute d’une publication thématique datée dans la fenêtre.

## Sources écartées avec motif

- <https://schema.org/> — **Écartée comme actualité S42 :** version affichée 30.1 datée du 16 septembre 2026, hors fenêtre ; utilisée seulement pour le contexte.
- <https://schema.org/docs/releases.html> — **Écartée comme actualité S42 :** dernière release visible, 30.1, datée du 16 septembre 2026.
- <https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data> — **Écartée comme actualité S42 :** dernière mise à jour affichée le 10 décembre 2025 ; documentation de fond, sans publication dans la fenêtre.
- <https://developers.google.com/search/updates> — **Écartée comme signal thématique :** page ouverte et datée du 8 octobre 2026, mais aucune entrée accessible du 6 au 12 octobre 2026 portant spécifiquement sur Schema.org, JSON-LD ou les données structurées.
- <https://www.digidop.com/blog/structured-data-secret-weapon-seo> — **Écartée :** date affichée 30 août 2022, hors fenêtre et source non institutionnelle.
- <https://www.searchenginejournal.com/google-is-not-diminishing-the-use-of-structured-data-in-2026/560516/> — **Écartée :** date affichée 11 novembre 2025, hors fenêtre.
- <https://www.digitalapplied.com/blog/structured-data-after-io-2026-schema-updates> — **Écartée :** publication du 24 mai 2026, hors fenêtre ; article de commentaire et non source officielle.

## Limites générales

La fenêtre est très stricte et ne permet de retenir que les pages dont la date de publication ou d’événement est explicitement comprise entre le 6 et le 12 octobre 2026. Une réunion ne prouve pas l’adoption d’une décision, et un Community Group Report n’équivaut pas à une recommandation W3C. Aucun KPI nouveau et vérifiable n’a été trouvé dans les publications retenues ; les chiffres de la documentation Google sont historiques et ne sont pas attribués à S42.

## Références

[1]: https://www.w3.org/events/meetings/c3c86d05-0391-4490-a686-3038acfdb231/20261007T120000/ "W3C JSON-LD WG Meeting — 7 October 2026"
[2]: https://json-ld.org/requirements/latest/ "JSON-LD Requirements — Final Community Group Report 12 October 2026"
[3]: https://schema.org/docs/releases.html "Schema.org Releases"
[4]: https://schema.org/ "Schema.org"
[5]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data "Introduction to structured data markup in Google Search"
[6]: https://developers.google.com/search/updates "Google Search documentation updates"
