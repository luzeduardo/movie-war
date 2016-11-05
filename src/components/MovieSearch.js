import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import MovieList from './MovieList';

class MovieSearch extends React.Component {

  getMovies = (e) => {
    e.preventDefault();
    const search = this.refs.movie.value.trim();
    this.props.actions.getRemoteMovies(search);
  };

  render() {
    return (
      <div>
          <form onSubmit={e => this.getMovies(e)} ref="movieSearch">
            <div className="control is-grouped">
              <div className="control">
                <input className="input" type="text" placeholder="Find a movie" ref="movie" autoFocus />
              </div>
              <div className="control">
                <button type="submit" className={this.props.movies.is_searching ? "button is-info is-loading" : " button is-info" }>Search</button>
              </div>
            </div>
          </form>

          <MovieList />
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

export default (connect(mapStateToProps, mapDispatchToProps)(MovieSearch))
