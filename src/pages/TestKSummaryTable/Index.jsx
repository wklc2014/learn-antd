import React, { Component } from 'react';
import { actions, connect } from 'mirrorx';
import { Form } from 'antd';

import KSummaryTable from '../../components/KSummaryTable/KSummaryTable.jsx';
import configs from './common/index.js';

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
          form={this.props.form}
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

const Wraper = Form.create()(TestKSummaryTable);

export default connect(mapStateToProps)(Wraper);
