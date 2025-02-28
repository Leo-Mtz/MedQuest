import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',  // Set the output mode to 'server' for SSR
  adapter: node({
    mode: 'standalone' // 'standalone' for self-hosted Node server or 'middleware' for middleware usage
  })
});