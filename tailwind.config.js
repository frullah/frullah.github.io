const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  purge: [
    './src/components/**/*.svelte',
    './src/routes/**/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo
      },
      textColor: {
        'body-color': 'var(--text-body)'
      }
    },
    container: {
      center: true
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
