const { DefinePlugin } = require('webpack');

module.exports = {
  onCreateWebpackChain(config) {
    config
      .plugin('define-plugin')
      .use(DefinePlugin, [{ __DOCZ__: JSON.stringify(true) }]);
  },
};
