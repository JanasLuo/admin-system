/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-25 17:41:48
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-25 17:56:34
 */
import React, { FC } from 'react'
interface InProps {
  color?: string;
  size?: string;
  type: string;
  className?: string | any;
  onClick?(): void;
}

const HzIcon: FC<InProps> = (props) => {
  const { type, className, onClick = () => { } } = props;
  return <span className={type + ' ' + className} onClick={onClick}></span>
}

export default HzIcon
