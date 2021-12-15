/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2021-01-23 21:35:24
 * @LastEditors: janasluo
 * @LastEditTime: 2021-12-15 18:21:42
 */
/* 主页面路由组件 */
import React from 'react' // Suspense // lazy,
// import { Suspense, lazy } from 'react'
import {
  Route,
  Switch
  // Redirect
} from 'react-router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
// import { SuspenseLoading } from 'src/components/Loading'
import styles from './mainRoute.styl'
import { LoadableLoading } from 'src/components/Loading'
import Loadable from 'react-loadable'
// const notFound = lazy(() => import('src/components/Error/404'))
// const Home = lazy(() => import('./home/Home'))
import notFound from 'src/components/Error/404'
import { BrowserRouter } from 'react-router-dom'
// import Home from './home/Home'
const Home = Loadable({
  loader: () => import('./home/Home'),
  loading: LoadableLoading
})
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
          <BrowserRouter
            basename={
              // @ts-ignore
              window.__POWERED_BY_QIANKUN__ ? '/main/testMicroApp' : '/'
            }
          >
            {/* <Suspense fallback={<SuspenseLoading />}> */}
            <Switch location={location}>
              <Route path="/big/home" component={Home} />
              <Route path="/big/404" component={notFound} />
              {/* <Redirect to="/big/backStage" /> */}
            </Switch>
          </BrowserRouter>
          {/* </Suspense> */}
        </CSSTransition>
      </TransitionGroup>
    )
  }
}
export default MainRoute
