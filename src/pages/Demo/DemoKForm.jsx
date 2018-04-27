/**
 * 用户调查
 */
import { actions, connect } from 'mirrorx';
import React, { Component } from 'react';
import { Button, Card } from 'antd';

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
  }

  onSubmit = () => {

  }

  onChange = ({ id, value, type }) => {
    // console.log('{ id, value }>>>', JSON.stringify({ id, value, type }));
    actions._form.updateValues({ [id]: value })
  }

  onReset = () => {
    actions._form.resetValues();
  }

  render() {
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
      <div>
        <Card title="多种表单输入类型" style={{ marginBottom: 24 }}>
            <KForm
              wrappedComponentRef={(inst) => this.instance = inst}
              configs={CONFIGS.UserSurvery}
              columns={2}
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
        <Card title="三种组件布局">
            <KForm
              configs={inlineGroupConfigs}
              onChange={this.onChange}
              layout={layout}
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