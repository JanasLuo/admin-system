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

const notFound = lazy(() => import('src/components/Error/404'))
const Home = lazy(() => import('./home/Home'))

class MainRoute extends React.Component<any, {}> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }
  public render() {
    const location = this.props.location
    const { pathname } = location
    return (
      <TransitionGroup className={styles.main_route}>
        <CSSTransition
          key={pathname.split('/')[2]}
          timeout={{ enter: 1000, exit: 0 }}
          classNames="fade"
        >
          <Suspense fallback={<SuspenseLoading />}>
            <Switch location={location}>
              <Route path="/main/home" component={Home} />
              <Route path="/main/404" component={notFound} />
              <Redirect to="/main/backStage" />
            </Switch>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}
export default MainRoute
