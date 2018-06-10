import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
require('./vendor/bootstrap/bootstrap.min.css');
require('bootstrap');

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})

ReactDOM.render(<App />, document.getElementById('root'));
