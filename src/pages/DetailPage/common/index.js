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

// HDetail 组件 api
export const __HDetailApi = [
  {
    id: '1',
    params: 'configs',
    info: '详情配置',
    type: 'array',
    default_value: '[]',
  },
  {
    id: '2',
    params: 'dataSource',
    info: '详情数据',
    type: 'array',
    default_value: '[]',
  },
];
// HDetail.configs api
export const __HDetailConfigsApi = [
  {
    id: '1',
    params: 'type',
    info: '详情页卡片类型',
    type: 'string, 目前支持 form 和 table 两种类型',
    default_value: '无',
  },
  {
    id: '2',
    params: 'title',
    info: '详情页卡片标题',
    type: 'string',
    default_value: '',
  },
  {
    id: '3',
    params: 'params',
    info: `详情页卡片扩展配置，
    如果卡片类型是 form，params 参数会直接传给 HForm 组件，
    如果卡片类型是 table，params 参数会直接传给 HSummaryTable 组件`,
    type: 'object',
    default_value: '{}',
  },
  {
    id: '4',
    params: 'configs',
    info: `卡片内容配置，
    如果卡片类型是 form，和 HForm 组件的 configs 配置一致，添加一个 path 属性，指向数据获取路径，`,
    type: 'array',
    default_value: '[]',
  },
  {
    id: '5',
    params: 'path',
    info: '当卡片类型是 table 时，指向数据获取路径',
    type: 'string',
    default_value: '无',
  },
];
