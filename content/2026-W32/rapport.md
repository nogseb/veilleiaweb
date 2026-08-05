# Veille Stratégique IA & Web — Semaine 32 / 2026

**Date de publication :** 3 août 2026
**Domaines analysés :** 8 | **Sources citées :** 18

---

## Signal majeur de la semaine

L'EU AI Act entre en application le 2 août 2026 — la Commission européenne lance l'enforcement des obligations de transparence Article 50. Chatbots doivent déclarer leur nature IA, deepfakes labellés, contenu synthétique marqué machine-readable. 180+ organisations signataires du Code of Practice. Amendes jusqu'à 15 M€ ou 3 % du CA mondial. Application extraterritoriale.

### Chiffre-clé

> **2 AOÛT** — ENFORCEMENT EU AI ACT ARTICLE 50 — TRANSPARENCE IA OBLIGATOIRE

Le 2 août 2026, la Commission européenne commence l'enforcement de l'AI Act. Les obligations Article 50 deviennent exécutoires : chatbots = disclosure obligatoire, deepfakes = labelling visible, contenu IA = marquage machine-readable détectable. 180+ organisations ont signé le Code of Practice. Les amendes atteignent 15 M€ ou 3 % du CA mondial. L'application est extraterritoriale : les entreprises US dont les outputs atteignent des utilisateurs EU sont concernées.

---

## Tableau de bord

| Indicateur | Valeur |
|---|---|
| Domaines analysés | 8 |
| Sources citées | 18 |
| Signaux critiques | 3 |
| Signaux importants | 3 |
| Actions immédiates | 6 |
| Tendances émergentes | 5 |
| Cas d'école retenus | 2 |

---

## Synthèse exécutive

La semaine 32 est dominée par l'entrée en vigueur de l'EU AI Act Article 50 le 2 août 2026, premier enforcement réel de la réglementation IA européenne avec application extraterritoriale. En parallèle, Google déploie un opt-out Search Console permettant aux éditeurs de retirer leur contenu des AI Overviews sans quitter Search, mais au prix probable de la perte du placement Top Stories intégré aux AI Overviews (15,5 % US, 17,5 % UK des trending news selon NewzDash). Côté modèles, Claude Opus 5 (24 juillet) atteint 70 % sur CursorBench à moitié du prix de Fable 5, tandis que le gap gouvernance s'élargit : 88 % des organisations utilisent l'IA mais seulement 8 % ont un framework mature (McKinsey). Le marché CDP connaît une rupture architecturale avec Databricks CustomerLake, premier Agentic CDP natif lakehouse qui menace structurellement les CDP standalone par un modèle consumption-based sans platform fee. Adobe Advertising intègre Eyeota pour la résolution d'identité CTV cookie-independent, alors que Chrome atteint 80 % de deprecation cookies (full removal attendu Q3 2026). Pour les équipes digitales, la priorité est triple : vérifier la conformité Article 50 immédiatement, arbitrer l'opt-out AI Overviews en connaissance du trade-off Top Stories, et structurer le contenu pour les citations IA (schema markup = 2,8x plus de citations selon AirOps).

---

## Analyse par domaine

### 1. Google AI Search — CRITIQUE

**OPT-OUT SEARCH CONSOLE DÉPLOYÉ — LE TRADE-OFF TOP STORIES CHANGE LA DONNE**

Google déploie un nouveau contrôle Search Console permettant aux éditeurs de retirer leur contenu des AI Overviews, AI Mode et des fonctionnalités IA de Discover, sans quitter les résultats de recherche traditionnels. Ce contrôle est imposé par la CMA britannique. Mais Press Gazette et NewzDash révèlent un trade-off majeur : les Top Stories apparaissent désormais directement DANS les AI Overviews (15,5 % aux US, 17,5 % au UK sur 17 millions de Top Stories analysées). L'opt-out entraîne probablement la perte de ce placement premium. 47 % de toutes les pages de résultats Google affichent désormais un AI Overview (Semrush Sensor).

Sources : Search Engine Journal [1], Press Gazette / NewzDash [2], Google Search Central [3]

### 2. Zero-Click / GEO — IMPORTANT

**47 % DES SERP AVEC AI OVERVIEW — LE REFERRAL IA RESTE MARGINAL MAIS PROGRESSE**

Semrush Sensor confirme que 47 % des pages de résultats Google affichent un AI Overview. Similarweb mesure que seulement 6,8 % des requêtes ChatGPT desktop US incluent des citations, mais le taux de landing sur des pages web passe de 25 % (mars) à ~60 % (mai) après l'update du 7 mai. Google se transforme de gateway en destination.

Sources : TechCrunch / Similarweb [4], Semrush Sensor [5], Press Gazette [2]

### 3. Schema.org / Web Agentique — IMPORTANT

**2,8X PLUS DE CITATIONS IA POUR LES PAGES STRUCTURÉES**

AirOps (State of AI Search 2026) mesure que les pages avec schema markup + structure propre génèrent 2,8x plus de citations IA. Le FAQ/Q&A schema n'est présent que sur 10,5 % des pages citées par l'IA. Les pages avec 3+ types de schema ont ~13 % plus de chances d'être citées. SchemaApp formalise le concept de web agentique.

Sources : AirOps [6], SchemaApp [7], Parseur [8]

### 4. DXP / CMS Headless — IMPORTANT

**OPTIMIZELY AGENT PLATFORM : 10 000 ACTIONS/JOUR**

Luminary révèle qu'Optimizely Agent Platform atteint 10 000 actions d'agents par jour, soit une croissance x10 en un an. Le système no-code orchestre des agents IA marketing dans l'écosystème Optimizely. Les agentic content workflows deviennent table stakes dans le CMS composable tier-3.

Sources : Luminary [9], DXP Scorecard [10]

### 5. CDP / Data First-Party — CRITIQUE

**DATABRICKS CUSTOMERLAKE : L'AGENTIC CDP NATIF LAKEHOUSE**

Databricks lance CustomerLake (Private Preview), premier Agentic CDP natif lakehouse. Profile Agents + Campaign Agents + Infinity campaigns. Pricing consumption-based sans platform fee = menace existentielle pour les CDP standalone. Adobe Advertising intègre Eyeota pour la résolution d'identité CTV cookie-independent. Chrome à 80 % de deprecation cookies.

Sources : CDP.com / Databricks [11], PPC Land / Adobe / Eyeota [12], Improvado [13]

### 6. UX / Interfaces Conversationnelles — À SURVEILLER

**DELEGATIVE UI : DE L'ASSISTANT QUI RÉPOND À L'AGENT QUI AGIT**

Le concept de Delegative UI se formalise : passage du conversationnel au délégatif. Miro, Figma et Canva ont tous construit leurs updates 2026 autour de ce paradigme. L'utilisateur délègue une tâche complète au lieu de poser des questions séquentielles.

Sources : Intempt [14], Aaron Usiskin / LinkedIn [15]

### 7. IA Générative / Gouvernance — CRITIQUE

**EU AI ACT ARTICLE 50 EN VIGUEUR — ENFORCEMENT RÉEL**

La Commission européenne lance l'enforcement le 2 août 2026. 180+ signataires du Code of Practice. Amendes 15 M€ / 3 % CA mondial. Application extraterritoriale. Claude Opus 5 (24 juillet) : 70 % CursorBench à moitié du prix de Fable 5. Gap gouvernance : 88 % utilisent l'IA, 8 % gouvernent maturément (McKinsey). 76 % ont un CAIO (IBM).

Sources : Commission européenne [16], Faegre Drinker [17], Caylent / Anthropic [18], Superblocks [19]

### 8. Innovation Marketing — À SURVEILLER

**ADOBE GENSTUDIO FOR CTV — LE WORKFLOW CRÉATIF DEVIENT GENAI-FIRST**

Adobe lance GenStudio for CTV : workflow GenAI-first du brief à la livraison d'ads CTV broadcast-quality en self-service. Retail media : Morrisons smart trolleys IA. Chrome cookies à 80 % de deprecation accélère la convergence identity/CTV/retail media.

Sources : Adobe GenStudio [20], NielsenIQ [21], Retail Media Update [22]

---

## Actions prioritaires

| # | Action | Domaine | Responsable |
|---|---|---|---|
| 1 | Vérifier immédiatement la conformité Article 50 EU AI Act : disclosure chatbot, marquage machine-readable, labelling deepfakes — enforcement actif depuis le 2 août | JURIDIQUE / TECHNIQUE | DIRECTION DIGITALE + JURIDIQUE |
| 2 | Arbitrer l'opt-out AI Overviews via Search Console en connaissance du trade-off Top Stories (15,5 % US / 17,5 % UK) | SEO / STRATÉGIE | ÉQUIPE SEO + DIRECTION ÉDITORIALE |
| 3 | Enrichir le schema markup (Organization, FAQ, HowTo, Course) : 2,8x plus de citations IA | SEO / TECHNIQUE | ÉQUIPE SEO + DEV |
| 4 | Évaluer Databricks CustomerLake vs CDP actuel : Agentic CDP natif lakehouse, pricing consumption-based | DATA / MARTECH | DATA + MARKETING |
| 5 | Préparer la stratégie identity resolution post-cookies : Chrome à 80 % deprecation, full removal Q3 2026 | DATA / ACQUISITION | DATA + ACQUISITION |
| 6 | Auditer la gouvernance agents IA : 88 % utilisent l'IA mais 8 % gouvernent maturément | GOUVERNANCE / ORGANISATION | DIRECTION DIGITALE + DSI |

---

## Références

[1]: https://www.searchenginejournal.com/what-opting-out-of-googles-ai-search-features-means-now/584321/
[2]: https://pressgazette.co.uk/platforms/google-adds-top-stories-links-to-many-news-related-ai-summaries/
[3]: https://developers.google.com/search/blog/2026/07/platform-properties-social-video-guide
[4]: https://techcrunch.com/2026/07/27/googles-ai-search-is-rapidly-becoming-the-default-new-data-shows/
[5]: https://www.semrush.com/sensor/
[6]: https://www.airops.com/blog/schema-markup-aeo
[7]: https://www.schemaapp.com/
[8]: https://parseur.com/blog/structured-data-for-ai-agents
[9]: https://www.luminary.com/blog/optimizely-agent-platform-2026
[10]: https://www.dxpscorecard.com
[11]: https://cdp.com/articles/what-is-databricks-customerlake-cdp/
[12]: https://ppc.land/adobe-advertising-ties-eyeota-ctv-ids-to-identities-without-cookies/
[13]: https://improvado.io/blog/multi-touch-attribution
[14]: https://intempt.com/blog/conversational-ai-design
[15]: https://www.linkedin.com/pulse/delegative-ui-aaron-usiskin-ld5xc
[16]: https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august
[17]: https://www.faegredrinker.com/en/insights/publications/2026/7/eu-ai-act-commission-confirms-transparency-code-of-practice-as-adequate-and-publishes-final-version-of-its-guidelines-on-transparency-obligations
[18]: https://caylent.com/blog/claude-opus-5-changes-improvements-and-how-it-compares-to-fable-5
[19]: https://www.superblocks.com/blog/ai-governance-trends
[20]: https://experienceleague.adobe.com/en/docs/genstudio-for-performance-marketing/user-guide/release-notes
[21]: https://nielseniq.com/global/en/insights/analysis/2026/retail-media-incrementality-measurement/
[22]: https://www.linkedin.com/pulse/retail-media-update-july-2026-weareactivation-rcd6c
