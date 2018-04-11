import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Table } from 'antd';
import KFormItem from '../KForm/KFormItem.jsx';

import getSortedConfigs from '../KForm/common/getSortedConfigs.js';

class KTotalTable extends Component {

  static defaultProps = {
    configs: [],
  }

  getTableColumns = () => {
    const { configs, form, isSort } = this.props;
    const newConfigs = getSortedConfigs(isSort, configs);
    const newColumns = [];
    newConfigs.forEach((val, i) => {
      const { tableParams, config } = val;
      const { width, title, isHide } = tableParams;
      if (!isHide) {
        newColumns.push({
          key: `KTotalTable-${i}`,
          width,
          title,
          dataIndex: config.id,
          render: (text, record) => {
            switch (record.key) {
              case 'ts':
                return text;
              default:
                const KFormItemProps = {
                  form,
                  config: {
                    ...config,
                    id: `${config.id}__${record.key}`,
                  },
                  onChange: ({ id, value }) => {
                    this.props.onChange({
                      id: id.split('__')[0],
                      value,
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
      }
    })

    return newColumns;
  }

  getTableDataSource = () => {
    const { dataSource, configs, isTotal, isSort } = this.props;
    if (!isTotal || !dataSource.length) {
      return dataSource;
    }
    let newDataSource = [...dataSource];
    const newConfigs = getSortedConfigs(isSort, configs);
    const totalData = {};
    newConfigs.forEach((val, i) => {
      const { config, tableParams } = val;
      if (tableParams.eval) {
        newDataSource = newDataSource.map((m) => {
          // eslint-disable-next-line
          const evalText = eval(tableParams.eval.replace(/\$/g, 'm'));
          if (!isNaN(evalText)) {
            m[config.id] = parseFloat(evalText).toFixed(2);
          }
          return m;
        })
      }
      if (tableParams.total) {
        totalData[config.id] = 0;
      }
    });
    Object.keys(totalData).forEach((m) => {
      dataSource.forEach((v) => {
        if (v[m]) {
          totalData[m] += parseFloat(v[m]);
        }
      });
    });
    const newTotalData = {...totalData};
    Object.keys(totalData).forEach((m) => {
      newTotalData[m] = parseFloat(totalData[m]).toFixed(2);
    })
    newDataSource.push({ key: 'ts', ...newTotalData });
    // console.log(JSON.stringify(newDataSource))
    return newDataSource;
  }

  getTableRowClassName = () => {
    const { configs } = this.props;
    const notAllText = configs.some(val => {
      const { config = {} } = val;
      return config.type !== 'text';
    })
    return notAllText ? '' : 'no-margin-bottom';
  }

  render() {
    const { pagination } = this.props;
    const newColumns = this.getTableColumns();
    const newDataSource = this.getTableDataSource();

    return (
      <Table
        pagination={pagination}
        columns={newColumns}
        dataSource={newDataSource}
        bordered
        rowClassName={this.getTableRowClassName}
      />
    )
  }
}


KTotalTable.propTypes = {
  form: propTypes.object,
  configs: propTypes.arrayOf(propTypes.shape({
    tableParams: propTypes.object.isRequired,
    config: propTypes.object.isRequired,
  })),
  dataSource: propTypes.array.isRequired,
  onChange: propTypes.func,
  isSort: propTypes.bool,
  isTotal: propTypes.bool,
};

export default KTotalTable;
