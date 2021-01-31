/*
 * @Date: 2021-01-27 15:59:48
 * @LastEditors: mark
 * @LastEditTime: 2021-01-28 10:22:00
 * @Description: 动态表单使用
 */

import { action, observable } from 'mobx'

export class HeaderStore {
  @observable private toggleMenu: boolean
  // map结构的左侧动态元素列表
  @observable public elementMap: any = {}
  // 'ele1': {
  //   id: '1',
  //   value: '1',
  //   label: '文本1',
  //   placeholder: '1',
  //   required: false
  // }
  // 选中的element id
  @observable public nowElementId: string = ''

  constructor() {
    this.toggleMenu = false
  }

  // 更新选中的eleid
  @action public changeNowElementId = (id: string) => {
    this.nowElementId = id
  }
  // 添加新的element
  @action public addElementMap = (id: string, config: any) => {
    this.elementMap[id] = config
  }
  // 修改element设置
  @action public changeElementMap = (config: any) => {
    this.elementMap[this.nowElementId] = config
  }
  // 下拉框添加
  @action public addElementSelectItem = () => {
    this.elementMap[this.nowElementId].items.push({
      value: '',
      name: '属性名' + (this.elementMap[this.nowElementId].items.length + 1)
    })
  }
  // 下拉框删除
  @action public minusElementSelectItem = (index: number) => {
    if (this.elementMap[this.nowElementId].items.length > 0) {
      this.elementMap[this.nowElementId].items.splice(index, 1)
    } else {
      console.log('下拉框最少应有一个选项')
    }
  }
  // 修改下拉框属性或值
  @action public changeElementSelectItem = (
    index: number,
    type: string,
    value: string
  ) => {
    this.elementMap[this.nowElementId].items[index][type] = value
  }
  // 修改下拉框属性或值
  @action public changeElementCheckboxItem = (index: number, value: string) => {
    this.elementMap[this.nowElementId].items[index] = value
  }
  public get getToggleMenu() {
    return this.toggleMenu
  }

  @action public async toggle(id: string) {
    this.toggleMenu = !this.toggleMenu
  }
}

export default new HeaderStore()
