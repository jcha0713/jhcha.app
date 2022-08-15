import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'

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
  ],
  app: {},
  build: {
    format: 'directory',
  },
  markdown: {
    render: ['@astrojs/markdown-remark'],
    shikiConfig: {
      theme: 'slack-dark',
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
