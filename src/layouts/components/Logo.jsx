/**
 * logo
 */
import React from 'react';
import propTypes from 'prop-types';
import Link from 'umi/link';

export default function Logo(props) {
  const { collapsed } = props;
  const text = collapsed ? 'antd' : 'learn-antd';
  return (
    <section className="logo-wraper">
      <Link to="/" className="logo">{text}</Link>
    </section>
  )
}

Logo.propTypes = {
  collapsed: propTypes.bool.isRequired,
}

Logo.defaultProps = {
}
