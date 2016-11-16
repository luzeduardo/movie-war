import React from 'react'
import Movie from './Movie'
import EmptyList from './EmptyList'
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
    const seek = this.state.seek;
    return(
      <div>
        <div>
          {this.state.list.map( (movie, index) => {
              return (
                <Movie key={index} Title={movie.Title} Type={movie.Type}
                Year={movie.Year} Poster={movie.Poster}/>
              )}
           )}
           {seek === true && this.state.list.length === 0 ? <EmptyList/> : null }
         </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
export { MovieList as PureMovieList };
