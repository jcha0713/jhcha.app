import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

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
  ],
  build: {
    format: 'directory',
  },
  markdown: {
    render: ['@astrojs/markdown-remark'],
    shikiConfig: {
      theme: 'slack-dark',
      langs: ['astro', 'javascript'],
      wrap: true,
    },
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
})
