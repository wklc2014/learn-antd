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

  getChildrenEle = () => {
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
      value: getDefaultValue({ value, id: 'base' }),
    });
    if (is.array(subConfig)) {
      const AddEle = subConfig.map((val, i) => {
        const {
          id: add_id,
          type: add_type,
          params: add_params = {},
          extMap: add_extMap = {},
        } = val;
        return this.getFieldEle({
          key: `add_type_${i}`,
          type: add_type,
          params: {
            ...add_params,
            placeholder: getPlaceholder({
              id: add_id,
              type: add_type,
              label: formItemParams.label,
              placeholder: add_params.placeholder,
            }),
            style: getStyle({
              type: add_type,
              extMap: add_extMap,
              style: { ...add_params.style, marginRight: 8, marginBottom: 8 },
            }),
          },
          extMap: {
            ...add_extMap,
            data: getData({ type: add_type, extMap: add_extMap })
          },
          onChange: e => this.getOnChange({ id: add_id, changeValue: e, extMap: add_extMap }),
          value: getDefaultValue({ value, id: add_id }),
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

  getFieldEle = ({ key, type, params, extMap, onChange, value }) => {
    const { form, config } = this.props;
    const configType = configTypes[type];
    if (configType) {
      if (key || type === 'text') {
        return (
          <span key={key}>
            {
              configType({
                params: { ...params, value },
                extMap,
                onChange,
                value
              })
            }
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
    const { space, formItemLayout, formItemParams, value } = this.props;
    const formItemValue = getDefaultValue({ value, id: 'base' });
    const ChildrenEle = this.getChildrenEle();
    return (
      <FormItem
        {...getFormItemParams(formItemValue, formItemParams)}
        {...formItemLayout}
      >
        <div style={{ paddingRight: space }}>
          { ChildrenEle }
        </div>
      </FormItem>
    )
  }

}

HFormItem.propTypes = {
  subConfig: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    params: propTypes.object,
    options: propTypes.object,
    extMap: propTypes.object,
  })),
  config: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    params: propTypes.object,
    options: propTypes.object,
    extMap: propTypes.object,
  }),
  form: propTypes.object.isRequired,
  formItemParams: propTypes.object,
  formItemLayout: propTypes.object,
  formItemSpace: propTypes.number,
  onChange: propTypes.func,
  value: propTypes.object,
};

export default HFormItem;