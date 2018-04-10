import { connect } from 'mirrorx';
import TestKTable from './Index.jsx';

function mapStateToProps(state, ownProps) {
  return {
    values: state._report.k_table,
  }
}

export default connect(mapStateToProps)(TestKTable);

