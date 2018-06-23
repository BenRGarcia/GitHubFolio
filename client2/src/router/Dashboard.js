import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { _404 } from '../pages';

const DashboardRouter = ({ routes }) => (
  <Router>
    <Switch>
      {
        routes.map(route => {
          const { exact, path, component } = route
          return (
            < Route
              exact={exact}
              path={path}
              render={() => component}
              key={path}
            />
          )
        })
      }
      <Route exact path='/dashboard/404' component={_404} />
      <Route render={() => <Redirect to="/dashboard/404" />} />
    </Switch>
  </Router>
);

DashboardRouter.propTypes = {
  routes: PropTypes.array.isRequired
}

export default DashboardRouter
