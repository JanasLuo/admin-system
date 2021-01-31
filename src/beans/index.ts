export default class Bean {
  public static COOP_STATUS_MAP = {
    0: '发起',
    1: '已接收',
    2: '已反馈',
    3: '已完成'
  }
  public static CENTER = [116.023483, 28.647418]
  public static ZOOM = 9.285782070032383

  public static MAP_THEME = {
    light: '/gaodemap',
    darkblue: '/darkblue'
  }
  public static COLOR_RANGE = [
    'rgb(89, 211, 220)',
    'rgb(1, 152, 189)',
    'rgb(225, 232, 52)',
    'rgb(239, 138, 28)',
    'rgb(255, 0, 0)'
  ]
  /* 表单原件类型 */
  public static SCHEMA_TYPE = {
    '1': '单行文本',
    '2': '多行文本',
    '3': '数值',
    '4': '日期',
    '5': '日期区间',
    '6': '单选框',
    '7': '复选框',
    '8': '下拉框',
    '9': '级联选择',
    '10': '地址',
    '11': '定位',
    '12': '附件',
    '13': '图片',
    '14': '视频',
    '15': '富文本',
    '16': '自动编号',
    '17': '标题',
    '18': '分隔符',
    '19': '人员',
    '20': '部门',
    '21': '子表',
    '22': '关联表单'
  }
  public static SCHEMA_STATUS = [
    {
      value: 'normal',
      name: '普通'
    },
    {
      value: 'disabled',
      name: '禁用'
    },
    {
      value: 'readOnly',
      name: '只读'
    },
    {
      value: 'hide',
      name: '隐藏'
    }
  ]
  // 表单元件 默认值设置方式
  public static SCHEMA_DEFAULT_VALUE_MODE = [
    {
      value: 'self',
      name: '自定义'
    },
    {
      value: 'formula',
      name: '公式编辑'
    },
    {
      value: 'referData',
      name: '数据联动'
    }
  ]
  // 表单元件 文本框格式
  public static SCHEMA_INPUT_FORMAT = [
    {
      value: '',
      name: '无'
    },
    {
      value: 'phone',
      name: '手机'
    },
    {
      value: 'email',
      name: '邮箱'
    },
    {
      value: 'www',
      name: '网址'
    },
    {
      value: 'identity',
      name: '身份证号'
    }
  ]
  // 表单元件数据提交方式：
  public static SCHEMA_SUBMIT_MODE = [
    {
      value: 'always',
      name: '始终提交'
    },
    {
      value: 'visiable',
      name: '仅显示时提交'
    }
  ]
  // 表单元件 单选、复选排列方式：
  public static SCHEMA_RANGE_MODE = [
    {
      value: 'vertical',
      name: '垂直排列'
    },
    {
      value: 'horizontal',
      name: '水平排列'
    }
  ]
  // 表单元件 上传类型：
  public static SCHEMA_UPLOAD_TYPE = [
    {
      value: 'default',
      name: '默认'
    },
    {
      value: 'card',
      name: '卡片'
    },
    {
      value: 'drag',
      name: '拖拽'
    }
  ]
  // 表单元件 上传按钮类型：
  public static SCHEMA_UPLOAD_BUTTON_TYPE = [
    {
      value: 'primary',
      name: 'primary'
    },
    {
      value: 'second',
      name: 'second'
    },
    {
      value: 'normal',
      name: 'normal'
    }
  ]
  // 表单元件 上传按钮类型：
  public static SCHEMA_UPLOAD_LIST_TYPE = [
    {
      value: 'text',
      name: '文字'
    },
    {
      value: 'image',
      name: '图文'
    }
  ]
  // 表单元件 子表排列方式：
  public static SCHEMA_REF_FPOM_RANGE_MODE = [
    {
      value: 'normal',
      name: '平铺'
    },
    {
      value: 'table',
      name: '表格'
    }
  ]
  // 表单元件 子表排列方式：
  public static SCHEMA_REF_FPOM_THEME = [
    {
      value: 'stripe',
      name: '斑马纹'
    },
    {
      value: 'divider',
      name: '分割线'
    },
    {
      value: 'border',
      name: '边框线'
    }
  ]
}
