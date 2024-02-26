const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://192.168.1.12:8090',
      changeOrigin: true,
    })
  );
};