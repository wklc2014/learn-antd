/**
 * 通过一个配置数组
 * 生成一组表单元素
 */
import React from 'react';
import propTypes from 'prop-types';
import { Form, Row, Col } from 'antd';

import ItemBox from './ItemBox.jsx';

import { getFormLayout, getFormItemLayout, getGridLayout } from './common/getLayout.js';

import './styles.less';

export default function MForm(props) {

  const {
    // 表单 className
    className = '',

    // 表单布局列数
    cols = 1,

    // 表单配置数组
    configs = [],

    // 表单布局类型
    layout = 'horizontal',

    // 表单元素布局
    itemLayout = '',

    // 表单元素间隔
    itemSpace = 0,

    // onChange 事件
    onChange = () => {},

    // 表单值
    values = {},
  } = props;

  const ChildrenEle = configs.map((val, i) => {
    const key = `${layout}-${i}`;
    const { label, config, params = {} } = val;
    const { colspan } = params;

    // FormItem 布局优先通过 Form 组件直接传入
    // 其次通过方法计算
    const item_layout = itemLayout || getFormItemLayout(layout, cols, colspan);
    const ItemBoxProps = {
      label,
      config,
      params: {
        layout: item_layout,
        space: itemSpace,
        ...params,
      },
      onChange,
      values,
    };

    if (layout === 'inline') {
      return (
        <div key={key} style={{ display: 'inline-block' }}>
          <ItemBox {...ItemBoxProps} />
        </div>
      )
    }

    const ColProps = getGridLayout(cols, colspan);
    return (
      <Col key={key} {...ColProps}>
        <ItemBox {...ItemBoxProps} />
      </Col>
    );
  });

  const formLayout = getFormLayout(layout);

  return (
    <section className={className}>
      <Form layout={formLayout}>
        <Row type="flex">{ChildrenEle}</Row>
      </Form>
    </section>
  );
}

MForm.propTypes = {
  className: propTypes.string,
  configs: propTypes.array.isRequired,
  cols: propTypes.number,
  layout: propTypes.string,
  itemLayout: propTypes.oneOfType([
    propTypes.object,
    propTypes.string,
  ]),
  itemSpace: propTypes.number,
  onChange: propTypes.func,
  values: propTypes.object,
};
