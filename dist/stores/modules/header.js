import { __awaiter, __decorate, __generator } from 'tslib'
import { action, observable } from 'mobx'
var HeaderStore = /** @class */ (function () {
  function HeaderStore() {
    this.toggleMenu = false
  }
  Object.defineProperty(HeaderStore.prototype, 'getToggleMenu', {
    get: function () {
      return this.toggleMenu
    },
    enumerable: false,
    configurable: true
  })
  HeaderStore.prototype.toggle = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.toggleMenu = !this.toggleMenu
        return [2 /*return*/]
      })
    })
  }
  __decorate([observable], HeaderStore.prototype, 'toggleMenu', void 0)
  __decorate([action], HeaderStore.prototype, 'toggle', null)
  return HeaderStore
})()
export { HeaderStore }
export default new HeaderStore()
