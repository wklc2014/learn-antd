import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form } from 'antd';

import __formItemLayout from './common/__formItemLayout.js';

const FormItem = Form.Item;

export default class KFormItemExt extends Component {

  static defaultProps = {
    formItemLayout: __formItemLayout,
    formItemParams: {},
    formItemSpace: 0,
  }

  render() {
    const { formItemParams, formItemLayout, formItemSpace, children } = this.props;

    return (
      <FormItem
        {...formItemParams}
        {...formItemLayout}
      >
        <div style={{ paddingRight: formItemSpace }}>
          { children }
        </div>
      </FormItem>
    )
  }
}

KFormItemExt.propTypes = {
  formItemParams: propTypes.object,
  formItemLayout: propTypes.object,
  formItemSpace: propTypes.number,
}
