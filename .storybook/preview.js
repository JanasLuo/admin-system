/*
 * @Author: janasluo
 * @Date: 2021-10-08 15:16:42
 * @LastEditTime: 2021-10-20 14:32:57
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/.storybook/preview.js
 */
// import '!style-loader!css-loader!stylus-loader!../src/styles/index.styl'
// import '!style-loader!css-loader?modules=true!stylus-loader!../src/styles/index.styl'
import 'antd/dist/antd.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
// 全局装饰
// export const decorators = [
//   (Story) => (
//     <div className="hz-light-antd" style={{ background: 'none' }} id="story">
//       <Story />
//     </div>
//   ),
// ];
