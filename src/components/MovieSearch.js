import React from 'react'

class MovieSearch extends React.Component {
  getMovies = (e) => {
    e.preventDefault();
    const movie = this.refs.movie.value.trim();
    this.props.actions.getRemoteMovies(movie);
  };

  render() {
    return (
      <div>
          <form onSubmit={e => this.getMovies(e)} ref="movieSearch">
            <p className="control has-addons">
              <input className="input" type="text" placeholder="Find a movie" ref="movie" />
              <button type="submit" className="button is-info">Search</button>
            </p>
          </form>
      </div>
    )
  }
}

export default MovieSearch;
