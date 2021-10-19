/*
 * @Descripttion: 登录页
 * @version:
 * @Author: luolei
 * @Date: 2020-09-11 09:53:07
 * @LastEditors: janasluo
 * @LastEditTime: 2021-09-18 16:18:23
 */
import { __awaiter, __decorate, __extends, __generator } from 'tslib'
import * as React from 'react'
import { Button } from 'antd'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import styl from './login.styl'
var Login = /** @class */ (function (_super) {
  __extends(Login, _super)
  function Login(props) {
    var _this = _super.call(this, props) || this
    _this.title = '登录页'
    _this.loginType = 'password'
    _this.login = function (value) {
      return __awaiter(_this, void 0, void 0, function () {
        var res, res1
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.userService.login({
                  password: value.password,
                  username: value.username
                })
              ]
            case 1:
              res = _a.sent()
              if (!(res.status === 200)) return [3 /*break*/, 3]
              return [4 /*yield*/, this.userService.getUserInfo()]
            case 2:
              res1 = _a.sent()
              if (res1.status === 200) {
                this.userStore.login(res1.data)
              }
              this.props.history.push('/main/backStage/app')
              _a.label = 3
            case 3:
              return [2 /*return*/]
          }
        })
      })
    }
    _this.userService = props.userService
    _this.userStore = props.userStore
    return _this
  }
  Login.prototype.componentDidMount = function () {
    this.initData()
  }
  Login.prototype.initData = function () {
    // todo
  }
  Login.prototype.render = function () {
    var _this = this
    return React.createElement(
      'div',
      { className: styl.login },
      React.createElement(
        Button,
        {
          onClick: function () {
            return _this.login({
              password: 'password',
              username: 'username'
            })
          }
        },
        '\u767B\u5F55'
      )
    )
  }
  __decorate([observable], Login.prototype, 'title', void 0)
  __decorate([observable], Login.prototype, 'loginType', void 0)
  Login = __decorate([inject('userService', 'userStore'), observer], Login)
  return Login
})(React.Component)
export default Login
