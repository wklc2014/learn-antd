import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form } from 'antd';

import getFormItemParams from './common/getFormItemParams.js';

const FormItem = Form.Item;

export default class HFormItemExt extends Component {

  static defaultProps = {
    formItemParams: {},
    formItemLayout: { labelCol: { xs: 24, sm: 6 }, wrapperCol: { xs: 24, sm: 16 } },
    space: 0,
  }

  render() {
    const { value, formItemParams, formItemLayout, space, children } = this.props;

    return (
      <FormItem
        {...getFormItemParams(value, formItemParams)}
        {...formItemLayout}
      >
        <div style={{ paddingRight: space }}>
          { children }
        </div>
      </FormItem>
    )
  }

}

HFormItemExt.propTypes = {
  formItemParams: propTypes.object,
  formItemLayout: propTypes.object,
  space: propTypes.number,
}
