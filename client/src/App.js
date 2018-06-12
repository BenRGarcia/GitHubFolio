import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DashboardContainer } from './containers/DashboardContainer';

class App extends Component {
  render() {
    return (
      <DashboardContainer />
    );
  }
}

export default App;
