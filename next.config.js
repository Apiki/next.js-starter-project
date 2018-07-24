const withSass = require('@zeit/next-sass')
const { join } = require('path')

const paths = {
  pages: join(__dirname, 'src', 'pages'),
  shared: join(__dirname, 'src', 'shared'),
}

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[hash:base64:5]-[local]",
  },

  // build folder destiny
  distDir: '../dist',

  // webpack custom config
  webpack: function(config) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      pages: paths.pages,
      shared: paths.shared,
      '@styles': join(paths.shared, 'styles'),
      '@components': join(paths.shared, 'components'),
    })

    return config
  }
})