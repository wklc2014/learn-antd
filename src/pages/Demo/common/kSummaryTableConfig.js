export default [
  {
    tableParams: {
      width: '10%',
      title: '出险时间',
    },
    config: {
      id: 'accident_time',
      type: 'date',
      params: {
        disabled: false,
        placeholder: '请选择出险时间',
      },
      extMap: {
        rules: [
          { required: true, message: '出险时间必填' }
        ],
      },
    },
  },
  {
    tableParams: {
      width: '10%',
      title: '用户姓名',
    },
    config: {
      id: 'usertitle',
      type: 'input',
      options: {
        rules: [
          { required: true, message: '用户姓名必填' }
        ],
      },
      params: {
        placeholder: '请输入用户姓名',
      },
    },
  },
  {
    tableParams: {
      width: '10%',
      title: '是否退货',
    },
    config: {
      id: 'isNeedReturnGoods',
      type: 'select',
      params: {
        combobox: false,
        placeholder: '请选择是否退货',
      },
      options: {
        rules: [
          { required: true, message: '是否退货必填' }
        ],
      },
      extMap: {
        data: [
          { value: '0', label: '是' },
          { value: '1', label: '否' },
        ],
      },
    },
  },
  {
    tableParams: {
      width: '10%',
      title: '系统倍数',
      total: true,
    },
    config: {
      id: 'multiplier',
      type: 'number',
      params: {
        disabled: false,
        placeholder: '请输入系统倍数',
      },
      options: {
        rules: [
          { required: true, message: '系统倍数必填' }
        ],
      },
    },
  },
  {
    tableParams: {
      width: '10%',
      title: '损失金额',
      total: true,
    },
    config: {
      id: 'lossAmount',
      type: 'number',
      params: {
        disabled: false,
        placeholder: '请输入损失金额',
      },
      options: {
        rules: [
          { required: true, message: '损失金额必填' }
        ],
      },
    },
  },
  {
    tableParams: {
      width: '10%',
      title: '订单实付金额(元)',
      total: true,
      render: `return data.lossAmount * data.multiplier`,
    },
    config: {
      type: 'text',
      id: 'refundReasonText',
      options: {
        rules: [
          { required: true, message: '订单实付金额必填' }
        ],
      },
      params: {
        disabled: false,
        placeholder: '请输入订单实付金额',
      },
    },
  },
  {
    tableParams: {
      width: '20%',
      title: '用户自述',
    },
    config: {
      type: 'input',
      id: 'description',
      params: {
        disabled: false,
        placeholder: '请输入用户自述',
      },
      options: {
        rules: [
          { required: true, message: '用户自述必填' }
        ],
      },
    },
  }
]
