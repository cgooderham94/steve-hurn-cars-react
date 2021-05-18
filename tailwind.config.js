const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
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