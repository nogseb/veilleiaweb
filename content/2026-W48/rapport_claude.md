# Veille stratégique IA & Web — Semaine 48 — 2026

24 novembre 2026 · @Sébastien Noguès

**Semaine 48 — 2026** · publiée le 24 novembre 2026 · fenêtre du 17 au 24 novembre, rattrapage du 16 · **9 domaines sur 9** et bonus · **25 sources** · édition consolidée (recherche Claude et édition ChatGPT du dépôt)

## Signal majeur de la semaine

> ### J+1
>
> **entre le correctif Drupal et la première exploitation signalée**
>
> Drupal a publié le 18 novembre le correctif d'une faille de son installeur (SA-CORE-2026-017) ; le 21, il a signalé des attaques sur des sites en production depuis le 19 novembre à 19 h UTC et classé la faille « hautement critique ». WordPress (7.1.5) et PHP ont corrigé chacun 18 failles les mêmes jours. Pour un établissement qui exploite des sites WordPress et prépare une refonte sous Drupal, la question n'est plus « sommes-nous concernés ? » mais « en combien d'heures les correctifs sont-ils appliqués ? » (domaine 4).

## Tableau de bord

| Domaines analysés | Sources citées | Critiques | Importants | À surveiller | Actions (dont immédiates) | Signaux émergents | Cas d'école | Bonus |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9/9 | 25 | 1 | 4 | 4 | 8 (6) | 6 | 0 | 1 |

## Synthèse exécutive

**a) Web, data et IA.** Le socle passe en premier : Drupal, WordPress et PHP ont corrigé des failles critiques les 18 et 19 novembre, et celle de Drupal est exploitée depuis le 19. Google a clôturé le 24 novembre sa mise à jour principale de novembre et en annonce déjà une pour décembre, pendant qu'AI Mode personnalise davantage ses réponses et que les AI Overviews placent leurs liens plus bas. Les sources citées par l'IA divergent selon le moteur (YouTube et TikTok pour Google, Reddit pour ChatGPT), et Google confirme que l'IA remplace le contenu générique, pas l'expertise ni l'expérience. La mesure gagne en finesse côté recherche (marque et hors marque dans l'API Search Console, objectif « rendez-vous » dans Google Ads) quand elle en perd côté courriel, dont la CNIL fait le bilan jusqu'au 3 décembre.

**b) Innovation marketing.** Les agents passent du navigateur au poste de travail (Gemini sur Mac) et le trafic venu de l'IA se juge désormais à sa valeur par visite plutôt qu'à sa croissance. La résolution mondiale sur l'IA à l'école et Claude Ship posent la même question de gouvernance : qui, humain ou agent, valide.

## 1. Moteurs de réponse IA

**Badge : IMPORTANT · SUIVI** (suite de la mise à jour principale de novembre, traitée en semaine 47)

### La mise à jour de novembre est terminée, celle de décembre déjà annoncée ; AI Mode personnalise davantage ses réponses tout en offrant un mode neutre

*Google a confirmé le 24 novembre la fin de la mise à jour principale et préannoncé une nouvelle mise à jour pour décembre ; il a lancé le 17 novembre des fils temporaires dans AI Mode et étendu le 23 novembre la personnalisation à de nouvelles applications.*

**Mise à jour principale (suivi).** Lancée le 10 novembre, elle est **terminée depuis le 24 novembre à 9 h 03, heure de New York**, après 14 jours de déploiement. Le même jour, Google a inscrit au Search Status Dashboard une **nouvelle mise à jour principale prévue en décembre 2026**, sans date : elle doit mieux classer les contenus pour les questions longues et complexes et améliorer les résultats personnalisés, dans toutes les langues. Un porte-parole précise qu'elle « n'est pas imminente » et que son lancement sera annoncé le jour même. Selon Search Engine Roundtable, ce préavis inhabituel répond aux exigences de l'autorité britannique de la concurrence (CMA). Google recommande d'attendre au moins une semaine après la fin d'une mise à jour avant de comparer les périodes dans Search Console.

**Personnalisation.** Depuis le 23 novembre, Personal Intelligence peut se connecter à **Google Wallet** dans AI Mode (lecture seule, sans paiement) ; Google Drive et le partage de contexte avec l'application Gemini sont annoncés « dans les prochaines semaines ». Google annonce aussi des réponses plus personnalisées dans **AI Overviews et AI Mode selon les recherches récentes**, et une icône pour voir le contexte utilisé. Les connexions sont facultatives ; le billet ne précise ni les pays ni les langues.

**Fils temporaires.** Depuis le 17 novembre, une icône d'AI Mode ouvre une session **détachée du compte** : la réponse ne tient pas compte de l'historique, n'est pas enregistrée et ne nourrit pas la personnalisation. Le déploiement est mondial, sur ordinateur et navigateur mobile, dans toutes les langues d'AI Mode.

**Impact pour une école.** Deux candidats qui posent la même question sur un programme peuvent recevoir des réponses différentes selon leurs recherches passées. Un relevé de visibilité fait depuis un compte connecté reflète le profil de la personne qui teste, pas la réponse moyenne. Deux mises à jour principales à quelques semaines d'intervalle tombent en pleine période de candidatures : une baisse sur les pages programmes doit d'abord être rapprochée de ces dates avant toute réécriture.

**Recommandation.** *Règle de conception* : réaliser le panel mensuel de requêtes de comparaison dans un fil temporaire, en notant le marché et la langue, pour obtenir une réponse sans personnalisation. *Immédiat* : comparer les périodes Search Console avant et après la mise à jour à partir du 1er décembre seulement. *À surveiller* : annoter les tableaux de bord SEO au 24 novembre (fin de la mise à jour de novembre), puis à la date de lancement de celle de décembre.

Sources :

- [Google Search Status Dashboard — Ranking, historique](https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history) — Google, consulté le 24 novembre 2026
- [Google's core update shifts rankings for up to 2 weeks before Black Friday](https://ppc.land/googles-core-update-shifts-rankings-for-up-to-2-weeks-before-black-friday/) — PPC Land, 10 novembre 2026
- [Tailored Google Search with Personal Intelligence apps](https://blog.google/products-and-platforms/products/search/google-search-personal-intelligence-apps/) — Google, 23 novembre 2026
- [Temporary threads are now available in AI Mode in Search](https://blog.google/products-and-platforms/products/search/temporary-threads-ai-mode/) — Google, 17 novembre 2026
- [Google November 2026 Core Update Has Completed Rolling Out](https://www.seroundtable.com/google-november-2026-core-update-done-42571.html) — Search Engine Roundtable, 24 novembre 2026
- [Google December 2026 Core Update](https://www.seroundtable.com/google-december-2026-core-update-42615.html) — Search Engine Roundtable, 24 novembre 2026

## 2. Zero-click et GEO

**Badge : IMPORTANT**

### Google cite de plus en plus YouTube, Reddit et TikTok, et place ses liens plus bas dans AI Overviews

*Semrush a publié le 23 novembre une étude sur 18 plateformes sociales et communautaires ; un relevé Peec AI diffusé le 24 novembre mesure le recul des liens dans les AI Overviews ; Elizabeth Reid, vice-présidente de Google Search, a précisé le 23 novembre quels contenus l'IA remplace.*

**Sources sociales.** Sur les données américaines de Semrush (janvier à août 2026, 18 domaines dont YouTube, Reddit, TikTok, LinkedIn, Instagram et Substack), les citations de ces plateformes dans AI Overviews, AI Mode et Gemini passent de 75,8 à 115,5 millions, soit **+52 %** ; dans ChatGPT, elles tombent de 18 à 10,1 millions, soit **-44 %**. **YouTube** pèse 45 % de ces citations dans AI Overviews ; **Reddit** reste premier dans ChatGPT (environ 52 %) malgré une baisse de plus de 20 % ; **TikTok** progresse partout (+224 % dans AI Overviews). Limites signalées par Semrush : les parts sont calculées entre ces 18 domaines seulement, au niveau du domaine, et ne disent rien du taux de clic.

**Position des liens.** Selon David Konitzny (Peec AI), cité par Search Engine Roundtable, la part des AI Overviews qui placent leur premier lien dans le premier tiers de la réponse passe de **76,8 % le 21 septembre à 51,8 % le 20 novembre**. L'échantillon n'est pas précisé et Google n'a pas réagi.

**Contenus remplaçables.** Dans le podcast *FOMO Sapiens*, Elizabeth Reid distingue les contenus « commodity », que l'IA remplace (exemple : un site qui donne les fuseaux horaires), des contenus d'expertise, d'expérience personnelle et de recherche approfondie, pour lesquels les internautes continuent de cliquer : « people don't want purely AI, they want AI and the web ».

**Impact pour une école.** Les informations factuelles d'une page programme (durée, frais, dates de concours) sont reprises directement dans la réponse ; ce qui reste cité et cliqué, ce sont les témoignages, les vidéos d'étudiants et les avis tiers. Une stratégie GEO pensée pour ChatGPT (Reddit) ne vaut pas pour Google (YouTube).

**Recommandation.** *Règle de conception* : pour chaque programme phare, publier sur YouTube une vidéo courte qui répond à une question précise de candidat (admission parallèle, alternance, international), avec sa transcription sur la page programme. *Indicatif* : ajouter au panel GEO le relevé des domaines cités par moteur, pour distinguer ce que reprennent Google et ChatGPT. *À surveiller* : les données Semrush portent sur les États-Unis ; aucune mesure française comparable n'est publiée.

Sources :

- [AI citations to social media & UGC grew 52% on Google's AI platforms, fell 44% on ChatGPT](https://www.semrush.com/blog/ai-citations-social-media-ugc/) — Semrush, 23 novembre 2026
- [Google Burying Links Deeper Down In AI Overviews](https://www.seroundtable.com/google-pushing-links-in-ai-overviews-down-42600.html) — Search Engine Roundtable, 24 novembre 2026
- [People Don't Just Want AI, They Want AI & The Web](https://www.seroundtable.com/google-people-want-ai-and-web-42602.html) — Search Engine Roundtable, 24 novembre 2026

## 3. Données structurées et accès des robots

**Badge : À SURVEILLER**

### Google documente douze robots déjà actifs, dont Google-Edu et l'importateur d'agendas

*Google a ajouté le 23 novembre à sa documentation des robots six crawlers « cas particuliers » et six fetchers déclenchés par un utilisateur, jusque-là non documentés.*

**Crawlers « cas particuliers ».** Google-analytics-postbacks, **Google-Calendar-Importer**, GoogleDocs, **Google-Edu**, pageburst et PlayStore-Google.

**Fetchers déclenchés par un utilisateur.** AppEngine-Google, Google-Apps-Script, Google-Cloud-Tasks, GoogleImageProxy, Google Web Preview et **Chrome-Lighthouse**.

**Ce que dit Google.** « These crawlers and fetchers are not new » : il s'agit de clients existants à fort volume, les plus susceptibles d'apparaître dans les journaux de serveur et sur lesquels l'équipe reçoit des questions. Search Engine Roundtable ne détaille ni leurs usages ni leur comportement face à robots.txt ; la page de documentation de Google n'a pas pu être ouverte ici.

**Impact pour une école.** Une règle de pare-feu applicatif ou de gestion des robots qui bloque les agents Google « inconnus » peut casser des usages concrets : l'import d'un agenda de journées portes ouvertes au format .ics dans Google Agenda, l'aperçu d'un lien partagé dans Google Docs, ou un audit Lighthouse. Ces noms vont aussi apparaître dans l'analyse des journaux et ne doivent pas être comptés comme du trafic de robots d'IA.

**Recommandation.** *Immédiat* : transmettre la liste à l'hébergeur ou au prestataire de pare-feu pour qu'elle soit classée (autoriser, limiter ou bloquer), en vérifiant dans la documentation de Google lesquels respectent robots.txt. *Indicatif* : si l'école publie des agendas .ics, rechercher Google-Calendar-Importer dans les journaux pour vérifier que les imports aboutissent.

Sources :

- [Google Documents Previously Undocumented Crawlers & Fetchers](https://www.seroundtable.com/googlebots-additions-42604.html) — Search Engine Roundtable, 23 novembre 2026

## 4. CMS, DXP, headless et socle technique

**Badge : CRITIQUE · SUIVI** (suite du support Drupal réduit et de la faille WordPress exploitée, traités en semaine 47)

### Faille de l'installeur Drupal exploitée dès le lendemain du correctif, 18 failles corrigées dans WordPress et dans PHP

*Drupal et WordPress ont publié des correctifs le 18 novembre, PHP le 19 ; Drupal a signalé le 21 novembre une exploitation sur des sites en production.*

**Drupal.** L'avis **SA-CORE-2026-017** (CVE-2026-132165), annoncé dès le 16 novembre, corrige une faille de l'installeur `core/install.php` : sans être connecté, un attaquant peut, dans certaines conditions, réinstaller un site existant, puis en prendre le contrôle ou exécuter du code. La faille a été trouvée par le scanner open source d'Anthropic, selon SecurityOnline. Le 21 novembre, Drupal a mis à jour l'avis : une exploitation est signalée **dès le 19 novembre à 19 h UTC**, et le score passe à **20/25 (« hautement critique »)**. Versions corrigées : **11.4.13, 11.3.22 et 10.6.22**. Les branches 11.2, 10.5 et antérieures ne sont plus corrigées ; Drupal conseille alors de bloquer l'accès à l'installeur au niveau du serveur et d'interdire l'écriture dans `settings.php`. Un second avis (SA-CORE-2026-018, 14/25) corrige une chaîne de gadgets PHP qui n'est dangereuse qu'avec une autre faille.

**WordPress.** La version **7.1.5** du 18 novembre corrige 18 failles, dont une **exécution de code à distance sans authentification** liée au bloc Template Part, une XSS stockée non authentifiée via les commentaires, deux injections SQL et, sur un **réseau multisite**, la possibilité pour un administrateur de devenir super-administrateur. Les branches plus anciennes reçoivent des correctifs, mais seule la dernière version est pleinement prise en charge.

**PHP.** Les versions **8.5.13, 8.4.28, 8.3.37 et 8.2.36** du 19 novembre corrigent 18 failles selon Aikido, cité par BleepingComputer. La plus grave (CVE-2026-129289, CVSS 9,2) permet d'exécuter du code sans authentification via PHP-FPM, mais seulement si le serveur web réutilise ses connexions vers PHP-FPM.

**Impact pour une école.** Trois couches du même socle ont été corrigées en 48 heures, et l'exploitation Drupal a commencé dès le lendemain du correctif : le délai d'application devient le vrai indicateur de sécurité. Un environnement Drupal de refonte exposé sur Internet (recette, préproduction) est concerné au même titre que la production.

**Recommandation.** *Immédiat* : obtenir de l'hébergeur la confirmation écrite de WordPress 7.1.5 sur chaque site, en commençant par le réseau multisite, et de la version PHP corrigée de chaque environnement. *Immédiat* : obtenir de l'agence la version Drupal de chaque environnement de la refonte (au moins 11.3.22 ou 11.4.13), le blocage de `core/install.php` et l'analyse des journaux depuis le 19 novembre. *Contractuel* : inscrire au contrat un délai maximal d'application des correctifs critiques, par exemple 24 heures pour un avis « hautement critique ».

Sources :

- [Drupal core - Highly critical - Remote code execution - SA-CORE-2026-017](https://www.drupal.org/node/3636972) — Drupal Security Team, 18 novembre 2026, mis à jour le 21 novembre
- [Upcoming critical Drupal core releases on November 18, 2026 - PSA-2026-11-16](https://drupal.org/psa-2026-11-16) — Drupal Security Team, 16 novembre 2026
- [Drupal Fixes Critical Installer Flaw and Gadget Chain](https://www.thedroptimes.com/node/74161) — The Drop Times, 19 novembre 2026
- [CVE-2026-132165: Drupal Remote Code Execution Fixed in 11.4.13](https://securityonline.info/drupal-remote-code-execution-cve-2026-132165/) — SecurityOnline, 18 novembre 2026
- [WordPress 7.1.5 Security Release Fixes 18 Vulnerabilities](https://www.searchenginejournal.com/wordpress-7-1-5-security-release-fixes-18-vulnerabilities/598080/) — Search Engine Journal, 19 novembre 2026
- [PHP security updates fix 18 flaws, including critical RCE bugs](https://bleepingcomputer.com/news/security/php-security-updates-fix-18-flaws-including-critical-rce-bugs) — BleepingComputer, 19 novembre 2026

## 5. CDP, data first-party, identité et consentement

**Badge : IMPORTANT**

### La CNIL demande un premier bilan de sa recommandation sur les pixels de suivi dans les courriels, avant le 3 décembre

*La CNIL a ouvert le 20 novembre un appel à retours d'expérience sur sa recommandation du 14 avril 2026.*

**L'appel.** La CNIL veut mesurer les effets de sa recommandation : **coûts de mise en conformité**, évolution des pratiques de **mesure d'audience** et de **personnalisation**, solutions alternatives développées par le marché. Elle demande des contributions précises et chiffrées, notamment sur la soutenabilité économique. L'appel vise les entreprises du secteur privé, prestataires techniques comme émetteurs de courriels ; les entités d'un même groupe sont invitées à répondre ensemble. Réponse par formulaire en ligne **jusqu'au jeudi 3 décembre 2026**.

**Rappel des règles.** Pour les nouveaux contacts, la recommandation s'applique dès maintenant. Pour les listes existantes, l'expéditeur doit informer clairement les destinataires de l'usage des pixels dans un délai de trois mois, pour qu'ils puissent s'y opposer facilement.

**Impact pour une école.** Les campagnes de relance des candidats reposent souvent sur le taux d'ouverture, y compris pour scorer les prospects dans le CRM. Ce taux devient partiel dès qu'une partie des destinataires refuse le pixel, et un score fondé sur les ouvertures perd sa fiabilité. L'appel de la CNIL est aussi le moment de documenter cet effet, chiffres à l'appui.

**Recommandation.** *Immédiat* : vérifier avec le routeur de courriels et le CRM que le consentement au pixel est recueilli sur les formulaires de demande de documentation et que l'information des listes existantes a bien été faite. *À arbitrer* : remplacer l'ouverture par le clic et la conversion (inscription à une journée portes ouvertes, dépôt de candidature) dans les indicateurs et le scoring des campagnes admissions. *Optionnel* : contribuer avant le 3 décembre, directement ou via le routeur, avec l'évolution mesurée des taux d'ouverture.

Sources :

- [Pixels de suivi dans les courriels : la CNIL sollicite un premier retour d'expérience sur sa recommandation](https://www.cnil.fr/fr/recommandation-pixels-retour-dexperience) — CNIL, 20 novembre 2026

## 6. Mesure et attribution

**Badge : IMPORTANT · RATTRAPAGE** (annonce du 16 novembre, non couverte par l'édition précédente)

### L'API Search Console sépare la marque du hors-marque et isole la recherche par image ; Google Ads crée un objectif « prise de rendez-vous »

*L'équipe Search Console a ouvert le 16 novembre trois fonctions à l'API Search Analytics ; Google Ads a renommé le 24 novembre sa documentation des réservations en objectif de conversion « Book Appointment ».*

**API Search Analytics.** Trois ajouts : le regroupement ou le filtre **`brandedClassification`** pour comparer requêtes de marque et hors marque ; le type de recherche **`webMultimodal`**, qui donne les données de Google Lens, de Circle to Search sur Android et des images envoyées dans la recherche ; le champ **`filterLists`** pour filtrer plusieurs pays ou appareils dans une même requête. Les données de marque ne concernent que les propriétés éligibles (sinon la réponse est vide) ; les données multimodales arrivent aussi dans l'export BigQuery pour les propriétés qui l'ont activé.

**Google Ads.** La page d'aide « Partner bookings » devient « About the Book Appointment conversion goal ». L'objectif regroupe trois méthodes de suivi : les réservations chez des partenaires, les actions de conversion « prise de rendez-vous » et les appels depuis les annonces. Google n'a pas précisé les pays ni le calendrier de déploiement.

**Impact pour une école.** Le partage marque / hors marque est l'indicateur le plus direct de la notoriété (requêtes « TBS Education ») face à la conquête (requêtes « master marketing Toulouse »), et il devient automatisable dans les tableaux de bord. Côté publicité, une visite de campus, un entretien d'admission ou un rendez-vous avec un conseiller sont des rendez-vous : les campagnes peuvent être optimisées sur cet objectif plutôt que sur le seul formulaire.

**Recommandation.** *Immédiat* : vérifier que la propriété Search Console principale renvoie des données `brandedClassification`, puis ajouter la vue marque / hors marque au tableau de bord SEO. *À arbitrer* : regrouper sous l'objectif « Book Appointment » les inscriptions aux visites et aux entretiens, avec l'équipe acquisition et l'agence média. *Indicatif* : suivre `webMultimodal` si des campagnes d'affichage sur le campus ou des brochures renvoient vers une recherche par image.

Sources :

- [Google Search Analytics API Adds Branded Queries, Multimodal & Country/Devices Filters](https://www.seroundtable.com/google-search-analytics-api-addition-42544.html) — Search Engine Roundtable, 16 novembre 2026
- [Google Ads Book Appointment Conversion Goals](https://www.seroundtable.com/google-ads-book-appointment-conversion-goal-42599.html) — Search Engine Roundtable, 24 novembre 2026

## 7. UX conversationnelle et web agentique

**Badge : À SURVEILLER**

### Gemini prend la main sur le Mac : l'agent remplit formulaires et applications à la place de l'utilisateur

*Google a lancé le 19 novembre la fonction « computer use » dans l'application Gemini pour Mac, aux États-Unis.*

**Fonctionnement.** L'utilisateur décrit une tâche ; Gemini enchaîne les clics, la saisie, les menus et les **formulaires** dans les fichiers locaux, les applications de bureau et le web. Il travaille dans une **fenêtre d'arrière-plan isolée**, avec un aperçu en direct dans la conversation, ce qui laisse l'écran libre. Exemples donnés par Google : extraire poids et dimensions de PDF pour remplir des demandes de devis, récupérer des indicateurs de tableaux de bord pour monter une présentation Google Slides.

**Garde-fous et disponibilité.** L'utilisateur choisit les applications accessibles, peut mettre en pause à tout moment et **valide les actions clés** avant leur exécution. La fonction est réservée aux États-Unis, en anglais, aux comptes personnels de plus de 18 ans abonnés à Google AI Plus, Pro ou Ultra, sur Mac Apple Silicon (macOS 15 ou plus).

**Impact pour une école.** L'agent ne passe plus seulement par le navigateur : il peut ouvrir une brochure PDF téléchargée, en extraire les dates et remplir le formulaire de candidature ou de demande de documentation. Un formulaire mal étiqueté, ou une information présente seulement dans une image, devient un point de rupture du parcours, pour l'agent comme pour un lecteur d'écran.

**Recommandation.** *Règle de conception* : sur les formulaires de candidature et de documentation, des étiquettes explicites, les attributs `autocomplete` standard et des messages d'erreur en texte ; dans les brochures PDF, les dates et conditions en texte sélectionnable. *À surveiller* : l'ouverture de la fonction en France et en français, et son arrivée dans les comptes Google Workspace.

Sources :

- [Let Gemini tackle repetitive chores on your Mac](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/) — Google, 19 novembre 2026

## 8. IA en production et gouvernance

**Badge : À SURVEILLER**

### Les autorités de protection des données fixent une grille pour l'IA à l'école ; Anthropic laisse des agents approuver du code

*La 48e Global Privacy Assembly a adopté les 16 et 17 novembre à Bruxelles une résolution sur l'IA dans l'éducation ; Anthropic a lancé Claude Ship en bêta le 23 novembre.*

**Résolution sur l'IA dans l'éducation.** Préparée par le groupe de travail sur l'éducation numérique, que préside la CNIL, elle est parrainée par sept autorités (dont la CNIL et l'ICO britannique) et cosignée par huit autres ; la FTC américaine s'est abstenue. Pour les **fournisseurs**, elle demande d'exclure dès la conception six fonctions (anthropomorphisme, complaisance, manipulation subliminale, notation sociale, surveillance biométrique, reconnaissance des émotions), d'exclure les données des élèves de la publicité, du profilage commercial et de l'**entraînement de modèles généralistes**, de désactiver par défaut les fonctions d'engagement et de restituer ou supprimer les données en fin de contrat. Pour les **établissements** : une charte modèle en douze engagements, l'abandon d'un outil dont les risques ne peuvent être atténués, la prudence envers les détecteurs de plagiat par IA. **Correction par rapport à l'édition ChatGPT** : le texte vise les élèves de moins de 18 ans du primaire et du secondaire, pas l'enseignement supérieur, selon ActuIA.

**Claude Ship.** Le service associe la revue de code existante à deux agents en bêta : **PR Steward** règle conflits et problèmes sans fusionner, **Claude Approvals** approuve les changements routiniers selon une politique écrite dans le dépôt et renvoie les changements complexes ou risqués à un humain. Réservé aux offres Team et Enterprise sur GitHub. Anthropic prévient que l'outil peut « miss bugs, security vulnerabilities, or other issues » et conseille de commencer en mode observation.

**Modèles.** OpenAI met à disposition GPT-6.2 Astra et Sol dans ChatGPT Work et Codex pour les offres Plus, Pro, Enterprise et Edu ; pour Enterprise et Edu, l'administrateur doit les activer.

**Impact pour une école.** La résolution ne s'impose pas à une école de commerce, mais elle donne la grille que la CNIL appliquera vraisemblablement à tout outil d'IA au contact d'apprenants : chatbot d'admission, tuteur, détecteur de plagiat. Côté web, si une agence confie l'approbation de code à un agent, une faille comme celle de Drupal (domaine 4) peut passer sans regard humain.

**Recommandation.** *Indicatif* : reprendre les six fonctions exclues et les clauses sur l'usage des données comme liste de contrôle dans les achats d'outils d'IA pédagogiques et d'admission. *Contractuel* : exiger des agences qu'elles déclarent tout agent qui approuve ou fusionne du code sur les sites de TBS Education, avec validation humaine obligatoire pour les changements de sécurité et de configuration. *À arbitrer* : si l'école dispose de ChatGPT Edu, décider de l'activation de GPT-6.2 par l'administrateur.

Sources :

- [Global school AI resolution targets edtech vendors first](https://www.actuia.com/en/news/global-school-ai-resolution-targets-edtech-vendors-first/) — ActuIA, 23 novembre 2026
- [Anthropic's new Claude Ship service hands the reins to agents to fix and review code changes](https://www.itpro.com/software-engineering/anthropics-new-claude-ship-service-hands-the-reins-to-agents-to-fix-and-review-code-changes-but-the-company-warns-it-may-miss-bugs-security-vulnerabilities-or-other-issues) — ITPro, 24 novembre 2026
- [Introducing GPT-6.2 Astra and Sol](https://openai.com/ta-IN/index/introducing-gpt-6-2-astra-sol/) — OpenAI, page non datée consultée le 24 novembre 2026

## 9. Innovation marketing et plateformes publicitaires

**Badge : À SURVEILLER**

### Black Friday : le trafic envoyé par les assistants IA croît moins vite, mais rapporte plus par visite

*Digital Commerce 360 a compilé le 19 novembre les prévisions d'Adobe et de Salesforce pour les fêtes 2026.*

**Adobe.** Par rapport à 2025, le trafic venu de l'IA vers les sites marchands progresserait de **+159 % à Thanksgiving, +95 % le Black Friday et +88 % le Cyber Monday**, loin des croissances à quatre chiffres observées à certaines périodes de 2025. Mais ces visiteurs rapportent davantage : **+53 % de revenu par visite en août et +83 % en septembre** par rapport aux autres visiteurs, l'écart le plus élevé de 2026.

**Salesforce.** Les agents IA généreraient **20 % du trafic e-commerce** des fêtes 2026, et un site sur trois utiliserait des agents personnalisés pour accompagner les acheteurs pendant la Cyber Week.

**Impact pour une école.** Le trafic IA sort de la phase d'emballement et se juge désormais sur sa valeur. La même question se pose pour les admissions : un visiteur qui arrive de ChatGPT ou d'AI Mode a déjà comparé les écoles, et devrait convertir mieux qu'un visiteur organique. Sans canal dédié dans l'outil d'analyse, cet écart reste invisible.

**Recommandation.** *Indicatif* : comparer, sur le dernier trimestre, le taux de demande de documentation et de candidature des visiteurs venus des assistants IA à celui des autres canaux, si ce regroupement de canaux existe déjà ; sinon, le créer. *À surveiller* : les chiffres réels d'Adobe après le Cyber Monday, attendus début décembre.

Sources :

- [3 online sales factors to watch in 2026 holiday shopping forecasts](https://www.digitalcommerce360.com/?p=1364169) — Digital Commerce 360, 19 novembre 2026

## Cas d'école

**Aucun cas retenu cette semaine.** Les deux pistes de l'édition ChatGPT restent écartées : la campagne Biscoff primée aux Effie Pays-Bas n'a pas de résultat chiffré vérifiable dans la fenêtre, et le cas Ford est publié par l'éditeur de la solution. Les prévisions d'Adobe et de Salesforce (domaine 9) sont des projections sectorielles, pas un cas d'école.

## Bonus #10 : à Lille, une semaine pour faire bouger des robots mous en simulation

Du **23 au 27 novembre**, la SOFA Week réunit à Villeneuve-d'Ascq, sur place et en ligne, la communauté de SOFA, un logiciel libre de simulation mécanique interactive utilisé en biomécanique, en médical et en **robotique souple** (des robots en matière déformable, qui se tordent au lieu de s'articuler). Au programme : deux formations le 23 novembre, dont une avancée sur la robotique souple limitée à 8 participants ; un symposium international gratuit le 24, avec démonstrations et remise des **SOFA Awards** (un prix des organisateurs de 600 euros et un **prix du public** de 400 euros) ; trois jours de comité technique ouverts à tous pour décider de la feuille de route.

**Ce qu'on en retient.** Le format est simple à transposer pour une journée innovation : une formation payante en petit groupe, un symposium gratuit qui attire le public, un prix voté par la salle qui fait parler de l'événement.

Sources :

- [SOFA Week 2026](https://www.sofa-framework.org/sofa-events/sofa-week-2026/) — Consortium SOFA, consulté le 24 novembre 2026

## Actions prioritaires

| # | Action | Domaine | Équipe | Échéance | Statut |
| --- | --- | --- | --- | --- | --- |
| 1 | Obtenir la confirmation écrite de WordPress 7.1.5 et de la version PHP corrigée sur chaque site et environnement, multisite en premier | 4 | Exploitation web, hébergeur | 26 novembre | Immédiat |
| 2 | Obtenir de l'agence la version Drupal de chaque environnement de la refonte (au moins 11.3.22 ou 11.4.13), le blocage de `core/install.php` et l'analyse des journaux depuis le 19 novembre | 4 | Chef de projet refonte, agence | 26 novembre | Immédiat |
| 3 | Vérifier le consentement au pixel sur les formulaires et l'information des listes existantes ; décider d'une contribution à la CNIL | 5 | CRM, délégué à la protection des données | 3 décembre | Immédiat, contribution optionnelle |
| 4 | Faire classer les douze robots Google nouvellement documentés dans le pare-feu applicatif | 3 | Hébergeur, sécurité | 4 décembre | Immédiat |
| 5 | Comparer les périodes Search Console avant et après la mise à jour, et annoter les tableaux de bord au 24 novembre | 1 | SEO | À partir du 1er décembre | Immédiat |
| 6 | Ajouter la vue marque / hors marque (`brandedClassification`) au tableau de bord SEO | 6 | Data, SEO | 11 décembre | Immédiat |
| 7 | Passer le panel GEO mensuel en fil temporaire et relever les domaines cités par moteur (YouTube, Reddit, TikTok) | 1, 2 | SEO, contenus | Panel de décembre | Règle de conception |
| 8 | Inscrire aux contrats des agences un délai maximal d'application des correctifs critiques et la déclaration de tout agent qui approuve du code | 4, 8 | Achats, DSI | Prochain avenant | Contractuel |

## Signaux émergents

- **Les mises à jour de Google deviennent planifiables.** Le préavis de la mise à jour de décembre, lié selon Search Engine Roundtable aux exigences de la CMA britannique, pourrait devenir la règle.
- **La citation compte plus que le lien.** En deux mois, la part des AI Overviews qui placent un lien dans le premier tiers de la réponse est passée de 76,8 % à 51,8 % (relevé Peec AI).
- **Une stratégie GEO par moteur.** Google cite de plus en plus YouTube et TikTok, ChatGPT de moins en moins les plateformes sociales, Reddit en tête.
- **Les agents quittent le navigateur.** Avec Gemini sur Mac, l'agent passe d'un PDF local à un formulaire web : le parcours de candidature se joue aussi hors du site.
- **Les agents valident du code.** Claude Ship oblige à écrire qui, humain ou agent, approuve une livraison web.
- **Les autorités de protection des données écrivent les règles de l'IA éducative** avant les textes contraignants, et la CNIL tient la plume.

## Mémoire stratégique

| Date | Échéance | Statut | Suivi |
| --- | --- | --- | --- |
| 26 novembre 2026 | Correctifs Drupal, WordPress et PHP confirmés par écrit | Immédiat | S48 |
| 1er décembre 2026 | Première comparaison Search Console après la mise à jour de novembre | Rappel | S47, S48 |
| 2 décembre 2026 | Fin du délai accordé aux systèmes d'IA déjà existants pour les obligations de transparence de l'AI Act | Rappel | S47 |
| 3 décembre 2026 | Clôture de l'appel à retours de la CNIL sur les pixels de suivi | Rappel | S48 |
| 9 décembre 2026 | Fin de support de Drupal 10 | Rappel | S47 |
| Décembre 2026, date non annoncée | Mise à jour principale de Google | À surveiller | S48 |
| Début décembre 2026 | Chiffres réels d'Adobe sur le trafic IA de la Cyber Week | À surveiller | S48 |

## Consolidation : analyse de l'édition déposée par ChatGPT

**L'édition ChatGPT (commit du 24 novembre, dossier `content/2026-W48`) respecte la méthode du prompt v4.2 mais reste trop générale pour décider.** Elle couvre 9 domaines sur 9 avec 25 sources, majoritairement primaires (Google, Drupal, PHP, CERT-FR, CNIL, W3C, Matomo, Anthropic). Elle trace ses requêtes, ses exclusions et le statut de chaque source, et masque le cas d'école avec des motifs explicites (Biscoff aux Effie Pays-Bas, cas Ford fourni par l'éditeur).

| Point | Constat sur l'édition ChatGPT | Décision pour la version consolidée |
| --- | --- | --- |
| Angle mort S46-S47 | Le dépôt ne contient ni S46 ni S47 : ChatGPT ignore la mise à jour principale de Google, le support Drupal réduit à 8 mois, le Business Hub et Wallet de ChatGPT, et les deux corrections de la S44 | Suivis ajoutés ; verser la S47 dans le dépôt pour que les prochaines éditions la voient |
| Domaine 4, socle | Signal juste (Drupal, WordPress, PHP le 18 et le 19 novembre), mais sans numéro de faille, versions corrigées ni nature des failles, et une recommandation conditionnelle (« si un composant concerné figure dans le périmètre ») | Retenu et précisé : failles, versions et consignes adaptées à des sites WordPress en production et à une refonte Drupal |
| Domaines 1 et 2, moteurs et GEO | Fils temporaires, Wallet et étude Semrush justes ; ni la fin de la mise à jour principale, ni le préavis de celle de décembre, ni le recul des liens dans AI Overviews | Retenus et complétés (fin de la mise à jour, préavis de décembre, relevé Peec AI, propos d'Elizabeth Reid) |
| Signal majeur | « 20/25 » est le score interne de Drupal, illisible sans grille | Remplacé par « J+1 », le délai entre le correctif et la première exploitation signalée |
| Domaine 3, W3C RDF 1.2 | Brouillons de modélisation sans effet sur le référencement ni sur l'accès des robots : domaine rempli plutôt que masqué | Écarté ; remplacé par la documentation de douze robots Google, dont Google-Edu et l'importateur d'agendas |
| Domaine 6, Matomo | Rupture de calcul réelle, mais sans objet pour un site mesuré avec GA4 ; badge IMPORTANT excessif | Renvoyé au journal (source non rouverte) ; domaine consacré à l'API Search Console et à l'objectif « rendez-vous » de Google Ads |
| Domaine 5, CNIL pixels | Appel à retours jusqu'au 3 décembre, directement utile aux campagnes de courriel admissions | Retenu |
| Domaine 8, IA et éducation | Résolution de la Global Privacy Assembly sur l'IA dans l'éducation, pertinente pour le secteur ; Claude Ship pour la gouvernance du code | Retenus, avec une correction : la résolution vise le primaire et le secondaire, pas l'enseignement supérieur ; badge ramené à À SURVEILLER |
| Domaine 9, Pinterest et Spotify dans DV360 | Inventaires annoncés pour les États-Unis et l'Inde, sans éligibilité française documentée | Écarté (page Google non accessible ici) ; domaine consacré aux prévisions d'Adobe et de Salesforce sur la valeur du trafic IA |
| Rédaction | Impacts et recommandations abstraits (« une même question peut être posée avec des contextes différents »), échéances vagues (« avant tout pilote ») | Réécrits avec acteurs, objets et dates |
| Exclusions | Mise à jour de l'API Search Analytics et brouillon IETF sur robots.txt écartés comme datés du 16 novembre ; ce jour n'est couvert par aucune édition | API Search Analytics retenue en rattrapage (domaine 6) ; brouillon IETF non vérifiable ici, laissé au journal |

**Bilan.** Sur les 9 domaines de l'édition ChatGPT, 6 sont retenus et complétés (1, 2, 4, 5, 7, 8, dont une correction de fond sur le 8) et 3 sont remplacés par des signaux plus utiles (3, 6, 9). Le bonus SOFA Week est conservé après vérification. Les trois avis du CERT-FR cités par ChatGPT n'ont pas pu être ouverts et ne figurent pas dans les sources.

## Méthode et journal d'exécution

**Fenêtre.** Du 17 au 24 novembre 2026 (J-7 à J), avec rattrapage du 16 novembre, jour couvert par aucune édition (API Search Analytics). Suivis de la semaine 47 : mise à jour principale de Google, support Drupal, Wallet.

**Démarche.** Lecture de l'édition ChatGPT du dépôt (`content/2026-W48` : rapport, journal, cas d'école, registre des sources), recherche propre sur la fenêtre, vérification de chaque source citée (page ouverte et lue), puis consolidation domaine par domaine.

**Sources.** 25 sources citées, toutes ouvertes et lues. Une source secondaire est utilisée quand la page primaire n'était pas accessible : Search Engine Roundtable pour Search Console, Google Ads et la documentation des robots ; ActuIA pour la résolution de la Global Privacy Assembly ; ITPro pour Claude Ship ; Digital Commerce 360 pour Adobe et Salesforce.

**Pages inaccessibles ici.** Documentation Google des robots (interdite aux robots), avis CERT-FR AVI-1574, 1579 et 1580, page Google Marketing Platform sur DV360, brouillon IETF draft-kelley-rep-namespaces-00, page CNIL sur la résolution, annonce de Claude Ship sur claude.com.

**Écartés.**

- Brouillons W3C RDF 1.2 : sans effet sur le référencement ni sur l'accès des robots.
- Matomo 6, temps passé par page vue : source non rouverte, sans objet pour un site mesuré avec GA4.
- Pinterest et Spotify dans DV360 : page non accessible.
- Taux de consentement de 65 % (TAGGRS, relayé par PPC Land) : page introuvable par la recherche.
- Brouillon IETF sur les espaces de noms dans robots.txt (16 novembre) : non vérifiable.
- Extension des publicités ChatGPT à 26 pays : 21 octobre, hors fenêtre, France non citée.
- Combat de robots humanoïdes à San Francisco : article de février 2026, hors fenêtre.
- Nouveautés ChatGPT relevées par l'agrégateur Releasebot (Space, dictée, Health) : absentes de la page officielle consultée. GPT-6.2 est retenu à partir de la page d'OpenAI, qui n'est pas datée.
- Réponses « AI-Generated answer » testées par Bing : relevées dans un récapitulatif, page non ouverte.

**Limites.** La recherche a été interrompue en fin d'après-midi par la limite d'usage de l'outil de lecture web, puis reprise le soir. Les heures Google sont données en heure de New York. Les chiffres de Semrush et d'Adobe portent sur les États-Unis.

**Pour la semaine 49.** Verser les semaines 46 à 48 consolidées dans le dépôt, pour que l'édition ChatGPT voie les suivis et les corrections.
