# 07 — UX conversationnelle et web agentique

## IMPORTANT — Statut de recommandation : Règle de conception

### Google documente des surfaces agentiques à composants autorisés pour les confirmations

**État : annoncé et documenté ; spécification disponible. Aucun déploiement, résultat d’usage ni bénéfice d’accessibilité n’est attesté par les sources ouvertes.**

Le 29 octobre, Google et CopilotKit ont publié un guide pour construire dans une conversation des écrans interactifs décrits par l’agent comme des données plutôt que du code. L’application ne rend que des composants déclarés ; sélection, saisie et confirmation sont contrôlées. Les actions de la personne repartent vers l’agent. C’est un guide d’intégration, non la preuve d’un déploiement ou de résultats mesurés. [1] A2UI présente la version 0.9.1 comme courante ; la version 1.0 reste candidate. [2]

Pour une école, l’intérêt est de ne pas cantonner un assistant d’orientation à du texte lorsque le candidat compare des critères, précise une demande ou confirme une étape. Un composant contrôlé rend visibles le choix, les données reprises et l’action finale. Il ne rend pas l’interface accessible par lui-même et ne définit pas les décisions exigeant une reprise humaine.

**Impact.** La qualité dépend du catalogue et de la gestion des erreurs. Une surface non contrôlée peut rendre une confirmation ambiguë ou difficile à utiliser.

**Recommandation.** Pour une école, définir un catalogue de composants accessibles et une reprise humaine. Pour une demande, un rendez-vous ou des données de candidat, afficher les informations essentielles, demander une confirmation explicite et permettre de joindre une personne. Tester au clavier et avec lecteur d’écran les erreurs et la reprise avant toute expérimentation publique.

## Sources retenues

1. **Build Generative UI Apps with A2UI & CopilotKit Agents** — Google Developers Blog — 29 octobre 2026 — https://developers.googleblog.com/build-generative-ui-apps-with-a2ui-copilotkit-agents/
2. **A generative UI protocol and framework for cross-platform agentic experiences** — Projet A2UI — page non datée, consultée le 2 novembre 2026 — https://a2ui.org/
3. **Google's A2UI turns AI agent replies into forms, maps and cards** — PPC Land — 31 octobre 2026 — https://ppc.land/googles-a2ui-turns-ai-agent-replies-into-forms-maps-and-cards/

## Comparaison aux antécédents

Le sujet est nouveau dans la veille : il porte sur la composition contrôlée d’une interface conversationnelle et la confirmation d’actions. Il ne répète pas le suivi S44 sur Walmart Agent Gateway ou Claude Duet, qui concernait d’autres annonces agentiques. Aucun fait nouveau dans la fenêtre ne justifie de rouvrir ces derniers sujets.

## Recherches réalisées

1. Français : `UX conversationnelle agents IA accessibilité confirmations reprise humaine octobre 2026`.
2. Presse tech généraliste : `site:techcrunch.com OR site:theverge.com OR site:404media.co OR site:journaldunet.com OR site:bdmtools.net OR site:next.ink agents IA interface accessibilité octobre 2026`.
3. Anglais : `agentic web conversational UX accessibility human handoff confirmations October 2026`.
4. Vérification primaire : `site:openai.com OR site:anthropic.com OR site:blog.google agent interface confirmation human oversight October 26 2026` ; `site:w3.org OR site:w3.org/WAI conversational AI agent accessibility October 2026`.
5. Vérification N2 : `site:searchengineland.com OR site:seroundtable.com OR site:ppc.land agentic AI user interface October 2026`.

## Sources ouvertes rejetées et raisons

- **Brian Chesky interview: AI agents need their own operating system** — TechCrunch — 1er octobre 2026 : page lue ; hors fenêtre et entretien prospectif, sans fait nouveau daté entre le 26 octobre et le 2 novembre.
- **Web & AI IG — TPAC 2026** — W3C — 29 octobre 2026 : page lue ; compte rendu de discussions sur l’interopérabilité et l’autorisation, sans décision, recommandation ou standard finalisé à traiter comme actualité exploitable pour ce domaine.
- **A2UI v0.9: The New Standard for Portable, Framework-Agnostic Generative UI** — Google Developers Blog — 17 avril 2026 : page lue ; hors fenêtre. Elle sert seulement à confirmer l’antériorité de la spécification, pas le fait retenu.
- **Guide de l’IA conversationnelle en 2026** — Botpress — 10 janvier 2026 : page lue ; hors fenêtre et contenu promotionnel.
- **Comment ouvrir votre site aux agents IA avec WebMCP** — Journal du Net — 14 octobre 2026 : page lue ; hors fenêtre.

## Limites

Le guide Google et la documentation A2UI décrivent une architecture et des démonstrations, mais ne publient ni mesure d’accessibilité, ni taux de réussite, ni preuve d’un déploiement auprès de candidats. Aucune source N1/N2 ouverte dans la fenêtre n’a apporté un fait distinct suffisamment étayé sur la reprise humaine ou l’accessibilité conversationnelle. La recommandation relève donc d’une règle de conception prudente, non de l’évaluation d’un produit ou d’un usage réel.

## Références

[1]: https://developers.googleblog.com/build-generative-ui-apps-with-a2ui-copilotkit-agents/ "Build Generative UI Apps with A2UI & CopilotKit Agents"
[2]: https://a2ui.org/ "A generative UI protocol and framework for cross-platform agentic experiences"
