import { __assign, __awaiter, __decorate, __extends, __generator } from 'tslib'
/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2021-01-29 20:03:08
 * @LastEditors: janasluo
 * @LastEditTime: 2021-10-13 14:38:49
 */
import { observer, inject } from 'mobx-react'
import * as React from 'react'
import { message } from 'antd'
import { observable } from 'mobx'
import MainRoute from './MainRoute'
import './main.styl'
var Main = /** @class */ (function (_super) {
  __extends(Main, _super)
  function Main(props) {
    var _this = _super.call(this, props) || this
    _this.menuList = []
    _this.selectExpand = []
    _this.sigout = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var res
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4 /*yield*/, this.userService.sigout()]
            case 1:
              res = _a.sent()
              if (res.status === 0) {
                this.userStore.sigout()
              } else {
                message.error(res.msg || '操作失败0')
              }
              return [2 /*return*/]
          }
        })
      })
    }
    _this.initConfig(props)
    return _this
  }
  Main.prototype.initConfig = function (props) {
    this.userService = props.userService
    this.userStore = props.userStore
  }
  Main.prototype.render = function () {
    return React.createElement(
      'div',
      { className: 'main' },
      React.createElement(
        'div',
        { className: 'main-body' },
        React.createElement(
          'div',
          { className: 'right-body' },
          React.createElement(MainRoute, __assign({}, this.props))
        )
      )
    )
  }
  __decorate([observable], Main.prototype, 'menuList', void 0)
  __decorate([observable], Main.prototype, 'selectItem', void 0)
  __decorate([observable], Main.prototype, 'selectExpand', void 0)
  Main = __decorate([inject('userService', 'userStore'), observer], Main)
  return Main
})(React.Component)
export default Main
