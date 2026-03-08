import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mastermike501.github.io',
  integrations: [sitemap()],
});
