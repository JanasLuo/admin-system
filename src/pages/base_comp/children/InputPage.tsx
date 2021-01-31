/*
 * @Descripttion: Input、 Select组件样式
 * @version:
 * @Author: luolei
 * @Date: 2021-01-18 09:24:39
 * @LastEditors: luolei
 * @LastEditTime: 2021-01-18 16:28:42
 */

import React from 'react'
import {
  Row,
  Col,
  Divider,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Cascader,
  InputNumber
} from 'antd'
import { UserOutlined, SearchOutlined } from '@ant-design/icons'
const InputPage = () => {
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
      <h1>Text Field</h1>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4} offset={1}>Error</Col>
        <Col span={4} offset={1}>Disabled</Col>
        <Col span={4} offset={1}>Clear</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dense</Col>
        <Col span={4}>
          <Input
            size="small"
            placeholder="Placeholder"
          ></Input>
        </Col>
        <Col span={4} offset={1}>
          <Input
            size="small"
            className="has-error"
            placeholder="Placeholder"
          ></Input>
        </Col>
        <Col span={4} offset={1}>
          <Input
            size="small"
            disabled
            placeholder="Placeholder"
          ></Input>
        </Col>
        <Col span={4} offset={1}>
          <Input
            size="small"
            allowClear
            placeholder="Placeholder"
          ></Input>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Default</Col>
        <Col span={4}>
          <Input placeholder="Placeholder"></Input>
        </Col>
        <Col span={4} offset={1}>
          <Input
            className="has-error"
            placeholder="Placeholder"
          ></Input>
        </Col>
        <Col span={4} offset={1}>
          <Input
            disabled
            placeholder="Placeholder"
          ></Input>
        </Col>
        <Col span={4} offset={1}>
          <Input
            allowClear
            placeholder="Placeholder"
          ></Input>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Prefix Icon</Col>
        <Col span={4}>
          <Input
            prefix={<UserOutlined />}
            placeholder="Placeholder"
          ></Input>
        </Col>
        <Col span={4} offset={1}>
          <Input
            prefix={<UserOutlined />}
            className="has-error"
            placeholder="Placeholder"
          ></Input>
        </Col>
        <Col span={4} offset={1}>
          <Input
            prefix={<UserOutlined />}
            disabled
            placeholder="Placeholder"
          ></Input>
        </Col>
        <Col span={4} offset={1}>
          <Input
            allowClear
            placeholder="Placeholder"
            
          ></Input>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Suffix Icon</Col>
        <Col span={4}>
          <Input
            suffix={<UserOutlined />}
            placeholder="Placeholder"
          ></Input>
        </Col>
        <Col span={4} offset={1}>
          <Input
            suffix={<UserOutlined />}
            className="has-error"
            placeholder="Placeholder"
          ></Input>
        </Col>
        <Col span={4} offset={1}>
          <Input
            suffix={<UserOutlined />}
            disabled
            placeholder="Placeholder"
          ></Input>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Textarea</Col>
        <Col span={4}>
          <Input.TextArea
            autoSize={{ minRows: 3, maxRows: 6 }}
            placeholder="Placeholder"
            
          ></Input.TextArea>
        </Col>
        <Col span={4} offset={1}>
          <Input.TextArea
            autoSize={{ minRows: 3, maxRows: 6 }}
            className="has-error"
            placeholder="Placeholder"
            
          ></Input.TextArea>
        </Col>
        <Col span={4} offset={1}>
          <Input.TextArea
            autoSize={{ minRows: 3, maxRows: 6 }}
            disabled
            placeholder="Placeholder"
            
          ></Input.TextArea>
        </Col>
      </Row>
      <Divider />
      <h1>InputNumber</h1>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4} offset={1}>Error</Col>
        <Col span={4} offset={1}>Disabled</Col>
        <Col span={4} offset={1}>ReadOnly</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dense</Col>
        <Col span={4}>
          <InputNumber size="small"></InputNumber>
        </Col>
        <Col span={4} offset={1}>
          <InputNumber size="small" className="has-error"></InputNumber>
        </Col>
        <Col span={4} offset={1}>
          <InputNumber
            size="small"
            disabled
            
          ></InputNumber>
        </Col>
        <Col span={4} offset={1}>
          <InputNumber
            size="small"
            readOnly={true}
            defaultValue={3}
            
          ></InputNumber>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>normal</Col>
        <Col span={4}>
          <InputNumber></InputNumber>
        </Col>
        <Col span={4} offset={1}>
          <InputNumber className="has-error"></InputNumber>
        </Col>
        <Col span={4} offset={1}>
          <InputNumber disabled ></InputNumber>
        </Col>
        <Col span={4} offset={1}>
          <InputNumber
            readOnly={true}
            
            defaultValue={3}
          ></InputNumber>
        </Col>
      </Row>
      <Divider />
      <h1>Search</h1>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4} offset={1}>Error</Col>
        <Col span={4} offset={1}>Disabled</Col>
        <Col span={4} offset={1}>Clear</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dense</Col>
        <Col span={4}>
          <Input.Search
            size="small"
            placeholder="Placeholder"
            
          ></Input.Search>
        </Col>
        <Col span={4} offset={1}>
          <Input.Search
            size="small"
            className="has-error"
            placeholder="Placeholder"
            
          ></Input.Search>
        </Col>
        <Col span={4} offset={1}>
          <Input.Search
            size="small"
            disabled
            placeholder="Placeholder"
            
          ></Input.Search>
        </Col>
        <Col span={4} offset={1}>
          <Input.Search
            size="small"
            allowClear
            placeholder="Placeholder"
            
          ></Input.Search>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Default</Col>
        <Col span={4}>
          <Input.Search
            placeholder="Placeholder"
            
          ></Input.Search>
        </Col>
        <Col span={4} offset={1}>
          <Input.Search
            className="has-error"
            placeholder="Placeholder"
            
          ></Input.Search>
        </Col>
        <Col span={4} offset={1}>
          <Input.Search
            disabled
            placeholder="Placeholder"
            
          ></Input.Search>
        </Col>
        <Col span={4} offset={1}>
          <Input.Search
            allowClear
            placeholder="Placeholder"
            
          ></Input.Search>
        </Col>
      </Row>
      <Divider />
      <h1>Select</h1>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4}>Error</Col>
        <Col span={4}>Disabled</Col>
        <Col span={4}>Clear</Col>
        <Col span={4}>Mutil</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Dense</Col>
        <Col span={4}>
          <Select size="small" placeholder="placeholder" >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select
            size="small"
            className="has-error"
            placeholder="placeholder"
            
          >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select
            size="small"
            disabled
            placeholder="placeholder"
            
          >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select
            size="small"
            allowClear
            placeholder="placeholder"
            
          >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select
            mode="multiple"
            allowClear
            placeholder="placeholder"
            style={{ width: '80%'}}
          >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="tom">tom</Select.Option>
          </Select>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Default</Col>
        <Col span={4}>
          <Select placeholder="placeholder" >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select
            className="has-error"
            placeholder="placeholder"
            
          >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select disabled placeholder="placeholder" >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select allowClear placeholder="placeholder" >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select>
        </Col>
      </Row>
      <Divider />
      <h1>Cascader</h1>
      <Divider />
      <Row>
        <Col span={4}></Col>
        <Col span={8}>Normal</Col>
        <Col span={8}>Disabled</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>small</Col>
        <Col span={8}>
          <Cascader
            allowClear
            size="small"
            options={options}
            placeholder="Please select"
            style={{ width: '80%' }}
          />
        </Col>
        <Col span={8}>
          <Cascader
            size="small"
            options={options}
            disabled
            placeholder="Please select"
            style={{ width: '80%' }}
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>normal</Col>
        <Col span={8}>
          <Cascader
            options={options}
            placeholder="Please select"
            style={{ width: '80%' }}
          />
        </Col>
        <Col span={8}>
          <Cascader
            options={options}
            disabled
            placeholder="Please select"
            style={{ width: '80%' }}
          />
        </Col>
      </Row>
      <Divider />
      <h1>Checkbox</h1>
      <Divider />
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4}>Disabled</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Checkbox</Col>
        <Col span={4}>
          <Checkbox>Checkbox</Checkbox>
        </Col>
        <Col span={4}>
          <Checkbox disabled>Checkbox</Checkbox>
        </Col>
      </Row>
      <Divider />
      <h1>Radio</h1>
      <Divider />
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4}>Disabled</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Radio</Col>
        <Col span={4}>
          <Radio>Radio</Radio>
        </Col>
        <Col span={4}>
          <Radio disabled>Radio</Radio>
        </Col>
      </Row>
      <Divider />
      <h1>Switch</h1>
      <Divider />
      <Row>
        <Col span={4}></Col>
        <Col span={4}>Normal</Col>
        <Col span={4}>Disabled</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Switch</Col>
        <Col span={4}>
          <Switch size="small" />
        </Col>
        <Col span={4}>
          <Switch disabled size="small" />
        </Col>
      </Row>
      <Divider />
      <h1>Input Group</h1>
      <Divider />
      <Row>
        <Col span={4}></Col>
        <Col span={6}>Normal</Col>
        <Col span={6}>Disabled</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>with select</Col>
        <Col span={6}>
          <Input.Group size="small" compact>
            <Select defaultValue="Zhejiang">
              <Select.Option value="Zhejiang">Zhejiang</Select.Option>
              <Select.Option value="Jiangsu">Jiangsu</Select.Option>
            </Select>
            <Input
              style={{ width: '50%' }}
              defaultValue="Xihu District, Hangzhou"
            />
          </Input.Group>
        </Col>
        <Col span={6}>
          <Input.Group size="small" compact>
            <Select disabled defaultValue="Zhejiang">
              <Select.Option value="Zhejiang">Zhejiang</Select.Option>
              <Select.Option value="Jiangsu">Jiangsu</Select.Option>
            </Select>
            <Input
              disabled
              style={{ width: '50%' }}
              defaultValue="Xihu District, Hangzhou"
            />
          </Input.Group>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>with select</Col>
        <Col span={6}>
          <Input.Group size="small" compact>
            <Select defaultValue="Zhejiang">
              <Select.Option value="Zhejiang">Zhejiang</Select.Option>
              <Select.Option value="Jiangsu">Jiangsu</Select.Option>
            </Select>
            <Input
              suffix={<SearchOutlined />}
              style={{ width: '50%' }}
              defaultValue="Xihu District, Hangzhou"
            />
          </Input.Group>
        </Col>
        <Col span={6} offset={1}>
          <Input.Group size="small" compact>
            <Select disabled defaultValue="Zhejiang">
              <Select.Option value="Zhejiang">Zhejiang</Select.Option>
              <Select.Option value="Jiangsu">Jiangsu</Select.Option>
            </Select>
            <Input
              suffix={<SearchOutlined />}
              disabled
              style={{ width: '50%' }}
              defaultValue="Xihu District, Hangzhou"
            />
          </Input.Group>
        </Col>
      </Row>
      <Divider />
    </div>
  )
}
export default InputPage
