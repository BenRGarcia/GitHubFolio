import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {
  DashboardGetRepos,
  DashboardEditRepos,
  DashboardTemplates,
  DashboardEditUser,
  DashboardPreview
} from '../pages/Dashboard';
import { _404 } from '../pages';

const DashboardRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/dashboard' component={DashboardGetRepos} />
      <Route exact path='/dashboard/templates' component={DashboardTemplates} />
      <Route exact path='/dashboard/edituser' component={DashboardEditUser} />
      <Route exact path='/dashboard/editrepos' component={DashboardEditRepos} />
      <Route exact path='/dashboard/preview' component={DashboardPreview} />
      <Route exact path='/dashboard/404' component={_404} />
      <Route render={() => <Redirect to="/dashboard/404" />} />
    </Switch>
  </Router>
);

export default DashboardRouter
