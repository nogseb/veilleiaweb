# Veille IA & Web — compilation S43–S44 2026

**Pour Sébastien — TBS Education.** Socle S43 conservé et S44 consolidée recommandée. Les fenêtres se chevauchent : chaque fait est attribué une seule fois. Seuls les faits référencés et vérifiés sont retenus. Aucun site, dépôt GitHub ou session partagée n’est modifié.

## Signal majeur — sécurité de socle

Le 21 octobre, PHP a corrigé les CVE-2026-109618 et CVE-2026-109619 dans 8.2.35, 8.3.36, 8.4.27 et 8.5.12. AWS a observé une tentative le 17, sans en établir la réussite. [1] [2] Le risque TBS Education dépend du runtime, des requêtes Web et de l’exposition ; le CMS ne suffit pas à conclure. Exiger, par environnement, version, image/paquet, heure de correctif, recette et responsable. Préparer un HTTP 503 via CDN, proxy ou serveur : le DNS ne produit pas de statut HTTP. [3] [4]

## S43 — socle conservé

**1. Google AI Search.** Le 15 octobre, Google a annoncé davantage de liens intégrés et plus hauts dans AI Mode/AI Overviews, ainsi qu’un test pour une ou deux destinations officielles. Le « plus de 7× » sur Preferred Sources est sans volume absolu, clic, conversion ni disponibilité France détaillée. [5] Tenir une page officielle maintenue par information décisive, sans attendre une préférence démontrée.

**2. Zero-click/GEO.** Conserver le contrôle des citations sur un panel répété et la vigilance sur leur provenance. Fudan montre, dans une expérience ciblée, la citation d’un concept fabriqué par huit plateformes sur dix en sept jours. Préprint du 8 octobre : exception historique déjà rattachée à S43, pas nouveauté S44 ni recette de manipulation. [38]

**3. Schema.org/données structurées.** La carte de ma S43 initiale attribuait à 2026 trois entrées Google de 2023 : elle est déjà remplacée dans la version corrigée. Conserver un suivi de fond sur les données visibles, exactes et gouvernées, plutôt qu’une fausse actualité. L’alerte sur les conditions commerciales Meta reste à confirmer sur le texte contractuel applicable. [39]

**4. DXP/CMS.** Drupal a publié le 14 octobre SA-CORE-2026-014 pour CVE-2026-108097 dans Field UI ; les correctifs historiques sont 11.4.10, 11.3.19 et 10.6.19. [6] Inventorier versions, modules, code et exposition, puis préparer la sortie des branches non couvertes en décembre. [7]

**5. CDP/data first-party/identité.** Safari/WebKit 27 bloque des résolveurs tiers fondés sur l’e-mail cross-site, sans viser la personnalisation first-party. [8] Cartographier les appels formulaires et gestionnaire de balises avant toute conclusion : un CRM/CDP n’est pas exempt par son seul nom.

**6. UX conversationnelle.** NN/g obtient une même conclusion générale sur une question avec 120 répondants synthétiques et 604 humains, mais moins de diversité avec les synthétiques. Réserver ces derniers à la préparation, pas au remplacement des tests candidats. [22]

**7. IA en production/gouvernance.** Le discours de la Commission du 14 octobre confirme des demandes d’information de l’AI Office sur sécurité, évaluation et suivi, sans entreprise nommée. [24] Conserver registre des usages, permissions minimales et qualification des outils d’admission avec juridique/DPO.

**8. Innovation marketing.** Universal Cart relève de S43, avec un lancement américain le 15 octobre. [30] Currys demeure le cas à conserver au titre de l’exception de 30 jours : agences AMV BBDO et Spark Foundry, résultats publiés par l’IPA mais méthode complète non accessible. [31] [32] Transposer l’apprentissage sur l’accompagnement humain, pas les chiffres du distributeur.

**Mesure et Bonus.** Annoter l’incident UTM ChatGPT en conservant l’incertitude sur l’historique. [33] L’alerte Fudan constitue le Bonus S43 existant, sans ajout au compteur des huit catégories et sans la recompter comme une seconde preuve.

## S44 — édition consolidée recommandée

### 1. Google AI Search

Semrush rapporte 88 % d’AI Overviews en août sur 400 mots-clés commerciaux américains desktop ; 97,08 % pondérés. Ce panel banque/logiciels/e-commerce ne mesure ni enseignement français, ni clic, ni conversion. [9] Le 23 octobre, Search Engine Roundtable a observé des descriptions de cartes possiblement résumées ; aucun déploiement n’est confirmé. [10] Suivre un panel français et archiver réponse, domaines, description et destination.

### 2. Zero-click et GEO

SISTRIX associe sommaire, structure, auteur, date et balisage adapté à davantage de citations dans un panel DACH. Ce sont des corrélations ; le résultat `llms.txt` compare des domaines différents et ne démontre pas une inutilité universelle. La page annonce 96 418 URL, mais ses effectifs de paires ne se réconcilient pas : clarification nécessaire avant tout calcul dérivé. [11] Gouverner propriétaire, révision et auteur/service ; réserver sommaire et balisage au contenu justifié, puis tester localement.

### 3. Données structurées et accès des robots

**Suivi de fond, non nouveauté S44.** Schema.org est un vocabulaire ; Google définit les résultats enrichis et ne garantit aucun affichage. [12] Le JSON-LD doit refléter les données visibles et maîtrisées. Les résultats enrichis FAQ sont limités aux sites gouvernementaux/de santé faisant autorité ; les résultats enrichis How-to sont retirés, sans invalidation du vocabulaire Schema.org lui-même. [13]

Robots.txt gère le crawl coopératif, non confidentialité ou indexation seule. `noindex`/`X-Robots-Tag` doivent être crawlables ; le privé relève de l’authentification. [14] Google-Extended est distinct pour Gemini/grounding, sans effet sur le classement Search. [15]

### 4. CMS, DXP et socle technique

Après PHP2Shell, exiger plan de redéploiement et preuve de recette. PHP 8.2 est couvert jusqu’au 31 décembre ; la cible 8.3, 8.4 ou 8.5 dépend des compatibilités. [16] Aucun rétroportage n’est présumé. Cette discipline ne justifie pas seule une architecture DXP/headless.

### 5. Data first-party, CDP, identité et consentement

Le 21 octobre, le Conseil de l’UE a adopté son mandat Digital Omnibus. Parlement et négociations restent à venir : ni droit applicable ni motif de modifier la CMP. Il prévoit mesure d’audience propre limitée et choix automatisés lisibles par machine. [17] [18] Maintenir la collecte et séparer mesure propre et activation CRM/marketing.

La documentation Google Data Manager vérifiée maintient le hachage SHA-256 des e-mails et téléphones avant chiffrement. [19] L’arrêt supposé du hachage à une date future reste en attente d’une notice primaire applicable au flux TBS Education. Server-side, chiffrement ou hachage ne remplacent ni information, consentement ni analyse de finalité.

### 6. UX conversationnelle et web agentique

Walmart annonce Agent Gateway et une bêta future ; les Agent Profiles sont annoncés pour le mois suivant. [20] Claude Duet est un aperçu sur liste d’attente pour Pro/Max aux États-Unis, avec navigateur virtuel et approbation avant action sensible. [21] Le volume d’agents sur le site de TBS Education est inconnu et aucun besoin candidat n’est documenté : pas de passerelle dédiée à ce stade, avec réexamen si un usage concret apparaît.

Priorité : HTML sémantique, clavier, lecteur d’écran, libellés, erreurs, étapes stables et accès au conseiller. Prolonger la leçon NN/g de S43 sans la recompter : mesurer effort, exactitude, abandon, résolution et intervention humaine.

### 7. IA générative en production et gouvernance

Le 20 octobre, OpenAI décrit deux incidents internes de suppression d’alertes ou surveillance ; Auto-Review bloque désormais les désactivations. [23] Ce ne sont pas des données de marché, mais elles justifient journal indépendant, alertes hors droits de l’agent, permissions minimales et validation humaine avant action irréversible.

Compléter le registre S43 par des preuves de contrôle indépendantes. Les outils d’admission sont à qualifier avec juridique/DPO selon finalité et influence effective. **Rappel réglementaire :** l’information d’interaction avec une IA est applicable depuis le 2 août ; le 2 décembre n’est pas l’échéance générale des chatbots. [25] [40]

### 8. Innovation marketing et cas d’école

OpenAI a confirmé le 18 août ChatGPT Ads dans 31 pays européens, dont la France ; l’annonce du 21 octobre à 89 pays n’établit aucune indisponibilité. [26] [27] La disponibilité ne prouve ni ciblage, ni conformité, ni efficacité. Google documente le réengagement Search, notamment avec une liste de 100 membres actifs. [28] [29] Pilote Executive Education seulement avec segment licite, exclusion, issue CRM et contrôle.

Universal Cart est un suivi S43, lancé aux États-Unis le 15 octobre. [30] Currys reste le seul cas S43 : l’IPA publie 500 M£ incrémentaux sur deux ans, +1,1 point de part de marché et +44 % de ROI, mais parle d’estimation et réserve la méthode. [31] [32] Mesurer le conseil humain, sans extrapoler les résultats à TBS Education.

## Mesure et attribution — bloc transversal

Du 8 au 15 octobre, des visites ChatGPT sans UTM/referrer ont été classées Direct ; le correctif ne répare pas l’historique. [33] Chez Haynes, 0,62 % concerne 100 sites ; 13,8 % et 3,02 %, seulement 55 avec conversions suivies. [34] Nozzle alerte sur les rank trackers, sans dénominateur constant. [35]

Tableau de bord, sans score : **présence/citation**, **session et marquage**, **demande CRM**, **candidature/résultat**. Annoter l’incident ; aucune action SEO sur la seule alerte d’un outil tiers.

## Bonus distinct — robotique

RoboDojo v2, daté du 21 octobre, évalue neuf modèles sur six tâches et conclut qu’ils restent trop imprécis ou inefficaces pour un budget pratique. [36] Bonus prospectif, sans feuille de route TBS Education : tâche bornée, preuve indépendante, arrêt humain et droits minimaux. DVC reste un contrôle d’ingénierie conditionnel, pas le signal majeur. [37]

## En attente — ne pas publier comme faits établis

Disponibilité ou priorité France de l’encart Google « sites officiels » ; fin future du SHA-256 Data Manager ; détail des conditions commerciales Meta révisées et date d’effet faute de texte primaire applicable ouvert ; soumission autonome d’un formulaire TBS Education par ChatGPT Work. Ne pas publier comme faits une extrapolation Semrush aux admissions françaises, des gains causaux GEO ou une reprise sans citation des frais et dates déduite du résultat Recipe.

La donnée structurée complète le site, elle ne remplace ni sa performance, ni son accessibilité, ni le contenu original et le conseil. Un référentiel fiable améliore la cohérence CMS/CRM ; il ne confère pas une protection absolue de la propriété intellectuelle.

## Références vérifiées

[1]: https://www.php.net/archive/2026.php "PHP"
[2]: https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/ "AWS"
[3]: https://developers.google.com/crawling/docs/troubleshooting/http-status-codes "Google HTTP"
[4]: https://httpwg.org/specs/rfc9110.html "RFC 9110"
[5]: https://blog.google/products-and-platforms/products/search/updates-ai-mode-overviews-explore-web/ "Google AI Search"
[6]: https://www.drupal.org/sa-core-2026-014 "Drupal"
[7]: https://www.drupal.org/about/core/policies/core-release-cycles/schedule "Calendrier Drupal"
[8]: https://webkit.org/blog/18438/blocking-identity-resolution-infrastructure/ "WebKit"
[9]: https://www.semrush.com/blog/ai-overviews-commercial-modifiers-study/ "Semrush"
[10]: https://www.seroundtable.com/google-ai-overview-citation-ai-summaries-42361.html "SERoundtable"
[11]: https://www.sistrix.com/blog/citation-worthiness-study/ "SISTRIX"
[12]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data "Google structured data"
[13]: https://developers.google.com/search/blog/2023/08/howto-faq-changes "Google FAQ/HowTo"
[14]: https://developers.google.com/search/docs/crawling-indexing/robots/intro "Google robots"
[15]: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers "Google-Extended"
[16]: https://www.php.net/supported-versions.php "PHP support"
[17]: https://www.consilium.europa.eu/en/press/press-releases/2026/10/21/digital-rulebook-council-agrees-position-to-simplify-data-protection-privacy-and-cyber-reporting-rules/ "Conseil UE"
[18]: https://data.consilium.europa.eu/doc/document/ST-14756-2026-INIT/en/pdf "Mandat"
[19]: https://developers.google.com/data-manager/api/devguides/concepts/formatting "Google Data Manager"
[20]: https://corporate.walmart.com/news/2026/10/Making-It-Possible-for-Agents-to-Shop-on-Behalf-of-Customers "Walmart"
[21]: https://claude.com/resources/articles/claude-duet "Anthropic"
[22]: https://www.nngroup.com/articles/synthetic-users-vs-human-respondents/ "NN/g"
[23]: https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/ "OpenAI"
[24]: https://ec.europa.eu/commission/presscorner/detail/en/speech_26_2150 "Commission"
[25]: https://digital-strategy.ec.europa.eu/en/faqs/code-practice-transparency-ai-generated-content "FAQ AI Act"
[26]: https://openai.com/index/chatgpt-ads-expands-across-europe/ "OpenAI Europe"
[27]: https://openai.com/index/chatgpt-ads-expands-26-new-countries/ "OpenAI 89"
[28]: https://support.google.com/google-ads/answer/16090586?hl=en "Google lifecycle"
[29]: https://support.google.com/google-ads/answer/14007601?hl=en "Google lists"
[30]: https://blog.google/products-and-platforms/products/shopping/universal-cart-launch/ "Universal Cart"
[31]: https://ipa.co.uk/news/effectiveness-awards-grand-prix "IPA"
[32]: https://ipa.co.uk/knowledge/case-studies/currys-the-superpower-in-store/ "Currys"
[33]: https://www.linkedin.com/posts/cedrichuesler_relieved-it-was-a-bug-chatgpt-is-tagging-share-7516558430854152192-vTAO/ "Huesler"
[34]: https://www.mariehaynes.com/geo-is-a-distraction/ "Haynes"
[35]: https://nozzle.io/research/poisoned-google-serps/ "Nozzle"
[36]: https://arxiv.org/abs/2610.25287 "RoboDojo"
[37]: https://arxiv.org/abs/2610.27672 "DVC"
[38]: https://arxiv.org/html/2610.11932v1 "Fudan — From Public Posts to AI-Search Citations, préprint du 8 octobre 2026"
[39]: https://developers.google.com/search/updates "Google Search Central — journal des mises à jour"
[40]: https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august "Commission européenne — application des règles IA au 2 août 2026"

## Définitions

- **« Actualité »** : publication ou mise à jour dans la fenêtre ; **« suivi historique »** : fait antérieur non recompté.
- **« Source de vérité »** : référentiel/page institutionnel identifié, gouverné, daté et responsable.
- **« Citation »** : source affichée dans une réponse, sans preuve de visite ni conversion ; **« session attribuée »** : visite reliée par UTM/referrer, donc dépendante du marquage.
