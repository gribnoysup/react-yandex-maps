/**
 * This file is needed because next.js keeps resolving
 * babel config in the parent directory and this leads
 * to the docs not building properly. To avoid it we
 * will use custom transform file to wrap babel jest
 * and inline babel config here
 */
module.exports = require('babel-jest').createTransformer({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});
