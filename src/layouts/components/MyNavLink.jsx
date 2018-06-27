import React from 'react';
import propTypes from 'prop-types';
import { Icon } from 'antd';
import NavLink from 'umi/navlink';
import withRouter from 'umi/withRouter';

const MyNavLink = ({ route, location }) => {
  const { pathname } = location;
  const { icon, className, path, name } = route;

  return (
    <NavLink to={path} replace={path === pathname}>
      {icon && <Icon type={icon} />}
      {className && <Icon type={className} />}
      <span>{name}</span>
    </NavLink>
  );
}

MyNavLink.propTypes = {
  route: propTypes.object.isRequired,
  location: propTypes.object.isRequired,
}

export default withRouter(MyNavLink);
