/**
 * 侧边导航内容
 */
import React, { Fragment } from 'react';
import is from 'is_js';
import propTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import withRouter from 'umi/withRouter';

import MyNavLink from './MyNavLink.jsx';
import Logo from './Logo.jsx';

import sidebarConfig from '../common/sidebarConfig.js';

const { SubMenu, Item } = Menu;

function getSubMenuTitle(title = {}) {
  if (is.object(title)) {
    const { icon, name } = title;
    return (
      <Fragment>
        <Icon type={icon} />
        <span>{name}</span>
      </Fragment>
    );
  }
  return title;
}

function Sidebar(props) {
  const { collapsed, location } = props;
  const { pathname } = location;

  const menuItemEle = sidebarConfig
    .filter(r => !r.hide)
    .map((r, i) => {
      const { title, subMenus } = r;
      const key = i;
      const subTitle = getSubMenuTitle(title);
      if (subMenus) {
        return (
          <SubMenu title={subTitle} key={key}>
            {subMenus.map((s, j) => (
              <Item key={j}>
                <MyNavLink route={s} />
              </Item>
            ))}
          </SubMenu>
        )
      }
      return <Item key={key}><MyNavLink route={r} /></Item>;
    });

  return (
    <section>
      <Logo collapsed={collapsed} />
      <Menu
        theme="dark"
        mode="vertical"
        selectedKeys={[pathname]}
      >
        {menuItemEle}
      </Menu>
    </section>
  );
}

Sidebar.propTypes = {
  collapsed: propTypes.bool.isRequired,
  location: propTypes.object.isRequired,
}

Sidebar.defaultProps = {
}

export default withRouter(Sidebar);
