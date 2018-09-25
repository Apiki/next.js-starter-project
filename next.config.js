const { join, resolve } = require('path');
const withSass = require('@zeit/next-sass');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const paths = {
  src: join(__dirname, 'src'),
  static: join(__dirname, 'static'),
  reduxFlow: join(__dirname, 'src', 'redux-flow'),
};

const alias = {
  static: paths.static,
  helpers: join(paths.src, 'helpers'),
  pages: join(paths.src, 'pages'),
  reducers: join(paths.reduxFlow, 'reducers'),
  requests: join(paths.src, 'requests'),
  routes: join(__dirname, 'routes.js'),
  lib: join(paths.src, 'lib'),
  'redux-flow': paths.reduxFlow,
  '@styles': join(paths.src, 'styles'),
  '@components': join(paths.src, 'components'),
};

module.exports = withSass({
  distDir: '../dist',
  webpack(config, options) {
    config.module.rules.push(
      {
        enforce: 'pre',
        test: /\.(js|jsx|css|scss)$/,
        loader: 'import-glob',
      },
      {
        test: /\.scss$/,
        loader: 'sass-resources-loader',
        options: {
          resources: [
            resolve(__dirname, './src/styles/01-settings/*.scss'),
            resolve(__dirname, './src/styles/02-tools/**/*.scss'),
          ],
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: '/_next/static/fonts/',
              outputPath: 'static/fonts/',
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: '/_next/static/images/',
              outputPath: `${options.isServer ? '../' : ''}static/images/`,
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      },
    );

    config.resolve.alias = Object.assign(
      {},
      config.resolve.alias,
      alias,
    );

    config.plugins.push(
      new StyleLintPlugin({
        configFile: '.stylelintrc.json',
        context: paths.src,
        emitErrors: true,
      }),
    );
    return config;
  },
});
