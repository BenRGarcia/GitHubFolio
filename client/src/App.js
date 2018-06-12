import React, { Component } from 'react';
import './App.css';
import Dashboard from "./pages/Dashboard/dashboardPage";
import HomePage from "./pages/Home/homePage";
import PublicViewPage from "./pages/PublicView/publicView";
import {HelloWorld} from "./components/HelloWorld.js";
import {NavBar} from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Wrapper } from './components/Wrapper/Wrapper';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/portfolio/:id" component={PublicViewPage} />
        <Route component={HelloWorld} />
      </Switch>
    </div>
  </Router>
);

export default App;
