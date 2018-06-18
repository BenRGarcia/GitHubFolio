import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import './App.css';
import {DashboardPage} from "./pages/Dashboard/dashboardPage";
import HomePage from "./pages/Home/homePage";
import PublicViewPage from "./pages/PublicView/publicView";
import {NotFound} from "./components/NotFound/NotFound";
import { DashboardEditUser } from './components';
import { UploadImageExample } from './pages/UploadImageExample/UploadImageExample';

const fakeAuth = {
  isAuthenticated: false, 
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100) //fake async
  },
  signOut(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100) //fake async
  }
}

const Public = () => {PublicViewPage}
const Protected = () => {DashboardPage}

class Login extends React.Component{
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { redirectToReferrer } = this.state
    if (redirectToReferrer === true) {
      return <Redirect to='/' />
    }

    return (
      // <button>MELISSA LOGIN</button>
      <HomePage />
    )
  } 
}

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render = {(props) => (
    fakeAuth.isAuthenticated === true
    ? <Component {...props}/>
    : <Redirect to = '/'/>
  )}/>
)


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/dashboard" component={DashboardPage} /> */}
        <Route exact path="/portfolio/:id" component={PublicViewPage} />
        {/* Below is Ben's test component for image uploads */}
        <Route exact path="/upload/photo" component={UploadImageExample}/>
        {/* Above is Ben's test component for image uploads */}
        <PrivateRoute path='/dashboard' component={DashboardPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
