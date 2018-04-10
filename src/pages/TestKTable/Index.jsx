import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Form } from 'antd';

import KTable from '../../components/KForm/KTable.jsx';
import * as CONFIG_TABLE from './common/';

class TestKTable extends Component {

  static defaultProps = {
  }

  onChange = ({ id, value, order }) => {
    actions._report.updateKTable({ id, value, order })
  }

  render() {
    const { values } = this.props;

    return (
      <div style={{ padding: 16 }}>
        <KTable
          configs={CONFIG_TABLE.Assess}
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

const Wraper = Form.create()(TestKTable);

export default Wraper;
