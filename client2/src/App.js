import React, { Component } from 'react';
import './App.css';
import AppRouter from './router/App';
import routes from './router/Routes';

const style = {
  uniformHeight: {
    minHeight: '100vh'
  }
}

class App extends Component {
  render() {
    return (
      <div className='text-center'>
        <div class="jumbotron jumbotron-fluid bg-secondary">
          <div class="container text-white">
            <h1 class="display-4">
              Introducing GitHubFolio
            </h1>
            <p class="lead">
              Create a beautiful portolio to showcase your best work with GitGubFolio.
            </p>
            <a href="/" className='btn btn-light'>
              Sign in with GitHub
            </a>
          </div>
        </div>
      <div className='bg-light'>
        <div className='container'>
          <h2>Beautiful portfolio themes</h2>
        </div>
      </div>
      <div className='bg-secondary'>
        <div className='container'>
          <h2>Everything you need for your online portfolio</h2>
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
              <ul className='list-group'>
                <li className='list-group-item'>
                  Things that GitHub does to your things and so on...etc
                </li>
                <li className='list-group-item'>
                  We have templates and such.... yeeeehaw
                </li>
                <li className='list-group-item'>
                  This is a pencil writing on paper... you know what that means
                </li>
                <li className='list-group-item'>
                  Pencil wrench cross... some kind of teacher mechanic cult
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AppRouter routes={routes.app} />
      </div>
    );
  }
}

export default App;
