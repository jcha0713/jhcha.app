import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import prefetch from '@astrojs/prefetch'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  publicDir: './public',
  outDir: './dist',
  site: 'https://jhcha.app',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    prefetch(),
    preact(),
  ],
  app: {},
  build: {
    format: 'directory',
  },
  markdown: {
    render: ['@astrojs/markdown-remark'],
    shikiConfig: {
      theme: 'vitesse-dark',
      langs: ['astro', 'javascript', 'html'],
      wrap: true,
    },
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  server: {
    port: 3002,
  },
})
