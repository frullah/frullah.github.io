const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/components/**/*.svelte',
    './src/routes/**/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
