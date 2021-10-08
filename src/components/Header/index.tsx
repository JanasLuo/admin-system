/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-15 11:35:57
 * @LastEditors: janasluo
 * @LastEditTime: 2021-09-30 17:04:35
 */

import React from 'react'
// import { observer } from 'mobx-react-lite' // 6.x or mobx-react-lite@1.4.0
import styles from './index.styl'
import UserStore from 'src/stores/modules/user'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
export interface HeaderProps extends RouteComponentProps {
  sigout?: () => Promise<any>
}

const Header = (props: HeaderProps) => {
  const {
    header,
    right_box,
    user_name,
    notification,
    setting,
    help,
    logout,
    user_header
  } = styles
  return (
    <div className={`header-main ${header} `}>
      <Button type="primary" onClick={() => props.history.push('/base_comp')}>
        基础组件
      </Button>
      <div className={right_box}>
        <span className={user_header}></span>
        <span className={user_name}>
          {UserStore.getAccount().name || '警官'}
        </span>
        <span className={notification}></span>
        <span className={setting}></span>
        <span className={help}></span>
        <a className={logout} href="/api/cube_base/userInfo/user_logout"></a>
      </div>
    </div>
  )
}

export default withRouter(Header)
