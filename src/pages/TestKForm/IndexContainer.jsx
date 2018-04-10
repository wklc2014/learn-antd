import mirror, { connect } from 'mirrorx';
import TestKForm from './Index.jsx'

mirror.hook((action, getState) => {
  // console.log('state', getState());
})

function mapStateToProps(state, ownProps) {
  return {
    values: state._report.k_form,
  }
}

export default connect(mapStateToProps)(TestKForm);

