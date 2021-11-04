module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PhantomSans', 'sans-serif'],
        kor: ['Article'],
      },
    },
    colors: {
      // primary colors
      'primary-darker': 'var(--color-primary-darker)',
      'primary-dark': 'var(--color-primary-dark)',
      'primary-default': 'var(--color-primary)',
      'primary-light': 'var(--color-primary-light)',
      'primary-lighter': 'var(--color-primary-lighter)',
      // accent colors
      'accent-darker': 'var(--color-accent-darker)',
      'accent-dark': 'var(--color-accent-dark)',
      'accent-default': 'var(--color-accent)',
      'accent-light': 'var(--color-accent-light)',
      'accent-lighter': 'var(--color-accent-lighter)',
      // black and white
      white: 'var(--color-white)',
      black: 'var(--color-black)',
    },
  },
};
