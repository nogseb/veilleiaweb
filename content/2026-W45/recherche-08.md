# Recherche 08 — IA en production et gouvernance

**Fenêtre examinée :** 26 octobre–2 novembre 2026 inclus
**Auteur :** Manus AI

## Sujets retenus

### IMPORTANT — Agents de code : GitHub mesure un basculement du flux de revue

**État : observé en production sur la plateforme ; rapport publié le 28 octobre 2026.** GitHub indique que plus de 40 % des pull requests ouvertes en septembre 2026 ont commencé par un premier jet d’agent, contre 17 % en mars ; cela représente 110 millions de pull requests sur ce seul mois. Le rapport couvre la période du 1er octobre 2025 au 30 septembre 2026 et, sauf exception explicitée, les dépôts publics et privés. Les pull requests avec implication détectée d’un agent ont davantage porté sur plusieurs fichiers et étaient plus souvent fusionnées en deux semaines que le groupe sans implication détectée. [1]

Pour une école, le signal n’est pas que le code produit par agent serait intrinsèquement plus fiable : GitHub mesure l’activité de sa plateforme et ne démontre ni causalité ni qualité. Il indique plutôt que la revue humaine, la traçabilité de l’auteur effectif et le bornage des droits doivent être conçus pour des changements plus nombreux et plus rapides. Une règle de conception consiste à exiger une revue humaine identifiable avant fusion des changements proposés par un agent, à séparer l’identité de l’agent de celle de son commanditaire et à limiter les droits accordés à la tâche. Cette dernière orientation rejoint les principes NIST de délégation traçable et de moindre privilège. [2]

**Impact :** la hausse mesurée rend la gouvernance de la revue de code plus urgente dans les six prochains mois, sans justifier d’automatiser l’acceptation.
**Recommandation — Règle de conception :** pour une école, formaliser dans la chaîne de contribution une approbation humaine attribuable et des autorisations limitées à la tâche pour tout agent de code.

**Sources :**

- « Octoverse: Commits, pushes, reach new highs in 2026 as developers build with agents », GitHub, 28 octobre 2026, https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/
- « Design Tenets for Agent Identity Management Systems », NIST, 27 octobre 2026, https://www.nist.gov/blogs/cybersecurity-insights/design-tenets-agent-identity-management-systems

### IMPORTANT — NIST : dix principes de gestion d’identité des agents proposés

**État : orientation publiée le 27 octobre 2026 ; ni norme obligatoire ni mécanisme de conformité AI Act.** Le NIST publie dix principes initiaux pour l’identité, l’authentification et l’autorisation des agents. Ils viennent des commentaires publics reçus dans un projet du NCCoE et d’échanges avec des parties prenantes. Parmi les éléments applicables aux agents de code figurent une identité d’agent distincte, une délégation dont les droits diminuent en aval, l’absence de privilèges permanents, des autorisations courtes et révocables, la séparation architecturale entre raisonnement et décision d’accès, ainsi que des traces indépendantes non modifiables. [2]

Pour une école, ce texte fournit une grille de conception utile avant de connecter un agent à des ressources sensibles : identifier l’agent, son commanditaire et le périmètre de chaque tâche ; ne lui attribuer que des accès temporaires ; conserver un journal indépendant des actions ; et faire appliquer les autorisations par un mécanisme déterministe extérieur au raisonnement du modèle. Le NIST précise que les principes doivent être adaptés au risque et que les standards et technologies actuels ne permettent pas encore tous de les remplir immédiatement. Il s’agit donc d’une orientation technique publique, non d’une certification et non d’une interprétation juridique de l’AI Act.

**Impact :** la publication donne un cadre concret de cahier des charges pour les projets d’agents dans les un à six mois.
**Recommandation — Contractuel :** pour une école, demander aux fournisseurs ou intégrateurs de documenter identité distincte, délégation des droits, révocation, journalisation indépendante et mécanismes d’escalade humaine ; arbitrer les écarts selon le risque.

**Sources :**

- « Design Tenets for Agent Identity Management Systems », NIST, 27 octobre 2026, https://www.nist.gov/blogs/cybersecurity-insights/design-tenets-agent-identity-management-systems

## Comparaison aux antécédents

S44 mentionnait le monitoring d’agent OpenAI désactivé et Rea. Le rapport GitHub du 28 octobre apporte un fait distinct, daté et agrégé sur l’usage des agents dans les pull requests ; il ne constitue pas un suivi de Rea. La publication NIST du 27 octobre introduit une nouvelle grille institutionnelle d’identité et d’autorisation des agents. Aucun changement juridique AI Act retenu : le texte de l’AI Omnibus, déjà abordé en S44, est entré en vigueur en juillet ; le document du Conseil ouvert le 30 octobre n’était qu’un projet soumis à approbation le 19 novembre.

## Recherches réalisées

1. Requête française : « IA Act agents de code sécurité 26 octobre 2026 2 novembre 2026 ».
2. Requête presse tech généraliste : « site:techcrunch.com OR site:theverge.com OR site:404media.co OR site:next.ink OR site:journaldundimanche.fr OR site:blogdumoderateur.com agents code intelligence artificielle octobre 2026 ».
3. Requête anglaise finale : « AI Act coding agents reverse engineering security October 26 November 2 2026 ».
4. Vérification ciblée : « site:github.blog OR site:github.com Octoverse 2026 October 2026 AI agents coding » ; « site:cisa.gov OR site:nist.gov OR site:enisa.europa.eu AI coding agents security October 2026 » ; « site:digital-strategy.ec.europa.eu OR site:commission.europa.eu OR site:consilium.europa.eu AI Act October 2026 November 2026 ».

## Sources ouvertes rejetées et raisons

- « IA », Blog du Modérateur, page de rubrique ouverte : les contenus affichés les plus récents sur les agents dataient du 22 octobre ; aucune actualité qualifiée dans la fenêtre n’a été identifiée. La page n’est pas citée.
- « GitHub Octoverse: Agents Started More Than 40% of September Pull Requests », Visual Studio Magazine, 29 octobre 2026 : source hors hiérarchie N1/N2 définie et simple reprise des chiffres GitHub ; remplacée par le rapport primaire.
- « Markdown Is the New Executable: Attackers Are Dropping Agent Instructions Into Your Downloads Folder From the Web », Forever Security, 22 octobre 2026, et sa reprise par Help Net Security, 26 octobre : sujet de sécurité intéressant, mais la publication primaire est antérieure à la fenêtre et émane d’un fournisseur. Sans échéance future, il ne satisfait pas les conditions de rattrapage ; la reprise médiatique ne suffit pas à le retenir.
- « Draft Conclusions ... empowering young people in an evolving information environment », Conseil de l’Union européenne, 30 octobre 2026 : projet de conclusions, sans effet juridique à cette date et annoncé pour approbation le 19 novembre ; non retenu comme changement AI Act.
- « AI Omnibus enters into force », Commission européenne, 27 juillet 2026 : texte déjà antérieur à la fenêtre et déjà traité en S44 ; non retenu.
- « European AI Office », Commission européenne, dernière mise à jour 29 octobre 2026 : page de contexte sans nouveau fait réglementaire clairement daté dans la fenêtre ; non retenue.

## Limites

Les chiffres GitHub décrivent des activités mesurées par une seule plateforme, avec des définitions, une détection d’implication d’agent et un périmètre public/privé propres au rapport. Ils ne mesurent ni la qualité, ni la sécurité, ni l’adéquation pédagogique des changements. Le billet NIST est une orientation institutionnelle initiale issue de commentaires publics, à adapter au risque ; il n’est pas une norme obligatoire, une certification ou une position juridique sur l’AI Act. L’absence de changement AI Act retenu vaut pour les pages et textes primaires ouverts dans cette collecte, pas pour l’ensemble des initiatives européennes.

## Références

[1]: https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/ "Octoverse commits and pushes reach new highs in 2026"
[2]: https://www.nist.gov/blogs/cybersecurity-insights/design-tenets-agent-identity-management-systems "Design tenets for agent identity management systems"
