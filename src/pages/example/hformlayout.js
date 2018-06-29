import React from 'react';
import { Card } from 'antd';

import HForm from '../components/HForm/HForm.jsx';
import configs from './common/configHFormLayout.js';

function HFormLayout(props) {
  return (
    <Card title="演示表单组栅格化布局">
      <HForm
        configs={configs}
        cols={4}
        onChange={() => {}}
        itemSpace={24}
      />
    </Card>
  )
}

export default HFormLayout;
