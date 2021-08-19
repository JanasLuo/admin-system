/*
 * @Author: janasluo
 * @Date: 2021-07-29 10:49:37
 * @LastEditTime: 2021-08-19 11:54:14
 * @LastEditors: janasluo
 * @Description: 
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/webpack.config.js
 */
const proxyObject = require('./config/proxy.conf')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BuildInfo = require('./version.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  webpack: (config, env) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.oneOf instanceof Array) {
        return {
          ...rule,
          oneOf: [
            {
              test: /\.styl$/,
              // loader: 'style-loader!css-loader?modules&localIdentName=[path]-[name]-[hash:base64:10]!stylus-loader'
              loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:10]!stylus-loader'
            },
            ...rule.oneOf
          ]
        };
      }
      return rule;
    });
    if (env === 'production') {
      delete config.devtool
      // config.plugins.push(new BundleAnalyzerPlugin()) // 打包分析
      config.plugins.push(new HtmlWebpackPlugin({
        filename: './version.html',  //打包后生成的文件路径
        template: './version/index.html',  //需要处理的对象
        inject: false,//不插入生成的js 仅用于版本声明
        minify: {
          removeComments: false,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        buildInfo: BuildInfo
      }))
    }
    config.externals = ['canvas']
    return config;
  },
  devServer: function (configFunction, env) {
    if (env === 'development') {
      return (proxy, allowedHost) => {
        const config = configFunction(
          {
            ...proxy,
            ...proxyObject
          },
          allowedHost);
        config.headers = {
          'Access-Control-Allow-Origin': '*'
        }
        return config;
      };
    }
  }
}