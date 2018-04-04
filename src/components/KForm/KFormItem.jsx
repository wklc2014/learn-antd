/**
 * HFormItem
 * 对 FormItem 组件封装
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Form, Row, Col } from 'antd';

import getStyle from './common/getStyle.js';
import { getValue, getDefaultValue } from './common/getValue.js';
import getPlaceholder from './common/getPlaceholder.js';
import getData from './common/getData.js';
import getFormItemParams from './common/getFormItemParams.js';
import getChildGridLayout from './common/getChildGridLayout.js';
import configTypes from './common/configTypes.js';

const FormItem = Form.Item;

class HFormItem extends Component {

  static defaultProps = {
    formItemLayout: { labelCol: { xs: 24, sm: 6 }, wrapperCol: { xs: 24, sm: 16 } },
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
    });
  }

  // 生成渲染节点
  getRenderChildrenEle = () => {
    const { config, subConfig, formItemParams, value } = this.props;
    const { id, type, params = {}, extMap = {} } = config;
    if (!type) return null;
    let ChildrenEle = this.getFieldEle({
      type,
      params: {
        ...params,
        placeholder: getPlaceholder({
          id,
          type,
          label: formItemParams.label,
          placeholder: params.placeholder,
        }),
        style: getStyle({ type, extMap, style: params.style }),
      },
      extMap: {
        ...extMap,
        data: getData({ type, extMap })
      },
      onChange: e => this.getOnChange({ id: 'base', changeValue: e, extMap }),
      value: value && value.base ? value.base || undefined,
    });
    if (is.array(subConfig)) {
      const AddEle = subConfig.map((val, i) => {
        const {
          id: sub_id,
          type: sub_type,
          params: sub_params = {},
          extMap: sub_extMap = {},
        } = val;
        return this.getFieldEle({
          key: `sub_type_${i}`,
          type: sub_type,
          params: {
            ...sub_params,
            placeholder: getPlaceholder({
              id: sub_id,
              type: sub_type,
              label: formItemParams.label,
              placeholder: sub_params.placeholder,
            }),
            style: getStyle({
              type: sub_type,
              extMap: sub_extMap,
              style: { ...sub_params.style, marginRight: 8, marginBottom: 8 },
            }),
          },
          extMap: {
            ...sub_extMap,
            data: getData({ type: sub_type, extMap: sub_extMap })
          },
          onChange: e => this.getOnChange({ id: sub_id, changeValue: e, extMap: sub_extMap }),
          value: getDefaultValue({ value, id: sub_id }),
        });
      });
      const childSpan = getChildGridLayout(extMap.childSpan);
      const { childGutter = 16 } = extMap;
      return (
        <Row type="flex" gutter={ childGutter }>
          <Col {...childSpan.left}>{ ChildrenEle }</Col>
          <Col {...childSpan.right}>{ AddEle }</Col>
        </Row>
      );
    }
    return ChildrenEle;
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
    const { formItemSpace, formItemLayout, formItemParams } = this.props;
    const ChildrenEle = this.getChildrenEle();

    return (
      <FormItem
        {...formItemParams}
        {...formItemLayout}
      >
        <div style={{ paddingRight: formItemSpace }}>
          { ChildrenEle }
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
  onChange: propTypes.func,
  value: propTypes.object,
};

export default HFormItem;