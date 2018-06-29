import moment from 'moment';

// 用户调查字段配置
export const __configs = [
  {
    label: '用户姓名',
    extMap: {
      extra: '这里是帮助提示信息',
      hasFeedback: true,
    },
    config: [
      {
        id: 'userName_1',
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
        id: 'userName_2',
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
            { required: true, message: '请选择用户姓' },
          ],
          span: 12,
        },
      },
      {
        id: 'userName_3',
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
            { required: true, message: '请输入用户国籍' },
          ],
          span: 12,
          pright: 8,
        },
      },
    ],
  },
  {
    label: '公司地址',
    extMap: {

    },
    config: [
      {
        id: 'address_1',
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
        id: 'address_2',
        type: 'button',
        api: {
          type: 'primary',
        },
        ext: {
          data: [
            { label: '同标的', value: '01' },
            { label: '同三者', value: '02', type: 'default' },
          ],
          span: 12,
        },
      },
    ],
  },
  {
    label: '手机号码',
    config: [
      {
        id: 'contactPhone_1',
        type: 'input',
        api: {
        },
        ext: {
          rules: [
            { required: true, whitespace: true, message: '联系人电话必填' },
            { phone: true, message: '手机号码不正确' },
          ],
          span: 12,
        },
      },
      {
        id: 'contactPhone_2',
        type: 'radio',
        ext: {
          data: [
            { label: '同标的', value: '01' },
            { label: '同三者', value: '02' },
          ],
          span: 12,
        },
      },
    ],
  },
  {
    label: '出险城市',
    config: [
      {
        id: 'accidentCity-1',
        type: 'cascader',
        api: {
        },
        ext: {
          city: 'quanGuo',
          rules: [
            { required: true, message: '出险城市不能为空' },
          ],
          span: 12,
        },
      },
      {
        id: 'accidentCity-2',
        type: 'input',
        api: {
          placeholder: '请输入城市备注',
        },
        ext: {
          span: 12,
        },
      },
    ],
  },
  {
    label: '受损部位',
    config: {
      id: 'payMoney',
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
        ],
      },
    },
    extMap: {
      colspan: 2,
    },
  },
  {
    label: '报案日期',
    config: {
      id: 'reportDate',
      type: 'date',
      api: {
        format: 'YYYY-MM-DD HH:mm:ss',
        renderExtraFooter: () => 'footer',
      },
    },
  },
  {
    label: '运输日期',
    config: {
      id: 'translateDate',
      type: 'range',
      api: {
        showTime: true,
        format: 'YYYY-MM-DD HH:mm:ss',
        ranges: {
          '一周内': [moment().subtract(7, 'days'), moment()],
          '一月内': [moment().subtract(1, 'months'), moment()],
          '三月内': [moment().subtract(3, 'months'), moment()],
        },
      },
    },
  },
  {
    label: '报名年月',
    config: {
      id: 'translateDate1',
      type: 'month',
    },
  },
  {
    label: '就餐时间',
    config: {
      id: 'translateDate2',
      type: 'time',
    },
  },
  {
    label: '车牌号',
    config: {
      id: 'carNumber',
      type: 'input',
      ext: {
        toUpperCase: true,
      },
    },
  },
  {
    label: '手机号码',
    config: [
      {
        id: 'phoneNumber_1',
        type: 'input',
        api: {
        },
        ext: {
          rules: [
            { required: true, message: '手机号码必填' },
            { len: 11, message: '手机号码必须为11位' },
          ],
          span: 12,
        },
      },
      {
        id: 'phoneNumber_2',
        type: 'button',
        api: {
          type: 'primary',
        },
        ext: {
          label: '参数',
          value: 'edit',
          span: 12,
        },
      },
    ],
  },
  {
    label: '赔付金额',
    config: {
      id: 'ploicyMoney',
      type: 'number',
      ext: {
        rules: [
          { required: false, message: '保单金额必填' },
        ],
      },
    },
  },
  {
    label: '性别',
    config: {
      id: 'sex',
      type: 'radio',
      ext: {
        data: [
          { label: '男', value: '01' },
          { label: '女', value: '02' },
          { label: '男女', value: '03' },
          { label: '女男', value: '04' },
        ],
      },
    },
  },
  {
    label: '险种类型',
    config: {
      id: 'accident_type',
      type: 'radioButton',
      ext: {
        data: [
          { label: '车险', value: '01' },
          { label: '非车险', value: '02' },
        ],
      },
    },
  },
  {
    label: '汽车类型',
    config: {
      id: 'carMarkType',
      type: 'select',
      api: {
        // mode: 'multiple',
        allowClear: true,
      },
      ext: {
        rules: [
          { required: true, message: '号牌种类必填' },
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
    label: '出险描述',
    extMap: {
      colspan: 2,
    },
    config: [
      {
        id: 'accidentDescription-1',
        type: 'textarea',
        ext: {
          rules: [
            { required: true, message: '出险描述必填' },
          ],
          span: 16,
        },
      },
      {
        id: 'accidentDescription-2',
        type: 'cascader',
        api: {
          placeholder: '请选择出险城市',
        },
        ext: {
          city: 'quanGuo',
          span: 8,
        },
      },
    ],
  },
  {

    label: '描述模版',
    extMap: {
      colspan: 2,
    },
    config: [
      {
        id: 'accidentCreate-1',
        type: 'textarea',
        ext: {
          span: 18,
        },
      },
      {
        id: 'accidentCreate-2',
        type: 'button',
        ext: {
          label: '生成描述',
          value: '01',
          type: 'primary',
          span: 6,
        },
        api: {

        },
      },
    ],
  },
  {
    label: '文本显示',
    config: {
      id: 'myName',
      type: 'text',
      ext: {
        data: [
          { value: '111', label: '111成都' },
          { value: '222', label: '222成都' },
          { value: '333', label: '333成都' },
          { value: '444', label: '444成都' },
        ],
      },
    },
  },
  {
    label: '打分',
    config: {
      id: 'rate1',
      type: 'rate',
      api: {
        allowHalf: true,
      },
    },
  },
  {
    label: '滑动输入',
    config: {
      id: 'slider1',
      type: 'slider',
      api: {
        marks: {
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        },
      },
    },
  },
  {
    label: '开关',
    config: {
      id: 'switch1',
      type: 'switch',
      api: {
        checkedChildren: 'OK',
        unCheckedChildren: 'NO',
      },
    },
  },
  {
    label: '树形选择',
    config: {
      id: 'treeSelect',
      type: 'treeSelect',
      ext: {
        city: 'quanGuo',
      },
    },
  },
  {
    config: {
      id: 'button-my',
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
      },
    },
    extMap: {
      offset: true,
    },
  },
  {
    label: '输入搜索',
    config: {
      id: 'fetchInput-1',
      type: 'fetchInput',
      api: {
        allowClear: true,
      },
      ext: {
        service: 'fetch',
      },
    },
  },
  {
    label: '图片显示',
    config: {
      id: 'imageView',
      type: 'imageView',
      api: {
        rowApi: {

        },
        colApi: {
          span: 3,
        },
        toolTipApi: {
          placement: 'topRight',
        },
        hPictureViewApi: {
          picWidth: 100,
        },
        modalApi: {

        },
        boxStyle: {
          width: '100%',
          // height: '80px',
          borderRaduis: '5px',
        },
      },
      ext: {

      },
    },
    extMap: {
      colspan: 2,
    },
  },
];

export const __register = [
  {
    label: '表单布局',
    config: {
      id: 'formLayout',
      type: 'radioButton',
      ext: {
        data: [
          { value: 'horizontal', label: 'Horizontal' },
          { value: 'vertical', label: 'Vertical' },
          { value: 'inline', label: 'Inline' },
        ],
      },
    },
  },
  {
    label: '用户姓名',
    config: {
      id: 'user-username',
      type: 'input',
    },
  },
  {
    label: '用户密码',
    config: {
      id: 'user-password',
      type: 'input',
      api: {
        type: 'password',
      },
    },
  },
]
