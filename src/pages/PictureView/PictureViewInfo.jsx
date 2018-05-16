import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { Card, Table } from 'antd';

import {
  getColumns,
  __HPictureViewApi,
} from './common/index.js';

export default class PictureViewInfo extends Component {

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
            <p>显示单张图片，支持旋转、缩放，鼠标缩放，alt + 鼠标旋转，重置功能</p>
          </Card>
        </div>
        <div style={box_style}>
          <Card title="API">
            <div style={box_style}>
              <h3>HPictureView</h3>
              <Table
                {...commonTableProps}
                columns={getColumns()}
                dataSource={__HPictureViewApi}
              />
            </div>
          </Card>
        </div>
      </div>
    )
  }

}

PictureViewInfo.propTypes = {

}
