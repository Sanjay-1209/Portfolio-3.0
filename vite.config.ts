import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  // Tailwind CSS v4 is integrated through @tailwindcss/vite above.
  // Keeping PostCSS inline prevents Vite from auto-loading any stale
  // postcss.config.* file that may remain in an older extracted folder.
  // This specifically avoids the Tailwind v3 -> v4 PostCSS plugin error.
  css: {
    postcss: {
      plugins: [],
    },
  },
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});
