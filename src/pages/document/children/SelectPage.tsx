/** @format */

import React, { useEffect, useState } from 'react'
import { Select, message, Row, Col, Divider } from 'antd'
const { Option } = Select
const SelectPage = () => {
  return (
    <div>
      <h1>Select</h1>
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
        <Col span={4}>Small Select</Col>
        <Col span={4}>
          <Select
            size="small"
            placeholder="Basic usage"
            style={{ width: 200 }}
            // open={true}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
        <Col span={4} className="has-error">
          <Select size="small" placeholder="Basic usage" style={{ width: 200 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select
            size="small"
            disabled
            placeholder="Basic usage"
            style={{ width: 200 }}
          >
            <Option value="jack">Jack</Option>
          </Select>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>medium Select</Col>
        <Col span={4}>
          <Select
            placeholder="Basic usage"
            style={{ width: 200 }}
            // open={true}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
        <Col span={4} className="has-error">
          <Select placeholder="Basic usage" style={{ width: 200 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select disabled placeholder="Basic usage" style={{ width: 200 }}>
            <Option value="jack">Jack</Option>
          </Select>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Large Select</Col>
        <Col span={4}>
          <Select
            size="large"
            placeholder="Basic usage"
            style={{ width: 200 }}
            // open={true}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
        <Col span={4} className="has-error">
          <Select size="large" placeholder="Basic usage" style={{ width: 200 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select
            size="large"
            disabled
            placeholder="Basic usage"
            style={{ width: 200 }}
          >
            <Option value="jack">Jack</Option>
          </Select>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>多选 Select</Col>
        <Col span={4}>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['jack', 'lucy2']}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy1">Lucy1</Option>
            <Option value="lucy2">Lucy2</Option>
            <Option value="lucy3">Lucy3</Option>
            <Option value="lucy4">Lucy4</Option>
            <Option value="lucy5">Lucy5</Option>
          </Select>
        </Col>
        <Col span={4} className="has-error">
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['jack', 'lucy2']}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy1">Lucy1</Option>
            <Option value="lucy2">Lucy2</Option>
            <Option value="lucy3">Lucy3</Option>
            <Option value="lucy4">Lucy4</Option>
            <Option value="lucy5">Lucy5</Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['jack', 'lucy2']}
            disabled
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy1">Lucy1</Option>
            <Option value="lucy2">Lucy2</Option>
            <Option value="lucy3">Lucy3</Option>
            <Option value="lucy4">Lucy4</Option>
            <Option value="lucy5">Lucy5</Option>
          </Select>
        </Col>
      </Row>
      {/* 
      <h6>Select</h6>
      <div>
        <Select
          dropdownClassName="hz-blue-antd"
          placeholder="Basic usage"
          style={{ width: 200 }}
          // open={true}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select disabled placeholder="Basic usage" style={{ width: 200 }}>
          <Option value="jack">Jack</Option>
        </Select>
      </div>
      <div className="has-error">
        <Select
          dropdownClassName="hz-blue-antd"
          placeholder="Basic usage"
          style={{ width: 200 }}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select disabled placeholder="Basic usage" style={{ width: 200 }}>
          <Option value="jack">Jack</Option>
        </Select>
      </div> */}
    </div>
  )
}
export default SelectPage
