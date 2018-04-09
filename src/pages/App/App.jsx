import React from 'react';
import { connect, Router, Route, Switch } from 'mirrorx';

import MainLayout from '../MainLayout/MainLayout.jsx';
import Loading from '../Loading/Loading.jsx';
import TestKForm from '../TestKForm/TestKFormContainer.jsx';
import TestKFormLayout from '../TestKFormLayout/TestKFormLayout.jsx';
import TestKFormItem from '../TestKFormItem/TestKFormItem.jsx';
import TestKTable from '../TestKTable/TestKTableContainer.jsx';
import TestKPicture from '../TestKPicture/TestKPicture.jsx';

// import Test from '../Test/Test.jsx';

function App (props) {
  return (
    <Router>
      <Loading>
        <MainLayout>
          <Switch>
            {/*<Route path="/" exact component={ Index } />*/}
            <Route path="/k_form" component={ TestKForm } />
            <Route path="/k_table" component={ TestKTable } />
            <Route path="/k_form_layout" component={ TestKFormLayout } />
            <Route path="/k_form_item" component={ TestKFormItem } />
            <Route path="/k_picture" component={ TestKPicture } />
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