/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-15 11:35:57
 * @LastEditors: janasluo
 * @LastEditTime: 2021-11-03 14:58:54
 */
const proxyObject = require('./config/proxy.conf')
const getBuildInfo = require('./version.js')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const fs = require('fs')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
    // config.output.path = path.join(__dirname, 'build')
    // config.output.filename = 'static/js/[name].js'
    // config.output.chunkFilename = 'static/js/[name].chunk.js'
    config.output.globalObject = 'window'
    config.output.libraryTarget = 'system'
    config.externals = ['react', 'react-dom']
    config.module.rules = config.module.rules.map(rule => {
      if (rule.oneOf instanceof Array) {
        // file-loader 中排除vue文件
        rule.oneOf[8].exclude = [
          /\.(js|mjs|jsx|ts|tsx|vue)$/,
          /\.html$/,
          /\.json$/
        ]
        return {
          ...rule,
          oneOf: [
            ...rule.oneOf,
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
            }
            // {
            //   loader: require.resolve('file-loader'),
            //   // Exclude `js` files to keep "css" loader working as it injects
            //   // its runtime that would otherwise be processed through "file" loader.
            //   // Also exclude `html` and `json` extensions so they get processed
            //   // by webpacks internal loaders.
            //   exclude: [/\.(js|mjs|jsx|ts|tsx|vue)$/, /\.html$/, /\.json$/],
            //   options: {
            //     name: 'static/media/[name].[hash:8].[ext]',
            //   },
            // },
          ]
        }
      }
      return rule
    })
    // 解析vue文件
    config.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader'
    })
    if (env === 'production') {
      delete config.devtool
      // config.plugins.push(new BundleAnalyzerPlugin()) // 打包分析
      const plugins = [
        // 去掉console.log debugger
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
      // 通过获取.git文件路径 判断是否在git目录下
      if (getFileRealPath('.git')) {
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
    // config.plugins.push(new VueLoaderPlugin())
    // 解决antd的依赖顺序问题，不在入口文件同步引入，由System动态依次引入，
    config.plugins = [
      ...config.plugins,
      new VueLoaderPlugin(), // 解析vue文件
      new HtmlWebpackPlugin({
        filename: './index.html', // 打包后生成的文件路径
        template: './public/index.html', // 需要处理的对象
        inject: false, // 不插入生成的js 仅用于版本声明
        minify: {
          removeComments: true, // 清除注释
          collapseWhitespace: true // 清理空格
        }
      })
      // new InterpolateHtmlPlugin({
      //   'PUBLIC_URL': ''  // 手动注入变量(解决PUBLIC_URL未解析生效）
      // }),
    ]
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
