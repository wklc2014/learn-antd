import React, { Component } from 'react';
import { actions, connect } from 'mirrorx';

import Content from './Content.jsx';

class TestKForm extends Component {

  static defaultProps = {
  }

  constructor(props) {
    super(props);
    this.state = {
      values: {},
    }
  }

  onChange = ({ id, value, type }) => {
    console.log('{ id, value }>>>', JSON.stringify({ id, value, type }));
    actions._form.updateValues({ [id]: value })
  }

  onReset = () => {
    actions._form.resetValues();
  }

  render() {
    // const { values } = this.state;
    const { values } = this.props;
    return (
      <Content
        values={values}
        onChange={this.onChange}
        onReset={this.onReset}
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    values: state._form.values,
  }
}

export default connect(mapStateToProps)(TestKForm);
