# Vamsi Seemakurthi — Growth & Marketing Analytics Portfolio

A dark-first, data-driven personal portfolio for a growth analytics professional. Built with **Next.js (App Router)** and **Tailwind CSS**, designed to put quantified impact — NPV, bookings, conversion lifts — in front of a recruiter within the first five seconds.

## Highlights

- **Metric-forward hero** with animated counters ($15M+ NPV, 60K+ bookings, 10× audience growth)
- **Case-study cards** for the top three acquisition programs, each anchored by a headline dollar figure
- **Experience timeline**, grouped skills matrix, and certification badges
- **Dark / light theme toggle** (dark by default, persisted in `localStorage`)
- **Subtle motion**: scroll-reveal sections, hover-lift cards, animated stat counters — all honoring `prefers-reduced-motion`
- **Zero runtime dependencies** beyond Next.js and React — no environment variables required

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create a production build (static export to `out/`):

```bash
npm run build
```

The site deploys automatically to [vamsiseemaku.github.io](https://vamsiseemaku.github.io) via GitHub Actions on every push to `main`.

## Project structure

```
├── app/
│   ├── layout.tsx        # Root layout, fonts, SEO metadata + JSON-LD, theme bootstrap
│   ├── page.tsx          # Single-page composition of all sections
│   ├── globals.css       # Design tokens (CSS variables), grid backdrop, reveal animation
│   ├── robots.ts         # robots.txt (generated)
│   ├── sitemap.ts        # sitemap.xml (generated)
│   └── icon.svg          # Favicon (bar-chart mark)
├── components/
│   ├── Navbar.tsx        # Fixed nav with theme toggle + mobile menu
│   ├── Hero.tsx          # Tagline, CTAs, animated impact stats
│   ├── About.tsx         # Narrative, working principles, education
│   ├── FeaturedWork.tsx  # Three flagship case studies + secondary project grid
│   ├── Experience.tsx    # Vertical career timeline
│   ├── Skills.tsx        # Grouped skill matrix + certifications
│   ├── Contact.tsx       # Call-to-action panel with email / LinkedIn
│   ├── Footer.tsx
│   ├── Reveal.tsx        # IntersectionObserver scroll-reveal wrapper
│   ├── SectionHeading.tsx
│   └── Counter.tsx       # Eased count-up animation for metrics
├── lib/
│   └── data.ts           # ALL site content lives here — edit this file to update the site
└── public/
    ├── headshot.jpg      # Portrait shown in the hero
    ├── logos/            # Company logos for the experience timeline
    └── Vamsi-Seemakurthi-Resume.pdf   # Viewable/downloadable résumé
```

## SEO

The site ships with a keyword-rich title/description, Open Graph + Twitter cards, JSON-LD `Person` structured data, `robots.txt`, and `sitemap.xml`. **After deploying, update `siteUrl` at the top of [`lib/data.ts`](lib/data.ts) to the real domain** — it drives canonical URLs, OG tags, robots, and the sitemap.

## Editing content

Every word on the site — name, tagline, case studies, experience bullets, skills, contact details — lives in [`lib/data.ts`](lib/data.ts). Update that one file and the entire site re-renders; no component changes needed.

## Theming

Colors are defined as CSS variables in [`app/globals.css`](app/globals.css) (`:root` for light mode, `.dark` for dark mode) and mapped to Tailwind tokens (`bg`, `surface`, `edge`, `ink`, `muted`, `accent`, `accent2`) in `tailwind.config.js`. Change the accent RGB values in one place to re-skin the whole site.

## Tech

- [Next.js 14](https://nextjs.org/) — App Router, React Server Components
- [Tailwind CSS 3](https://tailwindcss.com/) — utility-first styling with CSS-variable theming
- TypeScript throughout, fully responsive, no environment variables
