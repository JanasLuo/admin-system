/*
 * @Descripttion:Table 组件样式
 * @version:
 * @Author: luolei
 * @Date: 2021-01-18 09:25:54
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-28 20:27:39
 */

import React, { useState } from 'react'
import { Row, Col, Divider, Table, Badge, Space, Dropdown, Menu, Button } from 'antd'

import { DownOutlined } from '@ant-design/icons'

const TablePage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([])
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }
  ]

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }
  ]
  const columnsC = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <Button className="primary" type="text">
        Button
    </Button>
    }
  ]

  const dataSourceC = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description:
        'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      address: 'Jiangsu No. 1 Lake Park',
      description: 'This not expandable'
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    }
  ]
  const onSelectChange = (keys: any[]) => {
    setSelectedRowKeys(keys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const menu = (
    <Menu>
      <Menu.Item>Action 1</Menu.Item>
      <Menu.Item>Action 2</Menu.Item>
    </Menu>
  )
  const expandedRowRender = () => {
    const innerColumns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        )
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <span>Pause</span>
            <span>Stop</span>
            <Dropdown overlay={menu}>
              <span>
                More <DownOutlined />
              </span>
            </Dropdown>
          </Space>
        )
      }
    ]

    const innerData: any = []
    for (let i = 0; i < 3; ++i) {
      innerData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      })
    }
    return (
      <Table columns={innerColumns} dataSource={innerData} pagination={false} />
    )
  }

  const columnsT = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: 'Action', key: 'operation', render: () => <Button className="primary" type="text">
        Button
  </Button>
    }
  ]

  const data = []
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00'
    })
  }
  return (
    <div>
      <h1>Text Field</h1>
      <Row>
        <Col span={4}>Simple</Col>
        <Col span={16}>
          <Table size="small" dataSource={dataSource} columns={columns} />;
        </Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col span={4}>Show Content</Col>
        <Col span={16}>
          <Table
            size="small"
            rowSelection={rowSelection}
            expandable={{
              expandedRowRender: record => (
                <p style={{ margin: 0 }}>{record.description}</p>
              ),
              rowExpandable: record => record.name !== 'Not Expandable'
            }}
            dataSource={dataSourceC}
            columns={columnsC}
          />
          ;
        </Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col span={4}>Show Table</Col>
        <Col span={16}>
          <Table
            size="small"
            className="components-table-demo-nested"
            columns={columnsT}
            expandable={{ expandedRowRender }}
            dataSource={data}
          />
        </Col>
      </Row>
      <Divider></Divider>
    </div>
  )
}
export default TablePage
