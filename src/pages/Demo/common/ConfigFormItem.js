export default [
  {
    label: '姓名',
    config: {
      id: 'user_name_1',
      type: 'input',
      api: {

      },
      ext: {
        rules: [
          { required: true, message: '内容必填' }
        ]
      }
    },
    params: {
      layout: 'L0',
    }
  },
  {
    label: '日期',
    config: {
      id: 'user_name_2',
      type: 'date',
    },
    params: {
      layout: 'L0',
    }
  },
  {
    label: '选择',
    config: {
      id: 'user_name_3',
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
    params: {
      layout: 'L0',
    }
  },
  {
    config: {
      id: 'user_name_4',
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
      layout: 'L0',
      offset: true,
    }
  }
]