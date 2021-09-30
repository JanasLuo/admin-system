/*
 * @Author: janasluo
 * @Date: 2021-09-14 22:24:20
 * @LastEditTime: 2021-09-30 11:21:55
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/pages/main/home/Home.tsx
 */
import React from 'react'
import style from './home.styl'

const Home = () => {
  const getInfo = () => {
    debugger
    // @ts-ignore
    console.log(window.b)
  }
  return (
    <div className={style.home}>
      <div onClick={getInfo}>home</div>
      <iframe src="http://localhost:3003" width="800" height="500"></iframe>
    </div>
  )
}
export default Home
