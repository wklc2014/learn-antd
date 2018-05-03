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
    typeConfig: {
      // layout: 'L4',
      cols: 3,
      itemSpace: 24,
    },
    dataConfig: [
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
    ]
  },
  {
    type: 'table',
    title: '报案人信息',
    typeConfig: {
      tableApi: {
        pagination: false,
      },
      total: false,
    },
    path: 'data.source.claimerData',
    dataConfig: [
      {
        config: {
          id: 'claimerUid',
          type: 'text'
        },
        params: {
          title: '报案人账号',
        }
      },
      {
        config: {
          id: 'claimerCertName',
          type: 'text'
        },
        params: {
          title: '报案人证件名称',
        }
      },
      {
        config: {
          id: 'claimerCertNo',
          type: 'text'
        },
        params: {
          title: '报案人证件号码',
        }
      },
      {
        config: {
          id: 'claimerPhone',
          type: 'text'
        },
        params: {
          title: '报案人电话号码',
        }
      },
    ],
  },
  {
    type: 'table',
    title: '关联保单',
    typeConfig: {
      total: true,
      tableApi: {
        pagination: false,
      }
    },
    dataConfig: [
      {
        config: {
          id: 'plicyNo',
          type: 'text',
        },
        params: {
          title: '保单号',
        },
      },
      {
        config: {
          id: 'plicyPerson',
          type: 'text',
        },
        params: {
          title: '被保人',
        },
      },
      {
        config: {
          id: 'plicyCardNo',
          type: 'text',
        },
        params: {
          title: '被保人身份证号码',
        },
      },
      {
        config: {
          id: 'plicyAmount',
          type: 'text',
        },
        params: {
          title: '赔付金额',
          total: true,
        },
      },
      {
        config: {
          id: 'plicyPhone',
          type: 'text',
        },
        params: {
          title: '被保人联系电话',
        },
      },
      {
        config: {
          id: 'plicyAddress',
          type: 'text',
        },
        params: {
          title: '被保人联系地址',
        },
      }
    ],
    path: 'data.source.policyList',
  },
  {
    type: 'form',
    title: '关联赔案',
    typeConfig: {
      layout: 'L4',
      cols: 3,
      itemSpace: 24,
    },
    dataConfig: []
  },
  {
    type: 'form',
    title: '案件处理历史',
    typeConfig: {
      layout: 'L4',
      cols: 3,
      itemSpace: 24,
    },
    dataConfig: [

    ]
  },
  {
    type: 'form',
    title: '关键时间节点',
    typeConfig: {
      layout: 'L4',
      cols: 3,
      itemSpace: 24,
    },
    dataConfig: [

    ]
  },
];

export const __detailDataSource = {
  data: {
    source: {
      claimReportNo: '201804271100300606540500133526',
      status: '0',
      rejectReason: '',
      claimCancelReason: '',
      outBizNo: '1524819493078-8009-30.55.56.232-1220122576',
      comName: '人保财险',
      accidentDesc: '',
      accidentAddress: '',
      claimApplyAmount: '0.01',
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
          plicyAmount: '22',
        },
        {
          plicyNo: 'SF78199DF30SDFDF2F',
          plicyPerson: '赵某某',
          plicyCardNo: '5102832938128328272',
          plicyPhone: '13000000000',
          plicyAmount: '12',
          plicyAddress: '四川省成都市',
        },
        {
          plicyNo: 'SF78199DF30SDFDF2F',
          plicyPerson: '赵某某',
          plicyCardNo: '5102832938128328272',
          plicyPhone: '13000000000',
          plicyAmount: '10',
          plicyAddress: '四川省成都市',
        },
      ]
    }
  },
  success: true,
}
