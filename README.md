# Sanjay Dharan — Professional Portfolio

Production-ready React + TypeScript portfolio focused on **website development, data analytics, data engineering and business automation**.

## Highlights

- Website Development is positioned as a priority commercial service.
- Live website case studies: Flora Farming and Uyirveda Health Care.
- Responsive premium white / black / grey / yellow visual system.
- Compact mobile-first layouts and navigation.
- Static **Ask Sanjay** portfolio assistant with curated answers, a short thinking state and progressive typing. It does **not** use Gemini, OpenAI, or any external AI API.
- Search/AI discoverability: semantic metadata, JSON-LD, real route URLs, `robots.txt`, `sitemap.xml`, `llms.txt`, and `sanjay-profile.json`.
- Netlify SPA route fallback and production security/cache headers.
- Local optimized WebP project preview assets.

## Run locally

Prerequisite: Node.js 20+ (Node 22 recommended).

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate and build

```bash
npm run lint
npm run build
```

The production build is written to `dist/`.

## Netlify deployment

The included `netlify.toml` runs `npm run build`, publishes `dist`, and routes page URLs such as `/services` and `/projects` back to the React application.

## SEO / AI-readable endpoints

After deployment:

- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`
- `/sanjay-profile.json`

These files are intentionally public and summarize the same portfolio information shown on the website.

## Portfolio assistant

`src/components/assistant/PortfolioAssistant.tsx` contains the question bank and answers. Add new questions there as new projects or services launch. Because the assistant is deterministic, it has no API cost and cannot invent facts outside the curated portfolio answers.
