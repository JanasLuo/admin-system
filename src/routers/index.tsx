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
import CopmTest from 'src/pages/comp_test'
const browserHistory = createBrowserHistory()

export default class AppRouter extends React.Component<{}, {}> {
  public render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route path="/document" component={DocumentComp} />
          <Route path="/comp_test" component={CopmTest} />
          <Redirect to="/document" />
        </Switch>
      </Router>
    )
  }
}
