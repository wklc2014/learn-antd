/**
 * logo
 */
import React from 'react';
import { Link } from 'mirrorx';

import './logo.less';

export default function Logo ({ collapsed }) {
  const text = collapsed ? 'antd' : 'learn-antd';
  return (
    <section className="LogoWraper">
      <Link to="/" className="Logo">{ text }</Link>
    </section>
  )
}
