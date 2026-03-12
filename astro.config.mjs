// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  headers: [
    {
      source: '/*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "script-src 'self' 'unsafe-inline' 'unsafe-eval';"
        }
      ]
    }
  ]
});
