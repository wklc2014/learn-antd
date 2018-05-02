/**
 * 根据一个配置对象
 * 渲染一个 Antd 的 FormItem 元素
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Form, Row, Col } from 'antd';

import ItemContent from './ItemContent.jsx';

import { getFormItemOffset } from './common/getLayout.js';
import getFormItemValidate from './common/getFormItemValidate.js';
import * as __formItemLayouts from './common/__formItemLayouts.js';

const FormItem = Form.Item;

export default class ItemBox extends Component {

  static defaultProps = {
    label: '',
    params: {},
    onChange: () => {},
    values: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      touched: false,
    }
  }

  onChange = ({ id, value }) => {
    const { onChange } = this.props;
    const { touched } = this.state;
    if (!touched) {
      this.setState({ touched: true  });
    }
    onChange({ id, value });
  }

  /**
   * 获取 FormItem 布局
   * 如果是对象，则直接作为布局对象
   * 如果是字符串，则在布局库中查找
   * 查找不到对应的布局，则采用默认的 L0.
   * @return {Object} FormItem 布局对象
   */
  getFormItemLayout = () => {
    const { params = {} } = this.props;
    const { layout, offset } = params;
    if (is.object(layout)) {
      return getFormItemOffset(layout, offset);
    } else if (is.string(layout)) {
      const new_layout = __formItemLayouts[layout] || __formItemLayouts.L0;
      return getFormItemOffset(new_layout, offset);
    }
  }

  render() {
    const { touched } = this.state;
    const { label, config, params = {}, values } = this.props;

    if (params.hide) return null;

    const formItemlayout = this.getFormItemLayout();

    // 如果 config 是对象, 则转换成数组, 统一处理
    const new_config = is.array(config) ? config : [config];

    // 是否只显示两个表单输入???
    const ChildrenEle = new_config
      .filter(val => {
        const { ext = {} } = val;
        return !ext.hide;
      })
      .map((val, i) => {
        const key = `formItem-${i}`;
        const { ext = {} } = val;
        const { span = 24, pright } = ext;
        const ColProps = { key, span, style: {} };

        // 计算 Col 右边内间距
        if (pright) {
          ColProps.style.paddingRight = pright;
        } else if (i < config.length - 1) {
          ColProps.style.paddingRight = 8;
        }

        const ItemContentProps = {
          ...val,
          label,
          onChange: this.onChange,
          value: values[val.id],
        }

        return (
          <Col {...ColProps}>
            <ItemContent {...ItemContentProps} />
          </Col>
        );
      });

    const formItemValidate = getFormItemValidate({ values, config: new_config, touched });
    const { space, extra, colon } = params;

    const FormItemProps = {
      label,
      extra,
      colon,
      ...formItemlayout,
      ...formItemValidate,
    }
    return (
      <FormItem {...FormItemProps}>
        <Row type="flex" style={{ paddingRight: space }}>{ChildrenEle}</Row>
      </FormItem>
    )
  }
}

ItemBox.propTypes = {
  label: propTypes.string,
  config: propTypes.oneOfType([
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      api: propTypes.object,
      ext: propTypes.object,
    }),
    propTypes.arrayOf(propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      api: propTypes.object,
      ext: propTypes.object,
    })),
  ]),
  params: propTypes.object,
  onChange: propTypes.func,
  values: propTypes.object,
};
