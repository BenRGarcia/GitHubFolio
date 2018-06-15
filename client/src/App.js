import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import {DashboardPage} from "./pages/Dashboard/dashboardPage";
import HomePage from "./pages/Home/homePage";
import PublicViewPage from "./pages/PublicView/publicView";
import {HelloWorld} from "./components/HelloWorld.js";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route exact path="/portfolio/:id" component={PublicViewPage} />
        <Route component={HelloWorld} />
      </Switch>
    </div>
  </Router>
);

export default App;
