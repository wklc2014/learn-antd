import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/index.js';

function Layouts({ children }) {
  return (
    <div>
      <Route path="/" exact component={Home} />
    </div>
  )
}

const App = props => (
  <Router>
    <Layouts />
  </Router>
);

export default App;
