const { colors, padding } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        accent: colors.blue['600'],
        primary: colors.blue
      },
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
