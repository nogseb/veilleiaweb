# Veille IA & Web — Semaine 25 — 2026

**Date de publication :** 15 juin 2026
**Période couverte :** 8-15 juin 2026
**Domaines analysés :** 8 — **Sources citées :** 17

---

## Signal majeur de la semaine

> À une semaine d'intervalle, OpenAI et Anthropic déposent chacun un dossier d'introduction en bourse confidentiel. Pour la première fois, les acheteurs auront deux fournisseurs d'IA de premier plan cotés simultanément, et la fenêtre des prix subventionnés se referme.

**852 Md$** — Dernière valorisation privée d'OpenAI avant IPO.

OpenAI a confirmé le 8 juin 2026 le dépôt d'un S-1 confidentiel auprès de la SEC, une semaine après Anthropic (valorisée 965 Md$). Aucun prix d'introduction officiel n'a été communiqué. La pression des marchés publics va pousser les deux acteurs vers une trajectoire de rentabilité visible, donc vers des tarifs API plus élevés et des conditions entreprise moins généreuses. Les acheteurs doivent désormais traiter la portabilité de leur stack comme une priorité de négociation.

---

## Tableau de bord

| Indicateur | Valeur |
| --- | --- |
| Domaines analysés | 8 |
| Sources citées | 17 |
| Signaux critiques | 3 |
| Signaux importants | 3 |
| Actions immédiates | 6 |
| Tendances émergentes | 4 |

---

## Synthèse exécutive

La semaine 25 confirme deux dynamiques de fond. Côté infrastructure IA, le double dépôt de dossiers d'IPO confidentiels par OpenAI (8 juin) et Anthropic (1er juin) ouvre une ère inédite de transparence financière mais signale la fin des prix d'appel : les acheteurs doivent dès maintenant sécuriser la portabilité de leur stack. Côté coûts, l'analyse de CockroachDB chiffre le choc des agents en production : 5 à 30 fois plus de tokens par tâche qu'un chatbot, avec Uber ayant épuisé son budget IA annuel dès avril. Côté search, Google lance Search Profiles et, sous pression de la CMA britannique, des contrôles permettant aux sites UK de se désinscrire des fonctionnalités IA via Search Console. Côté data, le marché CDP se scinde durablement entre architectures packaged et composable, avec un coût caché en ingénierie souvent sous-estimé. Côté innovation marketing, Accenture rachète Whalar et structure l'industrialisation de la creator economy, dont les investissements publicitaires US sont estimés à 43,9 Md$ en 2026.

---

## Analyse par domaine

### 1. Google AI Search — Google lance Search Profiles et des contrôles de désinscription IA *(CRITIQUE)*

Google poursuit la construction de la couche de gouvernance et de mesure d'un search médié par l'IA. Search Profiles offre aux éditeurs et créateurs une présence directe et suivie dans Search et Discover. Plus structurant pour les organisations européennes : sous l'effet d'une décision de la CMA britannique, Google ouvre des contrôles permettant aux sites UK de se désinscrire entièrement des fonctionnalités IA génératives, accompagnés d'un rapport Gen AI dans Search Console. Le May 2026 Core Update, désormais clos, a réorganisé la visibilité au profit de l'e-commerce local et des marques canoniques, au détriment des forums et Q&A (analyse SISTRIX).

*Sources : blog.google ; Core Updates (Mark Williams-Cook) / developers.google.com.*

### 2. Zero-Click et GEO — llms.txt s'impose comme le nouveau fichier de la couche agentique *(IMPORTANT)*

Après robots.txt et les sitemaps XML, le fichier llms.txt concentre l'attention des professionnels du search, accompagné d'agents.md. La tension reste vive : Google Search Central juge llms.txt non requis, tandis qu'une partie croissante de l'écosystème l'adopte. Les données structurées schema.org restent décrites comme la technique GEO la plus importante. Le débat se déplace du ranking vers l'identification, l'attribution et le contrôle de la visibilité IA.

*Sources : Commerce Jam (Shero) ; TanStack Start docs.*

### 3. Schema.org et données structurées — Le CMS AI-ready se définit autour de six capacités *(À SURVEILLER)*

Les guides de sélection de CMS pour le LLM SEO convergent sur six capacités structurantes : modélisation de contenu structuré, large support de schema.org, livraison API-first, modularité et délivrabilité multi-canal. La donnée structurée passe du levier d'optimisation au prérequis d'éligibilité aux réponses IA.

*Sources : Brightspot ; TanStack Start docs.*

### 4. DXP / CMS headless — Après Contentful, le DXP agentique se structure en marché *(À SURVEILLER)*

Dans le prolongement de l'acquisition de Contentful par Salesforce, le DXP agentique devient une catégorie à part entière. Les CMS headless se repositionnent autour de leur capacité à servir des agents IA. Deux points de vigilance pour un établissement européen : la souveraineté (exposition au CLOUD Act) et la réversibilité.

*Sources : CMSWire ; Brightspot.*

### 5. CDP et data first-party — Le marché se scinde entre packaged et composable, et le coût caché est humain *(IMPORTANT)*

Le marché CDP s'est durablement scindé entre architectures packaged (Segment, Salesforce Data 360) et composable (Hightouch, RudderStack). Le composable croît le plus vite (+7,8% d'effectifs au H2 2025) mais requiert 3 à 5 ingénieurs data dédiés. Seuls 22% des marketeurs déclarent un usage élevé de leur CDP. Sous ~50 000 profils, la recommandation est de fiabiliser CRM, taxonomie d'événements et consentement avant tout investissement CDP.

*Sources : Digital Applied ; CDP Institute.*

### 6. UX/UI des interfaces conversationnelles — Le design conversationnel et vocal se normalise *(À SURVEILLER)*

Le design vocal et conversationnel se formalise comme discipline, notamment pour les interactions sans écran. La conception bascule de l'agencement d'écrans vers l'orchestration de dialogues et la gestion de l'incertitude. Point de vigilance fort sur l'accessibilité : conserver des alternatives visuelles aux parcours purement conversationnels.

*Sources : Funic Tech ; Brightspot.*

### 7. IA générative en production — OpenAI et Anthropic déposent leurs IPO, et le coût des agents explose *(CRITIQUE)*

OpenAI (8 juin) et Anthropic (1er juin) entament leur introduction en bourse à une semaine d'intervalle. La pression des marchés publics signale la fin probable des prix d'appel. En parallèle, l'analyse de CockroachDB chiffre le choc des coûts : les agents consomment 5 à 30 fois plus de tokens qu'un chatbot (Gartner), le re-sent context pèse 62% des factures (Stanford Digital Economy Lab), et Uber a épuisé son budget IA annuel dès avril. Recommandation : sécuriser la portabilité (gateway, MCP, routage multi-modèles) et piloter au coût par tâche complétée.

*Sources : Digital Applied ; CockroachDB.*

### 8. Innovation marketing et cas d'école — Accenture rachète Whalar et industrialise la creator economy *(IMPORTANT)*

Accenture a annoncé le 8 juin l'acquisition de Whalar, agence créateurs la plus primée, intégrée à Accenture Song. Whalar revendique plus de 600M$ de campagnes créateurs sur 40+ pays. Les investissements publicitaires de la creator economy US sont estimés à 43,9 Md$ en 2026 (IAB). En toile de fond, les contenders Cannes Lions 2026 (Dove « R/eal Reviews », Heineken « Could Have Been a Heineken ») confirment la prime à l'authenticité plutôt qu'à la surenchère technologique.

*Sources : Accenture ; Contagious.*

---

## Actions prioritaires

1. **Sécuriser la portabilité de la stack IA** (gateway d'abstraction, Model Context Protocol, routage multi-modèles) avant la fin des prix subventionnés — *DSI + Data*.
2. **Basculer le pilotage budgétaire des agents** d'un coût par prompt vers un coût par tâche complétée, avec suivi FinOps dédié — *Data + Contrôle de gestion*.
3. **Activer le rapport AI Performance dans Search Console** et tester les contrôles de désinscription/visibilité IA — *Équipe SEO*.
4. **Arbitrer l'architecture CDP** (packaged vs composable vs skip) selon la maturité data réelle — *Data + Marketing Ops*.
5. **Publier et maintenir un fichier llms.txt** et renforcer schema.org sur les contenus à forte valeur — *Dev + SEO*.
6. **Évaluer la place de la creator economy** dans le mix média et formaliser un cadre de disclosure des contenus IA — *Communication + DPO*.

---

## Signaux émergents

- **Deux fournisseurs IA cotés simultanément** (0-3 mois) : nouveau levier de négociation, mais fin des prix d'appel.
- **Cost-per-task comme métrique de référence** (0-3 mois) pour piloter les agents IA en production.
- **llms.txt et agents.md** (3-6 mois) : standards émergents de la couche agentique.
- **Industrialisation de la creator economy** (3-6 mois) par les grands cabinets de conseil.

---

## Références

1. blog.google — « A new profile to help publishers and creators highlight their work on Search »
2. Core Updates (Mark Williams-Cook) / developers.google.com — Search Profiles, AI Controls, May 2026 Core Update (8 juin 2026)
3. Shero Commerce — « Commerce Jam June 2026: Guide to llms.txt and agents.md »
4. TanStack — « Generative Engine Optimization (GEO) » (docs)
5. Brightspot — « Best CMS for LLM SEO: 7 AI-ready platforms for 2026 »
6. CMSWire — « Salesforce Acquires Contentful to Power Agentforce Content »
7. Digital Applied — « Customer Data Platform 2026: Build, Buy, or Skip It » (10 juin 2026)
8. Digital Applied — « OpenAI Files to Go Public: What It Means for Your Stack » (10 juin 2026)
9. CockroachDB — « The Bill Arrives: How to Manage Agentic AI Costs at Scale » (10 juin 2026)
10. Funic Tech — « Voice and Conversational UX: Designing for Screenless Interactions »
11. Accenture — « Accenture to Acquire Leading Creator and Social Agency Whalar » (8 juin 2026)
12. Contagious — « Cannes Lions Contenders 2026 » (11 juin 2026)
