/* hooks组件 */

import React from 'react'

import { observer } from 'mobx-react-lite' // 6.x or mobx-react-lite@1.4.0

import userStore from 'src/stores/modules/user'
import styles from './index.styl'

import { history } from 'src/routers'
export interface HeaderProps {
  sigout: () => Promise<any>
  location: any
}

const Header = (props: HeaderProps) => {
  function sigout() {
    userStore.sigout()
  }

  const gohome = () => {
    history.replace('/main/home')
  }
  return (
    <div className={`${'header-main'} ${styles.header}`}>
      <div className="left-box" onClick={gohome}></div>
      <div className="right-box">
        <p className="name">{userStore.getAccount().name || '警官'}</p>
        <p className="dept">{userStore.getAccount().org_name || '公安局'}</p>
        <p onClick={sigout}>退出</p>
      </div>
    </div>
  )
}

export default observer(Header)
