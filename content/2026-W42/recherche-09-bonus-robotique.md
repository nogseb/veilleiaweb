# Audit de recherche — Bonus robotique — S42 2026

**Fenêtre autorisée : 6–12 octobre 2026 inclus.**  
**Axe :** Bonus robotique, geek ou futuriste.  
**Résultat : signal qualifié.** Deux faits de recherche publique et un signal industriel vérifiable passent les critères. Le meilleur sujet pour une courte carte Bonus est SANDO, le planificateur de trajectoire du MIT : un drone peut recalculer une trajectoire sûre dans un environnement inconnu et dynamique, avec une garantie mathématique d’absence de collision.

## Sources retenues

### 1. MIT News — SANDO, trajectoires sûres pour drones

**Publication :** 7 octobre 2026.  
**URL ouverte :** https://news.mit.edu/2026/planning-system-ensures-robots-flight-path-will-remain-collision-free-1007  
**Nature :** source institutionnelle, MIT News, relayant un article publié dans *IEEE Transactions on Robotics*.

**Faits sourcés :**

- Les chercheurs du MIT présentent **SANDO** (*Safe AutoNomous trajectory planning for Dynamic unknOwn environments*), une méthode de planification pour véhicule aérien sans équipage.
- SANDO construit un **corridor de sécurité spatio-temporel** : il tient compte des déplacements futurs possibles d’obstacles dynamiques, alors que de nombreux planificateurs ne garantissent la sécurité que dans un environnement statique ou connu.
- Le système n’a pas besoin de connaître la trajectoire exacte des obstacles : il utilise leur **vitesse maximale** pour borner la zone qu’ils peuvent atteindre, puis planifie autour de cette zone.
- Dans les simulations, SANDO a atteint l’objectif plus vite que plusieurs systèmes de référence tout en évitant les collisions dans tous les environnements testés.
- Lors de **12 vols avec un UAV réel**, SANDO a évité tous les obstacles dynamiques en recalculant les trajectoires à partir de l’ordinateur embarqué et des capteurs du robot.

**Contexte des chiffres :** les 12 vols correspondent à la validation matérielle rapportée par MIT News ; la page ne donne pas dans l’article une taille d’échantillon permettant d’en déduire un taux général de réussite. Le « tous les environnements » concerne les simulations décrites par l’article, pas une garantie de performance universelle.

**Limites :** le système suppose que la vitesse maximale des obstacles est connue ou correctement bornée. MIT indique que les auteurs souhaitent encore améliorer l’efficacité de calcul et combiner SANDO avec des modèles d’apprentissage. La formulation « garantie » est une garantie mathématique dans le modèle de l’article, pas une promesse de fonctionnement sans risque dans toutes les situations réelles.

**Angle carte Bonus proposé :** « Un drone qui sait éviter l’inconnu : le système SANDO du MIT garantit mathématiquement une trajectoire sans collision même face à des obstacles mobiles jamais cartographiés. Testé sur 12 vols réels, il a évité chaque obstacle dynamique. »

### 2. U.S. Department of Energy — quatre projets pour l’autonomie scientifique robotique

**Publication :** 8 octobre 2026.  
**URL ouverte :** https://www.energy.gov/science/articles/doe-announces-four-national-laboratory-led-selections-advance-robotics-and  
**Nature :** source gouvernementale officielle, Office of Science du DOE.

**Faits sourcés :**

- Le DOE a sélectionné **quatre projets dirigés par des laboratoires nationaux** pour faire progresser la robotique et l’automatisation dans la découverte scientifique autonome : MAESTRO, DART, TRACE et SPIRE.
- Les projets doivent produire des infrastructures réutilisables : logiciels et interfaces ouverts, compétences robotiques réutilisables, environnements de jumeaux numériques, tâches de référence, jeux de données, modèles entraînés, pratiques de sécurité et traces de provenance.
- Le financement total annoncé est de **30 millions de dollars**, dont **2 millions de dollars pour l’exercice 2026** ; le financement des années suivantes dépend des crédits du Congrès.
- Les quatre projets couvrent des fonctions distinctes : apprentissage par l’expérience (MAESTRO), test de fiabilité et transfert (DART), connexion et reproductibilité entre laboratoires (TRACE), puis déploiement de l’autonomie dans des installations de photonique et de science des électrons (SPIRE).

**Contexte des chiffres :** les 30 M$ sont le montant total associé aux projets sélectionnés dans le cadre du programme ASCR ; les 2 M$ sont explicitement limités à l’exercice 2026. Le DOE précise qu’une sélection pour négociation n’est pas encore un engagement de financement.

**Limites :** il s’agit d’une sélection de projets et non de résultats expérimentaux déjà démontrés. Les financements ultérieurs sont conditionnels et les négociations peuvent être annulées. Le contenu est institutionnel et factuel, mais ne permet pas encore de mesurer l’efficacité des robots.

### 3. Agility Robotics — Digit 5 et passage à l’échelle commerciale

**Publication :** 6 octobre 2026.  
**URL ouverte :** https://www.agilityrobotics.com/content/agility-robotics-to-livestream-analyst-investor-day-today  
**Nature :** communiqué officiel de l’entreprise ; retenu comme signal industriel, avec réserves sur l’auto-déclaration.

**Faits sourcés :**

- Agility annonce une journée investisseurs consacrée à **Digit 5**, son robot humanoïde de nouvelle génération, présenté comme conçu pour un travail coopératif sûr à grande échelle.
- L’entreprise affirme que Digit s’appuie sur **plus de 65 000 heures d’opération en conditions réelles** et sur plusieurs années de déploiements commerciaux.
- Agility déclare avoir sécurisé **plus de 300 millions de dollars de commandes pluriannuelles** pour Digit 5.
- La note du communiqué précise que ce montant reflète des commandes clients à mai 2026, avec une valeur potentielle réalisée dans le temps et soumise à des étapes contractuelles ; ce n’est **pas** une mesure du chiffre d’affaires de la période.

**Contexte des chiffres :** les 65 000 heures et les 300 M$ sont des chiffres fournis par Agility Robotics. Le second concerne une valeur potentielle de commandes pluriannuelles, et non des revenus encaissés.

**Limites :** source d’entreprise à visée investisseurs, donc potentiellement promotionnelle. Aucun détail indépendant sur le nombre de robots, les tâches, le taux de disponibilité ou la ventilation des commandes n’est fourni dans la page. Le chiffre de commandes est conservé uniquement parce qu’il est attribué, contextualisé et assorti d’une note explicite ; il ne doit pas être présenté comme un revenu.

## Limites générales de la veille

La fenêtre de publication est respectée pour les trois pages retenues : 6, 7 et 8 octobre 2026. Les pages ont été ouvertes et leur contenu complet a été consulté, plutôt que repris depuis des extraits de moteur. Les résultats ne permettent pas d’extrapoler à l’ensemble du marché robotique ni de conclure à une adoption généralisée des humanoïdes. Les performances quantitatives doivent rester attachées à leur protocole : simulations et 12 vols réels pour MIT ; annonces de sélection et budget pour DOE ; déclarations d’entreprise et commandes potentielles pour Agility.

## Sources écartées et motifs

- https://ifr.org/ — page d’accueil sans date de publication dans la fenêtre ; le résultat mentionnant septembre 2026 est antérieur à la fenêtre et ne constitue pas un article daté du 6–12 octobre.
- https://www.robotics247.com/news — page d’index ; les éléments repérés ne constituaient pas, dans cette recherche, une page détaillée ouverte et vérifiée avec suffisamment de contexte indépendant.
- https://www.therobotreport.com/top-10-robotic-stories-june-2026/ — publié le 1er juillet 2026, hors fenêtre.
- https://2026.ieee-iros.org/ — page d’événement ; la conférence indiquée se termine le 1er octobre, donc hors fenêtre autorisée, et la page ne fournit pas un fait nouveau daté de la période.
- https://www.agilityrobotics.com/content/agility-and-fort-robotics-announce-strategic-partnership-to-advance-humanoid-robot-safety — publié le 1er octobre 2026, hors fenêtre.
- https://news.utexas.edu/2026/08/27/ut-to-lead-nsf-center-that-will-study-how-robots-and-people-learn-to-live-and-work-together/ — publié le 27 août 2026, hors fenêtre.
- https://www.nvidia.com/blog/national-robotics-week-2026/ — publié le 10 avril 2026, hors fenêtre et contenu de présentation d’entreprise antérieur à la période.
- https://www.autonomyglobal.co/neura-robotics-will-unveil-next-generation-robots-and-showcase-the-neuraverse-platform-at-ces-2026/ — publié le 30 décembre 2025, hors fenêtre et annonce promotionnelle préalable à l’événement.
- https://www.youtube.com/watch?v=1HR7DzSnRUM — vidéo non retenue : date et nature éditoriale insuffisamment établies pour auditer un fait dans la fenêtre, et absence de source primaire vérifiée.
- https://buttondown.com/robotcafe/archive/today-in-robotics-thursday-october-8-2026/ — newsletter de reprise ; elle renvoie vers d’autres sujets mais n’apporte pas, dans la page ouverte, une analyse primaire suffisamment documentée pour remplacer les sources MIT/DOE.

## Conclusion opérationnelle

Le signal le plus net et le plus « Bonus » est **SANDO du MIT** : une prouesse robotique compréhensible en une phrase, datée du 7 octobre, avec un résultat concret sur robot réel et une limite clairement formulée. Le DOE fournit un second angle plus institutionnel sur la robotique comme infrastructure de recherche. Agility peut servir d’encadré industriel, mais ses chiffres doivent rester explicitement attribués à l’entreprise.
