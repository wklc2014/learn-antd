/**
 * 通过一个配置数组
 * 生成一个表单
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
// import is from 'is_js';
// import lodash from 'lodash';
import { Form, Row, Col } from 'antd';

import KFormItem from './KFormItem.jsx';

import getFormLayout from './common/getFormLayout.js';
import getGridLayout from './common/getGridLayout.js';
import getSortedConfigs from './common/getSortedConfigs.js';
import { getFormItemLayout } from './common/getFormItemLayout.js';

import './common/myKForm.less';

export default class KForm extends Component {

  static defaultProps = {
    // 表单 className
    className: '',

    // 表单配置数组
    configs: [],

    // 表单布局列数
    cols: 1,

    // 是否对表单配置数组进行排序
    sort: false,

    // 表单组布局类型
    layout: 'horizontal',

    // 单个表单元素布局
    itemLayout: '',

    // 表单元素间隔距离
    itemSpace: 0,

    // change 事件
    onChange: () => {},

    // 表单值
    values: {},
  }

  render() {
    const { className, configs, cols, sort, layout, itemLayout, itemSpace, onChange, values } = this.props;
    const newConfigs = getSortedConfigs(sort, configs);

    const KFormChildrenEle = newConfigs.map((val, i) => {
      const key = `${layout}-${i}`;
      const {
        id: item_id,
        label: item_label,
        config: item_config,
        params: item_params = {},
      } = val;
      const { colspan } = item_params;

      // 优先使用直接配置的 KFormItem 布局
      // 否则通过规则计算
      const item_layout = itemLayout || getFormItemLayout(layout, cols, colspan);

      const KFormItemProps = {
        id: item_id,
        label: item_label,
        config: item_config,
        params: {
          layout: item_layout,
          space: itemSpace,
          ...item_params,
        },
        onChange,
        value: values[item_id],
      }
      if (layout === 'inline') {
        return (
          <div key={key} style={{ display: 'inline-block' }}>
            <KFormItem {...KFormItemProps} />
          </div>
        )
      }
      const ColProps = getGridLayout(cols, colspan);
      return (
        <Col key={key} {...ColProps}>
          <KFormItem {...KFormItemProps} />
        </Col>
      );
    });

    const formLayout = getFormLayout(layout);

    return (
      <section className={className}>
        <Form layout={formLayout}>
          <Row type="flex">{KFormChildrenEle}</Row>
        </Form>
      </section>
    );
  }
}

KForm.propTypes = {
  className: propTypes.string,
  configs: propTypes.array.isRequired,
  cols: propTypes.number,
  sort: propTypes.bool,
  layout: propTypes.string,
  itemLayout: propTypes.oneOfType([
    propTypes.object,
    propTypes.string,
  ]),
  itemSpace: propTypes.number,
  onChange: propTypes.func,
  values: propTypes.object,
};
