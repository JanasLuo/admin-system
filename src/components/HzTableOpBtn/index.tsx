import React, { FC } from 'react'
import styles from './index.styl'

interface TypeHzTableOpBtn {
  text: string;
  icon: string;
  onClick?(): void
}

const HzTableOpBtn: FC<TypeHzTableOpBtn> = (props) => {
  const { text, icon } = props
  const { table_op_btn, btn_icon } = styles
  return (
    <div className={table_op_btn} onClick={() => props.onClick && props.onClick()}>
      <img src={icon} alt="" className={btn_icon} />
      {text}
    </div>
  )
}

export default HzTableOpBtn
