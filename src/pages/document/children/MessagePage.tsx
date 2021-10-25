/** @format */

import React from 'react'
import { Button, message, Row, Col, Divider } from 'antd'
const MessagePage = () => {
  function messageSuccess() {
    // message.info('This is a normal message')
    message.success({ content: 'success!', duration: 5000 })
  }
  function messageError() {
    // message.info('This is a normal message')
    message.error({ content: 'error!', duration: 5000 })
  }
  function messageWarning() {
    // message.info('This is a normal message')
    message.warning({ content: 'warning!', duration: 5000 })
  }
  function messageInfo() {
    // message.info('This is a normal message')
    message.info({ content: 'info!', duration: 5000 })
  }
  return (
    <div>
      <h1>Notifications</h1>
      <Row>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>success</Col>
        <Col span={4}>
          <Button type="primary" onClick={messageSuccess}>
            success
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>error</Col>
        <Col span={4}>
          <Button type="primary" onClick={messageError}>
            error
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>waning</Col>
        <Col span={4}>
          <Button type="primary" onClick={messageWarning}>
            waning
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>info</Col>
        <Col span={4}>
          <Button type="primary" onClick={messageInfo}>
            info
          </Button>
        </Col>
      </Row>
      <Divider />
    </div>
  )
}
export default MessagePage
