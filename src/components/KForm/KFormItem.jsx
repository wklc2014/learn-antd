/**
 * HFormItem
 * 对 FormItem 组件封装
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Form, Row, Col } from 'antd';

import configTypes from './common/configTypes.js';

import getStyle from './common/getStyle.js';
import getValue, { setValue } from './common/getValue.js';
import getPlaceholder from './common/getPlaceholder.js';
import getData from './common/getData.js';
import getFormItemParams from './common/getFormItemParams.js';
import getSubConfigGridLayout from './common/getSubConfigGridLayout.js';
import __formItemLayout from './common/__formItemLayout.js';

const FormItem = Form.Item;

class HFormItem extends Component {

  static defaultProps = {
    formItemLayout: __formItemLayout,
    formItemParams: {},
    formItemSpace: 0,
  }

  // 获取 FormItem onChange 属性
  getOnChange = ({ id, changeValue, extMap }) => {
    const { onChange, config, value } = this.props;
    if (!onChange || is.not.function(onChange)) return null;
    onChange({
      id: config.id,
      value: getValue({ value, id, changeValue, extMap }),
      type: id,
    });
  }

  // 生成表单元素内容
  getFieldEle = ({ key, type, params, extMap, onChange, value }) => {
    const { form, config = {} } = this.props;
    const configType = configTypes[type];
    if (configType) {
      if (key || type === 'text') {
        return (
          <span key={key}>
            {configType({ params: { ...params, value }, onChange, extMap, value })}
          </span>
        );
      }
      const { getFieldDecorator } = form;
      return getFieldDecorator(config.id, {
        ...config.options,
        initialValue: value,
      })(configType({ params, extMap, onChange, value }))
    }
  }

  render() {
    const { config, subConfig, formItemSpace, formItemLayout, formItemParams, value } = this.props;
    const { id, type, params = {}, extMap = {} } = config;
    if (!type) return null;

    const new_style = getStyle({ type, extMap, style: params.style });
    const new_placeholder = getPlaceholder({ id, type, label: formItemParams.label, placeholder: params.placeholder });
    const new_data = getData({ type, extMap });
    const new_value = setValue(value);

    let ChildrenEle = this.getFieldEle({
      type,
      params: { ...params, placeholder: new_placeholder, style: new_style },
      extMap: { ...extMap, data: new_data },
      onChange: e => this.getOnChange({ id: 'base', changeValue: e, extMap }),
      value: new_value,
    });

    if (is.array(subConfig)) {
      const subChildrenEle = subConfig.map((val, i) => {
        const { id: sub_id, type: sub_type, params: sub_params = {}, extMap: sub_extMap = {} } = val;

        const sub_ui_style = { ...sub_params.style, marginBottom: 8 };
        if (i !== subConfig.length - 1) {
          sub_ui_style.marginRight = 8;
        }

        const new_sub_placeholder = getPlaceholder({ id: sub_id, type: sub_type, label: formItemParams.label, placeholder: sub_params.placeholder });
        const new_sub_style = getStyle({ type: sub_type, extMap: sub_extMap, style: sub_ui_style });
        const new_sub_data = getData({ type: sub_type, extMap: sub_extMap });
        const new_sub_value = setValue(value, sub_id);

        return this.getFieldEle({
          key: `sub_type_${i}`,
          type: sub_type,
          params: { ...sub_params, placeholder: new_sub_placeholder, style: new_sub_style },
          extMap: { ...sub_extMap, data: new_sub_data },
          onChange: e => this.getOnChange({ id: sub_id, changeValue: e, extMap: sub_extMap }),
          value: new_sub_value,
        });
      });
      const childSpan = getSubConfigGridLayout(extMap.childSpan);
      const { childGutter = 8 } = extMap;
      ChildrenEle = (
        <Row type="flex" gutter={childGutter}>
          <Col {...childSpan.left}>{ChildrenEle}</Col>
          <Col {...childSpan.right}>{subChildrenEle}</Col>
        </Row>
      );
    }

    const newFormItemParams = getFormItemParams(value, formItemParams, config.options);

    return (
      <FormItem
        {...newFormItemParams}
        {...formItemLayout}
      >
        <div style={{ paddingRight: formItemSpace }}>
          {ChildrenEle}
        </div>
      </FormItem>
    )
  }
}

HFormItem.propTypes = {
  config: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    params: propTypes.object,
    options: propTypes.object,
    extMap: propTypes.object,
  }),
  subConfig: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    params: propTypes.object,
    options: propTypes.object,
    extMap: propTypes.object,
  })),
  form: propTypes.object.isRequired,
  formItemParams: propTypes.object,
  formItemLayout: propTypes.object,
  formItemSpace: propTypes.number,
  // onChange: propTypes.func,
  // value: propTypes.object,
};

export default HFormItem;