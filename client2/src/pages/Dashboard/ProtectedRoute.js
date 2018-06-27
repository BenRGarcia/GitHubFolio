import React from "react";
import { Route, Redirect } from 'react-router-dom';

const parseJSON = resp => resp.json();

const checkAuth = {
  isAuthenticated: true,
  async checkAuthentication() {
    return fetch('/api/user/isauthenticated', { credentials: 'include' })
      .then(parseJSON)
      .then(res => {
        console.log(res)
        this.isAuthenticated = res.isAuthenticated
        console.log()
      })
      .catch(err => console.error(err))
  },
  signout(cb) {
    this.isAuthenticated = false;
  }
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log(`Before authentication check:`, checkAuth.isAuthenticated)
  checkAuth.checkAuthentication()
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
