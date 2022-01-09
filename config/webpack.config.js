const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { FOLDER_INPUT, FOLDER_OUTPUT, ALIASES } = require('./PATHs');
const { rules } = require('./RULEs');

module.exports = {
  entry: path.join(FOLDER_INPUT, 'index.tsx'),
  output: {
    filename: '[name].[contenthash].js',
    path: FOLDER_OUTPUT,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: ALIASES,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(FOLDER_INPUT, 'index.html'),
    }),
  ],

  module: { rules },
};
