# Portfolio 3.0 — Upgrade Notes

## What changed

### Website development is now a priority
- Hero positioning explicitly leads with website development while retaining Data, BI, Engineering and Automation strengths.
- New `WebsiteStudioSpotlight` section presents the website build workflow and production proof.
- Flora Farming and Uyirveda Health Care are prioritized in featured projects and the Projects page.
- Web Development is first in the Services page ordering and receives a dedicated priority treatment.
- “More builds are cooking” language leaves a clear place for future launches.

### Ask Sanjay — no external AI
- Bottom-right portfolio assistant with 14 curated question choices.
- Short simulated thinking state plus progressive typewriter answer effect.
- No Gemini, OpenAI or external AI API.
- No API key required.
- Questions cover summary, websites, best service, proof, stack, hiring, contact, dashboards, Excel/reporting automation, ETL, industries, quotation tools and availability.

### SEO and AI/search discoverability
- Human-readable URLs (`/services`, `/projects`, `/experience`, etc.) instead of hash-only routing.
- Dynamic per-page title, description, canonical and Open Graph metadata.
- JSON-LD for Person, WebSite, ProfessionalService, project ItemList and FAQPage.
- `robots.txt`, `sitemap.xml`, `llms.txt`, `ai.txt`, `sanjay-profile.json` and web manifest.
- Build-time static route entry generation through `scripts/generate-static-routes.mjs`.
- Route-specific noscript summaries for low-JavaScript crawlers.
- Netlify rewrite, cache and basic security headers.

### UI / UX and mobile
- White / black / grey foundation with restrained premium yellow accents.
- Modern Plus Jakarta Sans typography system.
- More compact hero, page spacing, card spacing and section rhythm.
- Responsive tablet/mobile navigation.
- Hero proof metrics compacted for small screens.
- Quotation demo receives a dedicated mobile card layout rather than a wide desktop table.
- Reduced-motion accessibility support and improved keyboard focus styles.
- Floating assistant uses a mobile bottom-sheet layout.

### Visual assets and performance
- Added local compressed WebP project preview mockups for Flora Farming, Uyirveda and automation.
- Added local social-sharing OG image.
- Lazy loading for project preview imagery.
- Hero portrait gets high fetch priority while retaining the existing image URL and graceful local UI fallback.
- Reasonable asset cache duration so future portfolio visual updates propagate safely.

### Cleanup and deployment
- Removed unused Gemini / AI Studio scaffolding, Gemini environment variable instructions and AI package dependency.
- Removed unused Express, dotenv and motion dependencies.
- Updated project metadata and README.
- Netlify configuration supports clean route URLs.

## Validation performed
- TypeScript/TSX syntax transpilation check: passed.
- Local import resolution check: passed.
- Source semantic TypeScript check with external-library stubs: passed.
- `package.json` vs lockfile root dependency check: passed.
- JSON-LD parse validation: passed.
- Static route generator dry-run: passed for all seven generated route entry points.

A full dependency-backed Vite build could not be executed in the editing sandbox because the environment could not reach the npm registry. Run `npm install`, `npm run lint`, and `npm run build` in a normal networked Node.js environment before deployment.


## Tailwind v4 / Windows compatibility fix

- Vite now uses an **inline PostCSS configuration** so stale `postcss.config.*` files from an older extracted project cannot force Tailwind CSS v4 through the deprecated Tailwind v3 PostCSS plugin path.
- Tailwind continues to run through the official `@tailwindcss/vite` integration.
- Added `WINDOWS_RUN_INSTRUCTIONS.md` with clean Windows commands and the correct `npm run build` command.
