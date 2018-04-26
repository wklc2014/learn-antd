export default [
  {
    config: {
      id: 'user_name_1',
      type: 'input',
      options: {
        rules: [
          { required: true, message: '内容必填' }
        ]
      }
    },
    formItemParams: {
      label: '姓名',
    },
  },
  {
    config: {
      id: 'user_name_2',
      type: 'input',
    },
    formItemParams: {
      label: '手机号',
    },
  },
  {
    config: {
      id: 'fetchInput-1',
      type: 'fetchInput',
      params: {
        allowClear: true,
      },
      extMap: {
        url: 'fetch',
      }
    },
    formItemParams: {
      label: 'fetchInput',
    },
  },
  {
    config: {
      id: 'user_name_3',
      type: 'button',
      params: {
        type: 'primary',
      },
      extMap: {
        label: '提交',
        value: '222333',
        offset: true,
      },
    },
  }
]