import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from './store/store';
// eslint-disable-next-line
import $ from 'jquery';
require('./vendor/bootstrap/bootstrap.min.css');
require('bootstrap');

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
