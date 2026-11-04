# Ajouter ou compléter un showcase

Le catalogue et les fiches partagent les mêmes données. Aucun nouveau composant ni nouvelle route n’est nécessaire pour ajouter un projet.

## Structure

- `src/data/projects.ts` : type `Project`, textes FR/EN, contributions et captures ; les trois premières entrées alimentent le menu de l’accueil.
- `src/views/ProjectsView.vue` : catalogue avec recherche et filtre.
- `src/views/ProjectView.vue` : résolution de `/projects/:id` et navigation entre projets.
- `src/components/projects/ProjectShowcase.vue` : template commun de présentation, galerie PrimeVue avec zoom, contexte, rôle et contributions.
- `src/components/projects/ProjectPreview.vue` : aperçu de la fiche ; deux écrans côte à côte pour les applications mobiles.
- `src/components/projects/ProjectsMenu.vue` : menu PrimeVue avec trois projets et « Voir plus ».

Les anciens liens `/work/:id` redirigent vers la nouvelle fiche.

## Une nouvelle entrée

Ajouter une entrée respectant le type `Project` dans `projects.ts`. Décrire le but en une phrase courte dans `purpose`, puis le problème métier dans `context`. Les éléments de `contributions` décrivent le travail effectué, sans résultat chiffré non documenté. Le rôle est distinct de la collaboration ; `collaboration: true` affiche le crédit à Lyes Hamidi.

Chaque capture utilise un chemin local dans `public/projects/<id>/`. `orientation: 'mobile'` conserve les proportions d’un téléphone ; `'desktop'` affiche l’interface en largeur. Le template accepte une ou plusieurs captures. `captureType: 'demo'` affiche « Captures avec données de démonstration » ; `'archive'` identifie les anciens visuels.

Renseigner systématiquement `fr` et `en` pour les textes. Une fiche inconnue affiche l’état de page introuvable. Les données peuvent être vérifiées avec `npm run build`.

## Provenance des projets intégrés

Les sept projets réalisés avec Lyes proviennent du dossier voisin `Lyes/`. Les contributions ont été rapprochées du code et des commits de Belhanafi Abdelmadjid dans leurs différents dépôts.

| Projet | Éléments consultés | Captures intégrées |
| --- | --- | --- |
| Goldex | API, boutique Nuxt, back-office, accès par rôle, déploiement Docker | Captures de recette dans `goldex/api/docs/screenshots` ; le compte et la boutique visibles sont ceux de la commande `GoldexDemo` |
| Depanny | API ResQ, applications Flutter client/pro, back-office, notifications | Visuels de l’application issus de `resq/playstore-assets` |
| IfriquIA | Applications publique, client/pro et BO, API, refonte et actualités | Nouvelle capture de l’application publique lancée localement |
| Sahello | Applications Flutter client/pro, API et back-office | Nouvelle capture du BO lancé localement avec réponses API de démonstration |
| Sanedni | Recherche sur carte, proxy Places/Geocoding, profils, messagerie et BO | Nouvelle capture du BO lancé localement avec réponses API de démonstration |
| MyNoqta | Applications client/pro, API et BO, scans QR et notifications | Captures de recette dans `mynoqta/mynoqta-client/screenshots` |
| Piété Bienfaisance | Application Flutter, API, BO et paiement SlickPay | Nouvelle capture du BO lancé localement avec réponses API de démonstration |

Les applications n’ont pas été modifiées pour les captures. Les nouvelles vues de BO utilisent une API locale temporaire et des données fictives ; aucun compte client ni paiement réel n’a été utilisé.
