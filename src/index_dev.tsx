/*
 * @Author: janasluo
 * @Date: 2021-10-19 17:55:42
 * @LastEditTime: 2021-10-20 14:52:31
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/index.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AppRouter from './routers'

ReactDOM.render(
  <App>
    <AppRouter />
  </App>,
  document.getElementById('root')
)
