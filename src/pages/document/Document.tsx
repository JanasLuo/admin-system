/** @format */

import React, { useState } from 'react'
import {
  Button,
  Tag,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  // Icon,
  Pagination,
  Tooltip,
  Cascader,
  Transfer,
  Steps,
  Modal,
  Badge,
  Table,
  Dropdown,
  Menu
} from 'antd'
import { UserOutlined, AppleOutlined, DownOutlined } from '@ant-design/icons'
import HzButton from 'src/components/HzButton'
import Empty from 'src/components/Empty'
import HzTabs from 'src/components/HzTabs'
import FormItem from 'src/components/FormItem'
import HzSearch from 'src/components/HzSearch'
import style from './index.styl'
import './antd.styl'
const { Step } = Steps
const { RangePicker, MonthPicker } = DatePicker
const { Option } = Select
const { TextArea } = Input
const { TabPane } = Tabs
const { confirm } = Modal
const Document = () => {
  const [modalDark, setModalDark] = useState(false)
  // const [modalDarkConfirm, setModalDarkConfirm] = React.useState(false)
  const columns = [
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
    }
  ]
  const data = []
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`
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
  const tabs = [
    {
      name: '单个新增',
      value: '1'
    },
    {
      name: '批量新增',
      value: '2'
    }
  ]
  const searchTypeList = [
    {
      name: '姓名',
      value: 'name'
    },
    {
      name: '年龄',
      value: 'age'
    }
  ]
  const [activeType, setActiveType] = useState('1')
  const [curSearcgType, setCurSearcgType] = useState({
    name: '姓名',
    value: 'name'
  })

  const onTabChange = (keys: any) => {
    console.log('home onChange', keys)
    setActiveType(keys)
  }
  const onTypeChange = (type: any) => {
    setCurSearcgType(type)
    console.log('type', type)
  }
  const onSearch = (val: any) => {
    console.log('val', val)
  }
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  )
  const mockData = []
  for (let i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      disabled: i % 3 < 1
    })
  }
  function showModal2() {
    setModalDark(true)
  }
  function handleOk2() {
    setModalDark(false)
  }
  function handleCancel2() {
    setModalDark(false)
  }
  function showModal3() {
    confirm({
      className: 'hz-antd',
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }
  function showDeleteConfirm() {
    confirm({
      className: 'hz-antd',
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }
  function info() {
    Modal.info({
      className: 'hz-antd',
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {
        console.log('ok')
      }
    })
  }
  return (
    <div className={style.document}>
      <div className="document half">
        <h3>Table</h3>
        <div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
          />
        </div>
        <div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            size="small"
            scroll={{
              x: '100%',
              y: '200px'
            }}
          />
        </div>
        <div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            scroll={{
              x: '100%',
              y: '200px'
            }}
          />
        </div>
        <h3>Badge</h3>
        <div>
          <Badge count={5}>
            <span className="head-example" />
          </Badge>
          <Badge count={100}></Badge>
          <Badge dot={true}>
            <span className="head-example" />
          </Badge>
        </div>
        <h3>Modal</h3>
        <div>
          <Button onClick={showModal2}>modal</Button>
          <Button onClick={showModal3}>confitm</Button>
          <Button onClick={showDeleteConfirm}>DeleteConfirm</Button>
          <Button onClick={info}>info</Button>
          <Modal
            title="Basic Modal"
            visible={modalDark}
            onOk={handleOk2}
            onCancel={handleCancel2}
            className="hz-antd"
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
        <h3>Steps</h3>
        <h6>Normal</h6>
        <div>
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </div>
        <h6>Small</h6>
        <div>
          <Steps current={1} size="small">
            <Step title="Finished" description="This is a description." />
            <Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </div>
        <h3>Transfer</h3>
        <div>
          <Transfer
            dataSource={mockData}
            titles={['Source', 'Target']}
            render={item => item.title}
          />
        </div>
        <h3>Multiselect</h3>
        <div>
          <Select
            mode="multiple"
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
            dropdownClassName="hz-antd"
          >
            <Option value="a10">a10</Option>
            <Option value="c12">c12</Option>
            <Option value="c122">c122</Option>
            <Option value="c121">c122</Option>
          </Select>
        </div>
        <h3>Cascader</h3>
        <div>
          <Cascader
            popupClassName="hz-antd"
            options={options}
            placeholder="Please select"
          />
        </div>
        <h3>Tooltip</h3>
        <div>
          <Tooltip
            overlayClassName="hz-antd"
            title="hz-antd prompt text text text text text"
          >
            <span>Tooltip will show on mouse enter.</span>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            // overlayClassName="hz-antd"
            title="hz-antd prompt text"
            placement="right"
          >
            <span>Tooltip will show on mouse enter.</span>
          </Tooltip>
        </div>
        {/* Pagination */}
        <h3>Pagination</h3>
        <div>
          <h6>Normal</h6>
          <div>
            <Pagination
              showSizeChanger
              showQuickJumper
              defaultCurrent={2}
              total={500}
            />
          </div>
          <h6>Dense</h6>
          <div>
            <Pagination
              className="dense"
              size="small"
              total={50}
              showQuickJumper
            />
          </div>
        </div>
        {/* tabs */}
        <h3>Tabs</h3>
        <div>
          <h6>Dense</h6>
          <div>
            <Tabs defaultActiveKey="1" className="tabs-dense">
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
          </div>
          <h6>Normal</h6>
          <div>
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
          </div>
          <h6>Large</h6>
          <div>
            <Tabs defaultActiveKey="1" className="large">
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
          </div>
          <h6>Whth Icon</h6>
          <div>
            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    <AppleOutlined />
                    Tab 1
                  </span>
                }
                key="1"
              >
                Content of Tab Pane 1
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <AppleOutlined />
                    Tab 1
                  </span>
                }
                key="2"
              >
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </div>
          <h6>Dot</h6>
          <div>
            <Tabs defaultActiveKey="1" className="dot">
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
          </div>
        </div>
        {/* input */}
        <h3>Inputs and Controls</h3>
        <div>
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
            <TextArea
              placeholder="Basic usage"
              style={{ width: 200 }}
            ></TextArea>
            <TextArea
              disabled
              placeholder="Basic usage"
              style={{ width: 200 }}
            ></TextArea>
          </div>
          <h6>Select</h6>
          <div className="has-error">
            <Select
              size="large"
              dropdownClassName="hz-antd"
              placeholder="Basic usage"
              style={{ width: 200 }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
            <Select disabled placeholder="Basic usage" style={{ width: 200 }}>
              <Option value="jack">Jack</Option>
            </Select>
          </div>
          <h6>Search</h6>
          <div>
            <Input.Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </div>
          <h6>InputNumber</h6>
          <div>
            <InputNumber
              placeholder="Basic usage"
              style={{ width: 200 }}
            ></InputNumber>
            <InputNumber
              disabled
              placeholder="Basic usage"
              style={{ width: 200 }}
            ></InputNumber>
          </div>
          <h6>RangePicker</h6>
          <div>
            <RangePicker
              size="large"
              dropdownClassName="hz-antd"
              style={{ width: 200 }}
            ></RangePicker>
            <RangePicker disabled style={{ width: 200 }}></RangePicker>
          </div>
          <DatePicker dropdownClassName="hz-antd" />
          <br />
          <MonthPicker dropdownClassName="hz-antd" placeholder="Select month" />
          <h6>Inputs</h6>
          <div>
            <span>checkbox</span>
            <Checkbox>Checkbox</Checkbox>
            <Checkbox defaultChecked={true}>Checkbox</Checkbox>
          </div>
          <div>
            <span>checkbox</span>
            <Radio>Radio</Radio>
            <Radio defaultChecked={true}>Radio</Radio>
          </div>
          <div>
            <span>checkbox</span>
            <Switch></Switch>
            <Switch defaultChecked={true}></Switch>
          </div>
        </div>
        <h3>Button</h3>
        <div>
          <h6>Containd Button</h6>
          <div>
            <span>Primary</span>
            <Button type="primary" size="small">
              Small
            </Button>
            <Button type="primary">Default</Button>
            <Button type="primary" size="large">
              Large
            </Button>
          </div>
          <div>
            <span>Primary Disabled</span>
            <Button type="primary" size="small" disabled>
              Small
            </Button>
            <Button type="primary" disabled>
              Default
            </Button>
            <Button type="primary" size="large" disabled>
              Large
            </Button>
          </div>
        </div>
        <div>
          <h6>Default Button</h6>
          <div>
            <span>Default</span>
            <Button size="small">Small</Button>
            <Button>Default</Button>
            <Button size="large">Large</Button>
          </div>
          <div>
            <span>Default Disabled</span>
            <Button size="small" disabled>
              Small
            </Button>
            <Button disabled>Default</Button>
            <Button size="large" disabled>
              Large
            </Button>
          </div>
        </div>
        <div>
          <h6>Outline Button</h6>
          <div>
            <span>Default</span>
            <Button className="outline" size="small">
              Small
            </Button>
            <Button className="outline">Default</Button>
            <Button size="large" className="outline">
              Large
            </Button>
          </div>
          <div>
            <span>Default Disabled</span>
            <Button size="small" disabled>
              Small
            </Button>
            <Button disabled>Default</Button>
            <Button size="large" disabled>
              Large
            </Button>
          </div>
        </div>
        <div>
          <h6>Text Button</h6>
          <div>
            <span>Default</span>
            <Button className="text" size="small">
              Small
            </Button>
            <Button className="text">Default</Button>
            <Button className="text" size="large">
              Large
            </Button>
          </div>
          <div>
            <span>Default Disabled</span>
            <Button type="link" size="small" disabled>
              Small
            </Button>
            <Button type="link" disabled>
              Default
            </Button>
            <Button type="link" size="large" disabled>
              Large
            </Button>
          </div>
        </div>
        <h3>Tag</h3>
        <div>
          <h6>outliend Tag</h6>
          <div>
            <Tag className="small-tag">Small</Tag>
            <Tag>Default</Tag>
          </div>
          <div>
            <Tag closable className="small-tag">
              Small
            </Tag>
            <Tag closable>Default</Tag>
          </div>
        </div>
        <div>
          <h6>Solid Tag</h6>
          <div>
            <Tag className="small-tag solid-tag">Small</Tag>
            <Tag className="solid-tag">Default</Tag>
          </div>
          <div>
            <Tag closable className="small-tag solid-tag">
              Small
            </Tag>
            <Tag closable className="solid-tag">
              Default
            </Tag>
          </div>
        </div>
        <div>
          <h6>Other Tag</h6>
          <div>
            <Tag color="red">red</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="green">green</Tag>
            <Tag color="gold" className="small-tag">
              gold
            </Tag>
            <Tag color="yellow">yellow</Tag>
            <Tag color="purple">purple</Tag>
          </div>
        </div>
        <div>
          <h6>Dropdown</h6>
          <div>
            <Dropdown overlay={menu}>
              <Button>
                Button <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="hz-antd half">
        <h3>自定义全局组件</h3>
        <HzButton onClick={() => alert(1)}>Button</HzButton>
        <Button size="large">large</Button>
        <Button type="primary">primary</Button>
        <Button type="link">link</Button>
        <Button className="text">text</Button>
        <Button className="outline">
          outline<i></i>
        </Button>
        <Button className="upload">
          <i></i>
          outline
        </Button>
        <Button type="default">default</Button>
        <Button type="primary" disabled>
          disabled
        </Button>
        <div style={{ width: 600 }}>
          <Empty label="暂无记录"></Empty>
        </div>
        <HzTabs tabs={tabs} activeType={activeType} onTabChange={onTabChange} />
        <FormItem label="当前管辖单位" labelWidth={200}>
          <Input></Input>
        </FormItem>
        <HzSearch
          searchTypeList={searchTypeList}
          curSearcgType={curSearcgType}
          onTypeChange={onTypeChange}
          onSearch={onSearch}
          withSearchType={true}
        ></HzSearch>
        {/* <Switch defaultChecked={true}>是否</Switch> */}
      </div>
    </div>
  )
}
export default Document
