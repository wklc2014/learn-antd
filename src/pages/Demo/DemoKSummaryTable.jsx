import React, { Component } from 'react';
import { actions, connect } from 'mirrorx';

import KSummaryTable from '../../components/KSummaryTable/KSummaryTable.jsx';
import configs from './common/kSummaryTableConfig.js';

class TestKSummaryTable extends Component {

  static defaultProps = {
  }

  onChange = ({ id, value, order }) => {
    actions._summary.updateDataSource({ id, value, order })
  }

  render() {
    const { values } = this.props;

    return (
      <div style={{ padding: 16 }}>
        <KSummaryTable
          configs={configs}
          dataSource={values}
          onChange={this.onChange}
          pagination={false}
          isTotal
        />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    values: state._summary.dataSource,
  }
}

export default connect(mapStateToProps)(TestKSummaryTable);
