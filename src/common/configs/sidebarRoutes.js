/**
 * 侧边导航配置
 */
import React from 'react';
import { Icon } from 'antd';

export default [
  {
    isSidebar: true,
    icon: 'user',
    title: <div><Icon type="user" />基础组件库</div>,
    subMenus: [
      { path: '/form', label: 'KForm' },
      { path: '/formLayout', label: 'KForm Layout' },
      { path: '/formItem', label: 'KFormItem' },
      { path: '/summaryTable', label: 'KSummaryTable' },
      { path: '/picture', label: 'KPicture' },
    ],
  },
  {
    isSidebar: true,
    icon: 'user',
    path: '/ksearch',
    label: '查询组件',
  }
]


