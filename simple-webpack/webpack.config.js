const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let plugins = [
  new HtmlWebpackPlugin({ title: 'ERA Voyage', hash: true }),
]

module.exports = {
  entry: {
    main: './src/index.js',
  },
  devtool: 'source-map',
  module: {},
  resolve: {},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins
}
