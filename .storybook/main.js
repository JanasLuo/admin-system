/*
 * @Author: janasluo
 * @Date: 2021-10-08 15:16:42
 * @LastEditTime: 2021-10-11 15:08:39
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/.storybook/main.js
 */
const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app'
  ],
  webpackFinal: (config, { configType }) => {
    // config.module.rules.push({
    //   test: /\.styl$/,
    //   use: [
    //     {
    //       loader: 'style-loader'
    //     },
    //     {
    //       loader: 'css-loader',
    //     },
    //     {
    //       loader: 'stylus-loader'
    //     }
    //   ]
    // });
    // config.module.rules.push({
    //   test: /\.styl$/,
    //   use: ['style-loader', 'css-loader', 'stylus-loader'],
    //   include: path.resolve(__dirname, '../src'),
    // });

    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: ['style-loader', 'css-loader?modules=true'],
    //   include: path.resolve(__dirname, '../'),
    // });
    return config
  }
}
