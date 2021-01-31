import React, { useState } from 'react'
import style from './home.styl'
import HzButton from 'src/components/HzButton'
import Empty from 'src/components/Empty'
import HzTabs from 'src/components/HzTabs'
import FormItem from 'src/components/FormItem'
import HzSearch from 'src/components/HzSearch'
import { Button, Input, Switch } from 'antd'

const Home = () => {
  const treeData = [
    {
      title: 'title0-0',
      key: '0-0',
      children: [
        {
          title: 'title0-0-0',
          key: '0-0-0',
          children: [
            { title: 'title0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' }
          ]
        },
        {
          title: 'title0-0-1',
          key: '0-0-1',
          children: [
            { title: 'title0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' }
          ]
        },
        {
          title: 'title0-0-2',
          key: '0-0-2'
        }
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' }
      ]
    },
    {
      title: '0-2',
      key: '0-2'
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
  const [editorContainerVisible, setEditorContainerVisible] = useState(true)
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
  const onChange = (keys: any[]) => {
    console.log('home onChange', keys)
  }
  return (
    <div className={style.home}>
      <div>
        <HzButton onClick={() => alert(1)}>Button</HzButton>
        <Button onClick={() => setEditorContainerVisible(true)} size="large">
          large
        </Button>
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
        <Switch checkedChildren="是" unCheckedChildren="否"></Switch>
        <div style={{ width: 600 }}></div>
      </div>
    </div>
  )
}
export default Home
