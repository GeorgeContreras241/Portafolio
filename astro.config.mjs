// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://porta-tau.vercel.app',
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            gsap: ['gsap'],
            vendor: ['astro']
          }
        }
      }
    }
  },

  build: {
    format: 'directory'
  },

  integrations: [sitemap()]
});