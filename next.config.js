const { join } = require('path');
const withSass = require('@zeit/next-sass');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const paths = {
  pages: join(__dirname, 'src', 'pages'),
  shared: join(__dirname, 'src', 'shared'),
};

module.exports = withSass({
  // build folder destiny
  distDir: '../dist',

  // webpack custom config
  webpack(config) {
    // rules
    config.module.rules.push(
      {
        enforce: 'pre',
        test: /\.(js|jsx|css|scss)$/,
        loader: 'import-glob',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
        include: join(__dirname, '..', 'src'),
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[hash:8].[ext]',
          },
        },
      },
    );

    // aliases
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      pages: paths.pages,
      shared: paths.shared,
      '@styles': join(paths.shared, 'styles'),
      '@components': join(paths.shared, 'components'),
    });

    // plugins
    config.plugins.push(
      new StyleLintPlugin({
        configFile: '.stylelintrc.json',
        context: './src',
        emitErrors: true,
      }),
    );

    return config;
  },
});
