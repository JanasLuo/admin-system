/** @format */

import React from 'react'
import { Menu } from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons'

const { SubMenu } = Menu
const MenuPage = () => {
  const current = 'setting:1'
  return (
    <div>
      <h1>Menu Page</h1>
      <h3>Normal</h3>
      <Menu selectedKeys={[current]} mode="horizontal">
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Navigation Three - Submenu"
        >
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </SubMenu>
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    </div>
  )
}
export default MenuPage
