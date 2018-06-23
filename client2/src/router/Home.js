import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Home, Portfolio, Dashboard, _404 } from '../pages'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/dashboard' component={Dashboard} />
      <Route exact path='/portfolio/:gitHubId' component={Portfolio} />
      <Route exact path='/404' component={_404} />
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
  </Router>
);

export default AppRouter
