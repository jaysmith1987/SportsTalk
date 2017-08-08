import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import About from './basketball';
import Football from './football';
import Baseball from './baseball';
import NotFound from './notfound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;