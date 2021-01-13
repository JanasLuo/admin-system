/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2020-11-20 17:34:33
 * @LastEditors: wqy
 * @LastEditTime: 2020-12-07 17:09:35
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
  const { label, children, labelWidth, align, flexVerticalAlign } = props
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
        <div className="form-label" style={labelStyle}>
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
