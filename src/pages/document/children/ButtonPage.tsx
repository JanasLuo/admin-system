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
      {/* small */}
      <h1>Small</h1>
      <Divider />
      <Row>
        <Col span={4}>small_primary</Col>
        <Col span={4}>
          <Button size="small" type="primary">
            BUTTON
          </Button>
        </Col>
        <Col span={4}>
          <Button size="small" type="primary" disabled>
            DISABLED
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>small_scondary</Col>
        <Col span={4}>
          <Button size="small" ghost>
            SCONDARY
          </Button>
        </Col>
        <Col span={4}>
          <Button size="small" ghost disabled>
            DISABLED
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>small_text-buttons</Col>
        <Col span={4}>
          <Dropdown overlay={menu}>
            <Button size="small">
              Button <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
        <Col span={4}>
          <Dropdown overlay={menu} disabled>
            <Button size="small">
              Button <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>small_link_buttons</Col>
        <Col span={4}>
          <Button size="small" type="link">
            Link
          </Button>
        </Col>
        <Col span={4}>
          <Button size="small" disabled type="link">
            Link
          </Button>
        </Col>
      </Row>
      <Divider />
      {/* medium */}
      <h1>Medium</h1>
      <Divider />
      <Row>
        <Col span={4}>medium_Primary</Col>
        <Col span={4}>
          <Button size="default" type="primary">
            BUTTON
          </Button>
        </Col>
        <Col span={4}>
          <Button size="default" type="primary" disabled>
            DISABLED
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>medium_Scondary</Col>
        <Col span={4}>
          <Button size="default" ghost>
            SCONDARY
          </Button>
        </Col>
        <Col span={4}>
          <Button size="default" ghost disabled>
            DISABLED
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>medium_Text-buttons</Col>
        <Col span={4}>
          <Dropdown overlay={menu}>
            <Button size="default">
              Button <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
        <Col span={4}>
          <Dropdown overlay={menu} disabled>
            <Button size="default">
              Button <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>medium_link_buttons</Col>
        <Col span={4}>
          <Button type="link">Link</Button>
        </Col>
        <Col span={4}>
          <Button disabled type="link">
            Link
          </Button>
        </Col>
      </Row>
      <Divider />
      {/* Large */}
      <h1>Large</h1>
      <Divider />
      <Row>
        <Col span={4}>Large_Primary</Col>
        <Col span={4}>
          <Button size="large" type="primary">
            BUTTON
          </Button>
        </Col>
        <Col span={4}>
          <Button size="large" type="primary" disabled>
            DISABLED
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Large_Scondary</Col>
        <Col span={4}>
          <Button size="large" ghost>
            SCONDARY
          </Button>
        </Col>
        <Col span={4}>
          <Button size="large" ghost disabled>
            DISABLED
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Large_Text-buttons</Col>
        <Col span={4}>
          <Dropdown overlay={menu}>
            <Button size="large">
              Button <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
        <Col span={4}>
          <Dropdown overlay={menu} disabled>
            <Button size="large">
              Button <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>large_link_buttons</Col>
        <Col span={4}>
          <Button size="large" type="link">
            Link
          </Button>
        </Col>
        <Col span={4}>
          <Button size="large" disabled type="link">
            Link
          </Button>
        </Col>
      </Row>
      <Divider />
      {/* <div>
        <span>Primary</span>
        <Button type="primary">BUTTON</Button>
        <Button type="primary" disabled>
          DISABLED
        </Button>
      </div>
      {/* <div>
        <span>scondary</span>
        <Button>SCONDARY</Button>
        <Button disabled>DISABLED</Button>
      </div>
      <div>
        <span>text-buttons</span>
        <Dropdown overlay={menu}>
          <Button>
            Button <Icon type="down" />
          </Button>
        </Dropdown>
        <Dropdown overlay={menu} disabled>
          <Button>
            Button <Icon type="down" />
          </Button>
        </Dropdown>
      </div> */}
    </div>
  )
}
export default ButtonPage
