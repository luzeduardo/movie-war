import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import MovieList from './MovieList';

import { Row,TextInput,LoadingButton } from 'react-bootstrap';

class MovieSearch extends React.Component {

  getMovies = (e) => {
    e.preventDefault();
    const search = this.refs.movie.value.trim();
    this.props.actions.getRemoteMovies(search);
  };

  render() {
    return (
      <div>
          <form className="form-horizontal" onSubmit={e => this.getMovies(e)} ref="movieSearch">
            <Row>
                <TextInput id="movie" placeholder="Find a movie" ref="movie"/>
                <LoadingButton bsSize="large"
                    bsStyle="primary" label="Add Travel" loading={this.props.movies.is_searching}
                    loadingLabel="Search Movie" type="submit"/>
            </Row>
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
