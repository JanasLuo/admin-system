/*
 * @Author: janasluo
 * @Date: 2021-09-14 22:24:20
 * @LastEditTime: 2021-09-30 16:55:02
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/pages/main/home/Home.tsx
 */
import React from 'react'
import style from './home.styl'
import { Button } from 'src/stories/Button'
import Header from 'src/components/Header'

const Home = () => {
  return (
    <div className={style.home}>
      <div>home</div>
      <Button label="ddd"></Button>
      <Header></Header>
    </div>
  )
}
export default Home
