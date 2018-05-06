import React, { Component } from 'react';
import { Form, Card } from 'antd';
import moment from 'moment';

import HFormItem from '../../components/HForm/HFormItem.jsx';
import ConfigHFormItem from './common/__ConfigFormItem.js';

class DemoHFormItem extends Component {

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
          <HFormItem {...ConfigHFormItem[0]} value={values} onChange={this.onChange} />
          <HFormItem {...ConfigHFormItem[1]} value={values} onChange={this.onChange} />
          <HFormItem {...ConfigHFormItem[2]} value={values} onChange={this.onChange} />
          <HFormItem {...ConfigHFormItem[3]} value={values} onChange={this.onChange} />
        </Form>
      </Card>
    )
  }
}

export default DemoHFormItem;
