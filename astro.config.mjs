import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://so134.github.io',
  base: '/image-generator',
  server: {
    port: 4321,
    host: true
  }
});