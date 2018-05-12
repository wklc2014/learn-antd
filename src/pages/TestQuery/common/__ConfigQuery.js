export const __QueryFields = [
  {
    label: '策略编号',
    config: {
      id: 'id',
      type: 'input',
    },
  },
  {
    label: '策略备注',
    config: {
      id: 'hitMemo',
      type: 'input',
    },
  },
  {
    label: '业务编号',
    config: {
      id: 'bizId',
      type: 'input',
    },
  },
  {
    label: '业务类型',
    config: {
      id: 'bizType',
      type: 'select',
      ext: {
        data: [
          { value: '01', label: '拒赔' },
          { value: '02', label: '赔付' },
          { value: '03', label: '打标' },
        ],
      },
    },
  },
  {
    label: '业务场景',
    config: {
      id: 'bizScene',
      type: 'input',
    },
  },
  {
    label: '命中时间',
    config: {
      id: 'hitTime',
      type: 'date',
      api: {
        format: 'YYYY-MM-DD HH:mm:ss',
      }
    },
  },
];

export const __QueryResult = [
  { title: '命中时间', dataIndex: 'hitTime', key: 'hitTime' },
  { title: '策略编号', dataIndex: 'id', key: 'id' },
  { title: '策略备注', dataIndex: 'hitMemo', key: 'hitMemo' },
  { title: '业务编号', dataIndex: 'bizId', key: 'bizId' },
  { title: '业务类型', dataIndex: 'bizType', key: 'bizType' },
  { title: '业务场景', dataIndex: 'bizScene', key: 'bizScene' },
]
