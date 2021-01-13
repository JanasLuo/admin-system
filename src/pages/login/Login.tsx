/*
 * @Descripttion: 登录页
 * @version:
 * @Author: luolei
 * @Date: 2020-09-11 09:53:07
 * @LastEditors: luolei
 * @LastEditTime: 2021-01-12 22:52:50
 */

import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { RouteComponentProps } from 'react-router'
import { UserService } from 'src/services/user'
import { UserStore } from 'src/stores/modules/user'
import styl from './login.styl'
export interface LoginProps extends RouteComponentProps<{}> {
  form: any
  userService: UserService
  userStore: UserStore
}

@inject('userService', 'userStore')
@observer
class Login extends React.Component<LoginProps, {}> {
  public userService: UserService
  public userStore: UserStore
  @observable public title: string = '登录页'

  constructor(props: any) {
    super(props)
    this.userService = props.userService
    this.userStore = props.userStore
  }
  public componentDidMount() {
    this.initData()
  }
  public initData() {
    // todo
  }
  public login = async () => {
    const res = await this.userService.login()
    if (res.status === 0) {
      this.userStore.login(res.data)
      this.userStore.login({
        name: '市局长',
        user_id: '1',
        username: 'shiju'
      })
    }

    this.props.history.push('/main/home')
  }

  public render() {
    return (
      <div onClick={this.login} className={styl.login}>
        <div className={styl.title}>{this.title}</div>
      </div>
    )
  }
}

export default Login
