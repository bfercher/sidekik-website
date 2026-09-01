import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sidekik.cloud',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404') && !page.includes('/404/'),
    }),
  ],
});
