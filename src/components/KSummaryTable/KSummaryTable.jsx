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
    // 是否汇总
    isTotal: true,
    // 是否排序
    isSort: false,
    // antd 表格默认参数
    params: {},
  }

  // 获取 Table columns 属性
  getTableColumns = () => {
    const { configs, form, isSort } = this.props;
    const newConfigs = getSortedConfigs(isSort, configs);
    const newColumns = newConfigs.filter(val => {
      const { tableParams } = val;
      const { isHide } = tableParams;
      return !isHide;
    }).map((val, i) => {
      const { tableParams, config } = val;
      const { width, title } = tableParams;
      return {
        key: `KSummaryTable-${i}`,
        width,
        title,
        dataIndex: config.id,
        render: (text, record) => {
          if (record.key === 'ts') {
            return text;
          }
          const KFormItemProps = {
            form,
            config: {
              ...config,
              id: `${config.id}__${record.key}`,
            },
            onChange: ({ id, value }) => {
              this.props.onChange({
                id: id.split('__')[0],
                value: value.base,
                order: record.key,
              });
            },
            formItemLayout: null,
            value: { base: text },
          }
          return <KFormItem {...KFormItemProps} />;
        }
      }
    });
    return newColumns;
  }

  // 获取 Table dataSource 属性
  getTableDataSource = () => {
    const { dataSource, configs, isTotal, isSort } = this.props;
    if (!isTotal || !dataSource.length) {
      return dataSource;
    }
    const newConfigs = getSortedConfigs(isSort, configs);
    const newDataSource = getSummaryData(newConfigs, dataSource);
    return newDataSource;
  }

  // 获取 Table rowClassName 属性
  // 在表格配置都是 text 时，
  // 取消表单元素 margin-bottom 属性
  // 样式采用 less 调整
  getTableRowClassName = () => {
    const { configs, params = {} } = this.props;
    const { rowClassName = '' } = params;
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
    const { params } = this.props;
    const newColumns = this.getTableColumns();
    const newDataSource = this.getTableDataSource();

    return (
      <Table
        bordered
        {...params}
        columns={newColumns}
        dataSource={newDataSource}
        rowClassName={this.getTableRowClassName}
      />
    )
  }
}

KSummaryTable.propTypes = {
  form: propTypes.object,
  configs: propTypes.arrayOf(propTypes.shape({
    tableParams: propTypes.shape({
      title: propTypes.string.isRequired,
      total: propTypes.boolean,
      width: propTypes.string,
      render: propTypes.string,
    }),
    config: propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      params: propTypes.object,
      options: propTypes.object,
      extMap: propTypes.object,
    }),
  })),
  dataSource: propTypes.array.isRequired,
  params: propTypes.object,
  onChange: propTypes.func,
  isSort: propTypes.bool,
  isTotal: propTypes.bool,
};

export default KSummaryTable;
