var stores = {}
var StoreClass = {}
var files = require.context('./modules/', true, /\.ts$/)
files.keys().forEach(function (item) {
  var tmpLkey = item
    .split('/')
    [item.split('/').length - 1].replace(/\.ts/g, 'Store')
  stores[tmpLkey] = files(item).default
})
export default stores
export { StoreClass }
