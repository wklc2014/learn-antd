/**
 * 侧边导航内容
 */
import React, { Component } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'mirrorx';

import Logo from '../../components/Logo/Logo.jsx';
import MyNavLink from './MyNavLink.jsx';

import sidebarRoutes from '../../common/configs/sidebarRoutes.js';

const { SubMenu, Item } = Menu;

class Sidebar extends Component {
  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      openKeys: ['0'],
    }
  }

  onOpenChange = (openKeys) => {
    this.setState({ openKeys });
  }

  render() {
    const { openKeys } = this.state;
    const { collapsed, location } = this.props;
    const { pathname } = location;

    const menuItemEle = sidebarRoutes.filter((route) => route.isSidebar).map((route, i) => {
      if (route.subMenus) {
        return (
          <SubMenu title={route.title} key={i}>
            {route.subMenus.map((r, j) => <Item key={r.path}><MyNavLink route={r} /></Item>)}
          </SubMenu>
        )
      }
      return <Item key={route.path}><MyNavLink route={route} /></Item>;
    });

    return (
      <section>
        <Logo collapsed={collapsed} />
        <Menu
          theme="dark"
          mode="inline"
          inlineCollapsed
          selectedKeys={[pathname]}
          openKeys={openKeys}
          onOpenChange={this.onOpenChange}
        >
          {menuItemEle}
        </Menu>
      </section>
    );
  }
}

export default withRouter(Sidebar);
