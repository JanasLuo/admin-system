/* 主页面路由组件 */
import React, { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { SuspenseLoading } from 'src/components/Loading'

const notFound = lazy(() => import('src/components/Error/404'))
const Home = lazy(() => import('./home/Home'))
class MainRoute extends React.Component<any, {}> {
  constructor(props: any) {
    super(props)
  }
  public render() {
    const location = this.props.location
    const { pathname } = location
    return (
      <TransitionGroup className="main-route">
        <CSSTransition
          key={pathname.split('/')[2]}
          timeout={{ enter: 1000, exit: 0 }}
          classNames={'fade'}
        >
          <Suspense fallback={<SuspenseLoading />}>
            <Switch location={location}>
              <Route path="/main/home" component={Home} />
              <Route path="/main/404" component={notFound} />
              <Redirect to="/main/404" />
            </Switch>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}
export default MainRoute
