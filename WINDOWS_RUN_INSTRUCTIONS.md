# Windows Run Instructions

This project uses **Tailwind CSS v4 through `@tailwindcss/vite`**. It does not require the old `tailwindcss` PostCSS plugin configuration.

## Recommended clean start

Open Command Prompt in the project folder and run:

```bat
rmdir /s /q node_modules 2>nul
if exist postcss.config.js del /f /q postcss.config.js
if exist postcss.config.cjs del /f /q postcss.config.cjs
if exist postcss.config.mjs del /f /q postcss.config.mjs
if exist .postcssrc del /f /q .postcssrc
if exist .postcssrc.json del /f /q .postcssrc.json
npm install
npm run dev
```

Then open:

`http://localhost:3000/`

## Production build

Use:

```bat
npm run build
```

Do not use `npm build`; npm scripts are run with `npm run <script>`.

## Why the previous PostCSS error happened

An older `postcss.config.*` file in an existing extraction folder can contain this Tailwind v3-style configuration:

```js
plugins: {
  tailwindcss: {},
  autoprefixer: {},
}
```

Tailwind CSS v4 no longer allows `tailwindcss` to be loaded directly as a PostCSS plugin. This project now explicitly supplies an inline PostCSS configuration in `vite.config.ts`, which prevents Vite from automatically loading that stale external config.
