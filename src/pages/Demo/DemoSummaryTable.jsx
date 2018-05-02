import React, { Component } from 'react';
import { actions, connect } from 'mirrorx';
import { Card } from 'antd';

import KSummaryTable from '../../components/KSummaryTable/KSummaryTable.jsx';
import configs from './common/kSummaryTableConfig.js';

class TestKSummaryTable extends Component {

  static defaultProps = {
  }

  onChange = ({ id, value, type, order }) => {
    // console.log(id, value, type, order);
    actions._summary.updateDataSource({ id, value, order })
  }

  render() {
    const { values } = this.props;

    return (
      <Card>
        <KSummaryTable
          configs={configs}
          dataSource={values}
          onChange={this.onChange}
          pagination={false}
          total
        />
      </Card>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    values: state._summary.dataSource,
  }
}

export default connect(mapStateToProps)(TestKSummaryTable);
