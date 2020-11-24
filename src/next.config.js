// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  distDir: '../.next', // custom build folder
  webpack: (config) => {

    config.resolve = {
      alias: {
        ...config.resolve.alias,
      },
      extensions: ['.js', '.json', '.ts', '.tsx'],
    };

    // apply new aliases
    const aliases = ['components', 'pages', 'hooks', 'server', 'styles', 'utils', 'layout', 'store'];
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
  }
}