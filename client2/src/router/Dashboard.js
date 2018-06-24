import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const DashboardRouter = ({ routes }) => (
  <div>
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
  </div>
);

DashboardRouter.propTypes = {
  routes: PropTypes.array.isRequired
};

export default DashboardRouter;
