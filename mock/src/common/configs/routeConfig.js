/**
 * 侧边导航配置
 */

export default [
  {
    isSidebar: true,
    key: 'form',
    title: {
      label: '表单配置化',
      icon: 'user',
    },
    subMenus: [
      { icon: 'user', label: '简介', path: '/form/info' },
      { icon: 'user', label: '示例', path: '/form/demo' },
      { icon: 'user', label: 'HFormItem', path: '/form/formitem' },
      { icon: 'user', label: 'HFormLayout', path: '/form/formlayout' },
    ]
  },
  {
    isSidebar: true,
    key: 'summaryTable',
    title: {
      label: '表格汇总',
      icon: 'table',
    },
    subMenus: [
      { icon: 'user', label: '简介', path: '/summarytable/info' },
      { icon: 'user', label: '示例', path: '/summarytable/demo' },
    ]
  },
  {
    isSidebar: true,
    key: 'pictureView',
    title: {
      label: '图片展示',
      icon: 'picture',
    },
    subMenus: [
      { icon: 'user', label: '简介', path: '/pictureView/info' },
      { icon: 'user', label: '示例', path: '/pictureView/demo' },
    ]
  },
  {
    isSidebar: true,
    key: 'detail',
    title: {
      label: '详情页',
      icon: 'profile',
    },
    subMenus: [
      { icon: 'user', label: '简介', path: '/detail/info' },
      { icon: 'user', label: '示例', path: '/detail/demo' },
    ]
  },
  {
    isSidebar: true,
    key: 'query',
    title: {
      label: '搜索页',
      icon: 'export',
    },
    subMenus: [
      { icon: 'user', label: '简介', path: '/query/info' },
      { icon: 'user', label: '示例', path: '/query/demo' },
    ]
  },
  {
    isSidebar: true,
    key: 'display',
    icon: 'upload',
    label: 'HDisplay',
    path: '/test/display',
  }
]


