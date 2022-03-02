const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  // darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Suit', 'ObjectSans', ...defaultTheme.fontFamily.sans],
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

        // Background color
        'light-bg': 'var(--light-bg)',
        'dark-bg': 'var(--dark-bg)',

        // Text color
        'light-text': 'var(--light-text)',
        'dark-text': 'var(--dark-text)',

        // Border color
        'light-border': 'var(--light-border)',
        'dark-border': 'var(--dark-border)',
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
      typography: ({ theme }) => ({
        light: {
          css: {
            '--tw-prose-body': theme('colors.light-text'),
            '--tw-prose-headings': theme('colors.light-text'),
            '--tw-prose-lead': theme('colors.light-text'),
            '--tw-prose-links': theme('colors.light-text'),
            '--tw-prose-bold': theme('colors.light-text'),
            '--tw-prose-counters': theme('colors.light-text'),
            '--tw-prose-bullets': theme('colors.light-text'),
            '--tw-prose-hr': theme('colors.light-border'),
            '--tw-prose-quotes': theme('colors.light-text'),
            '--tw-prose-quote-borders': theme('colors.light-text'),
            '--tw-prose-captions': theme('colors.light-text'),
            '--tw-prose-code': theme('colors.light-text'),
            '--tw-prose-pre-code': theme('colors.light-text'),
            '--tw-prose-pre-bg': theme('colors.neutral[300]'),
            '--tw-prose-th-borders': theme('colors.light-border'),
            '--tw-prose-td-borders': theme('colors.light-border'),
            '--tw-prose-invert-body': theme('colors.dark-text'),
            '--tw-prose-invert-headings': theme('colors.dark-text'),
            '--tw-prose-invert-lead': theme('colors.dark-text'),
            '--tw-prose-invert-links': theme('colors.dark-text'),
            '--tw-prose-invert-bold': theme('colors.dark-text'),
            '--tw-prose-invert-counters': theme('colors.dark-text'),
            '--tw-prose-invert-bullets': theme('colors.dark-text'),
            '--tw-prose-invert-hr': theme('colors-dark-border'),
            '--tw-prose-invert-quotes': theme('colors.dark-text'),
            '--tw-prose-invert-quote-borders': theme('colors.dark-text'),
            '--tw-prose-invert-captions': theme('colors.dark-text'),
            '--tw-prose-invert-code': theme('colors.dark-text'),
            '--tw-prose-invert-pre-code': theme('colors.dark-text'),
            '--tw-prose-invert-pre-bg': theme('colors.neutral[900]'),
            '--tw-prose-invert-th-borders': theme('colors.dark-border'),
            '--tw-prose-invert-td-borders': theme('colors.dark-border'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
