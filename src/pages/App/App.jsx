import React from 'react';
import { connect, Router, Route, Switch } from 'mirrorx';

import MainLayout from '../MainLayout/Index.jsx';
import Loading from '../Loading/Index.jsx';

import DemoHForm from '../Demo/DemoHForm.jsx';
import DemoHFormLayout from '../Demo/DemoHFormLayout.jsx';
import DemoHFormItem from '../Demo/DemoHFormItem.jsx';
import DemoHSummaryTable from '../Demo/DemoHSummaryTable.jsx';
import DemoHPicture from '../Demo/DemoHPicture.jsx';
import DemoHDetail from '../Demo/DemoHDetail.jsx';

function App (props) {
  return (
    <Router>
      <Loading>
        <MainLayout>
          <Switch>
            <Route path="/form" component={ DemoHForm } />
            <Route path="/formItem" component={ DemoHFormItem } />
            <Route path="/formLayout" component={ DemoHFormLayout } />
            <Route path="/summaryTable" component={ DemoHSummaryTable } />
            <Route path="/picture" component={ DemoHPicture } />
            <Route path="/detail" component={ DemoHDetail } />
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