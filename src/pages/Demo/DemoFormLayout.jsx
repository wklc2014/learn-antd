import React from 'react';
import { Card } from 'antd';

import KForm from '../../components/KForm/Index.jsx';
import configs from './common/ConfigFormLayout.js';

function DemoFormLayout({ form }) {
  return (
    <Card title="表单元素自定义">
      <KForm
        configs={configs}
        cols={4}
        itemSpace={24}
        onChange={() => {}}
      />
    </Card>
  )
}

export default DemoFormLayout;
