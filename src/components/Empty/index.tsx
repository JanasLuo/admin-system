/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2020-11-20 15:17:38
 * @LastEditors: janasluo
 * @LastEditTime: 2021-10-11 15:27:04
 */

import React from 'react'
import { Button } from 'antd'
import style from '!style-loader!css-loader?modules=true!stylus-loader!./index.styl'
interface EmptyProps {
  /**
   * 名称
   */
  label?: string
}
/**
 * 空数据
 */
const Empty = (props: EmptyProps) => {
  const { label } = props
  return (
    <div className={style.empty}>
      {/* <div className="empty"> */}
      <Button type="primary">dddd</Button>
      <div className={style.empty_bg}></div>
      {/* <div className="empty_bg"></div> */}
      <div className={style.empty_label}>{label}</div>
      {/* <div className="empty_label">{label}</div> */}
    </div>
  )
}
Empty.defaultProps = {
  label: '暂无数据'
}
export default Empty
