/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2021-04-02 17:22:37
 * @LastEditors: luolei
 * @LastEditTime: 2021-04-08 15:02:15
 */

import React, { useState, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import EditorStore from 'src/stores/modules/editor'
const Children = (props: any) => {
  const { data } = props
  // const name = useMemo(() => data.name, [])
  const click = (data: any) => {}
  console.log('Children render', data.name)
  return <div onClick={() => click(data)}>{data.name}</div>
}
export default observer(Children)
