import React from 'react';
import MovieList from './MovieList'
import MovieSearch from './MovieSearch'

const Main = () => (
  <div className="container is-fluid">
      <MovieSearch />
      <MovieList />
  </div>
)

export default Main;
