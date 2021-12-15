/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-15 11:35:57
 * @LastEditors: janasluo
 * @LastEditTime: 2021-12-15 18:55:20
 */
const proxyObject = require('./config/proxy.conf')
const getBuildInfo = require('./version.js')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const fs = require('fs')
const { name } = require('./package')
// 分析打包时间
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();
// 获取文件路径
function getFileRealPath(s) {
  try {
    return fs.realpathSync(s)
  } catch (e) {
    return false
  }
}
module.exports = {
  webpack: (config, env) => {
    config.output.library = `${name}-[name]`
    config.output.libraryTarget = 'umd'
    config.output.jsonpFunction = `webpackJsonp_${name}`
    config.output.globalObject = 'window'
    // config.output.publicPath = !pro ? 'http://localhost:3001/' : './';
    config.module.rules = config.module.rules.map(rule => {
      if (rule.oneOf instanceof Array) {
        return {
          ...rule,
          oneOf: [
            {
              test: /\.styl$/,
              use: [
                {
                  loader: 'style-loader'
                },
                {
                  loader: 'thread-loader'
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
    // thread-loader多实例构建;cache-loader减少二次打包时间
    config.module.rules.push({
      test: /\.(jsx|js|ts|tsx)$/,
      include: [path.resolve(__dirname, '../src')],
      exclude: [/node_modules/],
      use: ['cache-loader', 'thread-loader']
    })
    if (env === 'production') {
      delete config.devtool
      // config.plugins.push(new BundleAnalyzerPlugin()) // 打包分析
      // 通过获取.git文件路径 判断是否在git目录下
      if (getFileRealPath('.git')) {
        config.plugins.push(
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
    }
    if (env === 'development') {
      // 开发环境代码检查
      config.module.rules.push({
        test: /\.(jsx|js|ts|tsx)$/,
        include: [path.resolve(__dirname, '../src')],
        exclude: [/node_modules/],
        use: ['eslint-loader'],
        enforce: 'pre'
      })
      config.devtool = 'cheap-module-eval-source-map'
    }

    const terserOptions = config.optimization.minimizer[0].options.terserOptions
    terserOptions.compress = {
      ...terserOptions.compress,
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log'] // 移除console
    }
    return config
    // return smp.wrap(config)
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
        config.historyApiFallback = true
        config.hot = false
        config.watchContentBase = false
        config.liveReload = false
        return config
      }
    }
  }
}
