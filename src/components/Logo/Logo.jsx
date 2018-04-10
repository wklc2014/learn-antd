/**
 * logo
 */
import { Link } from 'mirrorx';
import React from 'react';
import './logo.less';

export default function Logo ({ collapsed }) {
  const text = collapsed ? 'antd' : 'learn-antd';
  return (
    <section className="LogoWraper">
      <Link to="/" className="Logo">{ text }</Link>
    </section>
  )
}
