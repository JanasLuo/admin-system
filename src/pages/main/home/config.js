let a = {
  name: 'seatom-bar-chart', // 组件名同时也作为包名
  version: '1.0.0', // 版本号，符合语义化版本规则
  chartConfig: {
    // 组件配置
    cn_name: '图表中文名称', // 组件中文名
    type: 'custom', // 组件类型【自定义图表默认为“custom”】
    icon: '', // 组件图标url，如为空，则使用系统默认图标
    show: true, // 组件是否显示
    width: 400, // 组件初始宽度
    height: 200, // 组件初始高度
    presetChildren: [], // 预设子组件名称列表
    children: [], // 支持的子组件名称数组
    data: {
      // 静态数据配置
      source: [
        // 数据源
        {
          x: '普货',
          y: 5
        },
        {
          x: '普货',
          y: 22
        },
        {
          x: '泡货',
          y: 22
        },
        {
          x: '设备',
          y: 14
        },
        {
          x: '矿产',
          y: 15
        },
        {
          x: '钢铁',
          y: 15
        },
        {
          x: '建材',
          y: 12
        },
        {
          x: '食品',
          y: 12
        },
        {
          x: '粮食',
          y: 28
        }
      ],
      fields: [
        // 数据字段
        {
          name: 'x',
          type: 'string',
          description: '类目'
        },
        {
          name: 'y',
          type: 'number',
          description: '数值'
        }
      ]
    },
    config: {
      // 组件控件配置
      size: {
        name: '字号',
        type: 'number',
        default: 22,
        range: [10, 100]
      },
      color: {
        name: '颜色',
        type: 'fill',
        default: '#fff'
      },
      bgColor: {
        name: '背景颜色',
        type: 'fill',
        default: '#fff'
      }
    },
    events: [
      // 组件事件配置，在组件内部通过 this.emit('click',{}) 抛出
      {
        name: 'click', // 事件名
        description: '点击时', // 事件描述
        params: [
          // 事件参数说明
          {
            name: 'x',
            type: 'string',
            description: '类目'
          },
          {
            name: 'y',
            type: 'number',
            description: '数值'
          }
        ]
      },
      {
        name: 'hover',
        description: '悬浮时',
        params: [
          {
            name: 'x',
            type: 'string',
            description: '类目'
          },
          {
            name: 'y',
            type: 'number',
            description: '数值'
          }
        ]
      }
    ],
    actions: [
      // 组件行为配置，需在组件 methods 声明对应名称的方法
      {
        name: 'show', // 方法名
        description: '显示', // 描述
        params: [] // 参数
      },
      {
        name: 'highlight',
        description: '高亮显示',
        params: [
          {
            name: 'x',
            type: 'string',
            description: '柱子类目'
          }
        ]
      }
    ]
  }
}
export default a
