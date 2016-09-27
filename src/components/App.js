import React from 'react';
import {connect} from 'react-redux'
import * as action from '../actions/actionCreators'

import Main from './Main'

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
