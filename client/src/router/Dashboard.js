import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
    <Route exact path='/api/auth/logout' render={() => <Redirect to='/' />} />
    <Route render={() => <Redirect to='/404' />} />
  </Switch>
);

DashboardRouter.propTypes = {
  routes: PropTypes.array.isRequired
};

export default DashboardRouter;
