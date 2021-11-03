<!--
 * @Author: janasluo
 * @Date: 2021-11-02 12:59:02
 * @LastEditTime: 2021-11-03 14:08:25
 * @LastEditors: janasluo
 * @Description: 
 * @FilePath: /test/Users/janas/work/project/frontend/admin-system/src/pages/main/home/Test.vue
-->
<template>
  <div>
    <h4>Hello from Vue!!!{{ title }}</h4>
    <button @click="clickMe()">{{ this.clicky ? 'Click' : 'Clack' }}</button>
    <component
      ref="compRef"
      class="component"
      :is="compDefObj"
    >
    </component>
  </div>
</template>
<script>
import configData from './config.js'
export default {
  name: 'Testing',
  props: ['title'],
  created () {
    this.loadCompDef()
    this.config = configData
  },
  methods: {
    clickMe() {
      this.clicky = !this.clicky
    },
    loadCompDef () {
       const componentUrl = '/vuecom.js'
      window.System.import(componentUrl)
      .then((res) => {
        const compDef = res.default;
        this.compDefObj = compDef
      })
    },
  },
  data() {
    return {
      clicky: true,
      compDefObj: null,
      config:{}
    }
  }
}
</script>
