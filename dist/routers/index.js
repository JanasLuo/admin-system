import { __extends } from 'tslib'
/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2021-01-23 21:35:24
 * @LastEditors: luolei
 * @LastEditTime: 2021-04-08 18:12:07
 */
import { createBrowserHistory } from 'history'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import React, { Suspense, lazy } from 'react'
import { Route, Router, Switch, Redirect } from 'react-router'
import { SuspenseLoading } from 'src/components/Loading'
var browserHistory = createBrowserHistory()
var routerStore = new RouterStore()
var history = syncHistoryWithStore(browserHistory, routerStore)
var Main = lazy(function () {
  return import('src/pages/main/Main')
})
var Login = lazy(function () {
  return import('src/pages/login/Login')
})
var AppRouter = /** @class */ (function (_super) {
  __extends(AppRouter, _super)
  function AppRouter() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  AppRouter.prototype.render = function () {
    return React.createElement(
      Router,
      { history: history },
      React.createElement(
        Suspense,
        { fallback: React.createElement(SuspenseLoading, null) },
        React.createElement(
          Switch,
          null,
          React.createElement(Route, { path: '/main', component: Main }),
          React.createElement(Route, { path: '/login', component: Login }),
          React.createElement(Redirect, { to: '/main' }),
          React.createElement(Redirect, { to: '/login' })
        )
      )
    )
  }
  return AppRouter
})(React.Component)
export default AppRouter
export { history }
