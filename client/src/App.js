import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import {DashboardPage} from "./pages/Dashboard/dashboardPage";
import HomePage from "./pages/Home/homePage";
import PublicViewPage from "./pages/PublicView/publicView";
import {NotFound} from "./components/NotFound/NotFound";
import { DashboardEditUser } from './components';
import UserInfo from './components/DashboardEditUser/DashboardEditUser';


const App = () => (
  // <Router>
  //   <div>
  //     <Switch>
  //       <Route exact path="/" component={HomePage} />
  //       <Route path="/dashboard" component={DashboardPage} />
  //       <Route exact path="/portfolio/:id" component={PublicViewPage} />
  //       <Route component={NotFound} />
  //     </Switch>
  //   </div>
  // </Router>
  <UserInfo />
);

export default App;
