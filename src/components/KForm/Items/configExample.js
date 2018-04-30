/**
 * KForm 表单配置示例
 */

// 单个表单元素配置：
// id, label, config, sub_config, params, order,
// config 配置:
// type, api, ext,
// sub_config 配置：
// 多个 config 配置
// params 配置:
// FormItem 一些属性
const exampleForKForm = [
  {
    // 对表单元素位置配置
    order: 1,

    // 表单元素 id
    id: 'user_name',

    // 表单元素 label
    label: '用户姓名',

    // 表单元素内容配置
    config: {
      // 表单元素类型
      type: 'input',
      // 表单元素 api
      api: {

      },
      // 表单元素扩展配置
      ext: {
        // 有附加表单元素配置时，主体表单元素的布局
        span: 12,
        // 有附加表单元素配置时，主体表单元素和附加表单元素间隔距离
        gutter: 8,
      }
    },

    // 附加表单元素内容配置
    sub_config: [
      {
        id: 'user_first_name',
        type: 'input',
        api: {

        },
        ext: {

        }
      },
      {
        id: 'user_last_name',
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
      col_span: 1,

      // 表单元素是否 offset
      offset: true,

      // 是否隐藏
      hide: false,
    }
  },
  {
    order: 2,
    id: 'sex',
    label: '性别',
    config: {
      type: 'input',
      api: {

      },
      ext: {

      }
    },
    params: {
      layout: {},
      space: 16,
      col: 1,
    }
  }
]