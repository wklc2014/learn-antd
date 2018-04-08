import React from 'react';
import { connect, Router, Route, Switch } from 'mirrorx';

import MainLayout from '../MainLayout/MainLayout.jsx';
import Loading from '../Loading/Loading.jsx';
import TestKForm from '../TestKForm/TestKFormContainer.jsx';

// import Test from '../Test/Test.jsx';

function App (props) {
  return (
    <Router>
      <Loading>
        <MainLayout>
          <Switch>
            {/*<Route path="/" exact component={ Index } />*/}
            <Route path="/k_form" component={ TestKForm } />
            {/*<Route path="/h_form_item" component={ TestHFormItem } />
            <Route path="/h_table" component={ TestHTable } />
            <Route path="/h_form_layout" component={ TestHFormLayout } />
            <Route path="/test" component={ Test } />*/}
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