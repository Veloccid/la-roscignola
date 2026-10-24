import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Il sito resta statico; solo /api/* gira come funzione su Vercel (prerender = false).
export default defineConfig({
  site: 'https://la-roscignola.vercel.app',
  adapter: vercel(),
});
