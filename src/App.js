import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {withRouter} from 'react-router';
import * as actionCreators from './actions/actionCreators'

import Main from './components/Main';

import 'bulma/css/bulma.css'
import './App.css';

const mapStateToProps = (state) => ({
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
