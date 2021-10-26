/*
 * @Author: janasluo
 * @Date: 2021-10-26 12:36:31
 * @LastEditTime: 2021-10-26 12:39:21
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/pages/comp_test/index.tsx
 */
import React from 'react'
import Button from '../../components/Button'
import CButton from '../../components/CButton'
import Empty from '../../components/Empty'

class CompTest extends React.Component {
  render() {
    return (
      <div className="comp_test">
        <Button>Button</Button>
        <CButton>CButton</CButton>
        <Empty></Empty>
      </div>
    )
  }
}

export default CompTest
