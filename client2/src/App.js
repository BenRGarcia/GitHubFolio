import React, { Component } from 'react';
import './App.css';
import AppRouter from './router/App';
import routes from './router/Routes';

class App extends Component {
  render() {
    return (
      <div className='text-center'>
        <AppRouter
          routes={routes.app}
        />
      </div>
    );
  }
}

export default App;
