// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import { jsx } from 'preact/jsx-runtime';

import alpinejs from '@astrojs/alpinejs';

import react from '@astrojs/react';

import solidJs from '@astrojs/solid-js';

import svelte from '@astrojs/svelte';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: "https://seongbae-tutorial-astro.netlify.app/",
  integrations: [preact(), alpinejs(), react(), solidJs(), svelte(), vue()],
  base: '/',
  trailingSlash : 'ignore',
  redirects : {
    '/hi': '/blog',
    '/hello': '/about'
  },
  output : 'server' // SSR 방식
});