/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-15 11:35:57
 * @LastEditors: janasluo
 * @LastEditTime: 2021-10-25 18:35:50
 */
const path = require('path')

module.exports = {
  webpack: (config, env) => {
    // debugger
    config.entry = path.join(__dirname, 'src/index_dev.tsx')
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
                    sourceMap: true
                    // modules: { localIdentName: '[local]-[hash:base64:10]' }
                  }
                },
                {
                  loader: 'stylus-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ]
            },
            ...rule.oneOf
          ]
        }
      }
      return rule
    })
    return config
  }
}
