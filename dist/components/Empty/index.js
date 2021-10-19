/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2020-11-20 15:17:38
 * @LastEditors: janasluo
 * @LastEditTime: 2021-10-13 10:27:25
 */
import React from 'react'
import { Button } from 'antd'
import style from '!style-loader!css-loader?modules=true!stylus-loader!./index.styl'
/**
 * 空数据
 */
var Empty = function (props) {
  var label = props.label
  return React.createElement(
    'div',
    { className: style.empty },
    React.createElement(Button, { type: 'primary' }, 'dddd'),
    React.createElement('div', { className: style.empty_bg }),
    React.createElement('div', { className: style.empty_label }, label)
  )
}
Empty.defaultProps = {
  label: '暂无数据'
}
export default Empty
