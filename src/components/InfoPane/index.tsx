/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-20 20:05:08
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-21 14:01:02
 */
import React, { ReactNode, FC } from 'react'
import styles from './index.styl'

interface InfoPaneProps {
  children: ReactNode
  title: string
}

const InfoPane: FC<InfoPaneProps> = props => {
  const { children, title } = props
  const { wrapper, title: paneTitle, content } = styles
  return (
    <div className={wrapper}>
      <div className={paneTitle}>{title}</div>
      <div className={content}>{children}</div>
    </div>
  )
}

export default InfoPane
