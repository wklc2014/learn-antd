/**
 * 在 antd Table 组件基础上
 * 生成的带表单的汇总表格
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Table } from 'antd';

import KFormItem from '../KForm/ItemBox.jsx';
import getSummaryData from './common/getSummaryData.js';

import './styles.less';

class KSummaryTable extends Component {

  static defaultProps = {
    // 表格头配置
    config: [],

    // 表单数据
    dataSource: [],

    // antd Table 组件 api
    tableApi: 2,

    // 是否汇总
    total: false,

    // 汇总行的 key
    totalLineKey: 'ts',

    // 汇总行的计算精度 (保留小数位)
    totalPrecision: 2,

    // onChange 事件
    onChange: () => {},
  }

  // 获取 Table columns 属性
  getTableColumns = () => {
    const { configs, totalLineKey } = this.props;
    return configs.filter(val => {
      const { params = {} } = val;
      return !params.isHide;
    }).map((val, i) => {
      const key = `KSummaryTable-${i}`;
      const { params = {}, config = {} } = val;
      const { width, title } = params;
      return {
        key,
        width,
        title,
        dataIndex: config.id,
        render: (text, record) => {
          if (record.key === totalLineKey) return text;
          const KFormItemProps = {
            config,
            onChange: ({ id, value }) => {
              this.props.onChange({ id, value, line: record.key });
            },
            values: record,
          }
          return <KFormItem {...KFormItemProps} />;
        }
      }
    });
  }

  // 获取 Table dataSource 属性
  getTableDataSource = () => {
    const { configs, dataSource, total, totalPrecision, totalLineKey } = this.props;

    // 如果不需要汇总，直接返回原始数据 dataSource
    if (!total) return dataSource;
    const new_dataSource = getSummaryData(configs, dataSource, totalPrecision, totalLineKey);
    return new_dataSource;
  }

  /**
   * 获取 antd Table 组件的 rowClassName 属性
   * 在表格配置都是 text 时, 取消表单元素 margin-bottom 属性
   * 样式采用 less 调整
   * @return {string}   新的 antd Table 组件的 rowClassName 属性
   */
  getTableRowClassName = () => {
    const { configs, tableApi = {} } = this.props;
    const { rowClassName = '' } = tableApi;
    let new_rowClassName = rowClassName;

    if (checkAllText(configs)) {
      new_rowClassName += ' my-table-row-class';
    }

    return new_rowClassName;
  }

  render() {
    const { tableApi } = this.props;
    const columns = this.getTableColumns();
    const dataSource = this.getTableDataSource();

    return (
      <Table
        bordered
        {...tableApi}
        columns={columns}
        dataSource={dataSource}
        rowClassName={this.getTableRowClassName}
      />
    )
  }
}

KSummaryTable.propTypes = {
  configs: propTypes.arrayOf(propTypes.shape({
    config: propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      api: propTypes.object,
      ext: propTypes.object,
    }),
    params: propTypes.shape({
      title: propTypes.string.isRequired,
      width: propTypes.string,
      total: propTypes.boolean,
      render: propTypes.string,
      hide: propTypes.boolean,
    }),
  })),
  dataSource: propTypes.array.isRequired,
  tableApi: propTypes.object,
  total: propTypes.bool,
  totalPrecision: propTypes.number,
  totalLineKey: propTypes.string,
  onChange: propTypes.func,
};

export default KSummaryTable;

function checkAllText(configs = []) {
  const notAllText = configs.some(val => {
    const { config } = val;
    if (is.array(config)) {
      return config.some(v => v.type !== 'text');
    } else {
      return config.type !== 'text';
    }
  })
  return !notAllText;
}