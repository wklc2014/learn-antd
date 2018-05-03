/**
 * KSummaryTable 表格配置示例
 */
[
  {
    // 表格显示元素
    config: {
      // 表格数据 id
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

    // 表格扩展配置
    params: {
      // 列宽度
      width: '10%',

      // 表格头
      title: '出险时间',

      // 单元格是否汇总
      total: true,

      // 表格值经过计算
      // render 是一个函数体
      render: `return data.lossAmount * data.multiplier`,

      // 隐藏元素
      hide: false,
    }
  }
]