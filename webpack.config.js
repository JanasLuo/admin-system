/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-15 11:35:57
 * @LastEditors: janasluo
 * @LastEditTime: 2021-09-19 16:27:05
 */
const proxyObject = require('./config/proxy.conf')
const getBuildInfo = require('./version.js')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const fs = require('fs')

// 检查是否存在git
function isExistGit() {
  // 检查某个目录是否存在
  const stat = fs.statSync(path.join(__dirname, '.git'))
  return stat.isDirectory()
}
console.log('----------isExistGit', isExistGit())
module.exports = {
  webpack: (config, env) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.oneOf instanceof Array) {
        return {
          ...rule,
          oneOf: [
            {
              test: /\.(jsx|js|ts|tsx)$/,
              include: [path.resolve(__dirname, '../src')],
              exclude: [/node_modules/],
              use: ['eslint-loader'],
              enforce: 'pre'
            },
            {
              test: /\.styl$/,
              use: [
                {
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader',
                  options: {
                    modules: { localIdentName: '[local]-[hash:base64:10]' }
                  }
                },
                {
                  loader: 'stylus-loader'
                }
              ]
            },
            ...rule.oneOf
          ]
        }
      }
      return rule
    })

    if (env === 'production') {
      delete config.devtool
      // config.plugins.push(new BundleAnalyzerPlugin()) // 打包分析
      const plugins = [
        new UglifyJsPlugin({
          uglifyOptions: {
            // 删除注释
            output: {
              comments: false
            },
            // 删除console debugger 删除警告
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log'] // 移除console
            }
          }
        })
      ]
      if (isExistGit()) {
        plugins.push(
          new HtmlWebpackPlugin({
            filename: './version.html', // 打包后生成的文件路径
            template: './version/index.html', // 需要处理的对象
            inject: false, // 不插入生成的js 仅用于版本声明
            minify: {
              removeComments: false,
              collapseWhitespace: true,
              removeAttributeQuotes: true
            },
            buildInfo: getBuildInfo()
          })
        )
      }
      config.plugins = [...config.plugins, ...plugins]
    }
    // config.externals = ['canvas']
    return config
  },
  devServer: function (configFunction, env) {
    if (env === 'development') {
      return (proxy, allowedHost) => {
        const config = configFunction(
          {
            ...proxy,
            ...proxyObject
          },
          allowedHost
        )
        config.headers = {
          'Access-Control-Allow-Origin': '*'
        }
        return config
      }
    }
  }
}
