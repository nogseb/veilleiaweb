# Veille IA & Web — Semaine 44, 2026

**Publication :** 26 octobre 2026  
**Période de collecte :** 19 au 25 octobre 2026  
**Périmètre publié :** 4 domaines, 12 sources et un Bonus distinct.  
**Auteur :** Manus AI

## Signal majeur

> **La production IA ne devient fiable que lorsque les dépendances réelles et les preuves de sortie sont contrôlées.**

Une prépublication rejouant 38 083 commits issus de 714 pipelines publics DVC montre qu’une réutilisation basée sur les dépendances déclarées évite 83,4 % des exécutions, mais laisse 3,3 % d’étapes obsolètes. L’ajout d’une fermeture statique des imports ramène ce taux à 0,4 % tout en évitant 81,6 % des exécutions. Le résultat reste limité à des pipelines publics et ne préjuge pas des performances de TBS Education. [10]

## Tableau de bord

| Indicateur | Valeur |
|---|---:|
| Domaines analysés | 4 |
| Sources citées | 12 |
| Signaux critiques | 0 |
| Signaux importants | 4 |
| Actions immédiates | 5 |
| Tendances émergentes | 5 |
| Cas d’école retenus | 0 |

## Synthèse exécutive

Google évoque une Search davantage agentique, où l’accès aux sites peut passer par des pages ou des protocoles spécialisés. La distinction entre crawl et usage ultérieur des contenus reste importante : robots.txt ne couvre pas mécaniquement le second sujet. [1] [2] [3] Les données de la semaine ne justifient pas de surinvestir le GEO : le trafic référent direct des LLM demeure faible à côté de Google, même si des taux de conversion supérieurs apparaissent dans un sous-échantillon. [4] Les citations IA sont instables et doivent être observées comme un signal de présence, non comme une preuve de causalité. [5] L’UX conversationnelle évolue vers des interfaces qui composent formulaires et contrôles dans l’échange ; la réussite doit être mesurée sur l’effort et la résolution, pas seulement sur la déflexion. [8] [9] Les domaines Schema.org, CMS/DXP, CDP/identité et innovation marketing sont masqués : aucun fait de la semaine n’atteint le niveau de preuve requis.

## Analyses par domaine

### 1. Google AI Search — Les agents accèdent aux sites par pages ou protocoles

Les déclarations de Sundar Pichai, rapportées le 22 octobre, présentent une couche agentique destinée à rapprocher Search, Gemini et l’exécution de tâches. Google distingue la navigation de pages de protocoles spécialisés, citant notamment MCP, UCP et Google-Agent. Aucun calendrier ferme ni indicateur d’adoption n’est annoncé. [1] [2]

Gary Illyes rappelle que robots.txt agit d’abord sur le crawl, sans régler à lui seul l’usage IA de contenus déjà récupérés. Google-Extended est documenté pour certains usages Gemini ; Content-Usage est seulement un brouillon IETF. [3]

Pour TBS Education, la priorité est de maintenir des contenus institutionnels à jour, crawlables et cohérents. Les mesures doivent séparer indexation, citation, visite et conversion.

### 2. Zero-Click et GEO — Mesurer la présence, puis la conversion

Sur 12 mois de données GA4 couvrant 100 sites et plus de 145 millions de sessions, ChatGPT représente 0,62 % du volume Google Organic et l’ensemble des LLM 0,73 %. Sur 55 sites avec conversions suivies, le taux déclaré est de 13,8 % pour ChatGPT contre 3,02 % pour Google Organic, mais Google concentre 96,5 % des conversions. [4]

Une expérience sur un concept fictif montre que huit outils de recherche IA sur dix peuvent le citer en une semaine. Elle alerte sur la variabilité des citations, sans démontrer un effet comparable pour une marque ou un produit. [5] Google documente par ailleurs les contrôles d’inclusion applicables à AI Overviews et AI Mode. [6] [7]

TBS Education doit suivre un panel stable de requêtes de marque et de formation. Les citations, sessions attribuées et conversions CRM doivent rester des métriques séparées.

### 6. UX/UI conversationnelle — L’interface devient adaptative

La documentation OpenAI décrit une interface capable de composer texte, visuels, boutons, formulaires et expériences interactives dans la conversation. Aucun KPI d’usage ou de satisfaction n’est publié. [8]

Forrester recommande une approche experience-first, avec pilotes, tests A/B, préparation des contenus et API, puis suivi de l’effort et du résultat. [9] Pour un assistant d’orientation ou de candidature, TBS Education doit comparer la qualité de réponse, le recours à un conseiller et l’abandon avec le parcours existant.

### 7. IA générative en production — Les dépendances réelles conditionnent la preuve

Le replay académique sur 714 pipelines DVC confirme qu’une étape ne peut être réutilisée en confiance que si ses dépendances effectives et sa provenance sont couvertes. Les résultats justifient une gouvernance qui versionne modèles, prompts, données et configurations, avec validation humaine et réexécution après changement. [10]

La publication étudiée est un préprint et ne mesure ni les usages marketing, ni les usages pédagogiques. Elle fournit néanmoins un principe de conception prudent : une livraison doit échouer fermée lorsque la preuve est incomplète.

## Domaines masqués

**Schema.org et données structurées, DXP/CMS, CDP/data first-party et innovation marketing** ne sont pas publiés cette semaine. Les sources ouvertes étaient hors période, promotionnelles ou dépourvues de faits et KPI suffisamment vérifiables. Aucun cas d’école marketing n’est retenu.

## Actions prioritaires

1. Lancer un panel fixe de requêtes TBS Education et programmes, avec capture des réponses IA et de leurs citations.
2. Vérifier Google-Extended et les objectifs d’inclusion dans AI Overviews et AI Mode avant toute modification.
3. Mettre en place un reporting séparant citations IA, sessions attribuées et conversions CRM.
4. Ajouter au cadre de production IA la version des prompts, données, modèles, configurations et une revue humaine avant publication.
5. Définir un pilote conversationnel candidat avec groupe de comparaison et critères d’effort, résolution, exactitude et recours humain.

## Signaux émergents

L’accès agentique par pages ou protocoles, les contrôles de partage Google, l’UI conversationnelle adaptative, les release gates fail-closed et la robotique multimodale restent à suivre à un horizon de trois à dix-huit mois. Aucun de ces signaux ne vaut, seul, promesse de trafic ou de conversion pour TBS Education.

## Bonus — Les robots multimodaux progressent, mais les compromis restent visibles

Une évaluation de neuf modèles multimodaux sur six tâches RoboDojo estime un doublement de la performance tous les 53,9 jours entre juillet et octobre 2026. Elle rapporte un facteur 4,4 sur le meilleur taux d’exécution et une baisse d’un facteur 6,2 du coût minimal par sous-tâche, tout en constatant une précision et une efficacité encore insuffisantes pour un budget pratique. [11] Une seconde prépublication propose de vérifier si la diversité des contributeurs, objets et environnements améliore la généralisation zéro-shot plus que le seul volume de données ; cette hypothèse reste à tester. [12]

## References

[1]: https://www.searchenginejournal.com/google-ceo-sundar-pichai-views-search-absorbed-into-agentic-layer/593923/ "Google CEO Sundar Pichai Views Search Absorbed Into Agentic Layer"
[2]: https://www.searchenginejournal.com/pichai-ai-agents-browsing-protocols/593986/ "Google CEO Says Agents Will Hit Sites Two Ways, Pages And APIs"
[3]: https://www.searchenginejournal.com/google-illyes-robots-txt-crawling-ai-training/593957/ "Google Explains The Limit Of Robots.txt For AI Content Use"
[4]: https://www.searchenginejournal.com/geo-is-a-distraction-heres-where-the-real-opportunity-is/593870/ "GEO Is A Distraction: Here’s Where The Real Opportunity Is"
[5]: https://www.searchenginejournal.com/ai-search-tools-cited-a-made-up-concept-within-a-week-paper-finds/593472/ "AI Search Tools Cited A Made-Up Concept Within A Week, Paper Finds"
[6]: https://developers.google.com/search/docs/crawling-indexing/control-what-you-share "Control what you share with Google Search"
[7]: https://developers.google.com/search/updates "Latest documentation updates"
[8]: https://help.openai.com/en/articles/20001598-intelligent-ui-in-chatgpt "Intelligent UI in ChatGPT"
[9]: https://www.forrester.com/cx-cast/practitioner-stories-ai-driven-customer-self-service-with-ancestry-and-appfolio/ "Practitioner Stories: AI-Driven Customer Self-Service with Ancestry and AppFolio"
[10]: https://arxiv.org/html/2610.27672v1 "Reusing Assurance Evidence in AI Pipelines"
[11]: https://arxiv.org/html/2610.25287 "The Bitter Lesson Comes to Robotics"
[12]: https://arxiv.org/html/2610.29829v2 "Robot Generalization Beyond Volume"
