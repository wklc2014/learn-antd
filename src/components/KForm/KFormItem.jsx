/**
 * KFormItem
 * 对 FormItem 组件封装
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Form, Row, Col } from 'antd';

import renderFormItemByType from './Items/renderFormItemByType.js';

import getStyle from './common/getStyle.js';
import getValue, { getValueById } from './common/getValue.js';
import getPlaceholder from './common/getPlaceholder.js';
import getData from './common/getData.js';
import getSubConfigGridLayout from './common/getSubConfigGridLayout.js';
import getFormItemValidate from './common/getFormItemValidate.js';
import { getFormItemOffset } from './common/getFormItemLayout.js';
import __formItemLayout from './common/__formItemLayout.js';

const FormItem = Form.Item;

export default class KFormItem extends Component {

  static defaultProps = {
    formItemLayout: __formItemLayout,
    formItemParams: {},
    formItemSpace: 0,
  }

  constructor(props) {
    super(props);
    this.state = {
      touched: false,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const next = JSON.stringify(nextProps);
    const prev = JSON.stringify(this.props);
    return next !== prev;
  }

  // 获取 FormItem onChange 属性
  getOnChange = ({ id, changeValue, extMap }) => {
    const { onChange, config, value } = this.props;
    const { touched } = this.state;
    if (!touched) {
      this.setState({ touched: true });
    }
    onChange({
      id: config.id,
      value: getValue({ value, id, changeValue, extMap }),
      type: id,
    });
  }

  render() {
    const { touched } = this.state;
    const { config, subConfig, formItemSpace, formItemLayout, formItemParams, value } = this.props;
    const { id, type, params = {}, extMap = {} } = config;
    if (!type) return null;

    // 计算一些必要的属性
    const new_style = getStyle({ type, extMap, style: params.style });
    const new_placeholder = getPlaceholder({ id, type, label: formItemParams.label, placeholder: params.placeholder });
    const new_data = getData({ type, extMap });
    const new_value = getValueById(value);

    // 生成主题表单元素
    let ChildrenEle = renderFormItemByType({
      type,
      params: { ...params, placeholder: new_placeholder, style: new_style },
      extMap: { ...extMap, data: new_data },
      onChange: e => this.getOnChange({ id: 'main', changeValue: e, extMap }),
      value: new_value,
    });

    // 如果有子表单配置
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
        const new_sub_value = getValueById(value, sub_id);

        // 生成子表单元素
        return (
          <span key={`sub_type_${i}`}>
            {renderFormItemByType({
              type: sub_type,
              params: { ...sub_params, placeholder: new_sub_placeholder, style: new_sub_style },
              extMap: { ...sub_extMap, data: new_sub_data },
              onChange: e => this.getOnChange({ id: sub_id, changeValue: e, extMap: sub_extMap }),
              value: new_sub_value,
            })}
          </span>
        );
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

    const newFormItemLayout = getFormItemOffset(formItemLayout, extMap.offset);
    const formItemValidate = getFormItemValidate(value, extMap, touched);

    return (
      <div style={{ paddingRight: formItemSpace }}>
        <FormItem {...newFormItemLayout} {...formItemParams} {...formItemValidate}>
          {ChildrenEle}
        </FormItem>
      </div>
    )
  }
}

KFormItem.propTypes = {
  config: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    params: propTypes.object,
    extMap: propTypes.object,
  }),
  subConfig: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    params: propTypes.object,
    extMap: propTypes.object,
  })),
  formItemParams: propTypes.object,
  formItemLayout: propTypes.object,
  formItemSpace: propTypes.number,
  onChange: propTypes.func.isRequired,
  // value: propTypes.object,
};
