import React, { Component } from 'react';
import { actions, connect } from 'mirrorx';
import { Card } from 'antd';

import KSummaryTable from '../../components/KSummaryTable/Index.jsx';
import configs from './common/ConfigSummaryTable.js';

class DemoSummaryTable extends Component {

  static defaultProps = {
  }

  onChange = ({ id, value, line }) => {
    // console.log(id, value, line);
    actions._summary.updateDataSource({ id, value, line });
  }

  render() {
    const { values } = this.props;

    return (
      <Card>
        <KSummaryTable
          configs={configs}
          dataSource={values}
          total
          tableApi={{
            pagination: false,
          }}
          onChange={this.onChange}
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

export default connect(mapStateToProps)(DemoSummaryTable);
