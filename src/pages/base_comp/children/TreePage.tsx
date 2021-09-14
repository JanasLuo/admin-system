/*
 * @Descripttion:Tree 组件样式
 * @version:
 * @Author: luolei
 * @Date: 2021-01-18 09:25:54
 * @LastEditors: luolei
 * @LastEditTime: 2021-01-31 20:09:15
 */

import React from 'react'
import { Row, Col, Divider, Tree } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const TreePage = () => {
  const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          disabled: true,
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
              disableCheckbox: true
            },
            {
              title: 'leaf',
              key: '0-0-0-1'
            }
          ]
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [
            {
              title: <span style={{ color: '#1890ff' }}>sss</span>,
              key: '0-0-1-0'
            }
          ]
        }
      ]
    }
  ]

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    // console.log('selected', selectedKeys, info)
  }

  const onCheck = (checkedKeys: any, info: any) => {
    // console.log('onCheck', checkedKeys, info)
  }
  return (
    <div>
      <h1>Tree</h1>
      <Row>
        <Col span={4}>Simple</Col>
        <Col span={6}>
          <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            onSelect={onSelect}
            onCheck={onCheck}
            switcherIcon={<DownOutlined />}
            treeData={treeData}
          />
        </Col>
      </Row>
      <Divider></Divider>
    </div>
  )
}
export default TreePage
