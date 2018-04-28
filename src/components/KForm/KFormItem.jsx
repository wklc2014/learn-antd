/**
 * 根据一个配置对象 config
 * 渲染一个 Antd 的 FormItem 元素
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Form } from 'antd';

import ItemContent from './Items/ItemContent.jsx';

import __formItemLayout from './common/__formItemLayout.js';

const FormItem = Form.Item;

export default class KFormItem extends Component {

  static defaultProps = {
    layout: __formItemLayout,
  }

  // 获取 FormItem 内容
  getFormItemContent = () => {
    const { config, sub_config, onChange } = this.props;
    // 有子配置表单
    if (is.array(sub_config) && sub_config.length) {
      return sub_config.map((val, i) => {
        const { id: sub_id, type: sub_type, params: sub_params = {}, extMap: sub_ext = {} } = val;
        const sub_value = getValueById(value, sub_id);
        return (
          <Col key={`subFormItem${i}`}>
            <ItemContent
              type={sub_type}
              params={sub_params}
              ext={sub_ext}
              onChange={e => this.getOnChange({ id: sub_id, value: e, ext: sub_ext })}
              value={sub_value}
            />
          </Col>
        )
      })
    }

    // 只有主体表单配置
    const { type, params, ext } = config;
    const main_value = getValueById(value);
    return (
      <ItemContent
        type={type}
        params={params}
        ext={ext}
        onChange={e => this.getOnChange({ id: 'main', value: e, ext })}
        value={main_value}
      />
    );
  }

  render() {
    const { label, layout } = this.props;
    const childrenEle = this.getFormItemContent();

    return (
      <FormItem label={label} {...layout}>
        {childrenEle}
      </FormItem>
    )
  }
}

KFormItem.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  layout: propTypes.object,
  onChange: propTypes.func,
  config: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    params: propTypes.object,
    ext: propTypes.object,
  }),
  sub_config: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    params: propTypes.object,
    ext: propTypes.object,
  })),
  // value: propTypes.object,
};
