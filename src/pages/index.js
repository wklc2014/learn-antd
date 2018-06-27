import React from 'react';
import Link from 'umi/link';

export default function Index () {

  return (
    <div>
      <p>Index</p>
      <p><Link to="/example">Example</Link></p>
    </div>
  )
}

Index.propTypes = {

}

Index.defaultProps = {

}
