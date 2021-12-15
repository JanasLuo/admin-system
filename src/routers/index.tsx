/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2021-01-23 21:35:24
 * @LastEditors: janasluo
 * @LastEditTime: 2021-12-15 18:29:00
 */
import { createBrowserHistory } from 'history'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import React from 'react'
// import { Suspense, lazy} from 'react'
import {
  // Router,
  Route,
  Switch
  // Redirect
} from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { LoadableLoading } from 'src/components/Loading'
import Loadable from 'react-loadable'
const browserHistory = createBrowserHistory()
const routerStore = new RouterStore()
const history = syncHistoryWithStore(browserHistory, routerStore)
// const Main = lazy(() => import('src/pages/main/Main'))
// const Login = lazy(() => import('src/pages/login/Login'))

const Main = Loadable({
  loader: () => import('src/pages/main/Main'),
  loading: LoadableLoading
})
const Login = Loadable({
  loader: () => import('src/pages/login/Login'),
  loading: LoadableLoading
})
// import Main from 'src/pages/main/Main'
// import Login from 'src/pages/login/Login'
export default class AppRouter extends React.Component<{}, {}> {
  public render() {
    return (
      // <Router history={history}>
      <BrowserRouter
        // @ts-ignore
        basename={window.__POWERED_BY_QIANKUN__ ? '/main/testMicroApp' : '/'}
      >
        {/* <Suspense fallback={<SuspenseLoading />}> */}
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/login" component={Login} />
        </Switch>
        {/* </Suspense> */}
        {/* </Router> */}
      </BrowserRouter>
    )
  }
}

export { history }
