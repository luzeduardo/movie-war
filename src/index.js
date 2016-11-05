import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './App';
import MovieSearch from './components/MovieSearch'
import MovieList from './components/MovieList'
import Main from './components/Main'
import './index.css';

import {Provider} from 'react-redux'
import configureStore from './store'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="/search" component={MovieSearch} />
        <Route path="/movies" component={MovieList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
