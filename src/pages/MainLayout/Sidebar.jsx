/**
 * 侧边导航内容
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink, withRouter } from 'mirrorx';
import Logo from '../../components/Logo/Logo.jsx';
import Display from '../../components/Display/Display.jsx';
import sidebarRoutes from '../../common/configs/sidebarRoutes.js';

import MyMenuItem from './MyMenuItem.jsx';

const { SubMenu } = Menu;

const Sidebar = ({ collapsed, location }) => {

  const { pathname } = location;
  console.log("pathname", pathname);

  const menuItemEle = sidebarRoutes.filter((route) => route.isSidebar).map((route, i) => {
    console.log("route", route);
    return (
      <Display condition={route.subMenus} key={i}>
        <div>
        </div>
        <MyMenuItem route={route} pathname={pathname} />
      </Display>
    );
  });

  return (
    <section>
      <Logo collapsed={collapsed} />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[ pathname ]}
      >
        { menuItemEle }
      </Menu>
    </section>
  );
};

export default withRouter(Sidebar);
