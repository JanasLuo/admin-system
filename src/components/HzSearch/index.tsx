/*
 * @Descripttion: Search组件
 * @version:
 * @Author: luolei
 * @Date: 2020-11-20 16:12:48
 * @LastEditors: janasluo
 * @LastEditTime: 2021-08-19 11:48:51
 */

import React, { FC, useState } from 'react'
import './index.styl'
import { Dropdown, Menu, Input } from 'antd'
const InputGroup = Input.Group
interface SearchType {
  name: string
  value: string
}
interface HzSearchProps {
  width?: number //  Search组件宽度
  searchTypeList: SearchType[] // 搜索类型列表
  curSearcgType?: any // 当前选择类型
  withSearchType?: boolean // 是否带有搜索类型 默认有
  value?: string // 默认搜索内容
  onChange?: (value: string) => void // 搜搜内容改变
  onTypeChange: (type: SearchType) => void
  onSearch: (value: string) => void
}
const HzSearch: FC<HzSearchProps> = props => {
  const {
    width = 700,
    withSearchType = true,
    searchTypeList,
    curSearcgType,
    onTypeChange,
    onChange,
    value,
    onSearch
  } = props
  const [isFocus, setIsFocus] = useState(false)
  const menu = (
    <Menu>
      {searchTypeList.map((type: SearchType) => (
        <Menu.Item key={type.value} onClick={() => changeTab(type)}>
          {type.name}
        </Menu.Item>
      ))}
    </Menu>
  )

  const changeTab = (type: SearchType) => {
    onTypeChange(type)
  }
  return (
    <div className={`hz-search ${isFocus ? 'focus' : ''}`} style={{ width }}>
      <InputGroup compact size="large" className="search-wrapper">
        {withSearchType && (
          <>
            <Dropdown
              placement="bottomCenter"
              overlay={menu}
              trigger={['click']}
            >
              <div className="dropdown">
                {curSearcgType.name} <i></i>
              </div>
            </Dropdown>
            <div className="line"></div>
          </>
        )}
        {value && onChange ? (
          <Input.Search
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            size="large"
            placeholder="请输入关键字"
            value={value}
            onChange={e => onChange(e.target.value)}
            onSearch={val => onSearch(val)}
          />
        ) : (
          <Input.Search
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            size="large"
            placeholder="请输入关键字"
            onSearch={val => onSearch(val)}
          />
        )}
      </InputGroup>
    </div>
  )
}
HzSearch.defaultProps = {
  width: 700,
  withSearchType: true
}
export default HzSearch
export type { SearchType }
