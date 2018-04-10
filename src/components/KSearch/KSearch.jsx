import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form, Button, Table } from 'antd';

import KForm from '../KForm/KForm.jsx';
import KTable from '../KForm/KTable.jsx';

class KSearch extends Component {

  static defaultProps = {
    formConfigs: [],
    formValues: {},
    formSpace: 16,
    formColumns: 3,

    formStyle: {},
    btnStyle: {},
    tableStyle: {},

    tablePagination: {},
    tableConfigs: [],
    tableValues: [],
  }

  constructor(props) {
    super(props);
    const { formValues } = props;
    this.state = {
      values: {...formValues},
      resultValues: [],
    }
  }

  getConfigIds = (config = []) => {
    return config.map(val => val.config.id);
  }

  onReset = () => {
    const { formValues, formConfigs } = this.props;
    this.setState({ values: {...formValues} }, () => {
      const IDs = this.getConfigIds(formConfigs);
      this.props.form.resetFields(IDs);
    });
  }

  onChange = ({ id, value }) => {
    this.setState({ values: { ...this.state.values, [id]: value } });
  }

  render() {
    const {
      formConfigs,
      formSpace,
      formColumns,

      onSubmit,

      btnStyle,
      formStyle,
      tableStyle,

      tablePagination,
      tableConfigs,
      tableValues,
    } = this.props;

    const { values } = this.state;

    return (
      <div>
        <div style={formStyle}>
          <KForm
            form={this.props.form}
            wrappedComponentRef={(inst) => this.instance = inst}
            configs={formConfigs}
            columns={formColumns}
            spacing={formSpace}
            onChange={this.onChange}
            values={values}
          />
        </div>
        <div style={{ ...btnStyle, textAlign: 'right' }}>
          <Button onClick={this.onReset} style={{ marginRight: 8 }}>重置</Button>
          <Button onClick={onSubmit} type="primary">提交</Button>
        </div>
        <div style={{ paddingTop: 16, ...tableStyle }}>
          <KTable
            form={this.props.form}
            configs={tableConfigs}
            dataSource={tableValues}
            pagination={tablePagination}
          />
        </div>
      </div>
    )
  }

}

KSearch.propTypes = {
  formConfigs: propTypes.array,
  formValues: propTypes.object,
  formColumns: propTypes.number,
  formSpace: propTypes.number,

  onSubmit: propTypes.func.isRequired,

  formStyle: propTypes.object,
  btnStyle: propTypes.object,
  tableStyle: propTypes.object,

  tablePagination: propTypes.object,
  tableConfigs: propTypes.array,
  tableValues: propTypes.array,
}

export default Form.create()(KSearch);
