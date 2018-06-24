import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NotFound } from '../pages';
import PropTypes from 'prop-types';

const DashboardRouter = ({ routes }) => (
  <Switch>
    {
      routes
      &&
      routes.map((route, i) => {
        const { exact, path, component } = route
        return (
          < Route
            exact={exact}
            path={path}
            render={() => component}
            key={path || i}
          />
        )
      })
    }
    <Route exact path='/dashboard/404' component={NotFound} />
    <Route render={() => <Redirect to='/dashboard/404' />} />
  </Switch>
);

DashboardRouter.propTypes = {
  routes: PropTypes.array.isRequired
};

export default DashboardRouter;
