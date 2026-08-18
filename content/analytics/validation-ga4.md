# Validation — Google Analytics 4 sous consentement

**Date :** 18 août 2026

| Contrôle | Résultat |
|---|---|
| Chargement initial | La page publique présente une mire « Mesure d’audience » avec les choix Refuser et Accepter. |
| Avant consentement | Le journal réseau ne contient aucun appel vers `googletagmanager`, `google-analytics`, `/g/collect` ou `/collect` sur la visite de contrôle. |
| Charte graphique | La mire reprend le fond #0F0F10, l’accent #FF4757, les angles droits et la typographie éditoriale existante. |
| Préférences | Un bouton persistant « Préférences de mesure » est disponible dans le pied de page. |

La vérification du scénario d’acceptation est effectuée dans une session de test distincte afin de ne pas confondre l’accord de test avec un choix de production.

Après définition du consentement de test puis rechargement de la page, la mire n’est plus affichée et seul le lien de préférences reste disponible. Cette observation confirme la persistance locale de l’accord ; le contrôle du script chargé est réalisé séparément.

Le contrôle de la page consentie retourne bien `https://www.googletagmanager.com/gtag/js?id=G-NZ24YB5E5N` pour le script injecté. Le journal réseau de l’environnement de prévisualisation ne remonte aucun hit Google exploitable ; il faut donc confirmer la réception dans **GA4 DebugView** depuis le domaine publié, après consentement, sans utiliser l’absence de ce journal comme preuve d’absence de collecte.
