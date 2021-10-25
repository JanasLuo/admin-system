/*
 * @Author: janasluo
 * @Date: 2021-09-13 11:08:20
 * @LastEditTime: 2021-10-25 17:20:25
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/App.tsx
 */
import React from 'react'
import Button from './components/AButton'
import 'antd/dist/antd.css'
import './styles/index.styl'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* <Button size="small">ddd</Button>
         */}
        {this.props.children}
      </div>
    )
  }
}

export default App
