/**
 * 详情页
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';

import KForm from '../KForm/KForm.jsx';
import KSummaryTable from '../KSummaryTable/KSummaryTable.jsx';

export default class KDetail extends Component {

  static defaultProps = {
    mode: 'inner',
    configs: [],
    dataSource: [],
  }

  render() {
    return (
      <div>

      </div>
    )
  }

}

KDetail.propTypes = {
  mode: propTypes.string,
  configs: propTypes.shape({
    type: propTypes.string.isRequired,
    typeConfig: propTypes.object,
    contentConfig: propTypes.shape({
      label: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      path: propTypes.string.isRequired,
    })
  }),
  dataSource: propTypes.object.isRequired,
}
