/*
 * @Descripttion:Transfer 组件样式
 * @version:
 * @Author: luolei
 * @Date: 2021-01-18 09:25:54
 * @LastEditors: luolei
 * @LastEditTime: 2021-01-18 15:39:52
 */

import React, { useState } from 'react'
import { Row, Col, Transfer, Divider } from 'antd'
const TransferPage = () => {
  const mockData = []
  for (let i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`
    })
  }
  const initialTargetKeys = mockData
    .filter((item: any) => Number(item.key) > 10)
    .map((item: any) => item.key)

  const [targetKeys, setTargetKeys] = useState(initialTargetKeys)
  const [selectedKeys, setSelectedKeys] = useState<any>([])
  const onChange = (nextTargetKeys: any, direction: any, moveKeys: any) => {
    setTargetKeys(nextTargetKeys)
  }

  const onSelectChange = (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[]
  ) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys])
  }
  return (
    <div>
      <h1>Transfer</h1>
      <Row>
        <Col span={4}>Simple</Col>
        <Col span={16}>
          <Transfer
            dataSource={mockData}
            titles={['Source', 'Target']}
            render={item => item.title}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={onChange}
            onSelectChange={onSelectChange}
          />
        </Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col span={4}>With Search</Col>
        <Col span={16}>
          <Transfer
            showSearch
            dataSource={mockData}
            titles={['Source', 'Target']}
            render={item => item.title}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={onChange}
            onSelectChange={onSelectChange}
          />
        </Col>
      </Row>
      <Divider></Divider>
    </div>
  )
}
export default TransferPage
