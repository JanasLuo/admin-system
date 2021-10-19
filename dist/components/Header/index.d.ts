import React from 'react'
import { RouteComponentProps } from 'react-router'
export interface HeaderProps extends RouteComponentProps {
  sigout?: () => Promise<any>
}
declare const _default: React.ComponentClass<Pick<HeaderProps, 'sigout'>, any> &
  import('react-router').WithRouterStatics<(props: HeaderProps) => JSX.Element>
export default _default
