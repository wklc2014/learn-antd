/**
 * 详情配置示例
 */
[
  {
    // 详情卡片类型
    type: 'form',

    // 详情卡片标题
    title: '',

    // 卡片配置
    params: {
      layout: '',
    },

    // 卡片数据配置
    configs: [
      {
        label: '',
        config: {
          id: '',
          type: '',
          api: {},
          ext: {},
        },
        extMap: {},
        path: '',
      }
    ],
  },
  {
    // 详情卡片类型
    type: 'table',

    // 详情卡片标题
    title: '',

    // 卡片配置
    params: {

    },

    // 卡片数据配置
    configs: [
      {
        config: {
          id: '',
          type: '',
          api: {},
          ext: {
            render: '',
          },
        },
        extMap: {
          title: '',
          total: true,
        },
        path: '',
      }
    ],
  }
]