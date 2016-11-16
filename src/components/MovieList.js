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
    const list = this.state.list.length;
    return(
      <div>
        <label><strong>{this.props.movies.search}</strong></label>
        <div>
          {this.state.list.map( (movie, index) => {
              return (
                <Movie key={index} Title={movie.Title} Type={movie.Type}/>
              )}
           )}
           {list === 0 ? <EmptyList list={list}/> : null }
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
