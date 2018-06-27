/* eslint-disable */
/**
 * 高阶组件
 * 设置页面标题
 */
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import getPageTitle from '../common/getPageTitle.js';

function getDisplayName(component) {
  const { displayName, name } = component;
  return displayName || name || 'Component';
}

export default function withTitle(WrappedComponent) {
  return class HOC extends Component {

    render() {
      const { location } = this.props;
      const { pathname } = location;
      const pageTitle = getPageTitle(pathname);
      return (
        <Fragment>
          <Helmet>
            <title>{pageTitle}</title>
          </Helmet>
          <WrappedComponent {...this.props}/>
        </Fragment>
      )
    }
  }
}
