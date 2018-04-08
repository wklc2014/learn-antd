/**
 * 用户调查
 */
import React, { Component } from 'react';
import { Button, Form } from 'antd';

import * as CONFIGS from './common/';
import KForm from '../../components/KForm/KForm.jsx';

class ReportContent extends Component {

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

  onReset = () => {
    const ids = this.getConfigIds();
    this.props.form.resetFields(ids);
    this.props.onReset();
  }

  render() {
    const commonStyle = {
      border: '1px solid #eee',
      marginBottom: 20,
      padding: '10px 20px'
    }

    const { formLayout = {} } = this.props.values;

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
    if (!formLayout.base || formLayout.base === 'horizontal') {
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
            onChange={this.props.onChange}
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
            form={this.props.form}
            onChange={this.props.onChange}
            layout={formLayout.base}
            values={this.props.values}
          />
        </div>
      </section>
    );
  }
}

export default Form.create()(ReportContent);
