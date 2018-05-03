/**
 * 详情页
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Card } from 'antd';

import KForm from '../KForm/KForm.jsx';
import KSummaryTable from '../KSummaryTable/KSummaryTable.jsx';

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
      values[val.id] = lodash.get(dataSource, val.path);
      const newVal = {
        id: val.id,
        label: val.label,
        config: {
          type: val.type,
          ext: {
            render: val.render,
          },
        },
        params: {
          layout: val.layout,
        }
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
    getTableConfigEle = (tableConfigPamram = {}) => {
      const { title, typeConfig = {}, dataConfig = [], path } = tableConfigPamram;
      const { dataSource } = this.props;
      const values = lodash.get(dataSource, path, []);
      const new_values = values.map((v, i) => ({...v, key: i}));
      const TableConfigs = dataConfig.map((val, i) => {
        const newVal = {
          id: val.id,
          config: {
            type: val.type,
            api: val.api,
            ext: val.ext,
          },
          params: {
            title: val.label,
            width: val.width,
            total: val.total,
            render: val.render,
          },
        }
        return newVal;
      });
    return (
      <Card style={{ marginBottom: 24 }} title={title}>
        <KSummaryTable
          className="itemNoBottom"
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
      const { type } = val;
      const key = i;
      if (type === 'form') {
        return <div key={key}>{ this.getFormConfigEle(val) }</div>;
      } else if (type === 'table') {
        return <div key={key}>{ this.getTableConfigEle(val) }</div>;
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
    contentConfig: propTypes.shape({
      label: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      path: propTypes.string.isRequired,
    })
  })),
  dataSource: propTypes.object.isRequired,
}
