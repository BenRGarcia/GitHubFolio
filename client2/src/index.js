import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// eslint-disable-next-line
import $ from 'jquery';
require('./vendor/bootstrap/bootstrap.min.css');
require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));