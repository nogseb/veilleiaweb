# Veille — UX/UI conversationnelle

**Fenêtre surveillée : 22–28 septembre 2026 inclus**  
**Décision : `status=retained`**

## Retenues

### 1. Source principale — OpenAI, *ChatGPT — Release Notes*

- **URL :** https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- **Éditeur :** OpenAI
- **Date vérifiée :** 23 septembre 2026 (entrée de changelog explicitement datée)
- **Type :** source primaire / note de version institutionnelle
- **Pourquoi retenue :** la publication documente directement une évolution de l’expérience conversationnelle vocale et multimodale, avec ses surfaces, ses mécanismes d’interaction et ses contraintes d’accès. Elle est accessible et la date est visible dans la page.

### 2. Source complémentaire — Microsoft, *Introducing the new Copilot with Home, Code and Autopilot*

- **URL :** https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/
- **Éditeur :** Microsoft
- **Date vérifiée :** 25 septembre 2026
- **Type :** annonce officielle de produit / source primaire
- **Pourquoi retenue :** l’annonce décrit une architecture d’interface conversationnelle et agentique concrète : séparation entre conversation instantanée et délégation de tâches, continuité du contexte dans les applications, contrôle et gouvernance, ainsi qu’un agent persistant. Elle apporte une observation propre sur les patterns d’interface et de confiance, même si son ton est promotionnel ; elle n’est pas utilisée comme preuve de performance chiffrée.

## Faits vérifiés

### OpenAI — Voice, plugins et continuité entre voix et texte

La note de version, sous le titre **« Use plugins in Voice and get work done by speaking »**, indique strictement :

> « Live now supports plugins on web, iOS, and Android. »

Elle précise que l’utilisateur peut utiliser les plugins et applications connectées disponibles pour son compte pendant une conversation vocale et **« follow written responses in the chat »**. La note ajoute que Voice est aussi disponible dans Work sur le web et mobile ; l’utilisateur peut demander la création de documents, présentations et feuilles de calcul, utiliser des applications connectées ou travailler dans un navigateur. À la fin d’un appel vocal dans Work, une tâche inachevée peut continuer en texte.

**Lecture UX/UI :** le pattern important est la continuité intermodale : la voix ne remplace pas l’interface textuelle, elle la complète. Le suivi écrit dans le chat apporte une trace consultable, tandis que la poursuite en texte d’une tâche interrompue réduit la rupture de contexte. La note mentionne aussi que les connexions d’applications, permissions et limites d’usage existantes s’appliquent : c’est un point de contrôle et de transparence utile pour la confiance.

**Chiffres / métriques :** aucun KPI d’usage, de satisfaction, de conversion ou de performance n’est publié dans cette entrée. Aucun chiffre n’est donc transposé ou calculé.

### Microsoft — Home, Chat, Cowork, Code et Autopilot

L’annonce du 25 septembre 2026 présente trois nouvelles capacités dans l’application Copilot : **Home**, **Code** et **Autopilot**. Les éléments UX vérifiables sont les suivants :

- **Home** réunit Chat et Cowork dans un même point de départ ; l’utilisateur peut consulter l’activité récente, recevoir des suggestions et reprendre un travail là où il l’avait laissé.
- **Chat** est décrit comme instantané et conversationnel, pour les questions rapides, les recherches, la rédaction et le suivi « on every turn ».
- **Cowork** est présenté comme le mode de délégation : l’utilisateur définit une tâche et le système l’exécute de bout en bout pour renvoyer un résultat à itérer.
- Microsoft indique qu’à terme l’utilisateur n’aura plus à choisir un mode : il pourra simplement exprimer ce qu’il veut accomplir, et Copilot orientera le travail vers Chat, Cowork ou Code.
- Avec **Office in Copilot**, la conversation reste à côté d’un document, classeur ou support éditable ; les changements dans Excel peuvent être vus avec ce qui a changé et pourquoi.
- **Autopilot** est décrit comme un agent persistant, proactif et personnel. L’utilisateur définit un objectif et des limites ; l’agent agit ensuite tout en tenant l’utilisateur informé et en le laissant garder le contrôle. L’annonce mentionne une identité, une mémoire, un environnement de travail, des permissions, des audits et une gouvernance.

**Lecture UX/UI :** l’annonce formalise un continuum entre répondre, collaborer et déléguer. Le point de confiance le plus exploitable n’est pas une promesse de productivité, mais la visibilité des changements, les limites définies par l’utilisateur, les permissions, l’audit et la gouvernance. Le risque UX à surveiller est la frontière entre conversation et action autonome : le routage automatique promis devra rester compréhensible et réversible.

**Chiffres / métriques :** la page mentionne « 20+ million semantic models in Power BI » dans le contexte de Fabric IQ. Ce chiffre est reproduit uniquement avec son libellé et son contexte ; il ne constitue pas un KPI UX et n’est pas interprété comme tel. Aucun KPI d’expérience utilisateur ou de performance conversationnelle n’est publié.

## Exclusions

- **W3C, WCAG 3.0 Working Draft — 10 septembre 2026 :** hors fenêtre obligatoire (avant le 22 septembre), donc exclu malgré sa pertinence potentielle pour l’accessibilité.
- **Articles NN/g sur les chatbots et la confiance :** résultats datés du 20 mars, 17 avril ou 12 décembre 2025/2026, mais hors fenêtre ; exclus.
- **Guides UX commerciaux et articles de blogs spécialisés** (SubUX, Neuron, Voiceflow, Parallel, etc.) : hors fenêtre et/ou contenus de bonnes pratiques sans publication institutionnelle datée dans la période ; exclus.
- **Résultats arXiv / académiques repérés autour du 19 septembre 2026 :** hors fenêtre ; exclus. Les résultats sans date de publication vérifiable ont également été écartés.
- **Contenus LinkedIn, Reddit et pages communautaires :** non retenus comme sources principales en raison de l’accessibilité, de la vérifiabilité ou de l’absence d’analyse institutionnelle propre.
- **Cas marketing chiffré :** aucun cas satisfaisant simultanément les exigences marque + période/mécanisme + KPI chiffré + source accessible n’a été identifié dans la fenêtre. Les annonces OpenAI et Microsoft ne sont donc pas présentées comme des cas marketing et aucun KPI n’est inventé.

## Angle TBS Education

**De la conversation à la délégation contrôlable : concevoir une IA pédagogique qui garde l’étudiant dans la boucle.**

Pour TBS Education, l’enseignement à tirer est de traiter l’interface conversationnelle comme un parcours hybride, pas comme une simple boîte de chat :

1. permettre une question rapide en langage naturel ;
2. afficher une trace écrite et vérifiable des réponses ou actions ;
3. rendre explicite le passage de la réponse à l’exécution ;
4. demander confirmation ou exposer les limites avant les actions sensibles ;
5. conserver un contexte transférable entre voix, texte, documents et outils ;
6. prévoir une reprise humaine quand l’étudiant est bloqué, conteste une réponse ou rencontre une situation à enjeu.

Dans un contexte pédagogique, la confiance ne doit pas reposer sur le ton humain de l’assistant : elle doit être soutenue par la traçabilité, les permissions, l’explication des changements, l’accessibilité des sorties et un handoff clair vers un enseignant ou un service support.

## Bonus — hors des huit domaines

À titre bref, le motif transversal à surveiller est la **continuité de contexte** : les annonces de la période montrent que la valeur UX se déplace du dialogue isolé vers la reprise d’une tâche entre voix, texte, applications et agent autonome. Cette observation est indicative et ne remplace pas les deux retenues ci-dessus.
