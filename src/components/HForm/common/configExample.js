/**
 * HForm 表单配置示例
 */
[
  {
    // 表单元素 id
    id: 'user_name',

    // 表单元素 label
    label: '用户姓名',

    // 表单元素类型
    type: 'input',

    // 表单元素 api
    api: {

    },

    // 表单元素扩展配置
    ext: {
      // 输入类型时, 设置大写
      toUpperCase: true,

      // 输入类型时, 设置小写
      toLowerCase: true,

      // 内置城市选项数据列表
      city: 'quanGuo',

      // 表单验证
      rules: [],

      // 表单元素布局
      layout: 'L0',

      // 表单元素间距
      space: 16,

      // 表单元素横跨列数
      colspan: 1,

      /**
       * 表单元素布局是否 offset
       * 如没有 label 元素的表单
       * @type {Boolean}
       */
      offset: true,

      // 表单元素是否隐藏
      hide: false,

      // 表单元素 FormItem 额外的提示信息
      extra: '',
    },
  }
]