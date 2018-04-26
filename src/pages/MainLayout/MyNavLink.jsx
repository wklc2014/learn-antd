import React from 'react';
import propTypes from 'prop-types';
import { Icon } from 'antd';
import { NavLink, withRouter } from 'mirrorx';

import KDisplay from '../../components/KDisplay/KDisplay.jsx';

const MyNavLink = ({ route = {}, location }) => {

  const { pathname } = location;

  const { icon, className, path, label } = route;

  return (
    <NavLink to={path} replace={path === pathname}>
      <KDisplay condition={icon}>
        <Icon type={icon} />
      </KDisplay>
      <KDisplay condition={className}>
        <span className={className} />
      </KDisplay>
      <span>{label}</span>
    </NavLink>
  );
}

MyNavLink.propTypes = {
  route: propTypes.object.isRequired,
}

export default withRouter(MyNavLink);
