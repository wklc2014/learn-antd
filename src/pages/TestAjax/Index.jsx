import React, { Component } from 'react';
import { actions, connect } from 'mirrorx';
import { Button, Form, Table } from 'antd';

import KForm from '../../components/KForm/KForm.jsx';
import { search_query, search_result } from './common/index.js';

class TestAjax extends Component {

  static defaultProps = {}

  onSubmit = () => {
    actions._ajax.getUser();
  }

  onChange = ({ id, value, item }) => {
    actions._ajax.updateValues({ [id]: value });
  }

  onReset = () => {
    actions._ajax.update({ values: {} });
    const ids = search_query.map((val => val.config.id));
    this.inst.props.form.resetValues(ids);
  }

  render() {
    const { values, dataSource } = this.props;

    return (
      <div style={{ padding: 16 }}>
        <div>
          <KForm
            form={this.props.form}
            wrappedComponentRef={(inst) => this.instance = inst}
            configs={search_query}
            onChange={this.onChange}
            values={values}
            columns={3}
          />
        </div>
        <div style={{ textAlign: 'right', marginBottom: 24 }}>
          <Button onClick={this.onReset} style={{ marginRight: 8 }}>重置</Button>
          <Button onClick={this.onSubmit} type="primary">提交</Button>
        </div>
        <div>
          <Table
            columns={search_result}
            dataSource={dataSource}
            bordered
          />
        </div>
      </div>
    )
  }
}

TestAjax.propTypes = {

}

function mapStateToProps(state, ownProps) {
  return {
    dataSource: state._ajax.dataSource,
    values: state._ajax.values,
  }
}

const Wraper = Form.create()(TestAjax);

export default connect(mapStateToProps)(Wraper);
