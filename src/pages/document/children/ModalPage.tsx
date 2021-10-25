/** @format */

import React from 'react'
import { Button, Modal, Row, Col, Divider } from 'antd'
const ModalPage = () => {
  const [modalDark, setModalDark] = React.useState(false)
  function showModal() {
    setModalDark(true)
  }
  function handleCancel() {
    setModalDark(false)
  }

  return (
    <div>
      <h1>Modal</h1>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>
          <Button onClick={showModal}>modal</Button>
          <Modal
            title="Basic Modal"
            visible={modalDark}
            onOk={showModal}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
    </div>
  )
}
export default ModalPage
