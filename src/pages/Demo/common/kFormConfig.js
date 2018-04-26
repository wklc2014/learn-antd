import React from 'react';
import moment from 'moment';
import { Button } from 'antd';

// 用户调查字段配置
export const UserSurvery = [
  {
    // 排序字段
    order: 1,

    /**
     * 主表单元素配置
     * @type {Object}
     */
    config: {
      id: 'userName',
      type: 'input',
      // 表单元素属性
      params: {
        placeholder: '单行文本输入框',
      },
      // 扩展字段
      extMap: {
        toLowerCase: true,
        rules: [
          { required: true, message: '用户姓名必填' },
        ],
      },
    },

    /**
     * FormItem 属性
     * @type {Object}
     */
    formItemParams: {
      label: 'input',
      extra: '这里是帮助提示信息',
      // hasFeedback: true,
    },

    /**
     * 子表单元素配置
     * @type {Array}
     */
    subConfig: [
      {
        id: 'userName_1',
        type: 'select',
        params: {
          disabled: false,
          placeholder: '请选择城市'
        },
        extMap: {
          data: [
            { value: 'chengdu', label: '成都' },
            { value: 'shanghai', label: '上海' },
          ]
        },
      }
    ]
  },
  {
    order: 2,
    config: {
      id: 'address',
      type: 'input',
      params: {},
      extMap: {
        childSpan: 10,
        rules: [
          { required: true, message: '用户姓名必填' },
          { max: 4, message: '用户姓名最多4位' },
          { min: 2, message: '用户姓名至少2位' },
        ],
      },
    },
    formItemParams: {
      label: 'input',
    },
    subConfig: [
      {
        id: 'button-1',
        type: 'button',
        params: {
          type: 'primary',
        },
        extMap: {
          label: '同标的',
          value: '01',
        }
      },
      {
        id: 'button-2',
        type: 'button',
        params: {
          type: 'primary',
        },
        extMap: {
          label: '同三者',
          value: '02',
        }
      },
    ]
  },
  {
    order: 3,
    config: {
      type: 'input',
      id: 'contactPhone',
      options: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '联系人电话必填'
          }
        ],
      },
    },
    formItemParams: {
      label: 'input',
    },
    subConfig: [
      {
        id: 'radio-1',
        type: 'radio',
        extMap: {
          data: [
            { label: '同标的', value: '01' },
            { label: '同三者', value: '02' }
          ]
        }
      },
    ]
  },
  {
    order: 4,
    config: {
      id: 'accidentCity',
      type: 'cascader',
      params: {
        placeholder: '这是一个三级联动选择',
      },
      options: {
        rules: [
          { required: true, message: '出险城市不能为空' }
        ]
      },
      extMap: {
        city: 'quanGuo',
      },
    },
    formItemParams: {
      label: 'cascader',
    },
    subConfig: [
      {
        id: 'accidentCity-1',
        type: 'input',
        params: {
          placeholder: '请输入姓名'
        }
      }
    ]
  },
  {
    order: 5,
    config: {
      id: 'payMoney',
      type: 'checkbox',
      params: {
        options: [
          { label: '无损', value: '01' },
          { label: '正前方', value: '02' },
          { label: '前方左侧', value: '03' },
          { label: '前方右侧', value: '04' },
          { label: '车身左侧', value: '05' },
          { label: '车身右侧', value: '06' },
        ],
      },
      extMap: {
        colSpan: 2,
      },
    },
    formItemParams: {
      label: 'checkbox',
    },
  },
  {
    order: 6,
    config: {
      id: 'reportDate',
      type: 'date',
      params: {
        format: 'YYYY-MM-DD HH:mm:ss',
        renderExtraFooter: () => 'footer',
      }
    },
    formItemParams: {
      label: 'date',
    },
  },
  {
    order: 7,
    config: {
      id: 'translateDate',
      type: 'range',
      params: {
        placeholder: '运输日期',
        showTime: true,
        format: 'YYYY-MM-DD HH:mm:ss',
        ranges: {
          '一周内': [moment().subtract(7, 'days'), moment()],
          '一月内': [moment().subtract(1, 'months'), moment()],
          '三月内': [moment().subtract(3, 'months'), moment()],
        }
      },
    },
    formItemParams:{
      label: 'date-range',
    },
  },
  {
    order: 8,
    config: {
      id: 'translateDate1',
      type: 'month',
      params: {
        placeholder: '请选择月份',
      },
    },
    formItemParams: {
      label: 'month',
    },
  },
  {
    order: 9,
    config: {
      id: 'translateDate2',
      type: 'time',
      params: {
        placeholder: '请选择时间',
      },
    },
    formItemParams: {
      label: 'time',
    },
  },
  {
    order: 10,
    config: {
      id: 'carNumber',
      type: 'input',
      extMap: {
        toUpperCase: true,
      }
    },
    formItemParams: {
      label: 'toUpperCase',
    },
  },
  {
    order: 11,
    config: {
      id: 'phoneNumber',
      type: 'input',
      options: {
        rules: [{
          required: true,
          message: '手机号码必填'
        }, {
          len: 11,
          message: '手机号码必须为11位'
        }],
      },
    },
    formItemParams: {
      label: 'phone',
    },
    subConfig: [
      {
        id: 'phoneNumber-button',
        type: 'button',
        params: {
          type: 'primary'
        },
        extMap: {
          label: '参数',
          value: 'edit',
        },
      }
    ]
  },
  {
    order: 12,
    config: {
      id: 'ploicyMoney',
      type: 'number',
      options: {
        rules: [{
          required: false,
          message: '保单金额必填'
        }],
      }
    },
    formItemParams: {
      label: 'number',
    },
  },
  {
    order: 13,
    config: {
      id: 'sex',
      type: 'radio',
      extMap: {
        data: [
          { label: '男', value: '01' },
          { label: '女', value: '02', selected: true },
          { label: '男女', value: '03' },
          { label: '女男', value: '04' },
        ]
      }
    },
    formItemParams: {
      label: 'radio',
    },
  },
  {
    order: 14,
    config: {
      id: 'type',
      type: 'radioButton',
      extMap: {
        data: [
          { label: '车险', value: '01' },
          { label: '非车险', value: '02' },
        ]
      },
    },
    formItemParams: {
      label: 'radio',
    },
  },
  {
    order: 15,
    config: {
      id: 'carMarkType',
      type: 'select',
      params: {
        mode: 'multiple',
      },
      options: {
        rules: [{
          required: true,
          message: '号牌种类必填'
        }],
      },
      extMap: {
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
    formItemParams: {
      label: 'select',
    },
  },
  {
    order: 17,
    config: {
      id: 'accidentDescription',
      type: 'textarea',
      extMap: {
        colSpan: 2,
        childSpan: 18,
      },
      options: {
        rules: [{
          required: true,
          message: '出险描述必填'
        }],
      }
    },
    formItemParams: {
      label: 'textarea',
      extra: '最多输入500个字',
    },
    subConfig: [
      {
        id: 'cascader-button-1',
        type: 'cascader',
        params: {
          type: 'primary'
        },
        extMap: {
          city: 'quanGuo',
          render: (value) => {
            return <Button type="primary">编辑</Button>;
          }
        },
      },
      {
        id: 'cascader-button-2',
        type: 'cascader',
        params: {
          type: 'primary'
        },
        extMap: {
          city: 'quanGuo',
          render: (value) => {
            return <Button type="primary">参数</Button>;
          }
        },
      }
    ]
  },
  {
    order: 18,
    config: {
      id: 'accidentCreate',
      type: 'textarea',
      extMap: {
        colSpan: 2,
        childSpan: 18,
      }
    },
    formItemParams: {
      label: 'textarea',
      extra: '最多输入500个字',
    },
    subConfig: [
      {
        id: 'accidentCreate-button',
        type: 'button',
        extMap: {
          label: '生成描述',
          value: '01',
        },
        params: {
          type: 'primary'
        }
      },
    ],
  },
  {
    order: 20,
    config: {
      id: 'myName',
      type: 'text',
      extMap: {
        data: [
          { value: '111', label: '111成都' },
          { value: '222', label: '222成都' },
          { value: '333', label: '333成都' },
          { value: '444', label: '444成都' },
        ]
      }
    },
    formItemParams: {
      label: 'text',
    },
  },
  {
    order: 21,
    config: {
      id: 'rate1',
      type: 'rate',
      params: {
        allowHalf: true,
      },
    },
    formItemParams: {
      label: 'rate',
    },
  },
  {
    order: 22,
    config: {
      id: 'slider1',
      type: 'slider',
      params: {
        marks: {
          0: 'A',
          20: 'AA',
          40: 'AAA',
          60: 'AAAA',
          80: 'AAAAA',
          100: 'AAAAAA',
        }
      }
    },
    formItemParams: {
      label: 'slider',
    },
  },
  {
    order: 23,
    config: {
      id: 'switch1',
      type: 'switch',
      params: {
        checkedChildren: 'OK',
        unCheckedChildren: 'NO'
      },
    },
    formItemParams: {
      label: 'switch',
    },
  },
  {
    config: {
      id: 'treeSelect',
      type: 'treeSelect',
      params: {
      },
      extMap: {
        city: 'quanGuo'
      }
    },
    formItemParams: {
      label: 'treeSelect',
    },
  },
  {
    config: {
      id: 'button-my',
      type: 'button',
      params: {
        type: 'primary',
      },
      extMap: {
        data: [
          { label: '选择', value: '001' },
          { label: '北京', value: '002', type: 'default' },
          { label: '西安', value: '003', type: 'dashed' },
          { label: '绵阳', value: '004', type: 'danger' },
        ],
        offset: true,
      }
    }
  },
  {
    config: {
      id: 'fetchInput-1',
      type: 'fetchInput',
      params: {
        allowClear: true,
      },
      extMap: {
        url: 'fetch',
      }
    },
    formItemParams: {
      label: 'fetchInput',
    },
  },
];

export const UserRegister = [
  {
    config: {
      id: 'formLayout',
      type: 'radioButton',
      extMap: {
        data: [
          { value: 'horizontal', label: 'Horizontal' },
          { value: 'vertical', label: 'Vertical' },
          { value: 'inline', label: 'Inline' },
        ]
      }
    },
    formItemParams: {
      label: 'Username',
    },
  },
  {
    config: {
      id: 'user-username',
      type: 'input',
    },
    formItemParams: {
      label: 'Username',
    },
  },
  {
    config: {
      id: 'user-password',
      type: 'input',
      params: {
        type: 'password',
      }
    },
    formItemParams: {
      label: 'Password',
    },
  },
]
