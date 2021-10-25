/** @format */

import React from 'react'
import { Button, Switch, Row, Col, Divider } from 'antd'
const SwitchPage = () => {
  function onChange(checked: any) {
    console.log(`switch to ${checked}`)
  }
  return (
    <div>
      <h1>Switch</h1>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>
          <Switch defaultChecked onChange={onChange} />
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />

      <Row>
        <Col span={4}></Col>
        <Col span={4}>
          <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
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
export default SwitchPage
