const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: {
    app: path.join(__dirname, '/index.jsx')
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : __dirname,
        exclude : path.join(__dirname, 'server'),
        use : ['babel-loader']
      },
      {
        test: /\.(png|jpg)$/,
        include: path.resolve(__dirname, 'static'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '/build'),
    hot: true
  },
  plugins: [
      new CleanWebpackPlugin(['build']),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html')
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
