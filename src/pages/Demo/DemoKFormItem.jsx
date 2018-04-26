import React, { Component } from 'react';
import { Form } from 'antd';

import KFormItem from '../../components/KForm/KFormItem.jsx';
import kFormItemConfig from './common/kFormItemConfig.js';

class DemoKFormItem extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      values: {},
    }
  }

  onChange = ({ id, value }) => {
    const { values } = this.state;
    this.setState({ values: { ...values, [id]: value } });
  }

  render() {
    const { values } = this.state;

    return (
      <div style={{ padding: 16 }}>
        <Form>
          <KFormItem {...kFormItemConfig[0]} value={values.user_name_1} onChange={this.onChange} />
          <KFormItem {...kFormItemConfig[1]} value={values.user_name_2} onChange={this.onChange} />
          <KFormItem {...kFormItemConfig[2]} value={values['fetchInput-1']} onChange={this.onChange} />
          <KFormItem {...kFormItemConfig[3]} value={values.user_name_3} onChange={this.onChange} />
        </Form>
      </div>
    )
  }
}

export default DemoKFormItem;
