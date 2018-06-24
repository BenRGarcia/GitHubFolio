import React from 'react';
import PropTypes from 'prop-types';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const AppRouter = ({ routes }) => (
  <Router>
    <Switch>
      {
        routes
        &&
        routes.map((route, i) => {
          const { exact, path, component } = route;
          return (
            <Route
              exact={exact}
              path={path}
              render={() => component}
              key={path || i}
            />
          );
        })
      }
    </Switch>
  </Router>
);

AppRouter.propTypes = {
  routes: PropTypes.array.isRequired
};

export default AppRouter
