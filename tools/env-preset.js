module.exports = function(api) {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: api.env === 'es' ? false : 'commonjs',
        },
      ],
    ],
  };
};
