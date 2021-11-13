const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.svelte"
  ],
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
}