/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-19 16:57:47
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-28 20:07:00
 */

import React, { FC, ReactNode } from 'react'
import { Modal } from 'antd'
import DeleteConfirmImg from 'src/assets/modal/delete.svg'
import styles from './index.styl'
import HzPopButton from 'src/components/HzPopButton'

interface TypeHzDeleteModal {
  title: string;
  centered?: boolean | undefined;
  content: ReactNode;
  width?: number;
  okText?: string;
  cancelText?: string;
  visible: boolean;
  onOk?(): void;
  onCancel?(): void;
  afterClose?(): void;
}

const CloseIcon = () => {
  return <span className={styles.close_icon}></span>
}

const HzDeleteModal: FC<TypeHzDeleteModal> = (props) => {
  const { title, centered, afterClose, content, width, okText = '确定', cancelText = '取消', visible } = props

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

  const renderFooter = () => {
    return (
      <div className={styles.footer}>
        <div>
          <HzPopButton text={okText} onClick={onOk} />
          <HzPopButton text={cancelText} onClick={onCancel} />
        </div>
      </div>
    )
  }

  return <Modal
    title={title}
    visible={visible}
    centered={centered}
    onOk={onOk}
    onCancel={onCancel}
    afterClose={afterClose}
    width={width || 360}
    footer={renderFooter()}
    closeIcon={<CloseIcon />}
  >
    <div className={styles.delete_content}>
      <img src={DeleteConfirmImg} className={styles.delete_confirm_img} alt="" />
      {content}
    </div>
  </Modal>
}

export default HzDeleteModal
