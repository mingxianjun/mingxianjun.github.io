/**
 * Created by MingXianJun on 2019/8/27
 * webpack 生产环境配置
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const AutoPreFixer = require('autoprefixer');

const prodConfig = merge(baseConfig, {
    output: {
      publicPath: './dist/',
      chunkFilename: 'chunks/[name].chunk.js'
    },
    optimization: {
      minimizer: [
        new TerserWebpackPlugin({
          parallel: true,
          sourceMap: false,
          /*chunkFilter(chunk){
            if (chunk.name === 'vendors') {
              return false;
            }
            return true;
          },*/
          terserOptions: {
            mangle: true // js是否混淆
          }
        }),
        new OptimizeCssAssetsWebpackPlugin({
          cssProcessorOptions: {
            safe: true
          }
        })
      ],
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name:
              "vendors",
            chunks:
              "all"
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /.styl/,
          use: [
            {
              loader: MinCssExtractPlugin.loader,
              options: {
                publicPath: './'
              }
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [AutoPreFixer]
              }
            },
            'stylus-loader'
          ],
          exclude: /(node_modules)/
        }
      ]
    },
    devtool: false,
    plugins:
      [
        new CleanWebpackPlugin(),
        new MinCssExtractPlugin({
          filename: 'css/[name].css',
          chunkFilename: 'css/[name].chunk.css'
        }),
        new webpack.HashedModuleIdsPlugin({
          hashFunction: 'sha256',
          hashDigest: 'hex',
          hashDigestLength: 20
        })
      ]
  })
;

module.exports = prodConfig;