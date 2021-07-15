const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}', 
    './components/**/*.{js,jsx,ts,tsx}', 
    './build/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      green: '#4d5b51',
      cream: '#f9f8f4',
      red: '#b83b5e'
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