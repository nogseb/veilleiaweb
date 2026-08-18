# Validation — accès par mot de passe `/stats`

**Date :** 18 août 2026

| Contrôle | Résultat |
|---|---|
| Route `/stats` sans session | La mire affiche seulement le champ mot de passe et ne révèle aucune statistique. |
| Ancienne route `/pilotage` | Elle retourne une page 404 ; aucun tableau de bord n’est accessible à cette URL. |
| Vérification du mot de passe | Test Vitest validé côté serveur : secret configuré accepté, valeur incorrecte rejetée, cookie de session `HttpOnly` créé sans contenir le mot de passe. |

> La session stats est distincte de Manus OAuth. Le mot de passe est lu exclusivement côté serveur depuis `STATS_PASSWORD`.
