// import React from 'react';
import moment from 'moment';
// import { Button } from 'antd';

// 用户调查字段配置
export const UserSurvery = [
  {
    id: 'userName',
    label: '用户姓名',
    params: {
      extra: '这里是帮助提示信息',
      hasFeedback: true,
    },
    config: [
      {
        type: 'input',
        api: {
          placeholder: '请输入用户名',
        },
        ext: {
          toLowerCase: true,
          rules: [
            { required: true, message: '用户姓名必填' },
          ],
          span: 12,
        },
      },
      {
        type: 'select',
        api: {
          placeholder: '请选择用户姓',
          disabled: false,
          allowClear: true,
        },
        ext: {
          data: [
            { value: 'zhang', label: '张' },
            { value: 'wang', label: '王' },
          ],
          rules: [
            { required: true, message: '请选择用户姓' }
          ],
          span: 12,
        },
      },
      {
        type: 'input',
        api: {
          placeholder: '请输入用户国籍',
          disabled: false,
        },
        ext: {
          data: [
            { value: 'zh', label: '中国' },
            { value: 'en', label: '英国' },
          ],
          rules: [
            { required: true, message: '请输入用户国籍' }
          ],
          span: 12,
        },
      },
    ]
  },
  {
    order: 2,
    id: 'address',
    label: '公司地址',
    params: {

    },
    config: [
      {
        type: 'input',
        api: {
        },
        ext: {
          rules: [
            { required: true, message: '用户姓名必填' },
            { max: 4, message: '用户姓名最多4位' },
            { min: 2, message: '用户姓名至少2位' },
          ],
          span: 12,
        },
      },
      {
        type: 'button',
        api: {
          type: 'primary',
        },
        ext: {
          data: [
            { label: '同标的', value: '01', },
            { label: '同三者', value: '02', type: 'default' }
          ],
          span: 12,
        }
      },
    ]
  },
  {
    order: 3,
    id: 'contactPhone',
    label: '联系电话',
    config: [
      {
        type: 'input',
        api: {
        },
        ext: {
          rules: [
            { required: true, whitespace: true, message: '联系人电话必填' },
          ],
          span: 12,
        },
      },
      {
        type: 'radio',
        ext: {
          data: [
            { label: '同标的', value: '01' },
            { label: '同三者', value: '02' }
          ],
          span: 12,
        }
      },
    ]
  },
  {
    order: 4,
    id: 'accidentCity',
    label: '出险城市',
    config: [
      {
        type: 'cascader',
        api: {
        },
        ext: {
          city: 'quanGuo',
          rules: [
            { required: true, message: '出险城市不能为空' }
          ],
          span: 12,
        },
      },
      {
        type: 'input',
        api: {
          placeholder: '请输入城市备注',
        },
        ext: {
          span: 12,
        }
      }
    ]
  },
  {
    order: 5,
    id: 'payMoney',
    label: '受损部位',
    config: {
      type: 'checkbox',
      api: {
        options: [
          { label: '无损', value: '01' },
          { label: '正前方', value: '02' },
          { label: '前方左侧', value: '03' },
          { label: '前方右侧', value: '04' },
          { label: '车身左侧', value: '05' },
          { label: '车身右侧', value: '06' },
          { label: '正后方', value: '07' },
          { label: '车身顶部', value: '08' },
          { label: '汽车排气管', value: '09' },
          { label: '雨刮器', value: '10' },
          { label: '左后视镜', value: '11' },
          { label: '右后视镜', value: '12' },
          { label: '后备箱', value: '13' },
        ],
      },
      ext: {
        rules: [
          { required: true, message: '受损部位必选' },
        ]
      }
    },
    params: {
      colspan: 2,
    },
  },
  {
    order: 6,
    id: 'reportDate',
    label: '报案日期',
    config: {
      type: 'date',
      api: {
        format: 'YYYY-MM-DD HH:mm:ss',
        renderExtraFooter: () => 'footer',
      }
    },
  },
  {
    order: 7,
    id: 'translateDate',
    label: '运输日期',
    config: {
      type: 'range',
      api: {
        showTime: true,
        format: 'YYYY-MM-DD HH:mm:ss',
        ranges: {
          '一周内': [moment().subtract(7, 'days'), moment()],
          '一月内': [moment().subtract(1, 'months'), moment()],
          '三月内': [moment().subtract(3, 'months'), moment()],
        }
      },
    },
  },
  {
    order: 8,
    id: 'translateDate1',
    label: '报名年月',
    config: {
      type: 'month',
    },
  },
  {
    order: 9,
    id: 'translateDate2',
    label: '就餐时间',
    config: {
      type: 'time',
    },
  },
  {
    order: 10,
    id: 'carNumber',
    label: '车牌号',
    config: {
      type: 'input',
      ext: {
        toUpperCase: true,
      }
    },
  },
  {
    order: 11,
    id: 'phoneNumber',
    label: '手机号码',
    config: [
      {
        type: 'input',
        api: {
        },
        ext: {
          rules: [
            { required: true, message: '手机号码必填' },
            { len: 11, message: '手机号码必须为11位' }
          ],
          span: 12,
        },
      },
      {
        type: 'button',
        api: {
          type: 'primary'
        },
        ext: {
          label: '参数',
          value: 'edit',
          span: 12,
        },
      }
    ]
  },
  {
    order: 12,
    id: 'ploicyMoney',
    label: '赔付金额',
    config: {
      type: 'number',
      ext: {
        rules: [
          { required: false, message: '保单金额必填' }
        ],
      }
    },
  },
  {
    order: 13,
    id: 'sex',
    label: '性别',
    config: {
      type: 'radio',
      ext: {
        data: [
          { label: '男', value: '01' },
          { label: '女', value: '02' },
          { label: '男女', value: '03' },
          { label: '女男', value: '04' },
        ]
      }
    },
  },
  {
    order: 14,
    id: 'accident_type',
    label: '险种类型',
    config: {
      type: 'radioButton',
      ext: {
        data: [
          { label: '车险', value: '01' },
          { label: '非车险', value: '02' },
        ]
      },
    },
  },
  {
    order: 15,
    id: 'carMarkType',
    label: '汽车类型',
    config: {
      type: 'select',
      api: {
        // mode: 'multiple',
        allowClear: true,
      },
      ext: {
        rules: [
          { required: true, message: '号牌种类必填' }
        ],
        data: [
          { value: '01', label: '大型汽车号牌' },
          { value: '02', label: '小型汽车号牌' },
          { value: '03', label: '使馆汽车号牌' },
          { value: '04', label: '领馆汽车号牌' },
          { value: '05', label: '境外汽车号牌' },
          { value: '06', label: '外籍汽车号牌' },
          { value: '07', label: '两、三轮摩托车号牌' },
          { value: '08', label: '轻便摩托车号牌' },
          { value: '09', label: '使馆摩托车号牌' },
        ],
      },
    },
  },
  {
    order: 17,
    id: 'accidentDescription',
    label: '出险描述',
    params: {
      colspan: 2,
    },
    config: [
      {
        type: 'textarea',
        ext: {
          rules: [
            { required: true, message: '出险描述必填' }
          ],
          span: 16,
        }
      },
      {
        type: 'cascader',
        api: {
          placeholder: '请选择出险城市'
        },
        ext: {
          city: 'quanGuo',
          span: 8,
        },
      }
    ]
  },
  {
    order: 18,
    id: 'accidentCreate',
    label: '描述模版',
    params: {
      colspan: 2,
    },
    config: [
      {
        type: 'textarea',
        ext: {
          span: 18,
        }
      },
      {
        type: 'button',
        ext: {
          label: '生成描述',
          value: '01',
          type: 'primary',
          span: 6,
        },
        api: {

        }
      },
    ],
  },
  {
    order: 20,
    id: 'myName',
    label: '文本显示',
    config: {
      type: 'text',
      ext: {
        data: [
          { value: '111', label: '111成都' },
          { value: '222', label: '222成都' },
          { value: '333', label: '333成都' },
          { value: '444', label: '444成都' },
        ]
      }
    },
  },
  {
    order: 21,
    id: 'rate1',
    label: '打分',
    config: {
      type: 'rate',
      api: {
        allowHalf: true,
      },
    },
  },
  {
    order: 22,
    id: 'slider1',
    label: '滑动输入',
    config: {
      type: 'slider',
      api: {
        marks: {
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        }
      }
    },
  },
  {
    order: 23,
    id: 'switch1',
    label: '开关',
    config: {
      type: 'switch',
      api: {
        checkedChildren: 'OK',
        unCheckedChildren: 'NO'
      },
    },
  },
  {
    id: 'treeSelect',
    label: '树形选择',
    config: {
      type: 'treeSelect',
      ext: {
        city: 'quanGuo'
      }
    },
  },
  {
    id: 'button-my',
    config: {
      type: 'button',
      api: {
        type: 'primary',
      },
      ext: {
        data: [
          { label: '选择', value: '001' },
          { label: '北京', value: '002', type: 'default' },
          { label: '西安', value: '003', type: 'dashed' },
          { label: '绵阳', value: '004', type: 'danger' },
        ],
      }
    },
    params: {
      offset: true,
    }
  },
  {
    id: 'fetchInput-1',
    label: '输入搜索',
    config: {
      type: 'fetchInput',
      api: {
        allowClear: true,
      },
      ext: {
        url: 'fetch',
      }
    },
  },
];

export const UserRegister = [
  {
    id: 'formLayout',
    label: '表单布局',
    config: {
      type: 'radioButton',
      ext: {
        data: [
          { value: 'horizontal', label: 'Horizontal' },
          { value: 'vertical', label: 'Vertical' },
          { value: 'inline', label: 'Inline' },
        ]
      }
    },
  },
  {
    id: 'user-username',
    label: '用户姓名',
    config: {
      type: 'input',
    },
  },
  {
    id: 'user-password',
    label: '用户密码',
    config: {
      type: 'input',
      api: {
        type: 'password',
      }
    },
  },
]
