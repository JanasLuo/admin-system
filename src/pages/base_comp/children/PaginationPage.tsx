/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-15 15:01:10
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-15 20:51:37
 */
/** @format */

import React from 'react'
import { Row, Col, Divider, Pagination } from 'antd'

const PaginationPage = () => {
  return (
    <div>
      <h3>Components</h3>
      <Row>
        <Col span={4}>Normal</Col>
        <Col span={20}>
          <Pagination pageSize={10} total={100} showQuickJumper={true} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dense</Col>
        <Col span={20}>
          <Pagination size="small" pageSize={10} total={100} />
        </Col>
      </Row>
      <Divider />
      <h3>Combination</h3>
      <Row>
        <Col span={4}>Normal</Col>
        <Col span={20}>
          <Row>
            <Pagination pageSize={10} total={100} showSizeChanger={false} />
          </Row>
          <Divider />
          <Row>
            <Pagination pageSize={10} total={100} showSizeChanger={false} />
          </Row>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Jump to</Col>
        <Col span={20}>
          <Pagination pageSize={10} total={100} showQuickJumper={true} showSizeChanger={true} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dense</Col>
        <Col span={20}>
          <Row>
            <Pagination size="small" pageSize={10} total={100} />
          </Row>
          <Divider />
          <Row>
            <Pagination size="small" pageSize={10} total={100} />
          </Row>
          <Divider />
          <Row>
            <Pagination size="small" pageSize={10} total={100} />
          </Row>
        </Col>
      </Row>
      <Divider />
    </div>
  )
}
export default PaginationPage
