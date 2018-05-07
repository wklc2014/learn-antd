/**
 * 配合 FormItem 生成的汇总表格
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
// import is from 'is_js';
import classnames from 'classnames';
import { Table } from 'antd';

import HFormItem from '../HForm/HFormItem.jsx';
import getSummaryData from './common/getSummaryData.js';
import checkTypesIsAllText from '../HForm/common/checkTypesIsAllText.js';

import './styles.less';

class KSummaryTable extends Component {

  static defaultProps = {
    /**
     * 表格头配置
     * @type {Array}
     */
    configs: [],

    /**
     * 是否汇总
     * @type {Boolean}
     */
    total: true,

    /**
     * 汇总精度
     * @type {Number}
     */
    totalPrecision: 2,

    /**
     * 汇总行的 key
     * @type {String}
     */
    totalLineKey: 'ts',

    /**
     * antd 表格默认配置
     * @type {Object}
     */
    tableApi: {},

    /**
     * 表格数据
     * @type {Object}
     */
    dataSource: {},

    /**
     * 可控表单搜集表单值的 onChange 事件
     * @type {func}
     */
    onChange: () => {},
  }

  // 获取 Table columns 属性
  getTableColumns = () => {
    const { configs, totalLineKey } = this.props;
    return configs.filter(val => {
      // 过滤出隐藏的表格列
      const { params = {} } = val;
      const { isHide } = params;
      return !isHide;
    }).map((val, i) => {
      const { params = {}, config } = val;
      const { width, title } = params;
      return {
        key: `HSummaryTable-${i}`,
        width,
        title,
        dataIndex: config.id,
        render: (text, record) => {
          if (record.key === totalLineKey) return text;
          const HFormItemProps = {
            config,
            params: {
              ...params,
              layout: null,
            },
            onChange: ({ id, value, type }) => {
              this.props.onChange({ id, value, line: record.key });
            },
            values: record,
          }
          return <HFormItem {...HFormItemProps} />;
        }
      }
    });
  }

  // 获取 Table dataSource 属性
  getTableDataSource = () => {
    const { configs, dataSource, total, totalPrecision, totalLineKey } = this.props;
    if (!total) return dataSource;
    const newDataSource = getSummaryData(configs, dataSource, totalPrecision, totalLineKey);
    return newDataSource;
  }

  // 获取 Table rowClassName 属性
  // 在表格配置都是 text 时，
  // 取消表单元素 margin-bottom 属性
  // 样式采用 less 调整
  getTableRowClassName = () => {
    const { configs, tableApi = {} } = this.props;
    const { rowClassName = '' } = tableApi;

    const cls = classnames({
      [rowClassName]: true,
      'my-hsummarytable': checkTypesIsAllText(configs)
    });

    return cls;
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
  configss: propTypes.arrayOf(propTypes.shape({
    config: propTypes.object,
    params: propTypes.object,
  })),
  dataSource: propTypes.array.isRequired,
  onChange: propTypes.func,
  tableApi: propTypes.object,
  total: propTypes.bool,
  totalPrecision: propTypes.number,
  totalLineKey: propTypes.string,
};

export default KSummaryTable;
