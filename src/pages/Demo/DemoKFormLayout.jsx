import React from 'react';
import { Form } from 'antd';

import KForm from '../../components/KForm/KForm.jsx';
import configs from './common/kFormLayoutConfig.js';

function DemoKFormLayout({ form }) {
  return (
    <section style={{ padding: 16 }}>
      <div>
        <KForm
          configs={configs}
          form={form}
          columns={4}
        />
      </div>
    </section>
  )
}

export default Form.create()(DemoKFormLayout);
