/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2020-11-20 16:12:48
 * @LastEditors: mark
 * @LastEditTime: 2021-01-08 15:55:01
 */

import React, { FC } from 'react'
import style from './index.styl'
interface HzTabsProps {
  tabs: any[]
  activeType?: any
  onTabChange: (type: any) => void
}
const HzTabs: FC<HzTabsProps> = props => {
  const { tabs, onTabChange, activeType } = props

  const changeTab = (type: any) => {
    onTabChange(type)
  }
  return (
    <ul className={style['hz-tabs']}>
      {tabs.map((item: any) => (
        <li
          onClick={() => changeTab(item.value)}
          key={item.value}
          className={activeType === item.value ? `active` : ''}
        >
          {item.icon && <i className={item.icon}></i>}
          <span>{item.name}</span>
          {item.count && <span className="number">{item.count}</span>}

          {/* {item.badge && item.badge > 0 && (
            <span className="badge">{item.badge}</span>
          )} */}
        </li>
      ))}
    </ul>
  )
}
export default HzTabs
