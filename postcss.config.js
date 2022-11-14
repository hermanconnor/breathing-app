module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 1,
    }),
    require('postcss-assets')({
      loadPaths: ['dist/img'],
    }),
  ],
};
