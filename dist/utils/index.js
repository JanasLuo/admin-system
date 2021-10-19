import { __assign } from 'tslib'
/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2021-05-06 17:08:42
 * @LastEditors: janasluo
 * @LastEditTime: 2021-09-14 19:19:13
 */
/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2020-09-11 09:53:07
 * @LastEditors: luolei
 * @LastEditTime: 2021-01-27 16:28:17
 */
import moment from 'moment'
import stores from 'src/stores'
var Util = /** @class */ (function () {
  function Util() {}
  /* url search转对象 */
  Util.getHrefMap = function (search) {
    if (search) {
      var searchCon = search.split('?')[1]
      var searchItem = searchCon.split('&')
      var res_1 = {}
      searchItem.forEach(function (item) {
        var key = item.split('=')[0]
        var val = item.split('=')[1]
        res_1[key] = val
      })
      return res_1
    }
    return null
  }
  // 对象转url search
  Util.makeQuery = function (queryObject) {
    var entries = Object.entries(queryObject)
    var query = entries
      .reduce(function (result, entry) {
        result.push(entry.join('='))
        return result
      }, [])
      .join('&')
    return '?' + query
  }
  /* 日期时间格式化 */
  Util.momentDate = function (num, type) {
    if (type === void 0) {
      type = 'date_time'
    }
    if (num) {
      if (Object.prototype.toString.call(num) === '[object Date]') {
        num = num.getTime()
      }
      switch (type) {
        case 'date':
          return moment(parseInt(num, 10)).format('YYYY-MM-DD')
        case 'date_h':
          return moment(parseInt(num, 10)).format('YYYY/MM/DD')
        case 'date_time':
          return moment(parseInt(num, 10)).format('YYYY-MM-DD HH:mm:ss')
        case 'data_h_time':
          return moment(parseInt(num, 10)).format('YYYY/MM/DD HH:mm:ss')
        case 'data_h_time_h':
          return moment(parseInt(num, 10)).format('YYYY/MM/DD HH:mm')
        case 'time':
          return moment(parseInt(num, 10)).format('HH:mm:ss')
        case 'time_h':
          return moment(parseInt(num, 10)).format('HH:mm')
        default:
          return moment(parseInt(num, 10)).format('YYYY-MM-DD HH:mm:ss')
      }
    } else {
      return ''
    }
  }
  //  判断对象类型
  Util.isPlainObject = function (val) {
    return toString.call(val) === '[object Object]'
  }
  /* 深拷贝 */
  Util.deepMerge = function () {
    var objs = []
    for (var _i = 0; _i < arguments.length; _i++) {
      objs[_i] = arguments[_i]
    }
    var result = Object.create(null)
    objs.forEach(function (obj) {
      if (obj) {
        Object.keys(obj).forEach(function (key) {
          var val = obj[key]
          if (Util.isPlainObject(val)) {
            if (Util.isPlainObject(result[key])) {
              result[key] = Util.deepMerge(result[key], val)
            } else {
              result[key] = Util.deepMerge(val)
            }
          } else {
            result[key] = val
          }
        })
      }
    })
    return result
  }
  /**
   * @name: 树形结构数据通过id查找
   * @msg: 返回新的对象，不是原有数据的引用值
   * @param {string} id
   * @param {any} treeData
   * @return {*}
   */
  Util.findObjFromTreeDataById = function (id, treeData) {
    var treeList = treeData.slice()
    var len = treeList.length
    for (var i = 0; i < len; i++) {
      var item = treeList[i]
      if (item.id === id) {
        return __assign({}, item)
      }
      if (item.children) {
        var targetObj = this.findObjFromTreeDataById(id, item.children)
        if (targetObj) {
          return targetObj
        }
      }
    }
  }
  /**
   * @name: 树形结构数据通过id查找
   * @msg: 返回原有树形数据的引用值
   * @param {string} id
   * @param {any} treeData
   * @return {*}
   */
  Util.getObjFromTreeById = function (id, treeData) {
    var len = treeData.length
    for (var i = 0; i < len; i++) {
      var item = treeData[i]
      if (item.id === id) {
        return item
      }
      if (item.children) {
        var targetObj = this.findObjFromTreeDataById(id, item.children)
        if (targetObj) {
          return targetObj
        }
      }
    }
  }
  /* 获取二进制数据 */
  Util.getBlob = function (url) {
    return new Promise(function (resolve) {
      var xhr = new XMLHttpRequest()
      var s = stores
      var accessToken = s.userStore.getAccessToken()
      xhr.open('GET', url, true)
      xhr.responseType = 'blob'
      xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken)
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr.response)
        }
      }
      xhr.send()
    })
  }
  /* 保存文件 */
  Util.saveAs = function (blob, filename) {
    var navigator = window.navigator
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, filename)
    } else {
      var link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = filename
      link.click()
      window.URL.revokeObjectURL(link.href)
    }
  }
  Util.getAuthHeader = function () {
    var s = stores
    var accessToken = s.userStore.getAccessToken()
    if (accessToken) {
      return { Authorization: 'Bearer ' + accessToken }
    }
    return {}
  }
  Util.viewGo = function (url) {
    var dom = document.createElement('a')
    dom.setAttribute('href', url)
    dom.setAttribute('target', '_blank')
    var e = document.createEvent('MouseEvents')
    e.initEvent('click', true, true)
    dom.dispatchEvent(e)
  }
  /* 判断当前窗口是否是全屏状态 */
  Util.isFullScreen = function () {
    var document = window.document
    return !!(
      document.fullscreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.webkitFullScreen ||
      document.msFullScreen
    )
  }
  /* 全屏状态切换 */
  Util.requestFullScreen = function (element) {
    if (element === void 0) {
      element = window.document.documentElement
    }
    var document = window.document
    if (this.isFullScreen()) {
      // 判断各种浏览器，找到正确的方法
      var exitMethod =
        document.exitFullscreen || // W3C
        document.mozCancelFullScreen || // Chrome等
        document.webkitExitFullscreen || // FireFox
        document.webkitExitFullscreen // IE11
      if (exitMethod) {
        exitMethod.call(document)
      }
    } else {
      // const element: any = document.documentElement
      var requestMethod =
        element.requestFullScreen || // W3C
        element.webkitRequestFullScreen || // Chrome等
        element.mozRequestFullScreen || // FireFox
        element.msRequestFullScreen // IE11
      if (requestMethod) {
        requestMethod.call(element)
      }
    }
  }
  // 计算chrome浏览器版本
  Util.getChromeVersion = function () {
    var arr = navigator.userAgent.split(' ')
    var chromeVersion = ''
    arr.forEach(function (item) {
      if (/chrome/i.test(item)) {
        chromeVersion = item
      }
    })
    if (chromeVersion) {
      return Number(chromeVersion.split('/')[1].split('.')[0])
    } else {
      return false
    }
  }
  /**
   * 数转数组
   *
   * @static
   * @param {*} tree
   * @param {string} key
   * @returns
   * @memberof Util
   */
  Util.treeTransArray = function (tree, key) {
    return tree
      .reduce(function f(con, item) {
        con.push(item)
        if (item[key] && item[key].length > 0) {
          item[key].reduce(f, con)
        }
        return con
      }, [])
      .map(function (item) {
        item.children = []
        return item
      })
  }
  /**
   *  数组转树
   *
   * @static
   * @param {*} targetList
   * @param {string} key
   * @returns
   * @memberof Util
   */
  Util.arrayTransTree = function (targetList, key) {
    return targetList
      .filter(function (it) {
        return it[key] === it.id || !it[key]
      })
      .map(function f(it) {
        var children = targetList
          .filter(function (item) {
            return item[key] === it.id && item[key] !== item.id
          })
          .map(f)
        if (children.length) {
          it.children = children
        }
        return it
      })
  }
  /* 生成唯一id */
  Util.genNonDuplicateID = function (randomLength) {
    if (randomLength === void 0) {
      randomLength = 10
    }
    return Number(
      Math.random().toString().substr(3, randomLength) + Date.now()
    ).toString(36)
  }
  /* 文件下载，重命名 */
  Util.download = function (url, filename) {
    Util.getBlob(url).then(function (blob) {
      Util.saveAs(blob, filename)
    })
  }
  return Util
})()
export default Util
