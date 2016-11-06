import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import {connect} from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
});
