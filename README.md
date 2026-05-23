# ai-for-asia

**Learn. Lead. Innovate.** — A regional fellowship empowering young leaders across ASEAN to thrive in an AI-driven future.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

---

## Overview

AI for ASIA is a 10-week fellowship program connecting the next generation of leaders across Southeast Asia. The website serves as the program's public face — showcasing the mission, past speakers, outstanding fellows, program areas, and impact across 8 ASEAN countries.

Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**, featuring a dark-themed design system with animated gradients, glass-morphism effects, and scroll-triggered reveals.

---

## Technology Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI Library | React 19 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 |
| Animations | Motion (Framer Motion) |
| Components | shadcn/ui (Radix UI primitives) |
| Icons | Lucide React |
| Data Fetching | TanStack Query v5 |
| Charts | Recharts |
| Forms | React Hook Form |
| Font | Space Grotesk (Google Fonts) |

---

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles + design tokens
│   │   ├── layout.tsx     # Root layout + metadata
│   │   └── page.tsx       # Landing page
│   ├── components/
│   │   ├── site/          # Page sections (Hero, Nav, About, etc.)
│   │   └── ui/            # shadcn/ui primitives (button, dialog, etc.)
│   ├── hooks/             # Shared React hooks
│   ├── lib/               # Utilities (cn, etc.)
│   └── scripts/           # Local build scripts
├── public/
│   ├── logo.png
│   └── scraped/           # Speaker, fellow, and section images
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

---

## Key Features

- **Animated landing page** — scroll-triggered reveals, floating orbs, gradient backdrops
- **Glass-morphism navbar** — fixed header with backdrop blur and smooth entrance animation
- **Speaker showcase** — grid of past speakers from the UN, Microsoft, Oxford, and ASEAN institutions
- **Fellow testimonials** — quotes and profiles from the 2025 cohort
- **Program areas** — six focus areas: AI Literacy, Policy & Ethics, Entrepreneurship, Workforce, Innovation, Community
- **Impact stats** — reach across 8 ASEAN countries, 57 fellows, 6 high-level sessions
- **Responsive design** — mobile-first with adaptive layouts
- **SEO optimized** — Open Graph and Twitter card metadata

---

## Design System

The site uses a custom dark theme with a 5-color brand gradient:

```
#0060BA → #336FCF → #8561C5 → #C671AF → #E39297
```

Custom utility classes include `.text-gradient`, `.glass`, `.grid-bg`, `.bg-gradient-radial`, and several keyframe animations (`float`, `shimmer`, `pulse-glow`, `gradient-shift`).

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## License

Private — all rights reserved.
