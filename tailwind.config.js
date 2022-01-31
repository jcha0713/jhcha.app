const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ObjectSans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Theme colors
        primary: 'var(--primary-color)',
        'light-bg': 'var(--light-bg)',
        'dark-bg': 'var(--dark-bg)',

        // Text colors
        'light-text': 'var(--light-text)',
        'dark-text': 'var(--dark-text)',
      },
      gridTemplateRows: {
        tableRows: '50px minmax(0, 1fr)',
      },
      gridTemplateColumns: {
        nav: '1fr 2fr 1fr',
      },
    },
  },
}
