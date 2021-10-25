/** @format */

import React from 'react'
import { Button, message, Row, Col, Divider, Input } from 'antd'
const { Search } = Input
const SearchPage = () => {
  return (
    <div>
      <h1>Serch</h1>
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
        <Col span={4}>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            size="small"
          />
        </Col>
        <Col span={4} className="ant-form-item-has-error">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            size="small"
          />
        </Col>
        <Col span={4}>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            size="small"
            disabled
          />
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>medium</Col>
        <Col span={4}>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </Col>
        <Col span={4} className="ant-form-item-has-error">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </Col>
        <Col span={4}>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            disabled
          />
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>large</Col>
        <Col span={4}>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            size="large"
          />
        </Col>
        <Col span={4} className="ant-form-item-has-error">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            size="large"
          />
        </Col>
        <Col span={4}>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            size="large"
            disabled
          />
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
    </div>
  )
}
export default SearchPage
