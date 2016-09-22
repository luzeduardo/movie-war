import React from 'react';
import ReactDOM from 'react-dom';
import movieApp from './reducers/index'
import {createStore} from 'redux';

import App from './App';
import './index.css';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
