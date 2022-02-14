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
        mono: ['FraktionMono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Theme colors
        'primary-100': '#eff2f6',
        'primary-200': '#dee5ed',
        'primary-300': '#ced8e4',
        'primary-400': '#bdcbdb',
        'primary-500': '#adbed2',
        'primary-600': '#9cb1c9',
        'primary-700': '#8ea3be',
        'primary-800': '#7b97b7',
        'primary-900': '#6b8aae',

        'secondary-100': '#cbe1d7',
        'secondary-200': '#deede6',
        'secondary-300': '#deede6',
        'secondary-400': '#bddbcc',
        'secondary-500': '#add2bf',
        'secondary-600': '#9cc9b2',
        'secondary-700': '#8cc0a5',
        'secondary-800': '#7bb798',
        'secondary-900': '#6bae8b',

        hl: '#92d850',

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
      boxShadow: {
        1: '0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength); + 9%))',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              'word-break': 'break-all',
            },
            pre: {
              'overflow-x': 'auto',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
