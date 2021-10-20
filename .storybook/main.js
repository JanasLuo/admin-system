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
  ]
}
