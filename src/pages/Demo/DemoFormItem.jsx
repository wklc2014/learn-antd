import React, { Component } from 'react';
import { Form, Card } from 'antd';
import moment from 'moment';

import KFormItem from '../../components/KForm/ItemBox.jsx';
import ConfigFormItem from './common/ConfigFormItem.js';

class DemoKFormItem extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      values: {
        user_name_2: moment('2014-12-20'),
        user_name_3: '02',
      },
    }
  }

  onChange = ({ id, value }) => {
    const { values } = this.state;
    this.setState({ values: { ...values, [id]: value } });
  }

  render() {
    const { values } = this.state;

    return (
      <Card title="表单元素自定义">
        <Form>
          <KFormItem {...ConfigFormItem[0]} values={values} onChange={this.onChange} />
          <KFormItem {...ConfigFormItem[1]} values={values} onChange={this.onChange} />
          <KFormItem {...ConfigFormItem[2]} values={values} onChange={this.onChange} />
          <KFormItem {...ConfigFormItem[3]} values={values} onChange={this.onChange} />
        </Form>
      </Card>
    )
  }
}

export default DemoKFormItem;
