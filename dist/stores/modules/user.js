/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-18 16:01:24
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-18 17:56:15
 */
import { __decorate } from 'tslib'
import { action, observable } from 'mobx'
import Cookies from 'js-cookie'
import { history } from 'src/routers'
var UserStore = /** @class */ (function () {
  function UserStore() {
    this.isLogin = false
  }
  Object.defineProperty(UserStore.prototype, 'getIsLogin', {
    get: function () {
      return this.isLogin
    },
    enumerable: false,
    configurable: true
  })
  UserStore.prototype.getAccount = function () {
    if (this.account) {
      return this.account
    } else if (window.localStorage.getItem('account_info')) {
      var accountInfo = void 0
      try {
        accountInfo = JSON.parse(
          decodeURIComponent(window.localStorage.getItem('account_info'))
        )
      } catch (e) {
        // console.log(e)
      }
      return accountInfo
    } else {
      return false
    }
  }
  UserStore.prototype.getAuthHeader = function () {
    return {
      Authorization: 'Bearer ' + Cookies.get('access_token'),
      dp_user_id: Cookies.get('dp_user_id'),
      sys_role: Cookies.get('sys_role')
    }
  }
  UserStore.prototype.getAccessToken = function () {
    return Cookies.get('access_token')
  }
  UserStore.prototype.login = function (accountInfo) {
    window.localStorage.clear()
    window.localStorage.setItem('account_info', JSON.stringify(accountInfo))
    // Cookies.set('access_token', accountInfo.access_token)
    this.account = accountInfo
    this.isLogin = true
  }
  UserStore.prototype.sigout = function () {
    Cookies.remove('access_token')
    window.localStorage.clear()
    this.account = undefined
    this.isLogin = false
    history.push('/login')
  }
  __decorate([observable], UserStore.prototype, 'isLogin', void 0)
  __decorate([observable], UserStore.prototype, 'account', void 0)
  __decorate([action], UserStore.prototype, 'getAuthHeader', null)
  __decorate([action], UserStore.prototype, 'getAccessToken', null)
  __decorate([action], UserStore.prototype, 'login', null)
  __decorate([action], UserStore.prototype, 'sigout', null)
  return UserStore
})()
export { UserStore }
export default new UserStore()
