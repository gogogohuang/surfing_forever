/* eslint-disable no-param-reassign */
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const path = require('path');

module.exports = withPlugins([withBundleAnalyzer, withCSS], {
  useFileSystemPublicRoutes: false, // disable original route setting for ./pages
  distDir: '../.next', // custom build folder
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.plugins.push(new webpack.IgnorePlugin(/^convict$/));
    }

    // enable axios throttle logging: https://github.com/kuitos/axios-extensions#enable-logging
    if (dev) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.LOGGER_LEVEL': JSON.stringify('info'),
        })
      );
    }

    // https://github.com/zeit/next.js/tree/canary/examples/with-polyfills
    const originalEntry = config.entry;

    config.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
        entries['main.js'].unshift('./client/polyfills.js');
      }

      return entries;
    };

    config.resolve = {
      alias: {
        ...config.resolve.alias,
      },
      extensions: ['.js', '.json', '.ts', '.tsx'],
    };

    // apply new aliases
    const aliases = ['components', 'pages', 'hooks', 'server', 'constant', 'public', 'styles', 'utils'];
    Object.assign(
      config.resolve.alias,
      aliases.reduce(
        (p, c) => {
          // eslint-disable-next-line
          p[c] = path.resolve(process.cwd(), `./src/${c}`);

          return p;
        },
        {
          root: path.resolve(process.cwd(), './src'),
        }
      )
    );

    return config;
  },
});
