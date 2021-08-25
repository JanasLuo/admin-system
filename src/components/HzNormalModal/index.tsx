/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-19 16:57:47
 * @LastEditors: mark
 * @LastEditTime: 2021-01-29 19:32:51
 */

import React, { FC, ReactNode } from 'react'
import { Modal } from 'antd'
import styles from './index.styl'
import HzPopButton from 'src/components/HzPopButton'
import HzIcon from 'src/components/HzIcon'
interface HzNormalMldal {
  title: string
  centered?: boolean | undefined
  content?: ReactNode
  width?: number
  okText?: string
  cancelText?: string
  visible: boolean
  showHelp?: false
  footerHidden?: boolean
  onOk?(): void
  onCancel?(): void
  afterClose?(): void
}

const HzNormalMldal: FC<HzNormalMldal> = props => {
  const {
    title,
    afterClose,
    centered,
    children,
    width,
    okText = '确定',
    cancelText = '取消',
    visible,
    showHelp = false,
    footerHidden = false
  } = props
  const onOk = () => {
    if (props.onOk) {
      props.onOk()
    }
  }
  const onCancel = () => {
    if (props.onCancel) {
      props.onCancel()
    }
  }
  const { footer } = styles

  const renderFooter = () => {
    return (
      <div className={footer}>
        <div className={styles.help}>{showHelp && '帮助'}</div>
        {!footerHidden && (
          <div>
            <HzPopButton text={okText} onClick={onOk} />
            <HzPopButton text={cancelText} onClick={onCancel} />
          </div>
        )}
      </div>
    )
  }

  return (
    <Modal
      wrapClassName="normal_modal"
      title={title}
      visible={visible}
      centered={centered}
      onOk={onOk}
      onCancel={onCancel}
      afterClose={afterClose}
      width={width || 360}
      footer={renderFooter()}
      closeIcon={<HzIcon type="hz-icon-main-close" />}
    >
      {children}
    </Modal>
  )
}

export default HzNormalMldal
