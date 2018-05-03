export default [
  {
    params: {
      width: '10%',
      title: '出险时间',
    },
    config: {
      id: 'accident_time',
      type: 'date',
      api: {
        disabled: false,
        placeholder: '请选择出险时间',
      },
      ext: {
        rules: [
          { required: true, message: '出险时间必填' }
        ],
      },
    },
  },
  {
    params: {
      width: '10%',
      title: '用户姓名',
    },
    config: {
      id: 'usertitle',
      type: 'input',
      api: {
        placeholder: '请输入用户姓名',
      },
      ext: {
        rules: [
          { required: true, message: '用户姓名必填' }
        ],
      },
    },
  },
  {
    params: {
      width: '10%',
      title: '是否退货',
    },
    config: {
      id: 'isNeedReturnGoods',
      type: 'select',
      api: {
        combobox: false,
        placeholder: '请选择是否退货',
      },
      ext: {
        data: [
          { value: '0', label: '是' },
          { value: '1', label: '否' },
        ],
        rules: [
          { required: true, message: '是否退货必填' }
        ],
      },
    },
  },
  {
    params: {
      width: '10%',
      title: '系统倍数',
      total: true,
    },
    config: {
      id: 'multiplier',
      type: 'number',
      api: {
        disabled: false,
        placeholder: '请输入系统倍数',
      },
      ext: {
        rules: [
          { required: true, message: '系统倍数必填' }
        ],
      },
    },
  },
  {
    params: {
      width: '10%',
      title: '损失金额',
      total: true,
    },
    config: {
      id: 'lossAmount',
      type: 'number',
      api: {
        disabled: false,
        placeholder: '请输入损失金额',
      },
      ext: {
        rules: [
          { required: true, message: '损失金额必填' }
        ],
      },
    },
  },
  {
    params: {
      width: '10%',
      title: '订单实付金额(元)',
      total: true,
      render: `return data.lossAmount * data.multiplier`,
    },
    config: {
      id: 'refundReasonText',
      type: 'text',
      api: {
        disabled: false,
        placeholder: '请输入订单实付金额',
      },
      ext: {
        rules: [
          { required: true, message: '订单实付金额必填' }
        ],
      },
    },
  },
  {
    params: {
      width: '20%',
      title: '用户自述',
    },
    config: {
      id: 'description',
      type: 'input',
      api: {
        disabled: false,
        placeholder: '请输入用户自述',
      },
      ext: {
        rules: [
          { required: true, message: '用户自述必填' }
        ],
      },
    },
  }
]
