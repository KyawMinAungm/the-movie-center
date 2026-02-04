# The Movie Center

A lightweight Next.js app that showcases movies with reusable UI components and Tailwind CSS.

## Features

- Browse movie cards and image-driven layouts
- Reusable components: hero, badges, cards, navbar
- Built with Next.js, TypeScript, Tailwind CSS and Framer Motion

## Tech Stack

- Next.js 14
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion, react-icons

## Getting Started

Prerequisites: Node.js (v18+) and a package manager (npm, pnpm, or yarn).

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

Lint the project:

```bash
npm run lint
```

Open http://localhost:3000 in your browser.

## Project Structure

- [app](app) — Next.js App Router files (`layout.tsx`, `page.tsx`, global styles)
- [components](components) — UI components used across the site
  - [components/Hero.tsx](components/Hero.tsx)
  - [components/MovieCard.tsx](components/MovieCard.tsx)
  - [components/MovieList.tsx](components/MovieList.tsx)
  - [components/ImageCard.tsx](components/ImageCard.tsx)
  - [components/Badge.tsx](components/Badage.tsx)
  - [components/Navbar.tsx](components/Navbar.tsx)
- [lib](lib) — utilities and motion helpers
- [public](public) — static assets

## Development notes

- UI primitives are under `components/ui` (card, button)
- Styling is done with Tailwind; see `tailwind.config.ts`
- Animation helpers are in `lib/motion.ts`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Open a pull request

## License

This project is provided without a license. Add one if you intend to open-source it.

