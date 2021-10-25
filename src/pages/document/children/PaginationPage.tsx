/** @format */

import React from 'react'
import { Button, Pagination, Row, Col, Divider } from 'antd'
const PaginationPage = () => {
  return (
    <div>
      <h1>Pagination</h1>
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
        <Col span={4}>small</Col>
        <Col span={20}>
          <Pagination
            size="small"
            showSizeChanger
            showQuickJumper
            defaultCurrent={2}
            total={500}
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>medium</Col>
        <Col span={20}>
          <Pagination
            showSizeChanger
            showQuickJumper
            defaultCurrent={2}
            total={500}
          />
        </Col>
      </Row>
      <Divider />
      {/* 
      <h3>Pagination</h3>
      <div>
        <h6>Normal</h6>
        <div>
          <Pagination defaultCurrent={1} total={50} />
        </div>
        <h6>Jump to</h6>
        <div>
          <Pagination
            showSizeChanger
            showQuickJumper
            defaultCurrent={2}
            total={500}
          />
        </div>
        <h6>Dense</h6>
        <div>
          <Pagination
            className="dense"
            size="small"
            total={50}
            showQuickJumper
          />
        </div>
      </div> */}
    </div>
  )
}
export default PaginationPage
