import React from 'react';
import { connect, Router, Route, Switch } from 'mirrorx';

import MainLayout from '../MainLayout/Index.jsx';
import Loading from '../Loading/Index.jsx';
import TestKForm from '../TestKForm/IndexContainer.jsx';
import TestKFormLayout from '../TestKFormLayout/Index.jsx';
import TestKFormItem from '../TestKFormItem/Index.jsx';
import TestKTable from '../TestKTable/IndexContainer.jsx';
import TestKPicture from '../TestKPicture/Index.jsx';
import TestKSearch from '../TestKSearch/Index.jsx';

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
            <Route path="/k_search" component={ TestKSearch } />
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