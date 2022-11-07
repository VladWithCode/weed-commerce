/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#40005b',
        secondary: '#FF57B7',
        accents: '#E2AAF4',
        aux_1: '#FF5D8F',
        aux_2: '#E67AB8',
        light: '#F0F0F0',
        dark: '#07090E',
      },
      gridTemplateRows: {
        hero: 'minmax(5rem, 1fr) repeat(2, minmax(max-content, 30vh))',
      },
    },
  },
  plugins: [],
};
