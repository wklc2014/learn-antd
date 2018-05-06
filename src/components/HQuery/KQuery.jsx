import React, { Component } from 'react';
import propTypes from 'prop-types';

import KForm from '../KForm/KForm.jsx';

export default class KQuery extends Component {

  static defaultProps = {
    // 模式
    mode: 'outer', // inner
    // 盒子样式
    boxStyle: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
      dataSource: [],
    }
  }

  onChange = ({ id, value, type }) => {
    this.props.onChange();
    const { formValues } = this.state;
    this.setState({
      formValues: { ...formValues, [id]: value };
    });
  }

  onReset = () => {
    this.setState({ formValues: {} });
  }

  onSubmit = () => {

  }

  render() {
    const { formConfig, formProps, tableConfig, tableProps } = this.props;
    const { formValues, dataSource } = this.state;

    return (
      <section style={boxStyle}>
        <div>
          <KForm
            {...formProps}
            configs={formConfig}
            onChange={this.onChange}
            values={formValues}
          />
        </div>
        <div style={{ textAlign: 'right', marginBottom: 24 }}>
          <Button onClick={this.onReset} style={{ marginRight: 8 }}>重置</Button>
          <Button onClick={this.onSubmit} type="primary">提交</Button>
        </div>
        <div>
          <Table
            bordered
            {...tableProps}
            columns={tableConfig}
            dataSource={dataSource}
          />
        </div>
      </section>
    )
  }

}

KQuery.propTypes = {
  formConfig: propTypes.array.isRequired,
  tableConfig: propTypes.array.isRequired,
  formProps: propTypes.object,
  tableProps: propTypes.object,
  onSubmit: propTypes.func.isRequired,
  onReset: propTypes.func,
  onChange: propTypes.func,
}
