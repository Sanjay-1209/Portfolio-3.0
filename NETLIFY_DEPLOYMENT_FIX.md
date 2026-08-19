# Netlify deployment fix

This repository is a Vite + React application. It builds into `dist/`, not `.next/`.

## Correct Netlify settings

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: 22

The repository now includes `netlify.toml`, so the build command and publish directory are stored with the code.

## One-time Netlify dashboard cleanup

The existing Netlify project has the Next.js Runtime / `@netlify/plugin-nextjs` enabled in the Netlify UI. Disable it once:

1. Open the Netlify project.
2. Go to **Project configuration → Build & deploy → Build plugins**.
3. Find the **Next.js Runtime / @netlify/plugin-nextjs** plugin and select **Disable**.
4. Go to **Project configuration → Build & deploy → Continuous deployment → Build settings**.
5. Ensure build command is `npm run build` and publish directory is `dist` (the `netlify.toml` file should override stale UI build values, but cleaning the UI prevents confusion).
6. Trigger a fresh deploy. If Netlify offers a cache-clear deploy, use it once to remove stale Next.js cache metadata.

Do not set the publish directory to `.next`; this repository does not generate `.next` output.
