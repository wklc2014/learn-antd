import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { Card, Table } from 'antd';

import {
  getColumns,
  __HFormApi,
  __HFormConfigsApi,
  __HFormConfigsConfigApi,
  __HFormConfigsConfigExtApi,
  __HFormConfigsExtMapApi,
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
            <p>通过一个数组，快速生成一个表单组，支持包括但不局限于 antd 支持的表单输入类型，</p>
          </Card>
        </div>
        <div style={box_style}>
          <Card title="API">
            <div style={box_style}>
              <h3>HForm</h3>
              <Table
                {...commonTableProps}
                columns={getColumns()}
                dataSource={__HFormApi}
              />
            </div>
            <div style={box_style}>
              <h3>HForm.configs</h3>
              <p>HForm.configs 是一个数组，该数组中每个元素都是一个对象</p>
              <Table
                {...commonTableProps}
                columns={getColumns()}
                dataSource={__HFormConfigsApi}
              />
            </div>
            <div style={box_style}>
              <h3>HForm.configs.extMap</h3>
              <Table
                {...commonTableProps}
                columns={getColumns('extMap_')}
                dataSource={__HFormConfigsExtMapApi}
              />
            </div>
            <div style={box_style}>
              <h3>HForm.configs.config</h3>
              <p>可以是 object 或 array，如果是 object，则采用以下配置，如果是 array，则数据每个元素都采用以下配置</p>
              <Table
                {...commonTableProps}
                columns={getColumns('config_')}
                dataSource={__HFormConfigsConfigApi}
              />
            </div>
            <div style={box_style}>
              <h3>HForm.config.api</h3>
              <p>HForm.config.api 支持 antd 和 HTML 支持的各种 api。</p>
            </div>
            <div style={box_style}>
              <h3>HForm.config.ext</h3>
              <Table
                {...commonTableProps}
                columns={getColumns('ext_')}
                dataSource={__HFormConfigsConfigExtApi}
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
