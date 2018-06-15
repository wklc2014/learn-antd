import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { Card } from 'antd';

export default class QueryInfo extends Component {

  static defaultProps = {}

  render() {
    const box_style = { marginBottom: 16 };

    return (
      <div>
        <div style={box_style}>
          <Card title="简介">
            <p>通过 HForm 组件和 antd Table 组件组合而成。</p>
          </Card>
        </div>
      </div>
    )
  }

}

QueryInfo.propTypes = {

}
