/**
 * 侧边导航配置
 */

export default [
  {
    hide: false,
    title: {
      name: '表单配置化',
      icon: 'user',
    },
    subMenus: [
      { icon: 'user', name: '简介', path: '/form/info' },
      { icon: 'user', name: '示例', path: '/form/demo' },
      { icon: 'user', name: 'HFormItem', path: '/form/formitem' },
      { icon: 'user', name: 'HFormLayout', path: '/form/formlayout' },
    ],
  },
  {
    hide: false,
    title: {
      name: '表格汇总',
      icon: 'table',
    },
    subMenus: [
      { icon: 'user', name: '简介', path: '/summarytable/info' },
      { icon: 'user', name: '示例', path: '/summarytable/demo' },
    ],
  },
  {
    hide: false,
    key: 'pictureView',
    title: {
      name: '图片展示',
      icon: 'picture',
    },
    subMenus: [
      { icon: 'user', name: '简介', path: '/pictureView/info' },
      { icon: 'user', name: '示例', path: '/pictureView/demo' },
    ],
  },
  {
    hide: false,
    key: 'detail',
    title: {
      name: '详情页',
      icon: 'profile',
    },
    subMenus: [
      { icon: 'user', name: '简介', path: '/detail/info' },
      { icon: 'user', name: '示例', path: '/detail/demo' },
    ],
  },
  {
    hide: false,
    key: 'query',
    title: {
      name: '搜索页',
      icon: 'export',
    },
    subMenus: [
      { icon: 'user', name: '简介', path: '/query/info' },
      { icon: 'user', name: '示例', path: '/query/demo' },
    ],
  },
  {
    hide: false,
    key: 'display',
    icon: 'upload',
    name: 'HDisplay',
    path: '/test/display',
  },
]


