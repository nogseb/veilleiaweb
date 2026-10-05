# UX/UI conversationnelle — veille stratégique S41 (TBS Education)

**Fenêtre impérative : 29 septembre au 5 octobre 2026 inclus.**

## Qualification

**qualified=true.** Trois sources officielles OpenAI, toutes publiées dans la fenêtre, documentent une évolution directement pertinente pour les interfaces conversationnelles et les agents : des agents persistants accessibles par conversation multicanale, des mécanismes de contrôle et d’approbation, ainsi que des relais explicites vers l’utilisateur pour les actions sensibles. La source est un éditeur et les éléments produits sont donc à lire comme des déclarations fournisseur, non comme une validation indépendante de performance.

## Source principale — agents persistants accessibles par conversation

**Titre :** Introducing dots  
**URL :** https://openai.com/index/introducing-dots/  
**Date de publication :** 29 septembre 2026  
**Source :** OpenAI, annonce produit officielle.

OpenAI présente « dots » comme des agents persistants capables de travailler de façon autonome sur des tâches, avec un ordinateur cloud, un navigateur et des applications connectées. L’interaction reste conversationnelle : l’utilisateur peut écrire ou appeler un dot dans ChatGPT, lui parler dans Slack ou Teams, et le joindre depuis desktop, web et mobile. OpenAI affirme que le contexte est conservé entre ces canaux et que l’agent peut revenir vers l’utilisateur pour demander une décision ou signaler un avancement.

Sur le contrôle, la page décrit des permissions par application, des règles personnalisées permettant d’autoriser, d’exiger une approbation ou de bloquer certaines actions, ainsi qu’une vue d’activité permettant de suivre le travail et de rediriger l’agent. Les actions susceptibles d’affecter des comptes ou de partager de l’information font l’objet d’un contrôle « auto-review » ; les tâches sensibles, telles que le changement de mot de passe, restent à la charge de l’utilisateur. La page précise également que les dots peuvent encore se tromper et que le travail à conséquences doit être vérifié.

**Statistiques / chiffres attribués :** OpenAI indique que les dots peuvent se connecter à **plus de 4 000 applications**. Il s’agit d’une affirmation fournisseur ; aucune méthode indépendante, définition du périmètre ou taux d’erreur n’est fournie dans la page. Aucun KPI d’expérience utilisateur, de réussite de tâche ou de satisfaction n’est publié.

**Limites :** annonce promotionnelle d’un produit en déploiement progressif ; disponibilité limitée aux marchés éligibles et plans indiqués par OpenAI. Les exemples d’usage sont illustratifs et ne constituent pas des résultats évalués. La conservation de contexte entre canaux, l’autonomie et les capacités annoncées doivent être testées dans le contexte réel de TBS.

## Contrôle, explicabilité opérationnelle et relais humain

**Titre :** How we build safety, security, and privacy into dots  
**URL :** https://openai.com/index/how-we-build-safety-security-and-privacy-into-dots/  
**Date de publication :** 29 septembre 2026  
**Source :** OpenAI, documentation officielle de sécurité et de confidentialité.

OpenAI explique que les agents peuvent mal interpréter une demande et modifier le mauvais fichier ou divulguer une information. L’interface de contrôle proposée combine permissions, règles personnalisées, suivi dans Activity View, possibilité de corriger ou d’arrêter un travail, et contrôles séparés avant l’exécution d’actions. Le système « Auto-review » compare l’action planifiée avec les instructions, règles et exigences de sécurité ; en cas de blocage, l’agent peut demander des informations ou une approbation, utiliser une alternative autorisée, **rendre l’étape à l’utilisateur** ou s’arrêter.

La source précise plusieurs relais obligatoires : l’utilisateur doit approuver les achats ; la suppression permanente de données, l’installation d’un logiciel non reconnu et l’octroi d’un accès sensible nécessitent une confirmation à chaque fois ; le changement de mot de passe et les transferts d’argent doivent être rendus à l’utilisateur. Le dispositif fournit une forme d’explicabilité opérationnelle — statut, activité, raison d’un blocage — mais pas une explication complète des raisonnements internes du modèle.

OpenAI décrit aussi des limites techniques : les pages, e-mails ou documents peuvent contenir des instructions malveillantes de type prompt injection ; la surveillance peut mettre le travail en pause, mais OpenAI indique que les dots peuvent encore faire des erreurs. Les règles obligatoires ne peuvent pas être supprimées par les règles personnalisées de l’utilisateur.

**Statistiques / chiffres attribués :** aucune statistique de performance, de précision, de taux de blocage ou de réduction d’incidents n’est publiée. Les mécanismes décrits sont des contrôles de produit et non des résultats d’évaluation indépendants.

## Mise en production : frontières d’autonomie et demandes d’entrée utilisateur

**Titre :** A model guide for the GPT-6 family  
**URL :** https://openai.com/index/practical-guide-building-gpt-6/  
**Date de publication :** 2 octobre 2026  
**Source :** OpenAI, guide officiel de déploiement.

Le guide recommande de définir explicitement ce que le modèle peut décider seul et les moments où il doit demander une entrée utilisateur. Il conseille de fixer des frontières de décision, de préciser ce qui compte comme tâche terminée et de surveiller le comportement, le succès de tâche, la latence et le coût par tâche réussie avant un déploiement. Pour les tâches longues, OpenAI présente le « steering », les outils asynchrones et la délégation comme des mécanismes de pilotage ; le guide rappelle que les mises à jour d’instructions ne défont pas les actions déjà terminées.

Pour l’UX conversationnelle, le point important est le passage d’un échange question-réponse à une supervision continue : l’utilisateur donne une mission, reçoit des mises à jour, fournit des arbitrages et doit pouvoir reprendre la main lorsque le périmètre ou le risque change. Le guide reste toutefois principalement technique et ne décrit pas de protocole d’étude utilisateur ni de mécanisme d’explicabilité destiné à un public non technique.

**Statistiques / chiffres attribués :** OpenAI indique que la mise en cache peut réduire le coût des entrées jusqu’à **95 %**, selon le modèle. Ce chiffre concerne le coût d’infrastructure de l’API, pas l’UX ni la qualité d’un agent conversationnel. Le guide présente aussi des tarifs de modèles, sans constituer un KPI d’adoption ou de performance UX. Un cas partenaire affirme environ **trois fois** le taux de réussite pour certaines tâches de correction colorimétrique dans Invideo, mais il s’agit d’un cas fournisseur/partenaire auto-déclaré et non d’une étude méthodologiquement détaillée ; il n’est donc pas retenu comme preuve de performance générale.

## Intérêt pour TBS Education

Le signal stratégique est la normalisation d’une UX où la conversation devient le point d’entrée d’un travail continu, tandis que l’interface doit rendre visibles les permissions, l’état d’avancement, les demandes d’approbation et les raisons d’un blocage. Pour TBS Education, cela concerne notamment les assistants étudiants, les services admissions et scolarité, l’aide aux enseignants et les assistants de recherche.

Une conception responsable devrait distinguer clairement : ce que l’agent peut lire, ce qu’il peut préparer, ce qu’il peut exécuter, ce qui exige une approbation et ce qui doit obligatoirement revenir à un humain. Le relais humain ne doit pas être seulement une sortie de secours : il doit transporter le contexte utile, signaler l’action déjà effectuée et laisser l’utilisateur ou le personnel reprendre la décision. Les expériences TBS devraient mesurer la compréhension des permissions, le taux d’acceptation ou de correction des suggestions, les abandons, les erreurs de routage et la qualité du relais vers un agent humain.

## Domaine marketing

**Aucun cas marketing qualifié dans cette recherche.** Les sources retenues ne fournissent pas simultanément une marque cliente, une période d’exploitation, un mécanisme détaillé et un KPI vérifiable avec méthode. Les exemples OpenAI de dots et de partenaires sont des illustrations de produit ou des déclarations fournisseur ; ils ne sont pas utilisés comme preuve de ROI ou de conversion.

## Sources exclues

- **AISI, “Evaluating Whether GPT-6 Astra Performs Unsanctioned Supply-Chain Attacks”, https://www.aisi.gov.uk/research/evaluating-whether-gpt-6-astra-performs-unsanctioned-supply-chain-attacks, 28 septembre 2026 :** hors fenêtre impérative d’un jour ; exclue malgré sa pertinence pour le contrôle.
- **Twilio, “How to design an AI-to-human handoff that preserves context”, https://www.twilio.com/en-us/blog/insights/ai-to-human-handoff-context, 22 septembre 2026 :** hors fenêtre ; exclue.
- **Aloware, “AI-to-Human Handoff: When AI Should Stop”, https://aloware.com/blog/ai-to-human-handoff, 1er octobre 2026 :** dans la fenêtre, mais contenu éditeur promotionnel sans méthode ou KPI vérifiable ; non retenu comme source qualifiée prioritaire.
- Les articles de comparaison, glossaires, billets marketing, reprises et pages datées avant le 29 septembre 2026 ont été écartés conformément au périmètre et aux règles de preuve.

## Conclusion

Les sources qualifiées de la fenêtre montrent un déplacement de l’UX conversationnelle vers des agents persistants et capables d’action. La contrepartie UX est une obligation de contrôle compréhensible : permissions lisibles, état d’activité, approbations, raisons de blocage, possibilité d’arrêt et relais explicite à l’humain. Les annonces ne donnent pas de preuve indépendante de qualité ni de KPI marketing ; elles constituent un signal de conception et de gouvernance, à tester localement avant toute transposition à TBS Education.
