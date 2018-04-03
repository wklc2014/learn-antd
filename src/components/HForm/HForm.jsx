import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import is from 'is_js';
import { Form, Row, Col } from 'antd';

import HFormItem from './HFormItem.jsx';

import getGridLayout from './common/getGridLayout.js';
import getSortedConfigs from './common/getSortedConfigs.js';
import formLayoutTypes from './common/formLayoutTypes.js';
import getFormItemLayout from './common/getFormItemLayout.js';

export default class HForm extends Component {

  static defaultProps = {
    configs: [],
    isSort: false,
    columns: 1,
    layout: 'horizontal',
    space: 0,
    values: {},
  }

  getFormLayoutType = () => {
    const { layout } = this.props;
    if (is.inArray(layout, formLayoutTypes)) {
      return layout;
    }
    return formLayoutTypes[0];
  }

  render() {
    const {
      isSort,
      columns,
      configs,
      layout,
      space,
      values,

      form,
      onChange,
    } = this.props;

    const newConfigs = getSortedConfigs(isSort, configs);

    const formEle = newConfigs.map((val, i) => {
      const key = `${layout}-${i}`;
      const { config = {}, addConfig, formItemParams, formItemLayout } = val;
      const colSpan = lodash.get(config, 'extMap.colSpan');
      const HFormItemProps = {
        form,
        config,
        addConfig,
        formItemParams,
        formItemLayout: formItemLayout || getFormItemLayout(layout, colSpan, columns),
        space,
        onChange,
        value: values[config.id],
      }
      if (layout === 'inline') {
        return (
          <div key={ key } style={{ display: 'inline-block' }}>
            <HFormItem {...HFormItemProps} />
          </div>
        )
      }
      const ColProps = getGridLayout(columns, colSpan);
      return (
        <Col key={ key } {...ColProps}>
          <HFormItem {...HFormItemProps} />
        </Col>
      )
    });

    const formLayout = this.getFormLayoutType();

    return (
      <Form layout={ formLayout }>
        <Row type="flex">{ formEle }</Row>
      </Form>
    );
  }
}

HForm.propTypes = {
  columns: propTypes.number,
  configs: propTypes.array.isRequired,
  form: propTypes.object.isRequired,
  isSort: propTypes.bool,
  layout: propTypes.string,
  onChange: propTypes.func,
  space: propTypes.number,
  values: propTypes.object,
};
