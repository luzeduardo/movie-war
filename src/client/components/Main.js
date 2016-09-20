import React from 'react';
import MovieList from './MovieList'
import MovieSearch from './MovieSearch'

class Main extends React.Component {
  render(){
    return (
      <div className="columns is-mobile">
        <div className="column">

          <MovieSearch />
          <MovieList />

        </div>
      </div>
  )
  }
}

export default Main;
