import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import prefetch from '@astrojs/prefetch'
import preact from '@astrojs/preact'
import mdx from '@astrojs/mdx'
import { remarkReadingTime } from './src/lib/remark-reading-time.ts'
import image from '@astrojs/image'

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
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
    sitemap(),
    prefetch(),
    preact({
      compat: true,
    }),
    mdx(),
  ],
  build: {
    format: 'directory',
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
    render: ['@astrojs/markdown-remark'],
    shikiConfig: {
      theme: 'nord',
      langs: ['astro', 'javascript', 'html', 'lua'],
      wrap: false,
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
