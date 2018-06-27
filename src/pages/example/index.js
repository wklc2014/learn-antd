import React from 'react';
import { connect } from 'dva';
import propTypes from 'prop-types';
import { Button } from 'antd';

function Index(props) {

  function increase() {
    props.dispatch({
      type: 'example/increase',
    })
  }

  function reduce() {
    props.dispatch({
      type: 'example/reduce',
    })
  }

  const divStyle = {
    padding: 16,
  }

  const cityListEle = props.list.map((d, i) => {
    const text = `${d.name} - ${d.sex}`;
    return (
      <li key={i}>{text}</li>
    )
  })

  return (
    <div style={divStyle}>
      <p>Example Page</p>
      <p>{props.count}</p>
      <p>
        <Button type="primary" onClick={increase}>增加</Button>
      </p>
      <p>
        <Button type="primary" onClick={reduce}>减少</Button>
      </p>
      <ul>{cityListEle}</ul>
    </div>
  )
}

Index.propTypes = {
  count: propTypes.number,
  list: propTypes.array,
}

Index.defaultProps = {
  count: 0,
  list: [],
}

function mapStateToProps(state) {
  const { example } = state;
  return {
    count: example.count,
    list: example.list,
  }
}

export default connect(mapStateToProps)(Index);
