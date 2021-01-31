/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2020-11-20 10:04:25
 * @LastEditors: luolei
 * @LastEditTime: 2020-11-20 17:58:37
 */

import React, { FC } from 'react'
import './index.styl'

interface HzButtonProps {
  size?: string // dense large
  type?: string // primary default text outline
  disabled?: boolean
  onClick?: () => void
}
const HzButton: FC<HzButtonProps> = props => {
  const { size, type, disabled, onClick, children } = props
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }
  return (
    <div
      className={`hz-btn ${type} ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
    >
      <button className={`btn ${size}`}>{children}</button>
    </div>
  )
}
HzButton.defaultProps = {
  size: 'dense',
  type: 'text',
  disabled: false
}
export default HzButton
