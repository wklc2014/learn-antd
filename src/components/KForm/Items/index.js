/**
 * KForm 表单配置示例
 */

const exampleForKForm = [
  {
    // 对表单元素位置配置
    order: 1,
    id: 'user_name',
    label: '用户姓名',
    config: {
      type: 'input',
      params: {

      },
      ext: {

      }
    },
    sub_config: [
      {
        id: 'user_first_name',
        type: 'input',
        params: {

        },
        ext: {

        }
      },
      {
        id: 'user_last_name',
        type: 'input',
        params: {

        },
        ext: {

        }
      },
    ]
  }
]