/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-15 14:55:04
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-22 10:58:58
 */
/** @format */

import React, { useState } from 'react'
import { Row, Col, Button, Divider } from 'antd'
import HzDeleteModal from 'src/components/HzDeleteModal'
import HzNormalModal from 'src/components/HzNormalModal'

const ModalPage = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [normalModalVisible, setNormalModalVisible] = useState(false);
  return (
    <div>
      <h1>Text Field</h1>
      <Row>
        <Col span={4} >Normal</Col>
        <Col span={4}>
          <HzDeleteModal title="Simple dialog" content="Are you sure you want to delete it?" visible={deleteModalVisible} />
          <Button onClick={() => setDeleteModalVisible(true)}>Normal</Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4} >Normal</Col>
        <Col span={4}>
          <HzNormalModal title="Simple dialog" content="Are you sure you want to delete it?" visible={normalModalVisible} ></HzNormalModal>
          <Button onClick={() => setNormalModalVisible(true)}>Normal</Button>
        </Col>
      </Row>
    </div>
  )
}
export default ModalPage
