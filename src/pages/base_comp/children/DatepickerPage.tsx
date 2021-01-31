/** @format */

import React from 'react'
import { Row, Col, DatePicker } from 'antd'
import moment from 'moment'
const { RangePicker } = DatePicker
const TagPage = () => {
  return (
    <div>
      <h1>DatePicker</h1>
      <h3>Outlined</h3>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4}>Disabled</Col>
      </Row>

      <Row>
        <Col span={4}>Dense</Col>
        <Col span={8}>
          <RangePicker
            separator="~"
            format="YYYY-MM-DD HH:mm"
            ranges={{
              Today: [moment(), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')]
            }}
            showTime={{ format: 'HH:mm' }}
          />
        </Col>
        <Col span={4}></Col>
      </Row>
    </div>
  )
}
export default TagPage
