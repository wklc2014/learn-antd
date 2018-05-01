import React from 'react';
import { connect, Router, Route, Switch } from 'mirrorx';

import MainLayout from '../MainLayout/Index.jsx';
import Loading from '../Loading/Index.jsx';

import DemoKForm from '../Demo/DemoKForm.jsx';
import DemoKFormLayout from '../Demo/DemoKFormLayout.jsx';
import DemoKFormItem from '../Demo/DemoKFormItem.jsx';
import DemoKSummaryTable from '../Demo/DemoKSummaryTable.jsx';
import DemoKPicture from '../Demo/DemoKPicture.jsx';
import DemoKDetail from '../Demo/DemoKDetail.jsx';

function App (props) {
  return (
    <Router>
      <Loading>
        <MainLayout>
          <Switch>
            <Route path="/form" component={ DemoKForm } />
            <Route path="/summaryTable" component={ DemoKSummaryTable } />
            <Route path="/formLayout" component={ DemoKFormLayout } />
            <Route path="/formItem" component={ DemoKFormItem } />
            <Route path="/picture" component={ DemoKPicture } />
            <Route path="/detail" component={ DemoKDetail } />
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