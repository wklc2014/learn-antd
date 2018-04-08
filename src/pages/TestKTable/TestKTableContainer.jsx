import { connect } from 'mirrorx';
import TestKTable from './TestKTable.jsx';

function mapStateToProps(state, ownProps) {
  return {
    values: state._report.k_table,
  }
}

export default connect(mapStateToProps)(TestKTable);

