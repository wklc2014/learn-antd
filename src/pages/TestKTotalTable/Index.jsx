import React, { Component } from 'react';
import { actions, connect } from 'mirrorx';
import { Form } from 'antd';

import KTotalTable from '../../components/KTotalTable/KTotalTable.jsx';
import configs from './common/index.js';

class TestKTotalTable extends Component {

  static defaultProps = {
  }

  onChange = ({ id, value, order }) => {
    actions._report.updateKTotalTable({ id, value, order })
  }

  render() {
    const { values } = this.props;

    return (
      <div style={{ padding: 16 }}>
        <KTotalTable
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

const Wraper = Form.create()(TestKTotalTable);


function mapStateToProps(state, ownProps) {
  return {
    values: state._report.k_total_table,
  }
}

export default connect(mapStateToProps)(Wraper);
