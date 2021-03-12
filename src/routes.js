const routes = require('next-routes')();

routes.add('root', '/', 'IndexPage');
routes.add('forecast', '/forecast', 'ForecastPage');
routes.add('current', '/current', 'CurrentPage');

module.exports = routes;
