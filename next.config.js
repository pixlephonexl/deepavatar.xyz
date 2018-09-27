const withCSS = require('@zeit/next-css');
const pck = require('./package.json');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withCSS({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/create': { page: '/create' },
    };
  },
  assetPrefix: debug ? './' : `/${pck.name}/`,
});

