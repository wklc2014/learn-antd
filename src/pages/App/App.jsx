import React from 'react';
import { connect, Router, Route, Switch } from 'mirrorx';

import MainLayout from '../MainLayout/Index.jsx';
import Loading from '../Loading/Index.jsx';
import TestKForm from '../TestKForm/Index.jsx';
import TestKFormLayout from '../TestKFormLayout/Index.jsx';
import TestKFormItem from '../TestKFormItem/Index.jsx';
import TestKTotalTable from '../TestKTotalTable/Index.jsx';
import TestKPicture from '../TestKPicture/Index.jsx';
import TestAjax from '../TestAjax/Index.jsx';

function App (props) {
  return (
    <Router>
      <Loading>
        <MainLayout>
          <Switch>
            <Route path="/k_form" component={ TestKForm } />
            <Route path="/k_total_table" component={ TestKTotalTable } />
            <Route path="/k_form_layout" component={ TestKFormLayout } />
            <Route path="/k_form_item" component={ TestKFormItem } />
            <Route path="/k_picture" component={ TestKPicture } />
            <Route path="/k_ajax" component={ TestAjax } />
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