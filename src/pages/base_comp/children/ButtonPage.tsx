/** @format */

import React from 'react'
import { Button, Row, Col, Dropdown, Menu, Divider } from 'antd'
import { UserOutlined, DownOutlined, SkinOutlined } from '@ant-design/icons'
const ButtonPage = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  )
  return (
    <div>
      <h3>Contained button</h3>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4}>Disabled</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dense</Col>
        <Col span={4}>
          <Button type="primary" size="small">
            Button
          </Button>
        </Col>
        <Col span={4}>
          <Button type="primary" size="small" disabled>
            Button
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Medium</Col>
        <Col span={4}>
          <Button type="primary">Button</Button>
        </Col>
        <Col span={4}>
          <Button type="primary" disabled>
            Button
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Large</Col>
        <Col span={4}>
          <Button type="primary" size="large">
            Button
          </Button>
        </Col>
        <Col span={4}>
          <Button type="primary" size="large" disabled>
            Button
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dropdown</Col>
        <Col span={4}>
          <Dropdown overlay={menu}>
            <Button type="primary" size="small">
              Button <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col span={4}>
          <Dropdown disabled overlay={menu}>
            <Button type="primary" size="small">
              Button <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Divider />
      <h3>Outlined button</h3>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4}>Disabled</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dense</Col>
        <Col span={4}>
          <Button size="small">Button</Button>
        </Col>
        <Col span={4}>
          <Button size="small" disabled>
            Button
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Medium</Col>
        <Col span={4}>
          <Button>Button</Button>
        </Col>
        <Col span={4}>
          <Button disabled>Button</Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Large</Col>
        <Col span={4}>
          <Button size="large">Button</Button>
        </Col>
        <Col span={4}>
          <Button size="large" disabled>
            Button
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dropdown</Col>
        <Col span={4}>
          <Dropdown overlay={menu}>
            <Button size="small">
              Button <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col span={4}>
          <Dropdown disabled overlay={menu}>
            <Button size="small">
              Button <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Divider />
      <h3>Text button</h3>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4}>Disabled</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dense</Col>
        <Col span={4}>
          <Button type="text" size="small">
            Button
          </Button>
        </Col>
        <Col span={4}>
          <Button type="text" size="small" disabled>
            Button
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Medium</Col>
        <Col span={4}>
          <Button className="primary" type="text">
            Button
          </Button>
        </Col>
        <Col span={4}>
          <Button type="text" disabled>
            Button
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Large</Col>
        <Col span={4}>
          <Button type="text" size="large">
            Button
          </Button>
        </Col>
        <Col span={4}>
          <Button type="text" size="large" disabled>
            Button
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dropdown</Col>
        <Col span={4}>
          <Dropdown overlay={menu}>
            <Button type="text" size="small">
              Button <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col span={4}>
          <Dropdown disabled overlay={menu}>
            <Button type="text" size="small">
              Button <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dropdown</Col>
        <Col span={4}>
          <Dropdown overlay={menu}>
            <Button type="text">
              <SkinOutlined /> Button
            </Button>
          </Dropdown>
        </Col>
        <Col span={4}>
          <Dropdown disabled overlay={menu}>
            <Button type="text">
              <SkinOutlined /> Button
            </Button>
          </Dropdown>
        </Col>
      </Row>
    </div>
  )
}
export default ButtonPage
