/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-19 16:04:09
 * @LastEditors: janasluo
 * @LastEditTime: 2021-09-14 19:08:28
 */
import React, { FC, ReactNode } from 'react'
import { message } from 'antd'
import './index.styl'
import styles from './index.styl'

interface TypeIcon {
  type: string
  showViewDetail?: boolean | undefined
}

interface BaseProps {
  content: ReactNode
  showViewDetail?: boolean | undefined
  viewDetail?(): void
}
interface TypeContent extends BaseProps {
  isSystem?: boolean
  closeBtnClick?(): void
}

interface TypeHzMessage extends BaseProps {
  duration?: number
  onClose?(): void
  onClick?(): void
}

interface PropsType extends TypeHzMessage {
  type:
    | 'success'
    | 'loading'
    | 'info'
    | 'warning'
    | 'warn'
    | 'progress'
    | 'error'
    | 'system'
}

message.config({
  getContainer() {
    return document.body
  }
})
const Icon: FC<TypeIcon> = props => {
  const { type, showViewDetail } = props
  return (
    <div
      className={!showViewDetail ? styles[type] : `${styles[type + '_detail']}`}
    ></div>
  )
}

const Content: FC<TypeContent> = props => {
  const { content, closeBtnClick = () => {}, showViewDetail, isSystem } = props
  const SHOW_CLOSE_BTN = showViewDetail || isSystem
  return (
    <div className={styles.message_content}>
      {content}
      {SHOW_CLOSE_BTN && (
        <>
          {showViewDetail && <span className={styles.view_btn}>view</span>}
          <span
            className={styles.close_btn}
            onClick={() => closeBtnClick()}
          ></span>
        </>
      )}
    </div>
  )
}

class HzMessage {
  private props: PropsType
  private msgCount: number = 1
  private category: 'system' | 'normal'

  public close(key: number) {
    message.destroy(key)
  }
  public success(props: TypeHzMessage) {
    this.category = 'normal'
    this.props = { ...props, type: 'success' }
    this.render()
  }
  public loading(props: TypeHzMessage) {
    this.category = 'normal'
    this.props = { ...props, type: 'loading' }
    this.render()
  }
  public info(props: TypeHzMessage) {
    this.category = 'normal'
    this.props = { ...props, type: 'info' }
    this.render()
  }
  public error(props: TypeHzMessage) {
    this.category = 'normal'
    this.props = { ...props, type: 'error' }
    this.render()
  }
  public warning(props: TypeHzMessage) {
    this.category = 'normal'
    this.props = { ...props, type: 'warning' }
    this.render()
  }
  public warn(props: TypeHzMessage) {
    this.category = 'normal'
    this.props = { ...props, type: 'warn' }
    this.render()
  }
  public progress(props: TypeHzMessage) {
    this.category = 'normal'
    this.props = { ...props, type: 'loading' }
    this.render()
  }
  public systemInfo(props: TypeHzMessage) {
    this.category = 'system'
    this.props = { ...props, type: 'info' }
    this.render()
  }
  public systemWarning(props: TypeHzMessage) {
    this.category = 'system'
    this.props = { ...props, type: 'warning' }
    this.render()
  }
  public systemWarn(props: TypeHzMessage) {
    this.category = 'system'
    this.props = { ...props, type: 'warning' }
    this.render()
  }
  public systemError(props: TypeHzMessage) {
    this.category = 'system'
    this.props = { ...props, type: 'error' }
    this.render()
  }
  public systemSuccess(props: TypeHzMessage) {
    this.category = 'system'
    this.props = { ...props, type: 'success' }
    this.render()
  }
  private render() {
    const {
      duration = 2,
      onClose,
      onClick = () => {},
      content,
      showViewDetail = false,
      viewDetail = () => {},
      type = 'info'
    } = this.props
    const key = this.msgCount
    const IS_SYSTEM = this.category === 'system'
    message[type]({
      key,
      className: IS_SYSTEM
        ? `message_system ${styles.message_system}`
        : showViewDetail
        ? 'view_detail'
        : '',
      showClose: true,
      duration,
      icon: <Icon type={type} showViewDetail={showViewDetail} />,
      content: (
        <Content
          content={content}
          showViewDetail={showViewDetail}
          isSystem={IS_SYSTEM}
          viewDetail={() => viewDetail()}
          closeBtnClick={() => this.close(key)}
        />
      ),
      onClose,
      onClick(e: any) {
        e.persist()
        onClick()
      }
    })

    this.msgCount++
  }
}
export default new HzMessage()
