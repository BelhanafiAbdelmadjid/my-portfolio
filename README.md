# Portfolio de Belhanafi Abdelmadjid

Portfolio bilingue français / anglais autour du positionnement Architecte solutions IA & DevOps et de l’approche Forward Deployed Engineer.

## Développement

Vue 3, TypeScript et Vite. Les composants d’interface utilisent PrimeVue 4 : Menubar, SelectButton, Button, Avatar, Card, Panel, Accordion, Timeline, Tag, Image, Menu, Galleria, InputText et IconField.

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

Le build vérifie les types puis génère le site dans `dist/`. La configuration Netlify conserve la redirection nécessaire aux routes du site.

## Contenu et thème

- `src/locales/fr.json` et `src/locales/en.json` : textes, avec le contenu de l’accueil dans `portfolio`.
- `src/data/site.ts` : coordonnées et lien direct vers le rendez-vous Calendly de 30 minutes.
- `src/data/agents.ts` et `src/data/projects.ts` : catalogue des réalisations.
- `src/theme.ts` : thème PrimeVue basé sur Aura et adapté à la palette d’origine.
- `src/assets/main.css` : mise en page et adaptation aux écrans mobiles.

Le thème reprend la version d’origine (`cde8e91`) : anthracite `#333333`, beige `#e8e1d9`, brun `#7f5539` et police Montserrat. Un noir olive `#202419` complète cette base dans la navigation, les sections techniques et les pages projets. Les surfaces claires adaptent les variables de couleur des composants PrimeVue.

Le français est affiché par défaut. Le choix de langue est conservé dans le navigateur, lorsqu’il autorise le stockage local.

## Pages

- `/` : offre, missions, présentation, approche, Engineering & Delivery et prise de contact.
- `/projects` : catalogue avec recherche et filtres.
- `/projects/:id` : showcase avec captures agrandissables et contributions.
- `/work/:id` : redirection compatible avec les anciens liens.
- `/agents` et `/agent/:id` : agents IA et explication de leur fonctionnement.
- `/education` : parcours académique.
- `/demo` : redirection vers la section Engineering & Delivery.

## Showcases réutilisables

Voir [le guide des fiches projets](docs/PROJECT-SHOWCASES.md) pour ajouter un projet, des captures et les textes français et anglais au template commun.
