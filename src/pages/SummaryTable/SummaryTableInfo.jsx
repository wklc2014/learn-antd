import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { Card, Table } from 'antd';

import {
  getColumns,
  __HSummaryTableApi,
  __HSummaryTableConfigsApi,
  __HSummaryTableConfigsParamsApi,
} from './common/index.js';

export default class FormConfigInfo extends Component {

  static defaultProps = {}

  render() {
    const box_style = { marginBottom: 16 };
    const commonTableProps = {
      rowKey: record => record.id,
      bordered: true,
      pagination: false,
    }

    return (
      <div>
        <div style={box_style}>
          <Card title="简介">
            <p>在 Antd Table 组件为基础，增加编辑和汇总功能，编辑功能以 HFormItem 组件作为输入。</p>
          </Card>
        </div>
        <div style={box_style}>
          <Card title="API">
            <div style={box_style}>
              <h3>HSummaryTable</h3>
              <Table
                {...commonTableProps}
                columns={getColumns()}
                dataSource={__HSummaryTableApi}
              />
            </div>
            <div style={box_style}>
              <h3>HSummaryTable.configs</h3>
              <div style={box_style}>
                <Table
                  {...commonTableProps}
                  columns={getColumns()}
                  dataSource={__HSummaryTableConfigsApi}
                />
              </div>
              <p>其中 HSummaryTable.configs.config 和 HForm.configs.config 一致，但只能是对象。</p>
              <p>其中 HSummaryTable.configs.extMap 和 HForm.configs.extMap 一致，但一般不需要配置，作为预留未来功能配置。</p>
            </div>
            <div style={box_style}>
              <h3>HSummaryTable.configs.params</h3>
              <Table
                {...commonTableProps}
                columns={getColumns()}
                dataSource={__HSummaryTableConfigsParamsApi}
              />
            </div>
          </Card>
        </div>
      </div>
    )
  }

}

FormConfigInfo.propTypes = {

}
