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
      { path: '/demo/form', label: 'Form' },
      { path: '/demo/formLayout', label: 'Form Layout' },
      { path: '/demo/formItem', label: 'FormItem' },
      { path: '/demo/summaryTable', label: 'SummaryTable' },
      { path: '/demo/picture', label: 'Picture' },
      { path: '/demo/detail', label: 'Detail' },
    ],
  },
  {
    isSidebar: true,
    icon: 'user',
    path: '/ksearch',
    label: '查询组件',
  }
]


