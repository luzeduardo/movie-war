import React from 'react';
import MovieList from './MovieList'
import MovieSearch from './MovieSearch'

class Main extends React.Component {
  render() {
    return (
      <div className="container is-fluid">
          <MovieSearch />
          <MovieList />
      </div>
    )
  }
}

export default Main;
