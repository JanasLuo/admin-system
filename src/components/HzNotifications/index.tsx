/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-19 12:43:54
 * @LastEditors: janasluo
 * @LastEditTime: 2021-09-14 15:51:42
 */
import React, { FC, ReactNode } from 'react'
import { notification } from 'antd'
import styles from './index.styl'
import HzPopButton from 'src/components/HzPopButton'

interface TypeDescription {
  btnText: string
  showOkBtn: boolean
  description: ReactNode
  message: string | undefined
  onClick(): void
}

interface TypeMessage {
  message: string
}

interface TypeNotificationProps {
  [index: string]: any
}

const Description: FC<TypeDescription> = props => {
  const { description, btn_wrapper, no_message } = styles
  const { btnText, showOkBtn, description: desc, message } = props

  return (
    <div className={`${description} ${!message ? no_message : ''}`}>
      <div>{desc}</div>
      {showOkBtn && (
        <div className={btn_wrapper}>
          <HzPopButton
            text={btnText || '我知道了'}
            onClick={() => {
              // console.log('我知道了')
            }}
          />
        </div>
      )}
    </div>
  )
}

const Message: FC<TypeMessage> = props => {
  const { message } = props
  const { title } = styles
  return <div className={title}>{message}</div>
}

export default {
  open({
    showOkBtn,
    btnText,
    onBtnClick,
    description,
    message
  }: TypeNotificationProps) {
    notification.open({
      className: !message ? 'no_message' : '',
      duration: 1000000,
      message: <Message message={message} />,
      description: (
        <Description
          message={message}
          onClick={onBtnClick}
          btnText={btnText}
          showOkBtn={showOkBtn}
          description={description}
        />
      ),
      onClick() {
        // console.log('Notification Clicked!')
      }
    })
  }
}
