import { __assign, __rest } from 'tslib'
/*
 * @Author: janasluo
 * @Date: 2021-09-29 19:06:49
 * @LastEditTime: 2021-10-09 15:36:15
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/components/Button/Button.tsx
 */
import React from 'react'
import './button.css'
/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
  var _b = _a.primary,
    primary = _b === void 0 ? false : _b,
    _c = _a.size,
    size = _c === void 0 ? 'medium' : _c,
    backgroundColor = _a.backgroundColor,
    label = _a.label,
    props = __rest(_a, ['primary', 'size', 'backgroundColor', 'label'])
  var mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return React.createElement(
    'button',
    __assign(
      {
        type: 'button',
        className: ['storybook-button', 'storybook-button--' + size, mode].join(
          ' '
        ),
        style: { backgroundColor: backgroundColor }
      },
      props
    ),
    label
  )
}
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
}
export default Button
