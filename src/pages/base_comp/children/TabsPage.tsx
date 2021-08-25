/** @format */

import React from 'react';
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const TabaPage = () => {
  return (
    <div>
      <h1>Tabs Page</h1>
      <h3>Normal</h3>
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
      <h3>Dense</h3>
      <Tabs defaultActiveKey="1" size="small">
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
      <h3>Dot</h3>
      <Tabs defaultActiveKey="1" className="tabs-dot">
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
      <h3>Large</h3>
      <Tabs defaultActiveKey="1" size="large">
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
      <h3>no-border</h3>
      <Tabs defaultActiveKey="1" className="no-border">
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
      <h3>With Icon</h3>
      <Tabs defaultActiveKey="1">
        <TabPane tab={
            <span>
              <AppleOutlined />
              Tab 1
            </span>
          } key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab={
            <span>
              <AppleOutlined />
              Tab 2
            </span>
          } key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab={
            <span>
              <AndroidOutlined />
              Tab 3
            </span>
          } key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  )
}
export default TabaPage
