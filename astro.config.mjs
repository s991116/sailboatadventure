// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sailboatadventure.dk',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'da'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    format: 'directory'
  },
  integrations: [mdx()],

  redirects: {
    '/gaster': '/join-our-journey/',
    '/gaster/': '/join-our-journey/',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
