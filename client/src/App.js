import React, { Component } from 'react';
import './App.css';
import Dashboard from "./pages/Dashboard/dashboard";
import Home from "./pages/Home/home";
import PublicView from "./pages/PublicView/publicView";
import NoMatch from "./pages/NotFound/notFound";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/portfolio/:id" component={PublicView} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
