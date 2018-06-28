/**
 * 主体布局组件
 */
import propTypes from 'prop-types';

import withTitle from './components/withTitle.js';
import MainLayout from './components/MainLayout.jsx';

function Index(props) {
  const { location, children } = props;
  const { pathname } = location;

  switch (pathname) {
    case '/example':
      return <MainLayout {...props} />;
    case '/':
    default:
      return children;
  }
}

Index.propTypes = {
  location: propTypes.object.isRequired,
}

Index.defaultProps = {
}

export default withTitle(Index);
