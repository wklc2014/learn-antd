/**
 * 测试 HDisplay 组件
 */
import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { Button, Card } from 'antd';

import HDisplay from '../../components/HDisplay/HDisplay.jsx';

export default class TestHDisplay extends Component {

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      display: false,
    }
  }

  handleClick = () => {
    this.setState({ display: !this.state.display });
  }

  render() {

    const { display } = this.state;

    return (
      <div>
        <Card>
          <div>
            <Button onClick={this.handleClick}>切换</Button>
          </div>
          <HDisplay condition={display}>
            <span>123</span>
            视点服饰店
          </HDisplay>
        </Card>
      </div>
    )
  }

}

TestHDisplay.propTypes = {

}
