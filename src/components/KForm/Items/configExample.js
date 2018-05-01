/**
 * KForm 表单配置示例
 * 1. 数组中每个元素是一个对象
 * 2. 每个对象是单个表单元素配置
 */

/**
 * 单个表单元素配置示例
 */
{
  // 对表单元素排序配置
  order: 1,

  // 表单元素 id
  id: 'user_name',

  // 表单元素 label
  label: '用户姓名',

  // 表单元素内容配置 - 数组
  config: [
    {
      // 表单元素输入类型
      type: 'input',

      // 表单元素输入 api
      api: {

      },
      // 表单元素输入扩展配置
      ext: {
        // 表单元素输入在删格布局中所占比例
        span: 12,
        // 输入类型时, 设置大写
        toUpperCase: true,
        // 输入类型时, 设置小
        toLowerCase: true,
        // cascader 和 treeSelect 类型时, 内置的全国城市数据列表
        city: 'quanGuo',
        // 表单元素输入验证
        rules: [],
      },
    },
    {
      id: 'user_first_name',
      type: 'input',
      api: {

      },
      ext: {

      }
    },
  ],

  // 表单元素扩展配置
  params: {
    // 表单元素布局
    layout: 'L0',

    // 表单元素间隔
    space: 16,

    // 表单元素横跨列数
    colspan: 1,

    // 表单元素是否 offset
    // 表单元素类型没有 label 时,
    // 如果 button, 需要设置 offset 属性
    offset: true,

    // 表单元素是否隐藏
    hide: false,
  }
}
