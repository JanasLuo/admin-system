import { __decorate } from 'tslib'
import { action, observable } from 'mobx'
var LoaderStore = /** @class */ (function () {
  function LoaderStore() {
    this.loading = false
  }
  LoaderStore.prototype.loaderStart = function () {
    this.loading = true
  }
  LoaderStore.prototype.loaderEnd = function () {
    this.loading = false
  }
  Object.defineProperty(LoaderStore.prototype, 'getLoading', {
    get: function () {
      return this.loading
    },
    enumerable: false,
    configurable: true
  })
  __decorate([observable], LoaderStore.prototype, 'loading', void 0)
  __decorate([action], LoaderStore.prototype, 'loaderStart', null)
  __decorate([action], LoaderStore.prototype, 'loaderEnd', null)
  return LoaderStore
})()
export { LoaderStore }
export default new LoaderStore()
