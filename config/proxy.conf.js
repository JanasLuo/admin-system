// const target = "http://nginx-nc"
const target = "http://192.168.2.100:8081"
module.exports = {
  "/api": {
    "target": target,
    "changeOrigin": true,
    "ws": false,
    "pathRewrite": {
      "^/api": "/api"
    }
  },
}