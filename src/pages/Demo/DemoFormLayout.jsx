import React from 'react';
import { Card } from 'antd';

import MForm from '../../components/MForm/Index.jsx';
import configs from './common/ConfigFormLayout.js';

function DemoFormLayout({ form }) {
  return (
    <Card title="表单元素自定义">
      <MForm
        configs={configs}
        cols={4}
        onChange={() => {}}
        itemSpace={24}
      />
    </Card>
  )
}

export default DemoFormLayout;
