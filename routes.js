const routes = require('next-routes')();

routes.add('post', '/artigo/:slug');

module.exports = routes;
