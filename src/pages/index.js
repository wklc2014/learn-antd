import React from 'react';
import propTypes from 'prop-types';
import Link from 'umi/link';

export default function Index () {

  return (
    <div>
      <p>Index</p>
      <p><Link to="/users">Example</Link></p>
    </div>
  )
}

Index.propTypes = {

}

Index.defaultProps = {

}
