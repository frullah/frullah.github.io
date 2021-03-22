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
    extend: {
      colors: {
        primary: colors.blue,
        accent: colors.blue[600],
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
