/**
 * 主体布局组件
 */
import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import propTypes from 'prop-types';
import getPageTitle from './common/getPageTitle.js';

export default function Index (props) {
  const { children, location } = props;
  const { pathname } = location;

  const pageTitle = getPageTitle(pathname);

  return (
    <Fragment>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {children}
    </Fragment>
  )
}

Index.propTypes = {
  location: propTypes.object.isRequired,
}

Index.defaultProps = {
}
