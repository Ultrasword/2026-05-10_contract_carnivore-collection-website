# Carnivore Collections

A Next.js site showcasing carnivore-diet recipes and equipment.

## Stack

- Next.js 14 (App Router) + React 18
- TypeScript

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Routes

- `/` — landing page (hero, categories, grid, newsletter)
- `/recipes` and `/recipes/[course]` — recipe browse
- `/equipment` — equipment list

## Layout

- `app/` — routes and layouts
- `components/` — `layout/`, `sections/`, `recipe/`
- `lib/` — shared utilities and data
- `public/` — static assets
