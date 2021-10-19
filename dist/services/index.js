import { __awaiter, __generator } from 'tslib'
import axios from 'axios'
import 'reflect-metadata'
import loaderStore from '../stores/modules/loader'
import { message } from 'antd'
import user from '../stores/modules/user'
import Util from 'src/utils'
var CancelToken = axios.CancelToken
var source = CancelToken.source()
var AxiosUtil = /** @class */ (function () {
  function AxiosUtil() {}
  AxiosUtil.getAxios = function () {
    var _this = this
    if (!this.http) {
      this.http = axios
      this.http.timeout = 45000
      this.http.interceptors.request.use(
        function (config) {
          var hideLoader = config.data && config.data.hideLoader
          if (_this.reqCount === 0 && !hideLoader) {
            _this.loader.loaderStart()
          }
          config.headers.Authorization = 'Bearer ' + user.getAccessToken()
          config.headers.pageroute = window.location.href
          _this.reqCount++
          return config
        },
        function (error) {
          _this.reqCount--
          if (_this.reqCount === 0) {
            _this.loader.loaderEnd()
          }
          return Promise.reject(error)
        }
      )
      this.http.interceptors.response.use(
        function (response) {
          if (response.data.status === 302) {
            if (_this.isValidLogin) {
              message.error('登录已经失效，请重新登录')
            }
            user.sigout()
            _this.isValidLogin = false
            source.cancel('')
            window.location.href = response.data.redirectUrl
          } else {
            _this.isValidLogin = true
            _this.reqCount--
            if (_this.reqCount === 0) {
              _this.loader.loaderEnd()
            }
            return response
          }
        },
        function (error) {
          _this.reqCount--
          if (_this.reqCount === 0) {
            _this.loader.loaderEnd()
          }
          if (error.response) {
            switch (error.response.status) {
              case 401:
              case 403:
              case 302:
                if (_this.isValidLogin) {
                  message.error('登录已经失效，请重新登录')
                }
                user.sigout()
                _this.isValidLogin = false
                source.cancel('')
                break
              default:
                break
            }
          }
          return Promise.reject(error)
        }
      )
    }
    return this.http
  }
  AxiosUtil.loader = loaderStore
  AxiosUtil.reqCount = 0
  AxiosUtil.isValidLogin = false
  return AxiosUtil
})()
var Service = /** @class */ (function () {
  function Service(path) {
    this.http = AxiosUtil.getAxios()
    this.ROOT_URL = path
  }
  Service.prototype.get = function (str, data, hideLoader) {
    if (hideLoader === void 0) {
      hideLoader = false
    }
    return __awaiter(this, void 0, void 0, function () {
      var _this = this
      return __generator(this, function (_a) {
        return [
          2 /*return*/,
          new Promise(function (resolve, reject) {
            _this.http
              .get('' + _this.ROOT_URL + str, {
                cancelToken: source.token,
                params: data || {},
                data: {
                  hideLoader: hideLoader
                }
              })
              .then(_this.reponseParamsCheck.bind(_this, resolve, reject))
              .catch(function (err) {
                reject(err)
              })
          })
        ]
      })
    })
  }
  Service.prototype.delete = function (str, params, data) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this
      return __generator(this, function (_a) {
        return [
          2 /*return*/,
          new Promise(function (resolve, reject) {
            _this.http
              .delete('' + _this.ROOT_URL + str, {
                params: params || {},
                data: data || {}
              })
              .then(_this.reponseParamsCheck.bind(_this, resolve, reject))
              .catch(function (err) {
                reject(err)
              })
          })
        ]
      })
    })
  }
  Service.prototype.put = function (str, data, paramsUrl) {
    if (paramsUrl === void 0) {
      paramsUrl = ''
    }
    return __awaiter(this, void 0, void 0, function () {
      var _this = this
      return __generator(this, function (_a) {
        return [
          2 /*return*/,
          new Promise(function (resolve, reject) {
            var url
            if (paramsUrl) {
              var querry = Util.makeQuery(data)
              url = '' + _this.ROOT_URL + str + querry
            } else {
              url = '' + _this.ROOT_URL + str
            }
            _this.http
              .put(url, data)
              .then(_this.reponseParamsCheck.bind(_this, resolve, reject))
              .catch(function (err) {
                reject(err)
              })
          })
        ]
      })
    })
  }
  Service.prototype.post = function (str, data) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this
      return __generator(this, function (_a) {
        return [
          2 /*return*/,
          new Promise(function (resolve, reject) {
            _this.http
              .post('' + _this.ROOT_URL + str, data)
              .then(_this.reponseParamsCheck.bind(_this, resolve, reject))
              .catch(function (err) {
                reject(err)
              })
          })
        ]
      })
    })
  }
  Service.prototype.reponseParamsCheck = function (resolve, reject, res) {
    if (!res) {
      reject('请求失败')
    }
    if (res.data.status === 200 && res.data.status === 200) {
      resolve(res.data)
    } else {
      var msg = res.data && (res.data.message || '请求失败')
      message.error(msg)
      resolve(
        res.data || {
          msg: msg,
          status: 1
        }
      )
    }
  }
  return Service
})()
export { Service }
var servicesMap = require.context('./', true, /\.ts$/)
var services = {}
servicesMap.keys().forEach(function (key) {
  if (key.indexOf('index.ts') > -1) {
    if (key.indexOf('./index.ts') === -1) {
      var tmpKey = key.replace('./', '').replace('/index.ts', 'Service')
      services[tmpKey] = servicesMap(key).default
    }
  }
})
export default services
