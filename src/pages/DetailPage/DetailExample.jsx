import React, { Component } from 'react';
// import propTypes from 'prop-types';

import HDetail from '../../components/HDetail/HDetail.jsx';
import { __detailConfig, __detailDataSource } from './common/__ConfigDetail.js';

export default class DetailExample extends Component {

  static defaultProps = {}

  render() {
    return (
      <div>
        <HDetail
          configs={__detailConfig}
          dataSource={__detailDataSource}
        />
      </div>
    )
  }

}

DetailExample.propTypes = {

}
