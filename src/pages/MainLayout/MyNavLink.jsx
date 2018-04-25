import React from 'react';
import propTypes from 'prop-types';
import { Icon } from 'antd';
import { NavLink, withRouter } from 'mirrorx';

import Display from '../../components/Display/Display.jsx';

const MyNavLink = ({ route = {}, location }) => {

  const { pathname } = location;

  const { icon, className, path, label } = route;

  return (
    <NavLink to={path} replace={path === pathname}>
      <Display condition={icon}>
        <Icon type={icon} />
      </Display>
      <Display condition={className}>
        <span className={className} />
      </Display>
      <span>{label}</span>
    </NavLink>
  );
}

MyNavLink.propTypes = {
  route: propTypes.object.isRequired,
}

export default withRouter(MyNavLink);
