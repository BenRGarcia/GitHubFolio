import React, { Component } from 'react';
import './App.css';
import AppRouter from './router/Home';

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;
