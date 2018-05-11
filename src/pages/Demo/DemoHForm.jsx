/**
 * 用户调查
 */
import { actions, connect } from 'mirrorx';
import React, { Component } from 'react';
import { Button, Card } from 'antd';

import HForm from '../../components/HForm/HForm.jsx';
import { __configs, __register } from './common/__ConfigForm.js';

class DemoHForm extends Component {

  static defaultProps = {
    values: {},
  }

  onChange = ({ id, value }) => {
    console.log('>>>', { id, value });
    const data_value = { [id]: value };
    if (id === 'contactPhone_2') {
      const values = {
        '01': 13011114444,
        '02': 13277778888,
      }
      data_value.contactPhone_1 = values[value];
    }
    actions._form.updateValues(data_value)
  }

  onReset = () => {
    actions._form.resetValues();
  }

  render() {
    const { formLayout } = this.props.values;

    const btnConfig = {
      config: {
        id: 'button-submit',
        type: 'button',
        api: {
          type: 'primary',
        },
        ext: {
          value: 'login',
          label: '登录',
        },
      },
      params: {
        offset: true,
      }
    };

    const inlineGroupConfigs = [...__register, btnConfig];

    return (
      <div>
        <Card title="多种表单输入类型" style={{ marginBottom: 24 }}>
          <HForm
            configs={__configs}
            cols={2}
            onChange={this.onChange}
            values={this.props.values}
            space={16}
          />
          <p style={{ paddingBottom: 16 }}>
            <Button type="primary" onClick={this.onSubmit} style={{ marginRight: 16 }}>
              提交
            </Button>
            <Button type="primary" onClick={this.onGetValue} style={{ marginRight: 16 }}>
              获取
            </Button>
            <Button type="primary" onClick={this.onReset}>
              重置
            </Button>
          </p>
        </Card>
        <Card title="三种表单布局">
          <HForm
            configs={inlineGroupConfigs}
            onChange={this.onChange}
            type={formLayout}
            values={this.props.values}
          />
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    values: state._form.values,
  }
}

export default connect(mapStateToProps)(DemoHForm);