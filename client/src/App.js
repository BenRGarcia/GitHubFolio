import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import './App.css';
import {DashboardPage} from "./pages/Dashboard/dashboardPage";
import HomePage from "./pages/Home/homePage";
import PublicViewPage from "./pages/PublicView/publicView";
import {NotFound} from "./components/NotFound/NotFound";
import { DashboardEditUser } from './components';
import { UploadImageExample } from './pages/UploadImageExample/UploadImageExample';
import ComposedComponent from './components/Authentication/Authentication'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dashboard" component={ComposedComponent(DashboardPage)} />
        <Route exact path="/portfolio/:id" component={PublicViewPage} />
        {/* Below is Ben's test component for image uploads */}
        <Route exact path="/upload/photo" component={UploadImageExample}/>
        {/* Above is Ben's test component for image uploads */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;