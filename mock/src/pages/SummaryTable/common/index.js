// 表格头
export function getColumns(prefix = '') {
  return [
    {
      title: '参数',
      dataIndex: `${prefix}params`,
      key: `${prefix}params`,
      width: '20%',
    },
    {
      title: '说明',
      dataIndex: `${prefix}info`,
      key: `${prefix}info`,
      width: '40%',
    },
    {
      title: '类型',
      dataIndex: `${prefix}type`,
      key: `${prefix}type`,
      width: '20%',
    },
    {
      title: '默认值',
      dataIndex: `${prefix}default_value`,
      key: `${prefix}default_value`,
      width: '20%',
    },
  ]
}

// HSummaryTable 组件 api
export const __HSummaryTableApi = [
  {
    id: '1',
    params: 'configs',
    info: '表格配置数组',
    type: 'array',
    default_value: '[]',
  },
  {
    id: '2',
    params: 'dataSource',
    info: '表单数据',
    type: 'array',
    default_value: '[]',
  },
  {
    id: '6',
    params: 'onChange',
    info: '表单元素值收集方式',
    type: 'function',
    default_value: '({ id, value }) => {}',
  },
  {
    id: '3',
    params: 'tableApi',
    info: 'antd Table 组件支持的 API',
    type: '{}',
    default_value: '{}',
  },
  {
    id: '4',
    params: 'total',
    info: '表格是否汇总',
    type: 'boolean',
    default_value: 'false',
  },
  {
    id: '5',
    params: 'totalPrecision',
    info: '表格汇总数据精度',
    type: 'number',
    default_value: '2',
  },
  {
    id: '7',
    params: 'totalLineKey',
    info: '表格汇总行 key',
    type: 'string',
    default_value: 'ts',
  }
];

// HSummaryTable.configs
export const __HSummaryTableConfigsApi = [
  {
    id: '1',
    params: 'params',
    info: '表格配置',
    type: 'object',
    default_value: '{}',
  },
  {
    id: '2',
    params: 'config',
    info: '表单输入配置',
    type: 'object',
    default_value: '无',
  },
  {
    id: '3',
    params: 'extMap',
    info: '表单元素扩展配置',
    type: 'object',
    default_value: '{}',
  }
]

// HSummaryTable.configs.params
export const __HSummaryTableConfigsParamsApi = [
  {
    id: '1',
    params: 'width',
    info: '表格列宽度',
    type: 'string',
    default_value: '',
  },
  {
    id: '2',
    params: 'title',
    info: '表格标题，必填',
    type: 'string',
    default_value: '无',
  },
  {
    id: '3',
    params: 'total',
    info: '表格列是否汇总列',
    type: 'boolean',
    default_value: 'false',
  },
  {
    id: '4',
    params: 'render',
    info: '表格列的值是否通过计算获取',
    type: '函数体的string',
    default_value: '空',
  },
  {
    id: '5',
    params: 'isHide',
    info: '表格隐藏',
    type: 'boolean',
    default_value: 'false',
  }
]
