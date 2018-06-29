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
      { icon: 'user', name: '简介', path: '/example/intro' },
      { icon: 'user', name: '示例', path: '/example/hform' },
      { icon: 'user', name: 'HFormItem', path: '/example/hformitem' },
      { icon: 'user', name: 'HFormLayout', path: '/example/hformlayout' },
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
]


