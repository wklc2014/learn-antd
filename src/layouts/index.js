/**
 * 主体布局组件
 */
import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import propTypes from 'prop-types';
import getPageTitleByPathname from './common/getPageTitleByPathname.js';

export default function Index (props) {
  const { children, location } = props;
  const { pathname } = location;

  const page_title = getPageTitleByPathname(pathname);

  return (
    <Fragment>
      <Helmet>
        <title>{page_title}</title>
      </Helmet>
      {children}
    </Fragment>
  )
}

Index.propTypes = {
  location: propTypes.object,
}

Index.defaultProps = {
  location: {},
}
