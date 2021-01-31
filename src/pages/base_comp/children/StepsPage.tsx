/** @format */

import React from 'react'
import { Row, Col, Steps } from 'antd'
const { Step } = Steps

const TagPage = () => {
  return (
    <div>
      <h1>Steps</h1>
      <h3>Outlined</h3>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4}>Disabled</Col>
      </Row>
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      <Row>
        <Col span={4}>Dense</Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Steps size="small" current={1}>
        <Step title="Finished" />
        <Step title="In Progress" />
        <Step title="Waiting" />
      </Steps>
    </div>
  )
}
export default TagPage
