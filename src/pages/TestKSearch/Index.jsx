import React, { Component } from 'react';
import propTypes from 'prop-types';
import { actions, connect } from 'mirrorx';

import KSearch from '../../components/KSearch/KSearch.jsx';

import { search_query, search_result } from './common/index.js';

const divStyle = {
  padding: 16,
}

class Index extends Component {

  static defaultProps = {}

  onSubmit = () => {
    console.log('this.inst>>>', this.inst);
    actions._example.getUser();
  }

  render() {
    const { values, list } = this.props;

    return (
      <div style={divStyle}>
        <KSearch
          formConfigs={search_query}
          tableConfigs={search_result}
          defaultValues={values}
          tableValues={list}
          onSubmit={this.onSubmit}
          inst={inst => this.inst = inst}
        />
      </div>
    )
  }

}

Index.propTypes = {

}

function mapStateToProps(state, ownProps) {
  return {
    list: state._example.list,
    values: state._example.values,
  }
}

export default connect(mapStateToProps)(Index);
