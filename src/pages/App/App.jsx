import React from 'react';
import { connect, Router, Route, Switch } from 'mirrorx';

import MainLayout from '../MainLayout/Index.jsx';
import Loading from '../Loading/Index.jsx';

import FormConfigInfo from '../FormConfig/FormConfigInfo.jsx';
import FormConfigExample from '../FormConfig/FormConfigExample.jsx';
import ExampleHFormItem from '../FormConfig/ExampleHFormItem.jsx';
import ExampleHFormLayout from '../FormConfig/ExampleHFormLayout.jsx';

import SummaryTableInfo from '../SummaryTable/SummaryTableInfo.jsx';
import SummaryTableExample from '../SummaryTable/SummaryTableExample.jsx';

import PictureViewInfo from '../PictureView/PictureViewInfo.jsx';
import PictureViewExample from '../PictureView/PictureViewExample.jsx';

import DetailInfo from '../DetailPage/DetailInfo.jsx';
import DetailExample from '../DetailPage/DetailExample.jsx';

import QueryExample from '../QueryPage/QueryExample.jsx';
import QueryInfo from '../QueryPage/QueryInfo.jsx';

import TestHDisplay from '../TestHDisplay/Index.jsx';

import Index from './Index.jsx';

function App (props) {
  return (
    <Router>
      <Loading>
        <Switch>
          <Route path="/" exact strict component={ Index } />
          <MainLayout>
            <Route path="/form/info" component={ FormConfigInfo } />
            <Route path="/form/demo" component={ FormConfigExample } />
            <Route path="/form/formitem" component={ ExampleHFormItem } />
            <Route path="/form/formlayout" component={ ExampleHFormLayout } />
            <Route path="/summarytable/info" component={ SummaryTableInfo } />
            <Route path="/summarytable/demo" component={ SummaryTableExample } />
            <Route path="/pictureView/info" component={ PictureViewInfo } />
            <Route path="/pictureView/demo" component={ PictureViewExample } />
            <Route path="/detail/info" component={ DetailInfo } />
            <Route path="/detail/demo" component={ DetailExample } />
            <Route path="/query/info" component={ QueryInfo } />
            <Route path="/query/demo" component={ QueryExample } />
            <Route path="/test/display" component={ TestHDisplay } />
          </MainLayout>
        </Switch>
      </Loading>
    </Router>
  )
};

function mapStateToProps(state, ownProps) {
  return {

  }
}

export default connect(mapStateToProps)(App);