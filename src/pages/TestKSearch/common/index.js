export const search_query = [
  {
    config: {
      id: 'id',
      type: 'input',
    },
    formItemParams: {
      label: '策略编号',
    },
  },
  {
    config: {
      id: 'hitMemo',
      type: 'input',
    },
    formItemParams: {
      label: '策略备注',
    },
  },
  {
    config: {
      id: 'bizId',
      type: 'input',
    },
    formItemParams: {
      label: '业务编号',
    },
  },
  {
    config: {
      id: 'bizType',
      type: 'select',
      extMap: {
        data: [
          { value: '01', label: '拒赔' },
          { value: '02', label: '赔付' },
          { value: '03', label: '打标' },
        ],
      },
    },
    formItemParams: {
      label: '业务类型',
    },
  },
  {
    config: {
      id: 'bizScene',
      type: 'input',
    },
    formItemParams: {
      label: '业务场景',
    },
  },
  {
    config: {
      id: 'hitTime',
      type: 'date',
      params: {
        format: 'YYYY-MM-DD HH:mm:ss',
      }
    },
    formItemParams: {
      label: '命中时间',
    },
  },
];

export const search_result = [
  {
    column: {
      title: '命中时间',
    },
    config: {
      id: 'hitTime',
      type: 'text',
    }
  },
  {
    column: {
      title: '策略编号',
    },
    config: {
      id: 'id',
      type: 'text',
    }
  },
  {
    config: {
      id: 'hitMemo',
      type: 'text',
    },
    column: {
      title: '策略备注',
    },
  },
  {
    config: {
      id: 'bizId',
      type: 'text',
    },
    column: {
      title: '业务编号',
    },
  },
  {
    config: {
      id: 'bizType',
      type: 'text',
      extMap: {
        data: [
          { value: '01', label: '拒赔' },
          { value: '02', label: '赔付' },
          { value: '03', label: '打标' },
        ],
      },
    },
    column: {
      title: '业务类型',
    },
  },
  {
    config: {
      id: 'bizScene',
      type: 'text',
    },
    column: {
      title: '业务场景',
    },
  },
]
