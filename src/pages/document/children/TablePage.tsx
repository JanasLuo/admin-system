/** @format */

import React from 'react'
import { Button, Table, Row, Col, Divider } from 'antd'
const TablePage = () => {
  const columns: any[] = [
    {
      title: 'Level',
      dataIndex: 'level',
      fixed: 'left',
      render: (text: string) => {
        if (text === '0') {
          return <span className="task-level task-level1"></span>
        }
        if (text === '1') {
          return <span className="task-level task-level2"></span>
        }
        return <span className="task-level task-level3"></span>
      }
    },
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    },
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (text: number) => {
        if (text === 0) {
          return <span className="status status-notsigned">未签收</span>
        }
        if (text === 1) {
          return <span className="status status-signed">已签收</span>
        }
        if (text === 2) {
          return <span className="status status-complete">完成</span>
        }
        return <span className="status status-overdue">已逾期</span>
      }
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      fixed: 'right',
      render: () => {
        return (
          <div className="">
            <span className="action-del"></span>
            <span className="action-ok"></span>
          </div>
        )
      }
    }
  ]
  const data = []
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      level: `${i}`,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
      status: i
    })
  }
  const rowSelection = {}
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake'
            }
          ]
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men'
            }
          ]
        }
      ]
    }
  ]
  return (
    <div>
      <h1>Table</h1>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <h1>scroll Table</h1>
      <Table
        scroll={{
          x: '150%',
          y: 300
        }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

export default TablePage
