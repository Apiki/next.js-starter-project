const { join, resolve } = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const paths = {
  src: join(__dirname, '..', 'src'),
  static: join(__dirname, '..', 'static'),
};

const alias = {
  static: paths.static,
  helpers: join(paths.src, 'helpers'),
  routes: join(__dirname, 'routes.js'),
  '@styles': join(paths.src, 'styles'),
  '@components': join(paths.src, 'components'),
  'storybook-ui': join(__dirname, 'ui'),
  nodeModules: join(__dirname, '..', 'node_modules'),
};

module.exports = (baseConfig) => {
  baseConfig.module.rules.push(
    {
      enforce: 'pre',
      test: /\.(js|jsx|css|scss)$/,
      loader: 'import-glob',
    },
    {
      test: /\.(css|scss)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              resolve(__dirname, '..', 'src/styles/01-settings/*.scss'),
              resolve(__dirname, '..', 'src/styles/02-tools/**/*.scss'),
            ],
          },
        },
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: '/static/fonts/',
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
            publicPath: '/static/images/',
            outputPath: 'static/images/',
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    },
  );

  baseConfig.resolve.alias = Object.assign({}, baseConfig.resolve.alias, alias);

  baseConfig.plugins.push(
    new StyleLintPlugin({
      configFile: '.stylelintrc.json',
      context: paths.src,
      emitErrors: true,
    }),
  );

  return baseConfig;
};
