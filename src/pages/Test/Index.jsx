/**
 * 测试
 */
import React, { Component } from 'react';
// import propTypes from 'prop-types';

export default class Test extends Component {

  static defaultProps = {}

  componentDidMount() {
    const obj = {
      class: 'abc',
      age: {
        name: 'chengDu',
      }
    }

    console.log('obj>>>', obj);

    const a = (obj.class && obj.class.name) || 'none';
    const b = obj.age && obj.age.name;
    console.log('a>>>', a);
    console.log('b>>>', b);

    const t = typeof obj.toString
    console.log('t>>>', t);

  }

  render() {
    return (
      <div>

      </div>
    )
  }

}

Test.propTypes = {

}
