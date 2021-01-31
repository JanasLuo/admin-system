/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-19 14:42:28
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-28 20:10:27
 */
import React, { FC } from 'react'
import styles from './index.styl'

interface TypeHzPopButton {
  text: string;
  onClick(): void;
}

const HzPopButton: FC<TypeHzPopButton> = (props) => {
  const { onClick, text } = props
  const { btn } = styles
  return <span className={btn} onClick={onClick}>{text}</span>
}

export default HzPopButton
