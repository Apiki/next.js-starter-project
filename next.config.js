const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[hash:base64:5]-[local]",
  },
  distDir: '../dist',
  webpack(config, options) {
    // Further custom configuration here
    return config
  }
})