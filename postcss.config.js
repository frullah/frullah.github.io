const plugins = [
  require('postcss-nested'),
  require('tailwindcss')('./tailwind.config.js'),
  require('autoprefixer')
]

if (process.env.NODE_ENV === 'production') {
  const cssnano = require('cssnano')({
    preset: [
      'default',
      {
        discardComments: { removeAll: true }
      }
    ]
  })
  const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.svelte', './node_modules/tippy.js/dist/tippy.css'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    safelist: [
      'body',
      'html'
    ]
  })
  plugins.push(purgecss)
  plugins.push(cssnano)
}

module.exports = {
  plugins
}
