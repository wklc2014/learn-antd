// import React from 'react';

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
// HForm 组件 api
export const __HFormApi = [
  {
    id: '1',
    params: 'configs',
    info: '表单配置数组',
    type: 'array',
    default_value: '[]',
  },
  {
    id: '2',
    params: 'cols',
    info: '表单布局列数',
    type: 'number',
    default_value: '1',
  },
  {
    id: '3',
    params: 'layout',
    info: '表单布局类型，可选值[horizontal/vertical/inline]',
    type: 'string',
    default_value: 'horizontal',
  },
  {
    id: '4',
    params: 'itemLayout',
    info: '表单元素栅格布局',
    type: 'string/object',
    default_value: '',
  },
  {
    id: '5',
    params: 'itemSpace',
    info: '表单元素间隔距离，右边内间距',
    type: 'number',
    default_value: '0',
  },
  {
    id: '6',
    params: 'onChange',
    info: '表单元素值收集方式',
    type: 'function',
    default_value: '({ id, value }) => {}',
  },
  {
    id: '7',
    params: 'values',
    info: '表单值',
    type: 'object',
    default_value: '{}',
  }
]

// HForm.configs
export const __HFormConfigsApi = [
  {
    id: '1',
    params: 'label',
    info: '表单元素 label',
    type: 'string',
    default_value: '空字符串',
  },
  {
    id: '2',
    params: 'config',
    info: '表单输入配置',
    type: 'object/array',
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

// HForm.configs.config
export const __HFormConfigsConfigApi = [
  {
    id: '1',
    config_params: 'id',
    config_info: '表单输入元素 - ID',
    config_type: 'string',
    config_default_value: '空',
  },
  {
    id: '2',
    config_params: 'type',
    config_info: '表单输入元素 - 类型',
    config_type: 'string',
    config_default_value: '空',
  },
  {
    id: '3',
    config_params: 'api',
    config_info: '表单输入元素 - API',
    config_type: 'object',
    config_default_value: '{}',
  },
  {
    id: '4',
    config_params: 'ext',
    config_info: '表单输入元素 - 扩展',
    config_type: 'object',
    config_default_value: '{}',
  },
]

// HForm.configs.extMap
export const __HFormConfigsExtMapApi = [
  {
    id: '1',
    extMap_params: 'layout',
    extMap_info: '单个表单元素布局',
    extMap_type: 'string/obejct',
    extMap_default_value: 'L0',
  },
  {
    id: '2',
    extMap_params: 'space',
    extMap_info: '两个表单元素间隔',
    extMap_type: 'number',
    extMap_default_value: '0',
  },
  {
    id: '3',
    extMap_params: 'colspan',
    extMap_info: '单个表单元素横跨列数',
    extMap_type: 'number',
    extMap_default_value: '1',
  },
  {
    id: '4',
    extMap_params: 'offset',
    extMap_info: '表单元素类型没有 label 时，设置 offset = true',
    extMap_type: 'boolean',
    extMap_default_value: 'false',
  },
  {
    id: '5',
    extMap_params: 'hide',
    extMap_info: '表单元素是否隐藏',
    extMap_type: 'boolean',
    extMap_default_value: 'false',
  },
  {
    id: '6',
    extMap_params: 'extra',
    extMap_info: '额外的提示信息',
    extMap_type: '',
    extMap_default_value: '空',
  },
  {
    id: '7',
    extMap_params: 'colon',
    extMap_info: '配合 label 属性使用，表示是否显示 label 后面的冒号',
    extMap_type: 'boolean',
    extMap_default_value: 'false',
  },
]

// HForm.configs.config.ext
export const __HFormConfigsConfigExtApi = [
  {
    id: '1',
    ext_params: 'span',
    ext_info: '表单元素输入 - 在删格布局中所占比例 - 默认 24',
    ext_type: 'number',
    ext_default_value: '24',
  },
  {
    id: '2',
    ext_params: 'toUpperCase',
    ext_info: '表单元素输入时, 设置大写',
    ext_type: 'boolean',
    ext_default_value: 'false',
  },
  {
    id: '3',
    ext_params: 'toLowerCase',
    ext_info: '表单元素输入时, 设置小写',
    ext_type: 'boolean',
    ext_default_value: 'false',
  },
  {
    id: '4',
    ext_params: 'data',
    ext_info: '一些额外数据字段, 如单选框，多选框，文本显示的映射',
    ext_type: 'array',
    ext_default_value: '[]',
  },
  {
    id: '5',
    ext_params: 'hide',
    ext_info: '表单元素是否隐藏',
    ext_type: 'boolean',
    ext_default_value: 'false',
  },
  {
    id: '6',
    ext_params: 'render',
    ext_info: 'type = text 时，表单元素显示方式',
    ext_type: 'function',
    ext_default_value: '(value) => {}',
  },
]