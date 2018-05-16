import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { Card, Table } from 'antd';

import {
  getColumns,
  __HDetailApi,
  __HDetailConfigsApi,
} from './common/index.js';

export default class DetailInfo extends Component {

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
            <p>通过配置文件，快速展示一个详情页面</p>
          </Card>
        </div>
        <div style={box_style}>
          <Card title="API">
            <div style={box_style}>
              <h3>HDetail</h3>
              <Table
                {...commonTableProps}
                columns={getColumns()}
                dataSource={__HDetailApi}
              />
            </div>
            <div style={box_style}>
              <h3>HDetail.configs</h3>
              <Table
                {...commonTableProps}
                columns={getColumns()}
                dataSource={__HDetailConfigsApi}
              />
            </div>
          </Card>
        </div>
      </div>
    )
  }

}

DetailInfo.propTypes = {

}
