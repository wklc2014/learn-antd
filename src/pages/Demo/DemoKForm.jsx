/**
 * 用户调查
 */
import { actions, connect } from 'mirrorx';
import React, { Component } from 'react';
import { Button, Form } from 'antd';

import * as CONFIGS from './common/kFormConfig.js';
import KForm from '../../components/KForm/KForm.jsx';
import { getValueById } from '../../components/KForm/common/getValue.js';

class DemoKForm extends Component {

  static defaultProps = {
    values: {},
  }

  getConfigIds = () => {
    const ids = CONFIGS.UserSurvery.map((v) => v.config.id);
    return ids;
  }

  onGetValue = () => {
    const ids = this.getConfigIds();
    const values = this.props.form.getFieldsValue(ids);
    console.log("values", values);
  }

  onSubmit = () => {
    const ids = this.getConfigIds();
    this.props.form.validateFields(ids, (errors, values) => {
      console.log('validateFields>>>', errors, values);
    });
  }

  onChange = ({ id, value, type }) => {
    console.log('{ id, value }>>>', JSON.stringify({ id, value, type }));
    actions._form.updateValues({ [id]: value })
  }

  onReset = () => {
    const ids = this.getConfigIds();
    this.props.form.resetFields(ids);
    actions._form.resetValues();
  }

  render() {
    const commonStyle = {
      border: '1px solid #eee',
      marginBottom: 20,
      padding: '10px 20px'
    }

    const { formLayout = {} } = this.props.values;
    const layout = getValueById(formLayout);

    const btnConfig = {
      config: {
        id: 'button-submit',
        type: 'button',
        extMap: {
          label: '登录',
        },
        params: {
          type: 'primary',
          onClick: () => {
            console.log(23)
          }
        },
      },
      formItemLayout: {}
    };
    if (!layout || layout === 'horizontal') {
      btnConfig.formItemLayout.wrapperCol = { xs: 24, sm: { span: 16, offset: 6 } };
    }

    const inlineGroupConfigs = [...CONFIGS.UserRegister, btnConfig];

    return (
      <section style={{ padding: 16 }}>
        <div style={commonStyle}>
          <KForm
            wrappedComponentRef={(inst) => this.instance = inst}
            configs={CONFIGS.UserSurvery}
            form={this.props.form}
            columns={2}
            onChange={this.onChange}
            values={this.props.values}
            spacing={16}
          />
        </div>
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
        <div style={commonStyle}>
          <KForm
            configs={inlineGroupConfigs}
            onChange={this.onChange}
            layout={layout}
            values={this.props.values}
          />
        </div>
      </section>
    );
  }
}

const Wraper = Form.create()(DemoKForm);

function mapStateToProps(state, ownProps) {
  return {
    values: state._form.values,
  }
}

export default connect(mapStateToProps)(Wraper);