/*
 * @Descripttion: 表单设计编辑器状态数据
 * @version:
 * @Author: luolei
 * @Date: 2021-01-26 18:08:30
 * @LastEditors: mark
 * @LastEditTime: 2021-01-29 19:30:40
 */

import { action, observable } from 'mobx'
import Util from 'src/utils'
import Bean from 'src/beans'
export class EditorStore {
  @observable private loading: boolean
  @observable private containerStyle = {} // 表单整体样式配置
  @observable private layers: any[] = [] // 图层数据 树形数据结构
  @observable public activeId = '' // 当前选中元素id（组图层或者基础元件图层）
  @observable private activeElement: any = {} // 当前激活元素 （组或者元件）
  @observable private echoData: any[] = [
    {
      name: '1',
      type: 1
    },
    {
      name: '2',
      type: 2
    },
    {
      name: '3',
      type: 2
    }
  ] // 当前激活元素 （组或者元件）
  constructor() {
    this.loading = false
  }
  public get getContainerStyle() {
    return this.containerStyle
  }
  public setContainerStyle(containerStyle: any) {
    this.containerStyle = containerStyle
  }

  public get getLayers() {
    return this.layers
  }
  public setLayers(layers: any) {
    this.layers = layers
  }

  public get getActiveId() {
    return this.activeId
  }
  public setActiveId(activeId: string) {
    console.log(activeId, 'ac------')
    // 重新计算激活元素
    if (activeId && this.activeId !== activeId && this.layers.length) {
      this.setActiveElement(activeId)
    }
    this.activeId = activeId
  }

  public setActiveElement(activeId: string) {
    const element = Util.getObjFromTreeById(activeId, this.layers)
    // console.log(JSON.stringify(element), element, 'activeElement')
    this.activeElement = element
  }
  public get getActiveElement() {
    return this.activeElement
  }
  // 获取元素类型
  public get getActiveElementType() {
    return this.activeElement.type
  }
  public get isChooseGroup() {
    return this.activeElement.isGroup
  }
  // 修改表单容器样式配置
  public changeFormStyle(key: string, value: any) {
    this.containerStyle[key] = value
  }
  // 修改元素基础属性配置
  public changeElementBaseAttr(key: string, value: any) {
    this.activeElement[key] = value
  }
  // 修改元素样式属性配置
  public changeElementStyleAttr(key: string, value: any) {
    if (!this.activeElement.style) {
      this.activeElement.style = {}
    }
    this.activeElement.style[key] = value
  }
  @action public loaderStart() {
    this.loading = true
  }

  @action public loaderEnd() {
    this.loading = false
  }

  public get getLoading(): boolean {
    return this.loading
  }
  // 设置循环复现data
  public setEchoData(arr: any) {
    this.echoData = arr
  }
  // 循环复现
  @action public echoArr() {
    this.layers = []
    if (this.echoData && this.echoData.length > 0) {
      let i = 0
      for (const item of this.echoData) {
        this.addLayers(item.type, 0, i * 84, item.name)
        i++
      }
    }
  }

  // 添加一个元素 类型 左边便宜 右侧偏移
  public addLayers(type: number, x: number, y: number, name?: string) {
    const id = Util.genNonDuplicateID()
    console.log(type, 'type----')
    const obj = {
      title: name || Bean.SCHEMA_TYPE[type], // 标题
      id, // 原件id,前端生成
      order: 0, // 排序
      type, // 表单类型
      readOnly: false, // 是否只读
      disabled: false, // 是否禁用
      visible: false, // 是否可见
      defaultValue: '', // 默认值
      placeholder: '', // 缺省提示
      multi: false, // 下拉框是否可多选
      items: [
        {
          value: '',
          name: ''
        }
      ], // 下拉框、复选框、单选框 字典项
      ref_form: {
        // 内嵌表配置
        can_edit: true, // 编辑时可新建删除
        data_creation: true, // 新建数据
        data_selection: false, // 关联显示
        data_correlation: false, // 关联数据
        schema: null, // 内嵌表schema
        innerTableList: [],
        reference_fields: [
          {
            main_table_field: '',
            inner_table_field: '',
            filterInnerTableList: []
          }
        ] // 关联显示的列表
      },
      showTime: false, // 日期控件，是否显示时间
      required: {
        // 必填项校验
        isUse: true, // 是否启用
        mes: '错误提示' // 错误提示
      },
      minSize: {
        // 最小长度校验
        isUse: true, // 是否启用
        num: 9, // 最小值
        mes: '错误提示' // 错误提示
      },
      maxSize: {
        // 最大长度校验
        isUse: true, // 是否启用
        num: 9, // 最大值
        mes: '错误提示' // 错误提示
      },
      input_assist: false, // 是否开启辅助输入
      select_first: false, // 是否默认选中第一个
      assist_form: '', //  辅助出入参照表
      assist_field: '', // 辅助出入参照字段
      is_sys_table: false, // 是否是系统表
      assist_required: false, // 是否必须从选项中选择
      assist_filters: [
        {
          field_table_id: '', // 筛选关联表id(当前模板表单id)
          field_id: '', // 筛选关联字段id（当前模板表中的其他字段，前端联动关联时用）
          value_field_id: '', // 辅助输入参照表中筛选属性的id
          field_type: 1 // 字段类型
        }
      ], // 关联辅助筛选
      style: {
        x, // 相对父容器的x轴坐标
        y, // 相对父容器的y轴坐标
        width: 376, // 宽度
        height: 84, // 高度
        zIndex: '', // 层级
        color: '', // 颜色
        fontSize: '', //  字体大小
        fontWeight: '', // 字重
        padding: '', // 内边距
        margin: '', // 外边距
        backgroundColor: '', // 背景颜色
        backgroundImage: '', // 背景图片
        opacity: '' // 透明度
      }
    }

    this.layers.push(obj)
  }
}

export default new EditorStore()
