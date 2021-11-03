/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-26 11:41:05
 * @LastEditors: janasluo
 * @LastEditTime: 2021-11-02 16:11:28
 */
import { Provider } from 'mobx-react'
// import * as React from 'react'
// import * as ReactDOM from 'react-dom'

import App from './pages/App'
import registerServiceWorker from './pwa/registerServiceWorker'
import AppRouter from './routers'
import stores from './stores'
import services from './services'
import moment from 'moment'
import 'moment/locale/zh-cn'

// import 'antd/dist/antd.css'
import './styles/index.styl'

moment.locale('zh-cn')

ReactDOM.render(
  <Provider {...stores} {...services}>
    <App>
      <AppRouter />
    </App>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
