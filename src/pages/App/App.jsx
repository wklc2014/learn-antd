import React from 'react';
import { connect, Router, Route, Switch } from 'mirrorx';

import MainLayout from '../MainLayout/Index.jsx';
import Loading from '../Loading/Index.jsx';

import DemoHForm from '../Demo/DemoHForm.jsx';
import DemoHFormItem from '../Demo/DemoHFormItem.jsx';
import DemoHFormLayout from '../Demo/DemoHFormLayout.jsx';
import DemoHSummaryTable from '../Demo/DemoHSummaryTable.jsx';
import DemoHDetail from '../Demo/DemoHDetail.jsx';
import DemoHPictureView from '../Demo/DemoHPictureView.jsx';

import TestHDisplay from '../TestHDisplay/Index.jsx';

function App (props) {
  return (
    <Router>
      <Loading>
        <MainLayout>
          <Switch>
            <Route path="/test/display" component={ TestHDisplay } />
            <Route path="/demo/form" component={ DemoHForm } />
            <Route path="/demo/formitem" component={ DemoHFormItem } />
            <Route path="/demo/formlayout" component={ DemoHFormLayout } />
            <Route path="/demo/summarytable" component={ DemoHSummaryTable } />
            <Route path="/demo/detail" component={ DemoHDetail } />
            <Route path="/demo/picture" component={ DemoHPictureView } />
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