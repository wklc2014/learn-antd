import React from 'react';
import { connect, Router, Route, Switch } from 'mirrorx';

import MainLayout from '../MainLayout/Index.jsx';
import Loading from '../Loading/Index.jsx';
import TestKForm from '../TestKForm/Index.jsx';
import TestKFormLayout from '../TestKFormLayout/Index.jsx';
import TestKFormItem from '../TestKFormItem/Index.jsx';
import TestKSummaryTable from '../TestKSummaryTable/Index.jsx';
import TestKPicture from '../TestKPicture/Index.jsx';
import TestAjax from '../TestAjax/Index.jsx';

function App (props) {
  return (
    <Router>
      <Loading>
        <MainLayout>
          <Switch>
            <Route path="/form" component={ TestKForm } />
            <Route path="/summaryTable" component={ TestKSummaryTable } />
            <Route path="/formLayout" component={ TestKFormLayout } />
            <Route path="/formItem" component={ TestKFormItem } />
            <Route path="/picture" component={ TestKPicture } />
            <Route path="/ajax" component={ TestAjax } />
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