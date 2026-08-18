# Événements GA4 — Veille IA & Web

| Événement GA4 | Déclencheur | Paramètres envoyés | Rapport recommandé |
|---|---|---|---|
| `analyse_ouverte` | Ouverture d’une carte de domaine, édition courante ou archive | `domain_code`, `week_number`, `content_route` | Événements par domaine et semaine |
| `source_lue` | Clic sur une source externe depuis une analyse | `domain_code`, `source_publisher`, `week_number`, `content_route` | Sources lues par domaine et par édition |
| `archives_consultees` | Consultation de la page Archives | `content_route=archives` | Consultations de l’index des éditions |

Les paramètres ne contiennent ni URL complète de la source, ni identifiant utilisateur, ni donnée de formulaire. Dans GA4, déclarer `domain_code`, `week_number`, `content_route` et `source_publisher` comme dimensions personnalisées de portée **événement** avant de bâtir les explorations.

> Ces événements ne sont transmis que si le visiteur a accepté la mesure GA4 ; ils sont indépendants des événements first-party utilisés dans `/stats`.

## Validation de l'interface

Le 18 août 2026, une session de test ayant accepté GA4 a ouvert une carte de domaine de l’édition courante. La modale s’est affichée normalement, confirmant que l’instrumentation n’altère pas l’interaction éditoriale. La charge d’événement est contrôlée séparément dans la file `dataLayer`.

Le contrôle de la file `dataLayer` a confirmé les deux charges suivantes après consentement :

| Interaction testée | Événement observé | Paramètres observés |
|---|---|---|
| Ouverture de l’analyse Google AI | `analyse_ouverte` | `domain_code=GOOGLE AI`, `week_number=34`, `content_route=home` |
| Clic de source Search Engine Roundtable | `source_lue` | `domain_code=GOOGLE AI`, `source_publisher=Search Engine Roundtable`, `week_number=34`, `content_route=home` |

## Configuration GA4

Le 18 août 2026, l’accès à la propriété **Veille IA & WEB** a été confirmé dans Google Analytics. L’identifiant affiché par la propriété est `G-NZ24YB5E5N`. Les réglages de propriété rendent disponibles les sections **Définitions personnalisées** et **Explorer** nécessaires à la création des quatre dimensions et de l’exploration.

La page des définitions personnalisées est accessible à l’URL interne `#/a404975011p550318512/admin/customdefinitions/hub`. Elle ne comporte aucune définition existante au moment de la configuration, et propose l’action **Créer une dimension personnalisée**.

Lors de la configuration, GA4 indique qu’aucune donnée n’a encore été reçue par la propriété. Le sélecteur de paramètre ne reconnaît donc pas encore `domain_code`. La création des dimensions et de l’exploration est reportée jusqu’à ce qu’une consultation consentie du **domaine publié** ait alimenté la propriété ; ce délai de disponibilité côté GA4 est indépendant de l’instrumentation déjà testée dans l’environnement de prévisualisation.
