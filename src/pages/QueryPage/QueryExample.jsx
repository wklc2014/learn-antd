import React, { Component } from 'react';
import { actions, connect } from 'mirrorx';
import { Button, Form, Table, Card } from 'antd';

import HForm from '../../components/HForm/HForm.jsx';
import { __QueryFields, __QueryResult } from './common/__ConfigQuery.js';

class QueryExample extends Component {

  static defaultProps = {}

  onSubmit = () => {
    actions._ajax.getUser();
  }

  onChange = ({ id, value, item }) => {
    actions._ajax.updateValues({ [id]: value });
  }

  onReset = () => {
    actions._ajax.update({ values: {} });
  }

  render() {
    const { values, dataSource } = this.props;

    return (
      <Card title="模型系统">
        <div>
          <HForm
            configs={__QueryFields}
            cols={3}
            onChange={this.onChange}
            values={values}
          />
        </div>
        <div style={{ textAlign: 'right', marginBottom: 24 }}>
          <Button onClick={this.onReset} style={{ marginRight: 8 }}>重置</Button>
          <Button onClick={this.onSubmit} type="primary">提交</Button>
        </div>
        <div>
          <Table
            columns={__QueryResult}
            dataSource={dataSource}
            bordered
          />
        </div>
      </Card>
    )
  }
}

QueryExample.propTypes = {

}

function mapStateToProps(state, ownProps) {
  return {
    dataSource: state._ajax.dataSource,
    values: state._ajax.values,
  }
}

const Wraper = Form.create()(QueryExample);

export default connect(mapStateToProps)(Wraper);
