const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.ts',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      // Use sass for CSS
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            }
          ],
        })
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // This will enforce TypeScript compilation without errors.
    new webpack.NoEmitOnErrorsPlugin(),
    // Provide an html template to customize the app.
    new HtmlWebpackPlugin({
      title: 'Realistic Typescript Webpack',
      hash: true,
      filename: 'index.html',
      template: 'src/assets/index.html',
    }),
    // Split the node_modules into their own JS so they don't have to be
    // recompiled with every change you make.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (m, count) => /node_modules/.test(m.context)
    }),
    // Split webpack runtime code for readability while developing.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      minChunks: Infinity
    }),
    new ExtractTextPlugin({ filename: 'app.bundle.css' }),
  ]
}
