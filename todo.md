# Suivi de production — Veille S34

## Mesure first-party de la veille

- [x] Vérifier que la session GA4 authentifiée est bien accessible depuis le navigateur contrôlé.
- [x] Vérifier l'accès à la propriété GA4 associée à `G-NZ24YB5E5N` une fois la session partagée accessible.
- [ ] Déclarer `domain_code`, `week_number`, `content_route` et `source_publisher` comme dimensions personnalisées d'événement dans GA4.
- [ ] Créer l'exploration GA4 « Domaines × Sources lues ».
- [x] Ajouter l'événement GA4 `archives_consultees` uniquement après consentement.
- [x] Garantir un seul événement `archives_consultees` par affichage de page malgré les re-renders React.
- [ ] Rejouer les événements de page après consentement GA4 afin que la première visite consentie soit bien mesurée.
- [ ] Après publication, déclencher une visite consentie sur le domaine live puis attendre la réception des paramètres dans GA4 avant leur déclaration.
- [ ] Tester, publier et synchroniser la mise à jour GitHub.
- [x] Définir les paramètres GA4 autorisés pour les ouvertures d’analyse et les clics sources.
- [x] Envoyer `analyse_ouverte` et `source_lue` uniquement après consentement GA4.
- [x] Documenter les dimensions personnalisées et les rapports GA4 à créer.
- [x] Tester les garde-fous de consentement, la compilation et le build avant publication.
- [x] Remplacer le titre « Pilotage de la veille » par « Statistiques Veille IA & WEB » sur `/stats`.
- [x] Auditer la balise Umami existante et vérifier l'absence de chargement GA4 avant consentement.
- [x] Ajouter GA4 `G-NZ24YB5E5N` avec chargement et envoi conditionnels au consentement.
- [x] Exposer un contrôle de consentement clair, sans modifier la charte éditoriale de la veille.
- [x] Tester les états sans consentement et avec consentement, puis publier et synchroniser GitHub.
- [x] Remplacer l’accès OAuth du tableau de bord par une session protégée par mot de passe côté serveur.
- [x] Déplacer la route de pilotage vers `/stats` et retirer l’accès `/pilotage`.
- [x] Ajouter une mire d’authentification par mot de passe, sans exposer le secret au navigateur.
- [x] Tester le refus, la connexion, la déconnexion et l’accès aux agrégats avant publication (11 tests Vitest validés).
- [x] Activer le niveau 2 après validation formelle du DPO, puis vérifier le mode de collecte et le hachage de session.
- [x] Activer l'architecture full-stack, la base de données et les rôles d'administration.
- [x] Implémenter la collecte niveau 1 : audience agrégée sans identifiant persistant.
- [x] Préparer la collecte niveau 2 : session opaque, code sous feature flag désactivé par défaut.
- [x] Valider le tableau de bord d'administration et les agrégats de pilotage par build, tests et vérification navigateur.
- [x] Valider les finalités, le périmètre de consentement, les durées et l'activation éventuelle du niveau 2 avec le DPO de TBS Education.

- [x] Terminer la validation éditoriale des sources S34 et écarter les contenus non qualifiés.
- [x] Produire le rapport S34 et le journal des sources sans modifier les composants ou les données affichées du site.
- [x] Vérifier que le prototype canonique `https://veille-ia-web.manus.space/` répond de nouveau correctement : accès rétabli le 18 août 2026.
- [x] Appliquer uniquement les données S34 dans les composants existants, sans aucune modification CSS, composant visuel ou structure de navigation.
- [x] Créer `veille-s34.ts`, mettre à jour l'accueil, archiver S33 et valider le build, sans changement graphique.
- [x] Créer le checkpoint Manus, puis synchroniser `nogseb/veilleiaweb` sur GitHub (commit `585b80a`).
