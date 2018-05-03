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
    typeConfig: {
      layout: '',
    },

    // 卡片数据配置
    dataConfig: [
      {
        label: '',
        config: {
          id: '',
          type: '',
          api: {},
          ext: {
            render: '',
            colspan: 1,
          },
        },
        params: {},
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
    typeConfig: {

    },

    // 卡片数据配置
    dataConfig: [
      {
        config: {
          id: '',
          type: '',
          api: {},
          ext: {
            render: '',
          },
        },
        params: {
          title: '',
          total: true,
        },
        path: '',
      }
    ],
  }
]