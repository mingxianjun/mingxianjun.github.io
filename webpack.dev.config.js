/**
 * Created by MingXianJun on 2019/8/27
 * webpack 开发环境配置
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = merge(baseConfig, {
  module:{
    rules:[
      {
        test: /.styl/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ],
        exclude: /(node_modules)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8888,
    host: '0.0.0.0',
    hot: true,
    overlay: {  // webpack编译出现错误，则显示到网页上
      errors: true,
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
});

module.exports = devConfig;