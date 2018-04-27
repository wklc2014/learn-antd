/**
 * 详情页
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Card } from 'antd';

import KForm from '../KForm/KForm.jsx';
import KSummaryTable from '../KSummaryTable/KSummaryTable.jsx';
import * as __formItemLayout from '../KForm/common/__formItemLayout.js';

export default class KDetail extends Component {

  static defaultProps = {
    mode: 'outer',
    configs: [],
    dataSource: [],
  }

  // 表单式详情
  getFormConfigEle = (title, typeConfig = {}, contentConfig = []) => {
    const { dataSource } = this.props;
    const values = {};
    const FormConfigs = contentConfig.map((val, i) => {
      values[val.id] = lodash.get(dataSource, val.path);
      const newVal = {
        config: {
          id: val.id,
          type: val.type,
        },
        formItemParams: {
          label: val.label,
        },
        formItemLayout: __formItemLayout[typeConfig.layout] || null,
      }
      return newVal;
    });
    return (
      <Card style={{ marginBottom: 24 }} title={title}>
        <KForm
          className="itemNoBottom"
          {...typeConfig}
          configs={FormConfigs}
          values={values}
        />
      </Card>
    );
  }

    // 表格式详情
    getTableConfigEle = (title, typeConfig = {}, contentConfig = []) => {
      const { dataSource } = this.props;
      const values = {};
      const FormConfigs = contentConfig.map((val, i) => {
        values[val.id] = lodash.get(dataSource, val.path);
        const newVal = {
          config: {
            id: val.id,
            type: val.type,
          },
          formItemParams: {
            label: val.label,
          },
          formItemLayout: __formItemLayout[typeConfig.layout] || null,
        }
        return newVal;
      });

    return (
      <Card style={{ marginBottom: 24 }} title={title}>
        <KForm
          className="itemNoBottom"
          {...typeConfig}
          configs={FormConfigs}
          values={values}
        />
      </Card>
    );
  }

  render() {
    const { configs } = this.props;

    const ChildrenEle = configs.map((val, i) => {
      const { title, type, typeConfig, config } = val;
      const key = i;
      if (type === 'form') {
        return <div key={key}>{ this.getFormConfigEle(title, typeConfig, config) }</div>;
      } else if (type === 'table') {
        return <div key={key}>{ this.getTableConfigEle(title, typeConfig, config) }</div>;
      }
    })

    return <div>{ChildrenEle}</div>;
  }

}

KDetail.propTypes = {
  mode: propTypes.string,
  configs: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string,
    type: propTypes.string.isRequired,
    typeConfig: propTypes.object,
    contentConfig: propTypes.shape({
      label: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      path: propTypes.string.isRequired,
    })
  })),
  dataSource: propTypes.object.isRequired,
}
