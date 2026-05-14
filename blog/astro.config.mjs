import { defineConfig } from 'astro/config'

// Served from the main site: https://manuelmejia.io/blog/...
export default defineConfig({
  site: 'https://manuelmejia.io',
  base: '/blog/',
  output: 'static',
  trailingSlash: 'never',
  outDir: '../docs/blog',
})
