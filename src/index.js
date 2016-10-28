import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory} from 'react-router'

import App from './App';
import MovieSearch from './components/MovieSearch'
import SimpleMapPage from './components/SimpleMapPage'
import './index.css';

import {Provider} from 'react-redux'
import configureStore from './store'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/search" component={MovieSearch} />
        <Route path="/map" component={SimpleMapPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
