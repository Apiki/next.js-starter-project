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
      use: ['style-loader', 'css-loader', 'sass-loader'],
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
  baseConfig.resolve.alias = Object.assign({}, baseConfig.resolve.alias, {
    pages: paths.pages,
    shared: paths.shared,
    nodeModules: join(__dirname, '..', 'node_modules'),
    'storybook-ui': join(__dirname, 'ui'),
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
};
