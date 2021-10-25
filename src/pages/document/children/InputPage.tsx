/** @format */

import React from 'react'
import { Input, Row, Col, Divider } from 'antd'
const { TextArea } = Input
const InputPage = () => {
  return (
    <div>
      <h1>Text field</h1>
      <Row>
        <Col span={4}>small</Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>small text-field</Col>
        <Col span={4}>
          <Input
            size="small"
            placeholder="Basic usage"
            style={{ width: 200 }}
          ></Input>
        </Col>
        <Col span={4} className="ant-form-item-has-error">
          <Input
            size="small"
            placeholder="Basic usage"
            style={{ width: 200 }}
          ></Input>
        </Col>
        <Col span={4}>
          <Input
            size="small"
            disabled
            placeholder="Basic usage"
            style={{ width: 200 }}
          ></Input>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>small textarea</Col>
        <Col span={4}>
          <TextArea
            rows={2}
            placeholder="Basic usage"
            style={{ width: 200 }}
          ></TextArea>
        </Col>
        <Col span={4} className="ant-form-item-has-error">
          <TextArea
            placeholder="Basic usage"
            style={{ width: 200 }}
            rows={2}
          ></TextArea>
        </Col>
        <Col span={4}>
          <TextArea
            disabled
            placeholder="Basic usage"
            style={{ width: 200 }}
            rows={2}
          ></TextArea>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>medium </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>medium text-field</Col>
        <Col span={4}>
          <Input placeholder="Basic usage" style={{ width: 200 }}></Input>
        </Col>
        <Col span={4} className="ant-form-item-has-error">
          <Input placeholder="Basic usage" style={{ width: 200 }}></Input>
        </Col>
        <Col span={4}>
          <Input
            disabled
            placeholder="Basic usage"
            style={{ width: 200 }}
          ></Input>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>medium textarea</Col>
        <Col span={4}>
          <TextArea
            rows={2}
            placeholder="Basic usage"
            style={{ width: 200 }}
          ></TextArea>
        </Col>
        <Col span={4} className="ant-form-item-has-error">
          <TextArea
            placeholder="Basic usage"
            style={{ width: 200 }}
            rows={2}
          ></TextArea>
        </Col>
        <Col span={4}>
          <TextArea
            disabled
            placeholder="Basic usage"
            style={{ width: 200 }}
            rows={2}
          ></TextArea>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>large</Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>large text-field</Col>
        <Col span={4}>
          <Input
            size="large"
            placeholder="Basic usage"
            style={{ width: 200 }}
          ></Input>
        </Col>
        <Col span={4} className="ant-form-item-has-error">
          <Input
            size="large"
            placeholder="Basic usage"
            style={{ width: 200 }}
          ></Input>
        </Col>
        <Col span={4}>
          <Input
            size="large"
            disabled
            placeholder="Basic usage"
            style={{ width: 200 }}
          ></Input>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>large textarea</Col>
        <Col span={4}>
          <TextArea
            rows={2}
            placeholder="Basic usage"
            style={{ width: 200 }}
          ></TextArea>
        </Col>
        <Col span={4} className="ant-form-item-has-error">
          <TextArea
            placeholder="Basic usage"
            style={{ width: 200 }}
            rows={2}
          ></TextArea>
        </Col>
        <Col span={4}>
          <TextArea
            disabled
            placeholder="Basic usage"
            style={{ width: 200 }}
            rows={2}
          ></TextArea>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>large textarea- with counter</Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>

      {/* <h3>Inputs and Controls</h3>
      <h6>Text Field</h6>
      <div className="">
        <Input
          size="large"
          placeholder="Basic usage"
          style={{ width: 200 }}
        ></Input>
        <Input
          disabled
          placeholder="Basic usage"
          style={{ width: 200 }}
        ></Input>
      </div>
      <h6>Text Field</h6>
      <div className="has-error">
        <Input
          size="large"
          placeholder="Basic usage"
          style={{ width: 200 }}
        ></Input>
        <Input
          disabled
          placeholder="Basic usage"
          style={{ width: 200 }}
        ></Input>
      </div>
      <h6>TextArea Field</h6>
      <div>
        <TextArea placeholder="Basic usage" style={{ width: 200 }}></TextArea>
        <TextArea
          disabled
          placeholder="Basic usage"
          style={{ width: 200 }}
        ></TextArea>
      </div>
      <div className="has-error">
        <TextArea placeholder="Basic usage" style={{ width: 200 }}></TextArea>
      </div> */}
    </div>
  )
}
export default InputPage
