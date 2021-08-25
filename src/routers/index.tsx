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

const browserHistory = createBrowserHistory()
const routerStore = new RouterStore()
const history = syncHistoryWithStore(browserHistory, routerStore)
const Main = lazy(() => import('src/pages/main/Main'))
const Login = lazy(() => import('src/pages/login/Login'))
const BaseComp = lazy(() => import('src/pages/base_comp/BaseComp'))
export default class AppRouter extends React.Component<{}, {}> {
  public render() {
    return (
      <Router history={history}>
        <Suspense fallback={<SuspenseLoading />}>
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/base_comp" component={BaseComp} />
            <Redirect to="/main" />
            <Redirect to="/login" />
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

export { history }
