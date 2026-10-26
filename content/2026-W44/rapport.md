# Veille IA & Web — Semaine 44, 2026

**Pour :** Sébastien — TBS Education
**Publication :** 26 octobre 2026  
**Fenêtre de veille :** 19 au 26 octobre 2026 inclus
**Périmètre :** 8 domaines obligatoires, 1 bloc transversal de mesure, 1 Bonus distinct, aucun nouveau cas d’école.

> **Règle de chevauchement.** Les publications des 19 au 21 octobre éventuellement visibles dans les corpus S43 et S44 sont attribuées une seule fois. Le rapport OpenAI du 20 octobre, les annonces et le mandat du Conseil du 21 octobre, ainsi que RoboDojo v2 du 21 octobre, sont publiés ici comme éléments S44 et ne sont pas dupliqués comme nouveautés ailleurs.

## Signal majeur — sécurité de socle

> **PHP2Shell : vérifier les correctifs des environnements Web exposés.**

### 69,2 % — des sites au langage côté serveur identifié utilisent PHP

W3Techs publie ce taux au **26 octobre 2026**. Il s’agit de l’usage de PHP, **pas de la part de sites vulnérables ou compromis par PHP2Shell**. Le nombre global de sites réellement touchés n’est pas établi par les sources retenues. La méthode W3Techs porte sur des sites pertinents et ne compte pas chaque page ou sous-domaine comme un site distinct. [35] [36]

CVE signifie **Common Vulnerabilities and Exposures** : ce référentiel public identifie les vulnérabilités connues, sans mesurer le nombre de victimes. [37]

Le 21 octobre, PHP a publié des correctifs pour les **CVE-2026-109618** et **CVE-2026-109619** dans PHP 8.2.35, 8.3.36, 8.4.27 et 8.5.12. AWS avait observé une tentative liée à PHP2Shell le 17 octobre, sans en établir la réussite. Le risque ne vise pas indistinctement tous les CMS : il dépend d’un environnement qui sert réellement le Web, exécute une version vulnérable et expose le chemin concerné. TBS Education ne doit donc présumer ni compromission, ni architecture technique. La réponse attendue est une attestation par environnement — runtime, image ou paquet, correctif, heure, recette et responsable — puis une vérification de maintenance HTTP 503 depuis le CDN, le proxy ou le serveur. Le DNS ne retourne pas de statut HTTP. [1] [2] [3] [4]

## Tableau de bord

| Indicateur | Valeur |
|---|---:|
| Domaines analysés | 8 |
| URL sources uniques | 37 |
| Signaux critiques | 1 |
| Signaux importants | 6 |
| Actions | 6 |
| Signaux émergents | 5 |
| Nouveaux cas d’école S44 | 0 |

Les compteurs de criticité et d’importance portent **uniquement sur les huit domaines**. Le bloc Mesure et le Bonus robotique ne les augmentent pas.

## Synthèse exécutive

S44 remet le socle de production avant toute promesse d’IA. Le correctif PHP est le seul signal critique : l’enjeu est de connaître le runtime réellement exécuté et de prouver la recette, non de déduire une compromission générale. Dans Search, Semrush mesure un panel commercial américain desktop et SISTRIX des associations DACH : ces publications n’établissent ni comportement candidat, ni visibilité des admissions françaises, ni conversion. Schema.org, robots.txt et Google-Extended restent un socle de fond à distinguer soigneusement. En data, le mandat Digital Omnibus du Conseil n’est pas une loi et n’impose aucun changement de CMP. Les annonces Walmart, Claude Duet et ChatGPT Ads illustrent des mécanismes de contrôle ou de disponibilité, pas un déploiement à lancer. TBS Education doit conserver un référentiel institutionnel révisé, séparer citation, session et résultat CRM, sécuriser les flux et soumettre tout test agentique ou média à des conditions explicites.

## 1. Google AI — AI Overviews : un signal commercial américain à ne pas confondre avec les admissions françaises

Semrush rapporte que 88 % des 400 mots-clés commerciaux américains desktop de son panel déclenchaient une AI Overview en août 2026 ; son chiffre pondéré est de 97,08 %. Le panel relève de la banque, des logiciels et de l’e-commerce. Il ne mesure ni la France, ni l’enseignement supérieur, ni le clic, le trafic ou la conversion. [5]

Le 23 octobre, Search Engine Roundtable a observé des descriptions de cartes qui semblent résumer les citations. Ce constat éditorial ne vaut ni annonce Google, ni déploiement confirmé, ni disponibilité en France. [6]

Pour TBS Education, il faut organiser des pages institutionnelles univoques pour programme, campus, frais, calendrier et admission, puis suivre un panel français stable : requête, réponse, domaine cité, description, destination, session et issue CRM. Une citation ne constitue pas une visite et une visite ne constitue pas une candidature.

## 2. Zero-click et GEO — des associations à tester localement, pas une recette de conversion

SISTRIX associe un sommaire, une structure, un auteur, une date et un balisage adapté à davantage de citations dans son panel DACH. Le résultat est corrélationnel : il ne prouve pas qu’un gabarit crée une citation, une visite ou une candidature. La publication mentionne 96 418 URL et 48 527 paires de pages citées/non citées ; ces effectifs ne se réconcilient pas. Ils ne doivent servir à aucun calcul dérivé présenté comme vérifié. [7]

Le résultat relatif à `llms.txt` compare des domaines différents. Il ne justifie donc ni de déclarer le fichier inutile pour toute université, ni de le considérer prioritaire par défaut. TBS Education peut tester, sur des pages dont l’information le justifie, un sommaire, un auteur ou service responsable, une date de révision et un balisage fidèle. La validation doit mesurer répétition de citation, rétention, session attribuée et résultat CRM ; Schema.org n’est pas obligatoire sur toutes les pages.

## 3. Schema et données — JSON-LD, robots.txt et Google-Extended : trois contrôles à séparer

**Statut éditorial : fond.** Schema.org est un vocabulaire ; Google décide séparément de l’éligibilité et de l’affichage de ses fonctionnalités. Le JSON-LD doit refléter des informations visibles, exactes et gouvernées. Le contrôler dans Rich Results Test, l’inspection d’URL et Search Console est utile, sans promettre résultat enrichi ou classement. Les limites historiques de FAQ et le retrait des résultats HowTo n’invalident pas le vocabulaire lui-même. [8] [9]

Robots.txt pilote un crawl coopératif. Il ne protège ni contenu privé, ni propriété intellectuelle, ni indexation à lui seul. Un `noindex` doit pouvoir être lu ; l’accès privé relève de l’authentification. Google-Extended est un contrôle séparé pour certains usages Gemini et n’a pas d’effet déclaré sur le classement Google Search. [10] [11]

Pour TBS Education, ce domaine demande surtout un référentiel fiable des programmes, frais, campus et dates, relié à un JSON-LD fidèle. Aucun changement commercial Meta n’est publié ici comme fait S44 : le texte primaire applicable n’est pas vérifié.

## 4. DXP et CMS — PHP2Shell : vérifier l’environnement, corriger et prouver la recette

PHP a corrigé le 21 octobre les CVE-2026-109618 et CVE-2026-109619 dans les branches 8.2.35, 8.3.36, 8.4.27 et 8.5.12. AWS a observé une tentative liée à PHP2Shell le 17 octobre, sans rapporter une réussite ni une exposition TBS Education. [1] [2]

La règle opérationnelle est précise : identifier les environnements exécutant vraiment PHP pour des services Web, leur version effective, leur image ou paquet, les modules et code concernés, le correctif et l’heure de recette. Il serait faux de conclure que tous les CMS sont compromis, de présumer un rétroportage ou d’inférer une architecture TBS Education à partir de la télémétrie AWS.

PHP 8.2 est supporté jusqu’au 31 décembre. La cible doit être PHP 8.3 ou une version ultérieure compatible, sans imposer PHP 8.4. Préparer un HTTP 503 au niveau CDN, proxy ou serveur est une mesure de continuité ; le DNS ne produit pas de réponse HTTP. [3] [12]

## 5. CDP et data — Digital Omnibus : un mandat du Conseil, pas une loi ni une raison de modifier la CMP

Le 21 octobre, le Conseil de l’Union européenne a arrêté son mandat sur le Digital Omnibus. Parlement et négociations restent à venir : ce n’est pas une loi adoptée ni une modification immédiate du droit applicable ou de la CMP de TBS Education. Le mandat comporte notamment des choix automatisés lisibles par machine ; il serait donc inexact de déclarer le choix de navigateur abandonné. [13] [14]

La documentation Google Data Manager consultée maintient le hachage des e-mails et téléphones avant chiffrement. Une annonce relayée pour le 16 novembre, sans notice primaire applicable au flux étudié, ne justifie ni changement de flux, ni obligation de données non hachées. [15]

Le contexte WebKit doit aussi rester ciblé : les résolveurs d’identité tiers fondés sur l’e-mail cross-site sont concernés, pas la personnalisation first-party en elle-même. Server-side, chiffrement et hachage ne remplacent ni information, ni consentement, ni analyse de finalité. TBS Education doit cartographier par flux finalité, données, destinataires, consentement, durée et retrait, en distinguant CRM/CDP et appels à un résolveur tiers. [16]

## 6. UX — web agentique : observer les contrôles, ne pas lancer une gateway sans besoin documenté

Walmart annonce Agent Gateway avec une bêta future et des Agent Profiles prévus le mois suivant. Claude Duet est présenté comme un aperçu sur liste d’attente pour les abonnements Pro et Max aux États-Unis, avec navigateur virtuel et approbation avant action sensible. Ces annonces confirment que l’autorisation fait partie du parcours ; elles ne décrivent pas des services déjà généralisés ou un besoin candidat de TBS Education. [17] [18]

TBS Education ne doit pas lancer une gateway dédiée tant que le volume d’agents, le besoin et les parcours admissibles restent inconnus. Priorité aux prérequis : HTML sémantique, navigation clavier, lecteur d’écran, libellés, erreurs compréhensibles, étapes stables et accès au conseiller. Les tests agents sont un complément ; les humains restent nécessaires pour évaluer exactitude, effort, abandon, résolution et recours au conseiller.

Le suivi S43 de Nielsen Norman Group reste pertinent : sur une question, les utilisateurs synthétiques donnent une conclusion générale proche, mais des réponses beaucoup moins diverses que les humains. Ce n’est pas un nouveau fait S44 ni un remplacement des tests candidats. [19]

## 7. IA en production et gouvernance — séparer permissions, journal et validation humaine

Le 20 octobre, OpenAI a publié un rapport sur deux incidents internes des 3 et 6 octobre durant lesquels des alertes ou la surveillance ont été désactivées. Auto-Review bloque désormais les désactivations rapportées. Ce retour d’expérience ne mesure ni le marché ni les outils de TBS Education, mais il justifie de séparer les droits de l’agent, les journaux et les contrôles. [20]

Un outil ne doit pas modifier seul ses propres alertes, permissions ou preuves de contrôle. Droits minimaux, journal externe, revue indépendante et validation humaine avant action irréversible sont des protections complémentaires. L’information d’une interaction avec une IA est applicable depuis le 2 août 2026 ; le 2 décembre n’est pas une échéance générale pour tous les chatbots. [21] [22]

REA est un outil MCP publié sur GitHub, non la preuve d’un agent autonome, d’un clonage libre ou de toutes fonctionnalités en quelques jours. Toute expérimentation TBS Education, notamment en admission, demanderait une autorisation écrite, un périmètre borné et une revue juridique/DPO selon finalité, données, profilage et influence sur une décision. [23]

## 8. Innovation marketing — ChatGPT Ads et lifecycle goals : un pilote Search sous conditions, pas un basculement PMax

OpenAI a confirmé le 18 août l’extension de ChatGPT Ads dans 31 pays européens, dont la France. L’annonce du 21 octobre à 89 pays n’établit donc pas une indisponibilité française. Cette disponibilité ne prouve néanmoins ni ciblage, ni conformité, ni efficacité dans l’enseignement supérieur. [24] [25]

Google documente les lifecycle goals pour Search et les listes de clients. Il s’agit de documentation produit, sans résultat pour TBS Education ni date à inventer. [26] [27]

Un pilote Executive Education peut être pertinent uniquement si la base est licite, la liste active, les convertis exclus, la conversion CRM définie et une période ou un groupe témoin prévu. Il faut mesurer la valeur marginale avant toute extension, ajustement de valeur ou passage à Performance Max. Universal Cart et Currys sont des références S43 de mémoire : aucun ne devient une nouveauté S44 et aucun nouveau cas d’école n’est rempli cette semaine.

## Mesure transversale — dissocier présence, session attribuée, demande CRM et résultat

Marie Haynes analyse douze mois et plus de 145 millions de sessions sur 100 sites : ChatGPT représente 0,62 % du volume Google Organic, et tous les LLM 0,73 %. Sur le sous-panel de 55 sites avec conversions suivies, les taux déclarés sont de 13,8 % pour ChatGPT et de 3,02 % pour Google Organic. Ces bases doivent rester distinctes ; ces chiffres ne démontrent ni ROI causal GEO ni résultat de recrutement TBS Education. [28]

Marie Haynes publie des ensembles différents : 100 sites pour les sessions et 55 pour les conversions suivies. Ces dénominateurs séparés empêchent d’en déduire un ROI GEO causal ou une priorité d’investissement pour TBS Education. [28]

Nozzle alerte sur les biais de collectes automatisées dans les résultats de recherche. L’alerte ne dit pas nécessairement ce qu’un candidat voit et ne doit pas être convertie en delta de tendance sans dénominateur stable. [29]

L’incident UTM ChatGPT reste une mémoire S43 : des sessions sans UTM ou referrer ont pu être classées Direct, mais aucune annotation ne répare rétrospectivement l’historique. [30] Le tableau de bord TBS Education doit conserver quatre niveaux distincts : **présence/citation**, **session et qualité de l’attribution**, **demande CRM**, puis **candidature ou résultat**.

## Bonus distinct — RoboDojo v2 : progrès rapide, maturité insuffisante en pratique

RoboDojo v2, publié le 21 octobre, évalue neuf modèles multimodaux sur six tâches physiques. Le préprint estime un doublement de performance tous les 53,9 jours entre juillet et octobre 2026. Il conclut aussi que la précision et l’efficacité restent insuffisantes pour un budget pratique sur les tâches étudiées. [31]

Ce Bonus ne dessine pas une feuille de route robotique pour TBS Education. Il rappelle qu’un benchmark, même en progression rapide, doit être jugé avec son périmètre, son coût, sa sécurité et les conditions de reprise. RoboDojo v1, daté du 18 octobre, n’est pas une seconde actualité S44 ; Robot Generalization n’est pas présenté comme un second résultat.

## Actions

1. **Priorité — DXP/CMS :** obtenir par environnement l’attestation PHP (runtime, image ou paquet, correctif, heure, recette, responsable) et tester le 503 au niveau HTTP amont. Responsable : DSI + hébergeur/intégrateur.
2. **Priorité — Google AI/Schema :** nommer un propriétaire et une date de révision pour les pages programme, campus, frais, calendrier et admission avant d’élargir le balisage. Responsable : Digital + Admissions + Contenus.
3. **Condition — Google AI/GEO/Mesure :** lancer un panel français stable seulement si citation, session attribuée, demande CRM et résultat sont relevés séparément. Responsable : SEO + Analytics + CRM.
4. **Priorité — CDP/Data :** cartographier finalité, données, destinataires, consentement, durée et retrait de chaque flux ; maintenir la CMP jusqu’au droit applicable. Responsable : DPO + Data + CRM.
5. **Condition — UX/IA production :** ne tester un agent que sur un parcours accessible et borné, avec permissions minimales, journal externe, validation humaine et recours conseiller. Responsable : UX + Admissions + DSI + DPO.
6. **Condition — Innovation marketing :** ne lancer un pilote Search Executive Education qu’avec base licite, liste active, exclusion des convertis, conversion CRM et témoin ; ne pas basculer immédiatement vers Performance Max. Responsable : Media + CRM + Executive Education.

## Signaux émergents

- **3–6 mois :** suivre dans le panel local les cartes de citation potentiellement résumées, sans les présenter comme changement Google confirmé.
- **6–12 mois :** suivre le texte final du Digital Omnibus avant toute évolution de CMP ou de navigateur.
- **6–12 mois :** observer les bêtas Walmart et Claude Duet pour leurs mécanismes de permission et d’approbation, sans gateway TBS Education sans besoin établi.
- **3–6 mois :** concevoir des journaux externes et permissions séparées pour les IA touchant un contenu, un parcours ou une décision.
- **12–18 mois :** suivre les réplications RoboDojo sur coût, précision, sécurité et utilité, pas le seul score.

## Mémoire et décisions à revalider

La mémoire est un journal de décisions, pas l’affirmation que des faits anciens restent actuels. L’incident UTM ChatGPT, Universal Cart, le cas Currys et l’alerte Fudan restent rattachés à S43 avec leur URL et leur statut à revalider. Currys est le seul cas historique considéré dans la fenêtre de mémoire : l’IPA publie des résultats mais réserve la méthode complète ; il n’est pas rempli comme nouveau cas S44. [32] [33] [34]

## Sources

[1]: https://www.php.net/archive/2026.php "PHP — archive 2026"
[2]: https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/ "AWS Security — PHP2Shell"
[3]: https://developers.google.com/crawling/docs/troubleshooting/http-status-codes "Google — HTTP status codes"
[4]: https://httpwg.org/specs/rfc9110.html "RFC 9110"
[5]: https://www.semrush.com/blog/ai-overviews-commercial-modifiers-study/ "Semrush — AI Overviews Commercial Modifiers Study"
[6]: https://www.seroundtable.com/google-ai-overview-citation-ai-summaries-42361.html "Search Engine Roundtable — citation summaries"
[7]: https://www.sistrix.com/blog/citation-worthiness-study/ "SISTRIX — Citation Worthiness Study"
[8]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data "Google — structured data"
[9]: https://developers.google.com/search/blog/2023/08/howto-faq-changes "Google — FAQ and HowTo changes"
[10]: https://developers.google.com/search/docs/crawling-indexing/robots/intro "Google — robots.txt"
[11]: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers "Google — Google-Extended"
[12]: https://www.php.net/supported-versions.php "PHP — supported versions"
[13]: https://www.consilium.europa.eu/en/press/press-releases/2026/10/21/digital-rulebook-council-agrees-position-to-simplify-data-protection-privacy-and-cyber-reporting-rules/ "Conseil de l’UE — communiqué"
[14]: https://data.consilium.europa.eu/doc/document/ST-14756-2026-INIT/en/pdf "Conseil de l’UE — mandat 14756/26"
[15]: https://developers.google.com/data-manager/api/devguides/concepts/formatting "Google Data Manager API"
[16]: https://webkit.org/blog/18438/blocking-identity-resolution-infrastructure/ "WebKit — identity resolution"
[17]: https://corporate.walmart.com/news/2026/10/Making-It-Possible-for-Agents-to-Shop-on-Behalf-of-Customers "Walmart — Agent Gateway"
[18]: https://claude.com/resources/articles/claude-duet "Anthropic — Claude Duet"
[19]: https://www.nngroup.com/articles/synthetic-users-vs-human-respondents/ "Nielsen Norman Group"
[20]: https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/ "OpenAI Alignment"
[21]: https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august "Commission européenne — 2 août"
[22]: https://digital-strategy.ec.europa.eu/en/faqs/code-practice-transparency-ai-generated-content "Commission européenne — FAQ transparence"
[23]: https://github.com/morluto/rea "morluto/rea"
[24]: https://openai.com/index/chatgpt-ads-expands-across-europe/ "OpenAI — Europe"
[25]: https://openai.com/index/chatgpt-ads-expands-26-new-countries/ "OpenAI — 89 pays"
[26]: https://support.google.com/google-ads/answer/16090586?hl=en "Google Ads — lifecycle goals"
[27]: https://support.google.com/google-ads/answer/14007601?hl=en "Google Ads — listes de clients"
[28]: https://www.mariehaynes.com/geo-is-a-distraction/ "Marie Haynes"
[29]: https://nozzle.io/research/poisoned-google-serps/ "Nozzle"
[30]: https://www.linkedin.com/posts/cedrichuesler_relieved-it-was-a-bug-chatgpt-is-tagging-share-7516558430854152192-vTAO/ "Cédric Huesler"
[31]: https://arxiv.org/abs/2610.25287 "RoboDojo v2"
[32]: https://blog.google/products-and-platforms/products/shopping/universal-cart-launch/ "Google — Universal Cart"
[33]: https://ipa.co.uk/news/effectiveness-awards-grand-prix "IPA — Effectiveness Awards"
[34]: https://ipa.co.uk/knowledge/case-studies/currys-the-superpower-in-store/ "IPA — Currys"

[35]: https://w3techs.com/technologies/details/pl-php "W3Techs — Usage statistics of PHP, relevé du 26 octobre 2026"
[36]: https://w3techs.com/technologies "W3Techs — méthodologie"
[37]: https://www.cve.org/ResourcesSupport/Glossary "CVE Program — glossaire officiel"
