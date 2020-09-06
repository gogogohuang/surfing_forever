const next = require('next');
const path = require('path');
const fs = require('fs');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const router = require('../routes');

const isDev = process.env.NODE_ENV !== 'production';
const isProd = !isDev;
const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dir: './src', dev: isDev });

const routerHandler = router.getRequestHandler(app, ({ req, res, route, query }) => {
  render(req, res, route.page, query);
});

const render = function render(req, res, pagePath, queryParams) {
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      const statusCode = res.statusCode;
      const shouldCache = statusCode >= 200 && statusCode < 500;

      // Let's cache this page
      if (!isDev && shouldCache) {
        res.append('X-Cache', 'MISS');
        res.setHeader('Cache-Control', `public,max-age=365d,immutable`);
      } else {
        res.setHeader('Cache-Control', 'max-age=0');
      }

      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
};

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(compression({ threshold: 0 }));

  if (isProd) {
    server.get('/_next/-/app.js', (req, res) => app.serveStatic(req, res, path.resolve('./.next/app.js')));
  }


  // add cache control for static file
  // https://github.com/zeit/next.js/issues/1791
  server.use('/public', express.static('src/public', isProd));

  server.use(helmet());
  server.use(routerHandler);

  server.listen(port, host, err => {
    if (err) {
      return console.error(err.message);
    }

    return console.log(port, prettyHost);
  });
});
