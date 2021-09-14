/** @format */

import React, { FC, Suspense, lazy } from 'react'
import style from './index.styl'
import { NavLink } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router'
import { SuspenseLoading } from 'src/components/Loading'
const ButtonPage = lazy(() => import('./children/ButtonPage'))
const TagPage = lazy(() => import('./children/TagPage'))
const DatepickerPage = lazy(() => import('./children/DatepickerPage'))
const InputPage = lazy(() => import('./children/InputPage'))
const ModalPage = lazy(() => import('./children/ModalPage'))
const PaginationPage = lazy(() => import('./children/PaginationPage'))
const NotificationsPage = lazy(() => import('./children/NotificationsPage'))
const TablePage = lazy(() => import('./children/TablePage'))
const StepsPage = lazy(() => import('./children/StepsPage'))
const NavigationPage = lazy(() => import('./children/NavigationPage'))
const TransferPage = lazy(() => import('./children/TransferPage'))
const TreePage = lazy(() => import('./children/TreePage'))
const Badge = lazy(() => import('./children/Badge'))
const Form = lazy(() => import('./children/Form'))
const TabsPage = lazy(() => import('./children/TabsPage'))
const MenuPage = lazy(() => import('./children/MenuPage'))

const TooltipsPage = lazy(() => import('./children/TooltipsPage'))
const UploadPage = lazy(() => import('./children/UploadPage'))
const IconPage = lazy(() => import('./children/IconPage'))
const BaseComp: FC<RouteComponentProps> = props => {
  const location = props.location
  const { pathname } = location
  return (
    <div className={style.base_comp}>
      <div className={style.menu}>
        <NavLink exact activeClassName="active" to="/base_comp/button">
          Button
        </NavLink>
        <NavLink exact to="/base_comp/tag">
          Tag
        </NavLink>
        <NavLink exact to="/base_comp/datepicker">
          Datepicker
        </NavLink>
        <NavLink exact to="/base_comp/input">
          Input And Controls
        </NavLink>
        <NavLink exact to="/base_comp/modal">
          Modal
        </NavLink>
        <NavLink exact to="/base_comp/pagination">
          Pagination
        </NavLink>
        <NavLink exact to="/base_comp/notifications">
          Message And Notifications
        </NavLink>
        <NavLink exact to="/base_comp/table">
          Table
        </NavLink>
        <NavLink exact to="/base_comp/steps">
          Steps
        </NavLink>
        <NavLink exact to="/base_comp/navigation">
          Navigation
        </NavLink>
        <NavLink exact to="/base_comp/transfer">
          Transfer
        </NavLink>
        <NavLink exact to="/base_comp/tree">
          Tree
        </NavLink>
        <NavLink exact to="/base_comp/badge">
          badge
        </NavLink>
        <NavLink exact to="/base_comp/form">
          form
        </NavLink>
        <NavLink exact to="/base_comp/tabs">
          Tabs
        </NavLink>
        <NavLink exact to="/base_comp/menu">
          Menu
        </NavLink>
        <NavLink exact to="/base_comp/tooltip">
          Tooltip
        </NavLink>
        <NavLink exact to="/base_comp/upload">
          Upload
        </NavLink>
        <NavLink exact to="/base_comp/icon">
          Icon
        </NavLink>
      </div>
      <div className={style.page}>
        <TransitionGroup className="main-route">
          <CSSTransition
            key={pathname.split('/')[2]}
            timeout={{ enter: 1000, exit: 0 }}
            classNames="fade"
          >
            <Suspense fallback={<SuspenseLoading />}>
              <Switch location={location}>
                <Route path="/base_comp/button" component={ButtonPage} />
                <Route path="/base_comp/tag" component={TagPage} />
                <Route
                  path="/base_comp/datepicker"
                  component={DatepickerPage}
                />
                <Route path="/base_comp/input" component={InputPage} />
                <Route path="/base_comp/table" component={TablePage} />
                <Route path="/base_comp/steps" component={StepsPage} />
                <Route
                  path="/base_comp/navigation"
                  component={NavigationPage}
                />
                <Route path="/base_comp/transfer" component={TransferPage} />
                <Route path="/base_comp/tree" component={TreePage} />
                <Route path="/base_comp/badge" component={Badge} />
                <Route path="/base_comp/form" component={Form} />
                <Route path="/base_comp/tabs" component={TabsPage} />
                <Route path="/base_comp/menu" component={MenuPage} />
                <Route path="/base_comp/tooltip" component={TooltipsPage} />
                <Route path="/base_comp/upload" component={UploadPage} />

                <Route path="/base_comp/modal" component={ModalPage} />
                <Route
                  path="/base_comp/pagination"
                  component={PaginationPage}
                />
                <Route
                  path="/base_comp/notifications"
                  component={NotificationsPage}
                />
                <Route path="/base_comp/icon" component={IconPage} />
                <Redirect to="/base_comp/button" />
              </Switch>
            </Suspense>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}
export default BaseComp
