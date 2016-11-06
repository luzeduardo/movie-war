import React from 'react'
import Movie from './Movie'
import _ from 'lodash';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators'

class MovieList extends React.Component {

  componentWillMount(){
      this.props.movies.list = _.values(this.props.movies.list = []);
  }

  render(){
    return(
      <div>
        {this.props.movies.list.map( (movie, index) => {
            return (
              <Movie key={index} movie={movie}/>
            )}
         )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default (connect(mapStateToProps, mapDispatchToProps)(MovieList))
