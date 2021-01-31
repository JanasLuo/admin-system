/** @format */

import React from 'react'
import { Tag, Row, Col, Divider } from 'antd'

const TagPage = () => {
  return (
    <div>
      <h1>Tags</h1>
      <h3>Outliend</h3>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4}>Disabled</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Default</Col>
        <Col span={4}>
          <Tag closable>Tag</Tag>
        </Col>
        <Col span={4}>
          <Tag className="disabled" closable>
            Tag
          </Tag>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>small</Col>
        <Col span={4}>
          <Tag closable className="small-tag">
            Tag
          </Tag>
        </Col>
        <Col span={4}>
          <Tag closable className="small-tag disabled">
            Tag
          </Tag>
        </Col>
      </Row>
      <Divider />

      <h3>Solid Tag</h3>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4}>Disabled</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Default</Col>
        <Col span={4}>
          <Tag closable className="solid-tag">
            Tag
          </Tag>
        </Col>
        <Col span={4}>
          <Tag closable className="solid-tag disabled">
            Tag
          </Tag>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>small</Col>
        <Col span={4}>
          <Tag closable className="small-tag solid-tag">
            Tag
          </Tag>
        </Col>
        <Col span={4}>
          <Tag closable className="small-tag solid-tag disabled">
            Tag
          </Tag>
        </Col>
      </Row>
      <Divider />

      <div>
        <h3>Other Tag</h3>
        <div>
          <Tag color="rgba(15, 34, 67, 0.07)">default</Tag>
          <Tag color="default">default</Tag>

          <Tag color="red">red</Tag>
          <Tag color="orange">orange</Tag>
          <Tag color="green">green</Tag>
          <Tag color="blue" className="small-tag">
            blue
          </Tag>
          <Tag color="yellow">yellow</Tag>
        </div>
      </div>
    </div>
  )
}
export default TagPage
