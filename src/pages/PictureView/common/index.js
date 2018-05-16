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

// HPictureView 组件 api
export const __HPictureViewApi = [
  {
    id: '1',
    params: 'wraperStyle',
    info: '组件包裹器样式',
    type: 'object',
    default_value: '{}',
  },
  {
    id: '2',
    params: 'viewHeight',
    info: '图片展示区高度，宽度默认为100%',
    type: 'number/string',
    default_value: '400',
  },
  {
    id: '6',
    params: 'picSrc',
    info: '图片地址',
    type: 'string',
    default_value: '空',
  },
  {
    id: '3',
    params: 'picWidth',
    info: '图片初始显示宽度',
    type: 'number',
    default_value: '图片展示区最大能显示宽度',
  },
  {
    id: '4',
    params: 'picRotate',
    info: '图片旋转角度',
    type: 'number',
    default_value: '0',
  },
  {
    id: '5',
    params: 'picPositionX',
    info: '图片x坐标',
    type: 'number',
    default_value: '0',
  },
  {
    id: '7',
    params: 'picPositionY',
    info: '图片y坐标',
    type: 'number',
    default_value: '0',
  },
  {
    id: '8',
    params: 'picZoomRate',
    info: '图片缩放系数，鼠标滚动缩放时单次增加/减少的缩放级别',
    type: 'number',
    default_value: '3',
  },
  {
    id: '9',
    params: 'picRotateRate',
    info: '图片旋转系数，鼠标滚动旋转时单次增加/减少的旋转级别',
    type: 'number',
    default_value: '3',
  },
  {
    id: '10',
    params: 'picBtns',
    info: '图片操作按钮，支持旋转、缩放、重置',
    type: 'array/boolean',
    default_value: 'false',
  }
];
