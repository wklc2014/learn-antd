import React from 'react';
import { Card } from 'antd';

import HForm from '../../components/HForm/HForm.jsx';
import configs from './common/__ConfigFormLayout.js';

function DemoHFormLayout({ form }) {
  return (
    <Card title="表单元素自定义">
      <HForm
        configs={configs}
        cols={4}
        onChange={() => {}}
        itemSpace={24}
      />
    </Card>
  )
}

export default DemoHFormLayout;
