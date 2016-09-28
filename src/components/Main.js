import React from 'react';
import MovieList from './MovieList'
import MovieSearch from './MovieSearch'

export default class Main extends React.Component {
  render() {
    return (
      <div className="container is-fluid">
          <MovieSearch {...this.props}/>
          <MovieList />
      </div>
    )
  }
}
