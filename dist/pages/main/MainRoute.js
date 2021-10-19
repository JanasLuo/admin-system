import { __extends } from 'tslib'
/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2021-01-23 21:35:24
 * @LastEditors: janasluo
 * @LastEditTime: 2021-09-14 22:14:35
 */
/* 主页面路由组件 */
import React, { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { SuspenseLoading } from 'src/components/Loading'
import styles from './mainRoute.styl'
var notFound = lazy(function () {
  return import('src/components/Error/404')
})
var Home = lazy(function () {
  return import('./home/Home')
})
var MainRoute = /** @class */ (function (_super) {
  __extends(MainRoute, _super)
  function MainRoute(props) {
    var _this = _super.call(this, props) || this
    _this.state = {}
    return _this
  }
  MainRoute.prototype.render = function () {
    var location = this.props.location
    var pathname = location.pathname
    return React.createElement(
      TransitionGroup,
      { className: styles.main_route },
      React.createElement(
        CSSTransition,
        {
          key: pathname.split('/')[2],
          timeout: { enter: 1000, exit: 0 },
          classNames: 'fade'
        },
        React.createElement(
          Suspense,
          { fallback: React.createElement(SuspenseLoading, null) },
          React.createElement(
            Switch,
            { location: location },
            React.createElement(Route, { path: '/main/home', component: Home }),
            React.createElement(Route, {
              path: '/main/404',
              component: notFound
            }),
            React.createElement(Redirect, { to: '/main/backStage' })
          )
        )
      )
    )
  }
  return MainRoute
})(React.Component)
export default MainRoute
