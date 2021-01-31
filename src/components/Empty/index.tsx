/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2020-11-20 15:17:38
 * @LastEditors: luolei
 * @LastEditTime: 2020-11-20 17:58:27
 */

import React, { FC } from 'react'
import style from './index.styl'

interface EmptyProps {
  label?: string
}
const Empty: FC<EmptyProps> = props => {
  const { label } = props
  return (
    <div className={style.empty}>
      <div className={style.empty_bg}></div>
      <div className={style.empty_label}>{label}</div>
    </div>
  )
}
Empty.defaultProps = {
  label: '暂无数据'
}
export default Empty
