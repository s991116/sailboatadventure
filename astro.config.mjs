// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
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
