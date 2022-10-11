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
        primary: '#65317A',
        secondary: '#C25794',
        accents: '#E2AAF4',
        aux_1: '#FF5D8F',
        aux_2: '#E67AB8',
      },
    },
  },
  plugins: [],
};
