import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import $ from 'jquery';
import store from './store/store.js';

require('./vendor/bootstrap/bootstrap.min.css');
require('bootstrap');


render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
