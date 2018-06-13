import React, { Component } from 'react';
import './App.css';
import Dashboard from "./pages/Dashboard/dashboardPage";
import {DashboardEdit} from "./components/DashboardEdit/DashboardEdit";
import HomePage from "./pages/Home/homePage";
import PublicViewPage from "./pages/PublicView/publicView";
import {HelloWorld} from "./components/HelloWorld.js";
import {NavBar} from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Wrapper } from './components/Wrapper/Wrapper';
import { TempNavBar } from "./components/TempNavBar/TempNavBar";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/portfolio/:id" component={PublicViewPage} />
        <Route component={HelloWorld} />
      </Switch>
    </div>
  </Router>
);

export default App;
