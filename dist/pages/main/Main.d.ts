import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { UserService } from 'src/services/user'
import { UserStore } from 'src/stores/modules/user'
import './main.styl'
declare class Main extends React.Component<RouteComponentProps<{}>, {}> {
  userService: UserService
  userStore: UserStore
  menuList: any[]
  selectItem: string[]
  selectExpand: string[]
  constructor(props: any)
  initConfig(props: any): void
  sigout: () => Promise<any>
  render(): JSX.Element
}
export default Main
