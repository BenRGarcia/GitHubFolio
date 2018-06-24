import React, { Component } from 'react';
import { Route, } from 'react-router-dom';
import PropTypes from 'prop-types';

class DashboardRouter extends Component {
  render() {
    const { routes } = this.props
    return (
      <div>
        {
          routes
          &&
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
      </div>
    );
  }
}

DashboardRouter.propTypes = {
  routes: PropTypes.array.isRequired
};

export default DashboardRouter;
