import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import MovieList from './MovieList';
import {reduxForm} from 'redux-form';

import { Row,TextInput,LoadingButton } from 'react-bootstrap';

class MovieSearch extends React.Component {

  getMovies = (e) => {
    e.preventDefault();
    const search = this.refs.movie.value.trim();
    this.props.actions.getRemoteMovies(search);
  };

  render() {
    const {fields: {movie}, handleSubmit} = this.props;
    return (
      <div>
          <form className="form-horizontal" onSubmit={e => this.getMovies(e)} ref="movieSearch">
            <Row>
                <input className="input" type="text" placeholder="Find a movie" ref="movie" autoFocus />

                {/* <TextInput id="movie" placeholder="Find a movie" ref="movie"/> */}
                {/* <LoadingButton bsSize="large"
                    bsStyle="primary" label="Add Travel" loading={this.props.movies.is_searching}
                    loadingLabel="Search Movie" type="submit"/> */}
            </Row>
            <Row>
              <button type="submit" className={this.props.movies.is_searching ? "button is-info is-loading" : " button is-info" }>Search</button>
            </Row>
          </form>
          <MovieList />
      </div>
    )
  }
}

MovieSearch = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'search',   // a unique name for this form
  fields: ['movie'] // all the fields in your form
})(MovieSearch);

const mapStateToProps = (state) => ({
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default (connect(mapStateToProps, mapDispatchToProps)(MovieSearch))
