import pic_1 from '../../../common/images/pic-1.jpg';
import pic_2 from '../../../common/images/pic-2.jpg';
import pic_3 from '../../../common/images/pic-3.jpg';
import pic_4 from '../../../common/images/pic-4.jpg';
import pic_5 from '../../../common/images/pic-5.jpg';

const statusRender = (text) => {
  const status_map = {
    '0': '已报案',
    '1': '已结案',
    '2': '不予受理',
    '3': '已受理',
    '4': '已销案'
  }
  return status_map[text];
}
export const __detailConfig = [
  {
    type: 'form',
    title: '案件信息',
    params: {
      cols: 3,
      itemSpace: 24,
    },
    configs: [
      {
        label: '报案号',
        config: {
          id: 'claimReportNo',
          type: 'text',
        },
        path: 'data.source.claimReportNo'
      },
      {
        label: '案件状态',
        config: {
          id: 'status',
          type: 'text',
          ext: {
            render: statusRender,
          }
        },
        path: 'data.source.status',
      },
      {
        label: '拒赔原因',
        config: {
          id: 'rejectReason',
          type: 'text',
        },
        path: 'data.source.rejectReason'
      },
      {
        label: '撤销报案原因',
        config: {
          id: 'claimCancelReason',
          type: 'text',
        },
        extMap: {
          colspan: 2,
        },
        path: 'data.source.claimCancelReason'
      },
      {
        label: '业务单号',
        config: {
          id: 'outBizNo',
          type: 'text',
        },
        path: 'data.source.outBizNo'
      },
      {
        label: '保险机构名称',
        config: {
          id: 'comName',
          type: 'text',
        },
        path: 'data.source.comName'
      },
      {
        label: '出险描述',
        config: {
          id: 'accidentDesc',
          type: 'text',
        },
        path: 'data.source.accidentDesc'
      },
      {
        label: '出险地点',
        config: {
          id: 'accidentAddress',
          type: 'text',
        },
        path: 'data.source.accidentAddress'
      },
      {
        label: '索赔金额',
        config: {
          id: 'claimApplyAmount',
          type: 'text',
        },
        path: 'data.source.claimApplyAmount'
      },
      {
        label: '理赔图片',
        config: {
          id: 'claimImage',
          type: 'imageView',
        },
        extMap: {
          colspan: 3,
        },
        path: 'data.source.claimImage',
      }
    ]
  },
  {
    type: 'table',
    title: '报案人信息',
    params: {
      tableApi: {
        pagination: false,
      },
      total: false,
    },
    path: 'data.source.claimerData',
    configs: [
      {
        config: {
          id: 'claimerUid',
          type: 'text'
        },
        extMap: {
          title: '报案人账号',
        }
      },
      {
        config: {
          id: 'claimerCertName',
          type: 'text'
        },
        extMap: {
          title: '报案人证件名称',
        }
      },
      {
        config: {
          id: 'claimerCertNo',
          type: 'text'
        },
        extMap: {
          title: '报案人证件号码',
        }
      },
      {
        config: {
          id: 'claimerPhone',
          type: 'text'
        },
        extMap: {
          title: '报案人电话号码',
        }
      },
    ],
  },
  {
    type: 'table',
    title: '关联保单',
    params: {
      total: true,
      tableApi: {
        pagination: false,
      }
    },
    path: 'data.source.policyList',
    configs: [
      {
        config: {
          id: 'plicyNo',
          type: 'text',
          api: {
            disabled: true,
          }
        },
        extMap: {
          title: '保单号',
        },
      },
      {
        config: {
          id: 'plicyPerson',
          type: 'text',
        },
        extMap: {
          title: '被保人',
        },
      },
      {
        config: {
          id: 'plicyCardNo',
          type: 'text',
        },
        extMap: {
          title: '被保人身份证号码',
        },
      },
      {
        config: {
          id: 'plicyBase',
          type: 'text',
        },
        extMap: {
          title: '赔付基数',
          total: true,
        },
      },
      {
        config: {
          id: 'coefficient',
          type: 'text',
        },
        extMap: {
          title: '赔付系数',
          total: true,
        },
      },
      {
        config: {
          id: 'plicyAmount',
          type: 'text',
        },
        extMap: {
          title: '赔付金额',
          total: true,
          render: `return data.plicyBase * data.coefficient`,
        },
      },
      {
        config: {
          id: 'plicyPhone',
          type: 'text',
        },
        extMap: {
          title: '被保人联系电话',
        },
      },
      {
        config: {
          id: 'plicyAddress',
          type: 'text',
        },
        extMap: {
          title: '被保人联系地址',
        },
      }
    ],
  },
  {
    type: 'form',
    title: '关联赔案',
    params: {
      layout: 'L4',
      cols: 3,
      itemSpace: 24,
    },
    configs: []
  },
  {
    type: 'form',
    title: '案件处理历史',
    params: {
      layout: 'L4',
      cols: 3,
      itemSpace: 24,
    },
    configs: [

    ]
  },
  {
    type: 'form',
    title: '关键时间节点',
    params: {
      layout: 'L4',
      cols: 3,
      itemSpace: 24,
    },
    configs: [

    ]
  },
];

export const __detailDataSource = {
  data: {
    source: {
      claimReportNo: '201804271100300606540500133526',
      status: '0',
      rejectReason: '反骗赔',
      claimCancelReason: '在编写处理字符串的程序或网页时，经常有查找符合某些复杂规则的字符串的需要。正则表达式就是用于描述这些规则的工具。换句话说，正则表达式就是记录文本规则的代码。',
      outBizNo: '1524819493078-8009-30.55.56.232-1220122576',
      comName: '人保财险',
      accidentDesc: '匹配除换行符以外的任意字符',
      accidentAddress: '四川成都',
      claimApplyAmount: '0.01',
      claimImage: [
        { path: pic_1 },
        { path: pic_2 },
        { path: pic_3 },
        { path: pic_4 },
        { path: pic_5 },
      ],
      claimerData: [
        {
          claimerUid: '2088102011188220',
          claimerCertName: '受理测试',
          claimerCertNo: '330106152365412302',
          claimerPhone: '13500000000',
        },
        {
          claimerUid: '2088102011188220',
          claimerCertName: '受理测试',
          claimerCertNo: '330106152365412302',
          claimerPhone: '13500000000',
        },
      ],
      policyList: [
        {
          plicyNo: 'SF78199DF30SDFDF2F',
          plicyPerson: '赵某某',
          plicyCardNo: '5102832938128328272',
          plicyPhone: '13000000000',
          plicyAddress: '四川省成都市',
          coefficient: '22',
          plicyBase: '2',
        },
        {
          plicyNo: 'SF78199DF30SDFDF2F',
          plicyPerson: '赵某某',
          plicyCardNo: '5102832938128328272',
          plicyPhone: '13000000000',
          plicyAddress: '四川省成都市',
          coefficient: '12',
          plicyBase: '2',
        },
        {
          plicyNo: 'SF78199DF30SDFDF2F',
          plicyPerson: '赵某某',
          plicyCardNo: '5102832938128328272',
          plicyPhone: '13000000000',
          plicyAddress: '四川省成都市',
          coefficient: '10',
          plicyBase: '2',
        },
      ]
    }
  },
  success: true,
}