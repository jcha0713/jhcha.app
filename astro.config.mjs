import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  publicDir: './public',
  outDir: './dist',
  site: 'https://jhcha.app',
  integrations: [tailwind()],
  build: {
    format: 'directory',
  },
  markdown: {
    render: ['@astrojs/markdown-remark'],
    shikiConfig: {
      // Choose from Shiki's built-in themes
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
      theme: 'nord',
      // Manually specify langs
      // Note: Shiki has countless langs built-in, including .astro!
      langs: ['astro', 'javascript'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
})
