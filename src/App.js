import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import * as actionCreators from './actions/actionCreators'

import 'bulma/css/bulma.css'
import './App.css';

import Main from './components/Main'

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
