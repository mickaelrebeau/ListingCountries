# CountryListing

Application Nuxt 3 de catalogue de pays, consommant l'API GraphQL publique [Countries](https://countries.trevorblades.com/graphql). Elle permet d'explorer, filtrer et consulter les fiches pays dans une interface responsive et soignée.

## Prérequis

- **Node.js** >= 18.x
- **pnpm** >= 9.x (gestionnaire de paquets utilisé sur le projet)
- **Docker** et **Docker Compose** (pour le lancement conteneurisé)

## Installation en local

```bash
# Cloner le dépôt
git clone <url-du-repo>
cd CountryListing

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

### Build de production (sans Docker)

```bash
pnpm build
pnpm preview
```

## Lancement via Docker

```bash
# Construire et lancer l'application
docker compose up --build

# En arrière-plan
docker compose up --build -d
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

Pour arrêter :

```bash
docker compose down
```

## Fonctionnalités

### Page listing — `/countries`

- Liste de pays avec nom, code ISO, emoji drapeau et continent
- Recherche textuelle (case-insensitive, avec debounce)
- Filtre par continent via un sélecteur
- État de chargement (skeleton)
- Gestion d'erreur avec bouton « Réessayer »
- Filtres persistés dans la query string (`?q=fra&continent=EU`)

### Page détail — `/countries/:code`

- Fiche complète : nom, emoji, continent, capitale, devise, langues
- Suggestions de pays voisins (même continent, 5 max)
- Bouton retour conservant les filtres actifs
- Balise `<title>` dynamique pour le SEO

## Choix techniques

| Sujet | Choix | Justification |
|-------|-------|---------------|
| **Framework** | Nuxt 3 + TypeScript | SSR, routing automatique, DX moderne |
| **UI** | Nuxt UI v3 | Composants accessibles et stylisés, thème cohérent, responsive intégré |
| **Client GraphQL** | `graphql-request` | Léger (~5 kB), API simple, parfait pour des requêtes statiques sans cache complexe |
| **Architecture** | `pages/`, `components/`, `composables/`, `layouts/` | Convention Nuxt standard, lisibilité immédiate |
| **Gestion d'état filtres** | Query string (`useRoute` / `useRouter`) | Partageabilité des URLs, conservation des filtres au retour |
| **Accessibilité** | `@nuxt/a11y` | Audit automatique en développement |
| **Linting** | `@nuxt/eslint` | Cohérence du code, intégré à Nuxt |
| **Docker** | Multi-stage build | Image finale légère (node:alpine), séparation build/runtime |

## Structure du projet

```
CountryListing/
├── app.vue                     # Shell principal (NuxtLayout + NuxtPage)
├── layouts/
│   └── default.vue             # Layout global (header, footer, slot)
├── pages/
│   ├── index.vue               # Redirection vers /countries
│   ├── countries/
│   │   ├── index.vue           # Page listing
│   │   └── [code].vue          # Page détail pays
├── components/
│   ├── CountryCard.vue         # Carte pays (listing)
│   ├── CountryGrid.vue         # Grille de cartes
│   ├── CountryDetail.vue       # Fiche détail pays
│   ├── CountryNeighbors.vue    # Suggestions pays voisins
│   ├── SearchInput.vue         # Champ de recherche avec debounce
│   ├── ContinentFilter.vue    # Sélecteur de continent
│   ├── AppHeader.vue           # En-tête de l'application
│   ├── ErrorState.vue          # État d'erreur avec bouton réessayer
│   └── LoadingSkeleton.vue     # Skeleton de chargement
├── composables/
│   ├── useGraphql.ts           # Client GraphQL (graphql-request)
│   ├── useCountries.ts         # Fetching + logique listing pays
│   ├── useCountryDetail.ts     # Fetching détail d'un pays
│   └── useContinents.ts        # Fetching liste des continents
├── types/
│   └── country.ts              # Interfaces TypeScript (Country, Continent, etc.)
├── Dockerfile
├── docker-compose.yml
├── nuxt.config.ts
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## Améliorations possibles (avec plus de temps)

- **Tests** : tests unitaires des composables avec Vitest, tests de composants avec `@vue/test-utils`, tests E2E avec Playwright
- **Pagination / virtualisation** : pour un volume de données plus important, virtualiser la liste avec `vue-virtual-scroller`
- **Cache GraphQL** : passer à `@apollo/client` ou `urql` pour bénéficier d'un cache normalisé et de requêtes optimistes
- **i18n** : internationalisation de l'interface avec `@nuxtjs/i18n`
- **UI** : amélioration de l'aspect visuel de l'application pour la rendre plus user friendly et moderne
- **Dark mode** : toggle clair/sombre (Nuxt UI le supporte nativement)
- **Animations** : transitions de page et micro-animations pour enrichir l'UX
- **PWA** : mode hors-ligne avec `@vite-pwa/nuxt`
- **CI/CD** : pipeline GitHub Actions (lint, tests, build Docker, déploiement)
- **Monitoring** : exploitation de `@artmizu/nuxt-prometheus` déjà installé pour exposer les métriques applicatives
