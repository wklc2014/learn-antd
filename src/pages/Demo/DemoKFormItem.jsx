import React, { Component } from 'react';
import { Form } from 'antd';
import { actions } from 'mirrorx';

import KFormItem from '../../components/KForm/KFormItem.jsx';
import kFormItemConfig from './common/kFormItemConfig.js';

class DemoKFormItem extends Component {

  static defaultProps = {

  }

  onChange = ({ id, value }) => {
    if (id === 'user_name_3') {
      actions._ajax.getUser();
    }
  }

  render() {
    const { form } = this.props;



    return (
      <div style={{ padding: 16 }}>
        <Form>
          <KFormItem {...kFormItemConfig[0]} />
          <KFormItem {...kFormItemConfig[1]} />
          <KFormItem {...kFormItemConfig[2]} />
        </Form>
      </div>
    )
  }
}

const Wraper = Form.create()(DemoKFormItem);

export default Wraper;
