const routes = require('next-routes')();

routes.add('root', '/', 'IndexPage');
routes.add('surfing', '/surfing', 'OceanPage');

module.exports = routes;
