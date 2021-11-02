/*
 * @Author: janasluo
 * @Date: 2021-09-14 22:24:20
 * @LastEditTime: 2021-11-02 15:52:40
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/pages/main/home/Home.tsx
 */
import React from 'react'
import style from './home.styl'
// @ts-ignore
import { VueWrapper, VueInReact } from 'vuera'
import Test from './Test.vue'
const Home = () => {
  const Component = VueInReact(Test)
  return (
    <div className={style.home}>
      <div>home3</div>
      <VueWrapper component={Test} title="Hello from Vue!" />

      <Component title="Hello from Vue!"></Component>
    </div>
  )
}
export default Home
