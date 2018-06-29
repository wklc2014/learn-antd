/**
 * Form 配置示例
 */

[
  {
    label: '用户姓名',
    config: [
      {
        id: 'first_name',
        type: 'input',
        api: {},
        ext: {
          span: 24,
          toUpperCase: true,
          toLowerCase: true,
          rules: [],
          data: [
            { value: '01', label: '男' },
            { value: '02', label: '女' },
          ],
          hide: false,
          render: (value) => {},
        },
      },
      {
        id: 'last_name',
        type: 'input',
        api: {

        },
        ext: {

        }
      },
    ],
    extMap: {
      layout: 'L0',
      space: 16,
      colspan: 1,
      offset: true,
      hide: false,
      extra: '',
      colon: false,
    }
  }
]