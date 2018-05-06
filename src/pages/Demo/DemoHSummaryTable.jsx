import React, { Component } from 'react';
import { actions, connect } from 'mirrorx';
import { Card } from 'antd';

import HSummaryTable from '../../components/HSummaryTable/HSummaryTable.jsx';
import configs from './common/__ConfigSummaryTable.js';

class TestHSummaryTable extends Component {

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
        <HSummaryTable
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

export default connect(mapStateToProps)(TestHSummaryTable);
