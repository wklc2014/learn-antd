import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form } from 'antd';

const FormItem = Form.Item;

export default class KFormItemExt extends Component {

  static defaultProps = {
    formItemLayout: { labelCol: { xs: 24, sm: 6 }, wrapperCol: { xs: 24, sm: 16 } },
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
