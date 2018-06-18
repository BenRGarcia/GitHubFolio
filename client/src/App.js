// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
// import './App.css';
// import {DashboardPage} from "./pages/Dashboard/dashboardPage";
// import HomePage from "./pages/Home/homePage";
// import PublicViewPage from "./pages/PublicView/publicView";
// import {NotFound} from "./components/NotFound/NotFound";
// import { DashboardEditUser } from './components';
// import { UploadImageExample } from './pages/UploadImageExample/UploadImageExample';

// const fakeAuth = {
//   isAuthenticated: false, 
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100) //fake async
//   },
//   signOut(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100) //fake async
//   }
// }

// const Public = () => {PublicViewPage}
// const Protected = () => {DashboardPage}

// class Login extends React.Component{
//   state = {
//     redirectToReferrer: false
//   }

//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true
//       }))
//     })
//     console.log("TESTING")
//     console.log(this.state);
//   }

//   render() {
//     const { redirectToReferrer } = this.state
//     if (redirectToReferrer === true) {
//       return <Redirect to='/dashboard' />
//     }

//     return (
//       <HomePage login={this.login}/>
//     )
//   } 
// }

// const PrivateRoute = ({ component: Component, ...rest}) => (
//   <Route {...rest} render = {(props) => (
//     fakeAuth.isAuthenticated === true
//     ? <Component {...props}/>
//     : <Redirect to = '/'/>
//   )}/>
// )


// const App = () => (
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         {/* <Route path="/dashboard" component={DashboardPage} /> */}
//         <Route exact path="/portfolio/:id" component={PublicViewPage} />
//         {/* Below is Ben's test component for image uploads */}
//         <Route exact path="/upload/photo" component={UploadImageExample}/>
//         {/* Above is Ben's test component for image uploads */}
//         <PrivateRoute path='/dashboard' component={DashboardPage} />
//         <Route component={NotFound} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default App;


import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;