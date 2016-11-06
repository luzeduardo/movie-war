import React from 'react'
import Movie from './Movie'
import _ from 'lodash';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators'

class MovieList extends React.Component {

  componentWillMount(){
      this.state = {
        list: _.values(this.props.movies.list)
      }
  }

  componentWillReceiveProps(props){
    this.state = {
      list: _.values(props.movies.list)
    }
  }

  render(){
    return(
      <div>
        <label>{this.props.movies.search}</label>
        {this.state.list.map( (movie, index) => {
            return (
              <Movie key={index} name={movie.name} type={movie.type}/>
            )}
         )}
      </div>
    )
  }
}

MovieList.propTypes = {
  movies: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default (connect(mapStateToProps, mapDispatchToProps)(MovieList))
