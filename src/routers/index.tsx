/*
 * @Description:
 * @Author:
 * @Date: 2021-07-29 18:15:16
 * @LastEditTime: 2021-10-21 15:12:35
 * @LastEditors: janasluo
 */
import { createBrowserHistory } from 'history'
// import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import * as React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router'

import DocumentComp from 'src/pages/document'
const browserHistory = createBrowserHistory()
// const routerStore = new RouterStore()
// const history = syncHistoryWithStore(browserHistory, routerStore)

export default class AppRouter extends React.Component<{}, {}> {
  public render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route path="/document" component={DocumentComp} />
          <Redirect to="/document" />
        </Switch>
      </Router>
    )
  }
}
