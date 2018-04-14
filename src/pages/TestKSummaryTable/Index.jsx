import React, { Component } from 'react';
import { actions, connect } from 'mirrorx';
import { Form } from 'antd';

import KSummaryTable from '../../components/KSummaryTable/KSummaryTable.jsx';
import configs from './common/index.js';

class Index extends Component {

  static defaultProps = {
  }

  onChange = ({ id, value, order }) => {
    actions._report.updateKTotalTable({ id, value, order })
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

const Wraper = Form.create()(Index);


function mapStateToProps(state, ownProps) {
  return {
    values: state._report.k_summary_table,
  }
}

export default connect(mapStateToProps)(Wraper);
