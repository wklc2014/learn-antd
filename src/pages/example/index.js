import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import propTypes from 'prop-types';
import { Button, Card } from 'antd';

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

  const cityListEle = props.list.map((d, i) => {
    const text = `${d.name} - ${d.sex}`;
    return (
      <li key={i}>{text}</li>
    )
  })

  return (
    <Card title="测试页面">
      <p>Example Page</p>
      <p><Link to="/">返回首页</Link></p>
      <p>{props.count}</p>
      <p>
        <Button type="primary" onClick={increase}>增加</Button>
      </p>
      <p>
        <Button type="primary" onClick={reduce}>减少</Button>
      </p>
      <ol>{cityListEle}</ol>
    </Card>
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
