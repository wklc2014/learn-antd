import React, { Component } from 'react';
import { actions } from 'mirrorx';

import TestHFormContent from './TestHFormContent.jsx';

class TestHForm extends Component {

  static defaultProps = {
  }

  constructor(props) {
    super(props);
    this.state = {
      values: {},
    }
  }

  onChange = ({ id, value }) => {
    actions._report.updateHForm({ [id]: value })
  }

  onReset = () => {
    actions._report.resetHForm();
  }

  render() {
    // const { values } = this.state;
    const { values } = this.props;
    return (
      <TestHFormContent
        values={values}
        onChange={this.onChange}
        onReset={this.onReset}
      />
    )
  }
}

export default TestHForm;
