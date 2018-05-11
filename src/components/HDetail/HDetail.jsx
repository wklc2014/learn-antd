/**
 * 详情页
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Card } from 'antd';

import HForm from '../HForm/HForm.jsx';
import HSummaryTable from '../HSummaryTable/HSummaryTable.jsx';

export default class HDetail extends Component {

  static defaultProps = {
    configs: [],
    dataSource: [],
  }

  // 表单式详情
  getFormConfigEle = (formConfig = {}) => {
    const { dataSource } = this.props;
    const { title, params = {}, configs = [] } = formConfig;
    const values = {};
    const FormConfigs = configs.map((val, i) => {
      const { label, config = {}, extMap = {}, path = '' } = val;
      if (config.id) {
        values[config.id] = lodash.get(dataSource, path);
      }
      return { label, config, extMap };
    });
    return (
      <Card style={{ marginBottom: 24 }} title={title}>
        <HForm
          {...params}
          configs={FormConfigs}
          values={values}
        />
      </Card>
    );
  }

  // 表格式详情
  getTableConfigEle = (tableConfigPamram = {}) => {
    const { dataSource } = this.props;
    const { title, params = {}, configs = [], path } = tableConfigPamram;
    const values = lodash.get(dataSource, path, []);
    const new_values = values.map((v, i) => ({...v, key: i}));
    const TableConfigs = configs.map((val, i) => {
      const { config, extMap } = val;
      return { config, extMap };
    });
    return (
      <Card style={{ marginBottom: 24 }} title={title}>
        <HSummaryTable
          {...params}
          configs={TableConfigs}
          dataSource={new_values}
        />
      </Card>
    );
  }

  render() {
    const { configs } = this.props;

    const ChildrenEle = configs.map((val, i) => {
      const { type, ...rest } = val;
      const key = i;
      if (type === 'form') {
        return <div key={key}>{ this.getFormConfigEle(rest) }</div>;
      } else if (type === 'table') {
        return <div key={key}>{ this.getTableConfigEle(rest) }</div>;
      }
      return null;
    })

    return <div>{ChildrenEle}</div>;
  }

}

HDetail.propTypes = {
  configs: propTypes.arrayOf(propTypes.shape({
    type: propTypes.string.isRequired,
    title: propTypes.string,
    params: propTypes.object,
    configs: propTypes.array,
  })),
  dataSource: propTypes.object.isRequired,
}
