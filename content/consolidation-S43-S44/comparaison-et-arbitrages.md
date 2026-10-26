# Comparaison et arbitrages S43–S44 2026

**Destinataire :** Sébastien — TBS Education  
**Objet :** jugement éditorial et opérationnel, sans notation artificielle.

## Conclusion d’ensemble

La concurrente est globalement plus utile à TBS Education : elle couvre les huit catégories, ajoute un volet de mesure et relie davantage ses constats au CMS, à la donnée, aux parcours et aux contrôles d’agents. Mes sélections initiales sont trop restrictives : la S43 Manus initiale ne publie que trois catégories et en masque cinq ; la S44 Manus en couvre quatre et laisse de côté des faits matériels sur PHP, la donnée et l’innovation. Faire du préprint DVC le signal majeur S44 est disproportionné pour une école. Ma prudence sur la chaîne citation → visite → conversion reste toutefois un acquis à conserver.

La S43 jointe est strictement identique au rapport S43 corrigé déjà présent dans le dépôt : la comparaison utile porte donc sur la S43 Manus initiale, et non sur deux copies de la version corrigée. Le comptage documentaire donne trois analyses/six URL pour cette S43 initiale, neuf/32 pour la S43 concurrente corrigée, quatre/12 pour la S44 Manus et neuf/34 pour la S44 concurrente. Ces nombres décrivent une couverture, jamais une fiabilité ou une note de qualité.

Les périodes ne sont pas strictement comparables : S43 concurrente couvre le 14–21 octobre et Manus S43 le 13–19 ; S44 concurrente couvre le 19–26 et Manus S44 le 19–25. Cas d’école à 30 jours, suivis de fond et sources anciennes s’ajoutent au périmètre. Les 19–21 octobre se chevauchent : un fait doit être attribué une fois. Deux reprises de la même interview ne sont pas deux preuves indépendantes.

## Arbitrage des dix volets

### 1. Google AI Search — conserver, resserrer

**Conserver :** l’annonce Google du 15 octobre sur des liens plus fréquents et plus hauts dans AI Mode/AI Overviews et le test pour une ou deux destinations officielles. Ni clic, ni trafic, ni disponibilité France détaillée n’est publiée : TBS Education doit organiser des pages institutionnelles univoques, non attendre une priorité garantie. Semrush est utile comme signal commercial américain : ses 88 % concernent 400 mots-clés desktop de banque, logiciels et e-commerce, pas les admissions françaises. Les cartes de citation résumées observées le 23 octobre sont un test non confirmé.

**Améliorer :** panel français stable (marque, programme, frais, campus, comparaison), capture de la réponse, domaine cité, description, destination et rapprochement Search Console/analytics/CRM.

**Écarter ou attendre :** une décision candidat déjà formée dans la réponse, une réécriture systématique et un encart officiel déployé en France. La vision agentique de Pichai est prospective : pas de justification à UCP, MCP ou gateway TBS Education.

### 2. Zero-click et GEO — mesurer, ne pas promettre

**Conserver :** l’étude SISTRIX appariée ; sommaire, structure, auteur, date et balisage adapté y sont associés à davantage de citations dans le panel DACH. Le préprint sur ChatGPT confirme l’imperfection des proxys Google/API. Fudan est une alerte de provenance, non une recette de semis de contenus.

**Améliorer :** suivre domaine et URL sur répétitions, avec fréquence, rétention, source citée, session attribuée et conversion CRM. Le domaine agrégé est moins fragile qu’une URL isolée, pas fiable par principe.

**Écarter ou attendre :** un gain causal des gabarits, une promesse de citation/visite/candidature et l’inutilité universelle de `llms.txt`. Fudan, attribué à S43 par exception, n’est pas un fait S44.

La concurrente précise déjà que SISTRIX mesure des corrélations et propose une validation locale : je conserve ce garde-fou. J’améliore surtout la portée des gabarits, sans généraliser Article/FAQPage à toutes les fiches. La source comporte aussi un effectif à clarifier : elle annonce 96 418 URL et 48 527 pages citées, chacune appariée à une autre. Le double serait 97 054 ; l’écart n’est pas expliqué dans la page. Ne pas présenter ces nombres comme un total de paires vérifié. [1]

### 3. Données structurées et accès des robots — correction impérative

**Conserver :** Schema.org décrit ; Google décide de ses fonctionnalités ; l’éligibilité ne garantit ni affichage ni classement. Robots.txt pilote le crawl coopératif, non la confidentialité, l’indexation à lui seul ou la protection IP.

**Améliorer :** JSON-LD fidèle au contenu, contrôlé dans Rich Results Test, inspection d’URL et Search Console. Séparer crawl, indexation/présentation et préférences par agent. Un `noindex` doit être crawlable ; le privé relève de l’authentification.

**Corriger :** la carte Schema.org de ma S43 initiale datait à tort d’octobre 2026 des entrées Google d’octobre 2023. La version S43 corrigée l’a déjà remplacée. Cette erreur doit rester inscrite au contrôle qualité, sans confondre la date de mise à jour globale d’une page avec celle de chaque entrée. [2]

**En attente :** le détail des conditions commerciales Meta révisées, leur date d’effet et le droit d’exploration doivent être confrontés au texte Meta applicable aux comptes professionnels. Les Conditions Meta AI UE sont un autre document et ne permettent pas cette validation. La concurrente déclare elle-même ne pas avoir lu directement le texte révisé : son alerte juridique est utile, son application exacte aux domaines de l’école ne doit pas être présentée comme déjà démontrée.

### 4. CMS, DXP et socle technique — priorité opérationnelle

**Conserver :** Drupal SA-CORE-2026-014 du 14 octobre et les correctifs PHP du 21 octobre, précédés d’une tentative observée AWS le 17. Les omissions Manus sont matérielles. Le risque dépend du runtime, des modules, du code et du service exposé, pas du seul CMS.

**Améliorer :** attestation hébergeur/intégrateur par environnement : version exécutée, image/paquet, correctif, heure, recette, responsable. Sortie de PHP 8.2 selon compatibilité. Maintenance HTTP 503 depuis CDN/proxy/serveur, jamais « depuis le DNS ».

**Écarter :** « tous les sites WordPress/Drupal/Joomla sont exploitables » et toute compromission TBS Education déduite de la télémétrie AWS. Pas de rétroportage présumé sans preuve fournisseur.

### 5. Data, CDP, identité et consentement — inventorier, ne pas raccourcir

**Conserver :** Safari/WebKit 27 bloque des résolveurs d’identité tiers fondés sur l’e-mail cross-site, sans viser la personnalisation first-party. Le mandat Digital Omnibus du Conseil, le 21 octobre, n’est ni loi ni modification immédiate de CMP.

**Améliorer :** cartographier finalité, données, destinataires, consentement, durée et retrait de chaque flux ; distinguer CRM/CDP TBS Education et appel vers un résolveur tiers. Le server-side peut réduire des appels, pas supprimer RGPD, ePrivacy ou analyse DPO.

**Corriger :** la concurrente écrit bien que rien n’est adopté et recommande d’attendre : je conserve cette prudence. En revanche, l’« abandon » du choix navigateur est contredit par le mandat du Conseil, qui comporte des choix automatisés lisibles par machine. [3]

**En attente :** l’évolution Data Manager annoncée au 16 novembre, relayée depuis un courriel, n’est pas confirmée par une notice primaire applicable au flux étudié. La documentation API ouverte maintient le hachage avant chiffrement ; elle ne prouve pas à elle seule qu’une évolution future ou un produit différent n’existe pas. Aucun changement de flux sur cette seule base. [4]

### 6. Mesure — bloc transversal indispensable

**Conserver :** les sessions ChatGPT sans UTM/referrer entre le 8 et le 15 octobre peuvent rester en Direct ; on annote, on ne réécrit pas l’historique. Marie Haynes distingue 100 sites pour les sessions et 55 pour les conversions. Nozzle alerte sur des collectes automatisées, non sur ce qu’a forcément vu un candidat.

**Améliorer :** reporting séparant présence/citation, session UTM/referrer et qualité d’attribution, demande CRM et résultat aval ; contrôle Search Console avant toute action issue d’un rank tracker.

**Écarter :** la pseudo-tendance Nozzle 8,0 % → 8,4 % → 8,7 %, les moyennes de benchmarks hétérogènes et toute conclusion rentabilité/inutilité GEO.

### 7. UX conversationnelle et web agentique — humain d’abord

**Conserver :** NN/g : résultat synthétique proche sur une seule question, mais diversité très moindre. Walmart et Claude Duet illustrent des modèles distincts de contrôle, approbation et navigateur agentique.

**Améliorer :** recette clavier, lecteur d’écran, HTML sémantique, libellés, erreurs et stabilité. Les tests agents autorisés complètent, sans remplacer, l’évaluation humaine d’exactitude, effort, abandon, résolution et recours conseiller.

**Écarter ou attendre :** la soumission autonome par ChatGPT Work, une gateway Walmart déjà générale, un volume agent TBS Education nul et une confirmation e-mail universelle.

### 8. IA en production et gouvernance — contrôles indépendants

**Conserver :** le rapport OpenAI du 20 octobre décrit deux incidents internes de désactivation d’alertes/surveillance. Journal indépendant, interdiction de modifier ses propres contrôles, droits minimaux et validation humaine sont justifiés. Le discours de la Commission du 14 octobre justifie un registre d’usage.

**Améliorer :** qualifier chaque outil par finalité, données, accès, pouvoir de décision et profilage. L’admission est à analyser cas par cas au regard de l’article 6(3). REA ou équivalent exige autorisation écrite et revue juridique.

**Écarter :** attribution nominative non établie des demandes de l’AI Office à OpenAI/Anthropic, date générale de chatbot au 2 décembre, et clone libre de toute fonctionnalité « en quelques jours » par REA. L’information d’interaction avec une IA est applicable depuis le 2 août ; la transition du 2 décembre concerne des obligations spécifiques de marquage/étiquetage, pas tous les chatbots. [5] [6]

### 9. Innovation marketing et cas d’école — pilote contrôlé

**Conserver :** Universal Cart est un signal commercial S43, non un parcours admissions. Les lifecycle goals Google Ads sont documentés dans Search et peuvent justifier un pilote Executive Education. Currys, une seule fois en S43, publie des résultats IPA mais sans méthode intégrale accessible.

**Améliorer :** pilote Search avec segment licite, liste active, exclusion des convertis, issue CRM et période/groupe de contrôle. Valider la valeur marginale avant PMax ou ajustement de valeur.

**Corriger :** l’exclusion de la France de ChatGPT Ads est contredite par l’annonce OpenAI du 18 août, complétée le 31 août. L’absence du pays dans une liste illustrative d’octobre ne prouve pas son indisponibilité. [7]

**Écarter ou attendre :** le recompte d’Universal Cart comme nouveauté S44 ; les règles « rétention seule » ou multiplicateurs sans source Google primaire/interface. Absence de nouveau cas avec KPI ne signifie pas absence d’innovation marketing : c’était une erreur de ma sélection.

### 10. Bonus et mémoire — dater, archiver

**Conserver :** RoboDojo v2 du 21 octobre est un Bonus S44 recevable ; les auteurs constatent une maturité encore insuffisante. Fudan reste une seule alerte S43.

**Améliorer :** mémoire = journal de décisions avec URL primaire, dernière vérification, statut actif/archive à revalider et décision durable.

**Écarter ou attendre :** v1 RoboDojo du 18 octobre comme fait S44, Robot Generalization comme résultat et l’extrapolation SISTRIX Recipe aux frais/dates TBS Education.

## Actions fiables

1. Attestation PHP/Drupal et preuve de recette par environnement ; test du 503 amont.
2. Propriétaire, date de révision et référentiel pour programme, campus, frais, calendrier et admission.
3. Panel de requêtes, captures, citation/session/CRM réconciliés ; annotation de l’incident ChatGPT.
4. Cartographie des flux d’identité et maintien de la CMP jusqu’à évolution du droit applicable.
5. Accessibilité des formulaires, droits minimaux, journaux externes et validation humaine des actions agentiques.
6. Éventuel pilote Search Executive Education contrôlé ; ni gateway agent ni API admissions maintenant.

## Processus à améliorer

Sans modifier les skills ni le prompt existants, analyser les **huit catégories obligatoires** dans l’ordre : fait sourcé, suivi sourcé ou « aucune actualité vérifiée ». Un masquage ne doit pas cacher l’absence de recherche. **Mesure** est un bloc transversal optionnel et le **Bonus** est distinct. Marquer toute entrée « actualité », « suivi historique » ou « fond », avec date, source primaire et limite. Les KPI sont exigés pour statistiques/cas, pas pour toute innovation. Compter séparément URL distinctes, faits indépendants et sources primaires ouvertes ; préciser toute exception de date et tout chevauchement. N’ajouter ni score, ni seuil inventé, ni promesse de citation, trafic ou conversion.

**Aucun site, dépôt GitHub ou session partagée n’a été modifié.**

## Références des corrections décisives

[1]: https://www.sistrix.com/blog/citation-worthiness-study/ "SISTRIX — Citation Worthiness, 22 octobre 2026"
[2]: https://developers.google.com/search/updates "Google Search Central — journal des mises à jour"
[3]: https://data.consilium.europa.eu/doc/document/ST-14756-2026-INIT/en/pdf "Conseil UE — mandat Digital Omnibus 14756/26"
[4]: https://developers.google.com/data-manager/api/devguides/concepts/formatting "Google Data Manager API — format des données utilisateur"
[5]: https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august "Commission européenne — application des règles IA au 2 août 2026"
[6]: https://digital-strategy.ec.europa.eu/en/faqs/code-practice-transparency-ai-generated-content "Commission européenne — FAQ des obligations de transparence"
[7]: https://openai.com/index/chatgpt-ads-expands-across-europe/ "OpenAI — extension de ChatGPT Ads en Europe"
