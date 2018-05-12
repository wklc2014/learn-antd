import React, { Component } from 'react';
import { actions } from 'mirrorx';
// import propTypes from 'prop-types';
import { Button } from 'antd';

export default class Index extends Component {

  static defaultProps = {}

  handleClick = () => {
    actions.routing.push('/demo/form');
  }

  render() {
    return (
      <div>
          <p>home</p>
          <p>
            <Button type="primary" onClick={this.handleClick}>HForm</Button>
          </p>
      </div>
    )
  }

}

Index.propTypes = {

}
