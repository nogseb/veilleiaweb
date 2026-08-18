# Suivi de production — Veille S34

## Mesure first-party de la veille

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
- [ ] Créer le checkpoint Manus, puis synchroniser `nogseb/veilleiaweb` sur GitHub.
