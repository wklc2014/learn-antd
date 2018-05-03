import React, { Component } from 'react';
// import propTypes from 'prop-types';

import KDetail from '../../components/KDetail/KDetail.jsx';
import { __detailConfig, __detailDataSource } from './common/ConfigDetail.js';

export default class DemoKDetail extends Component {

  static defaultProps = {}

  render() {
    return (
      <div>
        <KDetail
          configs={__detailConfig}
          dataSource={__detailDataSource}
        />
      </div>
    )
  }

}

DemoKDetail.propTypes = {

}
