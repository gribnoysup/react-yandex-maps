const withCSS = require('@zeit/next-css');

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
});

module.exports = withCSS(
  withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  })
);
