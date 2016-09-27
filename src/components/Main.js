import React from 'react';
import MovieList from './MovieList'
import MovieSearch from './MovieSearch'

const Main = () => (
  <div className="container is-fluid">
      <button onClick={this.props.incrementMovie.bind(null, 1)}></button>
      <MovieSearch />
      <MovieList />
  </div>
)

export default Main;
