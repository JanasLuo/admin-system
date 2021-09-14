/*
 * @Descripttion: 登录页
 * @version:
 * @Author: luolei
 * @Date: 2020-09-11 09:53:07
 * @LastEditors: luolei
 * @LastEditTime: 2021-01-31 22:13:17
 */

import * as React from 'react'
import {
  Form,
  Input,
  Button,
  Checkbox
  //  message, Tooltip
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
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
      // this.userStore.login(res.data)
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
        {/* <div className={styl.title}>{this.title}</div> */}

        <div className={styl.login_right}>
          <div className={styl.login_icon}></div>
        </div>
        <div className={styl.login_left}>
          <div className={styl.form_box}>
            <div className={styl.login_title}></div>
            <div className={styl.tabs}>
              <span
                className={
                  this.loginType === 'password'
                    ? styl.tabs_item + ' ' + styl.active
                    : styl.tabs_item
                }
              >
                密码登录
              </span>
            </div>
            <Form onFinish={this.login}>
              <Form.Item
                name="username"
                rules={[
                  {
                    message: '用户名不能为空',
                    required: true
                  }
                ]}
              >
                <Input
                  bordered={false}
                  prefix={<UserOutlined style={{ color: '#193586' }} />}
                  placeholder="请输入用户名"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    message: '密码不能为空00',
                    required: true
                  }
                ]}
              >
                {/* {getFieldDecorator('password', {
                rules: [
                  {
                    message: '密码不能为空',
                    required: true
                  }
                ]
              })(
                <Input
                  // prefix={<Icon type="lock" className="placeholder-color" />}
                  type="password"
                  placeholder="请输入密码"
                />
              )} */}
                <Input
                  bordered={false}
                  prefix={<LockOutlined style={{ color: '#193586' }} />}
                  type="password"
                  placeholder="请输入密码"
                />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>记住我</Checkbox>
              </Form.Item>
              <Form.Item>
                <div className="sub-box">
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    登录
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
