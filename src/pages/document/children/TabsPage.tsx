/** @format */

import React from 'react'
import { Button, Tabs, Row, Col, Divider, Icon } from 'antd'
const { TabPane } = Tabs
const TabsPage = () => {
  return (
    <div>
      <h1>Tabs</h1>
      <Row>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />

      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>

      <Divider />
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <Icon type="apple" />
              Tab 1
            </span>
          }
          key="1"
        >
          Content of Tab Pane 1
        </TabPane>

        <TabPane
          tab={
            <span>
              <Icon type="apple" />
              Tab 1
            </span>
          }
          key="2"
        >
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
      <Divider />
    </div>
  )
}
export default TabsPage
