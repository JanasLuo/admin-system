/*
 * @Author: janasluo
 * @Date: 2020-02-22 09:55:08
 * @LastEditTime: 2021-10-20 13:04:10
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/components/Button/Button.tsx
 */
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'
export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string
  /**设置 Button 的禁用 */
  disabled?: boolean
  /**设置 Button 的尺寸 */
  size?: ButtonSize
  /**设置 Button 的类型 */
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export const Button = (props: ButtonProps) => {
  const { btnType, className, disabled, size, children, href, ...restProps } =
    props
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled
  })
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button
