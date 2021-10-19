export default class Util {
  static getHrefMap(search: string): any
  static makeQuery(queryObject: any): string
  static momentDate(num: any, type?: string): string
  static isPlainObject(val: any): val is object
  static deepMerge(...objs: any[]): any
  /**
   * @name: 树形结构数据通过id查找
   * @msg: 返回新的对象，不是原有数据的引用值
   * @param {string} id
   * @param {any} treeData
   * @return {*}
   */
  static findObjFromTreeDataById(id: string, treeData: any): any
  /**
   * @name: 树形结构数据通过id查找
   * @msg: 返回原有树形数据的引用值
   * @param {string} id
   * @param {any} treeData
   * @return {*}
   */
  static getObjFromTreeById(id: string, treeData: any): any
  static getBlob(url: any): Promise<unknown>
  static saveAs(blob: any, filename: any): void
  static download: (url: any, filename: any) => void
  static getAuthHeader(): any
  static viewGo(url: string): void
  static isFullScreen(): boolean
  static requestFullScreen(element?: any): void
  static getChromeVersion(): number | false
  /**
   * 数转数组
   *
   * @static
   * @param {*} tree
   * @param {string} key
   * @returns
   * @memberof Util
   */
  static treeTransArray(tree: any, key: string): any
  /**
   *  数组转树
   *
   * @static
   * @param {*} targetList
   * @param {string} key
   * @returns
   * @memberof Util
   */
  static arrayTransTree(targetList: any, key: string): any
  static genNonDuplicateID(randomLength?: number): string
}
