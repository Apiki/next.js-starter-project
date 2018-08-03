const { join } = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const paths = {
  pages: join(__dirname, '..', 'src', 'pages'),
  shared: join(__dirname, '..', 'src', 'shared'),
};

module.exports = (baseConfig) => {
  // rules
  baseConfig.module.rules.push(
    {
      enforce: 'pre',
      test: /\.(js|jsx|css|scss)$/,
      loader: 'import-glob',
    },
    {
      test: /\.(css|scss)$/,
      use: [ 'style-loader', 'css-loader', 'sass-loader']
    }
  );

  // aliases
  baseConfig.resolve.alias = Object.assign({}, baseConfig.resolve.alias, {
    pages: paths.pages,
    shared: paths.shared,
    '@styles': join(paths.shared, 'styles'),
    '@components': join(paths.shared, 'components'),
  });

  // plugins
  baseConfig.plugins.push(
    new StyleLintPlugin({
      configFile: '.stylelintrc.json',
      context: './src',
      emitErrors: true,
    }),
  );

  return baseConfig;
}
