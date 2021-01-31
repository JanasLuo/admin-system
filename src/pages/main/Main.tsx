/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2021-01-29 20:03:08
 * @LastEditors: luolei
 * @LastEditTime: 2021-01-31 11:19:11
 */
import { observer, inject } from 'mobx-react'
import * as React from 'react'
import { message } from 'antd'
import { RouteComponentProps } from 'react-router'
import { observable } from 'mobx'
import MainRoute from './MainRoute'
import HeaderNav from 'src/components/Header'

import { UserService } from 'src/services/user'
import { UserStore } from 'src/stores/modules/user'

import './main.styl'
@inject('userService', 'userStore')
@observer
class Main extends React.Component<RouteComponentProps<{}>, {}> {
  public userService: UserService
  public userStore: UserStore
  @observable public menuList: any[] = []
  @observable public selectItem: string[]
  @observable public selectExpand: string[] = []

  constructor(props: any) {
    super(props)
    this.initConfig(props)
  }

  public initConfig(props: any): void {
    this.userService = props.userService
    this.userStore = props.userStore
  }

  public sigout = async (): Promise<any> => {
    const res = await this.userService.sigout()
    if (res.status === 0) {
      this.userStore.sigout()
    } else {
      message.error(res.msg || '操作失败0')
    }
  }

  public render() {
    return (
      <div className="main">
        <HeaderNav sigout={this.sigout} location={this.props.location} />
        <div className="main-body">
          <div className="right-body">
            <MainRoute {...this.props}></MainRoute>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
