# Validation — mesure first-party

**Date :** 18 août 2026  
**Périmètre :** niveau 1 actif ; niveau 2 activé après validation formelle du DPO.

| Contrôle | Résultat | Preuve |
|---|---|---|
| Consultation publique S34 | Conforme | La page publique S34 s'affiche avec son rendu éditorial existant et appelle la collecte first-party. |
| Événements niveau 1 | Conforme | La base contient des événements `page_view` et `edition_view` en mode `aggregate`. |
| Identifiant persistant niveau 1 | Non créé | La collecte par défaut ne transmet aucune clé de session. |
| Tableau de bord `/pilotage` | Conforme | Sans session utilisateur, la route affiche « Connexion requise » et ne rend aucune donnée analytics. |
| Niveau 2 | Actif | Une clé opaque est conservée uniquement dans `sessionStorage`, hachée côté serveur ; aucun cookie persistant, rapprochement CRM ou suivi inter-sites n'est mis en œuvre. |

Deux visites de contrôle ont été réalisées sur la page publique après l’activation du niveau 2. Le rendu éditorial S34 et la navigation publique restent inchangés ; les paramètres techniques de contrôle présents dans l’URL ne sont ni affichés ni stockés comme URL analytics.

La vérification base de données confirme ensuite des événements en mode `consented_session` avec `session_key_hash` renseigné. Les événements historiques de niveau 1 demeurent en mode `aggregate`, sans clé de session. Cette coexistence est attendue : elle matérialise le passage de niveau validé par le DPO sans retraitement ni rapprochement des consultations antérieures.

> La validation DPO formelle a été confirmée le 18 août 2026. Les tests Vitest, le contrôle TypeScript et le build de production sont exécutés avant publication. La validation d'affichage authentifié du dashboard reste conditionnée à une connexion administrateur Manus.
