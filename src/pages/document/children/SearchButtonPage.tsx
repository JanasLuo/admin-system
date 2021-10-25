/** @format */

import React from 'react'
import { Button, Dropdown, Menu, Icon, Row, Col, Divider } from 'antd'
const ButtonPage = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  )
  return (
    <div>
      <Row>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <h1>Small</h1>
      <Row>
        <Col span={4}>small</Col>
        <Col span={4}>
          <Button type="primary" icon="search" size="small">
            Search
          </Button>
        </Col>
        <Col span={4}>
          <Button type="primary" icon="search" size="small">
            Search
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>medium</Col>
        <Col span={4}>
          <Button type="primary" icon="search">
            Search
          </Button>
        </Col>
        <Col span={4}>
          <Button type="primary" icon="search" disabled>
            Search
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>large</Col>
        <Col span={4}>
          <Button type="primary" icon="search" size="large">
            Search
          </Button>
        </Col>
        <Col span={4}>
          <Button disabled type="primary" icon="search" size="large">
            Search
          </Button>
        </Col>
      </Row>
      <Divider />
    </div>
  )
}
export default ButtonPage
