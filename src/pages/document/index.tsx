/*
 * @Descripttion: document 组件页面
 * @version:
 * @Author: zhengjinxing
 * @Date:
 * @LastEditors:
 * @LastEditTime: 2021-5-18
 */

// 组件页
import React from 'react'
// import { Icon } from 'antd'
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { NavLink } from 'react-router-dom'
import { Radio } from 'antd'
import './index.styl'
import Loadable from 'react-loadable'

const ButtonPage = Loadable({
  loader: () => import('./children/ButtonPage'),
  loading: () => null
})
const MessagePage = Loadable({
  loader: () => import('./children/MessagePage'),
  loading: () => null
})
const StepsPage = Loadable({
  loader: () => import('./children/StepsPage'),
  loading: () => null
})
const InputPage = Loadable({
  loader: () => import('./children/InputPage'),
  loading: () => null
})
const SelectPage = Loadable({
  loader: () => import('./children/SelectPage'),
  loading: () => null
})
const PaginationPage = Loadable({
  loader: () => import('./children/PaginationPage'),
  loading: () => null
})
const TooltipsPage = Loadable({
  loader: () => import('./children/TooltipsPage'),
  loading: () => null
})
const ModalPage = Loadable({
  loader: () => import('./children/ModalPage'),
  loading: () => null
})
const DatePickerPage = Loadable({
  loader: () => import('./children/DatePickerPage'),
  loading: () => null
})
const SearchPage = Loadable({
  loader: () => import('./children/SearchPage'),
  loading: () => null
})
const TablePage = Loadable({
  loader: () => import('./children/TablePage'),
  loading: () => null
})
const TabsPage = Loadable({
  loader: () => import('./children/TabsPage'),
  loading: () => null
})
const BadgePage = Loadable({
  loader: () => import('./children/BadgePage'),
  loading: () => null
})
const RadioPage = Loadable({
  loader: () => import('./children/RadioPage'),
  loading: () => null
})
const CheckboxPage = Loadable({
  loader: () => import('./children/CheckboxPage'),
  loading: () => null
})
const SwitchPage = Loadable({
  loader: () => import('./children/SwitchPage'),
  loading: () => null
})
const SearchButtonPage = Loadable({
  loader: () => import('./children/SearchButtonPage'),
  loading: () => null
})
class Document extends React.Component<RouteComponentProps, {}> {
  constructor(props: any) {
    super(props)
  }

  public componentDidMount() {
    document.body.className = 'hz-blue-antd'
  }

  public changeTheme = (target: any) => {
    document.body.className = document.body.className
      .replace('light', target.value)
      .replace('blue', target.value)
      .replace('dark', target.value)
  }

  public render() {
    const location = this.props.location
    const { pathname } = location
    return (
      <div className="document">
        <div className="document-header">
          <Radio.Group
            onChange={({ target }) => {
              this.changeTheme(target)
            }}
            defaultValue="blue"
            // value={theme}
          >
            {[
              {
                value: 'light',
                name: '浅色'
              },
              {
                value: 'blue',
                name: '蓝色'
              },
              {
                value: 'dark',
                name: '深色'
              }
            ].map(item => (
              <Radio value={item.value} key={item.value}>
                {item.name}
              </Radio>
            ))}
          </Radio.Group>
        </div>
        <div className="document-container">
          <div className="link-nav">
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/button"
            >
              Button
            </NavLink>
            {/* <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/searchButton"
            >
              SearchButton
            </NavLink> */}
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/message"
            >
              Message
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/steps"
            >
              Steps
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/input"
            >
              Input
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/search"
            >
              Search
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/select"
            >
              Select
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/table"
            >
              Table
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/pagination"
            >
              Pagination
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/tooltips"
            >
              Tooltips
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/modal"
            >
              Modal
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/datePicker"
            >
              DatePicker
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/tabs"
            >
              Tabs
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/badge"
            >
              Badge
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/radio"
            >
              Radio
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/checkbox"
            >
              Checkbox
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/document/base_comp/switch"
            >
              Switch
            </NavLink>
          </div>
          <TransitionGroup className="document-route">
            <CSSTransition
              key={pathname.split('/')[3]}
              timeout={{ enter: 1000, exit: 0 }}
              classNames={'fade'}
            >
              <Switch location={location}>
                <Route
                  path="/document/base_comp/button"
                  component={ButtonPage}
                />
                <Route
                  path="/document/base_comp/message"
                  component={MessagePage}
                />
                <Route path="/document/base_comp/steps" component={StepsPage} />
                <Route path="/document/base_comp/input" component={InputPage} />
                <Route
                  path="/document/base_comp/search"
                  component={SearchPage}
                />
                <Route
                  path="/document/base_comp/select"
                  component={SelectPage}
                />
                <Route
                  path="/document/base_comp/pagination"
                  component={PaginationPage}
                />
                <Route path="/document/base_comp/table" component={TablePage} />
                <Route
                  path="/document/base_comp/tooltips"
                  component={TooltipsPage}
                />
                <Route path="/document/base_comp/modal" component={ModalPage} />
                <Route
                  path="/document/base_comp/datePicker"
                  component={DatePickerPage}
                />
                <Route path="/document/base_comp/tabs" component={TabsPage} />
                <Route path="/document/base_comp/badge" component={BadgePage} />
                <Route path="/document/base_comp/radio" component={RadioPage} />
                <Route
                  path="/document/base_comp/checkbox"
                  component={CheckboxPage}
                />
                <Route
                  path="/document/base_comp/switch"
                  component={SwitchPage}
                />
                <Route
                  path="/document/base_comp/searchButton"
                  component={SearchButtonPage}
                />
                <Redirect to="/document/base_comp/button" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default Document
