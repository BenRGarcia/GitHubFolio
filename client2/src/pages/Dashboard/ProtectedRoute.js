import React from "react";
import { Route, Redirect } from 'react-router-dom';

const parseJSON = resp => {
  const response = resp.json()
  console.log(`Here's the server isAuthenticated response:\n`, JSON.stringify(response))
  return response;
};

const checkAuth = {
  isAuthenticated: true,
  checkAuthentication() {
    return fetch('/api/user/isauthenticated', { credentials: 'include' })
      .then(parseJSON)
      .then(res => this.isAuthenticated = res.isAuthenticated )
      .catch(err => console.error(err))
  },
  signout(cb) {
    this.isAuthenticated = false;
  }
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return <Route
    {...rest}
    render={props => {
      return checkAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/' />
    }}
  />
};

export default ProtectedRoute;
