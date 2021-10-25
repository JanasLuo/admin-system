/** @format */

import React from 'react'
import { Button, Checkbox, Row, Col, Divider } from 'antd'
const CheckboxPage = () => {
  function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <div>
      <h1>Checkbox</h1>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>
          <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox onChange={onChange} disabled>
            Checkbox
          </Checkbox>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}></Col>
        <Col span={4}>
          <Checkbox onChange={onChange} indeterminate={true}>
            Checkbox
          </Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox onChange={onChange} indeterminate={true} disabled>
            Checkbox
          </Checkbox>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
    </div>
  )
}
export default CheckboxPage
