export interface LocalizedText {
  fr: string
  en: string
}
export interface ProjectScreenshot {
  src: string
  label: LocalizedText
  orientation: 'desktop' | 'mobile'
}
export interface Project {
  id: string
  name: string
  kind: 'platform' | 'mobile' | 'web'
  year: string
  platforms: string[]
  tech: string[]
  collaboration: boolean
  captureType: 'demo' | 'archive'
  purpose: LocalizedText
  context: LocalizedText
  role: LocalizedText
  contributions: { title: LocalizedText; body: LocalizedText }[]
  screenshots: ProjectScreenshot[]
}
export function projectText(text: LocalizedText, locale: string): string {
  return text[locale === 'en' ? 'en' : 'fr']
}

export const projects: Project[] = [
  {
    id: 'goldex',
    name: 'Goldex',
    kind: 'platform',
    platforms: ['Web'],
    tech: ['Nuxt 4', 'Laravel 13', 'PostgreSQL', 'Docker'],
    year: '2026',
    collaboration: true,
    captureType: 'demo',
    purpose: {
      fr: 'Piloter une bijouterie, du stock à la vente et aux réparations.',
      en: 'Run a jewellery business, from inventory to sales and repairs.',
    },
    context: {
      fr: 'Une application métier pour les bijoutiers : suivre les pièces, encaisser les ventes, gérer les achats, les réparations et les accès de chaque membre de l’équipe. Un back-office distinct administre les bijouteries et leurs abonnements.',
      en: 'Business software for jewellers: manage pieces, sales, purchases, repairs and each team member’s access. A separate back office manages jewellery businesses and their subscriptions.',
    },
    role: {
      fr: 'Développement full stack',
      en: 'Full-stack development',
    },
    contributions: [
      {
        title: {
          fr: 'Application métier et API',
          en: 'Business application and API',
        },
        body: {
          fr: 'Développement des parcours de stock, ventes, achats, caisse et réparations, avec gestion des clients, fournisseurs et documents.',
          en: 'Built inventory, sales, purchase, cash register and repair workflows, alongside customer, supplier and document management.',
        },
      },
      {
        title: {
          fr: 'Accès par équipe et boutique',
          en: 'Team and shop access',
        },
        body: {
          fr: 'Gestion des rôles, permissions, invitations et périmètres de données pour les équipes et leurs boutiques.',
          en: 'Implemented roles, permissions, invitations and data boundaries for teams and their shops.',
        },
      },
      {
        title: {
          fr: 'Exploitation et livraison',
          en: 'Operations and delivery',
        },
        body: {
          fr: 'Séparation des deux interfaces Nuxt, configuration Docker, contrôles de déploiement et travail sur les tests et la sécurité des intégrations.',
          en: 'Separated the two Nuxt interfaces, configured Docker and deployment checks, and worked on tests and integration security.',
        },
      },
    ],
    screenshots: [
      {
        src: '/projects/goldex/dashboard.jpg',
        label: {
          fr: 'Tableau de bord de la bijouterie',
          en: 'Jewellery shop dashboard',
        },
        orientation: 'desktop',
      },
      {
        src: '/projects/goldex/reparation.jpg',
        label: {
          fr: 'Suivi d’une réparation et de sa livraison',
          en: 'Repair tracking and delivery',
        },
        orientation: 'desktop',
      },
      {
        src: '/projects/goldex/stock-mobile.jpg',
        label: {
          fr: 'Consultation du stock sur mobile',
          en: 'Inventory on mobile',
        },
        orientation: 'mobile',
      },
    ],
  },
  {
    id: 'depanny',
    name: 'Depanny',
    kind: 'mobile',
    platforms: ['iOS', 'Android', 'Back-office'],
    tech: ['Flutter', 'Laravel', 'WebSockets', 'Google Maps'],
    year: '2026',
    collaboration: true,
    captureType: 'demo',
    purpose: {
      fr: 'Mettre un conducteur en panne en relation avec un dépanneur disponible.',
      en: 'Connect a stranded driver with an available roadside assistance professional.',
    },
    context: {
      fr: 'Deux applications mobiles se répondent : le conducteur décrit sa demande, les dépanneurs à proximité proposent une intervention. La plateforme suit les offres, la mission, les disponibilités et les notifications.',
      en: 'Two mobile apps work together: a driver describes a request and nearby professionals offer assistance. The platform tracks offers, jobs, availability and notifications.',
    },
    role: {
      fr: 'Développement full stack',
      en: 'Full-stack development',
    },
    contributions: [
      {
        title: {
          fr: 'Parcours conducteur et dépanneur',
          en: 'Driver and professional journeys',
        },
        body: {
          fr: 'Développement des applications Flutter et des flux de demande, proposition, contre-offre et suivi de mission.',
          en: 'Developed the Flutter applications and the request, offer, counter-offer and job tracking flows.',
        },
      },
      {
        title: {
          fr: 'Temps réel et notifications',
          en: 'Real-time updates and notifications',
        },
        body: {
          fr: 'Intégration des mises à jour de mission, des notifications push par rôle et de la synchronisation à la reprise de l’application.',
          en: 'Integrated job updates, role-scoped push notifications and synchronisation when returning to the app.',
        },
      },
      {
        title: {
          fr: 'API et administration',
          en: 'API and administration',
        },
        body: {
          fr: 'Développement de l’API Laravel et du back-office : gestion des dépanneurs, vérifications, demandes, services et campagnes de notification.',
          en: 'Built the Laravel API and back office for professional management, verification, requests, services and notification campaigns.',
        },
      },
    ],
    screenshots: [
      {
        src: '/projects/depanny/demande.jpg',
        label: {
          fr: 'Une demande reçue côté dépanneur',
          en: 'Incoming request in the professional app',
        },
        orientation: 'mobile',
      },
      {
        src: '/projects/depanny/offre.jpg',
        label: {
          fr: 'Proposer une intervention au conducteur',
          en: 'Sending an offer to the driver',
        },
        orientation: 'mobile',
      },
      {
        src: '/projects/depanny/accueil.jpg',
        label: {
          fr: 'L’application côté conducteur',
          en: 'The driver application',
        },
        orientation: 'mobile',
      },
    ],
  },
  {
    id: 'ifriquia',
    name: 'IfriquIA',
    kind: 'platform',
    platforms: ['Web', 'Back-office'],
    tech: ['Nuxt 4', 'Laravel', 'PostgreSQL', 'i18n'],
    year: '2026',
    collaboration: true,
    captureType: 'demo',
    purpose: {
      fr: 'Relier les entreprises aux talents du digital et aux appels d’offres.',
      en: 'Connect businesses with digital professionals and tender opportunities.',
    },
    context: {
      fr: 'Un annuaire public de prestataires, un espace client et professionnel, et un back-office de modération. La plateforme rassemble recherche de talents, appels d’offres, candidatures et actualités. Le projet a aussi porté le nom TicTech.',
      en: 'A public professional directory, a client and professional workspace, and a moderation back office. The platform brings together talent search, tenders, applications and news. The project was previously named TicTech.',
    },
    role: {
      fr: 'Développement full stack',
      en: 'Full-stack development',
    },
    contributions: [
      {
        title: {
          fr: 'Trois interfaces reliées à la même API',
          en: 'Three interfaces connected to one API',
        },
        body: {
          fr: 'Développement du site public, de l’espace client/pro et du back-office Nuxt, avec leur intégration à l’API Laravel.',
          en: 'Built the Nuxt public site, client/professional workspace and back office, integrating them with the Laravel API.',
        },
      },
      {
        title: {
          fr: 'Annuaire et parcours métier',
          en: 'Directory and business workflows',
        },
        body: {
          fr: 'Recherche et filtrage des prestataires, profils, appels d’offres, candidatures et parcours d’abonnement.',
          en: 'Implemented professional search and filters, profiles, tenders, applications and subscription journeys.',
        },
      },
      {
        title: {
          fr: 'Refonte IfriquIA et contenu',
          en: 'IfriquIA refresh and content',
        },
        body: {
          fr: 'Contribution à la refonte des interfaces et du backend, aux rubriques d’actualités et au fonctionnement français, anglais et arabe.',
          en: 'Contributed to the interface and backend refresh, news sections and French, English and Arabic support.',
        },
      },
    ],
    screenshots: [
      {
        src: '/projects/ifriquia/accueil.jpg',
        label: {
          fr: 'Accueil public de la version IfriquIA',
          en: 'Public home page of the IfriquIA version',
        },
        orientation: 'desktop',
      },
    ],
  },
  {
    id: 'sahello',
    name: 'Sahello',
    kind: 'mobile',
    platforms: ['iOS', 'Android', 'Back-office'],
    tech: ['Flutter', 'Laravel', 'Nuxt', 'Notifications push'],
    year: '2026',
    collaboration: true,
    captureType: 'demo',
    purpose: {
      fr: 'Trouver un artisan et suivre les interventions depuis une seule plateforme.',
      en: 'Find a tradesperson and manage service requests on one platform.',
    },
    context: {
      fr: 'Un annuaire d’artisans avec des applications client et professionnel. Le back-office permet de gérer les profils, le catalogue des métiers, les interventions, les abonnements et la modération des avis.',
      en: 'A tradesperson directory with client and professional applications. The back office manages profiles, trade categories, interventions, subscriptions and review moderation.',
    },
    role: {
      fr: 'Développement full stack',
      en: 'Full-stack development',
    },
    contributions: [
      {
        title: {
          fr: 'Applications client et professionnel',
          en: 'Client and professional applications',
        },
        body: {
          fr: 'Développement des parcours Flutter : profils, recherche, réalisations, compte et suivi de l’activité professionnelle.',
          en: 'Built Flutter journeys covering profiles, search, portfolios, accounts and professional activity.',
        },
      },
      {
        title: {
          fr: 'Opérations et administration',
          en: 'Operations and administration',
        },
        body: {
          fr: 'Développement de l’API et des écrans de gestion des interventions, de leurs statuts, des filtres et du catalogue.',
          en: 'Built the API and administration screens for interventions, status updates, filters and the service catalogue.',
        },
      },
      {
        title: {
          fr: 'Intégrations et qualité d’usage',
          en: 'Integrations and usability',
        },
        body: {
          fr: 'Mise en place des notifications push, des icônes du catalogue et du traitement de la connectivité dans les applications.',
          en: 'Implemented push notifications, catalogue icons and connectivity handling in the applications.',
        },
      },
    ],
    screenshots: [
      {
        src: '/projects/sahello/dashboard.jpg',
        label: {
          fr: 'Gestion de la communauté et de l’activité',
          en: 'Community and activity administration',
        },
        orientation: 'desktop',
      },
    ],
  },
  {
    id: 'sanedni',
    name: 'Sanedni',
    kind: 'mobile',
    platforms: ['iOS', 'Android', 'Back-office'],
    tech: ['Flutter', 'Laravel', 'Nuxt', 'Google Places'],
    year: '2026',
    collaboration: true,
    captureType: 'demo',
    purpose: {
      fr: 'Aider les familles à trouver des spécialistes de l’accompagnement de l’enfant.',
      en: 'Help families find specialists in child support services.',
    },
    context: {
      fr: 'La plateforme rapproche familles et professionnels : recherche de spécialistes, localisation des cabinets, profils et messagerie. Les équipes disposent d’un back-office pour valider les professionnels et gérer l’activité.',
      en: 'The platform connects families and professionals through specialist search, practice locations, profiles and messaging. Teams use a back office to validate professionals and manage activity.',
    },
    role: {
      fr: 'Développement full stack',
      en: 'Full-stack development',
    },
    contributions: [
      {
        title: {
          fr: 'Recherche et carte',
          en: 'Search and map',
        },
        body: {
          fr: 'Développement de la recherche dans la zone visible de la carte, des regroupements de marqueurs et des interactions avec les fiches de spécialistes.',
          en: 'Built map-viewport search, marker clustering and interactions with specialist profiles.',
        },
      },
      {
        title: {
          fr: 'Adresse des cabinets',
          en: 'Practice addresses',
        },
        body: {
          fr: 'Intégration de la recherche d’adresses et des liens Google Maps, avec passage par un proxy API pour les services Places et Geocoding.',
          en: 'Integrated address search and Google Maps links through an API proxy for Places and Geocoding.',
        },
      },
      {
        title: {
          fr: 'Profils, messagerie et administration',
          en: 'Profiles, messaging and administration',
        },
        body: {
          fr: 'Travail sur les profils professionnels, les liens et numéros cliquables dans les messages, les sessions et le back-office.',
          en: 'Worked on professional profiles, clickable links and phone numbers in messages, session handling and the back office.',
        },
      },
    ],
    screenshots: [
      {
        src: '/projects/sanedni/dashboard.jpg',
        label: {
          fr: 'Vue d’ensemble et validation des spécialistes',
          en: 'Overview and specialist validation',
        },
        orientation: 'desktop',
      },
    ],
  },
  {
    id: 'mynoqta',
    name: 'MyNoqta',
    kind: 'mobile',
    platforms: ['iOS', 'Android', 'Back-office'],
    tech: ['Flutter', 'Laravel', 'Nuxt', 'QR code'],
    year: '2026',
    collaboration: true,
    captureType: 'demo',
    purpose: {
      fr: 'Réunir fidélité, points et offres des commerces dans une application.',
      en: 'Bring loyalty points and local merchant offers into one app.',
    },
    context: {
      fr: 'Une application pour retrouver des offres, cumuler des points et utiliser ses cartes de fidélité. Les commerçants disposent d’une application professionnelle et les équipes d’un back-office de gestion.',
      en: 'An app for discovering offers, earning points and using loyalty cards. Merchants have a professional application and administrators a management back office.',
    },
    role: {
      fr: 'Développement full stack',
      en: 'Full-stack development',
    },
    contributions: [
      {
        title: {
          fr: 'Expérience client et commerçant',
          en: 'Customer and merchant experience',
        },
        body: {
          fr: 'Développement des applications Flutter, du catalogue d’offres, des cartes et des parcours de scan QR.',
          en: 'Built Flutter applications, the offer catalogue, loyalty cards and QR scanning journeys.',
        },
      },
      {
        title: {
          fr: 'API métier et scan',
          en: 'Business API and scanning',
        },
        body: {
          fr: 'Travail sur l’API, les scans idempotents, les points, l’historique de paiement et la recherche des commerces.',
          en: 'Worked on the API, idempotent scans, loyalty points, payment history and merchant search.',
        },
      },
      {
        title: {
          fr: 'Notifications et back-office',
          en: 'Notifications and back office',
        },
        body: {
          fr: 'Intégration des notifications, amélioration des parcours de compte et développement du back-office Nuxt.',
          en: 'Integrated notifications, improved account journeys and developed the Nuxt back office.',
        },
      },
    ],
    screenshots: [
      {
        src: '/projects/mynoqta/accueil.jpg',
        label: {
          fr: 'Accueil, catégories et points de fidélité',
          en: 'Home, categories and loyalty points',
        },
        orientation: 'mobile',
      },
      {
        src: '/projects/mynoqta/offre.jpg',
        label: {
          fr: 'Découverte d’une offre commerçant',
          en: 'Exploring a merchant offer',
        },
        orientation: 'mobile',
      },
      {
        src: '/projects/mynoqta/carte.jpg',
        label: {
          fr: 'Cartes de fidélité dans l’application',
          en: 'In-app loyalty cards',
        },
        orientation: 'mobile',
      },
    ],
  },
  {
    id: 'piete-bienfaisance',
    name: 'Piété Bienfaisance',
    kind: 'mobile',
    platforms: ['iOS', 'Android', 'Back-office'],
    tech: ['Flutter', 'Laravel', 'Nuxt', 'SlickPay'],
    year: '2026',
    collaboration: true,
    captureType: 'demo',
    purpose: {
      fr: 'Présenter des collectes solidaires et permettre de faire un don depuis son téléphone.',
      en: 'Present charity campaigns and let people donate from their phone.',
    },
    context: {
      fr: 'Une application de dons avec des objectifs de collecte, le suivi des contributions et un paiement intégré. Le back-office aide l’association à gérer les objectifs, les donateurs et les dons.',
      en: 'A donation app with fundraising goals, contribution tracking and integrated payments. The back office helps the association manage campaigns, donors and donations.',
    },
    role: {
      fr: 'Développement full stack',
      en: 'Full-stack development',
    },
    contributions: [
      {
        title: {
          fr: 'Application et API de collecte',
          en: 'Fundraising application and API',
        },
        body: {
          fr: 'Développement de l’application Flutter, de l’API Laravel et du back-office Nuxt pour les collectes et les contributions.',
          en: 'Built the Flutter app, Laravel API and Nuxt back office for campaigns and contributions.',
        },
      },
      {
        title: {
          fr: 'Paiement dans l’application',
          en: 'In-app payment',
        },
        body: {
          fr: 'Intégration SlickPay, des parcours SATIM/CIB et de la WebView de paiement, avec gestion du retour et des fenêtres 3DS.',
          en: 'Integrated SlickPay, SATIM/CIB flows and the payment WebView, including return handling and 3DS pop-ups.',
        },
      },
      {
        title: {
          fr: 'Administration et fiabilité',
          en: 'Administration and reliability',
        },
        body: {
          fr: 'Gestion des dons et donateurs, authentification par code et travail sur le stockage, les permissions et les contrôles des opérations.',
          en: 'Implemented donor and donation management, code-based authentication, storage, permissions and operation checks.',
        },
      },
    ],
    screenshots: [
      {
        src: '/projects/pbf/dashboard.jpg',
        label: {
          fr: 'Suivi des collectes, objectifs et donateurs',
          en: 'Campaign, goal and donor monitoring',
        },
        orientation: 'desktop',
      },
    ],
  },
]

export const featuredProjects = projects.slice(0, 3)
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
export function getAdjacentProjects(id: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((project) => project.id === id)
  if (index < 0) return { prev: null, next: null }
  return { prev: projects[index - 1] ?? null, next: projects[index + 1] ?? null }
}
