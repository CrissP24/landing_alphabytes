import { defineConfig } from 'astro/config';

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: process.env.SITE_URL || (vercelUrl ? `https://${vercelUrl}` : 'https://landing-alphabytes.vercel.app'),
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'always',
  },
});
