const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 18,
      offset: 4,
    },
  },
};

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
    formItemLayout,
  },
  {
    config: {
      id: 'user_name_2',
      type: 'input',
    },
    formItemParams: {
      label: '手机号',
    },
    formItemLayout,
  },
  {
    config: {
      id: 'user_name_3',
      type: 'button',
      params: {
        type: 'primary',
      },
      extMap: {
        label: '提交'
      },
    },
    formItemLayout: tailFormItemLayout,
  }
]