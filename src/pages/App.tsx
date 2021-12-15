/*
 * @Author: janasluo
 * @Date: 2021-09-13 11:08:20
 * @LastEditTime: 2021-12-15 15:44:11
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /test/Users/janas/work/project/frontend/admin-system/src/pages/App.tsx
 */
import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
import { LoaderStore } from '../stores/modules/loader'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

@inject('loaderStore', 'userStore')
@observer
class App extends React.Component<{}, {}> {
  @observable public loaderStore: LoaderStore

  constructor(props: any) {
    super(props)
    this.loaderStore = props.loaderStore
  }

  public render() {
    return (
      <ConfigProvider locale={zh_CN}>
        <div className="app">
          <div>MicroApp</div>
          {this.props.children}

          <div
            className={`loading-box ${
              this.loaderStore.getLoading ? 'show' : ''
            }`}
          ></div>
        </div>
      </ConfigProvider>
    )
  }
}

export default App
