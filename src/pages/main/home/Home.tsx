/*
 * @Author: janasluo
 * @Date: 2021-09-14 22:24:20
 * @LastEditTime: 2021-10-09 15:35:26
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/pages/main/home/Home.tsx
 */
import React from 'react'
import style from './home.styl'
import Header from 'src/components/Header/index'
import Empty from 'src/components/Empty'
import { Page } from 'src/components/Page'

const Home = () => {
  return (
    <div className={style.home}>
      <div>home</div>
      <Header></Header>
      <Empty></Empty>
      <Page
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      ></Page>
    </div>
  )
}
export default Home
