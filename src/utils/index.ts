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

export default class Util {
  /* url search转对象 */
  public static getHrefMap(search: string) {
    if (search) {
      const searchCon: string = search.split('?')[1]
      const searchItem: string[] = searchCon.split('&')
      const res: any = {}

      searchItem.forEach((item: string) => {
        const key: string = item.split('=')[0]
        const val: string = item.split('=')[1]
        res[key] = val
      })
      return res
    }
    return null
  }
  // 对象转url search
  public static makeQuery(queryObject: any) {
    const entries: any[] = Object.entries(queryObject)
    const query = entries
      .reduce((result, entry: any[]) => {
        result.push(entry.join('='))
        return result
      }, [])
      .join('&')
    return `?${query}`
  }
  /* 日期时间格式化 */
  public static momentDate(num: any, type = 'date_time'): string {
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
  public static isPlainObject(val: any): val is object {
    return toString.call(val) === '[object Object]'
  }
  /* 深拷贝 */
  public static deepMerge(...objs: any[]): any {
    const result = Object.create(null)

    objs.forEach(obj => {
      if (obj) {
        Object.keys(obj).forEach(key => {
          const val = obj[key]
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
  public static findObjFromTreeDataById(id: string, treeData: any): any {
    const treeList: [] = treeData.slice()
    const len: number = treeList.length
    for (let i = 0; i < len; i++) {
      const item: any = treeList[i]
      if (item.id === id) {
        return { ...item }
      }
      if (item.children) {
        const targetObj = this.findObjFromTreeDataById(id, item.children)
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
  public static getObjFromTreeById(id: string, treeData: any): any {
    const len: number = treeData.length
    for (let i = 0; i < len; i++) {
      const item: any = treeData[i]
      if (item.id === id) {
        return item
      }
      if (item.children) {
        const targetObj = this.findObjFromTreeDataById(id, item.children)
        if (targetObj) {
          return targetObj
        }
      }
    }
  }
  /* 获取二进制数据 */
  public static getBlob(url: any) {
    return new Promise(resolve => {
      const xhr = new XMLHttpRequest()
      const s: any = stores
      const accessToken: any = s.userStore.getAccessToken()
      xhr.open('GET', url, true)
      xhr.responseType = 'blob'
      xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`)
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response)
        }
      }

      xhr.send()
    })
  }
  /* 保存文件 */
  public static saveAs(blob: any, filename: any) {
    const navigator: any = window.navigator
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, filename)
    } else {
      const link = document.createElement('a')

      link.href = window.URL.createObjectURL(blob)
      link.download = filename
      link.click()

      window.URL.revokeObjectURL(link.href)
    }
  }
  /* 文件下载，重命名 */
  public static download = (url: any, filename: any) => {
    Util.getBlob(url).then(blob => {
      Util.saveAs(blob, filename)
    })
  }

  public static getAuthHeader(): any {
    const s: any = stores
    const accessToken: any = s.userStore.getAccessToken()
    if (accessToken) {
      return { Authorization: `Bearer ${accessToken}` }
    }
    return {}
  }

  public static viewGo(url: string): void {
    const dom = document.createElement('a')
    dom.setAttribute('href', url)
    dom.setAttribute('target', '_blank')
    const e = document.createEvent('MouseEvents')
    e.initEvent('click', true, true)
    dom.dispatchEvent(e)
  }
  /* 判断当前窗口是否是全屏状态 */
  public static isFullScreen() {
    const document: any = window.document
    return !!(
      document.fullscreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.webkitFullScreen ||
      document.msFullScreen
    )
  }
  /* 全屏状态切换 */
  public static requestFullScreen(
    element: any = window.document.documentElement
  ) {
    const document: any = window.document
    if (this.isFullScreen()) {
      // 判断各种浏览器，找到正确的方法
      const exitMethod: any =
        document.exitFullscreen || // W3C
        document.mozCancelFullScreen || // Chrome等
        document.webkitExitFullscreen || // FireFox
        document.webkitExitFullscreen // IE11
      if (exitMethod) {
        exitMethod.call(document)
      }
    } else {
      // const element: any = document.documentElement
      const requestMethod: any =
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
  public static getChromeVersion() {
    const arr = navigator.userAgent.split(' ')
    let chromeVersion = ''
    arr.forEach(item => {
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
  public static treeTransArray(tree: any, key: string) {
    return tree
      .reduce(function f(con: any, item: any) {
        con.push(item)
        if (item[key] && item[key].length > 0) {
          item[key].reduce(f, con)
        }
        return con
      }, [])
      .map((item: any) => {
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

  public static arrayTransTree(targetList: any, key: string) {
    return targetList
      .filter((it: any) => it[key] === it.id || !it[key])
      .map(function f(it: any) {
        const children = targetList
          .filter((item: any) => item[key] === it.id && item[key] !== item.id)
          .map(f)
        if (children.length) {
          it.children = children
        }
        return it
      })
  }
  /* 生成唯一id */
  public static genNonDuplicateID(randomLength = 10) {
    return Number(
      Math.random().toString().substr(3, randomLength) + Date.now()
    ).toString(36)
  }
}
