const { DefinePlugin } = require('webpack');

module.exports = {
  onCreateWebpackChain(config) {
    config
      .plugin('define-plugin')
      // Add global env variable so we know that we are in
      // docz when the library is included in the build (allows
      // us to preconfigure library for the docs)
      .use(DefinePlugin, [{ __DOCZ__: JSON.stringify(true) }]);
  },

  // It doesn't work :'(
  codeSandbox: false,

  // Sort menu in a more appropriate order
  menu: [
    'Getting Started',
    'Core Principles',
    'FAQ',
    'Map',
    'Panorama',
    'GeoObjects',
    'Clusterization',
    'Controls',
    'Routes',
    'YMaps Context',
    'Migration Guide',
  ],
};
