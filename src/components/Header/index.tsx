/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-15 11:35:57
 * @LastEditors: luolei
 * @LastEditTime: 2021-01-31 21:47:33
 */

import React from 'react'
import { observer } from 'mobx-react-lite' // 6.x or mobx-react-lite@1.4.0
import styles from './index.styl'
import UserStore from 'src/stores/modules/user'
import { history } from 'src/routers'
export interface HeaderProps {
  sigout: () => Promise<any>
  location: any
}

const Header = (props: HeaderProps) => {
  // const sigout = async () => {
  //   await UserStore.sigout()
  // }

  const gohome = () => {
    history.replace('/main/home')
  }
  const {
    header,
    left_box,
    right_box,
    user_header,
    user_name,
    notification,
    setting,
    help,
    logout
  } = styles
  return (
    <div className={`header-main ${header}`}>
      <div className={left_box} onClick={gohome}></div>

      <div className={right_box}>
        <span className={user_header}></span>
        <span className={user_name}>
          {UserStore.getAccount().name || '警官'}
        </span>
        <span className={notification}></span>
        <span className={setting}></span>
        <span className={help}></span>
        <a className={logout} href="/api/cube_base/userInfo/user_logout">
          ''
        </a>
      </div>
    </div>
  )
}

export default observer(Header)
