/** @format */

import React from 'react'
import { Button, Tooltip, Row, Col, Divider } from 'antd'
const TooltipsPage = () => {
  return (
    <div>
      <h1>Tooltips</h1>
      <Row>
        <Col span={4}>normal</Col>
        <Col span={4}>
          <Tooltip title="hz-blue-antd prompt text text text text text">
            <span>normal hover</span>
          </Tooltip>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Info with arrow bottom</Col>
        <Col span={4}>
          <Tooltip placement="topLeft" title="TL">
            <Button>TL</Button>
          </Tooltip>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Info with arrow top</Col>
        <Col span={4}>
          <Tooltip placement="bottomLeft" title="BL">
            <Button>BL</Button>
          </Tooltip>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Info with arrow Left</Col>
        <Col span={4}>
          <Tooltip placement="rightTop" title="RT">
            <Button>RT</Button>
          </Tooltip>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Info with arrow right</Col>
        <Col span={4}>
          <Tooltip placement="leftTop" title="LT">
            <Button>LT</Button>
          </Tooltip>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      {/* 
      <h3>Tooltip</h3>
      <div>
        <Tooltip
          overlayClassName="hz-blue-antd"
          title="hz-blue-antd prompt text text text text text"
        >
          <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
      </div>
      <div>
        <Tooltip
          // overlayClassName="hz-blue-antd"
          title="hz-blue-antd prompt text"
          placement="right"
        >
          <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
      </div> */}
    </div>
  )
}
export default TooltipsPage
