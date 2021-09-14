/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-19 16:57:47
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-28 20:08:15
 */

import React, { FC, ReactNode } from 'react'
import { Modal } from 'antd'
import styles from './index.styl'

interface TypeModalTitle {
  title: string
  onClose?(): void
}

interface TypeHzMldalLayout extends TypeModalTitle {
  title: string
  centered?: boolean | undefined
  children: ReactNode
  visible: boolean
  afterClose?(): void
}

const ModalTitle: FC<TypeModalTitle> = props => {
  const { title, onClose } = props
  const { back_icon, title_wrapper } = styles
  return (
    <div className={title_wrapper}>
      <span className={back_icon} onClick={onClose}></span>
      {title}
    </div>
  )
}

const HzMldalLayout: FC<TypeHzMldalLayout> = props => {
  const { title, centered, afterClose, children, visible, onClose } = props
  return (
    <Modal
      visible={visible}
      centered={centered}
      afterClose={afterClose}
      footer={null}
      wrapClassName={`modal_layout ${styles.modal_layout}`}
      title={<ModalTitle title={title} onClose={onClose} />}
    >
      {children}
    </Modal>
  )
}

export default HzMldalLayout
