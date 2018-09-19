module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      [
        [
          '@babel/preset-env',
          {
            loose: true,
            modules: api.env === 'es' ? false : 'commonjs',
          },
        ],
      ],
      '@babel/react',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      'dev-expression',
      ['transform-react-remove-prop-types', { removeImport: true }],
    ],
  };
};
