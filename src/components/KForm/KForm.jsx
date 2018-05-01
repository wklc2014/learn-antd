/**
 * 通过一个配置数组，生成一组表单元素
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
// import lodash from 'lodash';
import { Form, Row, Col } from 'antd';

import KFormItem from './KFormItem.jsx';

import __formLayoutTypes from './common/__formLayoutTypes.js';

import getGridLayout from './common/getGridLayout.js';
import getSortedConfigs from './common/getSortedConfigs.js';
import getFormItemLayout from './common/getFormItemLayout.js';

import './common/myKForm.less';

export default class KForm extends Component {

  static defaultProps = {
    // 表单 className
    className: '',

    // 表单布局列数
    cols: 1,

    // 表单配置数组
    configs: [],

    // 对表单配置数组进行排序
    sort: false,

    // 整个表单组布局类型
    type: 'horizontal',

    // 单个表单元素布局
    layout: '',

    // 表单元素间隔距离
    space: 0,

    // 表单值
    values: {},
  }

  /**
   * 获取表单布局类型
   * 默认为表单布局类型的第一种
   * @return {string} 表单布局类型
   */
  getFormLayoutType = () => {
    const { type } = this.props;
    if (is.inArray(type, __formLayoutTypes)) {
      return type;
    }
    return __formLayoutTypes[0];
  }

  render() {
    const { className, configs, cols, sort, type, layout, space, values, onChange } = this.props;
    const newConfigs = getSortedConfigs(sort, configs);

    const KFormChildrenEle = newConfigs.filter(val => {
      const { params = {} } = val;
      return !params.hide;
    }).map((val, i) => {
      const key = `${type}-${i}`;
      const {
        id: item_id,
        label: item_label,
        config: item_config,
        params: item_params = {},
      } = val;
      const { colspan, offset } = item_params;

      // KformItem 布局可以通过 Kform 组件直接传入
      // 也可以通过方法计算
      const item_layout = layout || getFormItemLayout(type, cols, colspan, offset);

      const KFormItemProps = {
        id: item_id,
        label: item_label,
        config: item_config,
        params: { ...item_params, space },
        onChange,
        value: values[item_id],
        layout: item_layout,
      }
      if (type === 'inline') {
        return (
          <div key={key} style={{ display: 'inline-block' }}>
            <KFormItem {...KFormItemProps} />
          </div>
        )
      }
      const ColProps = getGridLayout(cols, colspan);
      return (
        <Col key={key} {...ColProps} id="sdfsdf">
          <KFormItem {...KFormItemProps} />
        </Col>
      );
    });

    const formLayout = this.getFormLayoutType();

    return (
      <section className={className}>
        <Form layout={formLayout}>
          <Row type="flex" id="sdfsdf22">{KFormChildrenEle}</Row>
        </Form>
      </section>
    );
  }
}

KForm.propTypes = {
  className: propTypes.string,
  onChange: propTypes.func,
  configs: propTypes.array.isRequired,
  cols: propTypes.number,
  sort: propTypes.bool,
  type: propTypes.string,
  layout: propTypes.oneOfType([
    propTypes.object,
    propTypes.string,
  ]),
  space: propTypes.number,
  values: propTypes.object,
};
