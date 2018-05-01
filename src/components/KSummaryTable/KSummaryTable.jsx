/**
 * 配合 KFormItem 生成的汇总表格
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Table } from 'antd';

import KFormItem from '../KForm/KFormItem.jsx';
import getSortedConfigs from '../KForm/common/getSortedConfigs.js';
import getSummaryData from './common/getSummaryData.js';

class KSummaryTable extends Component {

  static defaultProps = {
    // 表格头配置
    config: [],

    // 对配置表格头排序
    sort: false,

    // 是否汇总
    total: true,

    // 汇总精度
    totalPrecision: 2,

    // 汇总行的 key
    totalLineKey: 'ts',

    // antd 表格默认配置
    tableApi: {},
  }

  // 获取 Table columns 属性
  getTableColumns = () => {
    const { configs, sort, totalLineKey } = this.props;
    const newConfigs = getSortedConfigs(sort, configs);
    const newColumns = newConfigs.filter(val => {
      const { params = {} } = val;
      const { isHide } = params;
      return !isHide;
    }).map((val, i) => {
      const { id, params = {}, config } = val;
      const { width, title } = params;
      return {
        key: `KSummaryTable-${i}`,
        width,
        title,
        dataIndex: id,
        render: (text, record) => {
          if (record.key === totalLineKey) return text;
          const KFormItemProps = {
            id: `${id}__${record.key}`,
            config,
            onChange: ({ id, value, type }) => {
              this.props.onChange({
                id: id.split('__')[0],
                value: value.formItem_1,
                type,
                order: record.key,
              });
            },
            layout: null,
            value: text,
          }
          return <KFormItem {...KFormItemProps} />;
        }
      }
    });
    return newColumns;
  }

  // 获取 Table dataSource 属性
  getTableDataSource = () => {
    const { configs, dataSource, total, sort, totalPrecision, totalLineKey } = this.props;
    const newConfigs = getSortedConfigs(sort, configs);
    if (!total) return dataSource;
    const newDataSource = getSummaryData(newConfigs, dataSource, totalPrecision, totalLineKey);
    return newDataSource;
  }

  // 获取 Table rowClassName 属性
  // 在表格配置都是 text 时，
  // 取消表单元素 margin-bottom 属性
  // 样式采用 less 调整
  getTableRowClassName = () => {
    const { configs, tableApi = {} } = this.props;
    const { rowClassName = '' } = tableApi;
    let newRowClassName = rowClassName;

    const notAllText = configs.some(val => {
      const { config = {} } = val;
      return config.type !== 'text';
    })

    if (!notAllText) {
      newRowClassName += ' no-margin-bottom';
    }

    return newRowClassName;
  }

  render() {
    const { tableApi } = this.props;
    const newColumns = this.getTableColumns();
    const newDataSource = this.getTableDataSource();

    return (
      <Table
        bordered
        {...tableApi}
        columns={newColumns}
        dataSource={newDataSource}
        rowClassName={this.getTableRowClassName}
      />
    )
  }
}

KSummaryTable.propTypes = {
  configs: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    config: propTypes.shape({
      type: propTypes.string.isRequired,
      api: propTypes.object,
      ext: propTypes.object,
    }),
    params: propTypes.shape({
      title: propTypes.string.isRequired,
      width: propTypes.string,
      total: propTypes.boolean,
      render: propTypes.string,
    }),
  })),
  dataSource: propTypes.array.isRequired,
  onChange: propTypes.func,
  tableApi: propTypes.object,
  total: propTypes.bool,
  totalPrecision: propTypes.number,
  totalLineKey: propTypes.string,
  sort: propTypes.bool,
};

export default KSummaryTable;
