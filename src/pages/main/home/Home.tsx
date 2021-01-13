import React, { useState } from 'react'
import style from './home.styl'
import HzButton from 'src/components/HzButton'
import Empty from 'src/components/Empty'
import HzTabs from 'src/components/HzTabs'
import FormItem from 'src/components/FormItem'
import HzSearch from 'src/components/HzSearch'
import { Button, Input, Switch } from 'antd'

const Home = () => {
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
  return (
    <div className={style.home}>
      <div>
        <div className="btn-wrapper">
          <div className="btn">BUTTON</div>
        </div>
        <div className="btn-wrapper active">
          <button className="btn">BUTTON</button>
        </div>
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
        <Switch>是否</Switch>
      </div>
    </div>
  )
}
export default Home
