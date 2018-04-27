/**
 * 通过一个配置数组，生成一组表单元素
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import is from 'is_js';
import lodash from 'lodash';

import KFormItem from './KFormItem.jsx';

import formLayoutTypes from './common/formLayoutTypes.js';

import getGridLayout from './common/getGridLayout.js';
import getSortedConfigs from './common/getSortedConfigs.js';
import getFormItemLayout from './common/getFormItemLayout.js';

export default class KForm extends Component {

  static defaultProps = {
    // 表单布局列数
    columns: 1,

    // 表单配置数组
    configs: [],

    // 对表单配置数组进行排序
    sort: false,

    // 表单元素布局类型
    layout: 'horizontal',

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
    const { layout } = this.props;
    if (is.inArray(layout, formLayoutTypes)) {
      return layout;
    }
    return formLayoutTypes[0];
  }

  render() {
    const { className, columns, configs, sort, layout, space, values, onChange } = this.props;
    const newConfigs = getSortedConfigs(sort, configs);

    const formEle = newConfigs.map((val, i) => {
      const key = `${layout}-${i}`;
      const { config = {}, subConfig, formItemParams, formItemLayout, formItemSpace } = val;
      const colSpan = lodash.get(config, 'extMap.colSpan');
      const newFormItemLayout = formItemLayout || getFormItemLayout(layout, colSpan, columns);
      const newFormItemSpace = space || formItemSpace || 0;
      const KFormItemProps = {
        config,
        subConfig,
        formItemParams,
        formItemLayout: newFormItemLayout,
        formItemSpace: newFormItemSpace,
        onChange,
        value: values[config.id],
      }
      if (layout === 'inline') {
        return (
          <div key={key} style={{ display: 'inline-block' }}>
            <KFormItem {...KFormItemProps} />
          </div>
        )
      }
      const ColProps = getGridLayout(columns, colSpan);
      return (
        <Col key={key} {...ColProps}>
          <KFormItem {...KFormItemProps} />
        </Col>
      );
    });

    const formLayout = this.getFormLayoutType();

    return (
      <Form layout={formLayout} className={className}>
        <Row type="flex">{formEle}</Row>
      </Form>
    );
  }
}

KForm.propTypes = {
  className: propTypes.string,
  onChange: propTypes.func,
  configs: propTypes.array.isRequired,
  columns: propTypes.number,
  sort: propTypes.bool,
  layout: propTypes.string,
  space: propTypes.number,
  values: propTypes.object,
};
