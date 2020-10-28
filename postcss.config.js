const plugins = [
  require('postcss-import'),
  require("tailwindcss")('./tailwind.config.js'),
  require('autoprefixer')
]

if (process.env.NODE_ENV === 'production') {
  const cssnano = require('cssnano')
  const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["./src/**/*.svelte", './node_modules/tippy.js/dist/tippy.css'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    safelist: [
      'body',
      'html',
      'contact-icon',
      'fa-envelope',
      'fa-github-square',
      'fa-whatsapp-square',
      'tag',
      /tippy-/,
      /data-tippy-root/,
      'tippy-box[data-animation=scale-subtle][data-placement^=bottom]'
    ]
  })
  plugins.push(purgecss)
  plugins.push(cssnano)
}

module.exports = {
  syntax: 'postcss-scss',
  plugins
};
