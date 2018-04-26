import React from 'react';

import KForm from '../../components/KForm/KForm.jsx';
import configs from './common/kFormLayoutConfig.js';

function DemoKFormLayout({ form }) {
  return (
    <section style={{ padding: 16 }}>
      <div>
        <KForm
          configs={configs}
          columns={4}
          onChange={() => {}}
        />
      </div>
    </section>
  )
}

export default DemoKFormLayout;
