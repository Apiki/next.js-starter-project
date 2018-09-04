const { join } = require('path');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const paths = {
  src: join(__dirname, 'src'),
  static: join(__dirname, 'static'),
};

const alias = {
  static: paths.static,
  helpers: join(paths.src, 'helpers'),
  pages: join(paths.src, 'pages'),
  reducers: join(paths.src, 'reducers'),
  requests: join(paths.src, 'requests'),
  routes: join(__dirname, 'routes.js'),
  '@styles': join(paths.src, 'styles'),
  '@components': join(paths.src, 'components'),
};

module.exports = withSass(
  withImages(
    withFonts({
      distDir: '../dist',
      webpack(config) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|jsx|css|scss)$/,
            loader: 'import-glob',
          },
        );

        config.resolve.alias = Object.assign({}, config.resolve.alias, alias);

        config.plugins.push(
          new StyleLintPlugin({
            configFile: '.stylelintrc.json',
            context: paths.src,
            emitErrors: true,
          }),
        );
        return config;
      },
    }),
  ),
);
