/*
 * @Descripttion: 登录页
 * @version:
 * @Author: luolei
 * @Date: 2020-09-11 09:53:07
 * @LastEditors: janasluo
 * @LastEditTime: 2021-09-18 16:18:23
 */

import * as React from 'react'
import { Button } from 'antd'
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
  @observable public loginType: string = 'password'
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
  public login = async (value: any): Promise<any> => {
    const res = await this.userService.login({
      password: value.password,
      username: value.username
    })
    if (res.status === 200) {
      const res1 = await this.userService.getUserInfo()
      if (res1.status === 200) {
        this.userStore.login(res1.data)
      }
      this.props.history.push('/main/backStage/app')
    }
  }

  public render() {
    return (
      <div className={styl.login}>
        <Button
          onClick={() =>
            this.login({
              password: 'password',
              username: 'username'
            })
          }
        >
          登录
        </Button>
      </div>
    )
  }
}

export default Login
