import React from 'react';
import { Card, Table } from 'antd';

import {
  getColumns,
  _hFormApi,
  _hFormConfigsApi,
  _hFormConfigsConfigApi,
  _hFormConfigsConfigExtApi,
  _hFormConfigsExtMapApi,
} from './common/index.js';

export default function Intro(props) {

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
              dataSource={_hFormApi}
            />
          </div>
          <div style={box_style}>
            <h3>HForm.configs</h3>
            <p>HForm.configs 是一个数组，该数组中每个元素都是一个对象</p>
            <Table
              {...commonTableProps}
              columns={getColumns()}
              dataSource={_hFormConfigsApi}
            />
          </div>
          <div style={box_style}>
            <h3>HForm.configs.extMap</h3>
            <Table
              {...commonTableProps}
              columns={getColumns('extMap_')}
              dataSource={_hFormConfigsExtMapApi}
            />
          </div>
          <div style={box_style}>
            <h3>HForm.configs.config</h3>
            <p>可以是 object 或 array，如果是 object，
            则采用以下配置，如果是 array，则数据每个元素都采用以下配置</p>
            <Table
              {...commonTableProps}
              columns={getColumns('config_')}
              dataSource={_hFormConfigsConfigApi}
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
              dataSource={_hFormConfigsConfigExtApi}
            />
          </div>
        </Card>
      </div>
    </div>
  )

}

Intro.propTypes = {

}
