const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/components/**/*.svelte',
    './src/routes/**/*.svelte'
  ],
  theme: {
    colors: {
      accent: colors.blue['600'],
      primary: colors.blue,
      orange: colors.orange,
      gray: colors.gray,
      white: colors.white,
      red: colors.red,
    },
    extend: {
      screens: {
        sm: '600px'
      }
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem'
      },
      screens: {
        xl: '1024px'
      }
    }
  },
  corePlugins: {
    animation: false
  },
  variants: {},
  plugins: []
}
