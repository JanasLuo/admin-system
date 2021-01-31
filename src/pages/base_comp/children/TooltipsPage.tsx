import React from 'react'
import { Tooltip, Row, Col, Divider } from 'antd'

const Tooltips = () => {
  return (
    <div>
      <h3>Tooltips</h3>
      <Divider />
      <Row>
        <Col span={4}>Normal</Col>
        <Col span={4}>
          <Tooltip
            overlayClassName="arrow-none"
            defaultVisible={true}
            title="Tooltip"
          >
            <span>Tooltip</span>
          </Tooltip>
        </Col>
      </Row>
      <Divider />
      <h3>Info tips</h3>
      <Divider />
      <Row>
        <Col span={4}>Normal</Col>
        <Col span={4}>
          <Tooltip
            color="white"
            overlayClassName="arrow-none white"
            defaultVisible={true}
            title="Tooltip"
          >
            <span>Tooltip</span>
          </Tooltip>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Info with arrow bottom</Col>
        <Col span={4}>
          <Tooltip
            color="white"
            overlayClassName="white"
            defaultVisible={true}
            title="Tooltip"
          >
            <span>Tooltip</span>
          </Tooltip>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Info with arrow top</Col>
        <Col span={4}>
          <Tooltip
            placement="bottomLeft"
            color="white"
            overlayClassName="white"
            defaultVisible={true}
            title="Tooltip"
          >
            <span>Tooltip</span>
          </Tooltip>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Info with arrow left</Col>
        <Col span={4}>
          <Tooltip
            placement="left"
            color="white"
            overlayClassName="white"
            defaultVisible={true}
            title="Tooltip"
          >
            <span>Tooltip</span>
          </Tooltip>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Info with arrow right</Col>
        <Col span={4}>
          <Tooltip
            placement="right"
            color="white"
            overlayClassName="white"
            defaultVisible={true}
            title="Tooltip"
          >
            <span>Tooltip</span>
          </Tooltip>
        </Col>
      </Row>
      <Divider />
      <h3>Info tips dense</h3>
      <Divider />
      <Row>
        <Col span={4}>Normal</Col>
        <Col span={4}>
          <Tooltip
            color="red"
            overlayClassName="arrow-none red"
            defaultVisible={true}
            title="Tooltip"
          >
            <span>Tooltip</span>
          </Tooltip>
        </Col>
      </Row>
    </div>
  )
}
export default Tooltips
