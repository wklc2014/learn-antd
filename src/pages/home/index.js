import React from 'react';
import propTypes from 'prop-types';
// import Demo from '../../components/hform/v3/example_demo.js';
import Demo from '../../components/hform/v4/example_demo.js';

function Home(props) {

  const { } = props;

  return (
    <div style={{ padding: 16 }}>
      <Demo />
    </div>
  )
}

Home.propTypes = {

}

Home.defaultProps = {

}

export default Home;
