import { __decorate, __extends } from 'tslib'
/*
 * @Author: janasluo
 * @Date: 2021-09-13 11:08:20
 * @LastEditTime: 2021-09-30 14:27:15
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/pages/App.tsx
 */
import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Loading from '../components/Loading'
import { observable } from 'mobx'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
var App = /** @class */ (function (_super) {
  __extends(App, _super)
  function App(props) {
    var _this = _super.call(this, props) || this
    _this.loaderStore = props.loaderStore
    return _this
    // if (!props.userStore.getAccount()) {
    //   if (location.pathname !== '/login') {
    //     location.replace('/login')
    //   }
    // }
  }
  App.prototype.render = function () {
    return React.createElement(
      ConfigProvider,
      { locale: zh_CN },
      React.createElement(
        'div',
        { className: 'app' },
        this.props.children,
        React.createElement(
          'div',
          {
            className:
              'loading-box ' + (this.loaderStore.getLoading ? 'show' : '')
          },
          React.createElement(Loading, null)
        )
      )
    )
  }
  __decorate([observable], App.prototype, 'loaderStore', void 0)
  App = __decorate([inject('loaderStore', 'userStore'), observer], App)
  return App
})(React.Component)
export default App
