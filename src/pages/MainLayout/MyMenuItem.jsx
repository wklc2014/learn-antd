import React from 'react';
import propTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { NavLink } from 'mirrorx';

export default function MyMenuItem ({ route, pathname }) {
  console.log("route", route);

  const iconEle = route.icon ? <Icon type={ route.icon } /> : null;

  const spanEle = route.className ? <span className={`${route.className}`} /> : null;

  return (
    <Menu.Item key={route.path}>
        <NavLink to={route.path} replace={route.path === pathname}>
          { iconEle }
          { spanEle }
          <span>{ route.label }</span>
        </NavLink>
    </Menu.Item>
  );
}

MyMenuItem.propTypes = {
  route: propTypes.object.isRequired,
  pathname: propTypes.string,
}

