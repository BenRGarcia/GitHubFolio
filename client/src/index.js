import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from './App';
// eslint-disable-next-line
import $ from 'jquery';
import store from "./store/store";

require('./vendor/bootstrap/bootstrap.min.css');
require('bootstrap');

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
