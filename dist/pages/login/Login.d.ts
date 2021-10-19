import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { UserService } from 'src/services/user'
import { UserStore } from 'src/stores/modules/user'
export interface LoginProps extends RouteComponentProps<{}> {
  form: any
  userService: UserService
  userStore: UserStore
}
declare class Login extends React.Component<LoginProps, {}> {
  userService: UserService
  userStore: UserStore
  title: string
  loginType: string
  constructor(props: any)
  componentDidMount(): void
  initData(): void
  login: (value: any) => Promise<any>
  render(): JSX.Element
}
export default Login
