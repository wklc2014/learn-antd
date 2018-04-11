import React, { Component } from 'react';
import { actions, connect } from 'mirrorx';

import TestKFormContent from './TestKFormContent.jsx';

class Index extends Component {

  static defaultProps = {
  }

  constructor(props) {
    super(props);
    this.state = {
      values: {},
    }
  }

  onChange = ({ id, value, item }) => {
    console.log('{ id, value }>>>', JSON.stringify({ id, value, item }));
    actions._report.updateKForm({ [id]: value })
  }

  onReset = () => {
    actions._report.resetKForm();
  }

  render() {
    // const { values } = this.state;
    const { values } = this.props;
    return (
      <TestKFormContent
        values={values}
        onChange={this.onChange}
        onReset={this.onReset}
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    values: state._report.k_form,
  }
}

export default connect(mapStateToProps)(Index);
