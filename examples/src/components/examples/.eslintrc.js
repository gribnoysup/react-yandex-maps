module.exports = {
  globals: {
    React: true,
    YMapsProvider: true,
    Map: true,
  },
  rules: {
    'no-unused-vars': ['warn'],
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
  },
};
