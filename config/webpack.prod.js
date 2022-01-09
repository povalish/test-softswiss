const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');


module.exports = merge(baseConfig, {
  mode: 'production',

  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});
