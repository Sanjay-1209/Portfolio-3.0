# Sanjay Dharan — Portfolio

A premium, Ting-inspired personal portfolio built with Next.js 14, TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `src/app` — routes: `/`, `/about`, `/experience`, `/work`, `/recommendations`, `/contact`
- `src/components` — all UI components (Hero, ImpactMetrics, SkillsMatrix, ExperienceTimeline, ProjectStory, RecommendationCard, TingTransition, etc.)
- `src/data` — all structured content (profile, experience, projects, skills, recommendations). Edit these files to update any content on the site.

## Notes

- Fonts (Space Grotesk, DM Sans) are self-hosted via @fontsource, so the build works fully offline — no dependency on Google Fonts at build time.
- Profile and recommendation images load from their original remote URLs (ibb.co, LinkedIn CDN) with an automatic initials-avatar fallback if a URL ever expires.
- Respects prefers-reduced-motion throughout (particle background, counters, reveal animations).
- Deploy anywhere that supports Next.js (Vercel, Netlify, etc.). If deploying to Netlify, use the Next.js Runtime plugin (auto-detected).
