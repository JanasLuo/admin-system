/** @format */

import React from 'react'
import { Button, Badge, Row, Col, Divider } from 'antd'
const BadgePage = () => {
  return (
    <div>
      <h1>Badge</h1>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>
          <Badge count={4} />
        </Col>
        <Col span={4}>
          <Badge count={25} />
        </Col>
        <Col span={4}>
          <Badge count={109} />
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
    </div>
  )
}
export default BadgePage
