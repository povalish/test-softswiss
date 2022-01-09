const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { PATH_OUTPUT } = require('./PATHs');


module.exports = merge(baseConfig, {
  mode: 'development',

  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },

  output: { 
    publicPath: '/',
  },
});
