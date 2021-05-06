const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      green: '#4d5b51',
      cream: '#f9f8f4'
    },
    fontFamily: {
      'base': 'Optima, ui-sans-serif, system-ui, sans-serif'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}