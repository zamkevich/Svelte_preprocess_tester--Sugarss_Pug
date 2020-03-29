
module.exports = () => ({
  parser: 'sugarss',
  map: true,
  plugins: {
      'postcss-nested': {},
      'postcss-preset-env': {
        browsers: "last 2 versions",
        stage: 0,
        features: {
          "nesting-rules": true,
        },
      },
      cssnano: {
        convertValues: { length: false },
        zindex: false
      },
    }
  });
