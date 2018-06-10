import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HelloWorldContainer } from './containers/HelloWorldContainer';

class App extends Component {
  render() {
    return (
      <HelloWorldContainer />
    );
  }
}

export default App;
