/*
 * @Author: janasluo
 * @Date: 2021-09-29 19:06:49
 * @LastEditTime: 2021-10-26 12:47:06
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/components/Button/button.tsx
 */
import React from 'react'
import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button/button'

// interface AButtonProps {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary?: boolean
//   /**
//    * What background color to use
//    */
//   backgroundColor?: string
//   /**
//    * How large should the button be?
//    */
//   size?: 'small' | 'medium' | 'large'
//   /**
//    * Button contents
//    */
//   label: string
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void
// }
/**
 * Primary UI component for user interaction
 */
const AButton = ({ ...props }: ButtonProps) => {
  return <Button {...props}>{props.children}</Button>
}
AButton.defaultProps = {
  size: 'defalut',
  onClick: () => {}
}

export default AButton
