export default [
  {
    id: 'user_name_1',
    label: '姓名',
    config: {
      type: 'input',
      api: {

      },
      ext: {
        rules: [
          { required: true, message: '内容必填' }
        ]
      }
    },
  },
  {
    id: 'user_name_2',
    label: '日期',
    config: {
      type: 'date',
    },
  },
  {
    id: 'user_name_3',
    label: '选择',
    config: {
      type: 'select',
      api: {
        allowClear: true,
      },
      ext: {
        data: [
          { value: '01', label: 'AAAA' },
          { value: '02', label: 'BBBB' },
          { value: '03', label: 'CCCC' },
        ]
      }
    },
  },
  {
    id: 'user_name_4',
    config: {
      type: 'button',
      api: {
        type: 'primary',
      },
      ext: {
        label: '提交',
        value: '222333',
      },
    },
    params: {
      offset: true,
    }
  }
]