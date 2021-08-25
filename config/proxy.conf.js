/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-15 11:35:57
 * @LastEditors: luolei
 * @LastEditTime: 2021-01-29 20:08:47
 */
// const target = "http://nginx-nc"
// const target = "http://192.168.2.100:8081"
// http://119.3.229.77:18080/mockjsdata/87
const target = 'http://123.57.26.81:8080'
// const target = 'http://119.3.229.77:18080/mockjsdata/87'

module.exports = {
  '/api': {
    target: target,
    changeOrigin: true,
    ws: false,
    pathRewrite: {
      '^/api': '/api'
    }
  }
}
