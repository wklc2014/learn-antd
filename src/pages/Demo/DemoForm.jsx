/**
 * 用户调查
 */
import { actions, connect } from 'mirrorx';
import React, { Component } from 'react';
import { Button, Card } from 'antd';

import MForm from '../../components/MForm/Index.jsx';

import { __configs, __register } from './common/ConfigForm.js';

class DemoKForm extends Component {

  static defaultProps = {
    values: {},
  }

  onChange = ({ id, value }) => {
    console.log('>>>', JSON.stringify({ id, value }));
    actions._form.updateValues({ [id]: value })
  }

  onReset = () => {
    actions._form.resetValues();
  }

  render() {
    const { formLayout = {} } = this.props.values;

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
          <MForm
            configs={__configs}
            cols={2}
            itemSpace={16}
            onChange={this.onChange}
            values={this.props.values}
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
        <Card title="三种组件布局">
          <MForm
            configs={inlineGroupConfigs}
            layout={formLayout.formItem_1}
            onChange={this.onChange}
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

export default connect(mapStateToProps)(DemoKForm);