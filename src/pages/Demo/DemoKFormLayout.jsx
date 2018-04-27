import React from 'react';
import { Card } from 'antd';

import KForm from '../../components/KForm/KForm.jsx';
import configs from './common/kFormLayoutConfig.js';

function DemoKFormLayout({ form }) {
  return (
    <Card title="表单元素自定义">
      <KForm
        configs={configs}
        columns={4}
        onChange={() => {}}
        space={24}
      />
    </Card>
  )
}

export default DemoKFormLayout;
