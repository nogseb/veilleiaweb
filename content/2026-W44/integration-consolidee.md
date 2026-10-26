# Intégration consolidée — S44 2026

**Édition prête à publier :** 26 octobre 2026
**Fenêtre :** 19 au 26 octobre 2026 inclus
**Périmètre :** huit domaines dans l’ordre éditorial, un bloc Mesure (`id: 9`) et le Bonus robotique (`id: 10`).

## Contrat de publication

- `domainsCount: 8` et domaines `id: 1` à `8`, dans cet ordre : **Google AI**, **Zero-Click / GEO**, **Schema / données**, **DXP / CMS**, **CDP / data**, **UX**, **IA production / gouvernance**, **Innovation marketing**.
- Le bloc Mesure est hors des huit domaines mais respecte le même objet : `id`, `code`, `category`, `badge`, `previousBadge`, `description`, `sources`, `details`, `longDescription`, `editorialStatus`.
- Le Bonus robotique RoboDojo est `id: 10`, distinct du compteur de domaines et du bloc Mesure.
- `sourcesCount: 34` correspond aux URL uniques du registre : domaines, Mesure, Bonus, spécification HTTP de fond et URL de mémoire de cas citées. Le nombre d’objets, de références ou de types de sources ne doit pas être utilisé comme substitut.
- `criticalCount: 1` et `importantCount: 6` portent sur les huit domaines seulement. Le signal critique est PHP2Shell dans DXP/CMS.
- `caseStudiesCount: 0`. Aucun nouveau cas d’école S44 n’est créé ; Currys et Universal Cart restent des éléments de mémoire S43, explicitement à revalider.

## Cohérence éditoriale

La règle de chevauchement attribue une publication une seule fois. Les faits du 20 et du 21 octobre retenus dans cette édition — rapport OpenAI, mandat Digital Omnibus, annonces Walmart et Claude Duet, extension de ChatGPT Ads et RoboDojo v2 — ne doivent pas être réintroduits comme nouveautés S43. Les sources antérieures citées comme fond ou mémoire sont libellées ainsi et ne deviennent pas des actualités par leur présence dans S44.

Chaque domaine et le bloc Mesure indiquent un statut éditorial : `ACTUALITÉ`, `SUIVI` ou `FOND`. Chaque texte long expose un fait, sa limite et la conséquence prudente pour TBS Education. Aucun texte n’assimile une citation à un clic, un clic à une conversion, un mandat à une loi, une annonce à une disponibilité générale ou un benchmark à une capacité opérationnelle.

## Priorités d’intégration

1. **Sécurité** — afficher le signal majeur PHP2Shell avec les deux CVE, les quatre versions corrigées et la limite d’exposition ; aucune compromission TBS Education n’est présumée.
2. **Référentiel** — relier les pages programmes, campus, frais, calendrier et admission à un propriétaire, une date de révision et un balisage fidèle, sans `Schema.org` obligatoire partout.
3. **Mesure** — conserver les quatre niveaux séparés : présence/citation, session attribuée, demande CRM et candidature/résultat.
4. **Données** — publier le mandat Digital Omnibus comme mandat du Conseil ; maintenir la CMP et ne pas modifier Data Manager sur une annonce non primaire.
5. **Agents et marketing** — ne tester que sous conditions (besoin documenté, permissions, validation humaine, consentement, liste active, témoin et conversion CRM).

## Contrôles avant publication

- Confirmer que les six tableaux du tableau de bord et les compteurs affichés correspondent à `domaines`, `sources`, `critiques`, `importants`, `actions` et `emergents`.
- Vérifier l’unicité des 34 URL dans `sources.json` et `veille-s44.ts`.
- Préserver l’intitulé complet **TBS Education** dans tous les textes.
- Ne pas publier comme faits : priorité France de l’encart Google « sites officiels », causalité GEO, fin future du hachage Data Manager, détail des conditions Meta, soumission autonome par un agent ou disponibilité générale d’une gateway.
- Ne pas convertir le rappel UTM ChatGPT, Universal Cart, Currys, Fudan, RoboDojo v1 ou Robot Generalization en nouvelle actualité S44.

## Fichiers de publication

- `client/src/data/veille-s44.ts` — registre consommé par le site.
- `content/2026-W44/rapport.md` — rapport éditorial complet.
- `content/2026-W44/sources.json` — registre des URL, types, limites, exceptions et exclusions.
- `content/2026-W44/cas-ecole.md` — absence de cas S44 et mémoire S43.

Aucune modification de S43, des composants UI, des types, des tests, de Git ou d’un checkpoint ne relève de cette intégration.
