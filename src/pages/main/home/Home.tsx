/*
 * @Author: janasluo
 * @Date: 2021-09-14 22:24:20
 * @LastEditTime: 2021-11-03 14:16:57
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /test/Users/janas/work/project/frontend/admin-system/src/pages/main/home/Home.tsx
 */
import React from 'react'
import style from './home.styl'
import * as ReactDOM from 'react-dom'
// @ts-ignore
import { VueWrapper, VueInReact } from 'vuera'
import { Button, Modal, message } from 'antd'
import Test from './Test.vue'
const Home = () => {
  const Component = VueInReact(Test)
  /* 预览React组件 */
  const openReactPreview = () => {
    const componentUrl =
      '/file/digital-police/2031f98da29a411681fb919e8e6e327f.js'
    // @ts-ignore
    window.System.import(componentUrl)
      .then((res: any) => {
        if (res?.default) {
          const ReactComponent: React.ReactNode = res.default as React.ReactNode
          // Modal.confirm({
          //   // @ts-ignore
          //   content: <ReactComponent />,
          //   icon: null
          // })
          customRender(ReactComponent)
        } else {
          message.error('加载组件失败，请检查上传的是否为SystemReact组件')
        }
      })
      .catch((err: any) => message.error(err))
  }
  const openVuetPreview = () => {
    Modal.confirm({
      // @ts-ignore
      content: <Component title="Hello from Vue!"></Component>,
      icon: null
    })
  }
  const customRender = (ReactComponent: any) => {
    ReactDOM.render(<ReactComponent />, document.getElementById('wrapper'))
  }
  return (
    <div className={style.home}>
      <div>home3</div>
      <VueWrapper component={Test} title="Hello from Vue!" />

      <Component title="Hello from Vue!"></Component>
      <Button type="link" onClick={openReactPreview}>
        预览React组件
      </Button>
      <Button type="link" onClick={openVuetPreview}>
        预览vue组件
      </Button>
      <div id="wrapper"></div>
    </div>
  )
}
export default Home
