/**
 * 主体布局
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import withRouter from 'umi/withRouter';

import Sidebar from './Sidebar.jsx';

const { Sider } = Layout;

class MainLayout extends Component {

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  handleCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const { collapsed } = this.state;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.handleCollapse}
        >
          <Sidebar
            collapsed={collapsed}
          />
        </Sider>
        <Layout>
          <div style={{ padding: 24 }}>
            {this.props.children}
          </div>
        </Layout>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
};

export default withRouter(MainLayout);
