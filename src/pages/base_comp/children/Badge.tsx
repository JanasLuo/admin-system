/** @format */

import React from 'react'
import { Badge } from 'antd'
import { MailOutlined } from '@ant-design/icons'

const BadgePage = () => {
  return (
    <div>
      <Badge count="1" />
      <br />
      <Badge status="error" />
      <br />
      <Badge count={5}>
        <span className="head-example" />
      </Badge>
      <br />
      <br />
      <br />
      <br />
      <Badge count={11}>
        <span className="head-example" />
      </Badge>
      <br />
      <br />
      <br />
      <br />
      <Badge count={999}>
        <span className="head-example" />
      </Badge>
      <br />
      <br />
      <br />
      <br />
      <Badge dot>
        <MailOutlined />
      </Badge>
      <br />
      <br />
      <Badge dot>
        <span>Type something</span>
      </Badge>
    </div>
  )
}
export default BadgePage
