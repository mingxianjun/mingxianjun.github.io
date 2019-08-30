/**
 * Created by MingXianJun on 2019/8/27
 * webpack 基础配置文件
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, './src/app.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /(node_modules)/
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        use:{
          loader: "url-loader",
          options: {
            limit:10000,
            name:'[name].[hash:6].[ext]',
            outputPath:'./fonts'
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use:{
          loader: "url-loader",
          options: {
            limit:10000,
            name:'[name].[hash:6].[ext]',
            outputPath:'./images'
          }
        }
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname),
      path.resolve(__dirname, 'src')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: './index.html',
      // favicon: './src/assets/images/favicon.ico'
    })
  ]
};
