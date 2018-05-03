/**
 * 详情页
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Card } from 'antd';

import KForm from '../KForm/Index.jsx';
import KSummaryTable from '../KSummaryTable/Index.jsx';

export default class KDetail extends Component {

  static defaultProps = {
    mode: 'outer',
    configs: [],
    dataSource: [],
  }

  // 表单式详情
  getFormConfigEle = (formConfigParams = {}) => {
    const { title, typeConfig = {}, dataConfig = [] } = formConfigParams;
    const { dataSource } = this.props;
    const values = {};
    const FormConfigs = dataConfig.map((val, i) => {
      const { label, config = {}, params = {}, path = '' } = val;
      values[config.id] = lodash.get(dataSource, path);
      return { label, config, params };
    });
    return (
      <Card style={{ marginBottom: 24 }} title={title}>
        <KForm
          {...typeConfig}
          configs={FormConfigs}
          values={values}
        />
      </Card>
    );
  }

  // 表格式详情
  getTableConfigEle = (tableConfigPamram = {}) => {
    const { title, typeConfig = {}, dataConfig = [], path } = tableConfigPamram;
    const { dataSource } = this.props;
    const values = lodash.get(dataSource, path, []);
    const new_values = values.map((v, i) => ({...v, key: i}));
    const TableConfigs = dataConfig.map((val, i) => {
      const { config, params } = val;
      return { config, params };
    });
    return (
      <Card style={{ marginBottom: 24 }} title={title}>
        <KSummaryTable
          {...typeConfig}
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

KDetail.propTypes = {
  mode: propTypes.string,
  configs: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string,
    type: propTypes.string.isRequired,
    typeConfig: propTypes.object,
    dataConfig: propTypes.array,
  })),
  dataSource: propTypes.object.isRequired,
}
