/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2020-11-20 17:34:33
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-18 11:47:47
 */

import React, { FC } from 'react'
import './index.styl'

interface EmptyProps {
  label?: string
  align?: string
  flexVerticalAlign?: string
  isRequire?: boolean
  labelWidth?: number
}
const FormItem: FC<EmptyProps> = props => {
  const { label, children, labelWidth, align, flexVerticalAlign, isRequire } = props
  const labelStyle: any = {}
  const itemStyle: any = {}
  if (labelWidth) {
    labelStyle.width = labelWidth
  }
  if (align) {
    labelStyle.textAlign = align
  }
  if (flexVerticalAlign) {
    itemStyle.alignItems = flexVerticalAlign
  }
  return (
    <div className="form-item" style={itemStyle}>
      {label && (
        <div className={`form-label ${isRequire ? 'require' : ''}`} style={labelStyle}>
          {label}
        </div>
      )}
      <div className="form-content">{children}</div>
    </div>
  )
}
FormItem.defaultProps = {
  isRequire: false,
  align: 'right'
}
export default FormItem
