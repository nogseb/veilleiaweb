# Rétention analytics — job planifié

| Paramètre | Valeur |
|---|---|
| Nom du job | `analytics-retention-daily` |
| Identifiant de tâche | `5sDhanSbDqi6Gyk98tr5Cp` |
| Planning | Tous les jours à 03:00 UTC (`0 0 3 * * *`) |
| Endpoint | `POST /api/scheduled/analytics-retention` |
| Authentification | Identité Heartbeat de la plateforme uniquement |
| Rétention des événements | 90 jours |
| Rétention des agrégats | 25 mois |

Le handler ne lit aucun paramètre de purge dans la requête. Il authentifie l’appel comme tâche planifiée, puis applique les seuils codés côté serveur. Toute erreur renvoie une réponse JSON exploitable dans l’historique d’exécution de la plateforme.
