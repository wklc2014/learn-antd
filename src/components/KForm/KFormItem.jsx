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
import getSubGridLayout from './common/getSubGridLayout.js';
import getFormItemValidate from './common/getFormItemValidate.js';
import * as __formItemLayouts from './common/__formItemLayouts.js';

const FormItem = Form.Item;

export default class KFormItem extends Component {

  static defaultProps = {
    layout: 'L0',
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
  // FormItem 布局可以通过组建传入对象或字符串
  // 如果是对象，则直接作为布局对象
  // 如果是字符串，则在布局库中查找
  // 查找不到对应的布局，则采用默认的 L0.
  getFormItemLayout = () => {
    const { layout } = this.props;
    if (is.object(layout)) {
      return layout;
    } else if (is.string(layout)) {
      return __formItemLayouts[layout] || __formItemLayouts.L0;
    }
  }

  render() {
    const { id, label, config, sub_config, params, value } = this.props;
    const { touched } = this.state;
    const layout = this.getFormItemLayout();
    const common_props = { id, label, value, onChange: this.onChange };

    // 渲染主体表单元素配置
    const mainFormItemChildrenEle = <ItemContent {...config} {...common_props} id="main" />;

    // 渲染附加表单元素配置
    let subFormItemChildrenEle = null;
    if (is.array(sub_config) && sub_config.length) {
      // 有附加表单元素配置
      subFormItemChildrenEle = (
        <Row type="flex">
          {
            sub_config.map((val, i) => {
              const key = `sub_formItem-${i}`;
              const { ext = {} } = val;
              const { span = 24, pright } = ext;
              const id = `sub_item_${i + 1}`;

              const ColProps = { key, span, style: {} };
              // Col 右边内间距
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
            })
          }
        </Row>
      );
    }

    // 只对主体表单验证
    const { ext = {} } = config;
    const childSpan = getSubGridLayout(ext.span);
    const { childGutter = 8 } = ext;
    const validate = getFormItemValidate({ value, ext, touched });

    return (
      <FormItem
        {...params}
        hasFeedback={false}
        label={label}
        {...layout}
        {...validate}
      >
        {mainFormItemChildrenEle}
      </FormItem>
    )
  }
}

KFormItem.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  config: propTypes.shape({
    type: propTypes.string.isRequired,
    api: propTypes.object,
    ext: propTypes.object,
  }),
  sub_config: propTypes.arrayOf(propTypes.shape({
    type: propTypes.string.isRequired,
    api: propTypes.object,
    ext: propTypes.object,
  })),
  params: propTypes.object,
  onChange: propTypes.func,
  layout: propTypes.oneOfType([
    propTypes.object,
    propTypes.string,
  ]),
  value: propTypes.object,
};
