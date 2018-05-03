/**
 * 根据一个配置对象 config
 * 渲染一个 Antd 的 FormItem 元素
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
// import lodash from 'lodash';
import { Form, Row, Col } from 'antd';

import ItemContent from './Items/ItemContent.jsx';

import getFormItemValidate from './common/getFormItemValidate.js';
import { getFormItemOffset } from './common/getFormItemLayout.js';
import * as __formItemLayouts from './common/__formItemLayouts.js';

const FormItem = Form.Item;

export default class KFormItem extends Component {

  static defaultProps = {
    label: '',
    config: {},
    params: {},
    onChange: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      touched: false,
    }
  }

  onChange = (new_value, type) => {
    const { id, onChange } = this.props;
    const { touched } = this.state;
    if (!touched) {
      this.setState({ touched: true  });
    }
    onChange({ id, value: new_value, type });
  }

  // 获取 FormItem 布局
  // 优先计算子配置的布局，再计算父组件传入的布局
  // 如果布局是对象，则直接作为布局对象
  // 如果布局是字符串，则在布局库中查找
  // 查找不到对应的布局，则采用默认的 L0.
  getLayout = () => {
    const { params = {} } = this.props;
    const { layout, offset } = params;
    if (is.object(layout)) {
      return getFormItemOffset(layout, offset);
    } else if (is.string(layout)) {
      const result_layout = __formItemLayouts[layout] || __formItemLayouts.L0;
      return getFormItemOffset(result_layout, offset);
    }
  }

  render() {
    const { label, config, params = {}, value } = this.props;
    const { space, extra } = params;
    const { touched } = this.state;
    const layout = this.getLayout();
    const common_props = { label, value, onChange: this.onChange };

    // 如果 config 是对象，
    // 则转换成数组, 统一处理
    const new_config = is.array(config) ? config : [config];

    const FormItemChildrenEle = new_config.slice(0, 2).map((val, i) => {
      const key = `sub_formItem-${i}`;
      const { ext = {} } = val;
      const { span = 24, pright } = ext;
      const id = `formItem_${i + 1}`;
      const ColProps = { key, span, style: {} };

      // 计算 Col 右边内间距
      if (pright) {
        ColProps.style.paddingRight = pright;
      } else if (i < config.length - 1) {
        ColProps.style.paddingRight = 8;
      }

      return (
        <Col {...ColProps}>
          <ItemContent {...val} {...common_props} id={id} />
        </Col>
      );
    });

    const validate = getFormItemValidate({ value, config: new_config, touched });

    return (
      <FormItem
        label={label}
        {...layout}
        {...validate}
        extra={extra}
      >
        <Row type="flex" style={{ paddingRight: space }}>
          { FormItemChildrenEle }
        </Row>
      </FormItem>
    )
  }
}

KFormItem.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  config: propTypes.oneOfType([
    propTypes.shape({
      type: propTypes.string.isRequired,
      api: propTypes.object,
      ext: propTypes.object,
    }),
    propTypes.arrayOf(propTypes.shape({
      type: propTypes.string.isRequired,
      api: propTypes.object,
      ext: propTypes.object,
    })),
  ]),
  params: propTypes.object,
  onChange: propTypes.func,
  // value: propTypes.object,
};
