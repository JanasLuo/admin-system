/** @format */

import React, { useState } from 'react'
import { Button, Radio, Row, Col, Divider } from 'antd'
const RadioPage = () => {
  const [value, setValue] = useState(1)
  function onChange(e: any) {
    console.log('radio checked', e.target.value)
    // this.setState({
    //   value: e.target.value
    // })
    setValue(e.target.value)
  }
  return (
    <div>
      <h1>Radio</h1>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
          </Radio.Group>
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
export default RadioPage
