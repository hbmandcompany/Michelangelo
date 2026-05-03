# Michelangelo — Marketing Site

Production-ready Next.js marketing experience for Michelangelo.agency: a single-scroll landing page aligned with restrained European luxury typography, motion, and accessibility.

## Requirements

- Node.js 20+
- npm (or compatible package manager)

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start Next.js in dev mode |
| `npm run build` | Production build      |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint              |

## Stack

- Next.js (App Router, React Server Components by default)
- TypeScript (strict)
- Tailwind CSS with the Michelangelo palette and typographic scale
- Framer Motion for scroll reveals and subtle interaction
- `next/font` for Cormorant Garamond, Crimson Pro, and JetBrains Mono

## Project structure

- `app/` — `layout.tsx`, `page.tsx`, `globals.css`
- `components/sections/` — full-viewport sections and feature deep dives
- `components/ui/` — navigation, footer, buttons, cards, icons
- `lib/` — fonts and shared motion variants
- `public/images`, `public/icons` — optional static assets

## Customization

- Replace placeholder links in `Footer`, `Ownership`, and `SocialLinks` with production URLs and legal pages.
- Swap programmatic UI mocks in `NotebookVisual`, `DrawingVisual`, and `StudioVisual` for captured product media when available.
- Wire the early-access form in `FinalCTA` to your API or form provider.

## License

Proprietary — © 2026 Hated By Many LLC. All rights reserved.
