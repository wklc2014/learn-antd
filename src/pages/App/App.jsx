import React from 'react';
import { connect, Router, Route, Switch } from 'mirrorx';

import MainLayout from '../MainLayout/Index.jsx';
import Loading from '../Loading/Index.jsx';

import DemoForm from '../Demo/DemoForm.jsx';
import DemoFormLayout from '../Demo/DemoFormLayout.jsx';
import DemoFormItem from '../Demo/DemoFormItem.jsx';
// import DemoSummaryTable from '../Demo/DemoSummaryTable.jsx';
// import DemoPicture from '../Demo/DemoPicture.jsx';
// import DemoDetail from '../Demo/DemoDetail.jsx';

function App (props) {
  // <Route path="/summaryTable" component={ DemoKSummaryTable } />

  // <Route path="/picture" component={ DemoKPicture } />
  // <Route path="/detail" component={ DemoKDetail } />
  return (
    <Router>
      <Loading>
        <MainLayout>
          <Switch>
            <Route path="/demo/form" component={ DemoForm } />
            <Route path="/demo/formLayout" component={ DemoFormLayout } />
            <Route path="/demo/formItem" component={ DemoFormItem } />
          </Switch>
        </MainLayout>
      </Loading>
    </Router>
  )
};

function mapStateToProps(state, ownProps) {
  return {

  }
}

export default connect(mapStateToProps)(App);