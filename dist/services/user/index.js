import { __awaiter, __decorate, __extends, __generator } from 'tslib'
import { Service } from '..'
import { action } from 'mobx'
var UserService = /** @class */ (function (_super) {
  __extends(UserService, _super)
  function UserService(path) {
    if (path === void 0) {
      path = '/api'
    }
    return _super.call(this, path) || this
  }
  UserService.prototype.login = function (data) {
    if (data === void 0) {
      data = {}
    }
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.post('/cube_base/userInfo/user_login', data)]
      })
    })
  }
  UserService.prototype.getProfile = function (data) {
    if (data === void 0) {
      data = {}
    }
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.get('/user/profile', data)]
      })
    })
  }
  UserService.prototype.getUseList = function (data) {
    if (data === void 0) {
      data = {}
    }
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [
          2 /*return*/,
          this.get('/cube_base/userInfo/user_list', data, true)
        ]
      })
    })
  }
  UserService.prototype.syncUser = function (data) {
    if (data === void 0) {
      data = {}
    }
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [
          2 /*return*/,
          this.get('/cube_base/user_sync/syncUser', data, true)
        ]
      })
    })
  }
  UserService.prototype.fetchLogoList = function (data) {
    if (data === void 0) {
      data = []
    }
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.get('/cube_base/logo/list', data)]
      })
    })
  }
  UserService.prototype.getUserInfo = function (data) {
    if (data === void 0) {
      data = {}
    }
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [
          2 /*return*/,
          this.get('/cube_base/userInfo/current_user', data)
        ]
      })
    })
  }
  UserService.prototype.sigout = function (data) {
    if (data === void 0) {
      data = {}
    }
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.get('/cube_base/userInfo/user_logout', data)]
      })
    })
  }
  __decorate([action], UserService.prototype, 'login', null)
  __decorate([action], UserService.prototype, 'getProfile', null)
  __decorate([action], UserService.prototype, 'getUseList', null)
  __decorate([action], UserService.prototype, 'syncUser', null)
  __decorate([action], UserService.prototype, 'fetchLogoList', null)
  __decorate([action], UserService.prototype, 'getUserInfo', null)
  __decorate([action], UserService.prototype, 'sigout', null)
  return UserService
})(Service)
export { UserService }
export default new UserService()
