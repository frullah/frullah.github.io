const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/components/**/*.svelte",
    "./src/routes/**/*.svelte"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo
      },
      textColor: {
        'body-color': 'var(--text-body)'
      }
    }
  },
}