/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2020-11-20 16:12:48
 * @LastEditors: luolei
 * @LastEditTime: 2020-11-26 11:35:42
 */

import React, { FC } from 'react'
import { Tag } from 'antd'
import './index.styl'
interface FilterTagsProps {
  datas: any[]
  active?: any
  onChange: (type: any) => void
}
const FilterTags: FC<FilterTagsProps> = props => {
  const { datas, onChange, active } = props

  const changeTab = (data: any) => {
    onChange(data)
  }
  return (
    <ul className="filter-tags">
      {datas.map((item: any) => (
        <li
          onClick={() => changeTab(item.value)}
          key={item.value}
          className={active === item.value ? `active` : ''}
        >
          <Tag className={`solid-tag ${active === item.value ? `active` : ''}`}>
            {item.name}
          </Tag>
        </li>
      ))}
    </ul>
  )
}
export default FilterTags
