import React, { Component } from 'react';
import './App.css';
import AppRouter from './router/Home';

class App extends Component {
  render() {
    return (
      <div className='text-center'>
        <AppRouter />
      </div>
    );
  }
}

export default App;
