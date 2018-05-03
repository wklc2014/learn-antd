import React from 'react';
import { connect, Router, Route, Switch } from 'mirrorx';

import MainLayout from '../MainLayout/Index.jsx';
import Loading from '../Loading/Index.jsx';

import DemoForm from '../Demo/DemoForm.jsx';
import DemoFormLayout from '../Demo/DemoFormLayout.jsx';
import DemoFormItem from '../Demo/DemoFormItem.jsx';
import DemoSummaryTable from '../Demo/DemoSummaryTable.jsx';
import DemoPicture from '../Demo/DemoPicture.jsx';
import DemoDetail from '../Demo/DemoDetail.jsx';

function App (props) {
  return (
    <Router>
      <Loading>
        <MainLayout>
          <Switch>
            <Route path="/demo/form" component={ DemoForm } />
            <Route path="/demo/formLayout" component={ DemoFormLayout } />
            <Route path="/demo/formItem" component={ DemoFormItem } />
            <Route path="/demo/summaryTable" component={ DemoSummaryTable } />
            <Route path="/demo/picture" component={ DemoPicture } />
            <Route path="/demo/detail" component={ DemoDetail } />
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