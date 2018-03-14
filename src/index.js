import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './settings/store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/Home/home';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>
  , document.getElementById('root'));
